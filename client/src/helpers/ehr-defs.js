import CV from '../inside/defs/current-visit'
import PC from '../inside/defs/patient-chart'
import PP from '../inside/defs/patient-profile'
import ER from '../inside/defs/external-resources'
const pageDefsPP = PP()
const pageDefsCV = CV()
const pageDefsPC = PC()
const pageDefsExt = ER()
export const pageDefs = Object.assign(pageDefsPP, pageDefsCV, pageDefsPC, pageDefsExt)

export function getPageDefinition(pageKey) {
  let pageDef = pageDefs[pageKey]
  // debugehr('getPageDefinition ' + pageKey, pageDef)
  return pageDef
}
