import { options } from './vitalChart'

const POINT_TYPES = {
  POINT: 'point',
  DOWN_CHEVRON: 'downChevron',
  UP_CHEVRON: 'upChevron',
  TEXT: 'text'
}

const vitalRanges = {
  bloodPressure: { min: 40, max: 190, normal: { systolic: [90, 130], diastolic: [60, 85] } },
  oxygenSaturation: { min: 50, max: 100 },
  pulseRate: { min: 30, max: 140, normal: { adult: [59, 99] } },
  respiratory: { min: 5, max: 40 },
  temperature: { min: 28, max: 42 }
}

let lastDay = 0
let lastTime = 8
let cnt = 0

export default class VitalChart {
  addData(table) {
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

  getTemperature(table) {
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
          { spv: max, clr: 'red' },
          { spv: 40, clr: 'rgb(200,100,100)' },
          { spv: 38, lw: 0.5, clr: 'rgb(200,100,100)' },
          { spv: 37, clr: 'rgb(100,100,100)' },
          { spv: 36, clr: 'rgb(100,100,100)' },
          { spv: 35, clr: 'rgb(100,100,100)' },
          { spv: 34, clr: 'rgb(100,100,100)' },
          { spv: 32.5, lw: 0.5, clr: 'rgb(100,100,200)' },
          { spv: 30, clr: 'blue' },
          { spv: min, clr: 'blue' }
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

  getDates(table) {
    let values = table.map(element => {
      return `Day ${element.day}\n${element.time}:00`
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

  getBloodPressure(table) {
    let v1 = [],
      v2 = [],
      v3 = []
    table.forEach(element => {
      let pointFillColour = options.pointFillColour
      let v = element
      if (v.systolic < 90 || v.diastolic < 60) {
        pointFillColour = options.pointLowColour
      }
      if (v.systolic > 130 || v.diastolic > 85) {
        pointFillColour = options.pointMediumColour
      }
      if (v.systolic >= 140 || v.diastolic >= 90) {
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
    let min = vitalRanges.bloodPressure.min
    let max = vitalRanges.bloodPressure.max
    let chartData = {
      label: 'Blood pressure and rate',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: (function() {
          // step by 10's
          let pts = []
          for (let i = max; i >= min; i -= 10) {
            pts.push({ spv: i })
          }
          return pts
        })()
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

  getRespiratory(table) {
    let min = vitalRanges.respiratory.min
    let max = vitalRanges.respiratory.max
    let values = table.map(element => {
      return element.respirationRate
    })
    let chartData = {
      label: 'Respiratory rate',
      labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: max, clr: 'red' },
          { spv: 40, clr: 'rgb(200,100,100)' },
          { spv: 35, clr: 'rgb(200,100,100)' },
          { spv: 30, clr: 'rgb(100,100,100)' },
          { spv: 25, clr: 'rgb(100,100,100)' },
          { spv: 20, clr: 'rgb(100,100,100)' },
          { spv: 15, clr: 'rgb(100,100,100)' },
          { spv: 10, clr: 'rgb(100,100,200)' },
          { spv: min, clr: 'blue' }
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

  getOxygen(table) {
    let values = table.map(element => {
      return `${element.oxygenSaturation}\nRA\n${element.flowRate}LPM`
    })
    let chartData = {
      label: 'Oxygen saturation',
      chartType: POINT_TYPES.TEXT,
      noYAxisGrid: true,
      // noYAxisLabel: false,
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
}

const helper = {
  round_number: function(num, dec) {
    return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
  },
  random: function(min, max, decimals) {
    // min and max included
    decimals = decimals || 0
    let val = Math.random() * (max - min + 1) + min
    val = decimals > 0 ? helper.round_number(val, decimals) : Math.floor(val)
    return val
  }
}
