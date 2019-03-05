import MedOrder from '../../src/inside/components/mar/medOrder-entity'
var should = require('should')

const FIRST_MED = 'asa'
let sample = getSample()
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

  it('MedOrder properties', () => {
    let mar = new MedOrder('asa')
    should.exist(mar)
    mar.should.have.property('medication')
    mar.medication.should.be.equal('asa')
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
    // first.medication.should.be.equal('prob')
  })

})

function getSample() {
  return {
    medicationOrders: {
      table:
        [
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: FIRST_MED,
            dose: '10',
            route: 'oral',
            scheduleType: 'scheduled',
            breakfast: true,
            midmorning: true,
            lunch: true,
            midafternoon: true,
            dinner: true,
            bedtime: true,
            notes: 'Some notes about the medication'
          },
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: 'ASA',
            dose: '100mg',
            route: 'oral',
            scheduleType: 'scheduled',
            breakfast: true,
            lunch: true,
            dinner: true,
            notes: 'Notes about ASA'
          },
          {
            name: 'Jane',
            profession: 'Doctor',
            day: '0',
            time: '1',
            medication: 'Metform',
            dose: '23mg',
            route: 'oral',
            scheduleType: 'scheduled',
            breakfast: true,
            lunch: true,
            notes: 'Notes about Metform',
            midafternoon: true,
            bedtime: true
          }
        ]
    }
  }
}