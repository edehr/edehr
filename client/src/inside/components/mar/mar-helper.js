import { setApiError } from '../../../helpers/ehr-utils'
import MedOrder from './med-order'
import MarEntity from './mar-entity'
import EhrDefs from '../../../helpers/ehr-defs-grid'

export const MAR_PAGE_KEY = 'medAdminRec'
export const MED_ORDERS_PAGE_KEY = 'medicationOrders'

const debug = false

export default class MarHelper {
  constructor (ehrHelp) {
    this.ehrHelp = ehrHelp
    this.refreshMarData()
  }
  get theMedOrders () { return this._theMedOrders }
  get marRecords () { return this._marRecords }

  refreshMarData () {
    // console.log('mar-helper refreshMarData')
    this.pageData = this.ehrHelp.getAsLoadedPageData(MED_ORDERS_PAGE_KEY)
    if (debug) console.log('mar-helper refreshMarData', this.pageData)
    if (!this.pageData || !this.pageData.table) {
      if (debug) console.log('helper call to refreshMarData before system is set up. There will be another call in a sec')
      return
    }
    this._theMedOrders = this.getEhrData_Orders()
    this._marRecords = this.getEhrData_MarRecords()
  }
  /**
   * Get the medication orders current page data
   * @return {*}
   */
  getEhrData_Orders () {
    let pageTable = this.pageData.table
    let medOrders = pageTable.map(order => new MedOrder(order))
    if (debug) console.log('helper med orders', medOrders)
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
    // raw = Object.assign({}, raw)
    // console.log('getEhrData_MarRecords raw', JSON.stringify(raw))
    let records = raw.map( m => new MarEntity(m))
    records.sort( (a,b) => MarEntity.compare(a, b) )
    // console.log('getEhrData_MarRecords records', JSON.stringify(records))
    return records
  }

  /**
   * Get the MAR page definition
   * @return {*}
   */
  getPageDef_Mar () {
    return EhrDefs.getPageDefinition(MAR_PAGE_KEY)
  }

  /**
   * Get the property key, within the MAR page definition, that contains the MAR records
   * @return {*}
   */
  getMarTableKey () {
    let key
    try {
      let marsPageDef = this.getPageDef_Mar()
      let table
      if (marsPageDef.isV2) {
        // the mars page has one table element
        table = marsPageDef.pageElements.table
      } else {
        table = marsPageDef.tables[0]
      }
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
    // console.log('saveMarDialog key:', marTableKey, ', ', aMar)
    table.push(aMar)
    asLoadedPageData[marTableKey] = table
    let payload = {
      pageKey: MAR_PAGE_KEY,
      value: asLoadedPageData
    }
    return this.ehrHelp._saveData(payload)
  }
}
