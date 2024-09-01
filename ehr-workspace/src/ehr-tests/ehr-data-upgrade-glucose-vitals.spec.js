import { updateVitalsGlucose } from '../ehr-definitions/ehr-data-upgrade-glucose-vitals'

const ehrData = {
  vitals: {
    table: [
      {
        createdDate: '2024-09-01T08:59:04-07:00',
        table_name: 'Dorothea',
        table_profession: 'instructor',
        table_day: '1',
        table_time: '1800',
        table_id: 'vitals.table.0',
        bloodSugar: '4.5'
      },
      {
        createdDate: '2019-05-30T10:04:20-07:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '1',
        table_time: '0700',
        table_id: 'vitals.table.1',
        bloodSugar: '5'
      },
      {
        entryDay: '1',
        entryTime: '02:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '1',
        table_time: '0200',
        table_id: 'vitals.table.2',
        bloodSugar: '6'
      },
      {
        entryDay: '0',
        entryTime: '20:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '0',
        table_time: '2000',
        table_id: 'vitals.table.3',
        bloodSugar: '7'
      },
      {
        entryDay: '0',
        entryTime: '18:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '0',
        table_time: '1800',
        table_id: 'vitals.table.4',
        bloodSugar: '8'
      }
    ],
    lastUpdate: '2024-09-01T08:59:05-07:00'
  },
}

const ehrData2 = {
  vitals: {
    table: [
      {
        createdDate: '2024-09-01T08:59:04-07:00',
        table_name: 'Dorothea',
        table_profession: 'instructor',
        table_day: '1',
        table_time: '1800',
        table_id: 'vitals.table.0'
      },
      {
        createdDate: '2019-05-30T10:04:20-07:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '1',
        table_time: '0700',
        table_id: 'vitals.table.1',
        bloodSugar: '5'
      },
      {
        entryDay: '1',
        entryTime: '02:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '1',
        table_time: '0200',
        table_id: 'vitals.table.2',
        bloodSugar: '6'
      },
      {
        entryDay: '0',
        entryTime: '20:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '0',
        table_time: '2000',
        table_id: 'vitals.table.3'
      },
      {
        entryDay: '0',
        entryTime: '18:00',
        table_name: 'Jason',
        table_profession: 'RN',
        table_day: '0',
        table_time: '1800',
        table_id: 'vitals.table.4',
        bloodSugar: '8'
      }
    ],
    lastUpdate: '2024-09-01T08:59:05-07:00'
  },
}

const pageKey= 'vitals'
const table1Key = 'table'

describe( 'EhrData updates vitals to blood glucose table', () => {

  function validate (updatedData, originalData) {
    updatedData.should.have.property(pageKey)
    const pageData = updatedData[pageKey]
    pageData.should.have.property(table1Key)

    // check that the updated vitals table does not have blood sugar values
    const updatedTable = pageData[table1Key]
    for (let i = 0; i< updatedTable.length; i++) {
      const row1 = updatedTable[i]
      row1.should.not.have.property('bloodSugar')
    }

    // collect information from the original data
    let checkData = []
    const table1Original = originalData[pageKey][table1Key]
    console.log('table1Original', table1Original)
    for (let i = 0; i< table1Original.length; i++) {
      const row = table1Original[i]
      console.log('row', row)
      if (row.bloodSugar) {
        checkData.push({
          name: row.table_name,
          profession: row.table_profession,
          day: row.table_day,
          time: row.table_time,
          value: row.bloodSugar
        })
      }
    }
    console.log('check data', checkData)
    pageData.should.have.property('glucoseTable')
    const glucoseTable = pageData['glucoseTable']
    glucoseTable.length.should.equal(checkData.length)
    for (let i = 0; i< glucoseTable.length; i++) {
      const row1 = glucoseTable[i]
      const check = checkData[i]
      row1.should.have.property('gluBloodSugar')
      row1.gluBloodSugar.should.equal(check.value);
      ['name', 'profession', 'day', 'time'].forEach(key => {
        row1['glucoseTable_' + key].should.equal(check[key])
      })
    }
  }

  it('test updateVitalsGlucose ', () => {
    let data = JSON.parse(JSON.stringify(ehrData))
    const updatedData = updateVitalsGlucose(data, {})
    validate(updatedData, ehrData)
  })

  it('test updateVitalsGlucose data set 2 ', () => {
    let data = JSON.parse(JSON.stringify(ehrData2))
    const updatedData = updateVitalsGlucose(data, {})
    validate(updatedData, ehrData2)
  })

})
