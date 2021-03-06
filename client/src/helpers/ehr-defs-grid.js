import EhrTypes from './ehr-types'
import pageDefs from '../inside/defs-grid/index'

const keys = Object.keys(pageDefs)

const PROPS = EhrTypes.elementProperties

class EhrDefsWorker {
  constructor () {
    this.pageDefs = pageDefs
    // console.log('construct V2 defs', this.pageDefs)
  }

  getPageDefinition (pageKey) {
    let pd =  this.pageDefs[pageKey]
    // console.log('EhrDefsGrid getPageDef', pageKey, pd)
    return pd
  }
  getAllPageKeys () {
    let pageKeys = Object.keys(this.pageDefs)
    pageKeys.sort()
    return pageKeys
  }

  getPageElements (pageKey) {
    let pd = this.getPageDefinition(pageKey)
    return pd.pageElements
  }

  getPageForms (pageKey) {
    let elements = this.getPageElements(pageKey)
    return Object.values(elements).filter( e => e.isPageForm)
  }

  getPageTables (pageKey) {
    let elements = this.getPageElements(pageKey)
    return Object.values(elements).filter( (e) => {return e.isTable})
  }

  getPageTable (pageKey, tableKey) {
    let tbls = this.getPageTables(pageKey)
    return tbls.find( t => t.tableKey === tableKey)
  }

  getChildElements (pageKey, filterKey, filterValue, desiredProperty) {
    let pd = this.getPageDefinition(pageKey)
    let children = pd.pageChildren.filter( ch => ch[filterKey] === filterValue)
    if(desiredProperty){
      children = children.map( ch => ch[desiredProperty])
    }
    return children
  }

  getPageChildElement (pageKey, key) {
    let pd = this.getPageDefinition(pageKey)
    return pd.pageChildren.find(ch => ch[PROPS.elementKey] === key)
  }

  getPageChildProperty (pageKey, key, prop) {
    let child = this.getPageChildElement(pageKey, key)
    let value = child[prop]
    return value
  }

  getDefaultValue (pageDataKey, elementKey) {
    let dV = this.getPageChildProperty(pageDataKey, elementKey, PROPS.defaultValue) || ''
    if (typeof dV === 'string') {
      dV = (dV.toLowerCase() === 'true') ? true : ((dV.toLowerCase() === 'false') ? false : dV)
    }
    // console.log('EhrDefs.getDefaultValue', elementKey, dV)
    return dV
  }

  getDataCaseStudy (pageDataKey, elementKey) {
    let dV = this.getPageChildProperty(pageDataKey, elementKey, PROPS.dataCaseStudy) || ''
    return dV
  }

  getValidationRule (pageDataKey, elementKey) {
    let dV = this.getPageChildProperty(pageDataKey, elementKey, PROPS.validation) || ''
    return dV
  }

  getMandatoryRule (pageDataKey, elementKey) {
    let dV = this.getPageChildProperty(pageDataKey, elementKey, PROPS.mandatory) || ''
    return dV
  }

  getMedOrderSchedule  (pageKey) {
    let pd = this.getPageDefinition(pageKey)
    let medPeriods = pd.medSchedule
    // console.log('getMedOrderSchedule', pageKey, medPeriods)
    return medPeriods
  }

  getItemsFromKey (dataKey) {
    return keys.filter(key => pageDefs[key].pageDataKey === dataKey)
  }

  getAllPageChildren () {
    const pc = []
    keys.map(k => pageDefs[k].pageChildren).map(item => pc.push(...item))
    return pc
  }

  findPageChildrenElement (elemKey) {
    const pc = this.getAllPageChildren()
    return pc.filter(c => c.elementKey === elemKey)
  }

}
const EhrDefs = new EhrDefsWorker()
export default EhrDefs

