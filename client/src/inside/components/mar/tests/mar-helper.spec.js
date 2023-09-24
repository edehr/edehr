import should from 'should'
import MarHelper, { MAR_PAGE_KEY, MED_ORDERS_PAGE_KEY } from '../mar-helper'
import { getMedOrders, getMarRecords } from './mar-test-helper'
import EhrDefs from '../../../../ehr-definitions/ehr-defs-grid'
import MarEntity from '../mar-entity'
import MedOrder from '../med-order'

let marHelper
const medOrders = getMedOrders()
const classMedOrders = getMedOrders(true)
const marRecords = getMarRecords()
const classMarRecords = getMarRecords(true)

const pageElements = { table: { tableKey: 'table'}}

const asLoadedObj = Object.assign({}, {
  [MED_ORDERS_PAGE_KEY]: {
    pageElements, table: medOrders
  },
  [MAR_PAGE_KEY]: { pageElements, table: marRecords }
})

const noMarLoaded = Object.assign({}, asLoadedObj, {
  [MAR_PAGE_KEY]: { pageElements, table: [] }
})

const getAsLoaded = (key) => {
  return asLoadedObj[key]
}

const noMarGetAsLoaded = (key) => {
  return noMarLoaded[key]
}

const mockedEhrHelper = {
  getMergedPageData: getAsLoaded,
  _saveData: jest.fn()
}

let noMarEhrHelper = {}
// unskip these after the V1 med admin code is removed. Then reconsider what is really needed.
describe.skip('mar-helper tests', () => {
  describe.skip('tests With MarRecords', () => {
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
        should.exist(result)
        result.table.should.eql(marRecords)
      })
    })

    it('getPageDef_Mar', () => {
      should.doesNotThrow(() => {
        const pageDef = EhrDefs.getPageDefinition(MAR_PAGE_KEY)
        const result = marHelper.getPageDef_Mar()
        should.exist(result)
        result.should.eql(pageDef)
      })
    })

    it('getMarTableKey', () => {
      should.doesNotThrow(() => {
        const pageKey = mockedEhrHelper.getMergedPageData(MAR_PAGE_KEY).pageElements.table.tableKey
        const result = marHelper.getMarTableKey()
        result.should.equal(pageKey)
      })
    })
  })

  describe.skip('tests without MarRecord', () => {
    beforeAll(() => {
      noMarEhrHelper = {
        getMergedPageData: noMarGetAsLoaded,
        _saveData: jest.fn()
      }
    })
    it('properly instantiates the class', () => {
      should.doesNotThrow(() => {
        marHelper = new MarHelper(noMarEhrHelper)
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
        records.length.should.equal(0)
      })
    })

    it('getEhrData_MarPageData', () => {
      should.doesNotThrow(() => {
        const result = marHelper.getEhrData_MarPageData()
        result.table.length.should.eql(0)
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
        const pageKey = mockedEhrHelper.getMergedPageData(MAR_PAGE_KEY).pageElements.table.tableKey
        const result = marHelper.getMarTableKey()
        result.should.equal(pageKey)
      })
    })
  })

})
