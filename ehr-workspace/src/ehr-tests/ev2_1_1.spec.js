import EhrDataModel from '../ehr-definitions/EhrDataModel'
import should from 'should'
import ehrInput from '../resources/ev2_1_1_input.json'
import { updateMedicationRoute } from '../ehr-definitions/med-definitions/med-ehrData-upgrade-utils'

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
    const updatedData = updateMedicationRoute(model, {})
    should.exists(updatedData)
    validate(updatedData)
  })

  // update this test whenever the current version changes
  it('test model updates to lastest which is currently ev2.2.0', () => {
    const model = new EhrDataModel(ehrInput)
    const updatedData = model.ehrData
    should.exists(updatedData)
    updatedData.should.have.property('meta')
    updatedData.meta.should.have.property('ehrVersion')
    const version = model.ehrVersion
    version.major.should.be.greaterThanOrEqual(2, 'version major 2')
    version.minor.should.be.greaterThanOrEqual(2, 'version minor 2')
    version.patch.should.be.greaterThanOrEqual(0, 'version patch 0')
    validate(updatedData)
  })
})
