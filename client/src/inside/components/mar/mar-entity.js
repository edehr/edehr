import { setApiError, validTimeStr, validDayStr } from '../../../helpers/ehr-utills'
import PeriodDefs from './period-defs'

const ERR_WHO = 'Must provide who administered'
const ERR_WHEN = 'Time must be 24:00 hour format'
const ERR_DAY = 'Day must be one of 0,1,2,3,...'
const ERR_EMPTY_MEDS = 'Medication list can not be empty'
const ERR_SCHEDULE = 'Must provide the scheduled time'

const DEFAULT_TIME = '0:00'
const DEFAULT_DAY = 0

function validWho (text) { return text && text.trim().length > 0 }
function validDay (text) { return (/^([0-9]+)$/.test(text))}



/*
MAR record:
who,
when,
medication
 */
export default class MarEntity {
  constructor (whoOrObj, ...[day, when, comment, period]) {
    this._data = {}
    if (typeof whoOrObj ==='string') {
      // console.log('MarEntity create from arguments')
      this.whoAdministered = whoOrObj
      this.day = day
      this.actualTime = when
      this.comment = comment
      if(period) {
        this.setPeriod(period)
      }
    } else if (typeof whoOrObj === 'object') {
      // console.log('MarEntity create from object', whoOrObj)
      this.data = whoOrObj
    } else {
      // console.log('MarEntity create default')
      this.data = {
        whoAdministered: undefined,
        actualTime: undefined,
        comment: '',
        scheduledTime: undefined,
        day: undefined,
        medications: []
      }
    }
  }

  set data (obj) { this._data = obj }
  get data () { return this._data }

  // NOTE:  can set invalid values ... so use validate to verify

  set whoAdministered (text) { this._data.whoAdministered = text }
  get whoAdministered () { return this._data.whoAdministered }

  set actualTime (text) { this._data.actualTime = text  }
  get actualTime () { return this._data.actualTime}

  set scheduledTime (text) { this._data.scheduledTime = text  }
  get scheduledTime () { return this._data.scheduledTime}

  set comment (text) { this._data.comment = text }
  get comment () { return this._data.comment }

  set day (text) { this._data.day = text }
  get day () { return this._data.day}

  set medications (list) { this._data.medications = list }
  get medications () { return this._data.medications}

  // // TODO add validation to set period
  // set periodInfo (p) { this._data.periodInfo = p }
  // // p.medsList.forEach( med => {
  // //   this_data.medications.push(med)
  // // })
  // // }
  // get periodInfo () { return this._data.periodInfo }
  //

  setPeriod (period) {
    // console.log('MarEntity set period ', period)
    this.scheduledTime = period.key
    // copy the med list but get the inner raw data so we can store it in the db
    this.medications = period.medsList ? period.medsList.map(m => m.data) : []
  }

  validate () {
    const _periodDefs = new PeriodDefs()
    let errMsgList = []
    if(!validWho(this.whoAdministered)) {
      errMsgList.push(ERR_WHO)
    }
    if(!validDay(this.day)) {
      errMsgList.push(ERR_DAY)
    }
    if(!_periodDefs.validScheduledTime(this.scheduledTime)) {
      errMsgList.push(ERR_SCHEDULE)
    }
    if(!validTimeStr(this.actualTime)) {
      errMsgList.push(ERR_WHEN)
    }
    if (!this._data.medications || this._data.medications.length == 0) {
      errMsgList.push(ERR_EMPTY_MEDS)
    }
    // console.log('MarEntity validation errors',  errMsgList)
    return errMsgList
  }

  static compare (a, b, inverse) {
    let d1 = validDayStr(a.day) ? 1 * a.day : 0
    let d2 = validDayStr(b.day) ? 1 * b.day : 0
    let diff = d1 - d2
    let result =  diff !== 0 ? diff : MarEntity._compareTime(a.actualTime, b.actualTime)
    return inverse ? -1 * result : result
  }

  static _compareTime ( t1, t2 ) {
    t1 = validTimeStr(t1) ? t1 : DEFAULT_TIME
    t2 = validTimeStr(t2) ? t2 : DEFAULT_TIME
    let p1 = t1.split(':')
    let p2 = t2.split(':')
    let hrDiff = p1[0] - p2[0]
    let minDiff = p1[1] - p2[1]
    return hrDiff === 0 ? minDiff : hrDiff
  }
}
