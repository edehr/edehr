import should from 'should'
import MarHelper, { MAR_PAGE_KEY, MED_ORDERS_PAGE_KEY } from '../mar-helper'
import { getMedOrders, getMarRecords } from './mar-test-helper'
import EhrDefs from '../../../../helpers/ehr-defs-grid'
import MarEntity from '../mar-entity'
import MedOrder from '../med-order'


let marHelper
const medOrders = getMedOrders()
const classMedOrders = getMedOrders(true)
const marRecords = getMarRecords()
const classMarRecords = getMarRecords(true)

const getAsLoaded = (key) => {
  if (key === MED_ORDERS_PAGE_KEY){
    return Object.assign({}, {
      pageElements: { table: { tableKey: 'table'}},
      table: medOrders
    })
  } else if (key === MAR_PAGE_KEY) {
    return Object.assign({}, {
      pageElements: { table: { tableKey: 'table'}},
      table: marRecords
    })
  }
}

const mockedEhrHelper = {
  getAsLoadedPageData: getAsLoaded,
  _saveData: jest.fn()
}

describe('mar-helper tests', () => {
  it('properly instantiates the class', () => {
    should.doesNotThrow(() => {
      marHelper = new MarHelper(mockedEhrHelper)
      should.exist(marHelper)
    })
  })

  it('refreshMarData', () => {
    should.doesNotThrow(() => {
      marHelper.refreshMarData()
    })
  })

  it('getEhrData_Orders', () => {
    should.doesNotThrow(() => {
      marHelper.getEhrData_Orders()
      const theMedOrders = marHelper.theMedOrders
      should.exist(theMedOrders)
      theMedOrders.should.eql(classMedOrders)
    })
  })

  it('getEhrData_MarRecords', () => {
    should.doesNotThrow(() => {
      marHelper.getEhrData_MarRecords()
      const records = marHelper.marRecords
      should.exist(records)
      records.should.eql(classMarRecords)
    })
  })

  it('getEhrData_MarPageData', () => {
    should.doesNotThrow(() => {
      const result = marHelper.getEhrData_MarPageData()
      result.table.should.eql(marRecords)
    })
  })

  it('clearAllData', () => {
    should.doesNotThrow(() => {
      marHelper.clearAllData()
      const calls = mockedEhrHelper._saveData.mock.calls
      calls.length.should.equal(1)   
    })
  })

  it('getPageDef_Mar', () => {
    should.doesNotThrow(() => {
      const pageDef = EhrDefs.getPageDefinition(MAR_PAGE_KEY)
      const result = marHelper.getPageDef_Mar()
      result.should.eql(pageDef)
    })
  })

  it('getMarTableKey', () => {
    should.doesNotThrow(() => {
      const pageKey = mockedEhrHelper.getAsLoadedPageData(MAR_PAGE_KEY).pageElements.table.tableKey
      const result = marHelper.getMarTableKey()
      result.should.equal(pageKey)
    })
  })

  it('saveMarDialog', () => {
    should.doesNotThrow(() => {
      const newMarRecord = new MarEntity({
        actualTime: '08:00',
        comment: 'Test MAR',
        day: 0,
        medications: [
          new MedOrder('acetylcysteine injection')
        ]
      })
      marHelper.saveMarDialog(newMarRecord)
      mockedEhrHelper._saveData.mock.calls.length.should.equal(2)
    })
  })

  it('triggerActionByPageKey', () => {
    should.doesNotThrow(() => {
      marHelper.triggerActionByPageKey()
    })
  })


})