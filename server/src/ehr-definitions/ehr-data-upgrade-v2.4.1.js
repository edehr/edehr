
export function updateV2_4_1 (ehrDataModel, touchCounts) {
  // console.log('updateV2_4_1')
  updateCardioCapRefill(ehrDataModel, touchCounts)
  updateMrnWithColon(ehrDataModel, touchCounts)
  updateMedInjections(ehrDataModel, touchCounts)
  updateStroke(ehrDataModel, touchCounts)
  updateMedOd(ehrDataModel, touchCounts)
  return ehrDataModel.ehrData
}

function updateStroke (ehrDataModel, touchCounts) {
  /*
  Sample before
      "neurological": {
      "table": [
        {
          "table_name": "Dorothea",
          "table_profession": "RN"
          "table_day": 0,
          "table_time": "0000",
          "levelOfConciousness": "0 = Alert; keenly responsive",
          "levelOfConciousnessQuestions": "1 = Answers one question correctly",
          "levelOfConciousnessCommands": "0 = Performs both tasks correctly",
          "motorLeftArm": "0 = No drift",
          "motorRightArm": "1 = Drift",
          "motorLeftLeg": "0 = No drift",
          "motorRightLeg": "1 = Drift",
          "limbAtaxia": "1 = Present in one limb",
          "bestGaze": "1 = Partial gaze palsy",
          "visual": "1 = Partial hemianopia",
          "facialPalsy": "1 = Minor paralysis",
          "sensory": "1 = Mild-to-moderate sensory loss",
          "bestLanguage": "2 = Severe aphasia",
          "dysarthria": "0 = Normal",
          "extinctionAndInattention": "2 = Profound hemi-inattention or extinction",
          "strokeAssessmentCalculation": 12,
        }
      ],
    }
   */
  /*
  Sample after
        "strokeAssessmentTable": [
        {
          "strokeAssessmentTable_name": "Dorothea",
          "strokeAssessmentTable_profession": "RN",
          "strokeAssessmentTable_day": 0,
          "strokeAssessmentTable_time": "0000",
          "levelOfConciousness": "0 = Alert; keenly responsive",
          "levelOfConciousnessQuestions": "1 = Answers one question correctly",
          "levelOfConciousnessCommands": "0 = Performs both tasks correctly",
          "motorLeftArm": "0 = No drift",
          "motorRightArm": "1 = Drift",
          "motorLeftLeg": "0 = No drift",
          "motorRightLeg": "1 = Drift",
          "limbAtaxia": "1 = Present in one limb",
          "bestGaze": "1 = Partial gaze palsy",
          "visual": "1 = Partial hemianopia",
          "facialPalsy": "1 = Minor paralysis",
          "sensory": "1 = Mild-to-moderate sensory loss",
          "bestLanguage": "2 = Severe aphasia",
          "dysarthria": "0 = Normal",
          "extinctionAndInattention": "2 = Profound hemi-inattention or extinction",
          "strokeAssessmentCalculation": 12,
          "createdDate": "2023-12-01T15:40:21-08:00",
          "strokeAssessmentTable_id": "neurological.strokeAssessmentTable.0"
        }
      ]

   */
  touchCounts.stroke = 0
  let pageKey = 'neurological'
  let tableKey = 'table'
  let targetTableKey = 'strokeAssessmentTable'
  let headerKeys = [
    ['table_name', 'strokeAssessmentTable_name'],
    ['table_profession','strokeAssessmentTable_profession'],
    ['table_day', 'strokeAssessmentTable_day'],
    ['table_time', 'strokeAssessmentTable_time']
  ]
  let elementKeys = [
    'levelOfConciousness',
    'levelOfConciousnessQuestions',
    'levelOfConciousnessCommands',
    'motorLeftArm',
    'motorRightArm',
    'motorLeftLeg',
    'motorRightLeg',
    'limbAtaxia',
    'bestGaze',
    'visual',
    'facialPalsy',
    'sensory',
    'bestLanguage',
    'dysarthria',
    'extinctionAndInattention',
    'strokeAssessmentCalculation'
  ]
  if (ehrDataModel.hasData(pageKey)) {
    const strokeTable = [ ]
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let strokeData = {}
        let hasStrokeData = false
        elementKeys.forEach(elementKey => {
          let elemData = row[elementKey]
          if (elemData) {
            strokeData[elementKey] = elemData
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, undefined)
            hasStrokeData = true
            // touchCounts.stroke++
          }
        })
        if (hasStrokeData){
          headerKeys.forEach(elementKey => {
            strokeData[elementKey[1]] = row[elementKey[0]]
          })
          strokeTable.push(strokeData)
        }
      })
    }
    if (strokeTable.length > 0) {
      ehrDataModel._updatePageTableData(pageKey, targetTableKey, strokeTable)
      touchCounts.stroke++
    }
  }
}

function updateMedInjections (ehrDataModel, touchCounts) {
  touchCounts.medInjections = 0
  let pageKey = 'medicationOrders'
  let tableKey = 'medicationOrdersTable'
  let elementKeys = ['med_route']
  const oldValN = 'inje'
  const newValN = 'subc'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        elementKeys.forEach(elementKey => {
          let elemData = row[elementKey]
          if (elemData === oldValN) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
            touchCounts.medInjections++
          }
        })
      })
    }
  }
  pageKey = 'medAdminRec'
  tableKey = 'marTable'
  elementKeys = ['med_route', 'mar_route']
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        elementKeys.forEach(elementKey => {
          let elemData = row[elementKey]
          if (elemData === oldValN) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
            touchCounts.medInjections++
          }
        })
      })
    }
  }
}

function updateMedOd (ehrDataModel, touchCounts) {
  touchCounts.medOdOrders = 0
  let pageKey = 'medicationOrders'
  let tableKey = 'medicationOrdersTable'
  let elementKey = 'med_timing'
  let elementKey2 = 'med_scheduled'
  let oldValN = 'od'
  let newValN = 'sched'
  let newValN2 = 'OD'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let elemData = row[elementKey]
        if (elemData === oldValN) {
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey2, newValN2)
          touchCounts.medOdOrders++
        }
      })
    }
  }
  pageKey = 'medAdminRec'
  tableKey = 'marTable'
  elementKey = 'med_timing'
  elementKey2 = 'med_scheduled'
  let elementKey3 = 'mo_timing'
  oldValN = 'od'
  newValN = 'sched'
  newValN2 = 'OD'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let elemData = row[elementKey]
        if (elemData === oldValN) {
          // if there is a med_timing then also update med_scheduled
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey2, newValN2)
          touchCounts.medOdOrders++
        }
        elemData = row[elementKey3]
        if (elemData === oldValN) {
          // if there is a mo_timing with "od" then update to "sched"
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
          touchCounts.medOdOrders++
        }
      })
    }
  }
}

function updateCardioCapRefill (ehrDataModel, touchCounts) {
  touchCounts.capRefill = 0
  const pageKey= 'cardiovascular'
  const tableKey= 'table'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {

        const elementKeys = ['capRefillLeftHand', 'capRefillRightHand', 'capRefillRightFoot', 'capRefillLeftFoot']
        const oldValN = 'Normal < 3 seconds'
        const newValN = 'normal'
        const oldValD = 'Delayed > 3 seconds'
        const newValD = 'delayed'
        elementKeys.forEach(elementKey => {
          let elemData = row[elementKey]
          if (elemData === oldValN) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
            touchCounts.capRefill++
          }
          if (elemData === oldValD) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValD)
            touchCounts.capRefill++
          }
        })

        const elementEdemaKeys = ['peripheralEdemaRightHand', 'peripheralEdemaLeftHand', 'peripheralEdemaRightFoot', 'peripheralEdemaLeftFoot']
        // OLD
        //'No',
        // 'Ankle',
        // 'Pedal',
        // 'Sacral',
        // 'Pitting',
        //NEW
        // No:=None (0)
        // g1:=1+
        // g2:=2+
        // g3:=3+
        // g4:=4+
        const valueKeys = [
          ['Ankle', 'g1'],
          ['Pedal', 'g2'],
          ['Sacral', 'g3'],
          ['Pitting', 'g4'],
        ]
        elementEdemaKeys.forEach(elementKey => {
          let elemData = row[elementKey]
          valueKeys.forEach(values => {
            if (elemData === values[0]) {
              ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, values[1])
              touchCounts.capRefill++
            }
          })
        })
      })
    }
  }
}

/*
peripheralEdemaRightHand
peripheralEdemaLeftHand
peripheralEdemaRightFoot
"No
Ankle
Pedal
Sacral
 */

function updateMrnWithColon (ehrDataModel, touchCounts) {
  touchCounts.mrnColon = 0
  const pageKey = 'demographics'
  if (ehrDataModel.hasData(pageKey)) {
    const pageData = ehrDataModel.getPageData(pageKey)
    if (pageData.mrn && pageData.mrn.includes(':')) {
      ehrDataModel._updatePageFormData(pageKey, 'mrn', pageData.mrn.replace(':', '-'))
      touchCounts.mrnColon++
    }
  }
}
