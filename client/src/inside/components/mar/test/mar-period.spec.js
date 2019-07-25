import PeriodEntity from '../../mar/period-entity'
import { getSampleMedOrderEntity } from './med-test-util'
import should from 'should'

let key = 'breakfast'
let name = 'At breakfast with food'
describe('PeriodEntity', () => {
  it('PeriodEntity', () => {
    let obj = new PeriodEntity(key, name)
    should.exist(obj)
    obj.should.have.property('medsList')
    obj.should.have.property('hasMar')
    obj.hasMar().should.equal(false)
    obj.should.have.property('hasMedications')
    obj.hasMedications().should.equal(false)
    obj.should.have.property('needsMar')
    obj.needsMar().should.equal(false)
    let med = getSampleMedOrderEntity()
    obj.should.have.property('addMedication')
    obj.addMedication(med)
    obj.hasMedications().should.equal(true)
    obj.needsMar().should.equal(true)


  })
})

