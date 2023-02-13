import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import { updateMedicationRoute } from '../ehr-definitions/ehr-data-model-utils'
import ehrInput from '../resources/ev2_1_1_input.json'
import ehrWithOldTimeVals from '../resources/old-visit-times-input.json'
import expectedEhr from '../resources/old-visit-times-expected.json'

/*

    Code below is very dependent on the input. Expects the first and last medication orders to be updated.

 */
const pageKey= 'medicationOrders'
const tableKey= 'table'
const elementKey = 'route'
// const oldVal = 'Inhalation'
const newVal = 'Inhaler'

describe( 'EhrData updates to ev2.1.1', () => {

  function validate (updatedData) {
    updatedData.should.have.property(pageKey)
    updatedData[pageKey].should.have.property(tableKey)
    const table = updatedData[pageKey][tableKey]
    table.length.should.equal(3)
    const row1 = table[0]
    row1.should.have.property(elementKey)
    row1[elementKey].should.equal(newVal)
    const row3 = table[2]
    row3.should.have.property(elementKey)
    row3[elementKey].should.equal(newVal)
  }

  it('updateMedicationRoute', () => {
    const model = new EhrDataModel(ehrInput)
    const updatedData = updateMedicationRoute(model)
    should.exists(updatedData)
    validate(updatedData)
  })

  it('update to ev2.1.1', () => {
    const model = new EhrDataModel(ehrInput)
    const updatedData = model.ehrData
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    const version = model.metaEhrVersion
    version.major.should.be.greaterThanOrEqual(2)
    version.minor.should.be.greaterThanOrEqual(1)
    version.patch.should.be.greaterThanOrEqual(1)
    validate(updatedData)
  })
})
