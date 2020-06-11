import { validTimeStr, validDayStr, validNumberStr, validRangeStr } from '../../../helpers/ehr-utils'

/**
 * Export a dictionary of validators. Each key is the input type as set from the generated ehr definitions.
 * Each validator is a function that takes the field name (for error message) and the input value to be validated.
 * The function returns an error message if the input value is not valid. Return nothing otherwise.
 * Note that validation accepts empty inputs because the mandatory test is done elsewhere.
 */
export default {
  time24: function (fieldName, time) {
    if (time) {
      const valid = validTimeStr(time)
      if (!valid) {
        return `${fieldName} must be a time value in 24 hour format; e.g. 08:45`
      }
    }
  },
  day: function (fieldName, dayString) {
    if (dayString) {
      const valid = validDayStr(dayString)
      if (!valid) {
        return `${fieldName} must be a day number 0 to 9`
      }
    }
  },
  cvp: function (fieldName, value) {
    const MAX_CVP_VALUE = 30
    const MIN_CVP_VALUE = 0
    if (value)  {
      const valid = validNumberStr(value)
      if (!valid) {
        return `${fieldName} must be a number`
      }
      const isValidRange = validRangeStr(value, MAX_CVP_VALUE, MIN_CVP_VALUE)
      if (!isValidRange)
        return `${fieldName} must be a positive number in the range of ${MIN_CVP_VALUE} to ${MAX_CVP_VALUE}` 
    }
  },
}