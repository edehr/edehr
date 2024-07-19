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
    let result
    const { pageKey, tableKey, rowIndex, orderSetElement, medId } = EhrDataModel.IdToParts(rowId)
    // console.log('get table row data for rowId', rowId)
    const rowElementKey = tableKey + '_id'
    const tableData = this.getMergedTableData(pageKey, tableKey)
    if (orderSetElement) {
      const rowData = tableData[rowIndex]
      const orderSetData = rowData[orderSetElement]
      // console.log('get table row data for orderSetElement, medId', orderSetElement, ' - ', medId, ' - ', orderSetData)
      const medOrders = orderSetData.medOrders || []
      result = medOrders.find(elem => {
        return elem.medicationOrdersTable_id === rowId
      })
    } else {
      result = tableData.find(row => 0 === rowId.localeCompare(row[rowElementKey]))
    }
    // console.log('get table row result:', JSON.stringify(result))
    return result
  }
}
