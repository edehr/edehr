'use strict'
const fs = require('fs')
const assert = require('assert').strict
const camelCase = require('camelcase')

const DEFAULT_KEY = 'defaultValue'
const PAGE_FORM = 'page_form'
const TABLE_ROW = 'table_row'
const TABLE_COL = 'table_column'
const SUBGROUP = 'subgroup'
const FIELDSET = 'fieldset'
const FIELDSET_ROW = 'fieldRowSet'
const FORM_LABEL = 'form-label'
const SPACER = 'spacer'
const PAGE_INPUT_TYPE = 'page'
const CONTAINER_INPUT_TYPES = [PAGE_FORM, TABLE_ROW, TABLE_COL]
const SUBCONTAINER_INPUT_TYPES = [SUBGROUP, FIELDSET, FIELDSET_ROW]
const NO_SHOW_IN_TABLE_ELEMENTS = [SPACER, FORM_LABEL, FIELDSET_ROW, FIELDSET]

const containerElementProperties = [
  'elementKey',
  'fqn',
  'inputType',
  'label',
  'css',
  'tableCss',
  'tableColumn',
  'fieldset',
  'fsetRow', // fieldset row and column
  'fsetCol',
  'formCss',
  'formColumn',
  'formRow',
  'formOption',
  'pageDataKey',
  'dataParent',
  'page',
  'defaultValue',
  'mandatory',
  'validation',
  'helperText',
  'assetBase',
  'assetName'
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
  'Helper_Text:',
  'Notes:',
  'Questions_for_the_group',
  'Mandatory'
]
// Sample of multiline content:
// Section	Label	Input_type	Options	Data_From	Input_format	Data_first_case_study	Data_second_case_study	Helper_Text	Mandatory	Validation	Notes	Questions_for_the_group	Element_Key	FQN	NavURL	Dependant_On_FQN
const nlSep = '-NL-'

class RawInputToDef {
  /**
   * Main entry point. Provide the raw text as extracted from the Inputs spreadsheet.
   * Returns a json string
   * @param contents
   * @returns {string}
   */
  getDefinitions(contents) {
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    mlFields.forEach(hdr => {
      c = this._fixMultiLineFields(c, hdr, nlSep)
    })
    let entries = this._rawToEntries(c)
    let groups = this._groupByPages(entries)
    let pages = this._toPages(groups)
    return pages
  }

  _toPages(masterPageDefs) {
    // let defs = require("../ehr_defs/patient-profile")();
    let pages = {}
    Object.values(masterPageDefs).forEach(page => {
      let uiP = {}
      uiP.pageTitle = page.label
      uiP.pageDataKey = page.elementKey
      this._page(uiP, page)
      let pageData = {}
      // let pd = pageData[uiP.pageDataKey] = {}
      if (uiP.hasTable) {
        uiP.tables.forEach(table => {
          pageData[table.tableKey] = []
        })
      }
      console.log('Data structure for page ' + uiP.pageDataKey + ' is ', pageData)
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
      if (!entry.page) {
        console.log('Why no page for this entry?', entry)
        return
      }
      let p = entry.page
      if (entry.inputType === PAGE_INPUT_TYPE) {
        this._pageForGroup(p, pages, entry)
      } else if (CONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        this._topLevelContainerForGroup(pages, p, entry)
      } else if (SUBCONTAINER_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
        this._subcontainerForGroup(pages, p, entry)
      } else {
        // entry is a regular element
        this._elementForGroup(pages, p, entry)
      }
    })
    return pages
  }

  _pageForGroup(p, pages, entry) {
    console.log('Page:', p)
    pages[p] = entry
    let pg = pages[p]
    pg.children = []
    pg.rawElements = []
    pg.containers = {}
  }

  _topLevelContainerForGroup(pages, p, entry) {
    // entry is a container
    let pg = pages[p]
    if (!pg) {
      console.log('ERROR container has no page', p, entry)
    }
    pg.rawElements.push(entry)
    let cntId = entry.fqn
    // let container = entry
    let container = {}
    containerElementProperties.forEach(prop => {
      if (entry[prop]) {
        container[prop] = entry[prop]
      }
    })

    container.elements = []
    container.containerType = entry.inputType
    container.options = entry.options
    container.containerKey = entry.elementKey
    pg.containers[cntId] = container
    return { pg, container }
  }

  _subcontainerForGroup(pages, p, entry) {
    // entry is a fieldset or other group inside a table or form
    let { pg, container } = this._topLevelContainerForGroup(pages, p, entry)
    let dp = container.dataParent
    let toplevel = pg.containers[dp]
    if(!toplevel)
    console.log(entry,dp)
    toplevel.elements.push(container)
    // console.log('subcontainer now linked into ', container, toplevel)
    // connect the sub group with it top level group
  }

  _elementForGroup(pages, p, entry) {
    let pg = pages[p]
    if (!pg) {
      console.log('ERROR element has no page', p, entry)
    }
    pg.rawElements.push(entry)
    let containerKey = entry.dataParent
    let container = pg.containers[containerKey]
    assert.ok(
      container && container.elements,
      'ERROR containerKey has no container ' +
        containerKey +
        ' ' +
        JSON.stringify(container) +
        ' ' +
        JSON.stringify(entry)
    )
    let containerChild = {}
    containerElementProperties.forEach(prop => {
      if (entry[prop]) {
        containerChild[prop] = entry[prop]
      }
    })
    if (entry.options) {
      let parts = entry.options.split(nlSep)
      let opts = parts.map(p => {
        return { text: p }
      })
      containerChild.options = opts
    }
    container.elements.push(containerChild)
    // DATA
    let dataChild = {
      label: entry.label,
      elementKey: entry.elementKey,
      fqn: entry.fqn,
      dataFrom: entry.dataFrom,
      dataCaseStudy: entry.dataCaseStudy,
      assignment: entry.assignment
    }
    // TODO this children property is not yet used. It'll be for seed data. Rename it when it's used.
    pg.children.push(dataChild)
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

  _page(uiP, page) {
    console.log('Build form for page', page.label)
    Object.keys(page.containers).forEach(key => {
      let container = page.containers[key]
      if (container.containerType === PAGE_FORM) {
        uiP.hasForm = true
        // TODO change to pageForm
        uiP.page_form = this._extractPageForm(container)
      } else if (container.containerType === TABLE_ROW) {
        uiP.hasTable = true
        uiP.tables = uiP.tables || []
        let tableCells = this._pageTableCells(container)
        let tableForm = this._extractTableForm(container, tableCells)
        assert.ok(container.options,'Need options property to set up the add button for table ' + key)
        let reducedCells = tableCells.map(cell => {
          let nCell = Object.assign({},cell)
          if (nCell.formFieldSet) {
            delete nCell.formFieldSet
          }
          return nCell
        })

        let table = { tableKey: container.containerKey, addButtonText: container.options, tableCells: reducedCells, tableForm: tableForm }
        uiP.tables.push(table)
      } else if (container.containerType === TABLE_COL) {
        // TODO
        console.log('TODO !!!!! column tables', container.containerKey)
      } else if (container.containerType === SUBGROUP) {
        // TODO
        console.log('TODO !!!!! sub groups ', container.containerKey)
      } else if (container.containerType === FIELDSET || container.containerType === FIELDSET_ROW) {
        console.log(container.containerType, container.containerKey)
      }
    })
  }

  _extractPageForm(container) {
    let rows = []
    container.elements.forEach(element => {
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
    console.log('extracted table form for ', container.fqn)
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
