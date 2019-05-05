'use strict'
const moment = require('moment')
const fs = require('fs')
const assert = require('assert').strict
const camelCase = require('camelcase')

const DEFAULT_VALUE = 'defaultValue'
const PAGE_FORM = 'page_form'
const TABLE_ROW = 'table_row'
// const TABLE_COL = 'table_column'
// const SUBGROUP = 'subgroup'
const FIELDSET = 'fieldset'
const FIELDSET_ROW = 'fieldRowSet'
const SPACER = 'spacer'
const PAGE_INPUT_TYPE = 'page'
const CONTAINER_INPUT_TYPES = [PAGE_FORM, TABLE_ROW]//, TABLE_COL]
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

  'defaultValue',
  'options',
  'suffix',
  'mandatory',
  'validation',
  'helperText',
  'assetBase',
  'assetName',
  'passToFunction',

  'dataParent',
  'fqn',

]

const pageChildElementProperties = [
  'label',
  'elementKey',
  'fqn',
  'defaultValue',
  // 'suffix',
  // 'mandatory',
  // 'validation',
  'dataCaseStudy',
  // 'helperText',
  'passToFunction',
  // 'dataParent',
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

  _toPages(masterPageDefs, lastModifiedTime) {
    // let defs = require("../ehr_defs/patient-profile")();
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {}
      uiP.pageTitle = page.label
      uiP.pageDataKey = page.elementKey
      uiP.pageChildren = page.pageChildren
      this._pageMakeUiProperties(uiP, page, lastModifiedTime)
      let pageData = {}
      // let pd = pageData[uiP.pageDataKey] = {}
      if (uiP.hasTable) {
        uiP.tables.forEach(table => {
          pageData[table.tableKey] = []
        })
      }
      // console.log('Data structure for page ' + uiP.pageDataKey + ' is ', pageData)
      uiP.pageData = pageData
      pages[uiP.pageDataKey] = uiP
    })
    return pages
  }
  // TODO day, time types

  /* *************** definition helpers ******** */
  // TODO implement some default value functions to support stuff like the following
  /*
      defaultValue: function($store) {
      return $store.state.visit.sUserInfo.fullName
      },
      validationRules: [{ required: true }]
      defaultValue: function($store) {
      return 'Nurse'
      }
      defaultValue: function() {
      return moment().format('DD MMM')
      }
      defaultValue: function($store) {
      return moment().format('HH:mm')
      }
      defaultValue: function($store) {
      return 'Random: ' + getPhrase(4)
      },
   */

  // TODO implement dependent form elements. E.g. checkbox enable text box. See EhrDialogFormElement parent

  /**
   * STEP 2
   * Take the array of entries and regroup the entries by page
   * @private
   * @param entries
   */
  _groupByPages(entries) {
    let pages = {}
    entries.forEach(entry => {
      if (!entry.pageDataKey) {
        console.log('Why no pageDataKey for this entry?', entry)
        return
      }
      let p = entry.pageDataKey
      if (entry.inputType === PAGE_INPUT_TYPE) {
        // console.log('inputType PAGE_INPUT_TYPE', entry.inputType, entry.fqn)
        this._pageForGroup(p, pages, entry)
      } else if (CONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        // console.log('inputType CONTAINER_INPUT_TYPES', entry.inputType, entry.fqn)
        this._topLevelContainerForGroup(pages, p, entry)
      } else if (SUBCONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        // console.log('inputType SUBCONTAINER_INPUT_TYPES', entry.inputType, entry.fqn)
        this._subcontainerForGroup(pages, p, entry)
      } else {
        // entry is a regular element
        this._elementForGroup(pages, p, entry)
      }
    })
    return pages
  }

  _pageForGroup(p, pages, entry) {
    // console.log('Page:', p)
    pages[p] = entry
    let pg = pages[p]
    pg.pageChildren = []
    pg.containers = {}
  }

  /**
   *
   * @param pages
   * @param pageKey
   * @param entry is a container
   * @return {{page: *, container}}
   * @private
   */
  _topLevelContainerForGroup(pages, pageKey, entry) {
    // entry is a container
    let containerFQN = entry.fqn
    // we will create a container object from the entry
    let page = pages[pageKey]
    if (!page) {
      console.log('ERROR cannot find page for container', pageKey, entry)
    }
    let container = this._transferProperties(entry, containerElementProperties)
    container.elements = []
    container.containerType = entry.inputType
    container.containerKey = entry.elementKey
    // console.log('push container into page.fqn', page.fqn, 'cntId', containerFQN)
    page.containers[containerFQN] = container
    return { page, container }
  }

  _subcontainerForGroup(pages, p, entry) {
    // entry is a fieldset or other group inside a table or form
    let { page, container } = this._topLevelContainerForGroup(pages, p, entry)
    let dp = container.dataParent
    let toplevel = page.containers[dp]
    toplevel.elements.push(container)
    // console.log('subcontainer now linked into ', container, toplevel)
    // connect the sub group with it top level group
  }

  _elementForGroup(pages, p, entry) {
    let pg = pages[p]
    if (!pg) {
      console.log('ERROR element has no page', p, entry)
    }
    // Place the entry into the proper container based on entry's dataParent property
    let containerKey = entry.dataParent
    let container = pg.containers[containerKey]
    if (!container || ! container.elements) {
      console.error(      'ERROR containerKey has no container "' +
        containerKey +
        '"' +
        '\npg: ' +
        JSON.stringify(pg.containers) +
        '\ncontainer: ' +
        JSON.stringify(container) +
        '\nentry: ' +
        JSON.stringify(entry)
      )
    }
    assert.ok(container && container.elements, 'Error' )
    let containerChild = this._transferProperties(entry, containerElementProperties)
    // Perform per-entry tasks on the element being placed into the container
    this._prepareDropDownOptions(entry, containerChild)
    // Push element into container
    container.elements.push(containerChild)

    // Push page level data element onto page
    let pageChild = this._transferProperties(entry, pageChildElementProperties)
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

  _pageMakeUiProperties(uiP, page, lastModifiedTime) {
    // console.log('Build form for page and dialogs for tables', page.label)
    uiP.generated = moment.utc(lastModifiedTime).local().format()
    Object.keys(page.containers).forEach(key => {
      let container = page.containers[key]
      // console.log('_pageMakeUiProperties type fqn ', container.containerType, container.fqn)
      if (container.containerType === PAGE_FORM) {
        // console.log('_pageMakeUiProperties PAGE_FORM', container.fqn)
        uiP.hasForm = true
        // TODO change to pageForm
        uiP.page_form = this._extractPageForm(container)
      } else if (container.containerType === TABLE_ROW) {
        // console.log('_pageMakeUiProperties TABLE_ROW', container.fqn)
        uiP.hasTable = true
        uiP.tables = uiP.tables || []
        let tableCells = this._pageTableCells(container)
        let tableForm = this._extractTableForm(container, tableCells)
        assert.ok(container.addButtonText,'Need addButtonText property to set up the add button for table ' + key)
        let reducedCells = tableCells.map(cell => {
          let nCell = Object.assign({},cell)
          if (nCell.formFieldSet) {
            delete nCell.formFieldSet
          }
          return nCell
        })

        let table = { tableKey: container.containerKey,
          label: container.label,
          addButtonText: container.addButtonText,
          tableCells: reducedCells,
          tableForm: tableForm }
        uiP.tables.push(table)
      // } else if (container.containerType === TABLE_COL) {
      //   // TODO
      //   // console.log('TODO !!!!! column tables', container.containerKey)
      // } else if (container.containerType === SUBGROUP) {
      //   // TODO
      //   // console.log('TODO !!!!! sub groups ', container.containerKey)
      } else if (container.containerType === FIELDSET || container.containerType === FIELDSET_ROW) {
        // no special processing needed for fieldsets here.
        // console.log('_pageMakeUiProperties fieldset', container)
      }
    })
  }

  _extractPageForm(container, tableCells) {
    let rows = []
    let fSetChildrem = {}
    let topChildren=[]
    container.elements.forEach(element => {
      let elementKey = element.elementKey
      // console.log('_extractPageForm elementKey',elementKey)
      if (element.inputType === FIELDSET || element.inputType === FIELDSET_ROW) {
        // console.log('_extractPageForm elementKey level2Key', elementKey, element.level2Key)

        let rows = []
        element.elements.forEach(childElem => {
          let formRow = childElem.fsetRow
          let row = rows[formRow - 1]
          if (!row) {
            row = {
              formRow: formRow,
              elements: []
            }
            rows[formRow - 1] = row
          }
          childElem.formColumn = childElem.fsetCol
          row.elements.push(childElem)
        })
        this._sortFormElements(rows)
        let formFieldSet = {
          rows: rows,
          columnsCount: this._formColumnCount(rows)
        }
        element.formFieldSet = formFieldSet
      }
      let formRow = element.formRow
      let row = rows[formRow - 1]
      if (!row) {
        row = {
          formRow: formRow,
          elements: []
        }
        rows[formRow - 1] = row
      }
      row.elements.push(element)
    })
    this._sortFormElements(rows)
    let form = {
      rows: rows,
      // TODO column count in client code not here: adjust form column layout dependant on actual # of cols
      columnsCount: this._formColumnCount(rows)
    }
    return form
  }

  _sortFormElements(rows) {
    // sort the rows
    rows.sort((a, b) => a.formRow - b.formRow)
    // sort the columns within a row
    rows.forEach(row => {
      row.elements.sort((a, b) => a.formColumn - b.formColumn)
    })
  }

  _formColumnCount(rows) {
    let cnt = 0
    rows.forEach(row => {
      cnt = Math.max(cnt, row.elements.length)
    })
    return cnt
  }

  _pageTableCells(container) {
    let tableCells = []
    container.elements.forEach(element => {
      if (element.inputType === FIELDSET || element.inputType === FIELDSET_ROW) {
        element.elements.forEach(child => {
          tableCells.push(child)
        })
      }
      tableCells.push(element)
    })
    // sort by tableColumn
    tableCells.sort((a, b) => a.tableColumn - b.tableColumn)
    tableCells.forEach( (cell) => {
      let cI = cell.inputType
      if (NO_SHOW_IN_TABLE_ELEMENTS.indexOf(cI) >= 0) {
        let tableCss = (cell.tableCss ? cell.tableCss + ' ' : '') + 'hide-table-element'
        cell.tableCss = tableCss
      }
    })
    return tableCells
  }

  _extractTableForm(container, tableCells) {
    let rows = []
    let tableKey = container.containerKey
    // console.log('_extractTableForm', tableKey)
    container.elements.forEach(element => {
      let formRow = element.formRow
      let cell = tableCells.find(c => element.elementKey === c.elementKey)
      assert.ok(cell, 'Must have a table cell to match with form cell ' + element.elementKey)
      let row = rows[formRow - 1]
      if (!row) {
        row = {
          formRow: formRow,
          elements: []
        }
        rows[formRow - 1] = row
      }
      cell.tableKey = tableKey
      row.elements.push(cell)
      if (element.inputType === FIELDSET || element.inputType === FIELDSET_ROW) {
        // console.log('fieldset ', element.inputType)
        let formFieldSet = this._extractFieldSet(element, tableCells, tableKey)
        element.formFieldSet = formFieldSet
        delete element.elements
      }
    })
    this._sortFormElements(rows)
    let form = {
      rows: rows,
      columnsCount: this._formColumnCount(rows)
    }
    // console.log('extracted table form for ', container.fqn)
    return form
  }

  _extractFieldSet(fieldset, tableCells, tableKey) {
    let rows = []
    fieldset.elements.forEach(element => {
      let formRow = element.fsetRow
      let cell = tableCells.find(c => element.elementKey === c.elementKey)
      assert.ok(cell, 'Must have a table cell to match with fieldset cell ' + element.elementKey)
      let row = rows[formRow - 1]
      if (!row) {
        row = {
          formRow: formRow,
          elements: []
        }
        rows[formRow - 1] = row
      }
      cell.tableKey = tableKey
      cell.formColumn = element.fsetCol
      row.elements.push(cell)
    })
    this._sortFormElements(rows)
    let formFieldSet = {
      rows: rows,
      columnsCount: this._formColumnCount(rows)
    }
    return formFieldSet
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
