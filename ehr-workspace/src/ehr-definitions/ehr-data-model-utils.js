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

export function updateRecHeaderElementKeys (givenEhrData, touchCounts) {
  const ehrData = decoupleObject(givenEhrData)
  touchCounts.recHeader = 0
  return visitAllTables(ehrData, (page, tableKey, tableData) => {
    tableData.forEach(row => {
      ['name', 'profession', 'day', 'time'].forEach(key => {
        if (row[key]) {
          let newKey = tableKey + '_' + key
          if (page.pageChildren.find( pe => pe.def.elementKey === newKey)) {
            row[newKey] = row[key]
            delete row[key]
            touchCounts.recHeader++
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
export function updateAllRowIds (givenEhrData, touchCounts) {
  touchCounts.rowIds = 0
  const ehrData = decoupleObject(givenEhrData)
  return visitAllTables(ehrData, (page, tableKey, tableData) => {
    const pageKey = page.pageKey
    const idKey = tableKey + '_id'
    tableData.forEach(row => {
      if (!row[idKey]) {
        row[idKey] = EhrDataModel.GenerateRowId(pageKey, tableKey, tableData)
        touchCounts.rowIds++
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

export function updateAllVisitTime (ehrDataModel, touchCounts) {
  touchCounts.visitTime = 0
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
          touchCounts.visitTime++
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
                touchCounts.visitTime++
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

/**
 * Utility to map ehr data into time sequence.
 * Each key has a four digit day (with leading 0's) followed by a hyphen followed by a time in 2400 format.
 * For each key the value is an array of ehr data events.
 * An event needs to include the page key, table key, and row data.
 * Will need to give special consideration to tables with row that are related to other tables.
 * For example, the MAR's relation to med orders. Or hematology PBF to CBC table.
 *
 * @param ehrData
 * @returns ....
 */
export function convertToEventSequence1 (ehrData) {
  const seq = {}
  const PARKED = 'parked'
  const PAGEDATA = 'pageData'
  function makeDayStr (dVal) {
    let d = Number.parseInt(dVal)
    return Number.isInteger(d) ? String(d).padStart(4, '0') : '0'
  }
  const rowWork = (pageKey, tableKey, row) => {
    const tKey = tableKey + '_time'
    const dKey = tableKey + '_day'
    const dVal = row[dKey]
    const rowTime = row[tKey]
    const rowDay = makeDayStr(dVal)
    const key = (dVal === undefined || rowTime === undefined) ? PARKED : rowDay + '-' + rowTime
    if (PARKED === key) {
      return
    }
    let events = seq[key]
    if (!events) {
      events = []
      seq[key] = events
    }
    let eventData = {
      pKey: pageKey,
      tKey: tableKey,
      data: row
    }
    // eventData = {}
    // eventData[pageKey] = {}
    // eventData[pageKey][tableKey] = row
    events.push(eventData)
  }
  const pages = new EhrPages()
  pages.pageList.forEach(page => {
    const pageKey = page.pageKey
    const pageData = ehrData[pageKey]
    // console.log('pageData', pageKey, pageData)
    if (!!pageData) {
      /*
      Page form data is all stored at the top level.
      Need some help to collect the data into the form.

       */
      page.pageForms.forEach(form => {
        const formKey = form.elementKey
        const formData = pageData[formKey]
        if (!!formData) {
          console.log('page form data', pageKey, formKey, formData)
          let events = seq[PAGEDATA]
          if (!events) {
            events = []
            seq[PAGEDATA] = events
          }
          let eventData = {
            pKey: pageKey,
            fKey: formKey,
            data: formData
          }
          events.push(eventData)
        } else {
          // console.log('No page form data in pageData', pageKey, formKey, pageData)
        }
      })
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const tableData = pageData[tableKey]
        // console.log('tableData', tableKey, tableData)
        if (!!tableData) {
          tableData.forEach(row => {
            rowWork(pageKey, tableKey, row)
          })
        }
      })
    }
  })

  const seqOrders = Object.keys(seq).sort().reduce(
    (obj, key) => {
      obj[key] = seq[key]
      return obj
    },
    {}
  )
  // console.log('convertToEventSequence',JSON.stringify(seqOrders, null, 2))
  // console.log(JSON.stringify(Object.keys(seq)))
  let d2 = {}
  for (const key of Object.keys(seqOrders)) {
    for (const row of seqOrders[key]) {
      console.log('key is ', key, row.pKey, row.tKey, JSON.stringify(row.data))
      d2[row.pKey] = d2[row.pKey] || {}
      d2[row.pKey][row.tKey] = d2[row.pKey][row.tKey] || []
      d2[row.pKey][row.tKey].push(row.data)
      // console.log('key is ', key, JSON.stringify(row))
      // d2 = Object.assign(d2, row)
    }
  }
  // console.log('d2', JSON.stringify(d2, null, 2))
  return seq
}

function _makeDayStr (dVal) {
  let d = Number.parseInt(dVal)
  return Number.isInteger(d) ? String(d).padStart(4, '0') : '0'
}
function _rowWork (seq, pageKey, tableKey, row) {
  const rowTime = row[tableKey + '_time']
  const rowDay = _makeDayStr(row[tableKey + '_day'])
  if ((rowDay === undefined || rowTime === undefined))
    return // from a table without day and time values
  const key = rowDay + '-' + rowTime
  seq[key] = seq[key] || []
  let eventData = { pKey: pageKey, tKey: tableKey, data: row }
  seq[key].push(eventData)
}

export function convertToEventSequence (ehrData) {
  const ehrDataInSequence = {}
  let results
  const pages = new EhrPages()
  pages.pageList.forEach(page => {
    const pageKey = page.pageKey
    const pageData = ehrData[pageKey]
    if (!!pageData) {
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const tableData = pageData[tableKey]
        // console.log('tableData', tableKey, tableData)
        if (!!tableData) {
          tableData.forEach(row => {
            _rowWork(ehrDataInSequence, pageKey, tableKey, row)
          })
        }
      })
    }
  })
  results = Object.keys(ehrDataInSequence).sort()
    .reduce(
      (obj, key) => {
        const timeData = ehrDataInSequence[key]
        let timeEhr = {}
        for (let k = 0; k < timeData.length; k++) {
          const { pKey, tKey, data } = timeData[k]
          timeEhr[pKey] = timeEhr[pKey] || {}
          timeEhr[pKey][tKey] = timeEhr[pKey][tKey] || []
          timeEhr[pKey][tKey].push(data)
        }
        obj[key] = timeEhr
        return obj
      },
      {}
    )
  // console.log(seqOrders)
  return results
}
