import StoreHelper from '../../../helpers/store-helper'
import { MED_SCHEDULE_OPTIONS } from '@/ehr-definitions/ehr-def-utils'
const SCHEDULED='SCHED'
const PRESCRIBED='PRN'
const SETTIMES='SET'
const ONCE_A_DAY = 'OD'
const PRN_KEYS =[]
for (let i = 1; i <= 6; i++) {
  PRN_KEYS.push(`prn${i}`)
}
// This list of keys with schedules must be kept in sync with the schedule
// dropdown options shown on the Medications page.
export class ScheduleOptions {
  static OPTIONS = MED_SCHEDULE_OPTIONS

  static getKeys () {
    return Object.keys(this.OPTIONS)
  }

  static getSchedule (key) {
    let value = this.OPTIONS[key.toUpperCase()]
    if(!value) {
      // console.error('Could not find a medication schedule for key', key)
      throw new Error(`Could not find a medication schedule for key: ${key}`)
    }
    return value
  }
}

function _nonEmptyString (text) { return text && text.trim().length > 0 }

/**
 * MedOrder holds a medication order as stored in the db plus it has a list
 * of scheduled times
 */

export default class MedOrder {
  constructor (medOrObj) {
    this._data = medOrObj && medOrObj._data ? medOrObj._data : medOrObj
    const medOrder = this._data
    // console.log('_createSchedule is', medOrObj, medOrder)
    let scheduleTimes = []
    const scheduleKey = medOrder.administration ? medOrder.administration.toUpperCase() : undefined
    if(scheduleKey === SCHEDULED && _nonEmptyString(medOrder.scheduled)) {
      try {
        scheduleTimes = ScheduleOptions.getSchedule(medOrder.scheduled)
      } catch(err) {
        //console.error('error medOrder', medOrder)
        StoreHelper.setApiError(`${err}`)
      }
    } else if(scheduleKey === SETTIMES) {
      PRN_KEYS.forEach(prn => {
        let prnTime = medOrder[prn]
        if (prnTime) {
          scheduleTimes.push(prnTime)
        }
      })
    } else if (scheduleKey === ONCE_A_DAY) {
      scheduleTimes.push('od')
    } else if (scheduleKey === PRESCRIBED) {
      scheduleTimes.push('prn')
      // console.log('pushing a prn into scheduleTimes for med order', medOrder)
    }
    // TODO need to handle the other administration options STAT and ONCE
    this._scheduleTimes = scheduleTimes
  }

  get medication () { return this._data.medication }
  get administration () { return this._data.administration }
  get dose () { return this._data.dose }
  get route () { return this._data.route }
  get reason () { return this._data.reason }
  get instructions () { return this._data.instructions }
  get notes () { return this._data.notes }
  get scheduleTimes () { return this._scheduleTimes}
  get scheduleKey () { return this._data.scheduled}

}
