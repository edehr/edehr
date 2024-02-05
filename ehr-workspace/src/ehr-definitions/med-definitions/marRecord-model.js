import { MAR_PAGE_KEY, MAR_V2_TABLE_KEY } from '../ehr-defs-grid'
import ehrValidations from '../ehr-validations'
import { hourStringToHour } from './mar-model'
export class MarRecords {
  constructor (ehrDataModel) {
    const medPage = ehrDataModel.getPageData(MAR_PAGE_KEY) || {}
    const tableEhrData = medPage[MAR_V2_TABLE_KEY] || []
    this._marList = tableEhrData.map( eData => new MarRecord(eData))
    this._marList.sort( (a,b) => a.sTime.localeCompare(b.sTime))
  }

  getMars () { return this._marList }

  getMarsForMedById (id) {
    return this._marList.filter( mar => {
      return mar.medId === id
    })
  }
  getDraftMarsForMedById (id) {
    return this._marList.filter( mar => {
      return mar.isDraft && mar.medId === id
    })
  }

}
function notEmptyString (text) { return text && text.trim().length > 0 }
const ERR_WHO = 'Must say who administered the medication'
const ERR_DOSAGE = 'Must include dosage administered'
// const ERR_EMPTY_MEDS = 'Must provide medication order.'
const ERR_STATUS = 'Must specify the status of this medication administration record'

export class MarRecord {
  constructor (eData) {
    // this.medOrders = medOrders
    const {
      isDraft,
      mar_comments,
      mar_dose,
      mar_profession,
      mar_status,
      marTable_day,
      marTable_id,
      marTable_name,
      marTable_time,
      med_order_embedded,
      mar_event_day,
      mar_event_time,
      mo_medOrder,
      mo_schedDay,
      mo_schedTime
    } = eData
    // console.log('MedAdmin from eData', eData)
    this._ehrData = { }
    this._ehrData.isDraft = isDraft
    this._ehrData.comments = mar_comments
    this._ehrData.recordDate = marTable_day
    this._ehrData.time = marTable_time
    this._ehrData.id = marTable_id
    this._ehrData.dose = mar_dose
    this._ehrData.medId = med_order_embedded
    this._ehrData.medicationSummary = mo_medOrder
    this._ehrData.name = marTable_name
    this._ehrData.profession = mar_profession
    this._ehrData.schedDay = mo_schedDay
    this._ehrData.schedTime = mo_schedTime
    this._ehrData.eventDay = mar_event_day
    this._ehrData.eventTime = mar_event_time
    this._ehrData.status = mar_status
    this._ehrData.time = marTable_time
    // const emsgs = this.validate()
    // if (emsgs) {
    //   console.error('something wrong creating mar record.', emsgs)
    // }
  }
  toString () {
    let [d, t] = this._getEventDT()
    return `${this.medId} ${this.schedDay} ${this.schedTime} ${d} ${t} ${this.id}.`
  }
  // get sTime () { return this.recordDate + '-' + this.time }
  /**
   * Some medication orders are scheduled (e.g. BID, Q4H, etc), others are not.
   * Determine if the medication order WAS scheduled for the given recordDate and time
   * @param dayNum
   * @param ts
   * @returns {boolean}
   */
  isMarMedScheduled (dayNum, ts) {
    // console.log('this.schedDay', this.schedDay, this.schedTime)
    const d = Number(this.schedDay)
    const th = hourStringToHour(this.schedTime)
    const hr = hourStringToHour(ts)
    return d === dayNum && th === hr
  }
  _getEventDT () {
    let d = this.recordDate
    let t = this.recordTime
    if (Number(this.eventDay) >= 0) {
      d = this.eventDay
      t = this.eventTime
    }
    d = Number(d)
    return [d, t]
  }
  isMarAdministered (dayNum, ts) {
    let result
    let [d, t] = this._getEventDT()
    t = hourStringToHour(t)
    const ts_hr = hourStringToHour(ts)
    result = d === dayNum && t === ts_hr
    // console.log('isma', result, dayNum, d, ts_hr, t)
    return result
  }

  get sTime () {
    let [d, t] = this._getEventDT()
    return d + '-' + t
  }
  get dose () { return this._ehrData.dose }
  get id () { return this._ehrData.id }
  get isDraft () { return this._ehrData.isDraft }
  get medicationSummary () { return this._ehrData.medicationSummary }
  get medId () { return this._ehrData.medId }
  get eventDay () { return this._ehrData.eventDay}
  get eventTime () { return this._ehrData.eventTime}
  get comments () { return this._ehrData.comments }
  get name () { return this._ehrData.name }
  get profession () { return this._ehrData.profession }
  get status () { return this._ehrData.status }
  get recordDate () { return this._ehrData.recordDate }
  get recordTime () { return this._ehrData.time }
  get schedDay () { return this._ehrData.schedDay}
  get schedTime () { return this._ehrData.schedTime}
  validate () {
    let msg
    let errMsgList = []
    if(!notEmptyString(this.name)) {
      errMsgList.push(ERR_WHO)
    }
    if(!notEmptyString(this.dose)) {
      errMsgList.push(ERR_DOSAGE)
    }
    if(!notEmptyString(this.status)) {
      errMsgList.push(ERR_STATUS)
    }
    // TODO translate the field names used in these validations
    msg = ehrValidations.visitDay('Event day', this.eventDay)
    if(msg) {
      errMsgList.push(msg)
    }
    msg = ehrValidations.time24('Event time', this.eventTime)
    msg = ehrValidations.visitDay('day', this.recordDate)
    if(msg) {
      errMsgList.push(msg)
    }
    msg = ehrValidations.time24('time', this.recordTime)
    if(msg) {
      errMsgList.push(msg)
    }
    if (this.schedDay) {
      msg = ehrValidations.visitDay('schedDay', this.schedDay)
      if (msg) {
        errMsgList.push(msg)
      }
      msg = ehrValidations.time24('schedTime', this.schedTime)
      if (msg) {
        errMsgList.push(msg)
      }
    }
    // if (!this.medId) {
    //   const med = this.medOrders.findById(this.medId)
    //   if (!med) {
    //     errMsgList.push(ERR_EMPTY_MEDS)
    //   }
    // }
    // console.log('MarEntity validation errors',  errMsgList)
    return errMsgList.length > 0 ? errMsgList : undefined
  }
}
