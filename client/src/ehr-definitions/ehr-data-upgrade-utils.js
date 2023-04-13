export function updateRespiratory (ehrDataModel) {
  const pageKey= 'respiratory'
  const tableKey= 'table'
  /*
"lul": "Normal",
"rul": "Normal",
"rml": "Decreased",
"lll": "Decreased",
"rll": "Decreased",
   */
  const elementKeys = ['lul', 'rul', 'rml', 'lll', 'rll']
  const oldVal = 'Deceased'
  const newVal = 'Decreased'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        elementKeys.forEach( elementKey => {
          let elemData = row[elementKey]
          if (elemData === oldVal) {
            ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newVal)
          }
        })
      })
    }
  }
  return ehrDataModel.ehrData
}
