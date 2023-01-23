import EhrData from '@/inside/components/page/ehr-data'

export default class EhrTableDraft {
  static addEditDraftRowOptions (options, pageKey, tableKey, rowIndex) {
    const rowData = EhrData.getTableRowData(pageKey, tableKey, rowIndex)
    options.draftRowData = rowData
    options.draftRowIndex= rowIndex
    // console.log('Edit draft row on table', pageKey, tableKey, rowIndex, options)
  }

  /**
   * Search the table data looking for a row marked with the isDraft flag. Return the index of
   * that row or -1 if not found.
   * @param pageKey
   * @param tableKey
   * @returns {number}
   */
  static getTableDraftRowIndex (pageKey, tableKey) {
    const tableData = EhrData.getMergedTableData(pageKey, tableKey)
    // console.log('checking for draft row in tableKey, tableData ', tableKey, tableData.length)
    return tableData.findIndex((row) => {
      return Object.keys(row).find(e => e === 'isDraft')
    })
  }

  static removeDraftRow (pageKey, tableKey) {
    const asLoadedPageData = EhrData.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    // find the row with draft data or
    const previousRow = table.findIndex(row => !!row.isDraft)
    if (previousRow >= 0) {
      table.splice(previousRow, 1)
    }
    return asLoadedPageData
  }

}
