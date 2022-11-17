/**
 * @jest-environment jsdom
 */
import should from 'should'
import EhrPageHelper, { LEAVE_PROMPT } from '../ehr-helper'
import store from '../../../../store/index'
import { getPageKeys } from '../../../../helpers/test/testHelper'

/* ************** Important note ****
Several tests below are skipped because the invoke the helper._saveData method out of a valida context.
A valid context is the "user" is either a student or is editing the seed.  Both of these are determined
by a property on the visit record.
TODO implement tests for both these contexts for the skipped tests.
 */
// This constant must point to a pageKey index which contains one
// or more table elements (which is required for fulfilling certain test cases for
// the current test's purpose)
const CONTAINS_TABLE_ELEMENTS_INDEX = 3
// This constant must point to a pageKey index which contains one
// or more form elements (which is required for fulfilling certain test cases for the
// current test's purpose)
const CONTAINS_FORM_ELEMENTS_INDEX = 0

// console.log('getPageKeys()', getPageKeys())
const tablePageKey = getPageKeys()[CONTAINS_TABLE_ELEMENTS_INDEX]
// console.log('tablePageKey', tablePageKey)
const formPageKey = getPageKeys()[CONTAINS_FORM_ELEMENTS_INDEX]

const _setUpWindowObj = () => {
  delete window.confirm
  window.confirm = jest.fn()
}

let ehrHelper, formKey, tableKey = 'table', router = {}
router.go = jest.fn()


describe('ehr-helper tests', () => {
  describe('validation tests', () => {
    beforeAll(() => ehrHelper = new EhrPageHelper(formPageKey))
    it('properly instantiates class', () => {
      should.exist(ehrHelper)
    })
  })

  describe('pageForm tests', () => {
    beforeEach(() => ehrHelper = new EhrPageHelper(formPageKey))
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
      should.exist(pageForms)
      pageForms.should.be.an.Array()
      // since we're getting the page form elements, then one (or any, for instance)
      // item of the pageForms array, should contain the flag isPageForm true. By getting the first index,
      // we're assuring that the element has items and they are pageForms as properly required for the test...
      // therefore, if an array, then pageForms must contain at list one element (at index 0) which is a pageForm
      // (using the isPageForm flag)
      const samplePageForm = pageForms[0]
      formKey = samplePageForm.formKey
      samplePageForm.isPageForm.should.equal(true)
    })

  })

  describe('pageTableTests', () => {
    beforeEach(() => ehrHelper = new EhrPageHelper(tablePageKey))
    it('getPageTableDefs', () => {
      ehrHelper = new EhrPageHelper(tablePageKey)
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
  })

  describe('general purpose tests', () => {
    beforeAll(() => ehrHelper = new EhrPageHelper(tablePageKey))
    it('getPageGeneratedDate', () => {
      const gen = ehrHelper.getPageGeneratedDate()
      should.exist(gen)
    })

    it('getLastPageDataUpdateDate', () => {
      const updated = ehrHelper.getLastPageDataUpdateDate()
      should.exist(updated)
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
      result.should.equal(true)
    })

    it('canEditForm', () => {
      const result = ehrHelper.canEditForm(formKey)
      result.should.equal(true)
    })

    it('isEditing', () => {
      should.doesNotThrow(() => {
        const result = ehrHelper.isEditing()
        result.should.equal(false)
      })
    })

    it('getMergedPageData', () => {
      should.doesNotThrow(() => {
        let asLoaded = ehrHelper.getMergedPageData()
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

    it.skip('saveDialog', () => {
      should.doesNotThrow(() => ehrHelper.saveDialog())
    })

    it.skip('clearTable', () => {
      should.doesNotThrow(() => ehrHelper.clearTable(tableKey))
    })
  })

  describe('dialog tests', () => {
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

    it.skip('cancelDialog', () => {
      should.doesNotThrow(() => ehrHelper.cancelDialog())
    })

    it('beginEdit', () => {
      should.doesNotThrow(() => ehrHelper.beginEdit(formKey))
      ehrHelper.isEditing().should.equal(true)
    })

    it.skip('resetFormData', async () => {
      // skip this test because it invokes helper._saveData out of a valid context.
      try {
        await ehrHelper.resetFormData()
      } catch (error) {
        should.not.exist(error)
      }
      // should.doesNotThrow(async () => await ehrHelper.resetFormData())
    })

    it.skip('savePageFormEdit', () => {
      should.doesNotThrow(() => ehrHelper.savePageFormEdit())
      ehrHelper.isEditing().should.equal(false)
    })

    it('cancelEdit', () => {
      should.doesNotThrow(() => ehrHelper.cancelEdit(router))
      ehrHelper.isEditing().should.equal(false)
      const [call] = router.go.mock.calls
      call.length.should.equal(1)
    })

    it.skip('unsavedData', () => {
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

    it.skip('beforeUnloadListener || editing', () => {
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
})
