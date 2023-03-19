import { MAR_PAGE_KEY, MAR_V2_TABLE_KEY, MED_ORDERS_PAGE_KEY, MED_ORDERS_TABLE_KEY } from '../ehr-defs-grid'
import ehrValidations from '../ehr-validations'
// import * as assert from 'assert'
// import EhrDataModel from '../EhrDataModel'

function timeString (num) {
  return (num < 10 ? '0' : '') + num + '00'
}

export class MarTimelineModel {
  constructor (ehrDataModel) {
    // assert.ok(ehrDataModel instanceof EhrDataModel)
    this._timeline = {}
    this._medOrders = new MedOrders(ehrDataModel)
    this._marRecords = new MarRecords(ehrDataModel, this._medOrders)
    const simTime = ehrDataModel.simTime
    this._numberOfDays = simTime.visitDay === 0 ? 2 : simTime.visitDay + 1
    const dayNumbersArray = [...Array(this._numberOfDays).keys()]
    const HOURS = 24
    const dayTimeLine = [...Array(HOURS).keys()].map( t => timeString(t))
    /*
    timeline days will hold an array of MarDayBlock.
     */
    this._timeline.days = dayNumbersArray.map(d => { return new MarDayBlock(d, dayTimeLine, this.medOrders)
    })
  }
  get days () { return this._timeline.days}
  get timeLine () {return this._timeline}
  get numberOfDays () { return this._numberOfDays }
  get medOrders () { return this._medOrders }
  get contOrders () { return this._medOrders.getContinuousMedOrders() }
  get onceADayOrders () { return this._medOrders.getOnceADayMedOrders() }
  get onceOrders () { return this._medOrders.getOnceMedOrders() }
  get prnOrders () { return this._medOrders.getPrnMedOrders() }
  get schedOrders () { return this._medOrders.getScheduledMedOrders() }
  get statOrders () { return this._medOrders.getStatMedOrders() }
}

export class MarDayBlock {
  constructor (dayNumber, dayTimeLine, medOrders) {
    this.dayId = 'day-' + dayNumber
    this.dayNum = dayNumber
    this.label= 'day ' + dayNumber
    this.medOrders = medOrders
    this.dayTimeLine = dayTimeLine
    this.timeElements = dayTimeLine.map(ts => {
      return {
        key: 'de-' + dayNumber + '-' + ts,
        label: ts
      }
    })
  }
  getTimeElements (prefix) {
    const medList = this._medList(prefix)
    return this._getTE(medList)
  }
  _medList (prefix) {
    let list = []
    switch (prefix){
    case 'sched':
      list = this.medOrders.getScheduledMedOrders()
      break
    case 'once':
      list = this.medOrders.getOnceMedOrders()
      break
    case 'od':
      list = this.medOrders.getOnceADayMedOrders()
      break
    case 'cont':
      list = this.medOrders.getContinuousMedOrders()
      break
    case 'prn':
      list = this.medOrders.getPrnMedOrders()
      break
    case 'stat':
      list = this.medOrders.getStatMedOrders()
      break
    default:
      console.log('MISSING handle for ', prefix)
    }
    return list || []
  }

  _getTE (medList) {
    return medList.map(mo => {
      return {
        medName: mo.med_medication,
        max: mo.maxDose,
        mid: mo.id,
        timeElements: this.dayTimeLine.map(ts => {
          // this is a complicated way to write a function that returns an object
          return (new TimeElement(this.dayNum, ts, mo)).struct
        })
      }
    })
  }
}

class TimeElement {
  constructor (dayNum, ts, mo) {
    this._struct = {
      // create a key for a vue for loop. key to be unique across other time elements
      key: dayNum + ts + mo.id,
      dose: mo.dose, // to use for display on grid
      dayNum: dayNum, // for convenience of dev
      ts: ts, // for convenience of dev
      medOrder: mo, // quick access to med order for showing the mar dialog
      isScheduled: mo.isScheduled(dayNum, ts) // show button or not
    }
  }

  get struct () { return this._struct }
}

export class MedOrders {
  constructor (ehrDataModel) {
    const medPage = ehrDataModel.getPageData(MED_ORDERS_PAGE_KEY) || {}
    const tableEhrData = medPage[MED_ORDERS_TABLE_KEY] || []
    this._medList = tableEhrData.map( (eData) => new MedOrder(eData))
    this._medList.sort( (a,b) => a.sTime.localeCompare(b.sTime))
  }

  getList () { return this._medList}
  findByMedication ( medName ) {
    let result
    result =  this._medList.find( mo => mo.medName === medName)
    // console.log('result for find ', medName, result.toString())
    return result
  }
  findById ( medId ) {
    let result
    result =  this._medList.find( mo => mo.id === medId)
    // console.log('result for find ', medName, result.toString())
    return result
  }
  getContinuousMedOrders () {
    return this._medList.filter( mo => mo.isContinuous() )
  }
  getOnceADayMedOrders () {
    return this._medList.filter( mo => mo.isOnceADay() )
  }
  getOnceMedOrders () {
    return this._medList.filter( mo => mo.isOnce() )
  }
  getPrnMedOrders () {
    return this._medList.filter( mo => mo.isPrn() )
  }
  getScheduledMedOrders () {
    return this._medList.filter( mo => mo.isSchedulable() )
  }
  getStatMedOrders () {
    return this._medList.filter( mo => mo.isStat() )
  }
}

export class MedOrder {
  constructor (eData) {
    this._ehrData = {}
    const {med_dose, medicationOrdersTable_id, med_instructions, med_injectionLocation,
      med_prnMaxDosage, med_medication,
      med_reason, med_route, med_timing,
      med_time1, med_time2, med_time3, med_time4, med_time5, med_time6
    } = eData
    this.day = eData['medicationOrdersTable_day']
    this.time = eData['medicationOrdersTable_time']
    this.name = eData['medicationOrdersTable_name']
    this.profession = eData['medicationOrdersTable_profession']
    this.id = medicationOrdersTable_id
    this.dose = med_dose
    this.instructions = med_instructions
    this.location = med_injectionLocation
    this.maxDose = med_prnMaxDosage
    this.medName = med_medication
    this.reason = med_reason
    this.route = med_route
    this.timing = med_timing
    this.time1 = med_time1; this.time2 = med_time2
    this.time3 = med_time3; this.time4 = med_time4
    this.time5 = med_time5; this.time6 = med_time6
  }
  get sTime () { return this.day + '-' + this.time }
  isScheduled (dayNum, ts) {
    let ok
    const d = Number(this.day)
    const t = Number(this.time)
    ok = dayNum === d ? ts >= t : dayNum > d
    ok = ok && this.tsList().includes(ts)
    return ok
  }
  tsList () {
    return [this.time1, this.time2, this.time3, this.time4, this.time5, this.time6].filter( ts => ts && ts.length > 0)
  }
  isSchedulable () { return ['sched', 'set'].includes(this.timing)}
  isContinuous () { return this.timing === 'cont'}
  isOnceADay () { return this.timing === 'od'}
  isOnce () { return this.timing === 'once'}
  isPrn () { return this.timing === 'prn'}
  isStat () { return this.timing === 'stat'}

  get day () { return this._ehrData.day }
  set day (d) { this._ehrData.day = d }
  get dose () { return this._ehrData.med_dose }
  set dose (d) { this._ehrData.med_dose = d }
  get id () { return this._ehrData._id }
  set id (id) { this._ehrData._id = id}
  get instructions () { return this._ehrData.med_instructions }
  set instructions (txt) { this._ehrData.med_instructions = txt }
  get location () { return this._ehrData.med_injectionLocation }
  set location (txt) { this._ehrData.med_injectionLocation = txt }
  get maxDose () { return this._ehrData.med_prnMaxDosage }
  set maxDose (txt) { this._ehrData.med_prnMaxDosage = txt }
  get medName () { return this._ehrData.med_medication }
  set medName (txt) { this._ehrData.med_medication = txt }
  get name () { return this._ehrData.name }
  set name (txt) { this._ehrData.name = txt }
  get profession () { return this._ehrData.profession }
  set profession (txt) { this._ehrData.profession = txt }
  get reason () { return this._ehrData.med_reason }
  set reason (txt) { this._ehrData.med_reason = txt }
  get route () { return this._ehrData.med_route }
  set route (txt) { this._ehrData.med_route = txt }
  get time () { return this._ehrData.time }
  set time (txt) { this._ehrData.time = txt }
  get timing () { return this._ehrData.med_timing }
  set timing (txt) { this._ehrData.med_timing = txt }
  get time1 () { return this._ehrData.med_time1 }
  set time1 (txt) { this._ehrData.med_time1 = txt }
  get time2 () { return this._ehrData.med_time2 }
  set time2 (txt) { this._ehrData.med_time2 = txt }
  get time3 () { return this._ehrData.med_time3 }
  set time3 (txt) { this._ehrData.med_time3 = txt }
  get time4 () { return this._ehrData.med_time4 }
  set time4 (txt) { this._ehrData.med_time4 = txt }
  get time5 () { return this._ehrData.med_time5 }
  set time5 (txt) { this._ehrData.med_time5 = txt }
  get time6 () { return this._ehrData.med_time6 }
  set time6 (txt) { this._ehrData.med_time6 = txt }
  /*
med_group_infusion_c1
med_c1_dose
med_c1_medication
med_c1_volume
med_c1_solution
med_c1_time
med_c1_timeUnits
med_group_infusion_c2
med_c2_dose
med_c2_medication
med_c2_volume
med_c2_solution
med_c2_time
med_c2_timeUnits
med_group_notes
med_instructions
   */
}// end class MedOrder

export class MarRecords {
  constructor (ehrDataModel, medOrders) {
    const medPage = ehrDataModel.getPageData(MAR_PAGE_KEY) || {}
    const tableEhrData = medPage[MAR_V2_TABLE_KEY] || []
    this._marList = tableEhrData.map( eData => new MedAdmin(eData, medOrders))
    this._marList.sort( (a,b) => a.sTime.localeCompare(b.sTime))
  }

  getMars () { return this._marList }
}

function notEmptyString (text) { return text && text.trim().length > 0 }
const ERR_WHO = 'Must say who administered the medication'
const ERR_DOSAGE = 'Must include dosage administered'
const ERR_EMPTY_MEDS = 'Must provide medication order.'

export class MedAdmin {
  constructor (eData, medOrders) {
    const {day, time, name, profession, medId, marDose, comments} = eData
    this._ehrData = { }
    this.medOrders = medOrders
    this.day = day
    this.time = time
    this.name = name
    this.profession = profession
    this.medId = medId
    this.marDose = marDose
    this.comments = comments
  }
  get sTime () { return this.day + '-' + this.time }

  get day () { return this._ehrData.day }
  set day (dayNum) { this._ehrData.day = dayNum}
  get dose () { return this._ehrData.marDose }
  set dose (txt) { this._ehrData.marDose = txt }
  get medId () { return this._ehrData.medId }
  set medId (txt) { this._ehrData.medId = txt }
  get comments () { return this._ehrData.comments }
  set comments (txt) { this._ehrData.comments = txt}
  get name () { return this._ehrData.name }
  set name (txt) { this._ehrData.name = txt }
  get profession () { return this._ehrData.profession }
  set profession (txt) { this._ehrData.profession = txt}
  get time () { return this._ehrData.time }
  set time (txt) { this._ehrData.time = txt }

  validate () {
    let msg
    let errMsgList = []
    if(!notEmptyString(this.name)) {
      errMsgList.push(ERR_WHO)
    }
    if(!notEmptyString(this.dose)) {
      errMsgList.push(ERR_DOSAGE)
    }
    msg = ehrValidations.visitDay('day', this.day)
    if(!msg) {
      errMsgList.push(msg)
    }
    msg = ehrValidations.time24('time', this.time)
    if(!msg) {
      errMsgList.push(msg)
    }
    if (!this.medId) {
      const med = this.medOrders.findByMedication(this.medId)
      if (!med) {
        errMsgList.push(ERR_EMPTY_MEDS)
      }
    }
    // console.log('MarEntity validation errors',  errMsgList)
    return errMsgList
  }

  inDbFormat () {
    return {
      day: this.day,
      time: this.time,
      name: this.name,
      profession: this.profession,
      medId: this.medId,
      dose: this.dose,
      comments: this.comments
    }
  }
}
