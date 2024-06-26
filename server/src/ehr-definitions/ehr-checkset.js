import { isString } from './common-utils'
import EhrDefs from './ehr-defs-grid'
import EhrTypes from './ehr-types'

export default class EhrCheckset {
  static dbValueToCheckSet (value) {
    let results = []
    if (isString(value)) {
      results = value.split(',')
    } else {
      if (value !== undefined) {
        console.log('What is wrong? attempt to set checkset initial value with this: ', value)
      }
    }
    return results
  }
  /**
   *
   * @param val Array of camelCase props created in optionsToCheckList
   * @returns Array converted to csv string (no spaces)
   */
  static checkSetToDbValue (val) {
    const nonEmpties = val.filter( v => v.length > 0)
    return nonEmpties.length > 0 ? nonEmpties.join(',') : ''
  }

  static makeHuman (inputValue, pageDataKey, elementKey) {
    let results
    const PK =  pageDataKey + '.' + elementKey
    const element = EhrDefs.getPageChildElement(pageDataKey, elementKey)
    if (!element) {
      const errMsg = 'Asked to make checkset text for page or element that does not exist. ' + PK
      throw new Error(errMsg)
    }
    if ( element.inputType !== EhrTypes.dataInputTypes.checkset || !element.options) {
      const errMsg = 'Asked to make checkset text for element that is not a checkset. ' + PK
      throw new Error(errMsg)
    }
    const options = element.options
    if (typeof inputValue !== 'string') {
      if (inputValue !== undefined) {
        console.log('TODO Ehr checkset. Handle legacy seeds with boolean values', inputValue, PK)
      }
      return inputValue
    }
    if ( inputValue === '') {
      return inputValue // empty string is okay
    }
    const inputParts = inputValue.split(',')
    const human = inputParts.map(p => {
      const fnd = options.find( opt => opt.key === p )
      if (!fnd) {
        const errMsg = 'Could not match checkset for option "' + p + '" from value "' + inputValue +
          '". ' + PK + ' ' + JSON.stringify(options)
        console.error(errMsg)
        return undefined
      }
      return fnd.text
    })
    results = human.filter(e => !!e).join(', ')
    return results
  }


  /**
   * Provide array of check set options for the UI. Each element is structured as
   * {
   *  prop: {type: string},
   *  text: {type: string}
   *  }
   *
   *  The options are from the generated page definitions. They are an array of objects with
   *  properties 'key' and 'text'.  The 'key' property is called 'prop' and it is generated by
   *  converting the text to camelcase.
   *
   *  The 'prop' property is used by the UI checksets and is put into the database.
   * @param options
   * @returns {*[ { prop: {type: string}, text: {type: string}}]}
   */
  static optionsToChecklist (options) {
    return options.map(opt => {
      return {
        prop: opt.key,
        text: opt.text
      }
    })
  }

}
