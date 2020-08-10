import should from 'should'
import EhrHelpV2, { LEAVE_PROMPT } from '../ehr-helper'
import store from '../../../../store/index'
import { getPageKeys } from '../../../../helpers/test/testHelper'

// the following pageKey must contain one more table elements in its contents, 
// so that it can be used in 
const tablePageKey = getPageKeys()[3] 
// the following pageKey must contain one more form elements in its contents, 
// so that it can be used in 
const formPageKey = getPageKeys()[0]

const _setUpWindowObj = () => {
  delete window.confirm
  window.confirm = jest.fn()
}

let ehrHelper, formKey, tableKey = 'table', router = {}
router.go = jest.fn()

describe('ehr-helper tests', () => {
  it('properly instantiates class', () => {
    ehrHelper = new EhrHelpV2(this, store, formPageKey)
    should.exist(ehrHelper)
  })

  it('isV2', () => {
    ehrHelper.isV2().should.equal(true)
  })

  it('getPageKey', () => {
    const result = ehrHelper.getPageKey()
    should.exist(result)
    result.should.equal(formPageKey)
  })

  it('getPageDef', () => {
    const pageDef = ehrHelper.getPageDef()
    should.exist(pageDef)
    pageDef.pageDataKey.should.equal(formPageKey)
  })

  it('getPageForms', () => {
    const pageForms = ehrHelper.getPageForms()
    formKey = pageForms[0].formKey
    should.exist(pageForms)
    pageForms.should.be.an.Array()
    pageForms[0].isPageForm.should.equal(true)
  })

  it('getPageTableDefs', () => {
    ehrHelper = new EhrHelpV2(this, store, tablePageKey)
    const pageTableDefs = ehrHelper.getPageTableDefs()
    should.exist(pageTableDefs)
    pageTableDefs.should.be.an.Array()
    pageTableDefs.length.should.be.greaterThan(0)
  })

  it('getTable', () => {
    const key = 'table'
    const table = ehrHelper.getTable(key)
    should.exist(table)
    table.tableDef.isTable.should.equal(true)
  })

  it('getPageGeneratedDate', () => {
    const gen = ehrHelper.getPageGeneratedDate()
    should.exist(gen)
  })

  it('getLastPageDataUpdateDate', () => {
    const updated = ehrHelper.getLastPageDataUpdateDate()
    should.exist(updated)
  })  

  it('setShowingAdvanced', () => {
    should.doesNotThrow(() => ehrHelper.setShowingAdvanced(true))
  })

  it('isShowingAdvanced', () => {
    const showing = ehrHelper.isShowingAdvanced()
    showing.should.equal(true)
  })

  it('getPageErrors', () => {
    ehrHelper.getPageErrors().length.should.equal(0)
  })

  it('getActiveData', () => {
    should.doesNotThrow(() => {
      const result = ehrHelper.getActiveData()
      should.exist(result)
    })
  })

  it('stashActiveData', () => {
    should.doesNotThrow(() => {
      ehrHelper.stashActiveData('elementKey', 'value')
    })
  })

  it('showTableAddButton', () => {
    const result = ehrHelper.showTableAddButton()
    result.should.equal(false)
  })

  it('canEditForm', () => {
    const result = ehrHelper.canEditForm(formKey)
    result.should.equal(false)
  })

  it('isEditing', () => {
    should.doesNotThrow(() => {
      const result = ehrHelper.isEditing()
      result.should.equal(false)
    })
  })

  it('getAsLoadedPageData', () => {
    should.doesNotThrow(() => {
      let asLoaded = ehrHelper.getAsLoadedPageData()
      should.exist(asLoaded)
    })
  })

  it('formatDate', () => {
    const date = new Date()
    should.doesNotThrow(() => {
      const result = ehrHelper.formatDate(date)
      should.exist(result)
    })
  })

  it('showDialog', () => {
    should.doesNotThrow(() => ehrHelper.showDialog('table'))
  })

  it('saveDialog', () => {
    should.doesNotThrow(() => ehrHelper.saveDialog())
  })
  
  it('clearTable', () => {
    should.doesNotThrow(() => ehrHelper.clearTable(tableKey))
  })

  it('getDialogEventChannel', () => {
    should.doesNotThrow(() => ehrHelper.getDialogEventChannel())
  })

  it('getErrorList', () => {
    should.doesNotThrow(() => {
      const errors = ehrHelper.getErrorList(tableKey)
      errors.length.should.equal(0)
    })
  })

  it('getDialogInputs', () => {
    const dialogs = ehrHelper.getDialogInputs(tableKey)
    should.exist(dialogs)

  })

  it('cancelDialog', () => {
    should.doesNotThrow(() => ehrHelper.cancelDialog())
  })

  it('beginEdit', () => {
    should.doesNotThrow(() => ehrHelper.beginEdit(formKey))
    ehrHelper.isEditing().should.equal(true)
  })
  
  it('resetFormData', () => {
    should.doesNotThrow(async () => await ehrHelper.resetFormData())
  })

  it('savePageFormEdit', () => {
    should.doesNotThrow(() => ehrHelper.savePageFormEdit())
    ehrHelper.isEditing().should.equal(false)
  })
  
  it('cancelEdit', () => {
    should.doesNotThrow(() => ehrHelper.cancelEdit(router))
    ehrHelper.isEditing().should.equal(false)
    const [call] = router.go.mock.calls
    call.length.should.equal(1)
  })

  it('unsavedData', () => {
    const unsaved = ehrHelper.unsavedData()
    unsaved.should.equal(false)
  })

  it('beforeRouteLeave || isEditing with changes', () => {
    _setUpWindowObj()
    ehrHelper.beginEdit(formKey)
    const next = jest.fn()
    ehrHelper.beforeRouteLeave(null, null, next)
    const [nextCall] = next.mock.calls
    nextCall[0].should.equal(false)
    nextCall.length.should.equal(1)
    const [windowCall] = window.confirm.mock.calls
    windowCall[0].should.equal(LEAVE_PROMPT)
    windowCall.length.should.equal(1)
    ehrHelper.cancelEdit(router)
  })

  it('beforeRouteLeave || not editing', () => {
    _setUpWindowObj()
    const next = jest.fn()
    ehrHelper.beforeRouteLeave(null, null, next)
    const [nextCall] = next.mock.calls
    should.not.exist(nextCall[0])
    nextCall.length.should.equal(0)
  })

  it('beforeUnloadListener || editing', () => {
    const event = {
      preventDefault: jest.fn(),
      returnValue: ''
    }
    ehrHelper.beginEdit(formKey)
    ehrHelper.beforeUnloadListener(event)
    const preventDefault = event.preventDefault.mock
    event.returnValue.should.equal(LEAVE_PROMPT)
    preventDefault.calls.length.should.equal(1)
  })
})