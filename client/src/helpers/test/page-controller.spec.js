import should from 'should'
import pageController from '../page-controller'
import sKeys from '../session-keys'
import { prepareAxiosResponse, createCompoundGetResponse  } from './axios-mock-helper'
import mockData from './mockData.json'
import StoreHelper from '../store-helper'
import { commonBeforeEach } from './testHelper'

jest.mock('axios')

let router = {}
router.push = jest.fn()

const token = 'test'
const refreshToken = 'testRefreshToken'

const _beforeEach = async () => {
  commonBeforeEach()
  pageController.hasLoadedData = false
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
    meta: { zone: 'demo' }
  }
}

describe('page-controller tests', () => {
  beforeEach((done) =>  _beforeEach().then(() => done()))

  it('onPageChange [demo use-case]', async done => {
    should.doesNotThrow(async () => {
      const route = _createRouteObject(true)
      await pageController.onPageChange(route)
      pageController.hasLoadedData.should.equal(true)
      done()
    })
  })

  it('onPageChange [standard use-case]', async done => {
    should.doesNotThrow(async () => {
      const route = _createRouteObject()
      await pageController.onPageChange(route)
      pageController.hasLoadedData.should.equal(true)
      done()
    })
  })

  it('_loadData (demo UC)', done => {
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
      sessionStorage.getItem(sKeys.USER_TOKEN).should.equal(mockData.visit._id)
      done()
    })
  })

  it('_loadAuth', done => {
    should.doesNotThrow(async () => {
      await pageController._loadAuth(refreshToken)
      pageController.hasLoadedData.should.equal(false)
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
    StoreHelper.isLoading().should.equal(false)
    done()
  })
})
