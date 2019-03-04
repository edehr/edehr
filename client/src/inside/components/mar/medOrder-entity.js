

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
        scheduleType: undefined,
        notes: undefined
      }
    }
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