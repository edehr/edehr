// noinspection DuplicatedCode
import {  updateAllVisitTime,  visitTimeInEhrData} from './ehr-data-model-utils'
import { decoupleObject } from './common-utils'
import {
  updateMedicationRoute
} from './med-definitions/med-ehrData-upgrade-utils'

/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */

export default class EhrDataModel {
  constructor (ehrData) {
    this.loadEhrData(ehrData)
  }
  loadEhrData (ehrData) {
    // decouple so this constructor can be used inside a Vuex store (can't modify any of its data)
    this._ehrData = decoupleObject(ehrData)
    // updata meta including simTime
    this._updateEhrDataMeta()
    this.updateEhrDataToLatestFormat()
  }

  _updateEhrDataMeta () {
    const meta = this._ehrData.meta || {}
    meta.simTime = visitTimeInEhrData(this._ehrData)
    this._ehrData.meta = meta
  }
  get ehrData () {
    return this._ehrData
  }

  set ehrData (ed) {
    this._ehrData = ed
  }

  get pageKeys () {
    let keys = Object.keys(this._ehrData)
    let inx = keys.indexOf('meta')
    if (inx > -1) {
      keys.splice(inx, 1)
    }
    return keys
  }

  /**
   *
   * @returns { visitDay: num, visitTime: milTime }
   */
  get simTime () {
    const meta = this._ehrData.meta || {}
    return meta.simTime
  }

  get metaEhrVersion () {
    const meta = this._ehrData.meta || {}
    const v = /^ev(\d+)\.(\d+)\.(\d+)$/.exec(meta.ehrVersion)
    if (v === null) {
      return null
    }
    return {
      major: v[1],
      minor: v[2],
      patch: v[3]
    }
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
    return this.getPageData(pageKey)[tableKey]
  }
  getRowData (pageKey, tableKey, rowKey) {
    return this.getPageData(pageKey)[tableKey][rowKey]
  }

  updatePageFormData (pageKey, elementKey, value) {
    const pg = this._ehrData[pageKey]
    pg[elementKey] = value
  }
  updateRowElem ( pageKey, tableKey, rowIndex, elementKey, value) {
    // extract the table data, update the value in the specified row and then replace table data in main data object
    const targetData = this._ehrData[pageKey][tableKey]
    targetData[rowIndex][elementKey] = value
    this._ehrData[pageKey][tableKey] = targetData
  }

  updateDataTo2_1_0 () {
    const ehrData = updateAllVisitTime(this)
    ehrData.meta = this._ehrData.meta || {}
    ehrData.meta.ehrVersion = 'ev2.1.0'
    this.ehrData = ehrData
  }

  updateDataTo2_1_1 () {
    const ehrData = updateMedicationRoute(this)
    ehrData.meta.ehrVersion = 'ev2.1.1'
    this.ehrData = ehrData
  }

  updateEhrDataToLatestFormat () {
    let version = this.metaEhrVersion
    if (!version) {
      this.updateDataTo2_1_0()
      version = this.metaEhrVersion
    }
    if (this._checkVer(2,1,0)) {
      this.updateDataTo2_1_1()
    }
  }

  _checkVer (maj,min,pat) {
    const version = this.metaEhrVersion
    return version.major <= maj && version.minor <= min && version.patch <= pat
  }
}
