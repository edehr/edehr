import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
const ehrData = {
  respiratory: {
    table: [
      {
        name: 'Jason',
        profession: 'RN',
        day: '0',
        time: '19:30',
        patent: true,
        lul: 'Deceased',
        rul: 'Deceased',
        rml: 'Deceased',
        lll: 'Deceased',
        rll: 'Deceased',
        respiratoryRhythm: 'Regular',
        respiratoryDepth: 'Shallow',
        cough: 'No',
        createdDate: '2019-05-30T22:32:42-07:00'
      }
    ]
  }
}


const pageKey= 'respiratory'
const tableKey= 'table'
const elementKeys = ['lul', 'rul', 'rml', 'lll', 'rll']
const newVal = 'Decreased'

describe( 'EhrData updates respiratory table', () => {

  function validate (updatedData) {
    updatedData.should.have.property(pageKey)
    updatedData[pageKey].should.have.property(tableKey)
    const table = updatedData[pageKey][tableKey]
    table.length.should.greaterThanOrEqual(1)
    const row1 = table[0]
    elementKeys.forEach( elementKey => {
      row1.should.have.property(elementKey)
      row1[elementKey].should.equal(newVal)
    })
  }

  // update this test whenever the current version changes
  it('test model updates respiratory and version ev2.2.2', () => {
    // the constructor updates the data and that uses updateRespiratory()
    const model = new EhrDataModel(ehrData)
    const updatedData = model.ehrData
    should.exists(updatedData)
    validate(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    const version = model.ehrVersion
    version.major.should.be.greaterThanOrEqual(2, 'version major 2')
    version.minor.should.be.greaterThanOrEqual(2, 'version minor 2')
    version.patch.should.be.greaterThanOrEqual(2, 'version patch 2')
  })
})
