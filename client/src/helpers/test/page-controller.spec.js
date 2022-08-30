/**
 * @jest-environment jsdom
 */
import should from 'should'
import pageController from '../page-controller'
import sKeys from '../session-keys'
import { prepareAxiosResponse, createCompoundGetResponse  } from './axios-mock-helper'
import mockData from './mockData.json'
import StoreHelper from '../store-helper'
import { commonBeforeEach } from './testHelper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import store from '@/store'

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

describe('test load demo', () => {
  // TODO fix this to load the demo token into the demo store. LocaStorage will not work any more
  it.skip('_loadData (demo UC)', done => {
    localStorage.setItem(sKeys.DEMO_TOKEN, 'demoToken')
    const route = _createRouteObject(true)
    should.doesNotThrow(async () => {
      await pageController._loadData(route)
      const demoData = localStorage.getItem('DemoData')
      should.exist(demoData)
      done()
    })
  })

  it('_loadData (default UC)', done => {
    const route = _createRouteObject(false)
    should.doesNotThrow(async () => {
      await pageController._loadData(route)
      localStorage.getItem(sKeys.VISIT_ID).should.equal(mockData.visit._id)
      done()
    })
  })
})

describe('test load demo', () => {

  it('_loadAuth', done => {
    should.doesNotThrow(async () => {
      await pageController._loadAuth(refreshToken)
      await pageController._loadAuth(null, token)
      done()
    })
  })

  it('_ltiAccess', done => {
    should.doesNotThrow(async () => {
      await pageController._ltiAccess(refreshToken, token)
      done()
    })
  })

  it('_loadEhr', done => {
    should.doesNotThrow(async () => {
      await pageController._loadEhr(mockData.visit._id)
      done()
    })
  })

  it('_getVisitId', done => {
    should.doesNotThrow(async () => {
      const visitId = await pageController._getVisitId()
      visitId.should.equal(mockData.visit._id)
      done()
    })
  })

  it('handleError', done => {
    pageController.handleError('Test Error', router)
    const apiError = StoreHelper._getSystemProperty('apiError')
    const [call] = router.push.mock.calls
    call.length.should.equal(1)
    call[0].should.equal('/')
    apiError.should.equal('Test Error. System Error')
    setTimeout(() => {
      StoreHelper.isLoading().should.equal(false)
      done()
    }, 50)
  })
})
