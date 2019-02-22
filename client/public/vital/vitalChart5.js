/*
var oldheight = 200
var maxT = 40
var minT = 29
var oldvScale = oldheight / (maxT - minT)
var dataSet = {
  data: [34.8, 37.3, 39, 35, 40.5, 29.9, 30]
}
var gridX = {
  steps: dataSet.data.length,
  stepSize: 75
}
var gridY = {
  steps: maxT - minT,
  stepSize: 150 / (maxT - minT)
}
*/

function doSomething() {}

const POINT_TYPES = { POINT: 'point', DOWN_CHEVRON: 'downChevron', UP_CHEVRON: 'upChevron', TEXT: 'text' }

let options = {
  pointColour: '#222',
  pointMediumColour: 'orange',
  pointHighColour: 'red',
  pointLowColour: 'blue',
  pointRadius: 5,
  pointLabelFont: '16px Helvetica',
  pointFillColour: '#222',
  invalidMaxFontColour: '#F00',
  axisLineWidth: 0.2,
  axisLineColour: '#333',
  labelOffset: 20, // offset from left edge of canvas
  yLabelOffset: 30, // offset from left edge of canvas
  yAxisLabelColour: '#222',
  yAxisLabelFont: '16px Helvetica'
}

function createDates() {
  let ht = 100
  let chartData = {
    chartType: POINT_TYPES.TEXT,
    originY: 0,
    height: ht,
    noLabel: true,
    gridX: {
      steps: 10, // need to compute this based on values === values.length
      stepSize: 75
    },
    dataSet: [
      {
        label: 'Systolic',
        pointStyle: POINT_TYPES.TEXT,
        pointLabelFont: options.pointLabelFont,
        values:['A','B']
      }
    ]
  }
  return chartData
}

function createBloodPressure() {
  let values = [
    { systolic: 120, diastolic: 80, pulse: 70 }, //normal
    { systolic: 90, diastolic: 80, pulse: 60 }, // low
    { systolic: 130, diastolic: 80, pulse: 70 }, // per-high
    { systolic: 150, diastolic: 85, pulse: 70 }, // high
    { systolic: 130, diastolic: 91, pulse: 70 } // high
  ]
  function loadData(chartData) {
    let v1 = [],
      v2 = [],
      v3 = []
    values.forEach(v => {
      let pointColor = options.pointColour
      if (v.systolic <= 90 || v.diastolic <= 60) {
        pointColor = options.pointLowColour
      }
      if (v.systolic >= 130 || v.diastolic >= 85) {
        pointColor = options.pointMediumColour
      }
      if (v.systolic >= 140 || v.diastolic >= 90) {
        pointColor = options.pointHighColour
      }
      v1.push({value: v.systolic, pointColor: pointColor})
      v2.push({value: v.diastolic, pointColor: pointColor})
      v3.push({value: v.pulse, pointColor: pointColor})
    })
    chartData.dataSet[0].values = v1
    chartData.dataSet[1].values = v2
    chartData.dataSet[2].values = v3
  }
  /*
https://en.wikipedia.org/wiki/Blood_pressure

From https://en.wikipedia.org/wiki/Pulse  pulse rate ranges from 39 to 149
   */
  let min = 40
  let max = 190
  let ht = 300
  let vScale = ht / (max - min)
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Blood pressure and rate',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    dMin: min,
    dMax: max,
    vScale: vScale,
    gridY: {
      scalePoints: (function() {
        let pts = []
        for(let i=max; i >= min; i -= 10) {
          pts.push({spv:i})
        }
        return pts
      })()
    },
    gridX: {
      steps: 10, // need to compute this based on values === values.length
      stepSize: 75
    },
    dataSet: [
      {
        label: 'Systolic',
        pointStyle: POINT_TYPES.DOWN_CHEVRON,
        pointRadius: options.pointRadius,
        pointColor: options.pointColour,
        pointLabelFont: options.pointLabelFont,
        pointFillColour: options.pointFillColour,
        invalidMaxFontColour: options.outOfBoundPointFontColour
      },
      {
        label: 'Diastolic',
        pointStyle: POINT_TYPES.UP_CHEVRON,
        pointRadius: options.pointRadius,
        pointColor: options.pointColour,
        pointLabelFont: options.pointLabelFont,
        pointFillColour: options.pointFillColour,
        invalidMaxFontColour: options.outOfBoundPointFontColour
      },
      {
        label: 'Pulse rate',
        pointStyle: POINT_TYPES.POINT,
        pointRadius: options.pointRadius,
        pointColor: options.pointColour,
        pointLabelFont: options.pointLabelFont,
        pointFillColour: options.pointFillColour,
        invalidMaxFontColour: options.outOfBoundPointFontColour
      }
    ]
  }

  loadData(chartData)
  return chartData
}

function createTemperature() {
  let min = 28
  let max = 42
  let ht = 150
  let vScale = ht / (max - min)
  let values = [34, 36, 40, 28, 42.1, 27.9, 55]
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Temperature',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    dMin: min,
    dMax: max,
    vScale: vScale,
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
      steps: values.length,
      stepSize: 75
    },
    dataSet: [
      {
        pointStyle: POINT_TYPES.POINT,
        pointRadius: options.pointRadius,
        pointColor: options.pointColour,
        pointLabelFont: options.pointLabelFont,
        pointFillColour: options.pointFillColour,
        invalidMaxFontColour: options.outOfBoundPointFontColour,
        values: values
      }
    ]
  }
  return chartData
}

function createRespiratory() {
  let min = 5
  let max = 40
  let ht = 150
  let vScale = ht / (max - min)
  let values = [40, 36, 42, 13, 21, 31, 30]
  let chartData = {
    originY: 100,
    height: ht,
    label: 'Respiratory rate',
    labelOffsetFromBottom: 20, // vertical adjust label relative to chart bottom
    dMin: min,
    dMax: max,
    vScale: vScale,
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
      steps: values.length,
      stepSize: 75
    },
    dataSet: [
      {
        pointStyle: POINT_TYPES.POINT,
        pointRadius: options.pointRadius,
        pointColor: options.pointColour,
        pointLabelFont: options.pointLabelFont,
        pointFillColour: options.pointFillColour,
        invalidMaxFontColour: options.outOfBoundPointFontColour,
        values: values
      }
    ]
  }
  return chartData
}

/**
 * This is the main public entry point
 */
function vitalChartLoad() {
  var chartCanvas = document.getElementById('chartCanvas').getContext('2d')
  var axisCanvas = document.getElementById('axisCanvas').getContext('2d')

  let chartData
  chartData = createDates()
  chartData.originY = 0
  _drawChart(chartCanvas, axisCanvas, chartData)

  chartData = createTemperature()
  chartData.originY = 150
  _drawChart(chartCanvas, axisCanvas, chartData)

  chartData = createBloodPressure()
  chartData.originY = 300
  _drawChart(chartCanvas, axisCanvas, chartData)

  chartData = createRespiratory()
  chartData.originY = 700
  _drawChart(chartCanvas, axisCanvas, chartData)
}

function _drawChart(chartCanvas, axisCanvas, chartData) {
  if (chartData.chartType !== POINT_TYPES.TEXT) {
    _drawYGrid(chartCanvas, chartData)
    _yAxisLabel(axisCanvas, chartData)
    _drawYLabels(axisCanvas, chartData)
  }

  _drawXGrid(chartCanvas, chartData)
  for (let i = 0; i < chartData.dataSet.length; i++) {
    _drawData(chartCanvas, chartData, i)
  }
}

function _drawData(context, data, dataSetIndex) {
  let dataSet = data.dataSet[dataSetIndex]
  let pointRadius = dataSet.pointRadius
  let pointStyle = dataSet.pointStyle
  let textOnly = data.chartType === POINT_TYPES.TEXT
  let chevron = POINT_TYPES.DOWN_CHEVRON === pointStyle || POINT_TYPES.UP_CHEVRON === pointStyle
  let values = dataSet.values
  let originY = data.originY
  let min = data.dMin
  let max = data.dMax
  let vScale = data.vScale
  let height = data.height
  let gridX = data.gridX
  let labelOffsetX = 10
  let pointLabelFont = dataSet.pointLabelFont
  let pointColour = dataSet.pointColour
  let pointFillColour = dataSet.pointFillColour
  let outOfBoundPointFontColour = dataSet.invalidMaxFontColour
  context.save()
  for (let i = 0; i < values.length; i++) {
    let x = (i + 1) * gridX.stepSize - gridX.stepSize / 2
    let value = values[i]
    if(textOnly) {
      let y = originY + height
      console.log('text', value, x, y)
      context.font = pointLabelFont
      context.fillStyle = pointFillColour
      context.fillText(value, x, y)
    } else {
      if (typeof value === 'object') {
        pointColour = value.pointColor || dataSet.pointColour
        pointLabelFont = value.pointLabelFont || dataSet.pointLabelFont
        pointFillColour = value.pointFillColour || dataSet.pointFillColour
        outOfBoundPointFontColour =
          value.invalidMaxFontColour || dataSet.invalidMaxFontColour
        value = value.value
      }
      if (min <= value && value <= max) {
        let y = originY + height - (value - min) * vScale
        if (chevron) {
          drawChevron(context, x, y, pointStyle, pointColour)
        } else {
          // default to POINT_TYPES.POINT
          context.beginPath()
          context.fillStyle = pointColour
          context.arc(x, y, pointRadius, 0, 2 * Math.PI)
          context.fill()
        }
        context.font = pointLabelFont
        context.fillStyle = pointFillColour
        context.fillText(value, x + labelOffsetX, y)
      } else {
        let yMin = originY + height
        let yMax = originY + height - (max - min) * vScale
        let y = value < min ? yMin : yMax
        // console.log('out of bounds', t, y, min, max)
        context.fillStyle = outOfBoundPointFontColour
        context.fillText(value, x, y)
      }
    }
  }
  context.restore()
}

function _drawYLabels(context, data) {
  let originY = data.originY
  let gridY = data.gridY
  let min = data.dMin
  let vScale = data.vScale
  let height = data.height
  context.save()
  for (let i = 0; i < gridY.scalePoints.length; i++) {
    let scale = gridY.scalePoints[i]
    let v = scale.spv
    let y = originY + height - (v - min) * vScale
    context.beginPath()
    let x = options.yLabelOffset
    context.fillStyle = scale.clr || options.defaultAxisLineColour
    context.fillText(v, x, y)
    context.stroke()
  }
  context.restore()
}

function _drawYGrid(context, data) {
  let originY = data.originY
  let min = data.dMin
  let gridY = data.gridY
  let vScale = data.vScale
  let height = data.height
  let x = 0
  let width = context.canvas.width
  context.save()
  for (let i = 0; i < gridY.scalePoints.length; i++) {
    let scale = gridY.scalePoints[i]
    let v = scale.spv
    let y = originY + height - (v - min) * vScale
    context.beginPath()
    context.lineWidth = scale.lw || options.defaultAxisLineWidth
    context.strokeStyle = scale.clr || options.defaultAxisLineColour
    context.moveTo(x, y)
    context.lineTo(width, y)
    context.stroke()
  }
  context.restore()
}

function _drawXGrid(context, data) {
  let originY = data.originY
  let height = data.height
  let gridX = data.gridX
  context.save()
  context.beginPath()
  context.lineWidth = options.defaultAxisLineWidth
  for (var i = 0; i < gridX.steps; i++) {
    let x = (i + 1) * gridX.stepSize
    let y1 = originY
    let y2 = originY + height
    context.moveTo(x, y1)
    context.lineTo(x, y2)
  }
  context.stroke()
  context.restore()
}

function _yAxisLabel(context, data) {
  let originY = data.originY
  let height = data.height
  let label = data.label
  let labelX = data.labelOffsetFromBottom
  let x = options.labelOffset
  let y = originY + height // bottom of chart
  context.save()
  context.translate(x, y)
  context.rotate(-Math.PI / 2)
  context.textAlign = 'left'
  context.font = options.yAxisLabelFont
  context.fillStyle = options.yAxisLabelColour
  context.fillText(label, labelX, 0)
  context.restore()
}

function drawChevron(ctx, pointX, pointY, direction, colour) {
  const chevronLength = 10
  const lineWidth = 2
  // draw a V rotated as per angle
  let angle
  // to compute angle based on imaginary line drawn vertically in the center of the V
  // angle = Math.atan2(toy - fromy, tox - fromx)
  // upward angle
  if (direction === POINT_TYPES.UP_CHEVRON) {
    angle = Math.atan2(-1, 0)
  } else if (direction === POINT_TYPES.DOWN_CHEVRON) {
    // downward angle
    angle = Math.atan2(1, 0)
  } else {
    console.error('Must provide up or down direction to draw chevron')
  }
  let dx, dy
  // The larger the number the tighter the V
  const SPLAY = 5
  let slope1 = angle - Math.PI / SPLAY
  let slope2 = angle + Math.PI / SPLAY
  ctx.save()
  ctx.strokeStyle = colour
  ctx.lineWidth = lineWidth
  ctx.beginPath()
  // move to top left of V
  dx = pointX - chevronLength * Math.cos(slope1)
  dy = pointY - chevronLength * Math.sin(slope1)
  ctx.moveTo(dx, dy)
  // draw to bottom of V
  dx = pointX
  dy = pointY
  ctx.lineTo(dx, dy)
  // draw to top right of V
  dx = pointX - chevronLength * Math.cos(slope2)
  dy = pointY - chevronLength * Math.sin(slope2)
  ctx.lineTo(dx, dy)
  ctx.stroke()
  ctx.restore()
}
