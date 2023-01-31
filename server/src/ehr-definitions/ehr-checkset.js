import camelcase from 'camelcase'
// import decamelize from 'decamelize'
import { isString, decamelize } from './common-utils'
import EhrDefs from './ehr-defs-grid'

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
    return val.filter( v => v.length > 0).join(',')
  }

  static makeHuman (val, pageDataKey, cell) {
    let results
    const elementKey = cell.key
    const element = EhrDefs.getPageChildElement(pageDataKey, elementKey)
    // eslint-disable-next-line no-unused-vars
    const options = element.options
    // console.log('options', JSON.stringify(options))
    // TODO match values to original text in options to recover display text
    if (typeof val !== 'string') {
      if (val !== undefined) console.log('TODO Ehr checkset. Handle legacy seeds with boolean values', elementKey, val)
      return val
    }
    const parts = val.split(',')
    const human = parts.map(p => decamelize(p, { separator: ' ' }))
    results = human.join(', ')
    // console.log(`made human '${val}'`, results)
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
   *  properties 'key' and 'text'.  The 'key' property is (unfortunately) not used.
   *  The 'text' property becomes the database value (i.e. the effective key) unless
   *  the text contains an equal sign '='. In which case the text is split and the first
   *  part is used as the key.
   *  In either kay the effective key, which is stored as 'prop', is converted to camel case.
   *  Sample options
   *            {
   *             'key': 'check1=check option 1',
   *             'text': 'check1=check option 1'
   *           },
   * @param options
   * @returns {*[ { prop: {type: string}, text: {type: string}}]}
   */
  static optionsToChecklist (options) {
    const checkOptions = []
    let prop, text
    options.forEach(opt => {
      [prop, text] = opt.text.split('=')
      if (!text) {
        text = prop
        prop = camelcase(prop)
      }
      checkOptions.push({
        prop: prop,
        text: text
      })
    })
    return checkOptions
  }

}
