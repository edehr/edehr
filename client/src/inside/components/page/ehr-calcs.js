import EhrDefs, { MED_ORDERS_PAGE_KEY, MED_ORDERS_ALERT_ELEMENT }  from '@/ehr-definitions/ehr-defs-grid'
import { isObject, isString, validNumberStr } from '@/helpers/ehr-utils'
import StoreHelper from '@/helpers/store-helper'
import { calculateMedicationConcentration, calculateMedicationMaxDosage } from '@/ehr-definitions/ehr-def-utils'
import { MedOrder } from '@/ehr-definitions/med-definitions/medOrder-model'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import EhrTypes from '@/ehr-definitions/ehr-types'

// export for testing
export function extractComboValue (src, pKey, eKey)  {
  let parts = src.split('=')
  let val = parts[0]
  let result = parseInt(val)
  if (!Number.isFinite(result)) {
    let msg = `Source value must have format "number=text". Given "${src}" for page key ${pKey} and element ${eKey}`
    // console.error(msg)
    throw new Error(msg)
  }
  return result
}

// export for testing
export function extractMultiplyByFactor ( input ) {
  const reNum = /([+-]?\d+\.?\d*|[+-]?\.\d+),\s*(\d+)/
  let result = {}
  if (input.includes('multiplyBy')) {
    const match = input.match(reNum)
    if (match && match[1]) {
      let factor = match[1]
      result.value = parseFloat(factor)
    }
    if (match && match[2]) {
      let round = match[2]
      result.round = parseInt(round)
    }
  }
  // console.log('extractMultiplyByFactor', input, result)
  return result
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
  const idKey = tableKey + '_id'
  let found = tbl.find( tElem => tElem[idKey] === ref)
  if (!found) console.error(`Important change. Using id search to get embedded table row FAILED. Ref: ${ref}. Will default to use row index ${row}`)
  return found || tbl[row]
}

/**
 * Perform calculation.
 * Return raw value with whatever decimal precision the system provides. The UI will round numbers if prescribed in the ehr definitions. See 'decimals'.
 * @param pageDataKey
 * @param targetKey
 * @param srcValues
 * @returns {undefined|*}
 */
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
    console.log('pageDataKey, sourceFieldToMatchOn, targetKey', pageDataKey, sourceFieldToMatchOn, targetKey)
    throw new Error(msg)
  }
  let values = []
  srcKeys.forEach(key => {
    let srcVal = srcValues[key]
    // console.log('srcKey, srcVal, calculationType', key, srcVal, calculationType)
    if (srcVal) {
      if (isString(srcVal)) {
        if (srcVal.includes('=')) {
          values.push(extractComboValue(srcVal, pageDataKey, key))
        } else if (isEmbeddedRef(srcVal)) {
          let rowData = getEmbeddedDataRow(srcVal)
          values.push(rowData)
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
  let result = undefined

  function mapToNums (values) {
    return values.map(v => parseFloat(v))
  }

  if (calculationType.includes('multiplyBy')) {
    let factor = extractMultiplyByFactor(calculationType)
    // console.log('multiplyBy', factor, values)
    if (factor.value) {
      values = mapToNums(values)
      result = values.reduce((a, b) => a + b * factor.value, 0)
      // console.log('multiplyBy', result)
    }
  } else if (calculationType.includes('embedValue')) {
    // pull a value from an embedded object. The calculationType specifies the page, table and field
    // the row of the table is used to load the embedded object in the values
    // embedValue(medicationOrders, medicationOrdersTable, med_timing)
    const refs = extractEmbedValueReferences(calculationType)
    result = values[0] ? values[0][refs.cellRef] : undefined
    // console.log('---------- cal type embedValue srcValues:', srcValues)
    // console.log('---------- cal type embedValue values:', values)
    // console.log('---------- cal type embedValue refs, result:', refs, result)
  } else if (calculationType.includes('medConcentration')) {
    result = calculateMedicationConcentration(values)

  } else if (calculationType.includes('fluidBalance')) {
    const inputs = values[0] || 0
    const outputs = values[1] || 0
    result = inputs - outputs
  } else  if (calculationType.includes('medAdminAlert')) {
    let type = EhrTypes.dataInputTypes.checkset
    if (values[0]) {
      let val = values[0].med_alert
      val = val ? makeHumanTableCell(MED_ORDERS_PAGE_KEY, MED_ORDERS_ALERT_ELEMENT, type, val) : undefined
      result = val
    } else {
      console.log('medAdminAlert no value!', values, 'srcKeys', srcKeys)
      // console.log('srcValues', srcValues)
    }
  } else if (calculationType.includes('medOrderSummary')) {
    // values is array with one element; the medication order
    // console.log('medOrderSummary', values[0])
    // console.log('medOrderSummary values', values)
    if (values[0]) {
      const mo = new MedOrder(values[0])
      result = mo.medOrderSummary()
    } else {
      console.log('medOrderSummary no value!', values, 'srcKeys', srcKeys)
      // console.log('srcValues', srcValues)
    }
    // result = calculateMedicationConcentration(values)
  } else if (calculationType.includes('medMaxDosage')) {
    result = calculateMedicationMaxDosage(srcValues)
    // EXIT
    return result
  } else {
    switch (calculationType) {
    case 'sum':
      result = undefined
      if (values.length > 0) {
        values = mapToNums(values)
        result = values.reduce((a, b) => a + b, 0)
        // console.log('calculationType sum',targetKey, result, values)
      }
      break
    case 'average':
      values = mapToNums(values)
      result = values.length > 0 ? (values.reduce((a, b) => a + b, 0) / values.length) : 0
      // console.log('calculationType average',targetKey, result, values)
      break
    case 'product':
      // product value is 0 until there are at least two values
      values = mapToNums(values)
      result = values.length >= 2 ? values.reduce((a, b) => a * b, 1) : 0
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
        result = wbc * factor
        // console.log('wbc factor', wbc, factor, result)
      }
      break
    default:
      throw new Error('Unexpected calculation type ' + calculationType)
    }
  }
  return result
}
