/**
 * @jest-environment jsdom
 */
import should from 'should'
import pageController from '../page-controller'
import { prepareAxiosResponse, createCompoundGetResponse  } from './axios-mock-helper'
import mockData from './mockData.json'
import StoreHelper from '../store-helper'
import { commonBeforeEach } from './testHelper'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

jest.mock('axios')

let router = {}
router.push = jest.fn()

const token = 'test'
const refreshToken = 'testRefreshToken'

const _beforeEach = async () => {
  commonBeforeEach()
  const { demoData } = mockData
  return prepareAxiosResponse('post', {
    visitId: mockData.visit._id,
    // visit: mockData.visit,
    token,
    demoData
  })
    .then(() => {
      return createCompoundGetResponse({demoData, visit: mockData.visit})
        .then(() => {
          return StoreHelper.fetchTokenData(token)
        })
    })
}


const _createRouteObject = (isDemo = false) => {
  return {
    query: { apiUrl: 'testApiUrl', token: refreshToken },
    name: isDemo ? 'demo' : 'notDemo',
    meta: { zone: 'demo', label: 'testPageChange' }
  }
}

function testpg (route, done) {
  let refreshCnt = 0
  EventBus.$on(PAGE_DATA_REFRESH_EVENT, () => {
    refreshCnt++
    refreshCnt.should.equal(1, 'should only call page refresh once')
    const title = StoreHelper.getPageTitle()
    // console.log('compare expected title')
    should.exist(title)
    title.should.equal(route.meta.label)
    done()
  })
}

describe('page-controller tests', () => {
  beforeEach((done) => {
    _beforeEach().then(() => done())
  })
  afterEach( () => {
    EventBus.$off()
  })
  it('onPageChange [demo use-case]', (done) => {
    const route = _createRouteObject(true)
    testpg(route, done)
    should.doesNotThrow(async () => {
      await pageController.onPageChange(route)
    })
    // console.log('page controller on page change has not thrown', pageController)
  })

  it('onPageChange [standard use-case]', (done) => {
    const route = _createRouteObject()
    testpg(route, done)
    should.doesNotThrow(async () => {
      await pageController.onPageChange(route)
    })
  })
})

