import EhrTypes from '@/ehr-definitions/ehr-types'
import StoreHelper from '@/helpers/store-helper'
import { ehrText } from '@/appText'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import EhrData from '@/inside/components/page/ehr-data'

const ehrPages = new EhrPages()

export default class EhrTableActions {

  static getTableActionGetDraftRowIndex (pageKey, sourceTableKey, sourceRowIndex, targetTableKey) {
    let targetDraftRowIndex = -1
    const desiredRowValue = this.getTableActionGetRef(pageKey, sourceTableKey, sourceRowIndex)
    const srcElemKey = this.getTableActionTargetElementKey(pageKey, sourceTableKey, targetTableKey)
    if (!srcElemKey) {
      StoreHelper.setApiError(ehrText.ERROR_IN_TABLE_ACTION_DEF(targetTableKey))
      return targetDraftRowIndex
    }
    const mData = StoreHelper.getMergedData()
    const pData = mData[pageKey] || {}
    const tData = pData[targetTableKey] || []
    targetDraftRowIndex = tData.findIndex( row => row.isDraft && row[srcElemKey] === desiredRowValue )
    // console.log('targetDraftRowIndex', pageKey, sourceTableKey, sourceRowIndex, targetTableKey, targetDraftRowIndex)
    return targetDraftRowIndex
  }

  static getTableActionGetRef (pageKey, sourceTableKey, sourceRowIndex) {
    return pageKey + '.' + sourceTableKey + '.' + sourceRowIndex
  }

  static getTableActionLabel (pageKey, tableDef, sourceRowIndex) {
    const targetTableKey = tableDef.tableAction
    const sourceTableKey = tableDef.tableKey
    const draftRowIndex = this.getTableActionGetDraftRowIndex(pageKey, sourceTableKey, sourceRowIndex, targetTableKey)
    return draftRowIndex >= 0 ? 'Resume' : tableDef.tableActionLabel
  }

  static getTableActionTargetElementKey (pageKey, sourceTableKey, targetTableKey) {
    const desiredInputType = EhrTypes.inputTypes.ehr_embedded
    const desiredProperty = EhrTypes.elementProperties.embedRef
    const desiredPropertyValue = pageKey + '.' + sourceTableKey // e.g. 'hematology.tableCbcAnalysis'
    // get list of elements, from the target table def, that have the desired input type
    const embList = ehrPages.findTableElementsByInputType(pageKey, targetTableKey, desiredInputType)
    // get element from list that has the desired property
    const tElem = embList.find(elem => elem.getProperty(desiredProperty) === desiredPropertyValue)
    // get the key for the element
    return tElem ? tElem.elementKey : undefined
  }

  /**
   * Search the table data looking for a row marked with the isDraft flag. Return the index of
   * that row or -1 if not found.
   * @param pageKey
   * @param tableKey
   * @returns {number}
   */
  getTableDraftRowIndex (pageKey, tableKey) {
    const tableData = EhrData.getMergedTableData(pageKey, tableKey)
    // console.log('checking for draft row in tableKey, tableData ', tableKey, tableData.length)
    return tableData.findIndex((row) => {
      return Object.keys(row).find(e => e === 'isDraft')
    })
  }

  /**
   * A source table's "tableAction" button has been pressed. That table emitted the TABLE_ACTION_EVENT
   * and the containing page (Hematology only at this time) caught the event and has now made
   * this tableActionRequest ? getTableActionRequestOptions ?.  One of two actions are taken....
   *
   * 1. Open the draft row if present ...
   * Search to see if we've already started a draft row, in the target table, for the given source row.
   * In this case we need to reload the previously saved values.  Question: do we reload the embedded
   * data or is that already in the saved data?
   *
   * 2. Start a new record.
   * If no draft exists then start a new record. This is the regular action of opening a dialog form for
   * the table BUT we also need to set the initial value of the target table's ehr_embedded element
   * that corresponds with the source table.  This initial value will contain the sourceRowIndex and
   * enable the target table to load data from the source table into a read only embedded element.
   * The process of loading that embedded data will also invoke the open form dialog with two flags set.
   * One to keep the embedded form view only and the second to indicate the form is "embedded".
   *
   * @param sourceTableKey
   * @param targetTableKey
   * @param sourceRowIndex
   */
  static getTableActionRequestOptions (pageKey, sourceTableKey, sourceRowIndex, targetTableKey) {
    const options = {
      tableAction: true,
      pageKey: pageKey,
      sourceTableKey: sourceTableKey,
      sourceRowIndex: sourceRowIndex,
      targetTableKey: targetTableKey
    }
    const draftRowIndex = this.getTableActionGetDraftRowIndex(
      pageKey, sourceTableKey, sourceRowIndex, targetTableKey)
    if (draftRowIndex >= 0) {
      /*
      If we have a draft row then we are resuming editing, and we use the existing table data
      to initialize the input fields
       */
      // options.draftRowIndex = draftRowIndex
      options.tableActionDraftRowIndex = draftRowIndex
    } else {
      /*
      No draft means we're starting fresh.
      The source table definition has a property 'tableAction' that contains the target table key.
      This all assumes the source and target are on the same page.
      Inside the target table will be an element with type ehr_embedded
      that wants to get the data from the source row.
      The ehr_embedded element has a property 'embedRef' that is in the
      form <page key>.<source table key>.<source row index>
      The ehr_embedded element just needs the source row index to know where to retrieve the data from.
       */
      const embedRefValue = this.getTableActionGetRef(pageKey, sourceTableKey, sourceRowIndex)
      options.embedRefValue = embedRefValue
    }
    console.log('gtaro', JSON.stringify(options))
    return options
  }

  // async removeDraftRow () {
  //   const dialog = this._getActiveTableDialog()
  //   const pageKey = this.pageKey
  //   const tableKey = dialog.tableKey
  //   let asLoadedPageData = this.getMergedPageData(pageKey)
  //   let table = asLoadedPageData[tableKey]
  //   // find the row with draft data or
  //   const previousRow = table.findIndex(row => !!row.isDraft)
  //   if (previousRow >= 0) {
  //     table.splice(previousRow, 1)
  //   }
  //   let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
  //   await this._saveData(pageKey, dataToSave)
  // }

}
