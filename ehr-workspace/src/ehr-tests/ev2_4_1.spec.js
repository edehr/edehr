import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import ehrInput from '../resources/for2-4-1.json'

const expectedCardio =  {
  table: [
    {
      table_name: 'Dorothea',
      table_profession: 'RN',
      table_day: 0,
      table_time: '0000',
      skinAppearance: 'Normal',
      nailBedColourRightHand: 'Pink',
      nailBedColourLeftHand: 'Pink',
      nailBedColourRightFoot: 'Pink',
      nailBedColourLeftFoot: 'Pink',
      table_id: 'cardiovascular.table.0',
      capRefillLeftHand: 'normal',
      temperatureRightHand: 'Warm',
      peripheralEdemaRightHand: 'No',
      capRefillRightHand: 'normal',
      temperatureLeftHand: 'Warm',
      peripheralEdemaLeftHand: 'g1',
      capRefillRightFoot: 'normal',
      temperatureRightFoot: 'Warm',
      peripheralEdemaRightFoot: 'g2',
      capRefillLeftFoot: 'normal',
      temperatureLeftFoot: 'Warm',
      peripheralEdemaLeftFoot: 'g3'
    }
  ],
}

const expectedNeuro = {
  table: [
    {
      table_name: 'Dorothea',
      table_day: 0,
      table_time: '0000',
      alert: 'oriented',
      eyeOpening: '0 = Non testable',
      glasgowCalculation: 0,
      loss: 'No',
      table_id: 'neurological.table.0',
      table_profession: 'RN',
      verbalResponse: '0 = Non testable',
      bestMotorResponse: '0 = Non testable',
      leftPupilSize: '2',
      leftPupilResponseToLight: 'Brisk',
      rightPupilSize: '3',
      rightPupilResponseToLight: 'Brisk',
      bothPupils: 'Equal'
    }
  ],
  strokeAssessmentTable: [
    {
      levelOfConciousness: '0 = Alert; keenly responsive',
      levelOfConciousnessQuestions: '1 = Answers one question correctly',
      levelOfConciousnessCommands: '0 = Performs both tasks correctly',
      motorLeftArm: '0 = No drift',
      motorRightArm: '1 = Drift',
      motorLeftLeg: '0 = No drift',
      motorRightLeg: '1 = Drift',
      limbAtaxia: '1 = Present in one limb',
      bestGaze: '1 = Partial gaze palsy',
      visual: '1 = Partial hemianopia',
      facialPalsy: '1 = Minor paralysis',
      sensory: '1 = Mild-to-moderate sensory loss',
      bestLanguage: '2 = Severe aphasia',
      dysarthria: '0 = Normal',
      extinctionAndInattention: '2 = Profound hemi-inattention or extinction',
      strokeAssessmentCalculation: 12,
      strokeAssessmentTable_name: 'Dorothea',
      strokeAssessmentTable_profession: 'RN',
      strokeAssessmentTable_day: 0,
      strokeAssessmentTable_time: '0000',
      strokeAssessmentTable_id: 'neurological.strokeAssessmentTable.0'
    }
  ]
}

describe( 'EhrData updates to ev2.4.1', () => {

  it('updateV2_4_1', () => {
    let updated, s1, s2
    // console.log(JSON.stringify(ehrInput))
    const model = new EhrDataModel(ehrInput.ehrData)
    const ehrData = model.ehrData
    updated = ehrData['cardiovascular']
    updated['lastUpdate'] = undefined
    updated.table[0]['createdDate'] = undefined
    s1 = JSON.stringify(expectedCardio)
    s2 = JSON.stringify(updated)
    // console.log('cardiovascular should equal ', s1 === s2)
    should.ok(s1 === s2, 'cardiovascular')

    updated = ehrData['neurological']
    updated['lastUpdate'] = undefined
    updated.table[0]['createdDate'] = undefined
    s1 = JSON.stringify(expectedNeuro)
    s2 = JSON.stringify(updated)
    // console.log('neurological should equal ', s1 === s2)
    should.ok(s1 === s2, 'neurological')
    // console.log('ehrData', Object.keys(ehrData))
    // console.log('neurological', ehrData['neurological'])
  })
})
