
export default class PeriodEntity {
  constructor (key, name) {
    this._data = {
      key: key,
      name: name
    }
    this.reset()
  }

  reset () {
    this.clearMedications()
    this.marRecord = undefined
  }

  get key () { return this._data.key }
  get name () { return this._data.name }

  set marRecord (marRecord) { this._data.marRecord = marRecord }
  get marRecord () { return this._data.marRecord }

  get medsList () { return this._data.medsList }
  addMedication (med) { this._data.medsList.push(med)}
  clearMedications () { this._data.medsList = []}

  hasMar () { return !!this.marRecord }
  hasMedications () { return this.medsList.length > 0 }
  needsMar () { return this.hasMedications() && !this.marRecord }

}
