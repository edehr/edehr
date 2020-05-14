import { validTimeStr, validDayStr } from '../../../helpers/ehr-utils'

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
  }
}