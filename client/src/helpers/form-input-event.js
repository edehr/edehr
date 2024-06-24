

export default class FormInputEvent {
  constructor (val, element, tableKey) {
    // { value: val, element: this.element, tableKey: this.tableKey }
    this._value = val
    this._element = element // maybe do just the key?
    this._tableKey = tableKey
  }

  toString () {
    let parts = []
    // tableKey, elementKey, formIndex, value
    part.push(this.elementKey)
    part.push(this.tableKey)
    part.push(this.formKey)
    part.push(this.value)
    return parts.join(', ')
  }
  get elementKey () { return this._element.elementKey}
  get formKey () { return this._element.formKey }
  get value () { return this._value}
  get tableKey () { return this._tableKey}
  getData () {
    return { value: this._value, element: this._element, tableKey: this._tableKey }
  }
}
