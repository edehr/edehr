import EhrData from '@/inside/components/page/ehr-data'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'

export default class EhrTableDraft {

  /*
   * Search the table data looking for a row marked with the isDraft flag.
   * @param pageKey
   * @param tableKey
   * @returns {*} row of table data
   */
  static getTableDraftRow (pageKey, tableKey) {
    const asLoadedPageData = EhrData.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    return table ? table.find(row => !!row.isDraft) : undefined
  }

  static findRowIndexByIdInTable (draftRowId, tableData) {
    const { tableKey } = EhrDataModel.IdToParts(draftRowId)
    const rowElementKey = tableKey + '_id'
    return tableData.find(row => 0 === draftRowId.localeCompare(row[rowElementKey]))
  }

  static findDraftRowDataById (draftRowId) {
    const { pageKey, tableKey } = EhrDataModel.IdToParts(draftRowId)
    const rowElementKey = tableKey + '_id'
    const asLoadedPageData = EhrData.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    return table ? table.find(row => 0 === draftRowId.localeCompare(row[rowElementKey]) && !!row.isDraft) : undefined
  }

  static generateId (pageKey, tableKey) {
    const asLoadedPageData = EhrData.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey] || [] // provide default empty table
    return EhrDataModel.GenerateRowId(pageKey, tableKey, table)
  }
  static removeFirstDraftRow (pageKey, tableKey) {
    const asLoadedPageData = EhrData.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    const previousRow = table.findIndex(row => !!row.isDraft)
    if (previousRow >= 0) {
      table.splice(previousRow, 1)
    }
    return asLoadedPageData
  }

}
