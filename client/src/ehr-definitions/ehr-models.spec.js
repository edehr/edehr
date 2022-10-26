/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */
import EhrDefs from './ehr-page-defs'
import { Pages, PageDef} from './ehr-models'
const should = require('should')

const pageDefs = EhrDefs

let case1 = require('../../resources/erin-johns-seed-day0-mid.json')
let case2 = require('../../resources/erin-johns-seed-day2-end.json')
let case3 = require('../../resources/wound-case-1.json')
const case1PageCount = 42

describe('Ehr Page', function () {
  it('pages has page list', () => {
    const pages = new Pages(pageDefs)
    pages.should.have.property('pageList')
    should(pages.pageList).be.an.Array()
    const pageList = pages.pageList
    should(pageList.length).be.equal(case1PageCount)
    pageList.forEach(pg => {
      pg.should.be.instanceof(PageDef)
    })
  })
})

describe('Ehr Page Definitions', function () {
  let pages
  before(function () {
    pages = new Pages(pageDefs)
  })
  it( 'find page by key', () => {
    // the 'visit' page has both tables and form
    const page = pages.findPage('visit')
    should.exist(page, 'expect defs to have the page specified')
    page.should.be.instanceof(PageDef)
    page.should.have.property('pageKey')
    page.pageKey.should.equal('visit')
    page.should.have.property('hasTable')
    page.hasTable.should.equal(true)
    page.should.have.property('hasForm')
    page.hasForm.should.equal(true)
    page.should.have.property('pageForms')
    page.pageForms.should.be.instanceof(Array)
    page.pageForms.length.should.equal(1)
    page.should.have.property('pageTables')
    page.pageTables.should.be.instanceof(Array)
    page.pageTables.length.should.equal(1)
  })
  it('get demographics', () => {
    const pageList = pages.pageList
    const page = pageList[0]
    page.should.be.instanceof(PageDef)
    page.pageKey.should.equal('demographics')
    page.hasTable.should.equal(false)
    page.hasForm.should.equal(true)
    page.pageForms.length.should.equal(1)
    page.pageTables.length.should.equal(0)
  })
  it('page integumentaryAssessment', () => {
    const key = 'integumentaryAssessment'
    const page = pages.findPage(key)
    page.pageKey.should.equal(key)
    page.hasTable.should.equal(true)
    page.hasForm.should.equal(false)
    page.pageForms.length.should.equal(0)
    page.pageTables.length.should.equal(4)
  })
})

describe('Ehr Page Form fields', function () {
  let pages
  before(function () {
    pages = new Pages(pageDefs)
  })
  it('page tables', () => {
    const key = 'visit'
    const page = pages.findPage(key)
    const vTables = page.pageTables
    vTables.should.be.instanceof(Array)
    vTables.length.should.equal(1)
  })
})

describe.skip('Ehr Data', function () {
  let pages
  before(function () {
    pages = new Pages(pageDefs)
  })
  it('page has data', () => {
    const pageList = pages.pageList
    const page = pageList[0]
    page.pageKey.should.equal('demographics')
    page.should.have.property('pageData')
    const pageData = page.pageData
    should.exist(pageData)
    pageData.should.be.instanceof(EhrPageData)
    pageData.should.have.property('ehrData')
    const ehrData = pageData.ehrData
    should.exist(ehrData)
  })
  it('pagelist can return list of pages with data', () => {
    pages.should.have.property('pagesWithData')
    const pagesWithData = pages.pagesWithData
    should.exist(pagesWithData)
    pagesWithData.should.be.instanceof(Array)
    pagesWithData.length.should.equal(17)
  })
  it('various pages with data', () => {
    const samples = [ case1, case2, case3]
    const expectedPgCnt = [17,22,14]
    samples.forEach( (sample, index) => {
      const pages = new Pages(pageDefs)
      const pageList = pages.pagesWithData
      should(pageList.length).be.equal(expectedPgCnt[index])
    })
  })
})
