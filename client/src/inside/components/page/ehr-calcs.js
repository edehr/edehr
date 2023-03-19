import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import { isObject, isString, validNumberStr } from '@/helpers/ehr-utils'
import StoreHelper from '@/helpers/store-helper'
import { calculateMedicationConcentration, calculateMedicationMaxDosage } from '@/ehr-definitions/ehr-def-utils'

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

export function extractEmbedValueReferences ( input ) {
  // embedValue(hematology,tableCbcAnalysis,wbc)
  // embedValue(hematology,tableCbcAnalysis,PLT)
  const regExp = /embedValue\((.+),(.+),(.+)\)/
  let result
  if (input.includes('embedValue')) {
    const match = input.match(regExp)
    if (match && match[1]) {
      result = {
        pageRef: match[1].trim(),
        tableRef: match[2].trim(),
        cellRef: match[3].trim(),
      }
    }
  }
  return result
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
  // console.log('ehrval srcKeys', srcKeys)
  const zeroParamTypes = ['medConcentration']
  if (srcKeys.length === 0 && !zeroParamTypes.includes(calculationType)) {
    let msg = `Ehr calc unexpected empty set of source keys for key ${targetKey} and calc type ${calculationType}`
    console.log('ecp', msg)
    console.log('pageDataKey, sourceFieldToMatchOn, targetKey',pageDataKey, sourceFieldToMatchOn, targetKey)
    throw new Error(msg)
  }
  let values = []
  let isNumberResult = true
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    // console.log('srcKey, srcVal, calculationType', key, srcVal, calculationType)
    if(srcVal) {
      if (isString(srcVal)) {
        if(srcVal.includes('=')) {
          values.push(extractComboValue(srcVal))
        } else if (isEmbeddedRef(srcVal)) {
          let rowData = getEmbeddedDataRow(srcVal)
          values.push(rowData)
          isNumberResult = false
          // console.log('---------- cal type embedValue rowData:', rowData)
          // console.log('srcKey, srcVal, calculationType', key, srcVal, calculationType)
        } else {
          values.push(srcVal)
        }
      } else if (validNumberStr(srcVal)) {
        values.push(Number(srcVal))
      } else {
        // do nothing with faulty input
        // let msg = `Ehr calc found unexpected value type for key ${targetKey}, value found: ${srcVal}`
        // console.log('validating source values', msg)
      }
    } else {
      // do nothing .. it is ok to not yet have a value for one of the sources
    }
  })
  let result = 0

  function mapToNums (values) {
    return values.map(v => parseInt(v))
  }

  if (calculationType.includes('multiplyBy')) {
    let factor = extractMultiplyByFactor(calculationType)
    // console.log('multiplyBy', factor, values)
    if (factor) {
      values = mapToNums(values)
      result = values.reduce((a,b) => a + b * factor, 0)
      isNumberResult = true
      // console.log('multiplyBy', result)
    }
  } else if (calculationType.includes('embedValue')) {
    const refs = extractEmbedValueReferences(calculationType)
    result = values[0] ? values[0][refs.cellRef] : undefined
    // console.log('---------- cal type embedValue srcValues:', srcValues)
    // console.log('---------- cal type embedValue values:', values)
    // console.log('---------- cal type embedValue refs, result:', refs, result)
  } else if (calculationType.includes('medConcentration')) {
    result = calculateMedicationConcentration(values)
  } else if (calculationType.includes('medMaxDosage')) {
    result = calculateMedicationMaxDosage(srcValues)
    // EXIT
    return result
  } else {
    switch (calculationType) {
    case 'sum':
      values = mapToNums(values)
      result = values.reduce((a, b) => a + b, 0)
      // console.log('calculationType sum',targetKey, result, values)
      isNumberResult = true
      break
    case 'average':
      values = mapToNums(values)
      result = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length) : 0
      // console.log('calculationType average',targetKey, result, values)
      isNumberResult = true
      break
    case 'product':
      // product value is 0 until there are at least two values
      values = mapToNums(values)
      result = values.length >= 2 ? values.reduce((a, b) => a * b, 1) : 0
      isNumberResult = true
      break
    case 'wbcAbs':
      if ( values.length === 2) {
        let wbc, factor
        if ( isObject(values[0])) {
          // console.log('process wbcAbs object', values[0]['wbc'], values[1])
          wbc = values[0]['wbc']
          factor = values[1] /100
        } else {
          // console.log('process wbcAbs else', values[0], values[1])
          factor = values[0] /100
          wbc = values[1]['wbc']
        }
        isNumberResult = true
        result = wbc * factor
        // console.log('wbc factor', wbc, factor, result)
      }
      break
    default:
      throw new Error('Unexpected calculation type ' + calculationType)
    }
  }
  return isNumberResult ? Math.round(result * 10) / 10 : result
}
