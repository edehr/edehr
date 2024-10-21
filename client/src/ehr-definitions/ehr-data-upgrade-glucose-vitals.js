import { addEhrRowToTable, deleteRowElem } from './ehr-data-model-utils'
import EhrDataModel from './EhrDataModel'


export function updateVitalsGlucose (ehrData, touchCounts) {
  touchCounts.vitalCases = 0
  const pageKey= 'vitals'
  const vitalsTableKey = 'table'
  const glucoseTableKey = 'glucoseTable'
  const elementKey1 = 'bloodSugar'

  const pageData = ehrData[pageKey]
  if (pageData) {
    const vitalsData = pageData[vitalsTableKey]
    if (vitalsData) {
      vitalsData.forEach((row, rowIndex) => {
        let elemData = row[elementKey1]
        if (elemData ) {
          touchCounts.vitalCases++

          ehrData = deleteRowElem(ehrData, pageKey, vitalsTableKey, rowIndex, elementKey1)

          const glucoseData = ehrData[pageKey][glucoseTableKey] || []
          let gRecord = {
            glucoseTable_id: EhrDataModel.GenerateRowId(pageKey,glucoseTableKey, glucoseData),
            glucoseTable_name: row.table_name,
            glucoseTable_profession: row.table_profession,
            glucoseTable_day: row.table_day,
            glucoseTable_time: row.table_time,
            gluBloodSugar: elemData
          }
          ehrData = addEhrRowToTable(ehrData, pageKey, glucoseTableKey,gRecord)
        }
      })
    }
  }
  return ehrData
}
