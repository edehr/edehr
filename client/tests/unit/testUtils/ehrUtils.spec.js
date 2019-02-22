import should from 'should'
import {
  removeEmptyProperties,
  ehrMarkSeed,
  ehrRemoveMarkedSeed,
  ehrMergeEhrData,
  prepareAssignmentPageDataForSave,
  SEED_MARK
} from '../../../src/helpers/ehr-utills'

describe('Test ehr utils', () => {
  it('Remove Empty Properties', () => {
    let one = getOne()
    should.exist(one.aPage1)
    should.exist(one.aPage1.p1)
    one.aPage1.should.have.property('emptyProp')
    one.aPage1.should.have.property('nullProp')
    // should.exist(one.aPage1.nullProp)
    should.exist(one.aPage1.emptyString)
    one = removeEmptyProperties(one)
    one.aPage1.should.not.have.property('emptyProp')
    one.aPage1.should.not.have.property('nullProp')
    should.not.exist(one.aPage1.emptyProp)
  })
})

describe('Test seed marking', () => {
  it('Mark seed', () => {
    let one = getOne()
    one = ehrMarkSeed(one)
    // console.log('marked one', one)
    let two = getTwo()
    let pages = ehrMergeEhrData(one, two)
    // verify we get pages from one or the other or both
    pages.should.have.property('aPage1')
    pages.should.have.property('cardiovascular')
    pages.should.have.property('visit')

    // confirm that arrays are merged
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)

    let v = pages.visit.location[0]
    v.should.have.property(SEED_MARK)
    // console.log('merged object', JSON.stringify(pages, null, 2))
  })

  it('Remove Marked Properties', () => {
    let one = ehrMarkSeed(getOne())
    let two = getTwo()
    let pages = ehrMergeEhrData(one, two)
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)
    let visit = ehrRemoveMarkedSeed(pages.visit)
    visit.should.have.property('location')
    visit.location.should.have.length(1)
  })

  it('Prepare Assignment Data For Save', () => {
    let one = ehrMarkSeed(getOne())
    let two = getTwo()
    let pages = ehrMergeEhrData(one, two)
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)
    let page = prepareAssignmentPageDataForSave(pages.visit)
    page.should.have.property('location')
    page.location.should.have.length(1)
  })
})

describe('Test merging two EHR data object', () => {
  it('Object assign does not concat arrays', () => {
    let one = getOne()
    let two = getTwo()
    let mstr = Object.assign({}, one, two)
    // let mstr = JSON.stringify(m, null, 2)
    should.exist(mstr.visit)
    should.exist(mstr.visit.location)
    mstr.visit.location.should.have.length(1)
  })

  it('Merge seed with empty object', () => {
    let one = getOne()
    let two = undefined
    let pages = ehrMergeEhrData(one, two)
    should.exist(pages)
  })

  it('Merge seed and assignment data', () => {
    let one = getOne()
    let two = getTwo()
    let pages = ehrMergeEhrData(one, two)
    // verify we get pages from one or the other or both
    pages.should.have.property('aPage1')
    pages.should.have.property('aPage2')
    pages.should.have.property('cardiovascular')
    pages.should.have.property('visit')

    // confirm that arrays are merged
    pages.cardiovascular.should.have.property('table')
    pages.cardiovascular.table.should.have.length(2)

    // confirm that arrays are merged
    pages.visit.should.have.property('location')
    pages.visit.location.should.have.length(2)

    // confirm we get properties from one or the other or both
    pages.visit.should.have.property('propertyInOne')
    pages.visit.should.have.property('propertyInTwo')

    // confirm we get the properties of the second when it's the same as the first
    pages.visit.should.have.property('diagnosis')
    pages.visit.diagnosis.should.equal('two diagnosis')

    // console.log('merged object', JSON.stringify(pages, null, 2))
  })
})

function getOne() {
  return {
    aPage1: {
      p1: 1,
      emptyString: '',
      nullProp: null,
      emptyProp: undefined
    },
    visit: {
      location: [{ location: 'in one', transferInDay: '1', transferInTime: '1' }],
      admissionDay: 'Day 1',
      admissionTime: '7:00am',
      propertyInOne: 'propertyInOne',
      status: 'From One'
    },
    cardiovascular: {
      table: [
        {
          name: 'Jane',
          profession: 'nurse',
          day: '0',
          time: '9:00',
          pulse: 'Regular',
          skinAppearance: 'Pale',
          capRefillRightHand: 'Normal'
        }
      ]
    }
  }
}
function getTwo() {
  return {
    visit: {
      location: [{ location: 'in two', transferInDay: '2' }],
      admissionDay: 'Day 2',
      admissionTime: '10:00am',
      consentForTreatment: false,
      propertyInTwo: 'propertyInTwo',
      consentForBlood: true,
      diagnosis: 'two diagnosis',
      status: 'From two'
    },
    aPage2: {
      p2: 2
    },
    cardiovascular: {
      table: [
        {
          name: 'Joe',
          profession: 'nurse',
          day: '1',
          time: '10:00',
          pulse: 'Irregular',
          skinAppearance: 'Dark'
        }
      ]
    }
  }
}
