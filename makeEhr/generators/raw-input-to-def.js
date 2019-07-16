'use strict'
const moment = require('moment')
const assert = require('assert').strict
const camelCase = require('camelcase')

const PAGE_FORM_INPUT = 'page_form'
const TABLE_ROW = 'table_row'
const FIELDSET = 'fieldset'
const FIELDSET_ROW = 'fieldRowSet'
const SPACER = 'spacer'
const PAGE_INPUT_TYPE = 'page'
const CONTAINER_INPUT_TYPES = [PAGE_FORM_INPUT, TABLE_ROW]//, TABLE_COL]
const SUBCONTAINER_INPUT_TYPES = [FIELDSET, FIELDSET_ROW] // SUBGROUP
const NO_SHOW_IN_TABLE_ELEMENTS = [SPACER, FIELDSET_ROW, FIELDSET]

const containerElementProperties = [
  // 'page',
  'label',

  'pageDataKey',
  'level2Key',
  'level3Key',
  'elementKey',
  'inputType',

  'formRow',
  'formColumn',
  'formCss',
  'formOption',

  'tableColumn',
  'tableCss',
  'addButtonText',

  // fieldset row and column
  'fsetRow',
  'fsetCol',

  'dataParent',
  'fqn',

]

const pageChildElementProperties = [
  'label',
  'dependantOn',
  'defaultValue',
  'elementKey',
  'fqn',
  'helperText',
  'suffix',
  'options',
  'assetBase',
  'assetName',
  'formOption',
  // 'mandatory',
  // 'validation',
  'dataCaseStudy',
  'passToFunction',
  // 'dataParent',
]

const formElementProperties = [
  'elementKey',
  'label',
  'inputType',
  'formRow',
  'fsetRow',
  'formColumn',
  'formCss',
  'dataParent'
]

const tableCellProperties = [
  'elementKey',
  'label',
  'tableColumn',
  'tableCss',
  'inputType',
]


// Fields may have data that spans multiple lines.
// Replace linefeeds with a marker we can use to mark the end of each line.
// Use labels as found in the inputs spreadsheet before they are converted to camelCase
const mlFields = [
  'Label:',
  'Options:',
  'Data_case_study:',
  'Data_first_case_study:',
  'Data_second_case_study',
  'Label:',
  'helperText:',
  'Notes:',
  'Questions_for_the_group',
  'Notes_Questions',
  'Mandatory'
]
// Sample of multiline content:
// Section	Label	Input_type	Options	Data_From	Input_format	Data_first_case_study	Data_second_case_study	Helper_Text	Mandatory	Validation	Notes	Questions_for_the_group	Element_Key	FQN	NavURL	Dependant_On_FQN
const nlSep = '-NL-'

/*
TODO ideas for improving and documenting the generation code
1. Put more data into the pageChildElementProperties to store these properties at the page level.
This way we can reduce the amount of duplication between the table cells and table form elements.
1.a create a lookup method in the helper that can retrieve data from the parent's dataChildren to find
things like 'is this field mandatory?', 'get helper text', 'suffix'
*/


class RawInputToDef {
  /**
   * Main entry point. Provide the raw text as extracted from the Inputs spreadsheet.
   * Returns a json string
   * @param contents
   * @returns {string}
   */
  getDefinitions(contents, lastModifiedTime) {
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    mlFields.forEach(hdr => {
      c = this._fixMultiLineFields(c, hdr, nlSep)
    })
    let entries = this._rawToEntries(c)
    let groups = this._groupByPages(entries)
    let pages = this._toPages(groups, lastModifiedTime)
    return pages
  }

  /**
   * STEP 3
   * Take the grouped pages and make them into page definitions with page forms and tables (with dialogs)
   * @param groups
   * @param lastModifiedTime
   * @private
   */
  _toPages(groups, lastModifiedTime) {
    let pages = {}
    Object.values(groups).forEach(group => {
      let page = {}
      page.pageTitle = group.label
      page.pageDataKey = group.elementKey
      page.pageChildren = group.pageChildren
      this._pageMakeUiProperties(page, group, lastModifiedTime)
      pages[page.pageDataKey] = page
    })
    return pages
  }

  /* *************** definition helpers ******** */

  /**
   * STEP 2
   * Take the array of entries and regroup the entries by page
   * @private
   * @param entries
   */
  _groupByPages(entries) {
    let groups = {}
    entries.forEach(entry => {
      if (!entry.pageDataKey) {
        console.log('Why no pageDataKey for this entry?', entry)
        return
      }
      let pKey = entry.pageDataKey
      if (entry.inputType === PAGE_INPUT_TYPE) {
        // console.log('inputType PAGE_INPUT_TYPE', entry.inputType, entry.fqn)
        this._pageForGroup(groups, pKey, entry)
      } else if (CONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        // console.log('inputType CONTAINER_INPUT_TYPES', entry.inputType, entry.fqn)
        this._topLevelContainerForGroup(groups, pKey, entry)
      } else if (SUBCONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        this._subcontainerForGroup(groups, pKey, entry)
      } else {
        // entry is a regular element
        this._elementForGroup(groups, pKey, entry)
      }
    })
    return groups
  }

  _pageForGroup(groups, pKey, entry) {
    // console.log('Page:', p)
    groups[pKey] = entry
    let pg = groups[pKey]
    pg.pageChildren = []
    pg.containers = {}
  }

  _topLevelContainerForGroup(groups, pageKey, entry) {
    let containerFQN = entry.fqn
    let page = groups[pageKey]
    if (!page) {
      console.log('ERROR cannot find page for container', pageKey, entry)
    }
    let container = this._transferProperties(entry, containerElementProperties)
    container.elements = []
    container.containerType = entry.inputType
    container.containerKey = entry.elementKey
    page.containers[containerFQN] = container
    return { page, container }
  }

  _subcontainerForGroup(groups, pageKey, entry) {
    // entry is a fieldset or other group inside a table or form
    let { page, container } = this._topLevelContainerForGroup(groups, pageKey, entry)
    let dp = container.dataParent
    let toplevel = page.containers[dp]
    toplevel.elements.push(container)
    // console.log('subcontainer now linked into ', container, toplevel)
    // connect the sub group with it top level group
  }

  _elementForGroup(groups, pKey, entry) {
    let pg = groups[pKey]
    if (!pg) {
      console.log('ERROR element has no page', pKey, entry)
    }
    // Place the entry into the proper container based on entry's dataParent property
    let containerKey = entry.dataParent

    let container = pg.containers[containerKey]
    assert.ok(container && container.elements, 'ERROR containerKey has no container ' + containerKey )

    let containerChild = this._transferProperties(entry, containerElementProperties)
    // Perform per-entry tasks on the element being placed into the container
    this._prepareDropDownOptions(entry, containerChild)
    // Push element into container
    container.elements.push(containerChild)

    // Push page level data element onto page
    let pageChild = this._transferProperties(entry, pageChildElementProperties)
    this._prepareDropDownOptions(entry, pageChild)
    this._prepareHelperText(entry, pageChild)
    pg.pageChildren.push(pageChild)
  }

  _prepareDropDownOptions(src,dest) {
    // 1. Split options for drop down inputs ...
    if (src.options) {
      let parts = src.options.split(nlSep)
      let opts = parts.map(p => {
        return { text: p }
      })
      dest.options = opts
    }
  }

  _prepareHelperText(src, dest) {
    if (src.helperText) {
      let text = []
      let html = []
      let parts = src.helperText.split(nlSep)
      parts.forEach(p => {
        text.push(p)
        html.push('<p>' + p + '</p>')
      })
      dest.helperHtml = html.join('\n')
      dest.helperText = text.join('\n')
    }
  }

  _transferProperties (src, propertyList) {
    let dest = {}
    propertyList.forEach(prop => {
      if (src[prop]) {
        dest[prop] = src[prop]
      }
    })
    return dest
  }
  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  _rawToEntries(content) {
    let lines = content.split('\n')
    let entries = []
    lines.forEach(aLine => {
      if (aLine.trim().length === 0) {
        return
      }
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      assert.ok(
        found,
        'ERROR unable to find any kv pairs in this content: ' + JSON.stringify(aLine)
      )
      found.forEach(part => {
        // slice off the surrounding {}
        let seq = part.slice(1, -1)
        let indexOfFirst = seq.indexOf(':')
        let key = seq.slice(0, indexOfFirst)
        let value = seq.slice(indexOfFirst + 1)
        key = camelCase(this._cleanStr(key))
        value = this._cleanStr(value)
        entry[key] = value
      })
      entries.push(entry)
    })
    return entries
  }

  /* *************** to pages helpers ******** */

  _pageMakeUiProperties(page, group, lastModifiedTime) {
    // console.log('Build form for page and dialogs for tables', page)
    page.generated = moment.utc(lastModifiedTime).local().format()
    Object.keys(group.containers).forEach(key => {
      let container = group.containers[key]
      let tableKey = container.containerKey
      if (container.containerType === PAGE_FORM_INPUT) {
        page.hasForm = true
        page.pageForm = this._extractTableForm(container, tableKey)
      } else if (container.containerType === TABLE_ROW) {
        page.hasTable = true
        page.tables = page.tables || []
        let tableCells = this._extractTableCells(container)
        let tableForm = this._extractTableForm(container, tableKey)
        assert.ok(container.addButtonText,'Need addButtonText property to set up the add button for table ' + key)
        let table = {
          pageDataKey: page.pageDataKey,
          tableKey: container.containerKey,
          label: container.label,
          addButtonText: container.addButtonText,
          tableCells: tableCells,
          tableForm: tableForm }
        page.tables.push(table)
      }
    })
  }

  _extractTableCells(container) {
    let tableCells = []
    container.elements.forEach(element => {
      if (SUBCONTAINER_INPUT_TYPES.indexOf(element.inputType) >= 0) {
        element.elements.forEach(child => {
          let cellChild = this._transferProperties(child, tableCellProperties)
          tableCells.push(cellChild)
        })
      }
      let cell = this._transferProperties(element, tableCellProperties)
      tableCells.push(cell)
    })
    // Only keep cells that have a position in the table
    tableCells = tableCells.filter( (cell) => cell.tableColumn !== undefined)
    tableCells.sort((a, b) => a.tableColumn - b.tableColumn )
    tableCells.forEach( (cell) => {
      if (NO_SHOW_IN_TABLE_ELEMENTS.indexOf(cell.inputType) >= 0) {
        cell.tableCss += (cell.tableCss ? ' ' : '') + 'hide-table-element'
      }
    })
    return tableCells
  }

  _extractTableForm(container, tableKey) {
    // start with object to contain the form rows.
    let rows = {}
    container.elements.forEach(element => {
      // NOTE that elements should have either but not both formRow and fsetRow
      let formRow = element.formRow || element.fsetRow
      if(formRow) {
        let cell = this._transferProperties(element, formElementProperties)
        cell.tableKey = tableKey
        // get the current row indexed by the definition
        let row = rows[formRow - 1]
        if (!row) { // create row is needed
          rows[formRow - 1] = row = {formRow: formRow, elements: []}
        }
        row.elements.push(cell)
        if (SUBCONTAINER_INPUT_TYPES.indexOf(element.inputType) >= 0) {
          cell.formFieldSet = this._extractTableForm(element, tableKey)
        }
      }
    })
    // convert the object to array. This means allows the formRow indices to be any number and even skip rows.
    rows = Object.values(rows)
    // sort the rows based on their index
    rows.sort((a, b) => a.formRow - b.formRow)
    // sort the columns within a row
    rows.forEach(row => {
      row.elements.sort((a, b) => a.formColumn - b.formColumn)
    })
    let cnt = 0
    rows.forEach(row => {
      cnt = Math.max(cnt, row.elements.length)
    })
    return {
      rows: rows,
      columnsCount: cnt
    }
  }

  /* *************** UTILITIES ******** */

  /**
   * Trim white space.
   * Trim surrounding double quotes (part of the results when selecting, copying and pasting data from Excel
   * @param str
   * @returns {string}
   */
  _cleanStr(str) {
    let res = str.trim()
    if (res.length >= 2 && res.charAt(0) === '"') {
      res = res.slice(1, -1)
    }
    return res
  }

  /**
   * Fields may have data that spans multiple lines.
   * Search the entire contents for "{ sometext followed by multiline content up to the closing }"
   * Replace with { sometext followed by the contents of each line surrounded by double quotes
   * For example the following ...
   * "{Options: married
   *    single
   *    life partner
   *    divorced
   *    separated
   *    widowed}"
   * Becomes ....
   *    {Options: "married-NL-single-NL-life partner-NL-divorced-NL-separated-NL-widowed"}
   * @param contents
   * @param root
   * @param sep
   * @returns {string | * | void}
   */
  _fixMultiLineFields(contents, root, sep) {
    let s = '"{' + root + '[^"]*}"'
    let optsAll = new RegExp(s, 'g')
    // let found1 = contents.match(optsAll);
    let newContents = contents.replace(optsAll, function(opts) {
      let re = '({' + root + ')([^}]*)(}")'
      let regexp = new RegExp(re)
      let found = opts.match(regexp)
      let raw = found[2].split('\n').map(e => {
        return e.trim()
      })
      let results = '{' + root + ' "' + raw.join(sep) + '"}'
      return results
    })
    return newContents
  }

  /**
   * Assumption that empty cells contain a tab followed by 'eCell'.
   * Remove these from the content
   * @param contents
   * @returns {string}
   */
  _fixEmptyCells(contents) {
    let optsAll = /\teCell/g
    let newContents = contents.replace(optsAll, '')
    let emptyLine = /(eCell\n)/g
    newContents = newContents.replace(emptyLine, '')
    return newContents
  }

  /**
   * Replace all tabs with a space
   * @param contents
   * @returns {string | * | void}
   */
  _fixTabs(contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  _zapGremlins(contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }
}

module.exports = RawInputToDef
