const DEFAULT_FONT = '12px Source Sans Pro'
const DEFAULT_DATA_FONT = '11px Source Sans Pro'

const POINT_TYPES = {
  POINT: 'point',
  DOWN_CHEVRON: 'downChevron',
  UP_CHEVRON: 'upChevron',
  TEXT: 'text'
}

export const options = {
  pointFillColour: '#222',
  pointMediumColour: 'orange',
  pointHighColour: '#F00',
  pointLowColour: '#00F',
  invalidMaxFontColour: '#F00',
  invalidMinFontColour: '#00F',
  textValueColor: '#222',
  axisLineColour: '#333',
  yAxisLabelColour: '#222',

  gridXStepSize: 70,

  pointRadius: 5,
  pointLabelFont: DEFAULT_DATA_FONT,
  textValueFont: DEFAULT_FONT,
  yAxisLabelFont: DEFAULT_FONT,

  axisLineWidth: 0.2,

  labelOffsetX: 10,
  labelOffset: 20, // offset from left edge of canvas
  yLabelOffset: 30, // offset from left edge of canvas
  lineHeight: 16, // spaces drawn text
  textAlign: 'center'
}

export default class VitalChart {
  constructor(chartCanvas, axisCanvas) {
    this.chartCanvas = chartCanvas
    this.axisCanvas = axisCanvas
  }

  clear() {
    let chartContext = this.chartCanvas.getContext('2d')
    let axisContext = this.axisCanvas.getContext('2d')
    chartContext.clearRect(0, 0, this.chartCanvas.width, this.chartCanvas.height)
    axisContext.clearRect(0, 0, this.axisCanvas.width, this.axisCanvas.height)
  }

  drawChart(chartData, originY, height) {
    let chartContext = this.chartCanvas.getContext('2d')
    let axisContext = this.axisCanvas.getContext('2d')
    this._locateChart(chartData, originY, height)
    if (!chartData.noYAxisLabel) {
      this._yAxisLabel(axisContext, chartData)
    }
    if (!chartData.noYAxisGrid) {
      this._drawYGrid(chartContext, chartData)
      this._drawYLabels(axisContext, chartData)
    }
    this._drawXGrid(chartContext, chartData)
    for (let i = 0; i < chartData.dataSet.length; i++) {
      this._drawData(chartContext, chartData, i)
    }
  }

  /**
   * recompute the chart's origin and height and vertical scale factor.
   * @param chartData
   * @param originY
   * @param height
   * @return {*}
   * @private
   */
  _locateChart(chartData, originY, height) {
    chartData.originY = originY
    chartData.height = height
    let vScale = height / (chartData.dMax - chartData.dMin)
    chartData.vScale = vScale
    return chartData
  }

  /**
   *
   * @param context
   * @param values array of text that may contain newlines
   * @param originY
   * @param height
   * @param gridXStepSize
   * @private
   */
  _drawTextSeries(context, values, originY, height, gridXStepSize) {
    let dy = originY
    let lineHeight = lineHeight || options.lineHeight
    // approximately center text vertically
    let lnCnt = 0
    for (let i = 0; i < values.length; i++) {
      lnCnt = Math.max(lnCnt, values[i].split('\n').length)
    }
    let linesHt = lnCnt * lineHeight
    dy += height > linesHt ? (height - linesHt) / 2 : 0
    context.save()
    context.font = options.textValueFont
    context.fillStyle = options.textValueColor
    context.textAlign = options.textAlign
    gridXStepSize = gridXStepSize || options.gridXStepSize
    for (let i = 0; i < values.length; i++) {
      // position the point in the middle of two grid steps
      let x = (i + 1) * gridXStepSize - gridXStepSize / 2
      let y = dy
      let value = values[i]
      let lines = value.split('\n')
      for (let n = 0; n < lines.length; n++) {
        let line = lines[n]
        context.fillText(line, x, y)
        y += lineHeight
      }
    }
    context.restore()
  }

  _drawData(context, data, dataSetIndex) {
    let dataSet = data.dataSet[dataSetIndex]
    let pointRadius = dataSet.pointRadius || options.pointRadius
    let pointStyle = dataSet.pointStyle
    let textOnly = data.chartType === POINT_TYPES.TEXT
    let chevron = POINT_TYPES.DOWN_CHEVRON === pointStyle || POINT_TYPES.UP_CHEVRON === pointStyle
    let values = dataSet.values
    let originY = data.originY
    let min = data.dMin
    let max = data.dMax
    let vScale = data.vScale
    let height = data.height
    let gridXStepSize = options.gridXStepSize
    if (textOnly) {
      return this._drawTextSeries(context, values, originY, height, gridXStepSize)
    }
    let labelOffsetX = dataSet.labelOffsetX || options.labelOffsetX
    // properties that individual data points may over ride ....
    let pointLabelFont, pointLabelFontDefault
    let pointFillColour, pointFillColourDefault

    pointLabelFont = pointLabelFontDefault = dataSet.pointLabelFont || options.pointLabelFont
    pointFillColour = pointFillColourDefault = dataSet.pointFillColour || options.pointFillColour
    // begin drawing
    context.save()
    for (let i = 0; i < values.length; i++) {
      // position the point in the middle of two grid steps
      let x = (i + 1) * gridXStepSize - gridXStepSize / 2
      let value = values[i]
      if (typeof value === 'object') {
        // get per value properties
        pointLabelFont = value.pointLabelFont || pointLabelFontDefault
        pointFillColour = value.pointFillColour || pointFillColourDefault
        value = value.value
      }
      if (value < min) {
        let y = originY + height
        context.fillStyle = options.invalidMinFontColour
        context.fillText(value, x, y)
      } else if (value > max) {
        let y = originY + height - (max - min) * vScale
        context.fillStyle = options.invalidMaxFontColour
        context.fillText(value, x, y)
      } else {
        let y = originY + height - (value - min) * vScale
        if (chevron) {
          this._drawChevron(context, x, y, pointStyle, pointFillColour)
        } else {
          // default to POINT_TYPES.POINT
          this._drawPoint(context, x, y, pointFillColour, pointRadius)
        }
        this._drawPointLabel(context, value, x, y, labelOffsetX, pointFillColour, pointLabelFont)
      }
    }
    context.restore()
  }

  _drawYLabels(context, data) {
    let originY = data.originY
    let gridY = data.gridY
    let min = data.dMin
    let vScale = data.vScale
    let height = data.height
    let dx = options.yLabelOffset
    context.save()
    for (let i = 0; i < gridY.scalePoints.length; i++) {
      let scale = gridY.scalePoints[i]
      let v = scale.spv
      let y = originY + height - (v - min) * vScale
      context.beginPath()
      context.fillStyle = scale.clr || options.axisLineColour
      context.fillText(v, dx, y)
      context.stroke()
    }
    context.restore()
  }

  _drawYGrid(context, data) {
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
      context.lineWidth = scale.lw || options.axisLineWidth
      context.strokeStyle = scale.clr || options.axisLineColour
      context.moveTo(x, y)
      context.lineTo(width, y)
      context.stroke()
    }
    context.restore()
  }

  _drawXGrid(context, data) {
    let originY = data.originY
    let height = data.height
    let gridX = data.gridX
    let step = options.gridXStepSize
    let y1 = originY
    let y2 = originY + height
    context.save()
    context.lineWidth = options.axisLineWidth
    context.beginPath()
    for (let i = 0; i < gridX.steps; i++) {
      let x = (i + 1) * step
      context.moveTo(x, y1)
      context.lineTo(x, y2)
    }
    context.stroke()
    context.restore()
  }

  _yAxisLabel(context, data) {
    let originY = data.originY
    let height = data.height
    let label = data.label
    let x = options.labelOffset
    let y = originY + height // bottom of chart
    let width = context.measureText(label).width
    let labelOffset = width < height ? (height - width) / 2 : 0
    context.save()
    context.translate(x, y)
    context.rotate(-Math.PI / 2)
    context.textAlign = 'left'
    context.font = options.yAxisLabelFont
    context.fillStyle = options.yAxisLabelColour
    context.fillText(label, labelOffset, 0)
    context.restore()
  }

  _drawPointLabel(context, value, x, y, labelOffsetX, pointFillColour, pointLabelFont) {
    context.font = pointLabelFont
    context.fillStyle = pointFillColour
    context.fillText(value, x + labelOffsetX, y)
  }

  _drawPoint(context, x, y, pointFillColour, pointRadius) {
    context.beginPath()
    context.fillStyle = pointFillColour
    context.arc(x, y, pointRadius, 0, 2 * Math.PI)
    context.fill()
  }

  _drawChevron(ctx, pointX, pointY, direction, colour) {
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
}
