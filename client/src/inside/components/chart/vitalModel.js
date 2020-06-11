import { options } from './vitalChart'
import { POINT_TYPES } from './vitalChart'

const vitalRanges = {
  bloodPressure: { min: 25, max: 225, normal: { systolic: [90, 130, 140], diastolic: [60, 85, 90] } },
  oxygenSaturation: { min: 50, max: 100 },
  pulseRate: { min: 30, max: 140, normal: { adult: [59, 99] } },
  respiratory: { min: 6, max: 42 },
  temperature: { min: 35, max: 40 },
  cvp: { min: 0, max: 20 }
}

let lastDay = 0
let lastTime = 8
let cnt = 0

export default class VitalModel {
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

  getDates (table) {
    let values = table.map(element => {
      let day = element.day || 'x'
      let time = element.time || 'xx'
      return `Day ${day}\n${time}:00`
    })
    let chartData = {
      chartType: POINT_TYPES.TEXT,
      noYAxisGrid: true,
      noYAxisLabel: true,
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.TEXT,
          pointLabelFont: options.pointLabelFont,
          values: values
        }
      ]
    }
    return chartData
  }

  getTemperature (table) {
    let values = table.map(element => {
      return element.temperature
    })
    let min = vitalRanges.temperature.min
    let max = vitalRanges.temperature.max
    let chartData = {
      label: 'Temperature',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: 40, clr: 'red' },
          { spv: 39.5, clr: 'rgb(200,100,100)' },
          { spv: 39, clr: 'rgb(200,100,100)' },
          { spv: 38.5, clr: 'rgb(200,100,100)' },
          { spv: 38, clr: 'rgb(200,100,100)' },
          { spv: 37.5, clr: 'rgb(200,100,100)' },
          { spv: 37, clr: 'rgb(200,100,100)' },
          { spv: 36.5, clr: 'rgb(200,100,100)' },
          { spv: 36, clr: 'rgb(200,100,100)' },
          { spv: 35.5, clr: 'rgb(100,100,100)' },
          { spv: 35, clr: 'blue' },
        ]
      },
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.X,
          pointFillColour: options.pointFillColour,
          values: values
        }
      ]
    }
    return chartData
  }

  getBloodPressure (table) {
    let v1 = [],
      v2 = [],
      v3 = []
    let bloodPressure = vitalRanges.bloodPressure
    let ns = bloodPressure.normal.systolic
    let dia = bloodPressure.normal.diastolic
    let systolic = {min: ns[0], high1: ns[1], high2: ns[2] }
    let diastolic = {min: dia[0], high1: dia[1], high2 : dia[2]}
    table.forEach(element => {
      let pointFillColour = options.pointFillColour
      let v = element
      if (v.systolic < systolic.min || v.diastolic < diastolic.min) {
        pointFillColour = options.pointLowColour
      }
      if (v.systolic > systolic.high1 || v.diastolic > diastolic.high1) {
        pointFillColour = options.pointMediumColour
      }
      if (v.systolic >= systolic.high2 || v.diastolic >= diastolic.high2) {
        pointFillColour = options.pointHighColour
      }
      v1.push({ value: v.systolic, pointFillColour: pointFillColour })
      v2.push({ value: v.diastolic, pointFillColour: pointFillColour })
      v3.push({ value: v.rate, pointFillColour: pointFillColour })
    })

    /*
    https://en.wikipedia.org/wiki/Blood_pressure
    From https://en.wikipedia.org/wiki/Pulse  pulse rate ranges from 39 to 149
    */
    let min = bloodPressure.min
    let max = bloodPressure.max
    let chartData = {
      label: 'Blood pressure/pulse',
      labelOffsetFromBottom: 18, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: 225 },
          { spv: 200 },
          { spv: 175 },          
          { spv: 150, dotted: [2, 6] },
          { spv: 125, dotted: [2, 6] },
          { spv: 100, lw: 2, dotted: [2, 6] },
          { spv: 75, dotted: [2, 6] },
          { spv: 50, dotted: [2, 6] },
          { spv: 25 },
        ]
      },


      gridX: {
        steps: v1.length
      },
      dataSet: [
        {
          label: 'Systolic',
          pointStyle: POINT_TYPES.DOWN_CHEVRON,
          values: v1
        },
        {
          label: 'Diastolic',
          pointStyle: POINT_TYPES.UP_CHEVRON,
          values: v2
        },
        {
          label: 'Pulse rate',
          pointStyle: POINT_TYPES.POINT,
          labelOffsetX: -30,
          values: v3
        }
      ]
    }
    return chartData
  }

  getRespiratory (table) {
    let min = vitalRanges.respiratory.min
    let max = vitalRanges.respiratory.max
    let values = table.map(element => {
      return element.respirationRate
    })
    let chartData = {
      label: 'Respiratory rate',
      labelOffsetFromBottom: 15, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: 42 },
          { spv: 38 },
          { spv: 34 },          
          { spv: 30 },
          { spv: 26 },
          { spv: 22 },
          { spv: 18 },
          { spv: 14 },
          { spv: 10 },
          { spv: 6 },
        ]
      },
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.POINT,
          values: values
        }
      ]
    }
    return chartData
  }

  getOxygen (table) {
    let values = table.map(element => {
      let flow = element.flowRate
      let sat = element.oxygenSaturation
      let txt = ''
      txt += sat ? `${sat}\nRA` : ''
      txt += flow ? `\n${flow}LPM` : ''
      return txt
    })
    let chartData = {
      label: 'Oxygen saturation',
      noYAxisGrid: true,
      noYAxisLabel: false,
      gridY: {
        textMultiLineLabel: 'SP0\nMode\nLPM'
      },
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          values: values
        }
      ]
    }
    return chartData
  }

  getCVP (table) {
    let min = vitalRanges.cvp.min
    let max = vitalRanges.cvp.max
    const values = table.map(el => el.cvp)
    const steps = [...Array(max + 1).keys()]
    let scalePoints = []
    steps.map(item => {
      // Potential enhancement: only get item if item % 3 === 0
      if(item >= min)
        scalePoints.push({ spv: item }) 
    })
    const chartData = {
      label: 'CVP (Central Venous Pressure)',
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints
      },
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.POINT,
          values
        }
      ]
    }
    return chartData
  }
}

const helper = {
  round_number: function (num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
  },
  random: function (min, max, decimals) {
    // min and max included
    decimals = decimals || 0
    let val = Math.random() * (max - min + 1) + min
    val = decimals > 0 ? helper.round_number(val, decimals) : Math.floor(val)
    return val
  }
}
