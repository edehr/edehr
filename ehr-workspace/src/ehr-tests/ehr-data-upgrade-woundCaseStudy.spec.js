import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { updateWoundCaseStudy } from '../ehr-definitions/ehr-data-upgrade-woundCaseStudy'

const ehrData = {
  integumentaryAssessment: {
    tableIncisionAssessment: [
      {
        name: 'Lori',
        profession: 'RN',
        day: '0',
        time: '12:00',
        incisionLabel: 'Incision A',
        exudateType: 'serous,sanginous',
      }
    ],
    tableWoundAssessment: [
      {
        name: 'Lori',
        profession: 'RN',
        day: '0',
        time: '12:00',
        woundLabel: 'Wound A',
        length: '11.5cm',
        width: '7cm',
        depth: '3cm',
        underminingDepth1: '2.5cm',
        underminingDepthLocation1A: '11',
        underminingDepthLocation1B: '4',
        slough: '20',
        notVisible: '10',
        other: '70',
        woundBedCalculation: 100,
        exudateAmount: 'large',
        exudateType: 'serous,sanginous',
        odour: 'No',
        woundEdge: 'nonAttached (edgeAppearsAsACliff),rolled (curledUnder)',
        periWoundSkin: 'intact',
        woundPain: '2',
        packingOut: '1',
        packinIn: '1',
        treatmentComplete: 'Yes',
        createdDate: '2020-08-31T15:17:34-07:00'
      }
    ]
  },
}

const pageKey= 'integumentaryAssessment'
const tableKey = 'tableWoundAssessment'
const elementKey1 = 'exudateType'
const newVal1 = 'serous,sanguineous'
const oldVal1 = 'serous,sanginous'
const elementKey2 = 'woundEdge'
const newVal2 = 'notAttached,rolled'
const oldVal2 = 'nonAttached (edgeAppearsAsACliff),rolled (curledUnder)'

describe( 'EhrData updates integumentaryAssessment page', () => {

  function validate (updatedData) {
    let val
    updatedData.should.have.property(pageKey)
    updatedData[pageKey].should.have.property(tableKey)
    const table = updatedData[pageKey][tableKey]
    table.length.should.greaterThanOrEqual(1)
    const row1 = table[0]
    row1.should.have.property(elementKey1)
    val = row1[elementKey1]
    val.includes(newVal1).should.equal(true)
    val.includes(oldVal1).should.equal(false)
    row1.should.have.property(elementKey2)
    val = row1[elementKey2]
    val.includes(newVal2).should.equal(true)
    val.includes(oldVal2).should.equal(false)
  }

  it('test updateSanguineous ', () => {
    const updatedData = updateWoundCaseStudy(ehrData)
    validate(updatedData)
  })


  it('test updateSanguineous through EnrDataModel', () => {
    // the constructor updates the data and that uses updateRespiratory()
    const model = new EhrDataModel(ehrData)
    const updatedData = model.ehrData
    should.exists(updatedData)
    validate(updatedData)
    // TODO rewrite to allow for ev2.4.0 patch 0 is less than 5
    // updatedData.should.have.property('meta')
    // updatedData.meta.should.have.property('ehrVersion')
    // const version = model.ehrVersion
    // version.major.should.be.greaterThanOrEqual(2, 'version major 2')
    // version.minor.should.be.greaterThanOrEqual(2, 'version minor 2')
    // version.patch.should.be.greaterThanOrEqual(3, 'version patch 3')
  })
})
