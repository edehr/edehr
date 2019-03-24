/**
 * MedOrder holds a medication order as stored in the db plus it has a list
 * of references to periodDef; one for each scheduled period this medication
 * has been prescribed for.
 */

export default class MedOrder {
  constructor (medOrObj) {
    this._data = medOrObj
  }

  static medOrderAsTextLine (med, maxLen) {
    if (!(med instanceof MedOrder)) {
      // console.log('MedOrder.medOrderAsTextLine: input is not a MedOrder', med)
      return 'error'
    }
    let space = ', '
    let extract = t => t && t.trim().length > 0 ? space + t : ''
    let markup = med.medication
    // markup += extract(med.dose)
    markup += extract(med.route)
    markup += extract(med.scheduleType)
    markup += extract(med.scheduleTime)
    markup += extract(med.notes)
    return markup.length > maxLen ? markup.substr(0,maxLen) + '...' : markup
  }

  // set data (obj) { this._data = obj }
  // get data () { return this._data }

  // NOTE:  There is no validation. We assume the medication order
  // is coming from the database values as stored by the medication order page.
  // In other words, the data is as good or bad as that page allows.

  get medication () { return this._data.medication }
  // set medication (text) { this._data.medication = text }

  // Assume that dose is part of the medication
  // get dose () { return this._data.dose }
  // set dose (text) { this._data.dose = text }

  get route () { return this._data.route }
  // set route (text) { this._data.route = text }

  // get scheduleType () { return this._data.scheduleType }
  // set scheduleType (text) { this._data.scheduleType = text }

  get notes () { return this._data.notes }
  // set notes (text) { this._data.notes = text }

  isScheduled (periodKey) {
    /*
    The data imported from the db has a field for each schedule period. If this property exists and is true then
    the result of testing for a periodKey will be true.
     */
    let result = !!this._data[periodKey]
    return result
  }


}