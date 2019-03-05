
export default class PeriodEntity {
  constructor (keyOrObj, ...[name]) {
    this._data = {
      key: undefined,
      name: undefined,
      medsList: [],
      marRecord: {},
      hasMar: false
    }
    if (typeof keyOrObj ==='string') {
      this.key = keyOrObj
      this.name = name
    } else if (typeof keyOrObj === 'object') {
      this.data = keyOrObj
      this.marRecord = {}
      this.hasMar = false
    } else {
      // default
    }
  }

  set data (obj) { this._data = obj }
  get data () { return this._data }

  // NOTE:  can set invalid values ... so use validate to verify

  set key (text) { this._data.key = text }
  get key () { return this._data.key }

  set name (text) { this._data.name = text }
  get name () { return this._data.name }

  set marRecord (marRecord) { this._data.marRecord = marRecord }
  get marRecord () { return this._data.marRecord }

  set hasMar (bool) { this._data.hasMar = bool }
  get hasMar () { return this._data.hasMar }


  set medsList (list) { this._data.medsList = list }
  get medsList () { return this._data.medsList }

  addMedication (med) { this._data.medsList.push(med)}
  clearMedications () { this._data.medsList = []}

}

PeriodEntity.prototype.toString =   function () {
  return 'Foo ' + JSON.stringify(this._data, null, 2)
}

