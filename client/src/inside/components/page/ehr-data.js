import StoreHelper from '@/helpers/store-helper'

export default class EhrData {
  static getMergedData () {
    return StoreHelper.getMergedData()
  }
  static getMergedPageData (pageKey) {
    if(!pageKey) throw new Error('Must specify page key to getMergedPageData')
    return this.getMergedData()[pageKey] || {}
  }

  /**
   * Get table data for the given pageKey and tableKey.  Sorting this data by simulation day/time. Newest first.
   * @param pageKey
   * @param tableKey
   * @returns {*|*[]}
   */
  static getMergedTableData (pageKey, tableKey) {
    const pageData = this.getMergedPageData(pageKey)
    let td = pageData[tableKey] || []
    const sorter = (a, b ) => {
      const order = -1 // -1 to get new entries first
      if (!isFinite(a) && ! isFinite(b)) return 0
      if (!isFinite(a)) return order
      if (!isFinite(b)) return -1 * order
      return (a - b) * order
    }
    td.sort( (a,b) => {
      let d = sorter(a.day, b.day)
      let t = sorter(a.time, b.time)
      return d === 0 ? t : d
    })
    return td
  }
  static getTableRowData (pageKey, tableKey, rowIndex) {
    const tableData = this.getMergedTableData(pageKey, tableKey)
    return tableData[rowIndex]
  }
}
