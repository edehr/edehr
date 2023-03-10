/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */
import EhrDataModel from '../ehr-definitions/EhrDataModel'
const should = require('should')

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

const expected = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '0600',
    diagnosis: 'COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'here',
        transferInDay: 0,
        transferInTime: '0030',
        transferOutDay: 1,
        transferOutTime: '0400',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '2131',
        transferOutDay: 2,
        transferOutTime: '2332',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  },
  meta: {
    simTime: {
      visitDay: 0,
      visitTime: '0000'
    },
    ehrVersion: 'ev2.1.1'
  }
}
const PK = 'visit'
describe( 'EhrDataModel', () => {
  let model
  before(function () {
    model = new EhrDataModel(ehrData)
    // console.log(JSON.stringify(model.ehrData,null,2))
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
    model.should.have.property('_updatePageFormData')
    model.should.have.property('_updateRowElem')
  })
  it('page data', () => {
    let data = model.getPageData(PK)
    data.should.have.property('admissionDay')
    data.admissionDay.should.equal('Day 0')
    data.should.have.property('admissionTime')
    data.admissionTime.should.equal('0600')
    const result = JSON.stringify(data)
    const expectedStr = JSON.stringify(expected.visit)
    // console.log(result)
    // console.log(expectedStr)
    const same = result.localeCompare(expectedStr)
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
    data.transferInTime.should.equal('0030')
  })
  it('_updatePageFormData', () => {
    model = new EhrDataModel(ehrData)
    model._updatePageFormData(PK, 'admissionTime', '0634')
    model = new EhrDataModel(model.ehrData)
    let data = model.getPageData(PK)
    data.should.have.property('admissionTime')
    data.admissionTime.should.equal('0634')
  })
  it('private _updateRowElem', () => {
    model = new EhrDataModel(ehrData)
    model._updateRowElem(PK, 'table', 1,'transferInTime', '0030')
    model = new EhrDataModel(model.ehrData)
    let data = model.getRowData(PK,'table', 1)
    data.should.be.instanceOf(Object)
    data.should.have.property('transferInTime')
    data.transferInTime.should.equal('0030')
  })
})
