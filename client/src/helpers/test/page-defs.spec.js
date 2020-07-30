import pageDefs from '../../inside/defs-grid/index'

import { inputTypes, dependentOn } from '../ehr-types'
import EhrDefs from '../ehr-defs-grid'
import ehrValidations from '../../inside/components/page/ehr-validations'
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
      should.exist(pc.assetName)
      if(pc.assetBase)
        should.exist(pc.assetBase)
    })
  })

  it('select options has length > 1', () => {
    pageChildren.filter(pc => pc.inputType === inputTypes.checkbox).map(pc => {
      should.exist(pc.options)
      pc.options.length.should.be.greaterThan(1)
    })
  })

  it('passToFunction Element Exists and has Options array', () => {
    pageChildren.filter(pc => !!pc.passToFunction).map(pc => {
      const elementKey = pc.passToFunction
      const elements = EhrDefs.findPageChildrenElement(elementKey)
      elements.length.should.be.greaterThan(0)
      pc.options.length.should.be.greaterThan(1)
      pc.options.map(option => {
        const split = option.key.split('=')
        const [ first, second ] = split
        should.exist(first)
        should.exist(second)
      })
    })
  })

  it('Test that any element with a validator refers to one of the supported validations', () => {
    pageChildren.filter(pc => !!pc.validation).map(pc => {
      console.log('validation >> ', pc.validation)
      const method = pc.validation.indexOf('(') !== -1 
        ? pc.validation.slice(0, pc.validation.indexOf('(')) 
        : pc.validation
      const type = typeof ehrValidations[method]
      type.should.equal('function')
      
    })
  })  
})
