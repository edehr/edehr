import { validTimeStr, validDayStr } from '@/helpers/ehr-utils'
import MedOrder from './med-order'

const ERR_WHO = 'Must say who administered the medication'
const ERR_WHEN = 'Time must be 2400 hour format'
const ERR_DOSAGE = 'Must include dosage administered'
const ERR_DAY = 'Day must be one of 0,1,2,3,...'
const ERR_EMPTY_MEDS = 'Medication list can not be empty'
const DEFAULT_TIME = '0000'
const DEFAULT_DAY = 0

function validWho (text) { return text && text.trim().length > 0 }
function validDay (text) { return (/^([0-9]+)$/.test(text))}
function validDosage (text) { return text && text.trim().length > 0 }

/*
MAR record:
who,
when,
medication
 */
export default class MarEntity {
  constructor (whoOrObj, ...[day, actualTime, comment, scheduledTime, dosage, medOrder]) {
    this._data = {}
    if (typeof whoOrObj ==='string') { // from dialog
      // console.log('MarEntity create from dialog arguments')
      this._data.whoAdministered = whoOrObj
      this._data.dosage = dosage
      this._data.day = day
      this._data.actualTime = actualTime
      this._data.comment = comment
      this._data.scheduledTime = scheduledTime
      this._medOrder = medOrder
      this._data.medications = [this._medOrder]
      // period.medList.map(ml => ml.asObjectForApi())

    } else if (typeof whoOrObj === 'object') { // from database
      // console.log('MarEntity create from object', JSON.stringify(whoOrObj))
      this._data = whoOrObj._data ? whoOrObj._data : whoOrObj
      this._data.medications = this._data.medications.map( mo => new MedOrder(mo))
      // console.log('MarEntity  this._data.medications', JSON.stringify(this._data.medications))
    }
  }

  asObjectForApi () {
    let obj = Object.assign({},this._data)
    let medsList = []
    if (this._medOrder) {
      medsList.push(this._medOrder)
    }
    obj.medications = medsList
    return obj
  }

  // set data (obj) { this._data = obj }
  get data () { return this._data }

  get whoAdministered () { return this._data.whoAdministered }
  get actualTime () { return this._data.actualTime}
  get scheduledTime () { return this._data.scheduledTime}
  get comment () { return this._data.comment }
  get dosage () { return this._data.dosage }
  get day () { return this._data.day}
  get medications () { return this._data.medications}

  validate () {
    let errMsgList = []
    if(!validWho(this.whoAdministered)) {
      errMsgList.push(ERR_WHO)
    }
    if(!validDosage(this.dosage)) {
      errMsgList.push(ERR_DOSAGE)
    }
    if(!validDay(this.day)) {
      errMsgList.push(ERR_DAY)
    }
    if(!validTimeStr(this.actualTime)) {
      errMsgList.push(ERR_WHEN)
    }
    if (!this._data.medications || this._data.medications.length === 0) {
      errMsgList.push(ERR_EMPTY_MEDS)
    }
    // console.log('MarEntity validation errors',  errMsgList)
    return errMsgList
  }

  static compare (a, b, inverse) {
    let d1 = validDayStr(a.day) ? 1 * a.day : DEFAULT_DAY
    let d2 = validDayStr(b.day) ? 1 * b.day : DEFAULT_DAY
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
