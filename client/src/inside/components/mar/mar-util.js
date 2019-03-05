import { setApiError } from '../../../helpers/ehr-utills'
import MedOrder from './medOrder-entity'
import MarEntity from './mar-entity'
import PeriodDefs from './period-defs'

export const MAR_PAGE_KEY = 'medAdminRec'
export const MED_ORDERS_PAGE_KEY = 'medicationOrders'
export const SCHEDULE_FIELDSET = 'schedule'

export default class MarHelper {
  constructor (ehrHelp) {
    this.ehrHelp = ehrHelp
    this._marTableKey = this.getMarTableKey()
    this._periodDefs = new PeriodDefs()
  }

  marRefresh () {
    this._theMedOrders = this.getEhrData_Orders()
    this._marRecords = this.getEhrData_MarRecords()
    this._periodDefs.mergeOrdersSchedules(this._theMedOrders)
    this._periodDefs.mergeMarAndSchedule(this._marRecords)
  }
  get marTableKey () { return this._marTableKey }
  get periodDefsList () { return this._periodDefs.periodList }
  get periodDefinitions () { return this._periodDefs }
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
    return this.ehrHelp.getPageDefinition(MAR_PAGE_KEY)
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

  medText (med) {
    let space = ', '
    let extract = t => t && t.trim().length > 0 ? space + t : ''
    let markup = med.medication
    markup += extract(med.dose)
    markup += extract(med.route)
    markup += extract(med.type)
    markup += extract(med.notes)
    return markup
  }

  /**
   * Dialog validation for the MAR record dialog.  Expect input to contain properties:
   * - who : string name of person who administers the medication
   * - when : 24 hour clock time, optional leading 0.  0:00 === 0:00
   * 0:00 to 23:59 is valid
   * @param aMar
   * @return {Array}
   */
  validateInputs (aMar) {
    return Mar.validateInputs(aMar)
  }

  /**
   * Create a complete MAR and save to the MAR page data.
   * @param aMarEntity
   * @return {*}
   */
  saveMarDialog (aMarEntity) {
    let marTableKey = this.getMarTableKey()
    let asLoadedPageData = this.getEhrData_MarPageData()
    let table = asLoadedPageData[marTableKey] || []
    let aMar = aMarEntity.data
    console.log('saveMarDialog key:', marTableKey, ', ', aMar)
    table.push(aMar)
    let payload = {
      propertyName: MAR_PAGE_KEY,
      value: asLoadedPageData
    }
    return this.ehrHelp._saveData(payload)
  }
}
