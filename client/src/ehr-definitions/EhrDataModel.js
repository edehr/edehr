/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */

class EhrDataModel {
  constructor (ehrData) {
    this._ehrData = ehrData
  }
  get ehrData () { return this._ehrData}
  set ehrData (ed) { this._ehrData = ed}

  get pageKeys () {
    let keys = Object.keys(this._ehrData)
    let inx = keys.indexOf('meta')
    if (inx > -1 ) {
      keys.splice(inx, 1)
    }
    return keys
  }

  get simTime () {
    const meta = this._ehrData.meta || {}
    return meta.simTime
  }

  getPageData (pageKey) {
    return this._ehrData[pageKey]
  }

  getPageFormData (pageKey, elementKey) {
    return this.getPageData(pageKey)[elementKey]
  }
  hasData (pageKey) {
    return !!this.getPageData(pageKey)
  }

  getPageTableData (pageKey, tableKey) {
    return this.getPageData(pageKey)[tableKey]
  }
  getRowData (pageKey, tableKey, rowKey) {
    return this.getPageData(pageKey)[tableKey][rowKey]
  }

  updatePageFormData (pageKey, elementKey, value) {
    const pg = this._ehrData[pageKey]
    pg[elementKey] = value
  }
  updateRowElem ( pageKey, tableKey, rowIndex, elementKey, value) {
    // extract the table data, update the value in the specified row and then replace table data in main data object
    const targetData = this._ehrData[pageKey][tableKey]
    targetData[rowIndex][elementKey] = value
    this._ehrData[pageKey][tableKey] = targetData
  }
}

module.exports = EhrDataModel