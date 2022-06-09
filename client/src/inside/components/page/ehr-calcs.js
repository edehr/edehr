import EhrDefs from '@/helpers/ehr-defs-grid'
import { isString, validNumberStr } from '@/helpers/ehr-utils'

// export for testing
export function extractComboValue (src)  {
  let parts = src.split('=')
  let val = parts[0]
  let result = parseInt(val)
  if (!Number.isFinite(result)) {
    let msg = `Source value must have format "number=text". Given "${src}"`
    // console.error(msg)
    throw new Error(msg)
  }
  return result
}

// export for testing
export function extractMultiplyByFactor ( input ) {
  const reNum = /([+-]?((\d+\.?\d*)|(\.\d+)))/
  let factor
  if (input.includes('multiplyBy')) {
    const match = input.match(reNum)
    if (match && match[1]) {
      factor = match[1]
    }
  }
  return parseFloat(factor)
}

export function ehrCalculateProperty (pageDataKey, targetKey, srcValues) {
  let temp = EhrDefs.getChildElements(pageDataKey, 'elementKey', targetKey, 'calculationType')
  // console.log(pageDataKey, targetKey, temp)
  let calculationType = temp[0]
  if (!calculationType) {
    let msg = `Ehr calc unexpected could not find calculationType for key ${targetKey}`
    console.log('ecp', msg)
    throw new Error(msg)
  }
  // sum, average, product, multiplyBy(n)
  // get the keys of the elements on the page with property 'passToFunction' that contains targetKey
  let sourceFieldToMatchOn = 'passToFunction'
  let desiredSourceProperty = 'elementKey'
  let srcKeys = EhrDefs.getChildElements(pageDataKey, sourceFieldToMatchOn, targetKey, desiredSourceProperty)
  if (srcKeys.length === 0) {
    let msg = `Ehr calc unexpected empty set of source keys for key ${targetKey}`
    console.log('ecp', msg)
    throw new Error(msg)
  }
  let values = []
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    if(srcVal) {
      if (isString(srcVal) && srcVal.includes('=')) {
        values.push(extractComboValue(srcVal))
      } else if (validNumberStr(srcVal)) {
        values.push(Number(srcVal))
      } else {
        let msg = `Ehr calc found unexpected value type for key ${targetKey}, value found: ${srcVal}`
        console.log('ecp', msg)
        throw new Error(msg)
      }
    } else {
      // let msg = `Ehr calc missing source value for key ${key} in ${JSON.stringify(srcValues)}`
      // console.log('ecp', msg)
      // do nothing .. it is ok to not yet have a value for one of the sources
    }
  })
  let result = 0
  if (calculationType.includes('multiplyBy')) {
    let factor = extractMultiplyByFactor(calculationType)
    // console.log('multiplyBy', factor, values)
    if (factor) {
      result = values.reduce((a,b) => a + b * factor, 0)
      // console.log('multiplyBy', result)
    }
  } else {
    switch (calculationType) {
    case 'sum':
      result = values.reduce((a, b) => a + b, 0)
      // console.log('calculationType sum',targetKey, result, values)
      break
    case 'average':
      result = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length) : 0
      // console.log('calculationType average',targetKey, result, values)
      break
    case 'product':
      result = values.reduce((a, b) => a * b, 1)
      break
    }
  }
  return Math.round(result * 10) / 10
}