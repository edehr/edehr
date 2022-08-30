import EhrDefs from './ehr-page-defs'
import EhrTypes from './ehr-types'
import { Pages } from './ehr-models'
import EhrDataModel from '../ehr-definitions/EhrDataModel'

export function updateEhrDataMeta (ehrData) {
  if (ehrData) {
    const meta = ehrData.meta || {}
    meta.simTime = _visitTimeInEhrData(ehrData)
    ehrData.meta = meta
  }
}

// The ehr time values may be stored as 00:00
export function convertTimeStr (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let time = text.replace(/:/g, '')
    let temp = Number.parseInt(time)
    result = Number.isInteger(temp) ? temp : result
  }
  return result
}
export function convertTimeStrToMilTime (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let mTime = ''+ convertTimeStr(text)
    result = mTime.padStart(4,'0')
  }
  return result
}

export function updateAllVisitTime (eData,pageDefs) {
  const model = new EhrDataModel(eData)
  const pages = new Pages(pageDefs)
  const pageList = pages.pageList
  pageList.forEach(page => {
    const pageKey = page.pageKey
    if (model.hasData(pageKey)) {
      const pChildren = page.pageChildren.filter(c => c.inputType === 'visitTime')
      pChildren.forEach(c => {
        let d = model.getPageFormData(pageKey, c.elementKey)
        if(d) {
          let val = convertTimeStrToMilTime(d)
          model.updatePageFormData(pageKey, c.elementKey, val)
        }
      })
      page.pageTables.forEach(table => {
        const children = table.children
        const timeChildren = children.filter(c => c.inputType === 'visitTime')
        const tableKey = table.elementKey
        const tableData = model.getPageTableData(pageKey, tableKey)
        if (tableData) {
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              if(elemData) {
                let val = convertTimeStrToMilTime(elemData)
                model.updateRowElem(pageKey, tableKey, rowIndex, k, val)
              }
            })
          })
        }
      })
    }
  })
  return model.ehrData
}

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

function transformVisitTime (ehrData) {
  const pages = new Pages(ehrData)
  pages.pageList.forEach( page => {
    if (page.hasData && page.hasTable) {
      let pageDef = page.pageDef
      let timeChildren = pageDef.filterPageChildrenByInputType(EhrTypes.inputTypes.visitTime)
    }
  })
  Object.keys(EhrDefs).forEach(pageKey => {
    const ehrPageData = ehrData[pageKey]
    if (ehrPageData) {
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
            })
          }
        })
      }
    }
  })
}