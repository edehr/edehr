import pageDefs from '../../inside/defs-grid/index'

import { inputTypes, dependentOn } from '../ehr-types'
import EhrDefs from '../ehr-defs-grid'
import ehrValidations from '../../inside/components/page/ehr-validations'
import { isString, validNumberStr } from '@/helpers/ehr-utils'
const should = require('should')

const keys = Object.keys(pageDefs)
const pageChildren = EhrDefs.getAllPageChildren()

describe('page-definitions tests', () => {
  it('Are all elements\' keys unique?', () => {
    const pageKeys = keys.map(k => pageDefs[k].pageDataKey)
    pageKeys.map(pk => {
    
      const found = EhrDefs.getItemsFromKey(pk)
      found.length.should.equal(1) 
    })
  })

  it('Are all inputTypes expected?', () => {
    pageChildren.map(pc => {
      should.exist(inputTypes[pc.inputType])
    })
  })

  it('dependentOn clause has an existent element', () => {
    pageChildren.filter(pc => !!pc.dependentOn).map(pc => {
      const dep = pc.dependentOn
      const { splitActionKeyOn, splitKeyValueOn, action } = dependentOn
      dep.includes(splitActionKeyOn).should.equal(true)
      const split = dep.split(splitActionKeyOn)
      const [ left, right ] = split
      if(right.includes(splitKeyValueOn)) {
        const splitValues = right.split(splitKeyValueOn)
        splitValues.length.should.equal(2)
      } 
      Object.values(action).includes(left).should.equal(true)
      
    })
  })

  it('assetLink elements have values in assetBase and assetName', () => {
    pageChildren.filter(pc => pc.inputType === inputTypes.assetLink).map(pc => {
      should.exist(pc.assetName, `assetName should exist for pc ${JSON.stringify(pc)}`)
      if(pc.assetBase)
        should.exist(pc.assetBase, 'b')
    })
  })

  it('select options has length > 1', () => {
    pageChildren.filter(pc => pc.inputType === inputTypes.select).map(pc => {
      should.exist(pc.options, `select options should exist for pc ${JSON.stringify(pc)}`)
      pc.options.length.should.be.greaterThan(1, `select options should have length >  for ${JSON.stringify(pc)}`)
    })
  })

  it('passToFunction Element Exists and has Options array', () => {
    pageChildren.filter(pc => !!pc.passToFunction).map(pc => {
      const passToFunctionKey = pc.passToFunction
      let elementKeys = [ passToFunctionKey]
      /*
      passToF elements contain either a single id or a string of the form '[ id1. id2 ]'
       */
      if(passToFunctionKey.includes('[')) {
        // second form .. split into an array
        elementKeys =passToFunctionKey.replace(/(\[|])/g, '').trim().split(',').map( m => m.trim())
      }
      // console.log('elementKeys', elementKeys)
      elementKeys.map(elementKey => {
        const elements = EhrDefs.findPageChildrenElement(elementKey)
        should.exist(elements)
        elements.should.be.a.Array()
        elements.length.should.be.greaterThan(0)
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

  it('Test that any element with a validator refers to one of the supported validations', () => {
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
