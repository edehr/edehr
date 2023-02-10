// noinspection DuplicatedCode

import EhrDefs from '../ehr-definitions/ehr-page-defs'
import EhrTypes from '../ehr-definitions/ehr-types'
import { convertTimeStr, convertTimeStrToMilTime } from './ehr-def-utils'
import { EhrPages } from './ehr-models'

/*   _visitTimeInEhrData
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
export function visitTimeInEhrData (ehrData) {
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
              if(!row.isDraft) {
                const day = Number.parseInt(row[vDayDef.elementKey])
                const time = convertTimeStr(row[vTimeDef.elementKey])
                if (!isNaN(day) && day > vDay) {
                  vDay = day
                  vTime = time ? time : vTime
                  // console.log('up the day ', vDay, vTime, pageKey, pgElemKey)
                } else {
                  if (time && time > vTime) {
                    vTime = time > vTime ? time : vTime
                    // console.log('up the time ', vDay, vTime, pageKey, pgElemKey)
                  }
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


export function updateAllVisitTime (ehrDataModel) {
  const pages = new EhrPages()
  const pageList = pages.pageList
  pageList.forEach(page => {
    const pageKey = page.pageKey
    if (ehrDataModel.hasData(pageKey)) {
      // pChildren is an [PageChildElement]
      const pChildren = page.pageChildren.filter(c => c.inputType === 'visitTime')
      pChildren.forEach(c => {
        let d = ehrDataModel.getPageFormData(pageKey, c.elementKey)
        if(d) {
          let val = convertTimeStrToMilTime(d)
          ehrDataModel.updatePageFormData(pageKey, c.elementKey, val)
        }
      })
      // pageTables is a  [ PageTable ]
      page.pageTables.forEach(table => {
        const children = table.children
        const timeChildren = children.filter(c => c.inputType === 'visitTime')
        const tableKey = table.elementKey
        const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
        if (tableData) {
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              if(elemData) {
                let val = convertTimeStrToMilTime(elemData)
                ehrDataModel.updateRowElem(pageKey, tableKey, rowIndex, k, val)
              }
            })
          })
        }
      })
    }
  })
  return ehrDataModel.ehrData
}

