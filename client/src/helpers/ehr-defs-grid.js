import { setApiError } from './ehr-utils'
// import CV1 from '../inside/defs/current-visit-1'
// import CV2 from '../inside/defs/current-visit-2'
// import PC from '../inside/defs/patient-chart'
// import PP from '../inside/defs/patient-profile'
// import ER from '../inside/defs/external-resources'
import TP from '../inside/defs-grid/test-page'
// const pageDefsPP = PP()
// const pageDefsCV1 = CV1()
// const pageDefsCV2 = CV2()
// const pageDefsPC = PC()
// const pageDefsExt = ER()
const pageDefsTP = TP()
// const pageDefs = Object.assign(pageDefsPP, pageDefsCV1, pageDefsCV2, pageDefsPC, pageDefsExt, pageDefsTP)

class EhrDefsWorker {
  constructor () {
    this.pageDefs = Object.assign(pageDefsTP)
    console.log('construct V2 defs', this.pageDefs)
  }
  getPageDefinition (pageKey) {
    let pd =  this.pageDefs[pageKey]
    // console.log('V2 - getPageDefinition for ', pageKey, pd)
    return pd
  }
  getAllPageKeys () {
    let pageKeys = Object.keys(this.pageDefs)
    pageKeys.sort()
    return pageKeys
  }

  getPageForms (pageKey) {
    let pd = this.pageDefs[pageKey]
    return pd.pageForm
  }

  getPageTables (pageKey) {
    let pd = this.pageDefs[pageKey]
    return pd.tables
  }

  getTableElements ( tableDef ) {
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
  getTableCellsByIndex (pageKey, tableIndex) {
    let cells
    const pageDef = this.getPageDefinition(pageKey)
    if (pageDef && pageDef.tables && pageDef.tables.length > tableIndex) {
      cells = pageDef.tables[tableIndex].tableCells
    }
    return cells
  }

  getTableCellsByTableKey (pageKey, tableKey) {
    let tableCells
    const pageDef = this.getPageDefinition(pageKey)
    if (pageDef.tables) {
      let table = pageDef.tables.find(tbl => { return tbl.tableKey === tableKey })
      if (table) tableCells = table.tableCells
    }
    return tableCells
  }

  //TODO remove this apparently unused function
  getFieldSetCells (pageKey, tableIndex, fieldSetKey) {
    let cells = this.getTableCellsByIndex(pageKey, tableIndex)
    if(!cells) {
      // TODO the setApiError needs a component context to get the store. The following is broken
      setApiError(pageKey + ' can not find table cells that support tableIndex', tableIndex)
      return
    }
    let fieldSet = cells.filter(cell => cell.level3Key === fieldSetKey && cell.inputType === 'checkbox')
    return fieldSet
  }

  getChildElements (pageKey, filterKey, filterValue, desiredProperty) {
    let pageDef = this.pageDefs[pageKey]
    let children = pageDef.pageChildren.filter( ch => ch[filterKey] === filterValue)
    if(desiredProperty){
      children = children.map( ch => ch[desiredProperty])
    }
    return children
  }

  getPageChildElement (pageKey, key) {
    let page = this.pageDefs[pageKey]
    // console.log('this.pageDefs[pageKey]', pageKey, page)
    return page ? page.pageChildren[key] : {}
  }

  getDefaultValue (pageDataKey, elementKey) {
    let filterKey = 'elementKey'
    let pd = this.getChildElements(pageDataKey, filterKey, elementKey, 'defaultValue')
    let dV = ''
    if(pd.length > 0) {
      dV = pd[0] || ''
      dV = (dV.toLowerCase() === 'true') ? true : ((dV.toLowerCase() === 'false') ? false : dV)
    }
    // console.log('EhrDefs.getDefaultValue', elementKey, dV)
    return dV
  }

  getDataCaseStudy (pageDataKey, elementKey) {
    let filterKey = 'elementKey'
    let pd = this.getChildElements(pageDataKey, filterKey, elementKey, 'dataCaseStudy')
    let dV = ''
    if(pd.length > 0) {
      dV = pd[0]
    }
    // console.log('EhrDefs.getDataCaseStudy', elementKey, dV)
    return dV
  }

  getMedOrderSchedule  (pageKey) {
    let pageDef = this.pageDefs[pageKey]
    let medPeriods = pageDef.medSchedule
    // console.log('getMedOrderSchedule', pageKey, medPeriods)
    return medPeriods
  }

}
const EhrDefs = new EhrDefsWorker()
export default EhrDefs

