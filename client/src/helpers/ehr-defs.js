import { setApiError } from './ehr-utils'
import StoreHelper from './store-helper'
import EhrDefs from './ehr-defs-grid'
import CV1 from '../inside/defs/current-visit-1'
import CV2 from '../inside/defs/current-visit-2'
import PC from '../inside/defs/patient-chart'
import PP from '../inside/defs/patient-profile'
import ER from '../inside/defs/external-resources'
import TP from '../inside/defs/test-page'
const pageDefsPP = PP()
const pageDefsCV1 = CV1()
const pageDefsCV2 = CV2()
const pageDefsPC = PC()
const pageDefsExt = ER()
const pageDefsTP = TP()
const pageDefs = Object.assign(pageDefsPP, pageDefsCV1, pageDefsCV2, pageDefsPC, pageDefsExt, pageDefsTP)

export function getPageDefinition (pageKey) {
  // return page def from V2 if available otherwise fall back on V1
  let uV2 = StoreHelper.usingV2()
  console.log('getPageDefinition using v2', uV2)
  let pd
  if (uV2) {
    pd = EhrDefs.getPageDefinition(pageKey)
  }
  pd = pd ? pd : pageDefs[pageKey]
  return pd
}

export function getAllPageKeys () {
  let pageKeys = Object.keys(pageDefs)
  pageKeys.sort()
  return pageKeys
}


export function getTableElements ( tableDef ) {
  let all =  []
  if (tableDef.tableForm) {
    tableDef.tableForm.rows.forEach( (row) => {
      row.elements.forEach( (element) => {
        all.push(element)
        if (element.formFieldSet)  {
          element.formFieldSet.rows.forEach( (frow) => {
            frow.elements.forEach( (felement) => {
              all.push(felement)
            })
          })
        }
      })
    })
  }
  return all
}
export function getTableCellsByIndex (pageKey, tableIndex) {
  let cells
  const pageDef = getPageDefinition(pageKey)
  if (pageDef && pageDef.tables && pageDef.tables.length > tableIndex) {
    cells = pageDef.tables[tableIndex].tableCells
  }
  return cells
}

export function getTableCellsByTableKey (pageKey, tableKey) {
  let tableCells
  const pageDef = getPageDefinition(pageKey)
  if (pageDef.tables) {
    let table = pageDef.tables.find(tbl => { return tbl.tableKey === tableKey })
    if (table) tableCells = table.tableCells
  }
  return tableCells
}

//TODO remove this apparently unused function
export function getFieldSetCells (pageKey, tableIndex, fieldSetKey) {
  let cells = getTableCellsByIndex(pageKey, tableIndex)
  if(!cells) {
    // TODO the setApiError needs a component context to get the store. The following is broken
    setApiError(pageKey + ' can not find table cells that support tableIndex', tableIndex)
    return
  }
  let fieldSet = cells.filter(cell => cell.level3Key === fieldSetKey && cell.inputType === 'checkbox')
  return fieldSet
}

export function getChildElements (pageKey, filterKey, filterValue, desiredProperty) {
  let pageDef = pageDefs[pageKey]
  let children = pageDef.pageChildren.filter( ch => ch[filterKey] === filterValue)
  if(desiredProperty){
    children = children.map( ch => ch[desiredProperty])
  }
  return children
}

export function getPageChildElement (pageKey, key) {
  return pageDefs[pageKey].pageChildren.find( ch => ch['elementKey'] === key)
}

export function getDefaultValue (pageDataKey, elementKey) {
  let filterKey = 'elementKey'
  let pd = getChildElements(pageDataKey, filterKey, elementKey, 'defaultValue')
  let dV = ''
  if(pd.length > 0) {
    dV = pd[0] || ''
    dV = (dV.toLowerCase() === 'true') ? true : ((dV.toLowerCase() === 'false') ? false : dV)
  }
  // console.log('EhrDefs.getDefaultValue', elementKey, dV)
  return dV
}

export function getDataCaseStudy (pageDataKey, elementKey) {
  let filterKey = 'elementKey'
  let pd = getChildElements(pageDataKey, filterKey, elementKey, 'dataCaseStudy')
  let dV = ''
  if(pd.length > 0) {
    dV = pd[0]
  }
  // console.log('EhrDefs.getDataCaseStudy', elementKey, dV)
  return dV
}

export function getMedOrderSchedule  (pageKey) {
  let pageDef = pageDefs[pageKey]
  let medPeriods = pageDef.medSchedule
  // console.log('getMedOrderSchedule', pageKey, medPeriods)
  return medPeriods
}