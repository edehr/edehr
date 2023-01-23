import StoreHelper from '@/helpers/store-helper'

export default class EhrData {
  static getMergedData () {
    return StoreHelper.getMergedData()
  }
  static getMergedPageData (pageKey) {
    return this.getMergedData()[pageKey] || {}
  }
  static getMergedTableData (pageKey, tableKey) {
    const pageData = this.getMergedPageData(pageKey)
    return pageData[tableKey] || []
  }
  static getTableRowData (pageKey, tableKey, rowIndex) {
    const tableData = this.getMergedTableData(pageKey, tableKey)
    return tableData[rowIndex]
  }
}