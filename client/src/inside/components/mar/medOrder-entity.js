

export default class MedOrder {
  constructor (medOrObj) { //, ...[dose, scheduleType, scheduleTime, notes]) {
    this._data = {}
    if (typeof medOrObj ==='string') {
      this.medication = medOrObj
    } else if (typeof medOrObj === 'object') {
      this.data = medOrObj
    } else {
      // default
      this.data = {
        medication: undefined,
        dose: undefined,
        route: undefined,
        scheduleType: undefined,
        notes: undefined
      }
    }
  }

  static medOrderAsTextLine (med, maxLen) {
    if (!med instanceof MedOrder) {
      console.log('not MedOrder', med)
      return 'error'
    }
    let space = ', '
    let extract = t => t && t.trim().length > 0 ? space + t : ''
    let markup = med.medication
    markup += extract(med.dose)
    markup += extract(med.route)
    markup += extract(med.scheduleType)
    markup += extract(med.scheduleTime)
    markup += extract(med.notes)
    return markup.length > maxLen ? markup.substr(0,maxLen) + '...' : markup
  }

  set data (obj) { this._data = obj }
  get data () { return this._data }

  // NOTE:  There is no validation. We assume the medication order
  // is coming from the database values as stored by the medication order page.
  // In other words, the data is as good or bad as that page allows.

  get medication () { return this._data.medication }
  set medication (text) { this._data.medication = text }

  get dose () { return this._data.dose }
  set dose (text) { this._data.dose = text }

  get route () { return this._data.route }
  set route (text) { this._data.route = text }

  get scheduleType () { return this._data.scheduleType }
  set scheduleType (text) { this._data.scheduleType = text }

  get scheduleTime () { return this._data.scheduleTime }
  set scheduleTime (text) { this._data.scheduleTime = text }

  get notes () { return this._data.notes }
  set notes (text) { this._data.notes = text }


  //TODO explain how this works ...
  isScheduled (periodKey) {
    let result = this._data[periodKey]
    // console.log('Is this med order scheduled for ', periodKey, '? ', result)
    return result
  }


}