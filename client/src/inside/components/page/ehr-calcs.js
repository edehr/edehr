import EhrDefs from '@/helpers/ehr-defs-grid'
import { isObject, isString, validNumberStr } from '@/helpers/ehr-utils'
import StoreHelper from '@/helpers/store-helper'

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

function isEmbeddedRef ( ref ) {
  return ref.split('.').length === 3
}

function getEmbeddedDataRow ( ref ) {
  const mData = StoreHelper.getMergedData()
  const [pageKey, tableKey, row] = ref.split('.')
  const pg = mData[pageKey]
  const tbl = pg[tableKey]
  return tbl[row]
}

export function ehrCalculateProperty (pageDataKey, targetKey, srcValues) {
  let temp = EhrDefs.getChildElements(pageDataKey, 'elementKey', targetKey, 'calculationType')
  // console.log('pageDataKey, targetKey', pageDataKey, targetKey)
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
    // console.log('srcKey, srcVal, calculationType', key, srcVal, calculationType)
    if(srcVal) {
      if (isString(srcVal) && srcVal.includes('=')) {
        values.push(extractComboValue(srcVal))
      } else if (validNumberStr(srcVal)) {
        values.push(Number(srcVal))
      } else if (isString(srcVal) && isEmbeddedRef(srcVal)) {
        let rowData = getEmbeddedDataRow(srcVal)
        values.push(rowData)
      } else {
        let msg = `Ehr calc found unexpected value type for key ${targetKey}, value found: ${srcVal}`
        console.log('ecp', msg)
        throw new Error(msg)
      }
    } else {
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
      // product value is 0 until there are at least two values
      result = values.length >= 2 ? values.reduce((a, b) => a * b, 1) : 0
      break
    case 'wbcAbs':
      // console.log('process wbcAbs values', values)
      if ( values.length === 2) {
        let wbc, factor
        if ( isObject(values[0])) {
          wbc = values[0]['wbc']
          factor = values[1] /100
        } else {
          factor = values[0] /100
          wbc = values[1]['wbc']
        }
        // console.log('wbc factor',wbc, factor)
        result = wbc * factor
      }
      break
    default:
      throw new Error('Unexpected calculation type ' + calculationType)
    }
  }
  return Math.round(result * 10) / 10
}
