
const debugErrs = false

/**
 * Test if str is a valid 24 hr time format. Eg. 00:00 through to 23:59
 * @param text
 * @return {boolean}
 */
export function validTimeStr (text) {
  return /^(0[0-9]|1[0-9]|2[0-3])([0-5][0-9])$/.test(text)
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
  return /^\d+(\.\d+)?$/.test(str)
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

/**
 * All objects (with the exception of objects created with Object.create(null)) will have a constructor property. Objects created without the explicit use of a constructor function (i.e. the object and array literals) will have a constructor property that points to the Fundamental Object constructor type for that object.
 *
 * @param possibleObj
 * @returns {boolean}
 */
export function isObject ( possibleObj ) {
  return typeof possibleObj === 'object' &&
  !Array.isArray(possibleObj) &&
    possibleObj !== null

  // return possibleObj && possibleObj.constructor.name === 'Object'
}

export function isString (possibleStr) {
  return Object.prototype.toString.call(possibleStr) === '[object String]'
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


export function decamelize (text) {
  const separator = '_'
  if (!(typeof text === 'string' )) {
    throw new TypeError(
      'The `text` and `separator` arguments should be of type `string`',
    )
  }

  const replacement = `$1${separator}$2`

  // Split lowercase sequences followed by uppercase character.
  // `dataForUSACounties` → `data_For_USACounties`
  // `myURLstring → `my_URLstring`
  const decamelized = text.replace(
    /([\p{Lowercase_Letter}\d])(\p{Uppercase_Letter})/gu,
    replacement,
  )

  // Split multiple uppercase characters followed by one or more lowercase characters.
  // `my_URLstring` → `my_ur_lstring`
  return decamelized
    .replace(
      /(\p{Uppercase_Letter})(\p{Uppercase_Letter}\p{Lowercase_Letter}+)/gu,
      replacement,
    )
    .toLowerCase()
}
