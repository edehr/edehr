import { setApiError } from './ehr-utills'
import CV1 from '../inside/defs/current-visit-1'
import CV2 from '../inside/defs/current-visit-2'
import PC from '../inside/defs/patient-chart'
import PP from '../inside/defs/patient-profile'
import ER from '../inside/defs/external-resources'
const pageDefsPP = PP()
const pageDefsCV1 = CV1()
const pageDefsCV2 = CV2()
const pageDefsPC = PC()
const pageDefsExt = ER()
export const pageDefs = Object.assign(pageDefsPP, pageDefsCV1, pageDefsCV2, pageDefsPC, pageDefsExt)

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
