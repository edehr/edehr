/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */
/*
Define constants for EHR definition field names
 */
const EhrTypes = {
  elementProperties: {
    elementKey: 'elementKey',
    inputType: 'inputType',
    defaultValue : 'defaultValue',
    ehrFile: 'ehrFile',
    embedRef: 'embedRef',
    label: 'label',
    validation: 'validation',
    mandatory: 'mandatory',
    dataCaseStudy: 'dataCaseStudy'
  },
  inputTypes: { // becomes the field that holds all types. See below
  },
  dataInputTypes: {
    checkbox: 'checkbox',
    select: 'select',
    calculatedValue: 'calculatedValue',
    checkset: 'checkset',
    date: 'date',
    ehrDOB: 'ehrDOB', // date of birth copied from demographics page
    ehrPHN: 'ehrPHN',
    ehrPatientName: 'ehrPatientName',
    ehrLocation: 'ehrLocation',
    // day: 'day',
    ehrFile: 'ehrFile',
    ehr_embedded: 'ehr_embedded',
    mainDOB: 'mainDOB', // main edit field on demographics page. Year is computed base on dependant age field.
    personAge: 'personAge',
    practitionerName: 'practitionerName',
    practitionerProfession: 'practitionerProfession',
    text: 'text',
    textarea: 'textarea',
    // time: 'time',
    lookahead: 'lookahead',
    number: 'number',
    visitDay: 'visitDay',
    visitTime: 'visitTime'
  },
  dependentOn: {
    splitActionKeyOn: ':',
    splitKeyValueOn: '=',
    prefix: 'dependent:',
    type: {
      age: 'age',
      check: 'check',
      select: 'select',
    },
    action: {
      age: 'age',
      disable: 'disable',
      visible: 'visble'
    }
  },
  nondataInputType: {
    // recordConfirm: 'recordConfirm', // confirm button and message for EHR dialogs
    form_label: 'form_label',
    assetLink: 'assetLink',
    spacer: 'spacer',
    horizontal: 'horizontal'
  },

  structuralTypes: {
    page: 'page',
    page_form: 'page_form',
    table_form: 'table_form',
    group: 'ehr_group',
    subgroup: 'ehr_subgroup'
  },

  shortFormTypes: {
    recordHeader: 'record_header',
    checkBoxTextSpacer: 'checkbox_text_spacer',
    checkBoxDate: 'checkbox_date',
    textDate: 'text_date'
  }
}

EhrTypes.inputTypes = Object.assign({},
  EhrTypes.structuralTypes,
  EhrTypes.dataInputTypes,
  EhrTypes.dependantOn,
  EhrTypes.nondataInputType,
  EhrTypes.shortFormTypes
)


module.exports = EhrTypes
