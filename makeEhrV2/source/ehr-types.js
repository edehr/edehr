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
  inputTypes: {
  },
  dataInputTypes: {
    checkbox: 'checkbox',
    select: 'select',
    calculatedValue: 'calculatedValue',
    checkset: 'checkset',
    date: 'date',
    ehrDOB: 'ehrDOB', // date of birth
    ehrPHN: 'ehrPHN',
    ehrPatientName: 'ehrPatientName',
    ehrLocation: 'ehrLocation',
    // day: 'day',
    ehrFile: 'ehrFile',
    ehr_embedded: 'ehr_embedded',
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
      check: 'check',
      select: 'select',
    },
    action: {
      disable: 'disable',
      visible: 'visble'
    }
  },
  nondataInputType: {
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
