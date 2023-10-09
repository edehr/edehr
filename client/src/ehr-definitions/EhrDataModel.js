// noinspection DuplicatedCode
import {
  updateAllRowIds,
  updateAllVisitTime,
  updateRecHeaderElementKeys,
  visitTimeInEhrDataV2
} from './ehr-data-model-utils'
import { decoupleObject } from './common-utils'
import {
  updateMedicationRoute
} from './med-definitions/med-ehrData-upgrade-utils'
import { updateRespiratory } from './ehr-data-upgrade-utils'
import { updateWoundCaseStudy } from './ehr-data-upgrade-woundCaseStudy'
import { updateHematologyLymphocytes } from './ehr-data-upgrade-hematology'

export const CURRENT_EHR_DATA_VERSION = 'ev2.4.0'
// ev2.4.0 major change in how the student's ehrData is stored. It is now in an array of patients.

function ehrMergeEhrData (one, two) {
  one = one || {}
  two = two || {}
  let pageKeys = _ehrMergeObjectChildKeys(one, two)
  let results = {}
  pageKeys.forEach(key => {
    let pgFromOne = one[key]
    let pageFromTwo = two[key]
    let pg = {}
    if (pgFromOne && pageFromTwo) {
      pg = _ehrMergeAtPageLevel(pgFromOne, pageFromTwo)
    } else if (pgFromOne && !pageFromTwo) {
      pg = pgFromOne
    } else if (!pgFromOne && pageFromTwo) {
      pg = pageFromTwo
    }
    results[key] = _sortObjByKeys(pg)
  })
  results = _sortObjByKeys(results)
  return results

  function _ehrMergeAtPageLevel (pgFromOne, pageFromTwo) {
    let keys = _ehrMergeObjectChildKeys(pgFromOne, pageFromTwo)
    let results = {}
    keys.forEach(key => {
      let childOne = pgFromOne[key]
      let childTwo = pageFromTwo[key]
      let child
      if (childOne && childTwo) {
        // concat arrays
        if (Array.isArray(childOne) && Array.isArray(childTwo)) {
          child = childOne.concat(childTwo)
        } else {
          // take the property from the second
          child = childTwo
        }
      } else if (childOne && !childTwo) {
        child = childOne
      } else if (!childOne && childTwo) {
        child = childTwo
      }
      results[key] = child
    })
    return results
  }

  function _sortObjByKeys (obj) {
    let keys = Object.keys(obj)
    let results = {}
    keys.sort()
    keys.forEach(k => {
      results[k] = obj[k]
    })
    return results
  }

  function _ehrMergeObjectChildKeys (obj1, obj2) {
    let pages1 = Object.keys(obj1)
    let pages2 = Object.keys(obj2)
    let combined = pages1.concat(pages2)
    combined.sort()
    return combined.filter(_uniqueFilter)
  }

  function _uniqueFilter (value, index, self) {
    return self.indexOf(value) === index
  }
}


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

  static MergeTwoLevels (baseLevelData, secondLevelData) {
    return this.PrepareForDb(ehrMergeEhrData(baseLevelData, secondLevelData))
  }
  static CurrentEhrDataVerString () {
    const theData = (new EhrDataModel({})).ehrData
    return theData.meta.ehrVersion
  }
  static IsUpToDate (ehrData) {
    let cVer = this.MetaEhrVersion({meta: { ehrVersion: this.CurrentEhrDataVerString() }})
    return cVer !== null && EhrDataModel.CheckVer(ehrData, cVer.major, cVer.minor, cVer.patch)
  }

  static CheckVer (ehrData, maj, min, pat) {
    const version = EhrDataModel.MetaEhrVersion(ehrData)
    return version && version.major >= maj && version.minor >= min && version.patch >= pat
  }

  static PrepareForDb (ehrData) {
    return (new EhrDataModel(ehrData)).ehrData
  }

  static ExtractMedicalRecordNumber (ehrData) {
    const page = ehrData['demographics']
    return page ? page['mrn'] : undefined
  }
  static InsertMedicalRecordNumber (ehrData, mrn) {
    ehrData.demographics = ehrData['demographics'] || {}
    ehrData.demographics.mrn = mrn
    return ehrData
  }

  static ExtractKeyPatientData (ehrData) {
    const keyData = {}
    const dp = ehrData['demographics']
    if (dp) {
      // dateOfBirth: only useful part is the month and day
      // must combine with personAge to get current DoB
      keyData.dateOfBirth = dp.dateOfBirth
      keyData.personAge = dp.personAge
      keyData.gender = dp.gender
      keyData.mrn = dp.mrn
      keyData.phn = dp.phn
      keyData.familyName = dp.familyName ? dp.familyName.toUpperCase() : ''
      keyData.givenName = dp.givenName
    }
    return keyData
  }

  static MergeEhrData (one, two) {
    one = one || {}
    two = two || {}
    let pageKeys = _ehrMergeObjectChildKeys(one, two)
    let results = {}
    pageKeys.forEach(key => {
      let pgFromOne = one[key]
      let pageFromTwo = two[key]
      let pg = {}
      if (pgFromOne && pageFromTwo) {
        pg = _ehrMergeAtPageLevel(pgFromOne, pageFromTwo)
      } else if (pgFromOne && !pageFromTwo) {
        pg = pgFromOne
      } else if (!pgFromOne && pageFromTwo) {
        pg = pageFromTwo
      }
      results[key] = _sortObjByKeys(pg)
    })
    results = _sortObjByKeys(results)
    return results

    function _ehrMergeAtPageLevel (pgFromOne, pageFromTwo) {
      let keys = _ehrMergeObjectChildKeys(pgFromOne, pageFromTwo)
      let results = {}
      keys.forEach(key => {
        let childOne = pgFromOne[key]
        let childTwo = pageFromTwo[key]
        let child
        if (childOne && childTwo) {
          // concat arrays
          if (Array.isArray(childOne) && Array.isArray(childTwo)) {
            child = childOne.concat(childTwo)
          } else {
            // take the property from the second
            child = childTwo
          }
        } else if (childOne && !childTwo) {
          child = childOne
        } else if (!childOne && childTwo) {
          child = childTwo
        }
        results[key] = child
      })
      return results
    }

    function _sortObjByKeys (obj) {
      let keys = Object.keys(obj)
      let results = {}
      keys.sort()
      keys.forEach(k => {
        results[k] = obj[k]
      })
      return results
    }

    function _ehrMergeObjectChildKeys (obj1, obj2) {
      let pages1 = Object.keys(obj1)
      let pages2 = Object.keys(obj2)
      let combined = pages1.concat(pages2)
      combined.sort()
      return combined.filter(_uniqueFilter)
    }

    function _uniqueFilter (value, index, self) {
      return self.indexOf(value) === index
    }
  }

  constructor (ehrData) {
    this.loadEhrData(ehrData)
  }

  loadEhrData (ehrData) {
    // decouple so this constructor can be used inside a Vuex store (can't modify any of its data)
    this._ehrData = decoupleObject(ehrData)
    this._ehrData.meta = this._ehrData.meta || {}
    // update recorder headers changes element keys from name, profession, day, time to tableKey_name, etc
    // must update the record heard key names before updating visit times
    this._ehrData = updateRecHeaderElementKeys(this._ehrData)
    // update visit time convert 00:00 to 0000
    this._ehrData = updateAllVisitTime(this)

    // TODO change updateMedicationRoute to be like updateWoundCaseStudy
    // med route just updates inhaler to inhalation in med orders
    this._ehrData = updateMedicationRoute(this)

    // TODO change updateRespiratory to be like updateWoundCaseStudy
    this._ehrData = updateRespiratory(this)

    // fix a problem in the wound assessment sample case study.
    this._ehrData = updateWoundCaseStudy(this._ehrData)

    this._ehrData = updateHematologyLymphocytes(this._ehrData)

    // updateAllRowIds inserts a row id into any row that doesn't yet have one.
    // This is the preferred way to generate row ids. Insert new row and reload the whole ehr object into this model.
    // It's fast enough for the size of data sets we see.
    // Think, max 40ish pages, average 1.5 tables/pg, average 1.5 rows/table ... 90 rows to look at
    this._ehrData = updateAllRowIds(this._ehrData)
    this._ehrData.meta.simTime = visitTimeInEhrDataV2(this._ehrData)
    this._ehrData.meta.ehrVersion = CURRENT_EHR_DATA_VERSION
    // console.log('Loaded EhrDataModel', this._ehrData.meta)
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
