// noinspection DuplicatedCode

import { convertTimeStr, convertTimeStrToMilTime } from './ehr-def-utils'
import { EhrPages } from './ehr-models'
import EhrDataModel from './EhrDataModel'
import { decoupleObject } from './common-utils'

export function updateRowElem (ehrData, pageKey, tableKey, rowIndex, elementKey, value)
{
  // extract the table data, update the value in the specified row and then replace table data in main data object
  const targetData = ehrData[pageKey][tableKey]
  targetData[rowIndex][elementKey] = value
  ehrData[pageKey][tableKey] = targetData
  return ehrData
}

export function updateRecHeaderElementKeys (givenEhrData) {
  const ehrData = decoupleObject(givenEhrData)
  return visitAllTables(ehrData, (page, tableKey, tableData) => {
    tableData.forEach(row => {
      ['name', 'profession', 'day', 'time'].forEach(key => {
        if (row[key]) {
          let newKey = tableKey + '_' + key
          if (page.pageChildren.find( pe => pe.def.elementKey === newKey)) {
            row[newKey] = row[key]
            delete row[key]
          } else {
            if(page.pageKey !== 'careTeam' && page.pageKey !== 'medAdminRec') {
              console.log('Skip update non record header field.', page.pageKey, key)
              // console.log(JSON.stringify(page.pageChildren, null, 2))
            }
          }
        }
      })
    })
    return tableData
  })
}
export function updateAllRowIds (givenEhrData) {
  const ehrData = decoupleObject(givenEhrData)
  return visitAllTables(ehrData, (page, tableKey, tableData) => {
    const pageKey = page.pageKey
    const idKey = tableKey + '_id'
    tableData.forEach(row => {
      if (!row[idKey]) {
        row[idKey] = EhrDataModel.GenerateRowId(pageKey, tableKey, tableData)
      }
    })
    return tableData
  })
}

function visitAllTables (ehrData, theTableUpdater) {
  const pages = new EhrPages()
  pages.pageList.forEach(page => {
    const pageKey = page.pageKey
    const pageData = ehrData[pageKey]
    if (!!pageData) {
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const tableData = pageData[tableKey]
        if (!!tableData) {
          pageData[tableKey] = theTableUpdater(page, tableKey, tableData)
        }
      })
    }
  })
  return ehrData
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
          ehrDataModel._updatePageFormData(pageKey, c.elementKey, val)
        }
      })
      // pageTables is a  [ PageTable ]
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const children = table.children //array of objects {"def":{"elementKey":"table_id","inputType":"generatedId","tableColumn":0,"label":"Row id","tableCss":"row-id"}}
        const timeChildren = children.filter(c => c.inputType === 'visitTime')
        const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
        if (tableData) {
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              if(elemData) {
                let val = convertTimeStrToMilTime(elemData)
                ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, k, val)
              }
            })
          })
        }
      })
    }
  })
  return ehrDataModel.ehrData
}

/**
  * Utility to process a EHR data object and find the simulation time; the largest visit day and time
    currentDay = 0
    currentTime = 0000
    for each page
    for each page table
    for each table row
      get visit day and time
      accumulate the max day / time
 * @param ehrData
 * @returns {{visitDay: number, visitTime: string}}
 */
export function visitTimeInEhrDataV2 (ehrData) {
  const vdbg = false
  let vDay = 0
  let vTime = 0
  const rowWork = (pageKey, tableKey, row) => {
    const tKey = tableKey +'_time'
    const dKey = tableKey + '_day'
    if(!row.isDraft) {
      const rowDay = Number.parseInt(row[dKey])
      const rowTime = convertTimeStr(row[tKey])
      if (!isNaN(rowDay) && rowDay > vDay) {
        vDay = rowDay
        vTime = rowTime ? rowTime : vTime
        if (vdbg) console.log('up the day ', vDay, vTime, pageKey, row)
      } else {
        if (!isNaN(rowDay) && rowDay >= vDay && rowTime && rowTime > vTime) {
          vTime = rowTime > vTime ? rowTime : vTime
          if (vdbg) console.log('up the time ', vDay, vTime, pageKey, row)
        }
      }
    }
  }
  const pages = new EhrPages()
  pages.pageList.forEach(page => {
    const pageKey = page.pageKey
    const pageData = ehrData[pageKey]
    if (!!pageData) {
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const tableData = pageData[tableKey]
        if (!!tableData) {
          tableData.forEach(row => {
            rowWork(pageKey, tableKey, row)
          })
        }
      })
    }
  })
  // convert the found time into a string and then pad it.
  let mTime = ''+vTime
  mTime = mTime.padStart(4,'0')
  if (vdbg) console.log('DONE ', vDay, vTime)
  return { visitDay: vDay, visitTime: mTime }
}
