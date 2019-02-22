import Vitals from '../../src/inside/components/Vitals.vue'
import VitalModel from '../../src/helpers/vitalModel'
import { shallowMount } from '@vue/test-utils'

describe('Vitals Model', () => {
  let vitalsModel
  let table = []
  it('vital model', () => {
    let cnt = 10
    vitalsModel = new VitalModel()
    expect(vitalsModel).toBeTruthy()
    for (let i = 0; i < cnt; i++) {
      vitalsModel.addData(table)
    }
    expect(table.length).toBe(cnt)
    let temps = vitalsModel.getTemperature(table)
    let dates = vitalsModel.getDates(table)
    let blood = vitalsModel.getBloodPressure(table)
    let resps = vitalsModel.getRespiratory(table)
    let oxygn = vitalsModel.getOxygen(table)
    expect(temps.dataSet.length).toBe(1)
    expect(dates.dataSet.length).toBe(1)
    expect(blood.dataSet.length).toBe(3)
    expect(resps.dataSet.length).toBe(1)
    expect(oxygn.dataSet.length).toBe(1)
    expect(temps.dataSet[0].values.length).toBe(cnt)
    expect(dates.dataSet[0].values.length).toBe(cnt)
    expect(blood.dataSet[0].values.length).toBe(cnt)
    expect(resps.dataSet[0].values.length).toBe(cnt)
    expect(oxygn.dataSet[0].values.length).toBe(cnt)
  })
})

describe('Vitals.vue', () => {
  const wrapper = shallowMount(Vitals, {})
  it('renders Vitals', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('button click should increment the count', () => {
    expect(wrapper.vm.vitals.table.length).toBe(0)
    const button = wrapper.find('#addData')
    button.trigger('click')
    expect(wrapper.vm.vitals.table.length).toBe(1)
  })
})
