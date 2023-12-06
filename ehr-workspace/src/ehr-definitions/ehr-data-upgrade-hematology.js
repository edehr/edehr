import { updateRowElem } from './ehr-data-model-utils'

/*
On page hematology
For each row in tablePbfReview
change the element wbcmAbnormalTypeMorphology and replace “Abnormal Lymphocytes” with “Lymphoma Cells”
*/
export function updateHematologyLymphocytes (ehrData, touchCounts) {
  touchCounts.hemaLymph = 0
  const pageKey= 'hematology'
  const tableKey = 'tablePbfReview'
  const elementKey = 'wbcmAbnormalTypeMorphology'
  const oldVal = 'Abnormal Lymphocytes'
  const newVal = 'Lymphoma Cells'
  const pageData = ehrData[pageKey]
  if (pageData) {
    const tableData = pageData[tableKey]
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let elemData = row[elementKey]
        if (elemData && elemData.includes(oldVal)) {
          const replace = elemData.replace(oldVal, newVal)
          ehrData = updateRowElem(ehrData, pageKey, tableKey, rowIndex, elementKey, replace)
          touchCounts.hemaLymph++
        }
      })
    }
  }
  return ehrData
}
