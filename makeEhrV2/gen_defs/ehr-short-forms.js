import EhrTypes from '../../client/src/helpers/ehr-types'

const Defs = {
  recordHeader: [
    {
      elementKey: 'name',
      inputType: 'text',
      label: 'Name',
      tableLabel: 'Identification',
      recHeader: true
    },
    {
      elementKey: 'profession',
      inputType: 'text',
      label: 'Profession',
      recHeader: true
    },
    {
      elementKey: 'day',
      inputType: 'visitDay',
      label: 'Day',
      recHeader: true
    },
    {
      elementKey: 'time',
      inputType: 'visitTime',
      label: 'Time',
      validation: 'time24',
      recHeader: true
    }
  ],

  checkBoxTextSpacer: [
    { inputType: 'checkbox' },
    { inputType: 'text', formOption: 'hideLabel' },
    { inputType: 'spacer'}
  ],
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
    if (entry.inputType === EhrTypes.shortFormTypes.checkBoxTextSpacer) {
      this.withCheckBoxTextSpacer(entry, postEntries, Defs.checkBoxTextSpacer)
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


  validateRecHeader (entry) {
    return entry.inputType === EhrTypes.shortFormTypes.recordHeader
  }

  withDate (entry, postEntries, defs) {
    // console.log('preprocess input with date ', entry)
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

  withCheckBoxTextSpacer (entry, postEntries, defs) {
    // console.log('withCheckBoxTextSpacer entry', entry)
    let toAdd = JSON.parse(JSON.stringify(defs))
    // console.log('withCheckBoxTextSpacer toAdd', toAdd)
    let main = toAdd[0]
    let text = toAdd[1]
    let spacer = toAdd[2]
    main.elementKey = entry.elementKey
    main.helperText = entry.helperText
    text.elementKey = entry.elementKey + 'Text'
    toAdd.forEach((e) => {
      e.pN = entry.pN
      e.fN = entry.fN
      e.gN = entry.gN
      e.sgN = entry.sgN
      e.tableColumn = entry.tableColumn
      e.label = entry.label
      e.tableLabel = entry.tableLabel
      // e.formOption = entry.formOption
      // console.log('withCheckBoxTextSpacer push e', e)
      postEntries.push(e)
    })
  }
}
const EhrShortForms = new EhrShortFormHelper()

module.exports = EhrShortForms