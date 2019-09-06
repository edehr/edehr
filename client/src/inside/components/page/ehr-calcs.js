import EhrDefs from '../../../helpers/ehr-defs-grid'

const db = false
const db2 = false

export function ehrCalculateProperty (pageDataKey, calculationKey, ehrHelper) {
  if (db) console.log('ehrCalculateProperty calculationKey', calculationKey)
  let desiredProperty = 'elementKey'
  let filterKey = 'passToFunction'
  let sourceValues = ehrHelper.getActiveData()
  if (db) console.log('ehrCalculateProperty source', JSON.stringify(sourceValues))
  let pd = EhrDefs.getChildElements(pageDataKey, filterKey, calculationKey, desiredProperty)
  if (db) console.log('ehrCalculateProperty pd', pd)
  let total = 0
  pd.forEach(key => {
    let src = sourceValues[key]
    if (db2) console.log('ehrCalculateProperty key', key)
    if (db2) console.log('ehrCalculateProperty src', src)
    if(src) {
      try {
        let parts = src.split('=')
        if (db2) console.log('ehrCalculateProperty parts', parts)
        let val = parts[0]
        if (db2) console.log('ehrCalculateProperty val', val)
        let tmp = parseInt(val)
        if (Number.isFinite(tmp)) {
          if (db2) console.log('ehrCalculateProperty value is a number', tmp)
          total += tmp
        } else {
          console.log('ehrCalculateProperty ', key, 'value was not a Number: val, tmp', val, tmp)
        }
      } catch (e) {
        console.log('ehrCalculateProperty ', key, 'Could not parse value from input:', src)
      }
    }
  })
  if (db) console.log('ehrCalculateProperty returning ', total)
  return total
}