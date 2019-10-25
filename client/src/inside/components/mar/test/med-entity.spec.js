import MedOrder from '../../mar/med-entity'
import { getMedOrderPageDataSample, SAMPLE1_MED } from './med-test-util'
import should from 'should'

const FIRST_MED = SAMPLE1_MED
let sample = getMedOrderPageDataSample()
let sampleList = sample.medicationOrders.table


describe('MedOrder', () => {
  it('MedOrder', () => {
    let mar = new MedOrder()
    should.exist(mar)
  })

  it('sampleList', () => {
    should.exist(sampleList)
    should(sampleList).be.array
    sampleList.should.have.length(3)
    let s1 = sampleList[0]
    s1.should.have.property('medication')
    s1.medication.should.equal(FIRST_MED)
  })

  it('MedOrder list', () => {
    let s1 = sampleList[0]
    let list = sampleList.map(sample => new MedOrder(sample))
    should.exist(list)
    list.should.have.length(sampleList.length)
    let first = list[0]
    should.exist(first)
    should(first).instanceof(MedOrder)
    first.should.have.property('medication')
    first.medication.should.be.equal(s1.medication)
    first.route.should.be.equal(s1.route)
    first.notes.should.be.equal(s1.notes)
    first.isScheduled('breakfast')
  })

  it('MedOrder medOrderAsTextLine', () => {
    let s1 = sampleList[0]
    let med = new MedOrder(s1)
    should.exist(med)
    let str
    str = MedOrder.medOrderAsTextLine(med, 30)
    should.exist(str)
    let invalidObj = function () {}
    console.log('EXPECT TO SEE ERROR IN NEXT LINE')
    str = MedOrder.medOrderAsTextLine(invalidObj, 30)
    should.exist(str)
    str.should.equal('error')
  })
})

