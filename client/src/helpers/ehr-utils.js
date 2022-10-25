import moment from 'moment'
import camelcase from 'camelcase'
import { saveAs } from 'file-saver'
import EhrDefs from './ehr-defs-grid'
import { Text } from './ehr-text'
import validFilename from 'valid-filename'
import StoreHelper from './store-helper'

const debug = false
const debugErrs = false

const mJSON = 'json', mTEXT = 'text', mCSV = 'csv'

function _saveAs (stringData, fileName, mediaType) {
  let type
  switch (mediaType) {
  case mCSV:
    type = 'text/csv;charset=utf-8'
    break
  case mJSON:
    type = 'application/json'
    break
  case mTEXT :
  default:
    type = 'text/plain;charset=utf-8'
    break
  }
  let blob = new Blob([stringData], { type: type })
  /*
  https://github.com/eligrey/FileSaver.js
  Firefox dialog will include the text "from: blob:".  This is a defect with FF only.  https://github.com/eligrey/FileSaver.js/issues/101
   */
  saveAs(blob, fileName)
}

export function makeSafeFileName (filename) {
  // TODO filename breaks build. Fix or replace.
  return filename
  // return filenamify(filename)
}

export function getIncomingParams () {
  let search = window.location.search.substring(1)
  let params2 = {}
  let parts = search.split('&')
  parts.forEach(p => {
    let pair = p.split('=')
    params2[pair[0]] = decodeURIComponent(pair[1])
  })
  return params2
}

/**
 * Test if str is a valid 24 hr time format. Eg. 00:00 through to 23:59
 * @param text
 * @return {boolean}
 */
export function validTimeStr (text) {
  return /^(0[0-9]|1[0-9]|2[0-3])([0-5][0-9])$/.test(text)
}

/**
 * convert visit time to military format
 * @param text
 * @return {boolean}
 */
export function convertTimeStr (text) {
  let time = text ? text.replace(/:/g, '') : text
  return Number.parseInt(time)
}

/**
 * Test if the str is a valid "hospital stay day": a number between 0 and 9
 * @param text
 * @return {boolean}
 */
export function validDayStr (text) {
  return validRangeStr(text, 0, 9) // /^([0-9]?)$/.test(text)
}

/**
 * Test if the str is a number
 * @param str
 * @return {boolean}
 */
export function validNumberStr (str) {
  // These are a few of the exceptions which isNaN can return false for...
  // as it has been noted here: https://stackoverflow.com/questions/175739/built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number
  if (str === false || str === ' ' || str === '')
    return false
  return !isNaN(str)
}

/**
 * Test is the string input is a number equal to or greater than the min and equal to or less than max  min <= str <= max
 * @param str
 * @param min
 * @param max
 * @return {boolean|boolean}
 */
export function validRangeStr (str, min, max) {
  try {
    const number = parseInt(str)
    return number >= min && number <= max
  } catch (err) {
    if (debugErrs) console.log('isIntegerInRange threw', err)
    return false
  }
}

export function isImageFile (fName) {
  if (!fName) return false
  let fext = fName.toLocaleLowerCase().split('.').pop()
  return /jpeg|jpg|png|gif|tiff|tif|bmp/.test(fext)
}

/**
 * All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (i.e. the object and array literals) will have a constructor property that points to the Fundamental Object constructor type for that object.
 *
 * @param possibleObj
 * @returns {boolean}
 */
export function isObject ( possibleObj ) {
  return possibleObj && possibleObj.constructor.name === 'Object'
}

export function isString (possibleStr) {
  return Object.prototype.toString.call(possibleStr) === '[object String]'
}

export function formatDateStr (dateStrFromDb) {
  return moment(dateStrFromDb).format('DD MMM YYYY')
}

export function formatTimeStr (dateStrFromDb) {
  return moment(dateStrFromDb).format('YYYY-MM-DD h:mm a')
}

export function composeAxiosResponseError (error, msg = '') {
  if (!error.response) {
    if(error.message === 'Network Error') {
      return 'EdEHR API server is not available. Either you have network issues or the server is down.'
    }
    msg += ' Error: "' + error.message + '"'
    return msg
  }
  const res = error.response
  msg += res.status ? ` status: ${res.status}` : ''
  msg += res.statusText ? ` ${res.statusText}` : ''
  if (res.data) {
    if (res.data.message)
      msg += ' ' + res.data.message
    else
      msg += ' ' + JSON.stringify(res.data)
  } else {
    msg += ' ' + error.message
  }
  console.error('composeAxiosResponseError "', msg, '" "', res.data, '"')
  return msg
}

export function decoupleObject (obj) {
  if (obj) {
    // This is the recommended way to clone a simple object in ES6.
    // Note that all ehr data objects are simple. No methods. No circular references
    let str = JSON.stringify(obj)
    return JSON.parse(str)
  }
  return obj
}

export function removeEmptyProperties (obj) {
  Object.entries(obj).forEach(([key, val]) => {
    if (val && typeof val === 'object') removeEmptyProperties(val)
    else if (val === undefined || val === null || val === '') delete obj[key]
  })
  return obj
}

/**
 *
 * @param file  https://developer.mozilla.org/en-US/docs/Web/API/File
 * @return {Promise<any>}
 */
export function readFile (file) {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onload = (function (event) {
      let contents = event.target.result
      return resolve(contents)
    })
    reader.readAsText(file)
  })
}

/* ********************************************************************************* */
export const SEED_MARK = 'isFromSeed'

/**
 * Extract the data that has been entered by the student in preparation for sending this
 * to the server as an update.
 * @param page
 * @return {*}
 */
export function ehrRemoveMarkedSeed (page) {
  let propertyKeys = Object.keys(page)
  propertyKeys.forEach(pKey => {
    let childOne = page[pKey]
    if (Array.isArray(childOne)) {
      page[pKey] = childOne.filter(c => {
        let isMarked = typeof c === 'object' && c[SEED_MARK] === true
        return !isMarked
      })
    }
  })
  // })
  return page
}

/**
 * Iterate through all the pages and then through all the children. If the child is an array
 * then iterate through this array and mark each object.  This way when a student adds new rows to
 * table data we can determine which rows came from the seed and which rows were added.
 * This is important when we want to send an update back to the server.
 * @param data
 * @return {*}
 */
export function ehrMarkSeed (data) {
  let pageKeys = Object.keys(data)
  pageKeys.forEach(key => {
    let page = data[key]
    let propertyKeys = Object.keys(page)
    propertyKeys.forEach(pKey => {
      let childOne = page[pKey]
      if (Array.isArray(childOne)) {
        page[pKey] = childOne.map(c => {
          if (typeof c === 'object') {
            c[SEED_MARK] = true
          }
          return c
        })
      }
    })
  })
  return data
}

/**
 * Exported for testing
 * @param dataAsString
 * @return {*}
 * @private
 */
export function validateSeedFileContents (dataAsString) {
  let pageKeys = EhrDefs.getAllPageKeys()
  let parsedData
  try {
    parsedData = JSON.parse(dataAsString)
  } catch (err) {
    console.log('EhrUtil validateSeedFileContents: failed to parse seed data', err)
    return { invalidMsg: err.message }
  }
  if (!parsedData.license) {
    return { invalidMsg: Text.SEED_MUST_HAVE_LICENSE }
  }
  if (!parsedData.license.includes(Text.LICENSE_TEXT)) {
    return { invalidMsg: Text.LICENSE_MUST_BE }
  }
  if (!parsedData.ehrData) {
    return { invalidMsg: Text.SEED_MUST_HAVE_EHRDATA }
  }
  let keys = Object.keys(parsedData.ehrData)
  // console.log('keys', keys)
  if (!keys || keys.length === 0) {
    return { invalidMsg: Text.EHRDATA_CAN_NOT_BE_EMPTY }
  }
  let badKeys = []
  keys.forEach(key => {
    let found = pageKeys.find(pKey => pKey === key)
    if (!found && key !== 'meta') {
      badKeys.push(key)
    }
  })
  if (badKeys.length > 0) {
    let extras = badKeys.join(', ')
    return { invalidMsg: Text.EHRDATA_HAS_INVALID_PAGES(extras) }
  }
  return { seedObj: parsedData }
}

/**
 *
 * @param component to access the $store
 * @param seedId
 * @param contents from reading a seed data file
 * @return {Promise<any>}
 */
export function importSeedData (component, seedId, contents) {
  return new Promise((resolve, reject) => {
    let { seedObj, invalidMsg } = validateSeedFileContents(contents)
    if (invalidMsg) {
      console.log('EhrUtil importSeedData invalidMsg', invalidMsg)
      return reject(invalidMsg)
    }
    if (debug) console.log('EhrUtil importSeedData seedObj', seedObj)
    resolve(StoreHelper.updateSeedEhrData(seedId, seedObj.ehrData))
  })
}

export function downloadSeedToFile (seedId, sSeedContent, ehrData) {
  let lastUpdate = formatDateStr(sSeedContent.lastUpdateDate)
  let name = sSeedContent.name
  let ver = sSeedContent.version
  let desc = sSeedContent.description
  let fName = camelcase(name)
    + (ver ? '_' + ver : '')
    + '_' + lastUpdate
    + '.json'
  let data = {
    id: seedId,
    license: Text.LICENSE_FULL_TEXT,
    ehrData: ehrData,
    description: desc,
    name: name,
    version: ver,
    fileName: fName
  }
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download seed to ', fName, ehrData)
  _saveAs(data, fName, mJSON)
}

export function downloadEhrOnlyToFile ( ehrData) {
  let lastUpdate = (new Date()).toISOString()
  let name = 'EHR Data'
  let desc = 'EHR data created in the EdEHR.  See https://edehr.org'
  let fName = 'EhrOnlyData'
    + '_' + lastUpdate
    + '.json'
  let data = {
    license: Text.LICENSE_FULL_TEXT,
    ehrData: ehrData,
    description: desc,
    name: name,
    fileName: fName
  }
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download EHR only to ', fName, ehrData)
  _saveAs(data, fName, mJSON)
}
export function downloadLearningObjectToFile (learningObject) {
  let lastUpdate = formatDateStr(learningObject.lastUpdateDate)
  let name = learningObject.name
  let ver = learningObject.version
  let fName = camelcase(name)
    + (ver ? '_' + ver : '')
    + '_' + lastUpdate
    + '.json'
  let data = {
    id: learningObject._id,
    license: Text.LICENSE_FULL_TEXT,
    description: learningObject.description,
    name: name,
    version: ver,
    fileName: fName
  }
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download learning object to ', fName)
  _saveAs(data, fName, mJSON)
}

export function downObjectToFile (fileName, object) {
  let data = JSON.stringify(object, null, 2)
  if (debug) console.log('EhrUtil Download object to file ', fileName, data)
  _saveAs(data, fileName, mJSON)
}

export function isValidFilename (filename) {
  return validFilename(filename)
}

export function arrayToCsv (array) {
  let csv = []
  array.forEach(line => {
    let row = []
    line.forEach(e => {
      row.push(`"${e}"`)
    })
    csv.push(row.join(','))
  })
  return csv.join('\n')
}

export function downArrayToCsvFile (filename, array) {
  let data = arrayToCsv(array)
  _saveAs(data, filename, mCSV)
}

/**
 * prepareAssignmentPageDataForSave does two things
 * 1. It removes empty properties
 * 2. It removes marked seed data (array elements)
 * @param data
 * @return {*}
 */
export function prepareAssignmentPageDataForSave (aPage) {
  if (debug) console.log('EhrUtil prepareAssignmentPageDataForSave', decoupleObject(aPage))
  let cleanValue = removeEmptyProperties(aPage)
  cleanValue = ehrRemoveMarkedSeed(cleanValue)
  if (debug) console.log('EhrUtil cleanValue', decoupleObject(cleanValue))
  return cleanValue
}

export function ehrMergeEhrData (one, two) {
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
