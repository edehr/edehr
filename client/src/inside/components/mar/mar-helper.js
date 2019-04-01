import { setApiError } from '../../../helpers/ehr-utills'
import MedOrder from './med-entity'
import MarEntity from './mar-entity'
import { getPageDefinition } from '../../../helpers/ehr-defs'

export const MAR_PAGE_KEY = 'medAdminRec'
export const MED_ORDERS_PAGE_KEY = 'medicationOrders'
export const SCHEDULE_FIELDSET = 'schedule'

export default class MarHelper {
  constructor (ehrHelp) {
    this.ehrHelp = ehrHelp
    this._theMedOrders = this.getEhrData_Orders()
    this._marRecords = this.getEhrData_MarRecords()
  }
  get theMedOrders () { return this._theMedOrders }
  get marRecords () { return this._marRecords }

  /**
   * Get the medication orders current page data
   * @return {*}
   */
  getEhrData_Orders () {
    let pageData = this.ehrHelp.getAsLoadedPageData(MED_ORDERS_PAGE_KEY)
    let pageTable = pageData.table
    let medOrders = pageTable.map(order => new MedOrder(order))
    console.log('helper med orders', medOrders)
    return medOrders
  }

  /**
   * Get the MAR page current data
   * @return {*}
   */
  getEhrData_MarPageData () {
    return this.ehrHelp.getAsLoadedPageData(MAR_PAGE_KEY)
  }

  /**
   * Get the MAR records. This is an array of records inside the main MAR page data
   * @return {*|Array}
   */
  getEhrData_MarRecords () {
    let marTableKey = this.getMarTableKey()
    let raw = this.getEhrData_MarPageData()[marTableKey] || []
    let records = raw.map( m => new MarEntity(m))
    records.sort( (a,b) => MarEntity.compare(a, b) )
    return records
  }

  /**
   * Get the MAR page definition
   * @return {*}
   */
  getPageDef_Mar () {
    return getPageDefinition(MAR_PAGE_KEY)
  }

  /**
   * Get the property key, within the MAR page definition, that contains the MAR records
   * @return {*}
   */
  getMarTableKey () {
    let key
    try {
      let marsPageDef = this.getPageDef_Mar()
      let table = marsPageDef.tables[0]
      key = table.tableKey
    } catch (err) {
      setApiError(err)
    }
    return key
  }

  /**
   * Create a complete MAR and save to the MAR page data.
   * Assumes the MAR has been validated.  See MarEntity.validate()
   * @param aMarEntity
   * @return {*}
   */
  saveMarDialog (aMarEntity) {
    let marTableKey = this.getMarTableKey()
    let asLoadedPageData = this.getEhrData_MarPageData()
    let table = asLoadedPageData[marTableKey] || []
    let aMar = aMarEntity.asObjectForApi()
    console.log('saveMarDialog key:', marTableKey, ', ', aMar)
    table.push(aMar)
    let payload = {
      propertyName: MAR_PAGE_KEY,
      value: asLoadedPageData
    }
    return this.ehrHelp._saveData(payload)
  }
}
