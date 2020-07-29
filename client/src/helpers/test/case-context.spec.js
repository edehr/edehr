const should = require('should')
import CaseContext from '../case-context'
import * as testHelper from './testHelper'
const mockData = require('./mockData.json')

// pick a page with a table that has a table that has a record header
const DEFAULT_KEY = 'testPage'
const PAGE_KEY_WITHOUT = 'demographics'
const { assignment } = mockData

function _setupWithContext () {
  testHelper.setAssignmentMocks(assignment)
}

function _setupWithOutContext () {
  const assignmentWO =Object.assign({}, assignment)
  delete assignmentWO.persona
  delete assignmentWO.time
  delete assignmentWO.profession
  delete assignmentWO.day
  testHelper.setAssignmentMocks(assignmentWO)
}

describe('testing case-context', () => {

  it('case context feature', done => {
    should.doesNotThrow(() => {
      let result
      CaseContext.setFeature(true)
      result = CaseContext.isCaseContextFeature()
      should(result).be.a.Boolean()
      result.should.be.true()

      CaseContext.setFeature(false)
      result = CaseContext.isCaseContextFeature()
      should(result).be.a.Boolean()
      result.should.be.false()
    })
    done()
  })

  it('getAssignmentCaseContext', done => {
    should.doesNotThrow(() => {
      _setupWithContext()
      const caseStudy = CaseContext.getAssignmentCaseContext()
      caseStudy.name.should.equal(assignment.persona)
      caseStudy.profession.should.equal(assignment.profession)
      caseStudy.day.should.equal(assignment.day)
      caseStudy.time.should.equal(assignment.time)
      done()
    })
  })

  it('assignmentHasCaseContext', done => {
    should.doesNotThrow(() => {
      _setupWithContext()
      const result = CaseContext.assignmentHasCaseContext()
      should(result).be.a.Boolean()
      result.should.be.true()
      done()
    })
  })

  it('assignmentHasCaseContext expect false', done => {
    should.doesNotThrow(() => {
      _setupWithOutContext()
      const result = CaseContext.assignmentHasCaseContext()
      should(result).be.a.Boolean()
      result.should.be.false()
      done()
    })
  })

})

describe('getPageTableShowSignature', () => {
  it('getPageTableShowSignature page without record header', done => {
    should.doesNotThrow(() => {
      CaseContext.setFeature(true)
      // CaseContext.setFeature(false)
      _setupWithContext()
      // _setupWithOutContext()
      let key = DEFAULT_KEY
      // let key = PAGE_KEY_WITHOUT
      const result = CaseContext.getPageTableShowSignature(key)
      should(result).be.a.Boolean()
      result.should.be.true()
    })
    done()
  })

  it('getPageTableShowSignature feature disabled', done => {
    should.doesNotThrow(() => {
      CaseContext.setFeature(false)
      _setupWithContext()
      let key = DEFAULT_KEY
      const result = CaseContext.getPageTableShowSignature(key)
      should(result).be.a.Boolean()
      result.should.be.false()
    })
    done()
  })

  it('getPageTableShowSignature no context data', done => {
    should.doesNotThrow(() => {
      CaseContext.setFeature(true)
      _setupWithOutContext()
      let key = DEFAULT_KEY
      const result = CaseContext.getPageTableShowSignature(key)
      should(result).be.a.Boolean()
      result.should.be.false()
    })
    done()
  })

  it('getPageTableShowSignature page without record header', done => {
    should.doesNotThrow(() => {
      CaseContext.setFeature(true)
      _setupWithContext()
      let key = PAGE_KEY_WITHOUT
      const result = CaseContext.getPageTableShowSignature(key)
      should(result).be.a.Boolean()
      result.should.be.false()
    })
    done()
  })

})
