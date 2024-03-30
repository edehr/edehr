import { validDayStr, validTimeStr } from './common-utils'
import { EhrPages } from './ehr-models'
import EhrDataModel from './EhrDataModel'
export function validSimTimeKey (text) {
  let [d,t] = splitSimTimeKey(text)
  // console.log('validSimTimeKey', text, d, t)
  return validDayStr(d) && t
}
export function splitSimTimeKey (key) {
  let parts = key &&  key.split('-') || []
  let d = parts[0]
  d = validDayStr(d) ? Number(d) : undefined
  let t = parts[1]
  t = validTimeStr(t) ? t : undefined
  // console.log('----- splitSimTimeKey key, d, t:', key, d, t)
  return [d, t]
}

export function compareSimTimeKeys (a,b) {
  let [d1, t1] = splitSimTimeKey(a)
  let [d2, t2] = splitSimTimeKey(b)
  if (d1 === d2) {
    return Number(t1) - Number(t2)
  }
  return Number(d1) - Number(d2)
}

export function makeSimTimeDayString (dVal) {
  let d = Number.parseInt(dVal)
  return Number.isInteger(d) ? String(d).padStart(4, '0') : '0'
}

export function makeSimTimeKey (dVal, timeVal) {
  let d = Number.parseInt(dVal)
  const dPart = Number.isInteger(d) ? String(d).padStart(4, '0') : '0'
  return dPart + '-' + timeVal
}

export const PAGEDATA_KEY = '0000-0000:PAGEDATA_KEY' // prefix with 0000-0000 to sort this data at the beginning of the sequence


/**
 * Utility to map ehr table data into time sequence.
 * Each key has a four digit day (with leading 0's) followed by a hyphen followed by a time in 2400 format.
 * For each key the value is an array of ehr data events.
 * An event needs to include the page key, table key, and row data.
 * Will need to give special consideration to tables with row that are related to other tables.
 * For example, the MAR's relation to med orders. Or hematology PBF to CBC table.
 *
 * @returns ....
 * @param ehrDataInSequence
 * @param table
 * @param pageData
 * @param pageKey
 */
function _convertTableDataToEventSeq (ehrDataInSequence, table, pageData, pageKey) {
  function _rowWork (seq, pageKey, tableKey, row) {
    const rowTime = row[tableKey + '_time']
    const rowDay = makeSimTimeDayString(row[tableKey + '_day'])
    let key = rowDay + '-' + rowTime
    if ((rowDay === undefined || rowTime === undefined)) {
      key = PAGEDATA_KEY
    }
    seq[key] = seq[key] || []
    let eventData = { pKey: pageKey, tKey: tableKey, data: row }
    seq[key].push(eventData)
  }
  const tableKey = table.elementKey
  const tableData = pageData[tableKey]
  // console.log('tableData', tableKey, tableData)
  if (!!tableData) {
    tableData.forEach(row => {
      _rowWork(ehrDataInSequence, pageKey, tableKey, row)
    })
  }
}

/**
 * Takes the ehr data and splits it into time slices. Returns an object (array-ish) with each element containing a time key and a slice of ehrData.
 * @param ehrData
 * @returns {{}}
 */
export function convertToEventSequence (ehrData) {
  // console.log('convertToEventSequence', ehrData)
  const ehrDataInSequence = {}
  let results = {}
  if (ehrData) { // ehrData is undefined when a page is loading
    const pages = new EhrPages()
    pages.pageList.forEach(page => {
      const pageKey = page.pageKey
      const pageData = ehrData[pageKey]
      if (!!pageData) {
        page.pageForms.forEach(form => {
          /*
          Our goal is to compose the ehr data just the way it is stored now for forms.
          This means each child's data is stored on the page element, alongside
          any tables that may also belong to the page.
          In this area we collect the data. Later as we accumulate the results
          we compose the page data.
           */
          const formKey = form.elementKey
          let hasData = false
          const formData = {} // pageData[formKey]
          // const formLabel = t18ElementLabel(form)
          form.children.forEach(c => {
            let cData = pageData[c.elementKey]
            if (cData) {
              hasData = true
              formData[c.elementKey] = cData
            }
          })
          if (hasData) {
            // console.log('page form data', pageKey, formKey, formData)
            ehrDataInSequence[PAGEDATA_KEY] = ehrDataInSequence[PAGEDATA_KEY] || []
            let eventData = { pKey: pageKey, fKey: formKey, data: formData }
            ehrDataInSequence[PAGEDATA_KEY].push(eventData)
          }
        })
        page.pageTables.forEach(table => {
          _convertTableDataToEventSeq(ehrDataInSequence, table, pageData, pageKey)
        })
      }
    })
    results = Object.keys(ehrDataInSequence).sort().reduce((accumulation, timeKey) => {
      const timeData = ehrDataInSequence[timeKey]
      let timeEhr = {} // this will be the ehrData for a given time
      for (let tInx = 0; tInx < timeData.length; tInx++) {
        const { pKey, tKey, fKey, data } = timeData[tInx]
        timeEhr[pKey] = timeEhr[pKey] || {}  // set up page data
        if (tKey) {
          timeEhr[pKey][tKey] = timeEhr[pKey][tKey] || []
          timeEhr[pKey][tKey].push(data)
        }
        if (fKey) {
          let keys = Object.keys(data)
          keys.forEach(key => {
            timeEhr[pKey][key] = data[key]
          })
        }
      }
      accumulation[timeKey] = timeEhr
      return accumulation
    },
    {}
    )
  }
  // console.log('convertToEventSequence', results)
  return results
}

export function timeSequenceSliceData (currentKey, ehrData) {
  const timeSequence = convertToEventSequence(ehrData)
  const keys = Object.keys(timeSequence)
  let eDate = {}
  for (let i = 0; i < keys.length; i++) {
    let cKey = keys[i]
    if (compareSimTimeKeys(cKey, currentKey) > 0) { // beyond
      // console.log('break ', currentKey, cKey)
      break
    }
    let data = timeSequence[cKey]
    // console.log('merge in', currentKey, cKey, JSON.stringify(data))
    eDate = EhrDataModel.MergeTwoLevels(eDate, data)
  }
  return eDate
}
