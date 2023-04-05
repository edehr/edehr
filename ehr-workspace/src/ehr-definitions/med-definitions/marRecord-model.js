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
      mo_medOrder,
      mo_schedDay,
      mo_schedTime
    } = eData
    // console.log('MedAdmin from eData', eData)
    this._ehrData = { }
    this._ehrData.isDraft = isDraft
    this._ehrData.comments = mar_comments
    this._ehrData.day = marTable_day
    this._ehrData.id = marTable_id
    this._ehrData.dose = mar_dose
    this._ehrData.medId = med_order_embedded
    this._ehrData.medicationSummary = mo_medOrder
    this._ehrData.name = marTable_name
    this._ehrData.profession = mar_profession
    this._ehrData.schedDay = mo_schedDay
    this._ehrData.schedTime = mo_schedTime
    this._ehrData.status = mar_status
    this._ehrData.time = marTable_time
    // const emsgs = this.validate()
    // if (emsgs) {
    //   console.error('something wrong creating mar record.', emsgs)
    // }
  }
  toString () {
    return `${this.medId} ${this.schedDay} ${this.schedTime} ${this.day} ${this.time} ${this.id}.`
  }
  // get sTime () { return this.day + '-' + this.time }
  /**
   * Some medication orders are scheduled (e.g. BID, Q4H, etc), others are not.
   * Determine if the medication order WAS scheduled for the given day and time
   * @param dayNum
   * @param ts
   * @returns {boolean}
   */
  isMoScheduled (dayNum, ts) {
    // console.log('this.schedDay', this.schedDay, this.schedTime)
    const d = Number(this.schedDay)
    const th = hourStringToHour(this.schedTime)
    const hr = hourStringToHour(ts)
    return d === dayNum && th === hr
  }
  isMarAdministered (dayNum, ts) {
    const d = Number(this.day)
    const th = hourStringToHour(this.time)
    const hr = hourStringToHour(ts)
    return d === dayNum && th === hr
  }

  get sTime () { return this.day + '-' + this.time }
  get day () { return this._ehrData.day }
  get dose () { return this._ehrData.dose }
  get id () { return this._ehrData.id }
  get isDraft () { return this._ehrData.isDraft }
  get medicationSummary () { return this._ehrData.medicationSummary }
  get medId () { return this._ehrData.medId }
  get comments () { return this._ehrData.comments }
  get name () { return this._ehrData.name }
  get profession () { return this._ehrData.profession }
  get status () { return this._ehrData.status }
  get time () { return this._ehrData.time }
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
    msg = ehrValidations.visitDay('day', this.day)
    if(msg) {
      errMsgList.push(msg)
    }
    msg = ehrValidations.time24('time', this.time)
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
