import { options, POINT_TYPES } from './vitalChart'
import { t18EhrText } from '@/helpers/ehr-t18'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'

const vitalRanges = {
  bloodPressure: { min: 25, max: 225, normal: { systolic: [90, 130, 140], diastolic: [60, 85, 90] } },
  oxygenSaturation: { min: 50, max: 100 },
  pulseRate: { min: 30, max: 140, normal: { adult: [59, 99] } },
  respiratory: { min: 6, max: 42 },
  temperature: { min: 35, max: 40 },
  bloodSugar: { min: 1, max: 11, normal: [4.1, 5.9] },
  cvp: { min: 0, max: 21 },
  pain: { min: 0, max: 10 }
}

export default class VitalModel {
  constructor (pageKey, tableKey) {
    this.pageKey = pageKey
    this.tableKey = tableKey
    this.ehrText = t18EhrText().customPages.vitals
  }

  getDates (table) {
    // console.log('-------------- getDates', this.tableKey, table)
    const dayKey = this.tableKey + '_day'
    const timeKey = this.tableKey + '_time'
    let values = table.map(element => {
      // console.log('-------------- getDates', this.tableKey, element)
      let day = element[dayKey] // sometimes the value is '0' or 0 both are valid
      day = isNaN(parseInt(day)) ? 'x' : day
      let time = element[timeKey] || 'xx'
      return `Day ${day}\n${time}`
    })
    return {
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
  }

  getTemperature (table) {
    let values = table.map(element => {
      return element.temperature
    })
    let min = vitalRanges.temperature.min
    let max = vitalRanges.temperature.max
    let chartData = {
      label: this.ehrText.temperature,
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
    let et = this.ehrText
    let v1 = [],
      v2 = [],
      v3 = []
    let bloodPressure = vitalRanges.bloodPressure
    let pulseRate = vitalRanges.pulseRate
    let ns = bloodPressure.normal.systolic
    let dia = bloodPressure.normal.diastolic
    let systolic = {min: ns[0], high1: ns[1], high2: ns[2] }
    let diastolic = {min: dia[0], high1: dia[1], high2 : dia[2]}
    table.forEach(element => {
      let pointFillColour = options.pointFillColour
      let v = element
      if (v.systolic < systolic.min) {
        pointFillColour = options.pointLowColour
      }
      if (v.systolic > systolic.high1) {
        pointFillColour = options.pointMediumColour
      }
      if (v.systolic >= systolic.high2) {
        pointFillColour = options.pointHighColour
      }
      v1.push({ value: v.systolic, pointFillColour: pointFillColour })

      pointFillColour = options.pointFillColour
      if (v.diastolic < diastolic.min) {
        pointFillColour = options.pointLowColour
      }
      if (v.diastolic > diastolic.high1) {
        pointFillColour = options.pointMediumColour
      }
      if (v.diastolic >= diastolic.high2) {
        pointFillColour = options.pointHighColour
      }
      v2.push({ value: v.diastolic, pointFillColour: pointFillColour })

      pointFillColour = options.pointFillColour
      if (v.rate > pulseRate.normal[1]) {
        pointFillColour = options.pointHighColour
      } else if (v.rate < pulseRate.normal[0]) {
        pointFillColour = options.pointLowColour
      }
      v3.push({ value: v.rate, pointFillColour: pointFillColour })
    })

    /*
    https://en.wikipedia.org/wiki/Blood_pressure
    From https://en.wikipedia.org/wiki/Pulse  pulse rate ranges from 39 to 149
    */
    let min = bloodPressure.min
    let max = bloodPressure.max
    let chartData = {
      label: et.bloodPressure,
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
          label: et.systolic,
          pointStyle: POINT_TYPES.DOWN_CHEVRON,
          values: v1
        },
        {
          label: et.diastolic,
          pointStyle: POINT_TYPES.UP_CHEVRON,
          values: v2
        },
        {
          label: et.pulseRate,
          pointStyle: POINT_TYPES.POINT,
          labelOffsetX: -30,
          values: v3
        }
      ]
    }
    return chartData
  }

  getBloodSugar (table) {
    let min = vitalRanges.bloodSugar.min
    let max = vitalRanges.bloodSugar.max
    const values = table.map(el => {
      const v = el.gluBloodSugar || el.bloodSugar  // element key in the new glucose table or the vitals table
      let pt = { value: v }
      pt.pointFillColour = v > 7.7 || v < 4.1 ? 'red' : undefined
      return pt
    })
    const steps = [...Array(max + 1).keys()]
    let scalePoints = []
    steps.map(item => {
      if(item >= min)
        scalePoints.push({ spv: item })
    })
    return {
      label: this.ehrText.bloodGlugose,
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: 11, clr: 'red' },
          { spv: 10, clr: 'red' },
          { spv: 9, clr: 'red' },
          { spv: 8, clr: 'red' },
          { spv: 7, clr: 'rgb(200,100,100)' },
          { spv: 6, clr: 'rgb(200,100,100)' },
          { spv: 5, dotted: [2, 6] },
          { spv: 4, dotted: [2, 6] },
          { spv: 3, clr: 'green' },
          { spv: 2, clr: 'green' },
          { spv: 1, clr: 'green' },
        ]
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
  }

  getGlucoseWhen (table) {
    let et = this.ehrText
    let values = table.map(element => {
      const eKey = 'gluWhen'
      const text = makeHumanTableCell(this.pageKey, eKey, 'select', element[eKey])
      return text.split(' ').join('\n')
    })
    let chartData = {
      label: et.oxygen,
      chartType: POINT_TYPES.TEXT,
      noYAxisGrid: true,
      noYAxisLabel: true,
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.TEXT,
          values: values
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
      label: this.ehrText.respiratory,
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
    let et = this.ehrText
    let values = table.map(element => {
      let flow = element.flowRate
      let sat = element.oxygenSaturation
      let txt = ''
      txt += sat ? `${sat}\nRA` : ''
      txt += flow ? `\n${flow}LPM` : ''
      return txt
    })
    let chartData = {
      label: et.oxygen,
      chartType: POINT_TYPES.TEXT,
      noYAxisGrid: true,
      noYAxisLabel: false,
      gridY: {
        textMultiLineLabel: [et.spo, et.mode, et.lpm].join('\n')
      },
      gridX: {
        steps: values.length
      },
      dataSet: [
        {
          pointStyle: POINT_TYPES.TEXT,
          values: values
        }
      ]
    }
    return chartData
  }

  getPain (table) {
    let min = vitalRanges.pain.min
    let max = vitalRanges.pain.max
    const values = table.map(el => {
      const v = el.painLevel
      let pt = { value: v }
      pt.pointFillColour = v >= 8 ? 'red' : undefined
      return pt
    })
    return {
      label: this.ehrText.pain,
      dMin: min,
      dMax: max,
      gridY: {
        scalePoints: [
          { spv: 10, clr: 'red' },
          { spv: 9, clr: 'red' },
          { spv: 8, clr: 'red' },
          { spv: 7, clr: 'rgb(200,100,100)' },
          { spv: 6, clr: 'rgb(200,100,100)' },
          { spv: 5, dotted: [2, 6] },
          { spv: 4, dotted: [2, 6] },
          { spv: 3, clr: 'green' },
          { spv: 2, clr: 'green' },
          { spv: 1, clr: 'green' },
        ]
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
  }


  getCVP (table) {
    let min = vitalRanges.cvp.min
    let max = vitalRanges.cvp.max
    const values = table.map(el => el.cvp)
    const steps = [...Array(max + 1).keys()]
    let scalePoints = []
    steps.map(item => {
      // Potential enhancement: only get item if item % 3 === 0
      if(item >= min && item % 3 === 0)
        scalePoints.push({ spv: item })
    })
    const chartData = {
      label: this.ehrText.cvp,
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
