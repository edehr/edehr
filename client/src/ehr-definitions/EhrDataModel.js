// noinspection DuplicatedCode
import {
  updateAllRecHeaderIds,
  updateAllVisitTime,
  updateRecHeaderElementKeys,
  visitTimeInEhrData, visitTimeInEhrDataV2
} from './ehr-data-model-utils'
import { decoupleObject } from './common-utils'
import {
  updateMedicationRoute
} from './med-definitions/med-ehrData-upgrade-utils'

/**
 * WARNING Do not edit this code unless you are working in the ehr-workspace common
 * source directory.  Use the makeEhrV2 deploy.sh script to deploy common code
 */

export default class EhrDataModel {


  static MetaEhrVersion (ehrData) {
    const meta = ehrData.meta || {}
    const v = /^ev(\d+)\.(\d+)\.(\d+)$/.exec(meta.ehrVersion)
    if (v === null) {
      return null
    }
    return {
      major: Number.parseInt(v[1]),
      minor: Number.parseInt(v[2]),
      patch: Number.parseInt(v[3])
    }
  }
  static CurrentEhrDataVerString () {
    const theData = (new EhrDataModel({})).ehrData
    return theData.meta.ehrVersion
  }

  static CheckVer (ehrData, maj, min, pat) {
    const version = EhrDataModel.MetaEhrVersion(ehrData)
    return version && version.major >= maj && version.minor >= min && version.patch >= pat
  }

  static PrepareForDb (ehrData) {
    return (new EhrDataModel(ehrData)).ehrData
  }

  constructor (ehrData) {
    this.loadEhrData(ehrData)
  }

  loadEhrData (ehrData) {
    // decouple so this constructor can be used inside a Vuex store (can't modify any of its data)
    this._ehrData = decoupleObject(ehrData)
    this._ehrData.meta = this._ehrData.meta || {}
    this.updateEhrDataToLatestFormat()
    this._ehrData = updateAllRecHeaderIds(this._ehrData)
    this._ehrData.meta.simTime = visitTimeInEhrDataV2(this._ehrData)
  }

  get ehrData () {
    return this._ehrData
  }

  //no set ehrData. Must load via constructor

  get pageKeys () {
    let keys = Object.keys(this._ehrData)
    let inx = keys.indexOf('meta')
    if (inx > -1) {
      keys.splice(inx, 1)
    }
    return keys
  }

  get ehrVersion () {
    return EhrDataModel.MetaEhrVersion(this._ehrData)
  }

  /**
   *
   * @returns { visitDay: num, visitTime: milTime }
   */
  get simTime () {
    return (this._ehrData.meta || {}).simTime
  }

  /**
   * Get raw ehr data for given page key
   * @param pageKey
   * @returns {*}
   */
  getPageData (pageKey) {
    return this._ehrData[pageKey]
  }

  /**
   * Get a raw EHR data pageElement by elementKey
   * @param pageKey
   * @param elementKey
   * @returns {*}
   */
  getPageFormData (pageKey, elementKey) {
    return this.getPageData(pageKey)[elementKey]
  }

  hasData (pageKey) {
    return !!this.getPageData(pageKey)
  }

  getPageTableData (pageKey, tableKey) {
    return this._ehrData[pageKey][tableKey]
  }
  _updatePageTableData (pageKey, tableKey, tableData) {
    this._ehrData[pageKey][tableKey] = tableData
  }

  getRowData (pageKey, tableKey, rowKey) {
    return this.getPageData(pageKey)[tableKey][rowKey]
  }

  /**
   * Used by EhrDataModel supporting utils to perform updates
   * @param pageKey
   * @param elementKey
   * @param value
   */
  _updatePageFormData (pageKey, elementKey, value) {
    const pg = this._ehrData[pageKey]
    pg[elementKey] = value
  }

  /**
   * Used by EhrDataModel supporting utils to perform updates
   * @param pageKey
   * @param tableKey
   * @param rowIndex
   * @param elementKey
   * @param value
   */
  _updateRowElem (pageKey, tableKey, rowIndex, elementKey, value) {
    // extract the table data, update the value in the specified row and then replace table data in main data object
    const targetData = this._ehrData[pageKey][tableKey]
    targetData[rowIndex][elementKey] = value
    this._ehrData[pageKey][tableKey] = targetData
  }

  updateEhrDataToLatestFormat () {
    if (!EhrDataModel.CheckVer(this._ehrData, 2, 2, 0)) {
      // must update the record heard key names before updating visit times
      this._ehrData = updateRecHeaderElementKeys(this._ehrData)
      // DO NOT UPDATE VERSION YET... update version below
    }
    if (!EhrDataModel.CheckVer(this._ehrData, 2, 1, 0)) {
      this._ehrData = updateAllVisitTime(this)
      this._ehrData.meta.ehrVersion = 'ev2.1.0'
    }
    if (!EhrDataModel.CheckVer(this._ehrData, 2, 1, 1)) {
      this._ehrData = updateMedicationRoute(this)
      this._ehrData.meta.ehrVersion = 'ev2.1.1'
    }
    this._ehrData.meta.ehrVersion = 'ev2.2.0'
  }
  static IsUpToDate (ehrData) {
    return EhrDataModel.CheckVer(ehrData, 2, 2, 0)
  }

  static GenerateRowId (pageKey, tableKey, asLoadedTableData) {
    const baseKey = pageKey + '.' + tableKey + '.'
    const idKey = tableKey +'_id'
    let n = -1
    for (let i = 0; i < asLoadedTableData.length; i++) {
      let data = asLoadedTableData[i]
      let id = data[idKey]
      if (id) {
        const p = id.split('.')
        const np = Number.parseInt(p[2])
        n = isNaN(np) ? n : Math.max(n, np)
      }
    }
    n++
    return baseKey + n
  }

  static IdToParts (rowId) {
    let p = rowId ? rowId.split('.') : undefined
    return p && p.length === 3 ? { pageKey: p[0], tableKey: p[1], rowIndex: p[2] } : undefined
  }
}
