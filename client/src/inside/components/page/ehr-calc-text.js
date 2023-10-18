import EhrDefs from '@/ehr-definitions/ehr-defs-grid'


// export for testing
export function ehrCalculateTextProperty (pageDataKey, targetKey, srcValues) {
  let opts = EhrDefs.getChildElements(pageDataKey, 'elementKey', targetKey, 'options')
  console.log('ectp', 'pageDataKey, targetKey', pageDataKey, targetKey)
  console.log('ectp', 'opts', targetKey, opts)
  if (!opts) {
    let msg = `Ehr calc text unexpected missing options for key ${targetKey}`
    console.log('ectp', msg)
    throw new Error(msg)
  }
  opts = opts[0]
  console.log('ectp', 'opts', targetKey, opts)
  let sourceFieldToMatchOn = 'passToFunction'
  let desiredSourceProperty = 'elementKey'
  let srcKeys = EhrDefs.getChildElements(pageDataKey, sourceFieldToMatchOn, targetKey, desiredSourceProperty)
  console.log('ectp', 'srcKeys', srcKeys)
  if (srcKeys.length === 0) {
    let msg = `Ehr calc unexpected empty set of source keys for key ${targetKey} and calc type ${calculationType}`
    console.log('ectp', msg)
    console.log('ectp', 'pageDataKey, sourceFieldToMatchOn, targetKey',pageDataKey, sourceFieldToMatchOn, targetKey)
    throw new Error(msg)
  }
  let values = []
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    console.log('ectp', 'srcKey, srcVal', key, srcVal)
    if(srcVal) {
      srcVal = srcVal.toLowerCase()
      console.log('ectp', 'srcKey, srcVal', key, srcVal)
      const mappedValue = opts.find( opt => opt.key === srcVal)
      console.log('ectp', 'mappedValue', mappedValue)
      let text = mappedValue.text
      values.push(text)
    } else {
      // do nothing ... it is ok to not yet have a value for one of the sources
    }
  })
  let result = values.join(' ')
  console.log('ectp', 'results "' + result +'"')
  return result
}
