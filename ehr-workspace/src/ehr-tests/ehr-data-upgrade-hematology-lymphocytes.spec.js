import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { updateWoundCaseStudy } from '../ehr-definitions/ehr-data-upgrade-woundCaseStudy'
import { updateHematologyLymphocytes } from '../ehr-definitions/ehr-data-upgrade-hematology'

const ehrData = {
  hematology: {
    tablePbfReview: [
      {
        tablePbfReview_name: 'Dorothea',
        tablePbfReview_profession: 'toadj',
        tablePbfReview_day: 1,
        tablePbfReview_time: '0730',
        bloodAnalysis: 'hematology.tableCbcAnalysis.0',
        wbcFieldFactor: '1.8',
        wbcAverage: 0,
        wbcEstimate: 0,
        wbcAnalysis: '16.4',
        wbcLowRange: 12.3,
        wbcHighRange: 20.5,
        pltFieldFactor: '11.1',
        pltAverage: 0,
        pltEstimate: 0,
        pltAnalysis: '395',
        pltLowRange: 296,
        pltHighRange: 494,
        cellCntSegNeutrophil: '111',
        cellCntSegNeutrophilAbs: 18.2,
        cellCntTotal: 111,
        wbcmAbnormalTypeMorphology: 'Abnormal Lymphocytes,Smudge Cells,Hairy Cells',
        rcmBasophilicStippling: true,
        rcmHowellJollyBodies: true,
        rcmPappenheimerBodies: true,
        tableCbcAnalysis_name: 'Instructor',
        tableCbcAnalysis_day: '1',
        tableCbcAnalysis_time: '0730',
        wbc: '16.4',
        'wbc-interp': 'normal',
        rbc: '3.85',
        'rbc-interp': 'normal',
        hgb: '75',
        'hgb-interp': 'low',
        HCT: '0.234',
        'HCT-interp': 'low',
        MCV: '60.8',
        'MCV-interp': 'low',
        MCH: '19.5',
        'MCH-interp': 'low',
        MCHC: '321',
        'MCHC-interp': 'normal',
        RDW: '20.9',
        'RDW-interp': 'high',
        PLT: '395',
        'PLT-interp': 'normal',
        MPV: '9.8',
        'MPV-interp': 'normal',
        comments: '',
        createdDate: '2023-08-20T12:36:50-07:00',
        tablePbfReview_id: 'hematology.tablePbfReview.0'
      }
    ]
  },
}
const pageKey= 'hematology'
const tableKey = 'tablePbfReview'
const elementKey = 'wbcmAbnormalTypeMorphology'
const oldVal = 'Abnormal Lymphocytes'
const newVal = 'Lymphoma Cells'

describe( 'EhrData updates hematology page', () => {

  function validate (updatedData) {
    let val
    updatedData.should.have.property(pageKey)
    updatedData[pageKey].should.have.property(tableKey)
    const table = updatedData[pageKey][tableKey]
    table.length.should.greaterThanOrEqual(1)
    const row1 = table[0]
    row1.should.have.property(elementKey)
    val = row1[elementKey]
    val.includes(newVal).should.equal(true)
    val.includes(oldVal).should.equal(false)
  }

  it('test wbcmAbnormalTypeMorphology ', () => {
    const updatedData = updateHematologyLymphocytes(ehrData, {})
    validate(updatedData)
  })

  // TODO rewrite to allow for ev2.4.0 patch 0 is less than 5
  it.skip('test wbcmAbnormalTypeMorphology through EnrDataModel', () => {
    // the constructor updates the data and that uses updateRespiratory()
    const model = new EhrDataModel(ehrData)
    const updatedData = model.ehrData
    should.exists(updatedData)
    validate(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    const version = model.ehrVersion
    version.major.should.be.greaterThanOrEqual(2, 'version major 2')
    version.minor.should.be.greaterThanOrEqual(3, 'version minor 3')
    version.patch.should.be.greaterThanOrEqual(5, 'version patch 5')
  })
})
