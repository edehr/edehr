import EhrTypes from '@/ehr-definitions/ehr-types'
import pageDefs from '@/ehr-definitions/ehr-page-defs'
import { isString } from '@/helpers/ehr-utils'

const PROPS = EhrTypes.elementProperties

export const MAR_PAGE_KEY = 'medAdminRec'
export const MED_ORDERS_PAGE_KEY = 'medicationOrders'

class EhrDefsWorker {
  constructor () {
    this.pageDefs = pageDefs
    // console.log('construct V2 defs', this.pageDefs)
  }

  findRecHdrVisitDayChild (pageKey) {
    let pd = this.getPageDefinition(pageKey)
    let list = pd.pageChildren.filter(ch => ch.recHeader && ch.inputType === EhrTypes.dataInputTypes.visitDay)
    return list[0]
  }

  getPageDefinition (pageKey) {
    let pd =  this.pageDefs[pageKey]
    // console.log('EhrDefsGrid getPageDef', pageKey, pd)
    return pd
  }

  getAllPageKeys () {
    let pageKeys = Object.keys(this.pageDefs)
    // Note, that in the definitions the meta field does not exist. It only exists in an Ehr Data record
    pageKeys.sort()
    return pageKeys
  }

  getAllPageChildren () {
    const pc = []
    keys.map(k => pageDefs[k].pageChildren).map(item => pc.push(...item))
    return pc
  }

  getChildElements (pageKey, filterKey, filterValue, desiredProperty) {
    let pd = this.getPageDefinition(pageKey)
    let children = pd.pageChildren.filter( ch => isString(ch[filterKey]) ? ch[filterKey].includes(filterValue) : false)
    // if (children.length > 0) console.log('getChildElements children ', desiredProperty, JSON.parse(JSON.stringify(children)))
    if(desiredProperty){
      children = children.map( ch => ch[desiredProperty])
      // if (children.length > 0) console.log('getChildElements desiredProperty ', desiredProperty, JSON.parse(JSON.stringify(children)))
    }
    return children
  }

  getDefaultValue (pageDataKey, elementKey) {
    let dV = this.getPageChildProperty(pageDataKey, elementKey, PROPS.defaultValue) || ''
    if (typeof dV === 'string') {
      dV = (dV.toLowerCase() === 'true') ? true : ((dV.toLowerCase() === 'false') ? false : dV)
    }
    // console.log('EhrDefs.getDefaultValue', elementKey, dV)
    return dV
  }

  getMedOrderScheduleTypes () {
    let administration = this.getPageChildElement(MED_ORDERS_PAGE_KEY,'administration')
    // console.log('get med sched', administration)
    let options = administration.options
    // console.log('get med sched options', options)
    let scheduleTypes = {}
    options.forEach(opt => scheduleTypes[opt.key] = opt.text)
    // console.log('get med sched scheduleTypes', scheduleTypes)
    return scheduleTypes
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

  getPageElements (pageKey) {
    let pd = this.getPageDefinition(pageKey)
    return pd.pageElements
  }

  getPageForms (pageKey) {
    let elements = this.getPageElements(pageKey)
    return Object.values(elements).filter( e => e.isPageForm)
  }

  getPageTable (pageKey, tableKey) {
    let tbls = this.getPageTables(pageKey)
    return tbls.find( t => t.tableKey === tableKey)
  }

  getPageTables (pageKey) {
    let elements = this.getPageElements(pageKey)
    return Object.values(elements).filter( (e) => {return e.isTable})
  }
}
const EhrDefs = new EhrDefsWorker()
export default EhrDefs

