// noinspection DuplicatedCode

import { convertTimeStr, convertTimeStrToMilTime } from './ehr-def-utils'
import { EhrPages } from './ehr-models'
import EhrDataModel from './EhrDataModel'
import { decoupleObject } from './common-utils'

export function updateRecHeaderElementKeys (givenEhrData) {
  const ehrData = decoupleObject(givenEhrData)
  return visitAllTables(ehrData, (pageKey, tableKey, tableData) => {
    tableData.forEach(row => {
      ['name', 'profession', 'day', 'time'].forEach(key => {
        if (row[key]) {
          let newKey = tableKey + '_' + key
          row[newKey] = row[key]
          delete row[key]
        }
      })
    })
    return tableData
  })
}
export function updateAllRowIds (givenEhrData) {
  const ehrData = decoupleObject(givenEhrData)
  return visitAllTables(ehrData, (pageKey, tableKey, tableData) => {
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
          pageData[tableKey] = theTableUpdater(pageKey, tableKey, tableData)
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
  let vDay = 0
  let vTime = 0
  const rowWork = (pageKey, tableKey, row) => {
    const tKey = tableKey +'_time'
    const dKey = tableKey + '_day'
    if(!row.isDraft) {
      const day = Number.parseInt(row[dKey])
      const time = convertTimeStr(row[tKey])
      if (!isNaN(day) && day > vDay) {
        vDay = day
        vTime = time ? time : vTime
        // console.log('up the day ', vDay, vTime, pageKey, row)
      } else {
        if (time && time > vTime) {
          vTime = time > vTime ? time : vTime
          // console.log('up the time ', vDay, vTime, pageKey, row)
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
  return { visitDay: vDay, visitTime: mTime }
}
