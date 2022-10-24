import StoreHelper from '../../../helpers/store-helper'

const SCHEDULED='SCHED'
const PRESCRIBED='PRN'
const ONCE_A_DAY = 'OD'
const PRN_KEYS =[]
for (let i = 1; i <= 6; i++) {
  PRN_KEYS.push(`prn${i}`)
}
// This list of keys with schedules must be kept in sync with the schedule
// dropdown options shown on the Medications page.
export class ScheduleOptions {
  static OPTIONS = {
    'BID / Q12H' : ['0800','2000'],
    TID: ['0800', '1600', '2200'],
    Q8H: ['0600','1400', '2200'],
    QID: ['0800','1200', '1700', '2200'],
    Q6H: ['0600', '1200', '1800', '2200', '0200'],
    Q4H: ['0600', '1000', '1400', '1800', '2200', '0200']
  }

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


/**
 * MedOrder holds a medication order as stored in the db plus it has a list
 * of scheduled times
 */

export default class MedOrder {
  constructor (medOrObj) {
    this._data = medOrObj && medOrObj._data ? medOrObj._data : medOrObj
    const medOrder = this._data
    // console.log('_createSchedule is', medOrder)
    let scheduleTimes = []
    const scheduleKey = medOrder.administration ? medOrder.administration.toUpperCase() : undefined
    if(scheduleKey === SCHEDULED) {
      try {
        scheduleTimes = ScheduleOptions.getSchedule(medOrder.scheduled)
      } catch(err) {
        //console.error('error medOrder', medOrder)
        StoreHelper.setApiError(`${err}`)
      }
    } else if(scheduleKey === PRESCRIBED) {
      PRN_KEYS.forEach(prn => {
        let prnTime = medOrder[prn]
        if (prnTime) {
          scheduleTimes.push(prnTime)
        }
      })
    } else if (scheduleKey === ONCE_A_DAY) {
      scheduleTimes.push('od')
    }
    // TODO need to handle the other administration options STAT and ONCE
    this._scheduleTimes = scheduleTimes
  }

  get medication () { return this._data.medication }
  get route () { return this._data.route }
  get reason () { return this._data.reason }
  get notes () { return this._data.notes }
  get scheduleTimes () { return this._scheduleTimes}

}