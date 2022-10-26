const EhrDefs = require('./ehr-page-defs')
const EhrTypes = require('./ehr-types')
const { convertTimeStr } = require('./ehr-def-utils')

/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */

class EhrDataModel {
  constructor (ehrData) {
    this._ehrData = ehrData
  }
  get ehrData () { return this._ehrData}
  set ehrData (ed) { this._ehrData = ed}

  get pageKeys () {
    let keys = Object.keys(this._ehrData)
    let inx = keys.indexOf('meta')
    if (inx > -1 ) {
      keys.splice(inx, 1)
    }
    return keys
  }

  get simTime () {
    const meta = this._ehrData.meta || {}
    return meta.simTime
  }

  getPageData (pageKey) {
    return this._ehrData[pageKey]
  }

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

  static updateEhrDataMeta (ehrData) {
    if (ehrData) {
      const meta = ehrData.meta || {}
      meta.simTime = _visitTimeInEhrData(ehrData)
      ehrData.meta = meta
    }
  }
}

module.exports = EhrDataModel


/*
  * Utility to process a EHR data object and find the simulation time; the largest visit day and time

currentDay = 0
currentTime = 0000
for each page
for each page table
get table definition and locate the record keys for any field with input type of visitDay or visitTime
use page key and table key to get array of ehr data
  sort the table based on the values in the visitDay and visitTime fields
  get last row
  (can assume the record header
    resides in the first part of the row.  The row may contain other fields with the input type visitTime/visitDay
    but these are ehr data.)
  let visitDay = field of last row for visitDay input type
  let visitTime = field of last row for visitType input type
  if (visitDay > currentDay)
    currentDay = visitDay
    currentTime = max of visitTime and previous currentTime
  if (visitDay === currentDay
    currentTime = max of visitTime and previous currentTime
  else
    no action
result is that currentDay and currentTime are the largest (most recent) visit time and day
*/
function _visitTimeInEhrData (ehrData) {
  let vDay = 0
  let vTime = 0
  Object.keys(EhrDefs).forEach(pageKey => {
    const ehrPageData = ehrData[pageKey]
    // console.log(pageKey, ehrPageData)
    if (ehrPageData) { // && pageKey === 'vitals') {
      const pgDef = EhrDefs[pageKey]
      // find first
      const vTimeDef = pgDef.pageChildren.find(pg => pg.inputType === EhrTypes.inputTypes.visitTime)
      const vDayDef = pgDef.pageChildren.find(pg => pg.inputType === EhrTypes.inputTypes.visitDay)
      // console.log('DATA', pageKey, ehrPageData, vTimeDef, vDayDef)
      // Only tables store simulation time; as of now. In the future may put visit time into forms.
      if (pgDef.hasGridTable && vTimeDef && vDayDef) {
        // find the tables ...
        const pgElemKeys = Object.keys(pgDef.pageElements)
        pgElemKeys.forEach(pgElemKey => {
          // get the forms and tables for the pgElemKey
          const pgElementDef = pgDef.pageElements[pgElemKey]
          // the element is either a form or a table
          if (pgElementDef.isTable && ehrPageData[pgElemKey]) {
            // .. found table now get the table data and iterate over each row
            ehrPageData[pgElemKey].forEach(row => {
              const day = Number.parseInt(row[vDayDef.elementKey])
              const time = convertTimeStr(row[vTimeDef.elementKey])
              if (day > vDay) {
                vDay = day
                vTime = time
                // console.log('up the day ', vDay, vTime, pageKey, pgElemKey)
              } else {
                if (time > vTime ) {
                  vTime = time > vTime ? time : vTime
                  // console.log('up the time ', vDay, vTime, pageKey, pgElemKey)
                }
              }
            })
          }
        })
      }
    }
  })
  // convert the resulting time to '0000' format
  let mTime = ''+vTime
  mTime = mTime.padStart(4,'0')
  return { visitDay: vDay, visitTime: mTime }
}
