import EhrTypes from '@/ehr-definitions/ehr-types'
import StoreHelper from '@/helpers/store-helper'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import { t18EhrText } from '@/helpers/ehr-t18'
// import * as assert from 'assert'

const ehrPages = new EhrPages()

export default class EhrTableActions {

  static getTableActionGetDraftRowIndex (tableDef, sourceRowId) {
    const ehrText = t18EhrText()
    const { taTargetPageKey, taTargetTableKey} = tableDef
    let targetDraftRowIndex = -1
    const desiredRowValue = sourceRowId
    const srcElemKey = this.getTableActionTargetElementKey(tableDef)
    if (!srcElemKey) {
      const msg = ehrText.ERROR_IN_TABLE_ACTION_DEF(JSON.stringify(tableDef))
      StoreHelper.setApiError(msg)
      throw new Error(msg)
    }
    const mData = StoreHelper.getMergedData()
    const pData = mData[taTargetPageKey] || {}
    const tData = pData[taTargetTableKey] || []
    targetDraftRowIndex = tData.findIndex( row => row.isDraft && row[srcElemKey] === desiredRowValue )
    // console.log('getTableActionGetDraftRowIndex', sourceRowId, targetDraftRowIndex)
    return targetDraftRowIndex
  }

  static getTableActionLabel (tableDef, sourceRowId) {
    // console.log('getTableActionLabel', tableDef)
    const draftRowIndex = this.getTableActionGetDraftRowIndex(tableDef, sourceRowId)
    return draftRowIndex >= 0 ? 'Resume' : tableDef.tableActionLabel
  }

  static getTableActionTargetElementKey (tableDef) {
    // this is complicated but it is cool.
    const desiredInputType = EhrTypes.inputTypes.ehr_embedded
    const desiredProperty = EhrTypes.elementProperties.embedRef
    const { taTargetPageKey, taTargetTableKey, taSourcePageKey, taSourceTableKey} = tableDef
    const desiredPropertyValue = taSourcePageKey + '.' + taSourceTableKey // e.g. 'hematology.tableCbcAnalysis'
    // get list of elements, from the target table def, that have the desired input type
    // assert.ok(taTargetPageKey, `getTableActionTargetElementKey has target page key ${taTargetPageKey}`)
    const embList = ehrPages.findTableElementsByInputType(taTargetPageKey, taTargetTableKey, desiredInputType)
    // get element from list that has the desired property
    const tElem = embList.find(elem => elem.getProperty(desiredProperty) === desiredPropertyValue)
    // console.log('------ desiredInputType', desiredInputType)
    // console.log('------ desiredProperty', desiredProperty)
    // console.log('------ taTargetPageKey, taTargetTableKey, taSourcePageKey, taSourceTableKey-----', taTargetPageKey, taTargetTableKey, taSourcePageKey, taSourceTableKey)
    // console.log('------ embList', JSON.stringify(embList))
    // console.log('------ tElem', JSON.stringify(tElem))
    // get the key for the element
    return tElem ? tElem.elementKey : undefined
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
   * @param sendersTableDef
   * @param sourceRowId
   */
  static getTableActionRequestOptions (sendersTableDef, sourceRowId) {
    const options = {
      sendersTableDef: sendersTableDef,
      sourceRowId: sourceRowId
    }
    options.embedRefValue = sourceRowId

    // const draftRowIndex = this.getTableActionGetDraftRowIndex(sendersTableDef, sourceRowId)
    // if (draftRowIndex >= 0) {
    //   /*
    //   If we have a draft row then we are resuming editing, and we use the existing table data
    //   to initialize the input fields
    //    */
    //   // options.draftRowIndex = draftRowIndex
    //   options.tableActionDraftRowIndex = draftRowIndex
    // } else {
    //   /*
    //   No draft means we're starting fresh.
    //   The source table definition has a property 'tableAction' that contains the target table key.
    //   This all assumes the source and target are on the same page.
    //   Inside the target table will be an element with type ehr_embedded
    //   that wants to get the data from the source row.
    //   The ehr_embedded element has a property 'embedRef' that is in the
    //   form <page key>.<source table key>.<source row index>
    //   The ehr_embedded element just needs the source row index to know where to retrieve the data from.
    //    */
    //   options.embedRefValue = sourceRowId
    // }
    // console.log('gtaro', JSON.stringify(options))
    return options
  }

}
