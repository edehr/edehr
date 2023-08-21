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

const f = {
  admissionDay: 'Day 0',
  admissionTime: '0600',
  diagnosis: 'COPD\nShortness of breath\nDizzy',
  status: 'Admitted',
  table: [{
    location: 'here',
    transferInDay: 0,
    transferInTime: '0030',
    transferOutDay: 1,
    transferOutTime: '0400',
    createdDate: '2022-08-17T00:37:42-07:00',
    table_id: 'visit.table.0'
  }, {
    location: 'there',
    transferInDay: 1,
    transferInTime: '2131',
    transferOutDay: 2,
    transferOutTime: '2332',
    createdDate: '2022-08-17T00:37:42-07:00',
    table_id: 'visit.table.1'
  }],
  lastUpdate: '2022-08-17T00:37:42-07:00'
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
        createdDate: '2022-08-17T00:37:42-07:00',
        table_id: 'visit.table.0'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '2131',
        transferOutDay: 2,
        transferOutTime: '2332',
        createdDate: '2022-08-17T00:37:42-07:00',
        table_id: 'visit.table.1'
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
    console.log(result)
    console.log(expectedStr)
    // const same = result.localeCompare(expectedStr)
    result.should.equal(expectedStr)
    // same.should.equal(0,expectedStr)
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

describe ('EhrDataModel class methods', () => {
  it ('MetaEhrVersion', () => {
    let e = {
      meta: {
        ehrVersion: 'ev2.8.1'
      }
    }
    let ver = EhrDataModel.MetaEhrVersion(e)
    ver.major.should.equal(2)
    ver.minor.should.equal(8)
    ver.patch.should.equal(1)
  })

  it ('CheckVer', () => {
    let e
    e = {
      meta: {
        simTime: {
          visitDay: 0,
          visitTime: '0000'
        },
        ehrVersion: 'ev2.1.1'
      }
    }
    true.should.equal(EhrDataModel.CheckVer(e, 2, 1, 0), 'pre')
    true.should.equal(EhrDataModel.CheckVer(e, 2, 1, 1), 'now')
    false.should.equal(EhrDataModel.CheckVer(e, 2, 1, 2), 'after')
  })

  it ('IsUpToDate', () => {
    // NOTE MUST MANUALLY UPDATE THIS TEST WHENEVER VERSION CHANGES
    let e = { meta: {} }
    e.meta.ehrVersion = 'ev2.1.1'
    EhrDataModel.IsUpToDate(e).should.equal(false, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.2.0'
    EhrDataModel.IsUpToDate(e).should.equal(false, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.2.1'
    EhrDataModel.IsUpToDate(e).should.equal(false, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.2.2'
    EhrDataModel.IsUpToDate(e).should.equal(false, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.2.3'
    EhrDataModel.IsUpToDate(e).should.equal(false, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.2.11'
    EhrDataModel.IsUpToDate(e).should.equal(true, e.meta.ehrVersion)
    e.meta.ehrVersion = 'ev2.3.5'
    EhrDataModel.IsUpToDate(e).should.equal(true, e.meta.ehrVersion)
  })

})

describe ('GenerateRowId', () => {
  it ('generate', () => {
    let tbl = [
      {t_id: 'p.t.1'},
      {t_id: 'p.t.22'},
      {t_id: 'p.t.12'},
      {t_id: 'p.t.3'},
      {t_id: 'p.t.4'},
      {t_id: 'p.t.5'},
    ]
    let ver = EhrDataModel.GenerateRowId('p','t',tbl)
    'p.t.23'.should.equal(ver)
  })
  it ('empty table', () => {
    let tbl = [
    ]
    let ver = EhrDataModel.GenerateRowId('p','t',tbl)
    'p.t.0'.should.equal(ver)
  })

})

describe ('Id to parts', () => {
  it ('IdToParts', () => {
    const rowId = 'page.table.row'
    const { pageKey, tableKey, rowIndex } = EhrDataModel.IdToParts(rowId)
    should.exist(pageKey, 'pageKey')
    should.exist(tableKey, 'tableKey')
    should.exist(rowIndex, 'rowIndex')
    pageKey.should.equal('page')
    tableKey.should.equal('table')
    rowIndex.should.equal('row')
  })
})
