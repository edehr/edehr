import should from 'should'

import { ehrCalculateProperty, extractComboValue, extractMultiplyByFactor } from '@/inside/components/page/ehr-calcs'

describe ('ehrCalculateProperty' , () => {
  // it('wbcAverage - average', done => {
  //   const pageDataKey = 'hematology'
  //   const targetKey = 'wbcAverage'
  //   const srcValues = {}
  //   let sum = 0
  //   for (let i = 1; i <= 10; i++) {
  //     sum += i*2
  //     srcValues['wbc-'+i] = i * 2
  //   }
  //   const avg = sum / 10
  //   const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   should.exists(result)
  //   result.should.equal(avg)
  //   done()
  // })
  // it('wbcEstimate - product', done => {
  //   const pageDataKey = 'hematology'
  //   const targetKey = 'wbcEstimate'
  //   const srcValues = { wbcAverage: 11, wbcFieldFactor: 2}
  //   const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   should.exists(result)
  //   result.should.equal(22)
  //   done()
  // })

  it('wbcLowRange - multiplyBy(0.75, 1)', done => {
    const pageDataKey = 'hematology'
    const targetKey = 'wbcLowRange'
    const srcValues = { wbcEstimate: 10}
    const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
    should.exists(result)
    result.should.equal(7.5)
    done()
  })
  // it('wbcHighRange - multiplyBy(1.25, 1)', done => {
  //   const pageDataKey = 'hematology'
  //   const targetKey = 'wbcHighRange'
  //   const srcValues = { wbcEstimate: 10}
  //   const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   should.exists(result)
  //   result.should.equal(12.5)
  //   done()
  // })
  // it('invalid srouce value type wbcLowRange - multiplyBy(0.75)', () => {
  //   const pageDataKey = 'hematology'
  //   const targetKey = 'wbcLowRange'
  //   const srcValues = { wbcEstimate: 'foo'}
  //   should.throws( () => {
  //     ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   })
  // })
  //
  // it('invalid calc key should throw', () => {
  //   // export function ehrCalculateProperty (pageDataKey, targetKey, srcValues) {
  //   const pageDataKey = 'hematology'
  //   const targetKey = 'badKey'
  //   const srcValues = {}
  //   should.throws( () => {
  //     ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   })
  // })
  //
  // it('glasgowCalculation - sum', done => {
  //   const pageDataKey = 'neurological'
  //   const targetKey = 'glasgowCalculation'
  //   const srcValues = { eyeOpening: '2=foo', verbalResponse: '1=bar', bestMotorResponse: '3=bestMotorResponse'}
  //   const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   should.exists(result)
  //   result.should.equal(6)
  //   done()
  // })
  //
  // it('invalid combo source values - sum', done => {
  //   const pageDataKey = 'neurological'
  //   const targetKey = 'glasgowCalculation'
  //   const srcValues = { eyeOpening: 'bar=foo', verbalResponse: '1=bar', bestMotorResponse: '3=bestMotorResponse'}
  //   should.throws( () => {
  //     ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   })
  //   done()
  // })
  //
  // it('missing source value', done => {
  //   const pageDataKey = 'neurological'
  //   const targetKey = 'glasgowCalculation'
  //   const srcValues = { eyeOpening: '2=foo', verbalResponse: '1=bar', /* bestMotorResponse: '3=bestMotorResponse'*/}
  //   const result = ehrCalculateProperty (pageDataKey, targetKey, srcValues)
  //   // console.log('missing source value should skip the missing source and sum the rest', result)
  //   should.exists(result)
  //   result.should.equal(3)
  //   done()
  // })

})
