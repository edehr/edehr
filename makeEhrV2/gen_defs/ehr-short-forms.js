const EhrShortForms = {
  // 'inputType': 'record_header'
  recordHeader: [
    {
      elementKey: 'name',
      // 'formIndex': '2',
      inputType: 'text',
      label: 'Name',
      tableLabel: 'Header',
      tableColumn: '1',
      // 'fqn': 'testTable.record_header'
    },
    {
      elementKey: 'profession',
      inputType: 'text',
      label: 'Profession',
      tableColumn: '1',
    },
    {
      elementKey: 'day',
      inputType: 'day',
      label: 'Day',
      tableColumn: '1',
    },
    {
      elementKey: 'time',
      inputType: 'time',
      label: 'Time',
      tableColumn: '1',
    }
  ]
}

module.exports = EhrShortForms