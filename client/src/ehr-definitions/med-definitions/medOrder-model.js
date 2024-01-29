import { MED_ORDERS_PAGE_KEY, MED_ORDERS_TABLE_KEY } from '../ehr-defs-grid'
import { hourStringToHour } from './mar-model'
import { makeHumanTableCell } from '../ehr-def-utils'

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
    let {med_dose, medicationOrdersTable_id, med_instructions, med_injectionLocation,
      med_scheduled,
      med_alert,
      med_prnMaxDosage, med_medication,
      med_reason, med_route, med_timing,
      med_time1, med_time2, med_time3, med_time4, med_time5, med_time6
    } = eData
    // translate the key data into human-readable
    med_route = makeHumanTableCell( 'medicationOrders', 'med_route', 'checkset', med_route)
    med_injectionLocation = makeHumanTableCell( 'medicationOrders', 'med_injectionLocation', 'select', med_injectionLocation)
    this._e.orderedDay = eData['medicationOrdersTable_day']
    this._e.orderedTime = eData['medicationOrdersTable_time']
    this._e.orderedBy = eData['medicationOrdersTable_name']
    this._e.profession = eData['medicationOrdersTable_profession']
    this._e.dose = med_dose
    this._e.alerts = med_alert
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
    this.scheduledHours = list.map(ts =>  {
      return { orderScheduleTime: ts, hour: hourStringToHour(ts) }
    })
  }

  /**
   * Compose the summary shown to the user in the UI
   * @returns {string}
   */
  medOrderSummary () {
    const list = []
    list.push(this.medName)
    list.push(this.dose)
    if (this.schedule) {
      let med_scheduled = this.schedule
      med_scheduled = makeHumanTableCell('medicationOrders', 'med_scheduled', 'select', med_scheduled)
      list.push(med_scheduled)
    }
    this.route ? list.push(this.route) : null
    this.location ? list.push(this.location) : null
    return list.join(', ')
  }

  /**
   * Compose a string of the orderedDay and orderedTime. This is handy to sort the medOrders.
   * @returns {string}
   */
  get sTime () { return this.orderedDay + '-' + this.orderedTime }

  /**
   * Determine if this medication order CAN BE scheduled for the given day and time.
   * @param dayNum
   * @param ts
   * @returns {boolean}
   */
  isScheduled (dayNum, ts) {
    return !! this.getScheduledTimeForDayTimeBlock (dayNum, ts)
  }
  // is the requested day/time equal to or greater than the ordered day/time?
  canOrderForDayTimeBlock (dayNum, ts) {
    const timeBlockHour = hourStringToHour(ts)
    const orderHr = hourStringToHour(this.orderedTime)
    const orderedDay = this.orderedDay
    return dayNum === orderedDay ? timeBlockHour >= orderHr : dayNum > orderedDay
  }
  getScheduledTimeForDayTimeBlock (dayNum, ts) {
    const timeBlockHour = hourStringToHour(ts)
    let schedule
    if (this.canOrderForDayTimeBlock(dayNum, ts)) {
      schedule = this.scheduledHours.find( sh => sh.hour === timeBlockHour)
    }
    return schedule // is object like { orderScheduleTime: ts, hour: hourStringToHour(ts) }
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
  hasScheduledTimes () {
    // If scheduledHours list contains any entry then this medication is scheduled. This is more reliable than checking the timing field.
    return this.scheduledHours.length > 0
    // return ['sched', 'set'].includes(this.timing)
  }
  isTimingGroup (timingCode) { return this.timing === timingCode }

  // todo replace day with orderedDay and time with orderedTime
  get day () { return  Number(this._e.orderedDay) }
  get alerts () { return this._e.alerts }
  get orderedDay () { return  Number(this._e.orderedDay) }
  get dose () { return this._e.dose }
  get id () { return this._e.id }
  get instructions () { return this._e.instructions }
  get location () { return this._e.location }
  get maxDose () { return this._e.maxDose }
  get medName () { return this._e.medName }
  get name () { return this._e.orderedBy }
  get profession () { return this._e.profession }
  get reason () { return this._e.reason }
  get route () { return this._e.route }
  get schedule () { return this._e.schedule}
  get time () { return this._e.orderedTime }
  get orderedTime () { return this._e.orderedTime }
  get timing () { return this._e.timing }
  get time1 () { return this._e.time1 }
  get time2 () { return this._e.time2 }
  get time3 () { return this._e.time3 }
  get time4 () { return this._e.time4 }
  get time5 () { return this._e.time5 }
  get time6 () { return this._e.time6 }
}// end class MedOrder
