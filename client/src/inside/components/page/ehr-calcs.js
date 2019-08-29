import EhrDefs from '../../../helpers/ehr-defs-grid'

const db = false

export function ehrCalculateProperty (pageDataKey, calculationKey, ehrHelper) {
  let desiredProperty = 'elementKey'
  let filterKey = 'passToFunction'
  let sourceValues = ehrHelper.getActiveData()
  let pd = EhrDefs.getChildElements(pageDataKey, filterKey, calculationKey, desiredProperty)
  if (db) console.log('ehrCalculateProperty ', calculationKey, pd, JSON.stringify(sourceValues))
  let total = 0
  pd.forEach(key => {
    let src = sourceValues[key]
    if (db) console.log('key, src', key, src)
    if(src) {
      let parts = src.split('=')
      let val = parts[0]
      try {
        let tmp = parseInt(val)
        if (Number.isFinite(tmp)) {
          total += tmp
        }
      } catch (e) {
        console.log('ehrCalculateProperty ', key, 'Could not parse value from input:', src)
      }
    }
    // console.log('ehrCalculateProperty ', key, val)
  })
  // console.log('ehrCalculateProperty returning ', total)
  return total
}