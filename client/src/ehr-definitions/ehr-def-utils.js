// noinspection DuplicatedCode

export function validateAgeValue ( age) {
  const ageValue = Number.parseInt(age)
  return 0 <= ageValue && ageValue <= 150
}

export function extractMonth (dateStr) {
  let results
  // getMonth and getDate use local time so make sure the dateStr has a fixed time
  dateStr += dateStr.includes('T') ? '' : 'T00:00'
  const dt = new Date(dateStr)
  if (dt.toString() !== 'Invalid Date') {
    results = dt.getMonth() + 1
  }
  return results
}
export function extractDay (dateStr) {
  let results
  // getMonth and getDate use local time so make sure the dateStr has a fixed time
  dateStr += dateStr.includes('T') ? '' : 'T00:00'
  // console.log('dateStr',dateStr)
  const dt = new Date(dateStr)
  if (dt.toString() !== 'Invalid Date') {
    results = dt.getDate()
  }
  return results
}

/**
 * WIP === NOT READY FOR USE. NEED SME HELP.
 *
 * For medication orders. Compute the concentration of the medication in mLs/min
 * Expect the srcValues to be an array with four elements. If the array has anything less
 * than four elements then there is insufficient information to proceed.
 * the elements are ordered based on their order in the ehr defs (page children).
 *
 * Does: in mL
 * Volume: in mL
 * Time: a number
 * Units: Either 'mins' or 'hrs'
 * @param srcValues
 */
export function calculateMedicationConcentration ( srcValues) {

  let results = 0
  if (srcValues.length === 4) {
    let dose = srcValues[0]
    let vol = srcValues[1]
    let time = srcValues[2]
    let timeUnits = srcValues[3]
    if (timeUnits === 'hrs') {
      time *= 60 // convert hours to minutes
    }
    if (time * vol !== 0)
      results = dose/vol/time
  }
  return results
}

export function calculateMedicationMaxDosage (srcValues) {
  let results = 0
  const dose = srcValues['med_dose']
  if (dose) {
    // once a day defines its own max dosage
    if (srcValues['med_timing'] === 'od') {
      results = dose
    } else {
      // match 2 or 2.4 or 0.4 but not .4
      // extract amount and remainder is considered to be the units
      const doseReg = /(\d+\.?\d*)(.*)/
      const match = dose.match(doseReg)
      if (match && match.length >= 3) {
        const amount = match[1]
        const units = match[2]
        if (amount) {
          let cnt = 0
          for (let i = 1; i <= 6; i++) {
            srcValues['med_time' + i] ? cnt++ : null
          }
          results = amount * cnt
          // truncate any like 0.60000000001 to just 0.6
          results = Math.round(results * 10) / 10
        }
        // console.log('dose, amount, units', dose, 'a:', amount, 'u:', units, 'results',results)
        if (units) {
          results += ' ' + units
        }
      }
    }
  }
  return results
}

export function medAdminTimes (abbreviation) {
  let r
  const OPTIONS = {
    'BID / Q12H' : ['0800','2000','','','',''],
    TID: ['0800', '1600', '2200','','',''],
    Q8H: ['0600', '1400', '2200','','',''],
    QID: ['0800', '1200', '1700', '2200','',''],
    Q6H: ['0200', '0600', '1200', '1800', '2200', ''],
    Q4H: ['0200', '0600', '1000', '1400', '1800', '2200']
  }
  r =  OPTIONS[abbreviation] || ['','','','','','']
  // console.log('medAdmintimes', abbreviation, r)
  return r
}

export function processDependentOnChange (dependentDef, value, pageKey, elementKey) {
  // console.log('dependentDef, value, pageKey, elementKey',dependentDef, value, pageKey, elementKey)
  if (dependentDef.type === 'onChange') {
    if (pageKey === 'medicationOrders') {
      const times = medAdminTimes(value)
      let index = elementKey.slice(-1) // last character of key like 'med_time1'
      index = Number.parseInt(index) - 1
      value = times[index]
    }
  }
  return value
}
/**
 *
 * Calculates the year by taking today's year and subtracting
 * the ageValue but adjusting if today date is after the given dob.
 * Then use the given dob for the month and day.
 *
 * @param ageValue { string } number of years e.g. 10 or 75 or 105
 * @param demographicsDoB  {string} Date entered by user. '2000-01-01T00:00'
 * @param now { Date } Only need this for testing.
 * @returns {string} Birth date of person. Returns undefined on invalid inputs
 */
export function computeDateOfBirth (ageValue, demographicsDoB, now = new Date()) {
  let dateStr
  if (validateAgeValue(ageValue)) {
    const dob = new Date(demographicsDoB)
    if (dob.toString() === 'Invalid Date') {
      console.log('cdob invalid demographicsDoB', demographicsDoB)
      dateStr = demographicsDoB
    } else {
      // console.log('dob', JSON.stringify(dob))
      const isAfter = dob.getMonth() > now.getMonth() || dob.getMonth() === now.getMonth() && dob.getDay() > now.getDay()
      let nyr = now.getFullYear()
      nyr = nyr - ageValue
      nyr += isAfter ? -1 : 0
      dob.setFullYear(nyr)
      dateStr = dob.toISOString().split('T')[0]
      // console.log('cdob dateStr', dateStr)
    }
  } else {
    // console.log('cdob invalid ageValue', ageValue)
  }
  return dateStr
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
