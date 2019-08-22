'use strict'
const rawHelper = require('./helps')
const moment = require('moment')
const assert = require('assert').strict

const PAGE_INPUT_TYPE = 'page'
const PAGE_FORM = 'page_form'
const TABLE_FORM = 'table_form'
const ehrGroup = 'ehr_group'
const ehrSubgroup = 'ehr_subgroup'
const SPACER = 'spacer'
const NO_SHOW_IN_TABLE_ELEMENTS = [ SPACER ]
const CONTAINER_INPUT_TYPES = [PAGE_FORM, TABLE_FORM ]

const pageChildElementProperties = [
  'elementKey',
  'addButtonText',
  'assetBase',
  'assetName',
  { sKey: 'cN', dKey: 'cIndex'},
  'dataCaseStudy',
  'defaultValue',
  'dependantOn',
  { sKey: 'fN', dKey: 'formIndex'},
  'formCss',
  'formOption',
  'helperText',
  'helperHtml',
  'inputType',
  'label',
  'mandatory',
  'options',
  'passToFunction',
  { sKey: 'rN', dKey: 'rIndex'},
  'specialProperties',
  'suffix',
  'tableColumn',
  'tableCss',
  'validation'
]

const groupProperties = [
  'label',
  'formCss',
]

const formProperties  = [
  'elementKey',
  'label',
  'addButtonText',
  'formCss',
]


const pageProperties = [ 'elementKey', 'label', 'pN' ]

const pageProperties2 = [
  { sKey: 'elementKey', dKey: 'pageDataKey'},
  { sKey: 'label', dKey: 'pageTitle'},
  { sKey: 'pN', dKey: 'pIndex'},
  'isV2',
  'hasGridTable',
  'hasGridForm',
  'medSchedule',
  'tables',
  'pageChildren'
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

class RawInputToDef {
  /**
   * Main entry point. Provide the raw text as extracted from the Inputs spreadsheet.
   * Returns a object
   * @param contents
   * @param lastModifiedTime
   * @returns {object}
   */
  getDefinitions (contents, lastModifiedTime) {
    let entries = rawHelper._rawToEntries(contents, mlFields)
    let pages = this._groupByPages(entries)
    pages = this._toPages(pages, lastModifiedTime)
    return pages
  }

  _groupByPages (entries) {
    let pages = {}
    entries.forEach(entry => {
      this._validateEntry(entry)
      if (entry.inputType === PAGE_INPUT_TYPE) {
        this._makePage(pages, entry)
      } else if (entry.inputType === PAGE_FORM) {
        this._formForPage(pages, entry)
      } else if (entry.inputType === TABLE_FORM) {
        this._tableForPage(pages, entry)
      } else if (entry.inputType === ehrGroup) {
        this._group(pages, entry)
      } else if (entry.inputType === ehrSubgroup) {
        this._subgroup(pages, entry)
      } else {
        // entry is a regular element
        this._elementForPage(pages, entry)
      }
    })
    return pages
  }

  /* *************** convert inputs to definition structures ******** */

  _makePage (groups, entry) {
    let pKey = entry.pN
    console.log('Page:', pKey)
    let page = rawHelper._transferProperties(entry, pageProperties)
    page.isV2 = true
    page.pageChildren = {}
    page.pageElementsByNumber = {}
    groups[pKey] = page
  }

  _formForPage (pages, entry) {
    let page = pages[entry.pN]
    let fKey = entry.fN
    let form = rawHelper._transferProperties(entry, formProperties)
    form.elementKey = entry.elementKey
    form.pageKey = page.pageKey
    form.formKey = entry.elementKey
    form.isPageForm = true
    form.ehr_groups = {}
    page.hasGridForm = true
    page.pageElementsByNumber[fKey] = form
  }

  _tableForPage (pages, entry) {
    let page = pages[entry.pN]
    let fKey = entry.fN
    let form = rawHelper._transferProperties(entry, formProperties)
    form.formKey = entry.elementKey
    form.ehr_groups = {}
    assert.ok(form.addButtonText,'Need addButtonText property to set up the add button for table ')
    let table = {
      elementKey: entry.elementKey,
      pageKey: page.pageKey,
      tableKey: entry.elementKey,
      isTable: true,
      label: entry.label,
      addButtonText: entry.addButtonText,
      ehr_list: {},
      form: form
    }
    page.hasGridTable = true
    page.pageElementsByNumber[fKey] = table
  }

  _group (pages, entry) {
    let page = pages[entry.pN]
    let group = rawHelper._transferProperties(entry, groupProperties)
    group.label = entry.label
    group.gIndex = entry.gN
    group.gChildren = {}
    let form = this._findForm(page, entry.fN)
    let groups = form.ehr_groups
    groups[group.gIndex] = group
  }

  _findForm (page, num) {
    let element = page.pageElementsByNumber[num]
    if (element.isPageForm) {
      return element
    } else if (element.isTable) {
      return element.form
    }
  }

  _subgroup (pages, entry) {
    let page = pages[entry.pN]
    let form = this._findForm(page, entry.fN)
    let groups = form.ehr_groups
    let group = groups[entry.gN]
    let subgroup = rawHelper._transferProperties(entry, groupProperties)
    subgroup.sgChildren = []
    group.gChildren[entry.sgN] = subgroup
  }

  _elementForPage (pages, entry) {
    let page = pages[entry.pN]
    let form = this._findForm(page, entry.fN)
    let groups = form.ehr_groups
    let group = groups[entry.gN]
    // three blocks of work .... page child, form element, table element

    // *********** page child element
    let pageChild = rawHelper._transferProperties(entry, pageChildElementProperties)
    pageChild.fqn = this._makeFQN(page, entry)
    rawHelper._prepareDropDownOptions(entry, pageChild)
    rawHelper._prepareHelperText(entry, pageChild)
    rawHelper._prepareSpecialProperties(entry, pageChild, page)
    // *********** place page child in page
    page.pageChildren[pageChild.elementKey] = pageChild

    // *********** form element
    if (entry.sgN) {
      // *********** place form element in subgroup
      let subgroup = group.gChildren[entry.sgN]
      subgroup.sgChildren.push(entry.elementKey)
    } else {
      // *********** place form element in group
      let cnt = Object.keys(group.gChildren).length
      group.gChildren[cnt+1] = entry.elementKey
    }

    if (form.isTableForm) {
      // *********** table element
      let index = entry.tableColumn
      if (index && entry.elementKey) {
        let formKey = form.formKey
        let table = page.tables[formKey]
        if (!table.ehr_list[index]) {
          // *********** make table list property
          table.ehr_list[index] = {
            label: entry.tableLabel,
            ehr_list_index: index,
            items: []}
        }
        // *********** place table element in ...
        table.ehr_list[index].items.push(entry.elementKey)
      }
    }
  }

  /* *************** final preparation ******** */

  _toPages (pages, lastModifiedTime) {
    // Take the pages from the first stage and prepare final form.
    let pages2 = {}
    Object.values(pages).forEach(page1 => {
      let page2 = rawHelper._transferProperties(page1, pageProperties2)
      page2.generated = moment.utc(lastModifiedTime).local().format()
      page2.pageElements = this._toForms(page1)
      // page2.tables = this._toTables(page1, page2.forms)
      pages2[page2.pageDataKey] = page2
    })
    return pages2
  }

  _toTables(page1, forms2) {
    // final work on tables .. mainly convert objects to arrays. May add sorting in future
    const _this = this
    function _aTable(table) {
      let list = _this._objToArray(table.ehr_list)
      table.ehr_list = list
      table.tableForm = forms2[table.tableKey]
      forms2[table.tableKey] = undefined
      return table
    }
    let tables = this._objToArray(page1.tables, _aTable)
    return tables

  }

  _toForms(page1) {
    // final work on forms .. mainly convert objects to arrays. May add sorting in future
    const _this = this
    function _aGroup (group) {
      let gChildren = _this._objToArray(group.gChildren)
      group.gChildren = gChildren
      return group
    }
    let pageElementsByKey = {}
    Object.values(page1.pageElementsByNumber).forEach(element => {
      let form
      if(element.isPageForm) {
        let groups = _this._objToArray(element.ehr_groups, _aGroup)
        element.ehr_groups = groups
      } else if (element.isTable) {
        let groups = _this._objToArray(element.form.ehr_groups, _aGroup)
        element.form.ehr_groups = groups
      }
      pageElementsByKey[element.elementKey] = element
    })
    return pageElementsByKey
  }

  _objToArray(obj, middle) {
    // convert obj to array and optionally perform addition work via the middle function
    let array = []
    Object.values(obj).forEach(part => {
      if (middle) part = middle(part)
      array.push(part)
    })
    return array
  }

  /* *************** definition helpers ******** */

  _validateEntry(entry) {
    assert(entry.pN, 'Why no page number for this entry?', entry)
    if(entry.inputType === PAGE_INPUT_TYPE) return
    assert(entry.fN, 'Why no form number for this entry?', entry)
    if(entry.inputType === PAGE_FORM) return
    if(entry.inputType === TABLE_FORM) return
    assert(entry.gN, 'Why no group number for this entry?', entry)
    if(entry.inputType === ehrSubgroup) {
      assert(entry.sgN, 'Why no subgroup number for this entry?', entry)
    }

  }

  _makeFQN(page, entry) {
    return page.elementKey + '.' + entry.elementKey
  }
}

const transformer = new RawInputToDef()

function getDefinitions (contents, lastModifiedTime) {
  return transformer.getDefinitions(contents, lastModifiedTime)
}
module.exports = getDefinitions
