import { getChildElements } from './ehr-defs'

export function ehrCalculateProperty (pageDataKey, calculationKey, sourceValues) {
  let desiredProperty = 'elementKey'
  let filterKey = 'passToFunction'
  let pd = getChildElements(pageDataKey, filterKey, calculationKey, desiredProperty)
  // console.log('ehrCalculateProperty ', calculationKey, pd)
  let total = 0
  pd.forEach(key => {
    let src = sourceValues[key]
    let parts = src.split('=')
    let val = parts[0]
    try {
      let tmp = parseInt(val)
      if (Number.isFinite(tmp)) {
        total += tmp
      }
    } catch(e) {
      console.log('ehrCalculateProperty ', key, 'Could not parse value from input:', src)
    }
    // console.log('ehrCalculateProperty ', key, val)
  })
  // console.log('ehrCalculateProperty returning ', total)
  return total
}