import EhrTypes from '../../client/src/helpers/ehr-types'

const Defs = {
  recordHeader: [
    {
      elementKey: 'persona',
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
      inputType: 'day',
      label: 'Day',
      recHeader: true
    },
    {
      elementKey: 'time',
      inputType: 'time',
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
    // console.log('preprocess input with date ', entry)
    let toAdd = JSON.parse(JSON.stringify(defs))
    let main = toAdd[0]
    let text = toAdd[1]
    let spacer = toAdd[2]
    let dataCaseStudy = entry.dataCaseStudy
    main.elementKey = entry.elementKey
    main.dataCaseStudy = !!dataCaseStudy
    text.elementKey = entry.elementKey + 'Text'
    text.dataCaseStudy = dataCaseStudy
    spacer.dataCaseStudy = undefined
    toAdd.forEach((e) => {
      e.pN = entry.pN
      e.fN = entry.fN
      e.gN = entry.gN
      e.sgN = entry.sgN
      e.tableColumn = entry.tableColumn
      e.label = entry.label
      e.tableLabel = entry.tableLabel
      // e.dataCaseStudy = entry.dataCaseStudy
      // e.formOption = entry.formOption
      postEntries.push(e)
    })
  }
}
const EhrShortForms = new EhrShortFormHelper()

module.exports = EhrShortForms