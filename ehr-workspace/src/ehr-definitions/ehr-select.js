import EhrDefs from './ehr-defs-grid'
import EhrTypes from './ehr-types'

export function selectValueMakeHuman (inputValue, pageDataKey, elementKey) {
  let results
  const PK = pageDataKey + '.' + elementKey
  const element = EhrDefs.getPageChildElement(pageDataKey, elementKey)
  if (!element) {
    const errMsg = 'Asked to make select text for page or element that does not exist. ' + PK
    throw new Error(errMsg)
  }
  if (element.inputType !== EhrTypes.dataInputTypes.select || !element.options) {
    const errMsg = 'Asked to make select text for element that is not a select. ' + PK
    throw new Error(errMsg)
  }
  if (typeof inputValue !== 'string') {
    if (inputValue !== undefined) {
      console.error('Ehr select with non string value', inputValue, PK)
    }
    return inputValue
  }
  if (inputValue === '') {
    return inputValue // empty string is okay
  }
  const options = element.options
  const human = options.find(opt => opt.key === inputValue)
  results = human ? human.text : inputValue
  return results
}
