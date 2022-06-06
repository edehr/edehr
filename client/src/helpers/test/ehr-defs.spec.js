import should from 'should'
import EhrDefs from '../ehr-defs-grid'

const pageKeys = [
  'allergies',
  'assessmentTools',
  'billing',
  'biopsychosocial',
  'cardiovascular',
  'carePlan',
  'careTeam',
  'caseMixGroup',
  'codeLookup',
  'consults',
  'demographics',
  'diagnosticCodes',
  'dischargeSummary',
  'familyHistory',
  'fluidBalance',
  'gastrointestinal',
  'genitourinary',
  'hematology',
  'immunization',
  'integumentaryAssessment',
  'interventionCodes',
  'labRequisitions',
  'labResults',
  'medAdminRec',
  'medical',
  'medicalImaging',
  'medicationOrders',
  'musculoskeletal',
  'neurological',
  'nonmedOrders',
  'operationReports',
  'pain',
  'pastAppointments',
  'progressNotes',
  'psychosocial',
  'referrals',
  'respiratory',
  'surgical',
  'testPage',
  'testTable',
  'visit',
  'vitals'
]

describe('Test ehr defs', () => {
  it('getAllPageKeys', () => {
    let pageKeys = EhrDefs.getAllPageKeys()
    should.exist(pageKeys)
    // console.log(pageKeys.length, pageKeys)
    pageKeys.length.should.equal(42)
  })
  it('getPageDefinition', () => {
    for(let i = 0; i< pageKeys.length; i++) {
      let key = pageKeys[i]
      let aPage = EhrDefs.getPageDefinition(key)
      should.exist(aPage)
    }
  })
})