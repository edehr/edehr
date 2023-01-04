import { convertTimeStr, convertTimeStrToMilTime, updateAllVisitTime, updateEhrDataMeta } from './ehr-def-utils'
import { EhrPages } from './ehr-models'
import EhrDefs from './ehr-page-defs'
const EhrDataModel = require('../ehr-definitions/EhrDataModel')

const should = require('should')
const ehrData = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '06:00',
    diagnosis: 'COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'here',
        transferInDay: 0,
        transferInTime: '00:30',
        transferOutDay: 1,
        transferOutTime: '04:00',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '21:31',
        transferOutDay: 2,
        transferOutTime: '23:32',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  },
  neurological: {
    table: [
      {
        name: 'Jason',
        profession: 'RN',
        day: '0',
        time: '19:30',
        alert: true,
        oriented: true,
        eyeOpening: '4 = Spontaneous',
        verbalResponse: '5 = Oriented',
        bestMotorResponse: '6 = Obeys commands',
        glasgowCalculation: 15,
        loss: 'No',
        leftPupilSize: '2',
        leftPupilResponseToLight: 'Brisk',
        rightPupilSize: '2',
        rightPupilResponseToLight: 'Brisk',
        bothPupils: 'Equal',
        levelOfConciousness: '0 = Alert; keenly responsive',
        levelOfConciousnessQuestions: '0 = Answers two questions correctly',
        levelOfConciousnessCommands: '0 = Performs both tasks correctly',
        motorLeftArm: '0 = No drift',
        motorRightArm: '0 = No drift',
        motorLeftLeg: '0 = No drift',
        motorRightLeg: '0 = No drift',
        limbAtaxia: '0 = Absent',
        bestGaze: '0 = Normal',
        visual: '0 = No visual loss',
        facialPalsy: '0 = Normal symmetric movements',
        sensory: '0 = Normal; no sensory loss',
        bestLanguage: '0 = No aphasia; normal',
        dysarthria: '0 = Normal',
        extinctionAndInattention: '0 = No abnormality',
        strokeAssessmentCalculation: 0,
        createdDate: '2019-05-30T21:50:42-07:00'
      }
    ]
  }
}

describe ( ' convert functions', () => {
  function testIt ( v, e) {
    let r = convertTimeStr(v)
    r.should.equal(e)
  }
  it ('convertTimeStr', () => {
    let r, v
    r = convertTimeStr()
    should.not.exist(r)
    testIt('','')
    testIt(45,45)
    v = {}
    testIt(v,v)
    testIt('00:00',0)
    testIt('00:30',30)
    testIt('10:30',1030)
  })
})
describe ( ' convertTimeStrToMilTime', () => {
  function testIt ( v, e) {
    let r = convertTimeStrToMilTime(v)
    r.should.equal(e)
  }
  it ('convertTimeStrToMilTime', () => {
    let r, v
    r = convertTimeStrToMilTime()
    should.not.exist(r)
    testIt('','')
    testIt(45,45)
    v = {}
    testIt(v,v)
    testIt('00:00','0000')
    testIt('00:30','0030')
    testIt('10:30','1030')
  })
})

describe( 'utils work', () => {
  let model

  before(function () {
    model = new EhrDataModel(ehrData)
  })
  it('Update ehr data and get simTime', () => {
    should.exist(model)
    const data = model.ehrData
    should.exist(data)
    updateEhrDataMeta(data)
    data.should.have.property('meta')
    data.meta.should.have.property('simTime')
    data.meta.simTime.should.have.property('visitTime')
    data.meta.simTime.visitTime.should.equal('1930')
    data.meta.simTime.should.have.property('visitDay')
    data.meta.simTime.visitDay.should.equal(0)
  })
  it ('update visit times', () => {
    const pageDefs = EhrDefs
    const eData = ehrData
    const model = new EhrDataModel(eData)
    const pages = new EhrPages(pageDefs)
    const pageList = pages.pageList
    pageList.forEach(page => {
      const pageKey = page.pageKey
      if (model.hasData(pageKey)) {
        const pChildren = page.pageChildren.filter(c => c.inputType === 'visitTime')
        pChildren.forEach(c => {
          let d = model.getPageFormData(pageKey, c.elementKey)
          let val = convertTimeStrToMilTime(d)
          model.updatePageFormData(pageKey, c.elementKey, val)
        })
        page.pageTables.forEach(table => {
          const children = table.children
          const timeChildren = children.filter(c => c.inputType === 'visitTime')
          const tableKey = table.elementKey
          const tableData = model.getPageTableData(pageKey, tableKey)
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              let val = convertTimeStrToMilTime(elemData)
              model.updateRowElem(pageKey, tableKey, rowIndex, k, val)
            })
          })
        })
      }
    })
    let tData = model.getPageTableData('visit', 'table')
    tData[0].transferInTime.should.equal('0030')
    tData = model.getPageTableData('neurological', 'table')
    tData[0].time.should.equal('1930')
    let fData = model.getPageFormData('visit', 'admissionTime')
    fData.should.equal('0600')
  })
  it ('update visit times with util', () => {
    const pageDefs = EhrDefs
    let eData = ehrData
    eData = updateAllVisitTime(eData)
    const model = new EhrDataModel(eData)
    let tData = model.getPageTableData('visit', 'table')
    tData[0].transferInTime.should.equal('0030')
    tData = model.getPageTableData('neurological', 'table')
    tData[0].time.should.equal('1930')
    let fData = model.getPageFormData('visit', 'admissionTime')
    fData.should.equal('0600')
  })
})
