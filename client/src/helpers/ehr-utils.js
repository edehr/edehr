import moment from 'moment'
import camelcase from 'camelcase'
import { saveAs } from 'file-saver'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import { Text } from '@/helpers/ehr-text'
import validFilename from 'valid-filename'
import { format } from 'date-fns'

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
export const VISIT_DAY_LIMIT = 19
export function validDayStr (text) {
  const isNum = validNumberStr(text)
  const inRange = validRangeStr(text, 0, VISIT_DAY_LIMIT)
  return isNum && inRange
}

/**
 * Test if the str is a number
 * @param str
 * @return {boolean}
 */
export function validNumberStr (str) {
  // test the input is a number and nothing but a number
  // decimal followed by optional decimals
  let isnum = /^\d+(\.\d+)?$/.test(str)
  return isnum
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
  return typeof possibleStr === 'string'
}
export function mandatoryHasValue (val) {
  return val === 0 || !!val
}

export function formatDateStr (dateStrFromDb) {
  return moment(dateStrFromDb).format('DD MMM YYYY')
}

export function formatTimeStr (dateStrFromDb) {
  // console.log('dateStrFromDb',dateStrFromDb)
  return dateStrFromDb ? format(new Date(dateStrFromDb), 'yyyy-MM-dd h:mm a') : ''
  // changed to use date-fn format from using moment due to warnings and because moment is not needed.
  // TODO continue to swap out moment
  // return dateStrFromDb && dateStrFromDb.length > 0 ? (new Date(dateStrFromDb)).toLocaleTimeString() : ''
  // return moment(dateStrFromDb).format('YYYY-MM-DD h:mm a')
}

export function composeAxiosResponseError (error, msg = '') {
  if (!error.response) {
    if(error.response?.data?.message === 'Network Error') {
      return 'EdEHR API server is not available. Either you have network issues or the server is down. \n' + msg
    }
    msg += ' Error: "' + error.message + '"'
    return msg
  }
  const res = error.response
  msg += res.status ? ` status: ${res.status}` : ''
  if (res.data) {
    if (res.data.message)
      msg += ' ' + res.data.message
    else
      msg += ' ' + JSON.stringify(res.data)
  } else if (res.statusText) {
    msg += res.statusText ? ` ${res.statusText}` : ''
  }
  else {
    msg += ' ' + error.message
  }
  console.error('composeAxiosResponseError "', msg)
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

export function validateLObjFileContents (dataAsString) {
  const licenseOptional = true
  let parsedData
  let errors = []
  let warnings = []
  let results = {}
  try {
    parsedData = JSON.parse(dataAsString)
    if (!parsedData.license) {
      errors.push(Text.LOBJ_MUST_HAVE_LICENSE)
    } else {
      !parsedData.license.includes(Text.LICENSE_TEXT) ? errors.push(Text.LICENSE_MUST_BE) : null
    }
    if (!parsedData.caseStudy) {
      warnings.push(Text.LOBJ_FILE_MISSING_SEED)
    } else {
      let caseStudy = JSON.stringify(parsedData.caseStudy)
      let {warnMsg, invalidMsg} = validateSeedFileContents(caseStudy, licenseOptional)
      invalidMsg ? errors.push(invalidMsg) : null
      warnMsg ? warnings.push(warnMsg) : null
    }
  } catch (err) {
    console.error('EhrUtil validateLObjFileContents: failed to parse file data', err)
    errors.push(err.message)
  }
  errors.length > 0 ? results.invalidMsg = errors.join('\n') : null
  warnings.length > 0 ? results.warnMsg = warnings.join('\n') : null
  results.lObj = parsedData
  return results
}
/**
 * Exported for testing
 * @param dataAsString
 * @param licenseOptional
 * @return {*}
 * @private
 */
export function validateSeedFileContents (dataAsString, licenseOptional) {
  let errors = []
  let warnings = []
  let results = {}
  let pageKeys = EhrDefs.getAllPageKeys()
  let parsedData
  try {
    parsedData = JSON.parse(dataAsString)
    if (!licenseOptional ) {
      if (!parsedData.license) {
        errors.push(Text.SEED_MUST_HAVE_LICENSE)
      } else {
        !parsedData.license.includes(Text.LICENSE_TEXT) ? errors.push(Text.LICENSE_MUST_BE) : null
      }
    }
    if (!parsedData.ehrData) {
      errors.push(Text.SEED_MUST_HAVE_EHRDATA)
    } else {
      let keys = Object.keys(parsedData.ehrData)
      // console.log('keys', keys)
      !keys || keys.length === 0 ? errors.push(Text.EHRDATA_CAN_NOT_BE_EMPTY) : null
      let badKeys = []
      keys.forEach(key => {
        let found = pageKeys.find(pKey => pKey === key)
        if (!found && key !== 'meta') {
          badKeys.push(key)
        }
      })
      if (badKeys.length > 0) {
        let extras = badKeys.join(', ')
        warnings.push(Text.EHRDATA_HAS_INVALID_PAGES(extras))
      }
    }
  } catch (err) {
    console.error('EhrUtil validateSeedFileContents: failed to parse or validate seed data', err, dataAsString)
    errors.push(err.message)
  }
  errors.length > 0 ? results.invalidMsg = errors.join('\n') : null
  warnings.length > 0 ? results.warnMsg = warnings.join('\n') : null
  results.seedObj = parsedData
  return results
}

/**
 *
 * @param component to access the $store
 * @param seedId
 * @param contents from reading a seed data file
 * @return {Promise<any>}
 */
// export function importSeedData (component, seedId, contents) {
//   return new Promise((resolve, reject) => {
//     let { seedObj, invalidMsg } = validateSeedFileContents(contents)
//     if (invalidMsg) {
//       console.log('EhrUtil importSeedData invalidMsg', invalidMsg)
//       return reject(invalidMsg)
//     }
//     if (debug) console.log('EhrUtil importSeedData seedObj', seedObj)
//     resolve(StoreHelper.importSeedEhrData(seedId, seedObj.ehrData))
//   })
// }

export function downloadSeedToFile (seedId, sSeedContent, ehrData, tagList) {
  let lastUpdate = formatDateStr(sSeedContent.lastUpdateDate)
  let name = sSeedContent.name
  let ver = sSeedContent.version
  let desc = sSeedContent.description
  let contributors = sSeedContent.contributors
  let fName = camelcase(name)
    + (ver ? '_' + ver : '')
    + '_' + lastUpdate
    + '.json'
  let data = {
    id: seedId,
    license: Text.LICENSE_FULL_TEXT,
    contributors: contributors,
    ehrData: ehrData,
    description: desc,
    name: name,
    tagList: tagList,
    version: ver,
    fileName: fName
  }
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download seed to ', fName, ehrData)
  _saveAs(data, fName, mJSON)
}

export function getDownloadEhrOnlyFileName () {
  let lastUpdate = (new Date()).toISOString()
  return 'EhrOnlyData' + '_' + lastUpdate + '.json'
}
export function downloadEhrOnlyToFile ( ehrData, fName) {
  if (! fName ) {
    throw new Error('Must provide a file name to download the EHR only contents.')
  }
  let name = 'EHR Data'
  let desc = 'EHR data created in the EdEHR.  See https://edehr.org'
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
export function downloadLearningObjectToFile (learningObject, seedObject) {
  let lastUpdate = formatDateStr(learningObject.lastUpdateDate)
  let name = learningObject.name
  let ver = learningObject.version
  let fName = 'lobj_' + camelcase(name)
    + (ver ? '_' + ver : '')
    + '_' + lastUpdate
    + '.json'
  let data = {
    id: learningObject._id,
    appType: learningObject.appType,
    license: Text.LICENSE_FULL_TEXT,
    description: learningObject.description,
    idForLTI: learningObject.idForLTI,
    name: name,
    version: ver,
    fileName: fName,
    caseStudy: seedObject,
    simStages: learningObject.simStages
  }
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download learning object to ', fName)
  _saveAs(data, fName, mJSON)
}

export function downloadStudentActivityToFile (activityRecord, aData, vData, user, purpose, INCLUDE_ALL_DEETS = false) {
  let lastUpdate = formatDateStr(activityRecord.lastUpdate)
  let name = activityRecord.learningObjectName
  let fName = 'activity_' + camelcase(name)
    + '_' + lastUpdate
    + '.json'
  let data = {
    fileName: fName,
    purpose: purpose
  }
  data.fullName = user.fullName
  data.courseTitle = activityRecord.courseTitle
  data.title = activityRecord.title
  data.description = activityRecord.description
  data.caseStudyName = activityRecord.caseStudyName
  data.submitted = activityRecord.submitted
  data.activityLastDate = activityRecord.activityLastDate
  data.assignmentData = aData.assignmentData
  data.simulationSignOn = vData.simulationSignOn
  data.simStages = activityRecord.simStages
  data.simulationDateTime = vData.simulationDateTime
  data.simulationSignOn = vData.simulationSignOn
  data.userSettings = user.userSettings
  data.appType = activityRecord.appType
  data.id = activityRecord.id
  data.visitId = activityRecord.visitId
  data.lobj = activityRecord.learningObjectId
  if (INCLUDE_ALL_DEETS) {
    data.activityRecord = activityRecord
    data.visit = vData
    data.user = user
    data.aData = aData
  }
  delete data.simulationSignOn?._id
  delete data.simulationDateTime?._id
  delete data.userSettings?._id
  data = JSON.stringify(data, null, 2)
  if (debug) console.log('EhrUtil Download student activity to ', fName)
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


export function isValidDate (date) {
  return date && Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)
}
