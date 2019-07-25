import fs from 'fs'
import path from 'path'
import { getPageDefinition, getAllPageKeys } from '../../../helpers/ehr-defs'
import { mutations as dMutations, state as dState, getters as dGetters} from '../ehrData'
import { mutations as sMutations, state as sState, getters as sGetters} from '../seedStore'

const should = require('should')

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = getAllPageKeys()
    should.exist(pageKeys)
    pageKeys.length.should.be.greaterThanOrEqual(40)
  })
  it('getPageDefinition', () => {
    let pageKeys = getAllPageKeys()
    let key = pageKeys[0]
    let aPage = getPageDefinition(key)
    should.exist(aPage)
  })
})

describe('Test ehrData store mutations', () => {

  it('test mutations', () => {
    let cData = {foo:'bar'}
    dMutations.setCurrentStudentInfo(dState, cData)
    should.exist(dState.sCurrentStudentInfo)
    should.exist(dState.sCurrentStudentInfo.foo)
  })

  it('test _setActivityData', () => {
    let cData = createActivityData()
    cData.assignmentData = getObjFromFile('student-data1.json')
    dMutations._setActivityData(dState, cData)
    should.exist(dState.sActivityData)
    dState.sActivityData.should.have.property('evaluated')
    dState.sActivityData.evaluated.should.equal(false)
  })

  it('test _setCurrentStudentData', () => {
    let rootState = createRootState()
    let assignmentData = getObjFromFile('student-data1.json')
    // console.log('assignmentData', assignmentData)
    let activityData = {
      _id:'testing',
      assignmentData: assignmentData
    }
    dMutations._setCurrentStudentData(dState, activityData)
    let data = dGetters.assignmentData(dState, dGetters, rootState)
    should.exist(data)
  })

  // rootState.visit.sVisitInfo.isInstructor
  // rootState.visit.isDevelopingContent
  // rootState.seedStore.ehrSeedData
  // dState.sCurrentStudentData.assignmentData
  // dState.sActivityData.assignmentData

  it('test getter mergedData as dev', () => {
    let rootState = createRootState()
    rootState.visit.isDevelopingContent = true
    let seed = getObjFromFile('seed-data1.json')
    sMutations._setSeedEhrData(sState, seed)
    should.exist(sState.ehrSeedData)
    rootState.seedStore.ehrSeedData = sState.ehrSeedData
    let mSeed = dGetters.mergedData(dState, dGetters, rootState)
    should.exist(mSeed)
  })

  //rootState.seedStore.ehrSeedData = seed
  // let cData = {foo:"bar"}
  // let rootState = {}
  // rootState.visit = {
  //   sVisitInfo: {isInstructor: true},
  //   isDevelopingContent: false
  // }
  // rootState.seedStore = {}
  // dGetters.mergedData(dState, dGetters, rootState)
  // should.exist(dState.sCurrentStudentInfo)
  // should.exist(dState.sCurrentStudentInfo.foo)
  // })


})


function getObjFromFile (fName) {
  const seedFN = path.resolve(__dirname, fName)
  let content = fs.readFileSync(seedFN, 'utf8')
  return JSON.parse(content)
}
function createRootState () {
  return {
    seedStore: {},
    visit: {
      isDevelopingContent: false,
      sVisitInfo: {
        isInstructor: false
      }
    }
  }
}
function createActivityData () {
  return {
    evaluated: false,
    submitted: false,
    scratchData: undefined,
    assignmentData: {}
  }
}
