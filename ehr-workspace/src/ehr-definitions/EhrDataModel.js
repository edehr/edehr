// noinspection DuplicatedCode
import { updateAllRecHeaderIds, updateAllVisitTime, visitTimeInEhrData } from './ehr-data-model-utils'
import { decoupleObject } from './common-utils'
import {
  updateMedicationRoute
} from './med-definitions/med-ehrData-upgrade-utils'

/**
 * WARNING Do not edit this code unless you are working in the ehr-workspace common
 * source directory.  Use the makeEhrV2 deploy.sh script to deploy common code
 */

export const MAJOR = 2
export const MINOR = 2 // bump to 2 because introduce _id to rec headers
export const PATCH = 0
export const CurrentEhrDataVerString = function () {
  return 'ev' + MAJOR +
    '.' + MINOR +
    '.' + PATCH
}

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

  static CheckVer (ehrData, maj,min,pat) {
    const version = EhrDataModel.MetaEhrVersion(ehrData)
    return version && version.major >= maj && version.minor >= min && version.patch >= pat
  }
  static IsUpToDate (ehrData) { return EhrDataModel.CheckVer(ehrData,MAJOR,MINOR, PATCH) }

  static PrepareForDb (ehrData) { return EhrDataModel.UpdateIdsInModel(ehrData)  }

  static UpdateIdsInModel (ehrData) { return updateAllRecHeaderIds(new EhrDataModel(ehrData)) }

  constructor (ehrData) { this.loadEhrData(ehrData)  }

  loadEhrData (ehrData) {
    // decouple so this constructor can be used inside a Vuex store (can't modify any of its data)
    this._ehrData = decoupleObject(ehrData)
    // update meta including simTime
    this._updateEhrDataMeta()
    this.updateEhrDataToLatestFormat()
  }

  _updateEhrDataMeta () {
    const meta = this._ehrData.meta || {}
    meta.simTime = visitTimeInEhrData(this._ehrData)
    this._ehrData.meta = meta
  }
  get ehrData () {  return this._ehrData  }

  //no set ehrData. Must load via constructor

  get pageKeys () {
    let keys = Object.keys(this._ehrData)
    let inx = keys.indexOf('meta')
    if (inx > -1) {
      keys.splice(inx, 1)
    }
    return keys
  }

  get ehrVersion () { return EhrDataModel.MetaEhrVersion(this._ehrData)}

  /**
   *
   * @returns { visitDay: num, visitTime: milTime }
   */
  get simTime () { return (this._ehrData.meta || {}).simTime }

  /**
   * Get raw ehr data for given page key
   * @param pageKey
   * @returns {*}
   */
  getPageData (pageKey) { return this._ehrData[pageKey] }

  /**
   * Get a raw EHR data pageElement by elementKey
   * @param pageKey
   * @param elementKey
   * @returns {*}
   */
  getPageFormData (pageKey, elementKey) { return this.getPageData(pageKey)[elementKey] }

  hasData (pageKey) { return !!this.getPageData(pageKey) }

  getPageTableData (pageKey, tableKey) { return this.getPageData(pageKey)[tableKey] }

  getRowData (pageKey, tableKey, rowKey) { return this.getPageData(pageKey)[tableKey][rowKey] }

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
  _updateRowElem ( pageKey, tableKey, rowIndex, elementKey, value) {
    // extract the table data, update the value in the specified row and then replace table data in main data object
    const targetData = this._ehrData[pageKey][tableKey]
    targetData[rowIndex][elementKey] = value
    this._ehrData[pageKey][tableKey] = targetData
  }

  updateDataTo2_1_0 () {
    const ehrData = updateAllVisitTime(this)
    ehrData.meta = this._ehrData.meta || {}
    ehrData.meta.ehrVersion = 'ev2.1.0'
    this._ehrData = ehrData
  }

  updateDataTo2_1_1 () {
    const ehrData = updateMedicationRoute(this)
    ehrData.meta.ehrVersion = 'ev2.1.1'
    this._ehrData = ehrData
  }
  updateDataTo2_2_0 () {
    const ehrData = updateAllRecHeaderIds(this)
    ehrData.meta.ehrVersion = 'ev2.2.0'
    this._ehrData = ehrData
  }
  updateEhrDataToLatestFormat () {
    if (!EhrDataModel.CheckVer(this._ehrData,2,1,0)) {
      this.updateDataTo2_1_0()
    }
    if (!EhrDataModel.CheckVer(this._ehrData,2,1,1)) {
      this.updateDataTo2_1_1()
    }
    if (!EhrDataModel.CheckVer(this._ehrData,2,2,0)) {
      this.updateDataTo2_2_0()
    }
  }
}
