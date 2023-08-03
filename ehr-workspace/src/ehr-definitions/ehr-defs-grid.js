import EhrTypes from './ehr-types'
import pageDefs from './ehr-page-defs'
import { isString } from './common-utils'

const PROPS = EhrTypes.elementProperties

export const MAR_PAGE_KEY = 'medAdminRec'
export const MAR_V1_TABLE_KEY = 'table'
export const MAR_V2_TABLE_KEY = 'marTable'

export const MED_ORDERS_PAGE_KEY = 'medicationOrders'
export const MED_ORDERS_TABLE_KEY = 'medicationOrdersTable'

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

  getPageChildren (pageKey) {
    return this.pageDefs[pageKey].pageChildren
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
    if (!child) {
      console.error('Failed getPageChildProperty', pageKey, key, prop)
    }
    let value = child[prop]
    return value
  }

  /**
   * Returns an object. Elements are keyed using the page element key.
   * @param pageKey
   * @returns {*}
   */
  getPageElements (pageKey) {
    let pd = this.getPageDefinition(pageKey)
    if(!pd) { console.error('Coding error. No page for pageKey', pageKey)}
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

  parseDependentOn (given) {
    /*
      visble:administration=sched,prn
      visble:administration=set
      visble:administration=once
      Here we split the given definition into parts. The expected structure is
      (visible|disable):key[=refValue]
      The first part is the action. Does this dependancy control visibility or enabled.
      Second part is the element key to listen for.
      The optional third part gives the value to look for in the target element. Default to treat the value as boolean.
       */
    let key, type, action, refValue
    const depDefs = EhrTypes.dependentOn
    key = given
    if (key) {
      const parts = key.split(depDefs.splitActionKeyOn)
      action = parts[0] // e.g. visble (misspelled), disable, onChange
      key = parts[1] // e.g. administration=sched,prn
      if (key.includes(depDefs.splitKeyValueOn)) {
        const kv = key.split(depDefs.splitKeyValueOn)
        key = kv[0] // e.g. administration a key to a page element
        refValue = kv[1] // e.g. sched,prn - the criteria
        type = depDefs.type.select
      } else if (depDefs.type.onChange === action) {
        type = depDefs.type.onChange
        action = depDefs.type.onChange
        refValue = key
      }  else if (depDefs.type.echo === action) {
        type = depDefs.type.echo
        action = depDefs.type.echo
        refValue = key
      } else if (depDefs.action.age === action) {
        type = depDefs.type.age
      } else {
        type = depDefs.type.check
      }
    }
    return {key: key, type: type, action: action, refValue: refValue}
  }

}
const EhrDefs = new EhrDefsWorker()
export default EhrDefs

