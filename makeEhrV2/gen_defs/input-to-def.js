import EhrTypes from '../../client/src/helpers/ehr-types'
import EhrShortForms from './ehr-short-forms'

const rawHelper = require('./helps')
const moment = require('moment')
const assert = require('assert').strict
const dbug = false

const PAGE_INPUT_TYPE = EhrTypes.inputTypes.page
const PAGE_FORM = EhrTypes.inputTypes.page_form
const TABLE_FORM = EhrTypes.inputTypes.table_form
const ehrGroup = EhrTypes.inputTypes.group
const ehrSubgroup = EhrTypes.inputTypes.subgroup

const DATA_INPUT_TYPES = Object.values(EhrTypes.dataInputTypes)

const NONDATA_INPUT_TYPES = Object.values(EhrTypes.nondataInputType)

const STRUCT_INPUT_TYPES = Object.values(EhrTypes.structuralTypes)

const SHORT_FORMS = Object.values(EhrTypes.shortFormTypes)

const pageChildElementProperties = [
  'elementKey',
  'addButtonText',
  'assetBase',
  'assetName',
  { sKey: 'cN', dKey: 'cIndex'},
  'dataCaseStudy',
  'defaultValue',
  'dependentOn',
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
  'tableLabel',
  'validation',
  'recHeader'
]

const groupProperties = [
  'elementKey',
  'dependentOn',
  'label',
  'formCss',
]

const formProperties  = [
  'elementKey',
  'label',
  'addButtonText',
  'formOption',
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
// **** !!!! Use labels as found in the inputs spreadsheet before they are converted to camelCase !!! ***
const mlFields = [
  'Label:',
  'Options:',
  'Data_case_study:',
  'Label:',
  'helperText:',
  'Notes:',
  'Mandatory'
]

/* To create unique keys for non-data items that are missing elementKey */
let missingKeyIndex = 0

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
    let recHeader = this._needsUserSignature(entries)
    entries = this._preprocessEntries(entries)
    entries = this._validateEntries(entries)
    let pages = this._groupByPages(entries)
    pages = this._toPages(pages, lastModifiedTime, recHeader)
    return pages
  }
  _preprocessEntries (entries) {
    let postEntries = []
    entries.forEach(entry => {
      if (SHORT_FORMS.indexOf(entry.inputType) >= 0) {
        EhrShortForms.preprocess(entry, postEntries)
      } else {
        // entry is a regular element
        postEntries.push(entry)
      }
    })
    return postEntries
  }
  _needsUserSignature (entries) {
    let validated = entries.find(e => EhrShortForms.validateRecHeader(e) === true ) || {}
    return Object.keys(validated).length > 0
  }


  _groupByPages (entries) {
    let pages = {}
    entries.forEach(entry => {
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
    if (dbug) console.log('Page:', pKey)
    let page = rawHelper._transferProperties(entry, pageProperties)
    page.isV2 = true
    page.pageChildren = []
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
    // group.label = entry.label
    group.gIndex = entry.gN
    group.gChildren = {}
    //console.log('_group entry then group', entry, group)
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
    subgroup.elementKey = subgroup.elementKey || 'subgroup' + ++missingKeyIndex
    subgroup.sgChildren = []
    group.gChildren[entry.sgN] = subgroup
  }

  _elementForPage (pages, entry) {
    let page = pages[entry.pN]
    let pElement = page.pageElementsByNumber[entry.fN]
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
    page.pageChildren.push(pageChild)

    // *********** form element
    if (entry.sgN) {
      // *********** place form element in subgroup
      let subgroup = group.gChildren[entry.sgN]
      subgroup.sgChildren.push(entry.elementKey)
    } else {
      // *********** place form element in group
      let cnt = Object.keys(group.gChildren).length
      group.gChildren[cnt+1] = entry.elementKey
      // console.log('group.gChildren[cnt+1] = entry.elementKey', group.gChildren[cnt+1], entry.elementKey)
    }

    if (pElement.isTable) {
      let table = pElement
      // *********** table element
      let index = entry.tableColumn
      if (!index && NONDATA_INPUT_TYPES.indexOf(entry.inputType) < 0) {
        let msg = (`Element in table ${pElement.elementKey} lacks tableColumn value. Check the Inputs. elementKey: ${entry.elementKey}`)
        console.log('WARNING', msg)
      }
      if (index && entry.elementKey) {
        if (!table.ehr_list[index]) {
          // *********** make stack for table at this index
          table.ehr_list[index] = {
            label: entry.tableLabel,
            tableCss: entry.tableCss,
            ehr_list_index: index,
            items: []}
        }
        // *********** place table element in ...
        table.ehr_list[index].items.push(entry.elementKey)
      }
    }
  }

  /* *************** final preparation ******** */
  _toPages (pages, lastModifiedTime, hasRecHeader) {
    // Take the pages from the first stage and prepare final form.
    let pages2 = {}
    Object.values(pages).forEach(page1 => {
      let page2 = rawHelper._transferProperties(page1, pageProperties2)
      page2.recHeader = hasRecHeader
      page2.generated = moment.utc(lastModifiedTime).local().format()
      page2.pageElements = this._toForms(page1)
      pages2[page2.pageDataKey] = page2
    })
    return pages2
  }

  _toForms (page1) {
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
        //console.log('Convert ehrGroups', element.form.ehr_groups)
        let groups = _this._objToArray(element.form.ehr_groups, _aGroup)
        element.form.ehr_groups = groups
        let list = _this._objToArray(element.ehr_list)
        element.ehr_list = list
        this._formInputs(page1, element.form)
      }
      pageElementsByKey[element.elementKey] = element
    })
    return pageElementsByKey
  }

  _formInputs (page, form) {
    function input (key, data) {
      let child = page.pageChildren.find( (ch) => { return ch.elementKey === key })
      // if (dbug) console.log('_formInputs look for child with key', key, child)
      let inputType = child.inputType
      if (DATA_INPUT_TYPES.indexOf(inputType) >= 0) {
        data[key] = child.defaultValue || ''
      }
    }
    let groups = form.ehr_groups
    let data = {}
    groups.forEach( (grp) => {
      // if (dbug) console.log('_formInputs group', grp)
      grp.gChildren.forEach( (grpChild ) => {
        if (typeof grpChild === 'string') {
          input(grpChild, data)
        } else {
          // if (dbug) console.log('_formInputs group child is subgroup', grpChild)
          grpChild.sgChildren.forEach( (sgrpChild ) => {
            input(sgrpChild, data)
          })
        }
      })
    })
    form.ehr_data = data
  }
  
  _objToArray (obj, middle) {
    // convert obj to array and optionally perform addition work via the middle function
    let array = []
    Object.values(obj).forEach(part => {
      if (middle) part = middle(part)
      array.push(part)
    })
    return array
  }

  /* *************** definition helpers ******** */

  _validateEntries (entries) {
    entries.forEach(entry => {
      this._validateEntry(entry)
    })
    return entries
  }

  _validateEntry (entry) {
    if (DATA_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
      assert(entry.elementKey, 'Must have element key for input types', entry)
    } else if (NONDATA_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
      // OK
    } else if (STRUCT_INPUT_TYPES.indexOf(entry.inputType) >= 0) {
      // OK
    } else if (SHORT_FORMS.indexOf(entry.inputType) >= 0) {
      // OK
    } else {
      assert(false, 'This entry ' + JSON.stringify(entry)+  ' has an unsupported inputType')
    }
    if(entry.inputType === TABLE_FORM && !entry.elementKey) {

      assert(false, 'Tables must have element key ' +  JSON.stringify(entry))
    }
    if (!entry.elementKey) {
      if (dbug) console.log('Adding elementKey to entry ', entry)
      entry.elementKey = entry.inputType + ++missingKeyIndex
    }
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

  _makeFQN (page, entry) {
    return page.elementKey + '.' + entry.elementKey
  }
}

const transformer = new RawInputToDef()

function getDefinitions (contents, lastModifiedTime) {
  return transformer.getDefinitions(contents, lastModifiedTime)
}
module.exports = getDefinitions
