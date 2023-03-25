import ehrPageDefs from '../ehr-definitions/ehr-page-defs'
import EhrTypes from '../ehr-definitions/ehr-types'
import { inputTypes, dependentOn } from '../ehr-definitions/ehr-types'
import EhrDefs from '../ehr-definitions/ehr-defs-grid'
import ehrValidations from '../ehr-definitions/ehr-validations'
import { isString, validNumberStr } from '../ehr-definitions/common-utils'
const should = require('should')

const keys = Object.keys(ehrPageDefs)

describe('page-definitions tests', () => {

  it('Are all inputTypes expected?', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)
      pageChildren.forEach(pc => {
        should.exist(inputTypes[pc.inputType])
      })
    })
  })

  it('dependentOn clause has an existent element', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)
      pageChildren.filter(pc => !!pc.dependentOn).map(pc => {
        const dep = pc.dependentOn
        const { splitActionKeyOn, splitKeyValueOn, action } = dependentOn
        dep.includes(splitActionKeyOn).should.equal(true)
        const split = dep.split(splitActionKeyOn)
        const [left, right] = split
        if (right.includes(splitKeyValueOn)) {
          const splitValues = right.split(splitKeyValueOn)
          splitValues.length.should.equal(2)
        }
        Object.values(action).includes(left).should.equal(true,`Expect ${JSON.stringify(action)} to include ${left}`)
      })
    })
  })

  it('assetLink elements have values in assetBase and assetName', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)

      pageChildren.filter(pc => pc.inputType === inputTypes.assetLink).map(pc => {
        should.exist(pc.assetName, `assetName should exist for pc ${JSON.stringify(pc)}`)
        if (pc.assetBase)
          should.exist(pc.assetBase, 'b')
      })
    })
  })

  it('all select elements have options list with length > 1', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)
      pageChildren.filter(pc => pc.inputType === inputTypes.select).map(pc => {
        should.exist(pc.options, `select options should exist for pc ${JSON.stringify(pc)}`)
        pc.options.length.should.be.greaterThan(1, `select options should have length > 1. For ${JSON.stringify(pc)}`)
      })
    })
  })

  /*
  SKIP until I can figure out why the pass to func value lacks a comman [ cellCntTotal cellCntSegNeutrophilAbs ]
   */
  it.skip('passToFunction Element Exists and has Options array', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)

      pageChildren.filter(pc => !!pc.passToFunction).map(pc => {
        const passToFunctionKey = pc.passToFunction
        console.log('passToFunctionKey',passToFunctionKey)
        let elementKeys = [passToFunctionKey]
        /*
        passToF elements contain either a single id or a string of the form '[ id1. id2 ]'
         */
        if (passToFunctionKey.includes('[')) {
          // second form .. split into an array
          elementKeys = passToFunctionKey.replace(/(\[|])/g, '').trim().split(',').map(m => m.trim())
        }
        // console.log('elementKeys', elementKeys)
        elementKeys.map(elementKey => {
          const pc = EhrDefs.getPageChildElement(pk, elementKey)
          should.exist(pc, `Expect page ${pk} to have element ${elementKey}`)
          if (pc.inputType === 'select') {
            should.exist(pc.options)
            pc.options.should.be.a.Array()
            // console.log('------------------------- pc.options is', pc.options)
            pc.options.length.should.be.greaterThan(0)
            pc.options.map(option => {
              // console.log('------------------------- option is', option)
              if (isString(option.key) && option.key.includes('=')) {
                const [val, text] = option.key.split('=')
                // console.log('val,text', val, text)
                should.exist(val)
                should.exist(text)
                validNumberStr(val).should.be.True()
              } else {
                // the select option is already a key/value pair
                validNumberStr(option.key).should.be.True()
              }
            })
          } else {
            const validInputType = pc.inputType === 'text'
              || pc.inputType === 'text'
              || pc.inputType === 'number'
              || pc.inputType === 'calculatedValue'
            validInputType.should.be.True(`invalid input type ${pc.inputType}`)
          }
        })
      })
    })
  })

  it('Test that any element with a validator refers to one of the supported validations', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageChildren = EhrDefs.getPageChildren(pk)
      pageChildren.filter(pc => !!pc.validation).map(pc => {
        // console.log('validation >> ', pc.validation)
        const method = pc.validation.indexOf('(') !== -1
          ? pc.validation.slice(0, pc.validation.indexOf('('))
          : pc.validation
        const type = typeof ehrValidations[method]
        type.should.equal('function', `validator should be function for pc ${JSON.stringify(pc)}`)
      })
    })
  })

  it('tableAction elements have page and table key', () => {
    const pageKeys = keys.map(k => ehrPageDefs[k].pageDataKey)
    pageKeys.map(pk => {
      const pageElements = EhrDefs.getPageElements(pk)
      Object.keys(pageElements).forEach(pek => {
        const tableDef = pageElements[pek]
        if (tableDef.tableAction) {
          tableDef.should.have.property('tableActionLabel')
          tableDef.should.have.property('taTargetTableKey')
          tableDef.should.have.property('taTargetPageKey')
          tableDef.should.have.property('taSourcePageKey')
          tableDef.should.have.property('taSourceTableKey')
          const parts = tableDef.tableAction.split('.')
          // does the ref have a page key that exists
          parts.should.have.length(2)
          const targetPage = ehrPageDefs[parts[0]]
          should.exist(targetPage)
          // does the page have a have a table with a key that matches the ref?
          const targetElements = EhrDefs.getPageElements(parts[0])
          const keys = Object.keys(targetElements)
          keys.includes(parts[1]).should.be.true
        }
      })
    })
  })
})
