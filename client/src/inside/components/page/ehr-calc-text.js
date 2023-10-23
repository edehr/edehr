import EhrDefs from '@/ehr-definitions/ehr-defs-grid'


export function ehrCalculateTextProperty (pageDataKey, targetKey, srcValues) {
  const ectp = false
  let opts = EhrDefs.getChildElements(pageDataKey, 'elementKey', targetKey, 'options')
  if ( exbp ) console.log('ectp', 'pageDataKey, targetKey', pageDataKey, targetKey)
  if ( exbp ) console.log('ectp', 'opts', targetKey, opts)
  if (!opts) {
    let msg = `Ehr calc text unexpected missing options for key ${targetKey}`
    console.log('ectp', msg)
    throw new Error(msg)
  }
  opts = opts[0]
  if ( exbp ) console.log('ectp', 'opts', targetKey, opts)
  let sourceFieldToMatchOn = 'passToFunction'
  let desiredSourceProperty = 'elementKey'
  let srcKeys = EhrDefs.getChildElements(pageDataKey, sourceFieldToMatchOn, targetKey, desiredSourceProperty)
  if ( exbp ) console.log('ectp', 'srcKeys', srcKeys)
  if (srcKeys.length === 0) {
    let msg = `Ehr calc unexpected empty set of source keys for key ${targetKey} and calc type ${calculationType}`
    if ( exbp ) console.log('ectp', msg)
    if ( exbp ) console.log('ectp', 'pageDataKey, sourceFieldToMatchOn, targetKey',pageDataKey, sourceFieldToMatchOn, targetKey)
    throw new Error(msg)
  }
  let values = []
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    if ( exbp ) console.log('ectp', 'srcKey, srcVal', key, srcVal)
    if(srcVal) {
      srcVal = srcVal.toLowerCase()
      if ( exbp ) console.log('ectp', 'srcKey, srcVal', key, srcVal)
      const mappedValue = opts.find( opt => opt.key === srcVal)
      if ( exbp ) console.log('ectp', 'mappedValue', mappedValue)
      let text = mappedValue.text
      values.push(text)
    } else {
      // do nothing ... it is ok to not yet have a value for one of the sources
    }
  })
  let result = values.join(' ')
  if ( exbp ) console.log('ectp', 'results "' + result +'"')
  return result
}



// export for testing
export function ehrCalculateBoolProperty (pageDataKey, targetKey, srcValues) {
  const exbp = false
  if ( exbp ) console.log('exbp', 'pageDataKey, targetKey', pageDataKey, targetKey)
  let sourceFieldToMatchOn = 'passToFunction'
  let desiredSourceProperty = 'elementKey'
  let srcKeys = EhrDefs.getChildElements(pageDataKey, sourceFieldToMatchOn, targetKey, desiredSourceProperty)
  if ( exbp ) console.log('exbp', 'srcKeys', srcKeys)
  if (srcKeys.length === 0) {
    let msg = `Ehr calc unexpected empty set of source keys for key ${targetKey} and calc type ${calculationType}`
    console.log('exbp', msg)
    console.log('exbp', 'pageDataKey, sourceFieldToMatchOn, targetKey',pageDataKey, sourceFieldToMatchOn, targetKey)
    throw new Error(msg)
  }
  if ( exbp ) console.log('exbp srcValues', srcValues)
  let bVal = true
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    bVal = bVal && srcVal
    if ( exbp ) console.log('exbp', 'srcKey, srcVal', key, srcVal)
  })
  let result = bVal
  if ( exbp ) console.log('exbp', 'results "' + result +'"')
  return result
}
