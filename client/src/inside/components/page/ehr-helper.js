import moment from 'moment'
import Vue from 'vue'
import EventBus from '../../../helpers/event-bus'
import {
  ACTIVITY_DATA_EVENT,
  DIALOG_INPUT_EVENT,
  PAGE_FORM_INPUT_EVENT,
  PAGE_DATA_REFRESH_EVENT,
  TABLE_DATA_REFRESH_EVENT
} from '../../../helpers/event-bus'
import {
  removeEmptyProperties,
  prepareAssignmentPageDataForSave,
  formatTimeStr } from '../../../helpers/ehr-utils'
import EhrDefs from '../../../helpers/ehr-defs-grid'

const LEAVE_PROMPT = 'If you leave before saving, your changes will be lost.'

const dbDialog = false
const dbDelta = false
const dbPageForm = false


export default class EhrHelpV2 {
  constructor (component, store, pageKey) {
    // console.log('Construct helper', pageKey)
    this.$store = store
    this.pageKey = pageKey
    this.$store.commit('system/setCurrentPageKey', pageKey)
    this.dialogFormData = {}
    this.pageFormData = {}
    this._setupTableStackDefs()
    this._setupEventHandlers()
    // wait until components are set up and then refresh table data
    component.$nextTick( () => this._refreshTables() )
  }

  getPageKey () { return this.pageKey }
  getPageDef () { return EhrDefs.getPageDefinition(this.pageKey) }
  getPageTables () { return EhrDefs.getPageTables(this.pageKey) }
  getDefinedDefaultValue (elementKey) { return EhrDefs.getDefaultValue(this.pageKey, elementKey)}

  getActiveData () {
    let data
    if (this.dialogFormData.inputs) {
      data = this.dialogFormData.inputs
    }
    if (this.pageFormData.value) {
      data = this.pageFormData.value
    }
    if (!data) {
      console.error('ERROR call to getActiveData when there is none', this.pageFormData, this.dialogFormData)
    }
    return data
  }
  storeActiveData (elementKey, value) {
    if (this.dialogFormData.inputs) {
      this.dialogFormData.inputs[elementKey] = value
    }
    if (this.pageFormData.value) {
      this.pageFormData.value[elementKey] = value
    }
  }

  _setupEventHandlers () {
    const _this = this
    this.windowUnloadHandler = function (eData) {
      _this.beforeUnloadListener(eData)
    }
    this.dialogInputChangeEventHandler = function (eData) {
      _this._handleDialogInputChangeEvent(eData)
    }
    this.pageFormInputChangeEventHandler = function (eData) {
      _this._handlePageFormInputChangeEvent(eData)
    }
    this.activityDataChangeEventHandler = function (eData) {
      eData = eData || {}
      _this._handleActivityDataChangeEvent(eData)
    }
    this.refreshEventHandler = function (eData) {
      console.log('ehrhelper respond to page refresh', _this.pageKey)
      _this._mergedProperty()
      _this._refreshTables()
    }


    window.addEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$on(DIALOG_INPUT_EVENT, this.dialogInputChangeEventHandler)
    EventBus.$on(PAGE_FORM_INPUT_EVENT, this.pageFormInputChangeEventHandler)
    EventBus.$on(ACTIVITY_DATA_EVENT, this.activityDataChangeEventHandler)
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  }

  _takeDownEventHandlers (pageKey) {
    window.removeEventListener('beforeunload', this.windowUnloadHandler)
    EventBus.$off(DIALOG_INPUT_EVENT, this.dialogInputChangeEventHandler)
    EventBus.$off(PAGE_FORM_INPUT_EVENT, this.pageFormInputChangeEventHandler)
    EventBus.$off(ACTIVITY_DATA_EVENT, this.activityDataChangeEventHandler)
    EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  }

  _refreshTables () {
    this._loadTransposedColumns()
    this._loadStackData()
    // console.log('emit TABLE_DATA_REFRESH_EVENT ')
    EventBus.$emit(TABLE_DATA_REFRESH_EVENT)
  }

  _setupTableStackDefs () {
    /*
    For each table on the page has an ehr_list which is an array of stacks.
     */
    // let pageKey = this.pageKey
    // let pageDef = getPageDefinition(pageKey)
    // if (pageDef && pageDef.pageElements) {
    //   pageDef.pageElements.forEach( (element) => {
    //     if (element.isTable) {
    //       let list = element.ehr_list
    //     }
    //   })
    // }
  }

  _loadStackData () {
    // see _setupTableStackDefs
    let pageKey = this.pageKey
    let theData = this.getAsLoadedPageData(pageKey)
    // let pageDef = this.getPageDef()
    let tables = this.getPageTables()
    // console.log('load stack data for page', pageKey, tables, theData)
    if (tables.length > 0) {
      tables.forEach((tableDef) => {
        const tableKey = tableDef.tableKey
        let dbData = Array.isArray(theData[tableKey]) ? theData[tableKey] : []
        // console.log('load stacked with data ', dbData)
        let stackedData = []
        dbData.forEach(dbRowData => {
          let tblRow = []
          tableDef.ehr_list.forEach(stack => {
            let dStack = {}
            stack.items.forEach(cell => {
              const key = cell
              const value = dbRowData[key]
              dStack[key] = {cellDef: cell, value: value}
            })
            tblRow.push(dStack)
          })
          stackedData.push(tblRow)
        })
        tableDef.stackedData = stackedData
        // console.log('load stackedData', tableDef)
      })
    }
  }

  _loadTransposedColumns () {
    let pageKey = this.pageKey
    let pageDef = this.getPageDef()
    if (pageDef && pageDef.tables) {
      pageDef.tables.forEach(tableDef => {
        if (tableDef.isTransposed) {
          // console.log('transpose tableDef', tableDef)
          this.setupColumnData(pageDef, tableDef, pageKey)
          // console.log('transposed table', tableDef.transposedColumns)
        }
      })
    }
  }

  /**
   Take the component's definition data and the component's data and combine it into one table.
   Then rotates the table to place the header labels into the first column and
   each following row in a column.
   Place the result into table.transposedColumns
   * @param pageDef
   * @param table
   * @param pageKey
   */
  setupColumnData (pageDef, table, pageKey) {
    let theData = this.getAsLoadedPageData(pageKey)
    const tableKey = table.tableKey
    let dbData = Array.isArray(theData[tableKey]) ? theData[tableKey] : []
    let columns = []
    let row = []
    table.tableCells.forEach(cell => {
      // console.log('the cell ', cell)
      // let hdrCss = 'column_label' + (cell.tableCss ? ' ' + cell.tableCss : '')
      // let entry = {
      //   inputType: cell.inputType,
      //   title: cell.elementKey,
      //   tableCss: hdrCss,
      //   value: cell.label
      // }
      row.push({cellDef: cell, value: cell.label})
      // row.push(entry)
    })
    columns.push(row)
    dbData.forEach(item => {
      row = []
      table.tableCells.forEach(cell => {
        // let valCss = 'column_value' + (cell.tableCss ? ' ' + cell.tableCss : '')
        let value = item[cell.elementKey]
        // let entry = {
        //   tableCss: valCss,
        //   title: value,
        //   value: value
        // }
        // {cellDef: cell, value: value}
        row.push({cellDef: cell, value: value})
      })
      columns.push(row)
    })
    let transpose = columns[0].map((col, i) => columns.map(row => row[i]))
    table.transposedColumns = transpose
  }

  beforeDestroy (pageKey) {
    // console.log('Before destroy', this.pageKey, pageKey)
    this._takeDownEventHandlers(pageKey)
  }
  /* ********************* DATA  */

  getAsLoadedPageData (pageKey) {
    return this.$store.getters['ehrData/asLoadedDataForPageKey'](pageKey)
  }

  getHasDataForPagesList () {
    let hasDataForPagesList = store.getters['ehrData/hasDataForPagesList']
    return hasDataForPagesList
  }
  /**
   * Get and return the merged (seed + student's work) for the current page
   *
   * @returns {any}
   */
  _mergedProperty () {
    return this.getAsLoadedPageData(this.pageKey)
  }

  formatDate (d) {
    return formatTimeStr(d)
  }

  /* ********************* DIALOG  */

  showDialog (tableDef) {
    let tableKey = tableDef.tableKey
    this.dialogFormData = { tableKey: tableKey, tableDef: tableDef, inputs: {} }
    // add this dialog to the map
    if (dbDialog) console.log('set helper into each form element', tableDef.tableForm)
    // if (tableDef.tableForm.ehr_groups) {
    //   this.attachHelperToElementsV2(tableDef.tableForm.ehr_groups)
    // }
    this._clearDialogInputs(tableKey)
    let eData = { key: tableKey, value: true }
    let channel = this.getDialogEventChannel(tableKey)
    if (dbDialog) console.log('66666666 showDialog emit message to channel ' + channel + ' for key' + tableKey + ' tableDef', tableDef)
    EventBus.$emit(channel, eData)
  }

  cancelDialog () {
    const tableKey = this.dialogFormData.tableKey
    if (dbDialog) console.log('cancel dialog (indexed by tableKey)', tableKey)
    this._clearDialogInputs(tableKey)
    this._emitCloseEvent(tableKey)
  }

  saveDialog () {
    const _this = this
    const pageKey = this.pageKey
    let dialog = this.dialogFormData
    const tableKey = dialog.tableKey
    if (this._validateInputs(tableKey)) {
      if (dbDialog) console.log('EhrHelp saveDialog for page/table', pageKey, tableKey)
      if (dbDialog) console.log('EhrHelp saveDialog', dialog, 'data', data)
      let inputs = dialog.inputs
      inputs.createdDate = moment().format()
      if (dbDialog) console.log('save dialog data into ', tableKey)
      let asLoadedPageData = this.getAsLoadedPageData(pageKey)
      let table = asLoadedPageData[tableKey]
      if (!table) {
        table = []
        asLoadedPageData[tableKey] = table
      }
      table.push(inputs)
      if (dbDialog) console.log('EhrHelp storing this: asLoadedPageData', asLoadedPageData, 'table', table, tableKey, dialog.tableKey)
      // Prepare a payload to tell the API which property inside the assignment data to change
      let payload = {
        propertyName: pageKey,
        value: asLoadedPageData
      }
      this._saveData(payload).then(() => {
        _this._emitCloseEvent(tableKey)
      })
    }
  }

  _setLoading (flag) {
    this.$store.commit('system/setLoading', flag)
  }

  _isStudent () {
    return this.$store.getters['visit/isStudent']
  }

  _isDevelopingContent () {
    return this.$store.state.visit.isDevelopingContent
  }

  _isSubmitted () {
    return this.$store.getters['ehrData/submitted']
  }

  _saveData (payload) {
    const _this = this
    _this._setLoading(true)
    let isStudent = this._isStudent()
    let isDevelopingContent = this._isDevelopingContent()
    if (isStudent) {
      if (dbDialog) console.log('saving assignment data', payload)
      payload.value = prepareAssignmentPageDataForSave(payload.value)
      return _this.$store.dispatch('ehrData/sendAssignmentDataUpdate', payload).then(() => {
        _this._setLoading(false)
      })
    } else if (isDevelopingContent) {
      payload.id = _this.$store.state.seedStore.sSeedId
      payload.value = removeEmptyProperties(payload.value)
      if (dbDialog) console.log('saving seed ehr data', payload.id, JSON.stringify(payload.value))
      return _this.$store.dispatch('seedStore/updateSeedEhrProperty', payload).then(() => {
        _this._setLoading(false)
      })
    } else {
      return Promise.reject('Coding error using _saveData out of context')
    }
  }

  getDialogEventChannel (dialogKey) {
    const DIALOG_SHOW_HIDE_EVENT_KEY = 'modal:'
    let channel = DIALOG_SHOW_HIDE_EVENT_KEY + dialogKey
    return channel
  }

  getErrorList (tableKey) {
    // console.log('get error list for key', dialogKey)
    let dialog = this.dialogFormData
    return dialog && dialog.tableKey === tableKey ? dialog.errorList : []
  }

  getDialogInputs (tableKey) {
    let dialog = this.dialogFormData
    return dialog && dialog.tableKey === tableKey ? d.inputs : []
  }

  _emitCloseEvent (dialogKey) {
    this.dialogFormData = {}
    let eData = { key: dialogKey, value: false }
    let channel = this.getDialogEventChannel(dialogKey)
    Vue.nextTick(function () {
      // Send an event on our transmission channel
      // with a payload containing this false
      // console.log('emit event', eData, 'on', channel)
      EventBus.$emit(channel, eData)
    })
  }

  _clearDialogInputs (key) {
    let dialog = this.dialogFormData
    let tableDef = dialog.tableDef
    let form = tableDef.form
    if (dbDialog) console.log('EhrHelp clear table form key, form ', key, form.ehr_data, JSON.stringify(dialog.inputs))
    dialog.inputs = { ...form.ehr_data}
    if (dbDialog) console.log('EhrHelp cleared key, form ', key, JSON.stringify(dialog.inputs))
    // empty the error list array
    dialog.errorList = []
  }


  // TODO validation will need rework as part of the DDD refactor
  _validateInputs (key) {
    if (dbDialog) console.log('EhrHelp validate dialog for key' + key)
    let dialog = this.dialogFormData
    let cells = dialog.tableDef.tableCells
    let inputs = dialog.inputs
    // console.log('what is in the inputs? ', inputs)
    dialog.errorList = []
    cells.forEach(cell => {
      if (cell.type === 'text') {
        inputs[cell.elementKey] = inputs[cell.elementKey].trim()
      }
      if (cell.validationRules) {
        cell.validationRules.forEach(rule => {
          let value = inputs[cell.elementKey]
          if (rule.required && value.length === 0) {
            let msg = cell.label + ' is required'
            console.log('validateInput', msg)
            dialog.errorList.push(msg)
          }
        })
      }
    })
    dialog.errorList.push('TODO remove force success once ready')
    // TODO remove force success once ready
    return true // d.errorList.length === 0
  }

  /* ********************* FORM  */

  /**
   * Show or don't show page edit controls or table open dialog buttons.
   * Currently the rule is simply "is the user a student" but this will need to
   * be changed if there is a need to let instructors "do the assignment" or
   * if we want to let the application be the place to edit seed data.
   * @return {*}fat
   */
  showTableAddButton () {
    return this._showControl('hasTable') || this._showControl('hasGridTable')
  }

  _canEdit () {
    let studentCanEdit = this._isStudent() && !this._isSubmitted()
    return studentCanEdit || this._isDevelopingContent()
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
    let pfd = this.pageFormData
    let result = this._canEdit() && pfd.formKey === undefined
    if (dbPageForm) console.log('canEditForm', formKey, result)
    return result
  }

  isEditing () {
    let pfd = this.pageFormData
    let result = pfd.formKey !== undefined
    if (dbPageForm) console.log('isEditing', result)
    return result
  }
  isEditingForm (formKey) {
    let pfd = this.pageFormData
    let result = pfd.formKey === formKey
    if (dbPageForm) console.log('isEditingForm', formKey, result)
    return result
  }


  /**
   * Begin editing a page form
   */
  beginEdit (formKey) {
    if (this.isEditing()) {
      console.error('EhrHelp begin edit while there is already an edit session in progress')
      return
    }
    let pageKey = this.pageKey
    if (dbPageForm) console.log('beginEdit', formKey)
    let asLoadedData = this.getAsLoadedPageData(pageKey)
    let cacheData = JSON.stringify(asLoadedData)
    this.pageFormData = {
      propertyName: pageKey,
      formKey: formKey,
      cacheData: cacheData,
      value: asLoadedData
    }
    console.log('beginEdit', this.pageFormData)
  }

  /*
TODO the cancel edit page form is not restoring the as loaded data correctly, consistently
 */
  /**
   * Cancel the edit on a page form. Restore values from the database.
   */
  cancelEdit () {
    if (dbPageForm) console.log('cancelEdit', this.pageKey)
    this._setLoading(true)
    this.$store.dispatch('ehrData/restoreActivityData').then(() => {
      this.pageFormData = {}
      this._setLoading(false)
      this._mergedProperty()
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    })
  }

  /**
   * Save changes made on a page form
   */
  saveEdit () {
    let payload = this.pageFormData
    this._saveData(payload).then(() => {
      this.pageFormData = {}
    })
  }

  /**
   * Report if there is a page form open for edit and the data on the form has been modified
   * @return {boolean}
   */
  unsavedData () {
    let isEditing = this.isEditing()
    let result = false
    if (this.isEditing()) {
      let currentData = JSON.stringify(this.pageFormData.value)
      let cacheData = this.pageFormData.cacheData
      result = cacheData !== currentData
    } else {
      // a page dialog is open.
      result = true
    }
    // console.log('unsaved data?', isEditing, result)
    return result
  }

  /* ********************* EVENTS  */

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
    if (isEditing) {
      let unsaved = this.unsavedData()
      // console.log('beforeRouteLeave ...', unsaved)
      if (unsaved) {
        if (!window.confirm(LEAVE_PROMPT)) {
          // unsaved data and the user wants to stay
          return next(false)
        }
      }
      this.pageFormData = {}
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
    // console.log('beforeunload ...', e)
    let unsaved = this.unsavedData()
    // console.log('beforeunload ...', unsaved)
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
   * DIALOG_INPUT_EVENT
   * This message is from a child component and it's passing the new value up to the parent's helper (here).
   * Take the value and stash it into the appropriate input so we have access to the inputs when it's time to save.
   * @param eData
   * @private
   */
  _handleDialogInputChangeEvent (eData) {
    let def = eData.element
    let d = this.dialogFormData
    let tableKey = d.tableKey
    let elementKey = def.elementKey
    let value = eData.value
    if (dbDelta) console.log(`handle dialog input change for key ${tableKey}`)
    if (dbDelta) console.log(`On event from ${tableKey} ${elementKey} with dialog: ${d}`)
    let inputs = d.inputs
    inputs[elementKey] = value
  }

  _handlePageFormInputChangeEvent (eData) {
    let element = eData.element
    let elementKey = element.elementKey
    let value = eData.value
    if (dbDelta) console.log('_handlePageFormInputChangeEvent', this.pageKey, element)
    if (dbDelta) console.log(`Input change event from ${elementKey} value: ${value}`)
    let pageData = this.pageFormData.value
    pageData[elementKey] = value
  }

  _handleActivityDataChangeEvent (eData) {
    if (dbDelta) console.log('Activity data changed. Trigger a load and refresh', this.pageKey)
    EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
  }
}