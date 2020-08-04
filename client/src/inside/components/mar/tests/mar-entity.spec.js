import should from 'should'
import MarEntity from '../mar-entity'

const medications = [
  {
    name: 'Medication',
    profession: 'Profession',
    medication: 'ag-amitriptyline',
    dose: 'dose',
    route: 'Oral',
    scheduled: 'TID'
  },
]

const period = { 
  hour24: '12:00',
  medList: medications
}

const mockMarEntity = {
  whoAdministered: 'Who',
  day: 0,
  actualTime: '12:00',
  comment: 'Comment',
  medications

}

let marEntity

// const _beforeEach = () => {
//   marEntity = new MarEntity(mockMarEntity.who, mockMarEntity.currentDay, mockMarEntity.when, mockMarEntity.comment)
// }

describe('Test mar-entity', () => {
  it('create new mar-entity with medications Array', () => {
    marEntity = new MarEntity(Object.assign({}, {_data: mockMarEntity}))
    marEntity.whoAdministered.should.equal(mockMarEntity.whoAdministered)
    marEntity.day.should.equal(mockMarEntity.day)
    marEntity.actualTime.should.equal(mockMarEntity.actualTime)
    marEntity.comment.should.equal(mockMarEntity.comment)
    marEntity.medications.length.should.be.equal(medications.length)
  })
  
  it('validate medEntity', () => {
    const errors = marEntity.validate()
    errors.length.should.equal(0)
  })

  it('instantiate with MockMedEntity/period', () => {
    marEntity = new MarEntity(mockMarEntity.whoAdministered, mockMarEntity.day, mockMarEntity.actualTime, mockMarEntity.comment, period)
    marEntity.whoAdministered.should.equal(mockMarEntity.whoAdministered)
    marEntity.day.should.equal(mockMarEntity.day)
    marEntity.actualTime.should.equal(mockMarEntity.actualTime)
    marEntity.comment.should.equal(mockMarEntity.comment)
    marEntity.medications.length.should.equal(period.medList.length)
  })


  it('validate medEntity', () => {
    const errors = marEntity.validate()
    errors.length.should.equal(0)
  })

  it('asObjectForApi', () => {
    const obj = marEntity.asObjectForApi()
    const { whoAdministered, day, actualTime, comment } = mockMarEntity
    obj.whoAdministered.should.equal(whoAdministered)
    obj.day.should.equal(day)
    obj.actualTime.should.equal(actualTime)
    obj.comment.should.equal(comment)
    obj.medications.should.equal(period.medList)
  })

})
