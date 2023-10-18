import moment from 'moment'
import Vue from 'vue'
import router from '@/router'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import {
  decoupleObject,
  formatTimeStr,
  isString,
  mandatoryHasValue,
  removeEmptyProperties
} from '@/helpers/ehr-utils'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'
import ehrValidations from '@/ehr-definitions/ehr-validations'
import EhrData from '@/inside/components/page/ehr-data'
import EhrTableDraft from '@/inside/components/page/ehr-table-draft'
import EhrTableActions from '@/inside/components/page/ehr-table-actions'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'
import { validDayStr, validTimeStr } from '@/ehr-definitions/common-utils'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import store from '@/store'

export const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

const PROPS = EhrTypes.elementProperties
const dbDialog = false
const dbPageForm = false
const dbLeave = false
const dbDraft = false

const ehrPages = new EhrPages()

export default class EhrPageHelper {
  constructor (pageKey) {
    // console.log('Construct helper', pageKey)
    this.pageKey = pageKey
    StoreHelper.setCurrentPageKey(pageKey)
    this.pageFormData = { pageKey: pageKey }
    this.tableFormMap = {}
    const tables = this.getPageTableDefs()
    tables.forEach((tableDef) => {
      const tableKey = tableDef.tableKey
      // insert a structure that defines a "dialog" for each table on the page
      // include the page key to support getting information about the EHR page
      this.tableFormMap[tableKey] = { pageKey: pageKey, tableKey: tableKey, tableDef: tableDef, inputs: {}, errorList: [], active: false, viewOnly: false }
    })
    this._setupEventHandlers()
  }

  getActiveData () {
    let data
    const dialog = this._getActiveTableDialog()
    if (dialog) {
      data = dialog.inputs
    } else {
      this.pageFormData.value = this.pageFormData.value || {}
      data = this.pageFormData.value
    }
    if (!data) {
      console.error('ERROR call to getActiveData when there is none')
      throw new Error(`The page with key ${this.pageKey} has no form or tables. Tell your EdEHR admin about this problem.`)
    }
    return data
  }
  getDialogEventChannel (dialogKey) {
    const DIALOG_SHOW_HIDE_EVENT_KEY = 'modal:'
    return DIALOG_SHOW_HIDE_EVENT_KEY + dialogKey
  }
  getDialogInputs (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.inputs : []
  }
  getErrorList (tableKey) {
    // console.log('get error list for key', dialogKey)
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.errorList : []
  }

  getPageDef () { return EhrDefs.getPageDefinition(this.pageKey) }
  getPageErrors () {
    // TODO code clean up needed here
    return []
  }
  getPageForms () { return EhrDefs.getPageForms(this.pageKey) }

  /**
   * Get the date string that says when this EHR page definition was last updated.
   * @returns {string}
   */
  getPageGeneratedDate () {
    return this.formatDate(this.getPageDef().generated)
  }
  getPageKey () { return this.pageKey }
  getPageTableDefs () { return EhrDefs.getPageTables(this.pageKey) }

  // TODO rename getTableForm to getDialog
  getTableForm (tableKey) { return this.tableFormMap[tableKey]}

  _canEdit () {
    if(StoreHelper.isInstructorEvalMode()) {
      // the instructor is evaluating student work. Do not allow edit of content.
      return false
    }
    if (this._isStudent()) {
      return !this._isSubmitted()
    }
    let devContent = this._isDevelopingContent()
    let ehrOnly = EhrOnlyDemo.isActiveEhrOnlyDemo()
    return devContent || ehrOnly
  }

  /**
   * Get the dialog that is open.
   *
   * @returns {unknown}
   * @private
   */
  _getActiveTableDialog () {
    // the embedded dialog, if present, is not marked active.
    return Object.values(this.tableFormMap).find( (tbl) => { return tbl.active })
  }
  isAnythingHappening () {
    const formEditing = this.isEditing()
    const dialog = this._getActiveTableDialog()
    return formEditing || dialog && dialog.active && !dialog.viewOnly

  }
  _isDevelopingContent () {
    return StoreHelper.isDevelopingContent()
  }
  _isStudent () {
    return StoreHelper.isStudent()
  }
  _isSubmitted () {
    return StoreHelper.isSubmitted()
  }

  /**
   * _injectDataIntoTable
   * Get the as loaded table data (unsorted)
   * Get the new data from the dialog.
   * If committing remove draft flag else add flag
   * Adding row id, if not previously set, is eventually done by EhrDataModel.
   * Locate draft row in table and if found update. if not found then append new row
   *
   * @param dialog
   * @param committing
   * @returns {*}
   * @private
   */
  _injectDataIntoTable (dialog, committing) {
    const rowId = dialog.draftRowId
    const { tableKey } = EhrDataModel.IdToParts(rowId)
    const rowElementKey = tableKey + '_id'
    const pageData = this._getPageData()
    let theTable = pageData[tableKey]
    if (!theTable) {
      theTable = []
      pageData[tableKey] = theTable
    }
    const dialogValues = decoupleObject(dialog.inputs)
    dialogValues.createdDate = moment().format()
    if (committing) {
      delete dialogValues.isDraft
    } else {
      dialogValues.isDraft = 'isDraft' // mark the data as draft
    }
    if (!dialogValues[rowElementKey]) {
      dialogValues[rowElementKey] = rowId
    }
    const insertIndex =  theTable.findIndex(row => 0 === rowId.localeCompare(row[rowElementKey]))
    if( insertIndex >= 0) {
      theTable.splice(insertIndex, 1, dialogValues)
    } else {
      theTable.push(dialogValues)
    }
    return pageData  // with the updated table
  }

  /**
   *
   * @param formKey
   * @private
   */
  _loadPageFormData (formKey) {
    let asLoadedData = EhrData.getMergedPageData(this.pageKey)
    this.pageFormData.cacheData = JSON.stringify(asLoadedData)
    this.pageFormData.formKey = formKey
    /*
    TODO explore page form data handling and improve documentation
    If _isDevelopingContent then the EhrElementCommon has told this helper to stash
    the asLoaded or the DataCaseStudy value into the pageFormData.value. We want
    to use this.
    Otherwise, this is a student, and we want to use the asLoadedData
     */
    if (!this._isDevelopingContent()) {
      const studentData = store.getters['ehrDataStore/secondLevel']
      const sPageData = studentData[this.pageKey]
      this.pageFormData.value = sPageData
    } // else use what is already in this.pageFormData.value
  }

  _resetPageFormData () {
    this.pageFormData.cacheData = undefined
    this.pageFormData.formKey = undefined
    this.pageFormData.value = undefined
  }

  activeTableDialogHasData () {
    const dialog = this._getActiveTableDialog()
    if (dialog && dialog.inputs) {
      const values = decoupleObject(dialog.inputs)
      let reduced = removeEmptyProperties(values)
      const keys = Object.keys(reduced)
      const tableKey = dialog.tableKey
      const pageKey = dialog.pageKey
      // remove rec header fields because they are not important unless there is other data
      const KEYS = ['_id', 'name', 'profession', 'day', 'time']
      const recHdrKeys = KEYS.map(key => tableKey + '_' + key)
      recHdrKeys.push('isDraft', 'createdDate')
      let otherKeys = keys.filter( key => !recHdrKeys.includes(key))
      // remove any elements that are calculated
      otherKeys = otherKeys.filter( oKey => {
        const child = ehrPages.getPageChild(pageKey, oKey)
        return child
          && child.inputType !== EhrTypes.dataInputTypes.calculatedValue
          && child.inputType !== EhrTypes.dataInputTypes.calculatedText
      })
      // console.log('has data keys 2', otherKeys)
      return otherKeys.length > 0
    }
    return false
  }
  activeTableDialogHasRecordHeader () {
    const dialog = this._getActiveTableDialog()
    return dialog && dialog.tableDef.hasRecHeader
  }
  prepareAndGetActiveDialogRecordHeader () {
    const results = {}
    const dialog = this._getActiveTableDialog()
    if (dialog.tableDef.hasRecHeader) {
      const tableKey = dialog.tableDef.tableKey
      const inputs = dialog.inputs
      const mData = StoreHelper.getMergedData()
      const { visitDay, visitTime } = mData.meta.simTime
      let key
      key = tableKey + '_day'
      if (!validDayStr(inputs[key])) {
        const previous = inputs[key]
        inputs[key] = parseInt(visitDay)
        console.log('dialog saving set sim day', key, previous, inputs[key])
      }
      key = tableKey + '_time'
      if (!validTimeStr(inputs[key])) {
        const previous = inputs[key]
        inputs[key] = visitTime
        console.log('dialog saving set sim time', key, previous, inputs[key])
      }

      const KEYS = ['name', 'profession', 'day', 'time']
      KEYS.forEach(key => {
        let newKey = tableKey + '_' + key
        results[key] = inputs[newKey]
      })
    }
    return results
  }
  /**
   * Begin editing a page form
   */
  beginEdit (formKey) {
    if (dbPageForm) console.log('EhrHelpV2 begin edit', formKey)
    if (this.isEditing()) {
      console.error('EhrHelp begin edit while there is already an edit session in progress')
      return
    }
    this._loadPageFormData(formKey)
    StoreHelper.setEditingMode(true)
  }
  canEditForm () {
    return this._canEdit() && !this.isEditing()
  }
  canResetTableData () {
    return this._canEdit()
  }
  /**
   * Cancel the edit on a page form. Restore values from the database.
   */
  cancelEdit (customRouter = router) {
    if (dbPageForm) console.log('EhrHelperV2 cancelEdit', this.pageKey)
    this._resetPageFormData()
    StoreHelper.setEditingMode(false)
    // To restore the data we do a full page load to get the same flow as happens when the user comes to this page.
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }

  /**
   * Empty any data in the table specified, on the current page.
   *
   * @param tableKey
   * @returns {Promise<void>}
   */
  async clearTable (tableKey) {
    const pageKey = this.pageKey
    const pageData = this._getPageData()
    delete pageData[tableKey]
    await this._saveData(pageKey, pageData)
  }
  closeDialog () {
    const dialog = this._getActiveTableDialog()
    const tableKey = dialog.tableKey
    this._dialogCloseEvent(tableKey)
  }
  formatDate (d) {
    // TODO just use this function in the one and only place needed
    return formatTimeStr(d)
  }
  isEditing () {
    let sysVal =  StoreHelper.isEditing()
    if (dbLeave) console.log('EhrHelpV2 isEditing ', sysVal)
    return sysVal
  }
  isEditingForm (formKey) {
    let result = false
    if (this.isEditing()) {
      let pfd = this.pageFormData
      result = pfd.formKey === formKey
      if (dbPageForm) console.log('isEditingForm', formKey, result)
    }
    return result
  }
  isViewOnly (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.viewOnly : []
  }
  setViewOnly (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    // console.log('set table dialog to be view only', tableKey)
    dialog.viewOnly = true
  }

  /**
   * This method is a future defect. It must be fixed for MARs to work
   * TODO fix this future defect. Remove the row the dialog was opened on and not just the first draft row.  See cancelConfirmed in EhrDialogForm. Use const { draftRowId } = dialog
   * @returns {Promise<void>}
   */
  async removeDraftRow () {
    const pageKey = this.pageKey
    const activeDialog = this._getActiveTableDialog()
    const tableKey = activeDialog.tableKey
    const pageData = this._getPageData()
    let table = pageData[tableKey]
    if (table) {
      const previousRow = table.findIndex(row => !!row.isDraft)
      if (previousRow >= 0) {
        table.splice(previousRow, 1)
      }
    }
    await this._saveData(pageKey, pageData)
  }

  /**
   * Clear the data for a EHR page form.
   * Required to not touch data in data in another form or in any table.
   * If there is no seed (e.g. student creates new patient) then set all children props to empty.
   * "empty" means delete property just as if the page doesn't exist.
   * @param childrenKeys
   * @returns {Promise<undefined>}
   */
  async resetFormData (childrenKeys) {
    const pageData = this._getPageData()
    if (childrenKeys) {
      childrenKeys.map(ck => {
        delete pageData[ck]
      })
    }
    await this._saveData(this.pageKey, pageData)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
  async savePageFormEdit () {
    let payload = this.pageFormData
    let pageData = this._getPageData()
    pageData = {
      ...pageData,
      ...payload.value
    }
    pageData = removeEmptyProperties(pageData)
    StoreHelper.setEditingMode(false)
    await this._saveData(this.pageKey, pageData)
  }

  _getPageData () {
    let initialData = {}
    // TODO what about ehr only?
    if (StoreHelper.isStudent()) {
      initialData = StoreHelper.getSecondLevel()
    } else {
      initialData = StoreHelper.getBaseLevel()
    }
    return initialData[this.pageKey] || {}
  }

  async saveDialogData () {
    await this._saveDialogData(true)
  }
  async saveDialogDraft () {
    await this._saveDialogData(false)
  }
  async _saveDialogData (committingFlag) {
    const dialog = this._getActiveTableDialog()
    if (!dialog) {
      console.log('Rare case when the save dialog timer fires after dialog is closed')
      return
    }
    const { draftRowId } = dialog
    if (!draftRowId) {
      console.error('Save dialog requires the dialog open to set up the draft row id')
      throw new Error('Can not save table data without an id')
    }
    const { pageKey } = EhrDataModel.IdToParts(draftRowId)
    let pageData = this._injectDataIntoTable(dialog, committingFlag )
    pageData = removeEmptyProperties(pageData)
    if (committingFlag) {
      await this._saveData(pageKey, pageData)
    } else {
      // saving draft data
      let payload = {
        propertyName: pageKey,
        value: pageData
      }
      if (this._isStudent()) {
        payload.action = 'draft'
        payload.silent = true
        await store.dispatch('activityDataStore/sendAssignmentDataUpdate', payload)
      } else if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        await store.dispatch('ehrOnlyDemoStore/ehrOnlyDataUpdate', payload)
      } else if (StoreHelper.isSeedEditing()) {
        await store.dispatch('seedListStore/sendSeedEhrDataDraft', payload)
      }
    }
  }
  async _saveData (pageKey, pageData) {
    let payload = {
      propertyName: pageKey,
      value: pageData
    }
    if (this._isStudent()) {
      payload.action = 'save'
      // activityDataStore will select current patient from mPatientStore
      await store.dispatch('activityDataStore/sendAssignmentDataUpdate', payload)
    } else if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      await store.dispatch('ehrOnlyDemoStore/ehrOnlyDataUpdate', payload)
    } else if (StoreHelper.isSeedEditing()) {
      await store.dispatch('seedListStore/updateSeedEhrProperty', payload)
    }
  }
  editDraftRow (rowId) {
    const options = { draftRowId: rowId }
    const { pageKey, tableKey } = EhrDataModel.IdToParts(rowId)
    this.showDialogForTable(pageKey, tableKey, options)
  }
  /**
   * Entry point to open the form dialog for a page table element. This is invoked when the user presses
   * the top page add report button.  We may be creating a new report, or we may need to reopen a
   * draft report.
   * Or we invoke this when a user presses a table action on a row of an associated table.
   *
   * Options
   *    For a regular table or Vitals add report action the options are empty.
   *    For MarMedGrid  & Hematology the options describe the table action.
   * @param pageKey
   * @param tableKey
   * @param options
   */
  showDialogForTable (pageKey, tableKey, options) {
    let draftRowData
    let { draftRowId }  = options
    const rowElementKey = tableKey + '_id'

    if (options.tableAction) {
      console.error('TODO or not TODO for options.tableAction', options.tableAction)
      // TODO table action show
      // 1. is new report
      // 2. is reopen previous draft
    }
    if( draftRowId ) {
      draftRowData = EhrTableDraft.findDraftRowDataById(draftRowId)
    } else {
      // explicitDraftRowOnly is set true by the Med Mar tables because they don't use the main page button for opening dialogs.
      if (!options.explicitDraftRowOnly) {
        // User invoked main add report button
        // does the table data already contain a draft row ... ?
        draftRowData = EhrTableDraft.getTableDraftRow(pageKey, tableKey)
        if (draftRowData) {
          // table has a draft row so this action is now an edit row action
          draftRowId = draftRowData[rowElementKey]
        }
      }
      // else proceed and create a new row
    }
    if( !draftRowId ) {
      // just generate the new id. the first call to save either data or draft will insert a new row with this id.
      draftRowId = EhrTableDraft.generateId(pageKey, tableKey)
    }
    if (!draftRowId) {
      console.error('Coding error. Must have draftRowId by now to open dialog')
      throw new Error('Can not open table dialog without an id')
    }
    options.draftRowData = draftRowData // maybe empty
    options.draftRowId = draftRowId // exists
    this._dialogOpenEvent(tableKey, options)
  }

  /**
   * Open the dialog on the row in view only mode
   * @param rowId
   */
  showReport (rowId) {
    const rowData = EhrData.getTableRowData(rowId)
    const options = { viewOnlyData: rowData, viewOnly: true}
    if (dbDraft) console.log('Show view only row', rowId, options)
    const { tableKey } = EhrDataModel.IdToParts(rowId)
    this._dialogOpenEvent(tableKey, options)
  }
  showTableAddButton () {
    let show = false
    if (this._canEdit()) {
      let pd = this.getPageDef()
      // console.log('decide to show or not this page def', prop, pd[prop], pd)
      show = pd['hasGridTable']
    }
    return show
  }


  stashActiveData (elementKey, value) {
    // TODO why do we need the try catch block here?
    try {
      let data = this.getActiveData()
      data[elementKey] = value
      if (dbPageForm) console.log('EhrHelpV2 FORM_INPUT_EVENT stash ', elementKey, value, JSON.stringify(data))
    } catch (err) {
      StoreHelper.setApiError(err)
    }
  }
  /**
   * Report if there is a page form open for edit and the data on the form has been modified, or if
   * there is a dialog open.  This method is used in route guards to prevent leaving the page.
   * @return {boolean}
   */
  unsavedData () {
    let result
    if (this.isEditing()) {
      let currentData = JSON.stringify(this.pageFormData.value)
      let cacheData = this.pageFormData.cacheData
      result = cacheData !== currentData
      if (dbLeave) console.log('EhrHelpV2 compare current to cache result:', result)
    } else {
      let dialog = this._getActiveTableDialog()
      result = !!dialog
      if (dbLeave) console.log('EhrHelpV2 dialog is open?', dialog, result)
      // a page dialog is open.
    }
    if (dbLeave) console.log('EhrHelpV2 unsaved data?', result)
    return result
  }

  _dialogCloseEvent (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    dialog.active = false
    let eData = Object.assign({ key: tableKey, open: false}, {} )
    const _this = this
    const options = { open: false }
    Vue.nextTick(function () {
      EventBus.$emit(_this.getDialogEventChannel(tableKey), eData, options)
    })
  }
  /**
     * Cause the dialog associated with the given table to open.
     * The options may say to open in view only mode and display the data.
     *
     * @param tableKey
     * @param options ....
     * From table action can have two forms
     * 1. options = { embedRefValue: embedRefValue, ... }
     * 2. options = { draftRowData: rowData, draftRowId: rowId }
     * 3. options = { viewOnlyData: rowData, viewOnly: true}
     * @private
     */
  _dialogOpenEvent (tableKey,  options) {
    let key
    options.open = true
    if (dbDialog) console.log('EhrHelpV2 dialog open event', tableKey, JSON.stringify(options))
    // Get the dialog object for the target table
    const dialog = this.tableFormMap[tableKey]
    // stash the options into the dialog definition.
    dialog.options = options
    dialog.viewOnly = options.viewOnly
    let hasRecHeader = dialog.tableDef.hasRecHeader
    /*
    Set the dialog "open" flag to false for the initialization step.
    See EhrElementCommon.dialogEvent. See the setInitialValue call.  Normally, all changes to
    a dialog input triggers a FORM_INPUT_EVENT which now also triggers a save to draft. But only
    if the dialog is open. Because we need to reset the dialog and load any previous values we must delay setting the
    open flag until after initializing the dialog inputs so that we do not trigger the FORM_INPUT_EVENT.
     */
    dialog.active = false
    /* Now can ....
     * set inputs to any default values
     * set simTime
     * if there is data then load it
     * then turn on form input updates
     */
    dialog.errorList = []
    this._clearDialogInputs(dialog)
    if (options.draftRowId) {
      dialog.draftRowId = options.draftRowId
    }
    // TODO what about default values?  From a code review it seems these are not set into table dialogs.
    //  Furthermore, the assignment below is too blunt and would overwrite the defaults, like it overwrites
    //  the simTime. The assignment below should be rewritten to use a property by property copy.
    if (options.draftRowData) {
      // will override the sim day/time here if previously set to something else
      dialog.inputs = { ...options.draftRowData }
    }
    if (options.viewOnlyData) {
      // For view only we only want to see the data given in the options
      dialog.inputs = { ...options.viewOnlyData }
    }
    if (options.embedRefValue) {
      // When the embedded element, inside the current table, gets the "dialog is opened" event it will
      // use this embedRefValue to in turn load the source row into the dialog.
      const srcElemKey = EhrTableActions.getTableActionTargetElementKey(options.sendersTableDef)
      // console.log('Setup dialog for embedded ref. Source element key', srcElemKey)
      // console.log('options.embedRefValue', options.embedRefValue)
      dialog.inputs[srcElemKey] = options.embedRefValue
    }
    if (hasRecHeader) {
      const mData = StoreHelper.getMergedData()
      const { visitDay, visitTime } = mData.meta.simTime
      key = tableKey + '_day'
      if (!validDayStr(dialog.inputs[key])) {
        dialog.inputs[key] = parseInt(visitDay)
        // console.log('dialog opening set sim day', key, dialog.inputs[key])
      }
      key = tableKey + '_time'
      if (!validTimeStr(dialog.inputs[key])) {
        dialog.inputs[key] = visitTime
        // console.log('dialog opening set sim time', key, dialog.inputs[key])
      }

      function _nonEmptyString (text) {
        return text && text.trim().length > 0
      }
      key = tableKey + '_name'
      if (!_nonEmptyString(dialog.inputs[key])) {
        dialog.inputs[key] = StoreHelper.givenName()
        // console.log('dialog opening set rec hdr name', key, dialog.inputs[key])
      }
    }
    if (options.simDay) {
      key = tableKey + '_day'
      dialog.inputs[key] = options.simDay
      // console.log('dialog opening set sim day from options', key, dialog.inputs[key])
    }
    if (options.simTime) {
      key = tableKey + '_time'
      dialog.inputs[key] = options.simTime
      // console.log('dialog opening set sim time from options', key, dialog.inputs[key])
    }

    if (options.presetValues) {
      options.presetValues.forEach( pv => {
        dialog.inputs[pv.key] = pv.value
      })
    }
    // NOW set the open state flag which enables the FORM_INPUT_EVENT event to fire when a dialog input is changed.
    dialog.active = true
    // End by sending out the "I'm opened event"
    let eData = Object.assign({ key: tableKey, open: true}, options )
    /* Send an event on our transmission channel with a payload containing the open flag
     This is picked up by each form element (see EhrElementCommon)

     Also in the EhrDialogForm (see receiveShowHideEvent). This is used to call the "open"
     event on embedded forms, so they get loaded.  this.$refs.theDialog.onOpen()
     Might be better to not reused the open event here?

     This event on channel is also EMITTED by the EhrElementEmbedded when setEmbeddedGroupData() is invoked
    */
    const _this = this
    Vue.nextTick(function () {
      // console.log('send emit getDialogEventChannel event with eData', JSON.stringify(eData))
      EventBus.$emit(_this.getDialogEventChannel(tableKey), eData)
    })
  }
  _clearDialogInputs (dialog) {
    // let dialog = this.tableFormMap[tableKey]
    let tableDef = dialog.tableDef
    let form = tableDef.form
    // set inputs equal to the form's data definition
    // console.log('set inputs equal to the form\'s data definition', JSON.stringify(form.ehr_data))
    dialog.inputs = { ...form.ehr_data}
    if (dbDialog) console.log('EhrHelpV2 cleared key, form ', dialog.tableKey, JSON.stringify(dialog.inputs))
    // empty the error list array
    dialog.errorList = []
  }

  /**
   * Given an element's definition look to see if a validation function is requested. If not then return undefined.
   * If yes then check if the function requires parameters. If yes then extract them and place into an array.
   * Return an object containing validator function and parameters
   * @param eDef
   * @private
   */
  _validator (eDef) {
    let result = {}
    const vDef = eDef[PROPS.validation]
    if (vDef) {
      // functionPattern: 1st group is function name and second group is list of arguments. Expect this to be list of numbers.
      const functionPattern = /(.*)\((.*)\)/
      if (dbDialog) console.log('check vDef for functions parts', vDef)
      const parts = vDef.match(functionPattern)
      if (parts && parts.length >= 1 ) {
        result.func = ehrValidations[parts[1]]
        let args = parts[2].split(',')
        result.args = args.map(n => parseInt(n))
      } else {
        result.func = ehrValidations[vDef]
        result.args = []
      }
    }
    return result
  }
  _validateInputs (dialog) {
    const pageKey = this.pageKey
    const tableDef = dialog.tableDef
    const inputs = dialog.inputs
    const ehr_data = tableDef.form.ehr_data
    dialog.errorList = []
    Object.keys(ehr_data).forEach( (eKey) => {
      const eDef = EhrDefs.getPageChildElement(pageKey, eKey)
      const label = eDef[PROPS.label] || eDef[PROPS.tableLabel]
      const validator = this._validator(eDef)
      const mandatory = eDef[PROPS.mandatory]
      let value = inputs[eKey]
      let valid = true
      value = isString(value) ? value.trim() : value
      if (mandatory && !mandatoryHasValue(value)) {
        const msg = label + ' is required'
        dialog.errorList.push(msg)
        valid = false
      }
      if (valid && validator.func) {
        if (dbDialog) console.log('ehr helper validator', validator)
        let errMsg = validator.func(label, value, ...validator.args)
        if(errMsg) {
          if (dbDialog) console.log(`EhrHelpV2 validate for key ${eKey} value ${inputs[eKey]}: ${errMsg}`)
          dialog.errorList.push(errMsg)
        }
      }
    })
    return dialog.errorList.length === 0
  }
  validateDialog () {
    const dialog = this._getActiveTableDialog()
    this._validateInputs(dialog)
    return dialog.errorList
  }

  _setupEventHandlers () {
    const _this = this
    this.windowUnloadHandler = function (eData) {
      _this.beforeUnloadListener(eData)
    }
    this.inputChangeEventHandler = function (eData) {
      _this._handleInputChangeEvent(eData)
    }
    window.addEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$on(FORM_INPUT_EVENT, this.inputChangeEventHandler)
  }

  beforeDestroy (pageKey) {
    window.removeEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$off(FORM_INPUT_EVENT, this.inputChangeEventHandler)
  }

  /**
   * If a page form is in edit mode and there are changes then warn the user before they navigate to
   * another part of this app.
   * @param to
   * @param from
   * @param next
   * @return {*}
   */
  beforeRouteLeave (to, from, next) {
    // console.log('beforeRouteLeave ...', to)
    let isEditing = this.isEditing()
    if (dbLeave) console.log('EhrHelpV2 beforeRouteLeave isEditing', isEditing)
    if (isEditing) {
      let unsaved = this.unsavedData()
      if (dbLeave) console.log('EhrHelpV2 beforeRouteLeave unsaved', unsaved)
      if (unsaved) {
        if (!window.confirm(LEAVE_PROMPT)) {
          // unsaved data and the user wants to stay
          return next(false)
        }
      }
      this.cancelEdit()
    }
    next()
  }

  /**
   * If the page form is in edit mode and there are changes then warn the user before they navigate
   * to another site
   * @param event
   */
  beforeUnloadListener (event) {
    let e = event || window.event
    if (dbLeave) console.log('EhrHelpV2 beforeunload event', e)
    let unsaved = this.unsavedData()
    if (dbLeave) console.log('EhrHelpV2 beforeunload unsaved', unsaved)
    if (unsaved) {
      // according to specs use preventDefault too.
      e.preventDefault()
      // many browsers ignore the prompt and provide their own
      e.returnValue = LEAVE_PROMPT
      // if you set any value into e.returnValue it will be converted to a string and that makes the prompt appear
      // So avoid this ...
      // e.returnValue = null
    }
    // e.returnValue = LEAVE_PROMPT
  }

  /**
   * When a dialog form input changes we get an update message here.
   * FORM_INPUT_EVENT
   * This message is from a child component, and it's passing the new value up to the parent's helper (here).
   * Take the value and stash it into the appropriate input, so we have access to the inputs when it's time to save.
   * @param eData
   * @private
   */
  _handleInputChangeEvent (eData) {
    let elementKey = eData.element.elementKey
    let value = eData.value
    this.stashActiveData(elementKey, value)
  }
}
