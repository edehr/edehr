/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */
const should = require('should')
const EhrDataModel = require('../ehr-definitions/EhrDataModel')
const ehrData = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '06:00',
    diagnosis: 'COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'here',
        transferInDay: 0,
        transferInTime: '00:30',
        transferOutDay: 1,
        transferOutTime: '04:00',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '21:31',
        transferOutDay: 2,
        transferOutTime: '23:32',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  }
}

const PK = 'visit'
describe( 'EhrDataModel', () => {
  let model
  before(function () {
    model = new EhrDataModel(ehrData)
  })
  it('EhrDataModel', () => {
    should.exist(model)
    model.should.be.instanceOf(EhrDataModel)
    model.should.have.property('ehrData')
    model.should.have.property('pageKeys') // pages with data
    model.should.have.property('simTime')
    model.should.have.property('getPageData')
    model.should.have.property('getPageTableData')
    model.should.have.property('getPageFormData')
    // getRowData
    model.should.have.property('updatePageFormData')
    model.should.have.property('updateRowElem')
  })
  it('page data', () => {
    let data = model.getPageData(PK)
    data.should.have.property('admissionDay')
    data.admissionDay.should.equal('Day 0')
    data.should.have.property('admissionTime')
    data.admissionTime.should.equal('06:00')
    const result = JSON.stringify(data)
    const expected = JSON.stringify(ehrData.visit)
    const same = result.localeCompare(expected)
    same.should.equal(0)
  })
  it('form data', () => {
    let data = model.getPageFormData(PK,'admissionDay')
    data.should.equal('Day 0')
  })
  it('hasData', () => {
    let data = model.hasData(PK)
    data.should.equal(true)
  })
  it('getPageTableData', () => {
    let data = model.getPageTableData(PK,'table')
    data.should.be.instanceOf(Array)
    data.length.should.equal(2)
  })
  it('getRowData', () => {
    let data = model.getRowData(PK,'table', 0)
    data.should.be.instanceOf(Object)
    data.should.have.property('transferInTime')
    data.transferInTime.should.equal('00:30')
  })
  it('updatePageFormData', () => {
    model = new EhrDataModel(Object.assign({},ehrData))
    model.updatePageFormData(PK, 'admissionTime', '0600')
    model = new EhrDataModel(Object.assign({},model.ehrData))
    let data = model.getPageData(PK)
    data.should.have.property('admissionTime')
    data.admissionTime.should.equal('0600')
  })
  it('updateRowElem', () => {
    model = new EhrDataModel(Object.assign({},ehrData))
    model.updateRowElem(PK, 'table', 1,'transferInTime', '0030')
    model = new EhrDataModel(model.ehrData)
    let data = model.getRowData(PK,'table', 1)
    data.should.be.instanceOf(Object)
    data.should.have.property('transferInTime')
    data.transferInTime.should.equal('0030')
  })
})
