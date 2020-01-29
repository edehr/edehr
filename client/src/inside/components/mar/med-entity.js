import MarSchedule from './mar-schedule'

/**
 * MedOrder holds a medication order as stored in the db plus it has a list
 * of references to periodDef; one for each scheduled period this medication
 * has been prescribed for.
 */

export default class MedOrder {
  constructor (medOrObj) {
    this._data = medOrObj && medOrObj._data ? medOrObj._data : medOrObj
  }

  static medOrderAsTextLine (med) {
    if (!(med instanceof MedOrder)) {
      console.log('MedOrder.medOrderAsTextLine: input is not a MedOrder', med)
      return 'error'
    }
    let space = ', '
    let extract = t => t && t.trim().length > 0 ? space + t : ''
    let markup = med.medication
    // markup += extract(med.dose)
    markup += extract(med._data.route)
    // markup += extract(med._data.scheduleType)
    // markup += extract(med._data.scheduleTime)
    markup += extract(med._data.reason)
    return markup
  }

  // NOTE:  There is no validation. We assume the medication order
  // is coming from the database values as stored by the medication order page.
  // In other words, the data is as good or bad as that page allows.

  get medication () { return this._data.medication }
  get route () { return this._data.route }
  get reason () { return this._data.reason }
  get notes () { return this._data.notes }
  get scheduled () { return this._data.scheduled}
  get schedule () { return this._data.schedule}
  get administration () { return this._data.administration}

  set schedule (schedule)  { this._data.schedule = schedule}

  asObjectForApi () {
    let obj = Object.assign({},this._data)
    return obj
  }
  isScheduled (periodKey) {
    let result = false
    const schedule = new MarSchedule()
    /*
    The data imported from the db has a field for each schedule period. If this property exists and is true then
    the result of testing for a periodKey will be true.
     */
    if (this._data.administration === 'sched' && this._data.scheduled) { // V3, with schedule
      const possibleTimes = schedule.getScheduleFromTime(periodKey)
      result = possibleTimes.includes(this._data.scheduled)
    }else if (this._data.administration === 'prn') {
      const mo = this._data
      const timeKeys =  Object.keys(mo).filter(k=>k.includes('prn'))
      console.log('timeKeys', timeKeys)
      result = timeKeys.filter(t => mo[t] === periodKey)
      console.log('result >> ', result)
      result = result.length > 0
    } else if (this._data.scheduleTime) { // V2
      let st = this._data.scheduleTime
      result = st.includes(periodKey)
      // console.log('MedOrder isScheduled V2', periodKey, st, result)
    } else {
      // console.log('MedOrder isScheduled', periodKey, this)
      result = !!this._data[periodKey]
    }
    return result
  }

}