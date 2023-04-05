import { MED_ORDERS_PAGE_KEY, MED_ORDERS_TABLE_KEY } from '../ehr-defs-grid'
import { hourStringToHour } from './mar-model'

export class MedOrders {
  constructor (ehrDataModel) {
    const medPage = ehrDataModel.getPageData(MED_ORDERS_PAGE_KEY) || {}
    const tableEhrData = medPage[MED_ORDERS_TABLE_KEY] || []
    this._medList = tableEhrData.map( (eData) => new MedOrder(eData))
    this._medList.sort( (a,b) => a.sTime.localeCompare(b.sTime))
  }
  getList () { return this._medList}
  findByMedication ( medName ) {
    return this._medList.find( mo => mo.medName.toLocaleLowerCase().includes(medName.toLocaleLowerCase()))
  }
  findById ( medId ) {
    let result
    result =  this._medList.find( mo => mo.id === medId)
    // console.log('result for find ', medName, result.toString())
    return result
  }
  getOrdersByGroup (timingCode) {
    return this._medList.filter( mo => mo.isTimingGroup(timingCode) )
  }
}

export class MedOrder {
  constructor (eData) {
    this._e = {}
    const {med_dose, medicationOrdersTable_id, med_instructions, med_injectionLocation,
      med_scheduled,
      med_prnMaxDosage, med_medication,
      med_reason, med_route, med_timing,
      med_time1, med_time2, med_time3, med_time4, med_time5, med_time6
    } = eData
    this._e.day = eData['medicationOrdersTable_day']
    this._e.time = eData['medicationOrdersTable_time']
    this._e.name = eData['medicationOrdersTable_name']
    this._e.profession = eData['medicationOrdersTable_profession']
    this._e.dose = med_dose
    this._e.id = medicationOrdersTable_id
    this._e.instructions = med_instructions
    this._e.location = med_injectionLocation
    this._e.maxDose = med_prnMaxDosage
    this._e.medName = med_medication
    this._e.reason = med_reason
    this._e.route = med_route
    this._e.schedule = med_scheduled
    this._e.timing = med_timing
    this._e.time1 = med_time1; this._e.time2 = med_time2
    this._e.time3 = med_time3; this._e.time4 = med_time4
    this._e.time5 = med_time5; this._e.time6 = med_time6
    const list = [
      this.time1, this.time2,
      this.time3, this.time4,
      this.time5, this.time6].filter( ts => ts && ts.length > 0)
    this.scheduledHours = list.map(ts => hourStringToHour(ts))
  }

  /**
   * Compose the summary shown to the user in the UI
   * @returns {string}
   */
  medOrderSummary () {
    const list = []
    list.push(this.medName)
    list.push(this.dose)
    list.push(this.route)
    list.push(this.schedule)
    return list.join(' ')
  }

  /**
   * Compose a string of the day and time. This is handy to sort the medOrders.
   * @returns {string}
   */
  get sTime () { return this.day + '-' + this.time }

  /**
   * Determine if this medication order CAN BE scheduled for the given day and time.
   * @param dayNum
   * @param ts
   * @returns {boolean}
   */
  isScheduled (dayNum, ts) {
    const tshr = hourStringToHour(ts)
    const mohr = hourStringToHour(this.time)
    const d = Number(this.day) // ordered on day
    // is the requested day/time equal to or greater than the ordered day/time?
    let can = dayNum === d ? tshr >= mohr : dayNum > d
    // then is the time argument in the list of scheduled times.
    // Need to only consider the hour part of the time because the mar timeline
    // model only has hour time blocks.
    return can && undefined !== this.scheduledHours.find( sh => sh === tshr)
  }

  /**
   * isPrn is useful to determine if the UI should show the max dose field.
   * @returns {boolean}
   */
  isPrn () {
    return ['prn'].includes(this.timing)
  }

  /**
   * isStatOrOnce is used by the UI to determine if it should show the med admin button beside the medication summary.
   * @returns {boolean}
   */
  isStatOrOnce () {
    return ['stat', 'once'].includes(this.timing)
  }

  /**
   * Does this medication order have scheduled times?
   * @returns {boolean}
   */
  isSchedulable () {
    // If scheduledHours list contains any entry then this medication is scheduled. This is more reliable than checking the timing field.
    return this.scheduledHours.length > 0
    // return ['sched', 'set'].includes(this.timing)
  }
  isTimingGroup (timingCode) { return this.timing === timingCode }

  get day () { return  Number(this._e.day) }
  get dose () { return this._e.dose }
  get id () { return this._e.id }
  get instructions () { return this._e.instructions }
  get location () { return this._e.location }
  get maxDose () { return this._e.maxDose }
  get medName () { return this._e.medName }
  get name () { return this._e.name }
  get profession () { return this._e.profession }
  get reason () { return this._e.reason }
  get route () { return this._e.route }
  get schedule () { return this._e.schedule}
  get time () { return this._e.time }
  get timing () { return this._e.timing }
  get time1 () { return this._e.time1 }
  get time2 () { return this._e.time2 }
  get time3 () { return this._e.time3 }
  get time4 () { return this._e.time4 }
  get time5 () { return this._e.time5 }
  get time6 () { return this._e.time6 }
}// end class MedOrder
