import moment from 'moment'
import Vue from 'vue'
import router from '@/router'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EventBus, {
  ACTIVITY_DATA_EVENT,
  FORM_INPUT_EVENT,
  PAGE_DATA_READY_EVENT,
  PAGE_DATA_REFRESH_EVENT
} from '@/helpers/event-bus'
import { formatTimeStr, isString, prepareAssignmentPageDataForSave } from '@/helpers/ehr-utils'
import EhrDefs from '@/helpers/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'
import validations from './ehr-validations'
import { Text } from '@/helpers/ehr-text'

export const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

const PROPS = EhrTypes.elementProperties
const dbDialog = false
const dbPageForm = false
const dbLoad = false
const dbTable = false
const dbLeave = false


export default class EhrPageHelper {
  constructor (pageKey) {
    // console.log('Construct helper', pageKey)
    this.$store = store
    this.pageKey = pageKey
    // todo move the following into a helper
    this.$store.commit('system/setCurrentPageKey', pageKey)
    this.pageFormData = { pageKey: pageKey }
    this.tableFormMap = {}
    const tables = this.getPageTableDefs()
    tables.forEach((tableDef) => {
      const tableKey = tableDef.tableKey
      this.tableFormMap[tableKey] = { tableKey: tableKey, tableDef: tableDef, inputs: {}, errorList: [], active: false, viewOnly: false }
    })
    this._setupEventHandlers()
  }

  getPageKey () { return this.pageKey }
  getPageDef () { return EhrDefs.getPageDefinition(this.pageKey) }
  getPageTableDefs () { return EhrDefs.getPageTables(this.pageKey) }
  getPageForms () { return EhrDefs.getPageForms(this.pageKey) }
  getTable (tableKey) { return this.tableFormMap[tableKey]}

  getPageGeneratedDate () {
    return this.formatDate(this.getPageDef().generated)
  }
  getLastPageDataUpdateDate () {
    let data = this.getMergedPageData()
    let date = data ? this.formatDate(data.lastUpdate) : ''
    return date
  }

  getPageErrors (formKey) {
    return []
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

  /* ********************* HELPERS  */

  _isStudent () {
    return StoreHelper.isStudent()
  }

  _isDevelopingContent () {
    return StoreHelper.isDevelopingContent()
  }

  _isSubmitted () {
    return StoreHelper.isSubmitted()
  }


  /**
   * Show or don't show page edit controls or table open dialog buttons.
   * @returns {boolean}
   */
  showTableAddButton () {
    return this._showControl('hasGridTable')
  }

  _canEdit () {
    if(StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()) {
      // the instructor is evaluating student work. Do not allow edit of content.
      return false
    }
    let studentCanEdit = this._isStudent() && !this._isSubmitted()
    let devContent = this._isDevelopingContent()
    let ehrOnly = EhrOnlyDemo.isActiveEhrOnlyDemo()
    return studentCanEdit || devContent || ehrOnly
  }

  _setEditing (flag) {
    // todo move the following into a helper
    this.$store.commit('system/setEditing', flag)
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

  canEditForm (formKey) {
    return this._canEdit() && !this.isEditing()
  }

  isEditing () {
    let sysVal =  this.$store.state.system.isEditing
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

  /* ********************* TABLES  */

  _getActiveTableDialog () {
    return Object.values(this.tableFormMap).find( (tbl) => { return tbl.active })
  }
  _loadTableData () {
    let pageKey = this.pageKey
    let theData = this.getMergedPageData()
    let tableDefs = this.getPageTableDefs()
    if (dbTable) console.log('EhrHelpV2._loadTableData load stack data for page', this.pageKey, tableDefs, theData)
    if (tableDefs.length > 0) {
      tableDefs.forEach((tableDef) => {
        let tableKey = tableDef.tableKey
        let tableForm = this.getTable(tableKey)
        let rowTemplate = []
        if (dbTable) console.log('EhrHelpV2 tableDef.ehr_list', tableDef.ehr_list)
        tableDef.ehr_list.forEach(stack => {
          let templateCell = {
            stack: []
          }
          stack.items.forEach(cell => {
            let cellDef = EhrDefs.getPageChildElement(pageKey, cell)
            templateCell.stack.push({
              key: cell,
              inputType: cellDef.inputType
            })
            // column header .. use previous label if set else use special tableLabel value from Inputs else use element label
            templateCell.tableLabel = templateCell.tableLabel || cellDef.tableLabel || cellDef.label
            templateCell.tableCss = templateCell.tableCss || cellDef.tableCss
          })
          rowTemplate.push(templateCell)
        })
        if (dbTable) console.log('EhrHelpV2 rowTemplate', rowTemplate)
        tableForm.rowTemplate = rowTemplate

        let dbData = theData[tableKey]
        let tableData = []
        tableForm.hasData = dbData  && dbData.length > 0
        if (dbTable) console.log('EhrHelpV2 tableForm.hasData', tableForm.hasData)
        if (dbData) {
          dbData.forEach((dbRow) => {
            let dataRow = JSON.parse(JSON.stringify(rowTemplate)) // deep copy the array
            // console.log('dbRow', dbRow)
            // console.log('datarow', dataRow)
            if (dbTable) console.log('EhrHelpV2 dataRow', dataRow)
            Object.values(dataRow).forEach((templateCell) => {
              if (dbTable) console.log('EhrHelpV2 templateCell', templateCell)
              templateCell.stack.forEach((cell) => {
                let val = dbRow[cell.key] === 0 ? '0' : dbRow[cell.key]
                cell.value = val || ''
                cell.tableCss = templateCell.tableCss
              })
            })
            tableData.push(dataRow)
          })
          tableForm.tableData = tableData
          tableForm.dbData = dbData
        }
        if (dbTable) console.log('EhrHelpV2._loadTableData tableData', tableData)
        let combined = []
        let headerRow = []
        rowTemplate.forEach( (rt) => {
          let hdr = { label: rt.tableLabel, tableCss: rt.tableCss}
          headerRow.push(hdr)
        })
        combined.push(headerRow)
        tableData.forEach ( (row) => {
          combined.push(row)
        })
        /*
        combined contains a row with table header information and then a row for each data row.
        transposed will contain a row for each element in the table. Each element will contain
         */
        if (dbTable) console.log('EhrHelpV2 combined', combined)
        let transpose = combined[0].map((col, i) => combined.map(row => row[i]))
        if (dbTable) console.log('EhrHelpV2 transpose', transpose)
        tableForm.transposedColumns = transpose
        let len = tableData[0] ? tableData[0].length : -1
        if (dbTable) console.log('EhrHelpV2 length of row of table data', len, rowTemplate.length)
        if (dbTable) console.log('EhrHelpV2._loadTableData load tableForm', tableForm)
      })
    }
  }

  /* ********************* DATA  */

  _loadPageData () {
    this._loadTableData()
    EventBus.$emit(PAGE_DATA_READY_EVENT)
  }

  _resetPageFormData () {
    this.pageFormData.cacheData = undefined
    this.pageFormData.formKey = undefined
    this.pageFormData.value = undefined
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

  getMergedPageData (aPageKey) {
    let pageKey = aPageKey || this.pageKey
    return StoreHelper.getMergedPageData(pageKey)
  }

  formatDate (d) {
    return formatTimeStr(d)
  }

  /* ********************* DIALOG  */

  showDialog (tableKey, options = {}) {
    this._dialogEvent(tableKey, true, options)
  }
  showReport (pageKey, tableKey, rowIndex) {
    const rowData = this.getTableRowData(pageKey, tableKey, rowIndex)
    this._dialogEvent(tableKey, true, { data:rowData, viewOnly: true})
  }

  getTableRowData (pageKey, tableKey, rowIndex) {
    const pageData = this.getMergedPageData(pageKey)
    const tableData = pageData[tableKey] || []
    return tableData[rowIndex]
  }

  cancelDialog () {
    const dialog = this._getActiveTableDialog()
    const tableKey = dialog.tableKey
    this._dialogEvent(tableKey, false)
  }

  saveDialog () {
    const pageKey = this.pageKey
    const dialog = this._getActiveTableDialog()
    const tableKey = dialog.tableKey
    if (!this._validateInputs(dialog)) {
      return dialog.errorList
    }
    if (dbDialog) console.log('EhrHelpV2 saveDialog for page/table', pageKey, tableKey)
    let inputs = dialog.inputs
    inputs.createdDate = moment().format()
    if (dbDialog) console.log('save dialog data', inputs, 'into ', tableKey)
    let asLoadedPageData = this.getMergedPageData()
    let table = asLoadedPageData[tableKey]
    if (!table) {
      table = []
      asLoadedPageData[tableKey] = table
    }
    table.push(inputs)
    if (dbDialog) console.log('EhrHelpV2 storing this: asLoadedPageData', asLoadedPageData, 'table', table, tableKey, dialog.tableKey)
    // Prepare a payload to tell the API which property inside the assignment data to change
    let payload = {
      pageKey: pageKey,
      value: asLoadedPageData
    }
    this._saveData(payload).then(() => {
      this._dialogEvent(tableKey, false)
    })
    return undefined
  }

  clearTable (tableKey) {
    const pageKey = this.pageKey
    if (dbDialog) console.log('clearTable for table ', tableKey)
    let asLoadedPageData = this.getMergedPageData()
    asLoadedPageData[tableKey] = []
    // Prepare a payload to tell the API which property inside the assignment data to change
    let payload = {
      pageKey: pageKey,
      value: asLoadedPageData
    }
    this._saveData(payload).then(() => {
      this._dialogEvent(tableKey, false)
    })
    return undefined
  }
  _saveData (payload) {
    let ehrOnly = EhrOnlyDemo.isActiveEhrOnlyDemo()
    let isStudent = this._isStudent()
    let isSeedEditing = StoreHelper.isSeedEditing()
    if (isStudent) {
      if (dbDialog) console.log('saving assignment data', payload)
      payload.propertyName = payload.pageKey
      payload.value = prepareAssignmentPageDataForSave(payload.value)
      return StoreHelper.sendAssignmentDataUpdate(payload)
    } else if (isSeedEditing) {
      if (dbDialog) console.log('saving seed ehr data', payload.pageKey, JSON.stringify(payload.value))
      return StoreHelper.updateSeedEhrProperty(payload.pageKey, payload.value)
        .then(() => {
          this._loadPageData()
        })
    } else if (ehrOnly) {
      payload.value = prepareAssignmentPageDataForSave(payload.value)
      return EhrOnlyDemo.saveEhrOnlyUserData(payload.pageKey, payload.value)
    } else {
      return Promise.reject(Text.FUNCTION_OUT_OF_CONTEXT('_saveData'))
    }
  }

  getDialogEventChannel (dialogKey) {
    const DIALOG_SHOW_HIDE_EVENT_KEY = 'modal:'
    return DIALOG_SHOW_HIDE_EVENT_KEY + dialogKey
  }

  getErrorList (tableKey) {
    // console.log('get error list for key', dialogKey)
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.errorList : []
  }

  getDialogInputs (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.inputs : []
  }

  isViewOnly (tableKey) {
    let dialog = this.tableFormMap[tableKey]
    return dialog ? dialog.viewOnly : []
  }

  /**
   * Cause the associated dialog to open.
   * If options contains data then the dialog is to open in view only mode and display the data.
   * @param tableKey
   * @param open
   * @param options { data | viewOnly | tableActionRowIndex}
   * @private
   */
  _dialogEvent (tableKey, open, options = {}) {
    if (dbDialog) console.log('EhrHelpV2 _dialogEvent', tableKey, open)
    let dialog = this.tableFormMap[tableKey]
    dialog.active = open
    dialog.viewOnly = options.viewOnly
    this._clearDialogInputs(dialog)
    if (options.data) {
      dialog.inputs = { ...options.data }
    }
    let eData = { key: tableKey, value: open, options: options }
    let channel = this.getDialogEventChannel(tableKey)
    Vue.nextTick(function () {
      // Send an event on our transmission channel
      // with a payload containing the open flag
      // console.log('emit event', eData, 'on', channel)
      EventBus.$emit(channel, eData)
    })
  }

  _clearDialogInputs (dialog) {
    // let dialog = this.tableFormMap[tableKey]
    let tableDef = dialog.tableDef
    let form = tableDef.form
    // set inputs equal to the form's data definition
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
      value = isString(value) ? value.trim() : value
      if (dbDialog) console.log('EhrHelpV2 validate:', eKey, value, 'eDef:', eDef)
      if (mandatory && !value ) {
        const msg = label + ' is required'
        dialog.errorList.push(msg)
      }
      if (validator.func) {
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
    if (!this._validateInputs(dialog)) {
      return dialog.errorList
    }
  }

  /* ********************* FORM  */

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
    this._setEditing(true)
  }

  /**
   * Cancel the edit on a page form. Restore values from the database.
   */
  cancelEdit (customRouter = router) {
    if (dbPageForm) console.log('EhrHelperV2 cancelEdit', this.pageKey)
    this._resetPageFormData()
    this._setEditing(false)
    // To restore the data we do a full page load to get the same flow as happens when the user comes to this page.
    // This is a good solution here because we want to restore the data as it was found and
    // there are many ways a user can come to the page. As a student, as a seed editor or someday in demo mode.
    // By doing a page refresh here we get the same results as a page load.
    customRouter.go(0)
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
    let payload = {
      pageKey,
      value: asLoadedPageData
    }
    await this._saveData(payload)
    return undefined
  }

  /**
   * Save changes made on a page form
   */
  savePageFormEdit () {
    let payload = this.pageFormData
    const asLoadedPageData = this.getMergedPageData()
    const mergedValues = {
      ...asLoadedPageData,
      ...payload.value
    }
    payload.value = mergedValues
    if (dbPageForm) console.log('EhrHelperV2 savePageFormEdit', payload)
    this._setEditing(false)
    this._saveData(payload)
  }

  /**
   * Report if there is a page form open for edit and the data on the form has been modified
   * @return {boolean}
   */
  unsavedData () {
    let result = false
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

  /* ********************* EVENTS  */

  /*
  When anything causes a call to the api to refresh or get the activity data (which holds the page data)
  the Vuex ehrData module will broadcast a ACTIVITY_DATA_EVENT event. (see _setActivityData)
  This event says there is new data including page data.

  This helper class is listening for ACTIVITY_DATA_EVENT.
  I'm going to try letting the handler for this event broadcast a PAGE_DATA_REFRESH_EVENT event because that
  event is broadcast by many other actions. Such as seed data list changes, tab changes, instructor to to ehr, etc.

  This helper class is listening for PAGE_DATA_REFRESH_EVENT.
  When this event is received this helper will compose data for the current page.
  This helper will broadcast the PAGE_DATA_READY_EVENT event.

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
    this.activityDataChangeEventHandler = function (eData) {
      eData = eData || {}
      _this._handleActivityDataChangeEvent(eData)
    }
    this.refreshEventHandler = function (eData) {
      if (dbLoad) console.log('EhrHelperV2 PAGE_DATA_REFRESH_EVENT refresh', _this.pageKey)
      _this._loadPageData()
    }
    window.addEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$on(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    EventBus.$on(ACTIVITY_DATA_EVENT, this.activityDataChangeEventHandler)
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  }

  _takeDownEventHandlers (pageKey) {
    window.removeEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$off(FORM_INPUT_EVENT, this.inputChangeEventHandler)
    EventBus.$off(ACTIVITY_DATA_EVENT, this.activityDataChangeEventHandler)
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

  stashActiveData (elementKey, value) {
    try {
      let data = this.getActiveData()
      data[elementKey] = value
      if (dbPageForm) console.log('EhrHelpV2 FORM_INPUT_EVENT stash ', elementKey, value)
    } catch (err) {
      StoreHelper.setApiError(err)
    }
  }
  _handleActivityDataChangeEvent (eData) {
    if (dbLoad) console.log('EhrHelpV2 ACTIVITY_DATA_EVENT. Trigger a load and refresh', this.pageKey)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
}
