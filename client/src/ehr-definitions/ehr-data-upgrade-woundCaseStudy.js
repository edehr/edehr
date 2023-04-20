import { updateRowElem } from './ehr-data-model-utils'

/*
The sample wound case study was created while we were developing the final form of the EHR pages.
Unfortunately, some initial values were stored in the sample and have since been shared all over.

We need a transform to fix these errors.

Case study value
    "exudateType": "serous,sanginous",
Needs to be
    "exudateType": "serous,sanguineous",

Case study value
    "woundEdge": "nonAttached (edgeAppearsAsACliff),rolled (curledUnder)",
Needs to be changed to
    "woundEdge": "notAttached,rolled",

These were the options as of Aug 25, 2020
  Attached (flush with wound bed or sloping edge)
  Non-attached (edge appears as a cliff)
  Rolled (curled under)
  Epithelialization

These options are now like this:
  Diffuse
  Demarcated
  Attached
  Not attached
  Epithelialization
  Rolled

Here is a current sample when all checkset options are selected.
  "exudateAmount": "none,moderate,small,large",
  "exudateType": "serous,sanguineous,purulent,other,notApplicable",
  "odour": "Yes",
  "woundEdge": "diffuse,demarcated,attached,notAttached,epithelialization,rolled",
  "periWoundSkin": "intact,fragile,macerated,excoriated/denuded,erythema (2CmOrLess),indurated (2CmOrLess),indurated (greaterThan2Cm),erythema (greaterThan2Cm),increasedWarmth,other",

Here is the complete record from the sample case study
      "tableWoundAssessment": [
        {
          "name": "Lori",
          "profession": "RN",
          "day": "0",
          "time": "12:00",
          "woundLabel": "Wound A",
          "length": "11.5cm",
          "width": "7cm",
          "depth": "3cm",
          "underminingDepth1": "2.5cm",
          "underminingDepthLocation1A": "11",
          "underminingDepthLocation1B": "4",
          "slough": "20",
          "notVisible": "10",
          "other": "70",
          "woundBedCalculation": 100,
          "exudateAmount": "large",
          "exudateType": "serous,sanginous",
          "odour": "No",
          "woundEdge": "nonAttached (edgeAppearsAsACliff),rolled (curledUnder)",
          "periWoundSkin": "intact",
          "woundPain": "2",
          "packingOut": "1",
          "packinIn": "1",
          "treatmentComplete": "Yes",
          "createdDate": "2020-08-31T15:17:34-07:00"
        }
      ]

*/
export function updateWoundCaseStudy (ehrData) {
  const pageKey= 'integumentaryAssessment'
  const tableKey = 'tableWoundAssessment'
  const elementKey1 = 'exudateType'
  const newVal1 = 'serous,sanguineous'
  const oldVal1 = 'serous,sanginous'
  const elementKey2 = 'woundEdge'
  const newVal2 = 'notAttached,rolled'
  const oldVal2 = 'nonAttached (edgeAppearsAsACliff),rolled (curledUnder)'

  /*
  nonAttached (edgeAppearsAsACliff)
notAttached
   */
  const pageData = ehrData[pageKey]
  if (pageData) {
    const tableData = pageData[tableKey]
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let elemData = row[elementKey1]
        if (elemData && elemData.includes(oldVal1)) {
          const replace = elemData.replace(oldVal1, newVal1)
          ehrData = updateRowElem(ehrData, pageKey, tableKey, rowIndex, elementKey1, replace)
        }
        elemData = row[elementKey2]
        if (elemData && elemData.includes(oldVal2)) {
          const replace = elemData.replace(oldVal2, newVal2)
          ehrData = updateRowElem(ehrData, pageKey, tableKey, rowIndex, elementKey2, replace)
        }
      })
    }
  }
  return ehrData
}
