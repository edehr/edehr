
/**
 * If any medication order was by "Inhalation" change it to "Inhaler"
 *
 * @param ehrDataModel
 * @returns {*}
 */
export function updateMedicationRoute (ehrDataModel, touchCounts) {
  touchCounts.medRoutes = 0
  const pageKey= 'medicationOrders'
  const tableKey= 'table'
  const elementKey = 'route'
  const oldVal = 'Inhalation'
  const newVal = 'Inhaler'
  if (ehrDataModel.hasData(pageKey)) {
    const tableData = ehrDataModel.getPageTableData(pageKey, tableKey)
    if (tableData) {
      tableData.forEach((row, rowIndex) => {
        let elemData = row[elementKey]
        if (elemData === oldVal) {
          ehrDataModel._updateRowElem(pageKey, tableKey, rowIndex, elementKey, newVal)
          touchCounts.medRoutes++
        }
      })
    }
  }
  return ehrDataModel.ehrData
}
