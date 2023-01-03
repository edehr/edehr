import moment from 'moment'
import Vue from 'vue'
import router from '@/router'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import {
  decoupleObject,
  ehrRemoveMarkedSeed,
  formatTimeStr,
  isString,
  removeEmptyProperties
} from '@/helpers/ehr-utils'
import EhrDefs from '@/helpers/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'
import validations from './ehr-validations'
import store from '@/store'

export const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

const PROPS = EhrTypes.elementProperties
const dbDialog = false
const dbPageForm = false
const dbLeave = false
const dbDraft = false


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
      this.tableFormMap[tableKey] = { tableKey: tableKey, tableDef: tableDef, inputs: {}, errorList: [], active: false, viewOnly: false }
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
  getLastPageDataUpdateDate () {
    let data = this.getMergedPageData()
    return data ? this.formatDate(data.lastUpdate) : ''
  }
  getMergedPageData (aPageKey) {
    let pageKey = aPageKey || this.pageKey
    return StoreHelper.getMergedPageData(pageKey)
  }
  getPageDef () { return EhrDefs.getPageDefinition(this.pageKey) }
  getPageErrors () {
    return []
  }
  getPageForms () { return EhrDefs.getPageForms(this.pageKey) }
  getPageGeneratedDate () {
    return this.formatDate(this.getPageDef().generated)
  }
  getPageKey () { return this.pageKey }
  getPageTableDefs () { return EhrDefs.getPageTables(this.pageKey) }
  getTable (tableKey) { return this.tableFormMap[tableKey]}
  getTableDraftRowIndex (pageKey, tableKey) {
    const pageData = this.getMergedPageData(pageKey)
    const tableData = pageData[tableKey] || []
    // console.log('checking for draft row in tableKey, tableData ', tableKey, tableData.length)
    return tableData.findIndex((row) => {
      return Object.keys(row).find(e => e === 'isDraft')
    })
  }
  getTableRowData (pageKey, tableKey, rowIndex) {
    const pageData = this.getMergedPageData(pageKey)
    const tableData = pageData[tableKey] || []
    return tableData[rowIndex]
  }

  _canEdit () {
    if(StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()) {
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
  _getActiveTableDialog () {
    return Object.values(this.tableFormMap).find( (tbl) => { return tbl.active })
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
  _injectDataIntoTable (pageKey, tableKey, dialog, committing) {
    const dialogValues = decoupleObject(dialog.inputs)
    dialogValues.createdDate = moment().format()
    if(!committing) {
      dialogValues.isDraft = 'isDraft' // mark the data as draft
    }
    let asLoadedPageData = this.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    if (!table) {
      table = []
      asLoadedPageData[tableKey] = table
    }
    // find the row with draft data or
    const previousRow = table.findIndex(row => !!row.isDraft)
    if (previousRow >= 0) {
      if ( committing ) {
        delete dialogValues.isDraft
      }
      table.splice(previousRow, 1, dialogValues)
    } else {
      // or push a new row of data
      table.push(dialogValues)
    }
    return asLoadedPageData
  }
  _loadPageFormData (formKey) {
    let asLoadedData = this.getMergedPageData()
    this.pageFormData.cacheData = JSON.stringify(asLoadedData)
    this.pageFormData.formKey = formKey
    /*
    If _isDevelopingContent then the EhrElementCommon has told this helper to stash
    the asLoaded or the DataCaseStudy value into the pageFormData.value. We want
    to use this.
    Otherwise, this is a student and we want to use the asLoadedData
     */
    if (!this._isDevelopingContent) {
      this.pageFormData.value = asLoadedData
    } // else use what is already in this.pageFormData.value
  }
  _prepareTableSaveData (pageKey, dataToSave) {
    if (this._isStudent() || EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      dataToSave = decoupleObject(dataToSave)
      dataToSave = removeEmptyProperties(dataToSave)
      dataToSave = ehrRemoveMarkedSeed(dataToSave)
    }
    return dataToSave
  }
  _resetPageFormData () {
    this.pageFormData.cacheData = undefined
    this.pageFormData.formKey = undefined
    this.pageFormData.value = undefined
  }
  _showControl (prop) {
    let show = false
    if (this._canEdit()) {
      let pd = this.getPageDef()
      // console.log('decide to show or not this page def', prop, pd[prop], pd)
      show = pd[prop]
    }
    return show
  }

  activeTableDialogHasData () {
    const dialog = this._getActiveTableDialog()
    if (dialog && dialog.inputs) {
      const values = decoupleObject(dialog.inputs)
      // {"day":0,"time":"1930","oxygenTherapy":"xd","createdDate":"2022-12-17T20:17:09-08:00","isDraft":"isDraft"}
      delete values.day
      delete values.time
      delete values.createdDate
      delete values.isDraft
      let reduced = removeEmptyProperties(values)
      reduced = JSON.stringify(reduced)
      // console.log('table dialog\'s data is ', reduced)
      return reduced.length > 2
    }
    return false
  }
  activeTableDialogHasRecordHeader () {
    const dialog = this._getActiveTableDialog()
    return dialog && dialog.tableDef.hasRecHeader
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
  /**
   * Cancel the edit on a page form. Restore values from the database.
   */
  cancelEdit (customRouter = router) {
    if (dbPageForm) console.log('EhrHelperV2 cancelEdit', this.pageKey)
    this._resetPageFormData()
    StoreHelper.setEditingMode(false)
    // To restore the data we do a full page load to get the same flow as happens when the user comes to this page.
    // This is a good solution here because we want to restore the data as it was found and
    // there are many ways a user can come to the page. As a student, as a seed editor or someday in demo mode.
    // By doing a page refresh here we get the same results as a page load.
    customRouter.go(0)
  }
  async clearTable (tableKey) {
    const pageKey = this.pageKey
    let asLoadedPageData = this.getMergedPageData(pageKey)
    asLoadedPageData[tableKey] = [] // clears the data by loading an empty array
    let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
    await this._saveData(pageKey, dataToSave)
  }
  closeDialog () {
    const dialog = this._getActiveTableDialog()
    const tableKey = dialog.tableKey
    this._dialogEvent(tableKey, false, {})
  }
  editDraftRow (pageKey, tableKey, rowIndex) {
    const rowData = this.getTableRowData(pageKey, tableKey, rowIndex)
    const options = { data: rowData }
    if (dbDraft) console.log('Edit draft row on table', pageKey, tableKey, rowIndex, options)
    this._dialogEvent(tableKey, true, options)
  }
  formatDate (d) {
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
  async removeDraftRow () {
    const dialog = this._getActiveTableDialog()
    const pageKey = this.pageKey
    const tableKey = dialog.tableKey
    let asLoadedPageData = this.getMergedPageData(pageKey)
    let table = asLoadedPageData[tableKey]
    // find the row with draft data or
    const previousRow = table.findIndex(row => !!row.isDraft)
    if (previousRow >= 0) {
      table.splice(previousRow, 1)
    }
    let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
    await this._saveData(pageKey, dataToSave)
  }
  async resetFormData (childrenKeys) {
    const { pageKey } = this
    const ehrSeed = StoreHelper.getSeedEhrData()
    const asLoadedPageData = this.getMergedPageData()
    if (childrenKeys) {
      childrenKeys.map(ck => {
        asLoadedPageData[ck] = ehrSeed[ck] ? ehrSeed[ck] : ''
      })
    }
    let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
    await this._saveData(pageKey, dataToSave)
    return undefined
  }
  async saveDialogData () {
    const dialog = this._getActiveTableDialog()
    const pageKey = this.pageKey
    const tableKey = dialog.tableKey
    let asLoadedPageData = this._injectDataIntoTable(pageKey, tableKey, dialog, true )
    let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
    await this._saveData(pageKey, dataToSave)
  }
  async saveDialogDraft () {
    const dialog = this._getActiveTableDialog()
    const pageKey = this.pageKey
    const tableKey = dialog.tableKey
    if (dbDraft) console.log('save draft', pageKey, tableKey, JSON.stringify(dialog.inputs))
    if (!dialog.tableDef.hasRecHeader) {
      // only allow draft rows when there is a record header, for now.
      return
    }
    let asLoadedPageData = this._injectDataIntoTable(pageKey, tableKey, dialog, false)
    let dataToSave = this._prepareTableSaveData(pageKey, asLoadedPageData)
    await this._saveDataDraft(pageKey, dataToSave)
  }
  _saveDataDraft (pageKey, dataToSave) {
    let payload = {
      propertyName: pageKey,
      value: dataToSave
    }
    if (dbDraft) console.log('_saveDataDraft', JSON.stringify(payload))
    if (this._isStudent()) {
      return StoreHelper.sendAssignmentDataDraft(payload)
    } else if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      return EhrOnlyDemo.saveEhrOnlyUserData(pageKey, dataToSave)
    } else if (StoreHelper.isSeedEditing()) {
      return StoreHelper.sendSeedEhrDataDraft(payload)
    }
  }
  // async _saveData (payload) {
  //   let ehrOnly = EhrOnlyDemo.isActiveEhrOnlyDemo()
  //   let isStudent = this._isStudent()
  //   let isSeedEditing = StoreHelper.isSeedEditing()
  //   if (isStudent) {
  //     if (dbDialog) console.log('saving assignment data', payload)
  //     payload.propertyName = payload.pageKey
  //     payload.value = prepareAssignmentPageDataForSave(payload.value)
  //     await StoreHelper.sendAssignmentDataUpdate(payload)
  //   } else if (isSeedEditing) {
  //     if (dbDialog) console.log('saving seed ehr data', payload.pageKey, JSON.stringify(payload.value))
  //     await StoreHelper.updateSeedEhrProperty(payload.pageKey, payload.value)
  //     await this._loadPageData()
  //   } else if (ehrOnly) {
  //     payload.value = prepareAssignmentPageDataForSave(payload.value)
  //     await EhrOnlyDemo.saveEhrOnlyUserData(payload.pageKey, payload.value)
  //   } else {
  //     return Promise.reject(Text.FUNCTION_OUT_OF_CONTEXT('_saveData'))
  //   }
  //   EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  // }
  _saveData (pageKey, dataToSave) {
    if (this._isStudent()) {
      let payload = {
        propertyName: pageKey,
        value: dataToSave
      }
      return StoreHelper.sendAssignmentDataUpdate(payload)
    } else if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
      return EhrOnlyDemo.saveEhrOnlyUserData(pageKey, dataToSave)
    } else if (StoreHelper.isSeedEditing()) {
      return StoreHelper.updateSeedEhrProperty(pageKey, dataToSave)
    }
  }
  savePageFormEdit () {
    let payload = this.pageFormData
    const asLoadedPageData = this.getMergedPageData()
    const mergedValues = {
      ...asLoadedPageData,
      ...payload.value
    }
    StoreHelper.setEditingMode(false)
    let dataToSave = this._prepareTableSaveData(this.pageKey, mergedValues)
    this._saveData(this.pageKey, dataToSave)
  }
  showReport (pageKey, tableKey, rowIndex) {
    const rowData = this.getTableRowData(pageKey, tableKey, rowIndex)
    const options = { data: rowData, viewOnly: true}
    if (dbDraft) console.log('Show view only row', pageKey, tableKey, rowIndex, options)
    this._dialogEvent(tableKey, true, options)
  }
  showTableAddButton () {
    return this._showControl('hasGridTable')
  }
  showDialogForTable (tableKey, options) {
    let pageKey = this.pageKey
    let rowIndex = this.getTableDraftRowIndex(pageKey, tableKey)
    if (dbDraft) console.log('showDialogEvent draft row index', rowIndex)
    if (rowIndex) {
      this.editDraftRow (pageKey, tableKey, rowIndex)
    } else {
      this._dialogEvent(tableKey, true, options)
    }
  }
  stashActiveData (elementKey, value) {
    try {
      let data = this.getActiveData()
      data[elementKey] = value
      if (dbPageForm) console.log('EhrHelpV2 FORM_INPUT_EVENT stash ', elementKey, value)
    } catch (err) {
      StoreHelper.setApiError(err)
    }
  }
  /**
   * Report if there is a page form open for edit and the data on the form has been modified
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

  /*
   * Cause the associated dialog to open.
   * If options contains data then the dialog is to open in view only mode and display the data.
   * @param tableKey
   * @param open
   * @param options { data | viewOnly | tableActionRowIndex}
   * @private
   */
  _dialogEvent (tableKey, open, options) {
    if (dbDialog) console.log('EhrHelpV2 dialog event', tableKey, open, JSON.stringify(options))
    let dialog = this.tableFormMap[tableKey]
    let hasRecHeader = dialog.tableDef.hasRecHeader
    // whichever way we are going mark the dialog as closed so that the clearDialogInputs doesn't
    // trigger FORM_INPUT_EVENT as each input is cleared
    dialog.active = false
    this._clearDialogInputs(dialog)
    // now set the open/close state flag....
    dialog.active = open
    dialog.viewOnly = options.viewOnly
    if (options.data) {
      if(hasRecHeader) {
        // push in the current sim day/time
        const { visitDay, visitTime } = StoreHelper.getMergedData().meta.simTime
        console.log('sim time', visitDay, visitTime)
        dialog.inputs['day'] = visitDay
        dialog.inputs['time'] = visitTime
      }
      // may override the sim day/time here if previously set to something else
      dialog.inputs = { ...options.data }
      console.log('dialog.inputs[\'day\']', dialog.inputs['day'])
      console.log('dialog.inputs[\'time\']', dialog.inputs['time'])
    }
    // End by sending out the "i'm opened/closed event"
    let eData = { key: tableKey, value: open, options: options }
    let channel = this.getDialogEventChannel(tableKey)
    Vue.nextTick(function () {
      // Send an event on our transmission channel
      // with a payload containing the open flag
      if (dbDraft) console.log('emit event on', channel, ' data:', JSON.stringify(eData))
      EventBus.$emit(channel, eData)
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
        result.func = validations[parts[1]]
        let args = parts[2].split(',')
        result.arguments = args.map(n => parseInt(n))
      } else {
        result.func = validations[vDef]
        result.arguments = []
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
      const label = eDef[PROPS.label]
      const validator = this._validator(eDef)
      const mandatory = eDef[PROPS.mandatory]
      let value = inputs[eKey]
      let valid = true
      value = isString(value) ? value.trim() : value
      if (dbDialog) console.log('EhrHelpV2 validate:', eKey, value, 'eDef:', eDef)
      if (mandatory && (value === undefined)) {
        const msg = label + ' is required'
        dialog.errorList.push(msg)
        valid = false
      }
      if (valid && validator.func) {
        if (dbDialog) console.log('ehr helper validator', validator)
        let errMsg = validator.func(label, value, ...validator.arguments)
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

  /*
  This helper class is listening for PAGE_DATA_REFRESH_EVENT.
  When this event is received this helper will compose data for the current page.

  The page components (page form, page table, elements, etc) will listen for this PAGE_DATA_READY_EVENT event
  and they will, in turn, pull fresh data for display.
   */
  _setupEventHandlers () {
    const _this = this
    this.windowUnloadHandler = function (eData) {
      _this.beforeUnloadListener(eData)
    }
    this.inputChangeEventHandler = function (eData) {
      _this._handleInputChangeEvent(eData)
    }
    this.refreshEventHandler = async function () {
      const dbPerf = false
      let startTime = performance.now()
      if (dbPerf) console.log('EhrHelperV2 PAGE_DATA_REFRESH_EVENT refresh', _this.pageKey)
      let visitInfo = store.getters['visit/visitData']
      await store.dispatch('activityDataStore/loadActivityData', visitInfo.activityData)
      let elapsedTime = performance.now() - startTime
      if (dbPerf) console.log('ehr helper refreshEventHandler elapsed time ', elapsedTime)
      if (dbPerf) console.log('to do --- refresh instructor and seed editor')

    }
    window.addEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$on(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  }

  _takeDownEventHandlers () {
    window.removeEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$off(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  }

  beforeDestroy (pageKey) {
    // console.log('Before destroy', this.pageKey, pageKey)
    this._takeDownEventHandlers(pageKey)
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
      // } else {
      // if you set any value into e.returnValue it will be converted to a string and that makes the prompt appear
      // So avoid this ...
      // e.returnValue = null
    }
    // e.returnValue = LEAVE_PROMPT
  }

  /**
   * When a dialog form input changes we get an update message here.
   * FORM_INPUT_EVENT
   * This message is from a child component and it's passing the new value up to the parent's helper (here).
   * Take the value and stash it into the appropriate input so we have access to the inputs when it's time to save.
   * @param eData
   * @private
   */
  _handleInputChangeEvent (eData) {
    let elementKey = eData.element.elementKey
    let value = eData.value
    this.stashActiveData(elementKey, value)
  }
}
