import EhrTypes from '../../client/src/helpers/ehr-types'

const Defs = {
  // 'inputType': 'record_header'
  recordHeader: [
    {
      elementKey: 'name',
      inputType: 'text',
      label: 'Name',
      tableLabel: 'Identification',
    },
    {
      elementKey: 'profession',
      inputType: 'text',
      label: 'Profession',
    },
    {
      elementKey: 'day',
      inputType: 'day',
      label: 'Day',
    },
    {
      elementKey: 'time',
      inputType: 'time',
      label: 'Time',
    }
  ],

  checkBoxTextSpacer: [],
  checkBoxDate: [
    { inputType: 'checkbox' },
    { inputType: 'date', formOption: 'hideLabel' },
    { inputType: 'spacer'}
  ],
  textDate: [
    { inputType: 'text' },
    { inputType: 'date' },
    { inputType: 'spacer'}
  ]
}

class EhrShortFormHelper {
  preprocess (entry, postEntries) {
    if (entry.inputType === EhrTypes.shortFormTypes.recordHeader) {
      this.recHdr(entry, postEntries)
    }
    if (entry.inputType === EhrTypes.shortFormTypes.checkBoxDate) {
      this.withDate(entry, postEntries, Defs.checkBoxDate)
    }
    if (entry.inputType === EhrTypes.shortFormTypes.textDate) {
      this.withDate(entry, postEntries, Defs.textDate)
    }

  }

  recHdr (entry, postEntries) {
    // console.log('preprocess record header ', entry)
    let toAdd = JSON.parse(JSON.stringify(Defs.recordHeader))
    toAdd.forEach((e) => {
      e.pN = entry.pN
      e.fN = entry.fN
      e.gN = entry.gN
      e.sgN = entry.sgN
      e.tableColumn = entry.tableColumn
      postEntries.push(e)
    })
  }

  withDate (entry, postEntries, defs) {
    console.log('preprocess input with date ', entry)
    let toAdd = JSON.parse(JSON.stringify(defs))
    let main = toAdd[0]
    let date = toAdd[1]
    main.elementKey = entry.elementKey
    date.elementKey = entry.elementKey + 'Date'
    toAdd.forEach((e) => {
      e.pN = entry.pN
      e.fN = entry.fN
      e.gN = entry.gN
      e.sgN = entry.sgN
      e.tableColumn = entry.tableColumn
      e.label = entry.label
      e.tableLabel = entry.tableLabel
      // e.formOption = entry.formOption
      postEntries.push(e)
    })
  }

}
const EhrShortForms = new EhrShortFormHelper()

module.exports = EhrShortForms