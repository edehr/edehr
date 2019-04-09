import { setApiError } from './ehr-utills'
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
export const pageDefs = Object.assign(pageDefsPP, pageDefsCV1, pageDefsCV2, pageDefsPC, pageDefsExt, pageDefsTP)

export function getPageDefinition (pageKey) {
  let pageDef = pageDefs[pageKey]
  // debugehr('getPageDefinition ' + pageKey, pageDef)
  return pageDef
}

export function getTableCells (pageKey, tableIndex) {
  let cells
  let pageDef = pageDefs[pageKey]
  if (pageDef && pageDef.tables && pageDef.tables.length > tableIndex) {
    cells = pageDef.tables[tableIndex].tableCells
  }
  return cells
}

export function getFieldSetCells (pageKey, tableIndex, fieldSetKey) {
  let cells = getTableCells(pageKey, tableIndex)
  if(!cells) {
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

export function getDefaultValue (def) {
  let pageDataKey = def.pageDataKey
  let elementKey = def.elementKey
  let filterKey = 'elementKey'
  let pd = getChildElements(pageDataKey, filterKey, elementKey, 'defaultValue')
  let dV = ''
  if(pd.length > 0) {
    dV = pd[0]
    try { dV = parseInt(dV)} catch(e) {/* do nothing */}
  }
  console.log('EhrHelp.getDefaultValue', elementKey, dV)
  return dV
}
