import Vitals from '../../src/inside/components/Vitals.vue'
import VitalModel from '../../src/helpers/vitalModel'
import { shallowMount } from '@vue/test-utils'

describe.skip('Vitals Model', () => {
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
/*
  addData (table) {
    cnt++
    lastTime += 4
    if (lastTime > 24) {
      lastTime -= 24
      lastDay++
    }
    let diastolic, systolic, pulseRate
    if (cnt <= 3) {
      let normal = vitalRanges.bloodPressure.normal
      diastolic = helper.random(normal.diastolic[0], normal.diastolic[1])
      systolic = helper.random(normal.systolic[0], normal.systolic[1])
      let normalPulse = vitalRanges.pulseRate.normal.adult
      pulseRate = helper.random(normalPulse[0], normalPulse[1])
    } else {
      diastolic = helper.random(vitalRanges.bloodPressure.min, 100)
      systolic = helper.random(diastolic, vitalRanges.bloodPressure.max)
      pulseRate = helper.random(vitalRanges.pulseRate.min, vitalRanges.pulseRate.max)
    }
    // random(diastolic, vitalRanges.bloodPressure.max)
    table.push({
      name: 'Test',
      day: lastDay,
      time: lastTime,
      temperature: helper.random(
        vitalRanges.temperature.min - 1,
        vitalRanges.temperature.max + 1,
        1
      ),
      profession: 'nurse',
      source: 'axilla',
      rate: pulseRate,
      rhythm: 'regular',
      strength: 'strong',
      systolic: systolic,
      diastolic: diastolic,
      patientPosition: 'lying',
      respirationRate: helper.random(vitalRanges.respiratory.min, vitalRanges.respiratory.max),
      respirationEffort: 'easy',
      oxygenSaturation: helper.random(
        vitalRanges.oxygenSaturation.min,
        vitalRanges.oxygenSaturation.max
      ),
      oxygenMode: 'nasal prongs',
      flowRate: helper.random(0, 5)
    })
  }

 */
describe.skip('Vitals.vue', () => {
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
