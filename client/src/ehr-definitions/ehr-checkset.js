import camelcase from 'camelcase'
import decamelize from 'decamelize'
import StoreHelper from '@/helpers/store-helper'
import { isString } from '@/helpers/ehr-utils'
import { Text } from '@/helpers/ehr-text'
import EhrDefs from '@/helpers/ehr-defs-grid'

export default class EhrCheckset {
  static dbValueToCheckSet (value) {
    const results = []
    if (isString(value)) {
      let props = value.split(',')
      props.forEach(p => {
        results.push(p)
      })
    } else {
      console.log('What is wrong? attempt to set checkset initial value with this: ', value)
    }
    return results
  }
  static makeHuman (val, pageDataKey, cell) {
    const elementKey = cell.key
    const element = EhrDefs.getPageChildElement(pageDataKey, elementKey)
    // eslint-disable-next-line no-unused-vars
    const options = element.options
    // console.log('options', JSON.stringify(options))
    // TODO match values to original text in options to recover display text
    if (!val) return val
    const parts = val.split(',')
    const human = parts.map(p => decamelize(p, { separator: ' ' }))
    return human.join(', ')
  }
  /**
   *
   * @param val Array of camelCase props created in optionsToCheckList
   * @returns Array converted to csv string (no spaces)
   */
  static modelChange (val) {
    return val.filter( v => v.length > 0).join(',')
  }
  static optionsToChecklist (options) {
    if (!options || options.length === 0) {
      StoreHelper.setApiError(Text.IS_INVALID_CHECKSET(this.key))
      return []
    }
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