import StoreHelper from '@/helpers/store-helper'
import { decoupleObject } from '@/ehr-definitions/common-utils'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'

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
    const dK = tableKey + '_day'
    const tK = tableKey + '_time'
    const pageData = this.getMergedPageData(pageKey) || {}
    let td = pageData[tableKey]
    // decouple the table data so we don't sort the underlying merged data
    td = td ? decoupleObject(td) : []
    const sorter = (a, b ) => {
      const order = -1 // -1 to get new entries first
      if (!isFinite(a) && ! isFinite(b)) return 0
      if (!isFinite(a)) return order
      if (!isFinite(b)) return -1 * order
      return (a - b) * order
    }
    td.sort( (a,b) => {
      let d = sorter(a[dK], b[dK])
      let t = sorter(a[tK], b[tK])
      return d === 0 ? t : d
    })
    return td
  }
  static getTableRowData (rowId) {
    const { pageKey, tableKey } = EhrDataModel.IdToParts(rowId)
    const rowElementKey = tableKey + '_id'
    const tableData = this.getMergedTableData(pageKey, tableKey)
    return tableData.find(row => 0 === rowId.localeCompare(row[rowElementKey]))
  }
}
