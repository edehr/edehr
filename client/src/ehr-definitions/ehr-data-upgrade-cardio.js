export function updateCardioCapRefill (ehrDataModel) {
  const pageKey= 'cardiovascular'
  const tableKey= 'table'
  const elementKeys = ['capRefillLeftHand', 'capRefillRightHand', 'capRefillRightFoot', 'capRefillLeftFoot']
  const oldValN = 'Normal < 3 seconds'
  const newValN = 'normal'
  const oldValD = 'Delayed > 3 seconds'
  const newValD = 'delayed'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        elementKeys.forEach( elementKey => {
          let elemData = row[elementKey]
          if (elemData === oldValN) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValN)
          }
          if (elemData === oldValD) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newValD)
          }
        })
      })
    }
  }
  return ehrDataModel.ehrData
}
