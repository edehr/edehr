// drawChart.js

// SAND BOX https://codesandbox.io/p/sandbox/table-with-auxiliary-data-rows-table-header-and-2-left-cols-are-sticky-8mkg4v?file=%2Fsrc%2Fcomponents%2FdrawChart.js%3A144%2C51

// Constants
const MARGIN = 50
const TICK_LENGTH = 5
const MAXSD = 3

// Function to calculate the start and end values for the left axis
function calculateAxisRange (values, average, stdDeviation) {
  // add a margin of one px per 50 points based on the max value
  let maxValue = Math.max(...values)
  let margin = Math.trunc(maxValue / 50 )
  const R = MAXSD * stdDeviation + margin
  let minValue = Math.min(...values, average - R)
  maxValue = Math.max(...values, average + R)
  return { min: minValue, max: maxValue }
}

function calculateAverage (controlData) {
  const sum = controlData.reduce((acc, curr) => acc + curr, 0)
  return sum / controlData.length
}

// Function to calculate the standard deviation
function calculateStandardDeviation (controlData, average) {
  const squaredDifferences = controlData.map(point => Math.pow(point - average, 2))
  const variance = squaredDifferences.reduce((acc, curr) => acc + curr, 0) / controlData.length
  return Math.sqrt(variance)
}

// Updated drawLines function to use the calculated average and standard deviation values
function drawLines (ctx, chartWidth, chartHeight, margin, minValue, scaleY, average, stdDeviation) {
  // Calculate the y-coordinates for the average line and standard deviation lines
  const avgY = chartHeight - margin - (average - minValue) * scaleY
  const deviationLines = [-3, -2, -1, 1, 2, 3]
  const deviationHeight = stdDeviation * scaleY

  // Draw the control line at the calculated average
  ctx.beginPath()
  ctx.strokeStyle = 'black'
  ctx.lineWidth = 2
  ctx.moveTo(margin, avgY)
  ctx.lineTo(chartWidth + margin, avgY)
  ctx.stroke()

  ctx.save()
  // Draw the standard deviation lines based on the calculated standard deviation
  deviationLines.forEach(deviation => {
    const deviationY = avgY + deviation * deviationHeight
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.setLineDash([5, 15])
    ctx.lineWidth = 1
    ctx.moveTo(margin, deviationY)
    ctx.lineTo(chartWidth + margin, deviationY)
    ctx.stroke()
  })
  ctx.restore()
}

// Function to draw the data points and connecting lines
function drawData (ctx, controlData, chartWidth, chartHeight, margin, minValue, scaleY, scaleX) {
  ctx.beginPath()
  ctx.strokeStyle = 'blue'
  controlData.forEach((point, index) => {
    const x = margin + index * scaleX
    const y = chartHeight - margin - (point - minValue) * scaleY
    if (index === 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }
    ctx.arc(x, y, 4, 0, Math.PI * 2)
    // ctx.fillStyle = 'blue'
    // ctx.fill()
    // ctx.closePath()
    // // Add tabindex and focus event listener
    ctx.canvas.insertAdjacentHTML('beforeend', `<button class="canvas-point" tabindex="0" aria-label="Data Point ${index + 1}"></button>`)
    const canvasPoint = ctx.canvas.lastElementChild
    canvasPoint.style.position = 'absolute'
    canvasPoint.style.left = `${x}px`
    canvasPoint.style.top = `${y}px`
    canvasPoint.addEventListener('focus', () => {
      // Handle focus behavior (e.g., show tooltip)
    })
  })
  ctx.stroke()
}

// Function to calculate the average

// Function to draw the legend with alt text for accessibility
function drawLegend (ctx, chartWidth, chartHeight, average, stdDeviation) {
  ctx.save()
  let offset = chartWidth - 200
  let lht = 22
  let yp = 30
  ctx.fillStyle = 'black'
  ctx.font = '20px serif'
  // Draw legend with alt text
  ctx.fillText('Legend', offset, yp)
  yp += lht
  ctx.fillText(`Average: ${average.toFixed(2)}`, offset, yp)
  yp += lht
  ctx.fillText(`Std Dev: ${stdDeviation.toFixed(2)}`, offset, yp)
  yp += lht
  ctx.fillText(`1 Std Dev: ${(average - stdDeviation).toFixed(1)} to ${(average + stdDeviation).toFixed(1)}`, offset, yp)
  yp += lht
  ctx.fillText(`2 Std Dev: ${(average - 2 * stdDeviation).toFixed(1)} to ${(average + 2 * stdDeviation).toFixed(1)}`, offset, yp)
  yp += lht
  ctx.fillText(`3 Std Dev: ${(average - 3 * stdDeviation).toFixed(1)} to ${(average + 3 * stdDeviation).toFixed(1)}`, offset, yp)
  // Set alt text for canvas element
  const legendAltText = `Legend. Average: ${average.toFixed(2)}, Std Deviation: ${stdDeviation.toFixed(2)}.`
  ctx.canvas.setAttribute('aria-label', legendAltText)
  ctx.restore()
}

// Function to draw the X and Y axis
function drawAxis (ctx, chartWidth, chartHeight) {
  ctx.beginPath()
  const yAxisMargin = 10 // Adjusted margin for the Y-axis
  ctx.moveTo(MARGIN, yAxisMargin)
  ctx.lineTo(MARGIN, chartHeight - yAxisMargin)
  ctx.lineTo(chartWidth + MARGIN, chartHeight - yAxisMargin)
  ctx.stroke()
}

// Function to draw the left-side axis with ticks and numeric markers
function drawLeftAxis (ctx, chartHeight, axisRange, scaleY) {
  ctx.save()
  let yt = chartHeight - MARGIN
  let xt = MARGIN
  ctx.translate(xt, yt)
  ctx.rotate(Math.PI / 2)
  ctx.textAlign = 'center'
  ctx.fillStyle = 'black'
  let yp = chartHeight / 2 * (-1)
  let xp = MARGIN - 10
  ctx.fillText('Control Result', yp, xp)
  ctx.font = '12px Arial'
  ctx.fillStyle = '#000'
  ctx.lineWidth = 1
  ctx.strokeStyle = '#000'
  const tickInterval = Math.ceil((axisRange.max - axisRange.min) / 10)
  for (let i = axisRange.min; i <= axisRange.max; i += tickInterval) {
    const ytp = (-1) * (i - axisRange.min) * scaleY
    ctx.fillText(`${i.toFixed(0)}`, ytp, 20)
    ctx.beginPath()
    ctx.moveTo(ytp, -TICK_LENGTH)
    ctx.lineTo(ytp, TICK_LENGTH)
    ctx.stroke()
  }
  ctx.restore()
}

// Main drawing function
export function drawChart (canvas, controlData) {
  const ctx = canvas.getContext('2d')
  const average = calculateAverage(controlData)
  const stDev = calculateStandardDeviation(controlData, average)
  const axisRange = calculateAxisRange(controlData, average, stDev)
  const chartWidth = canvas.width - 2 * MARGIN
  const chartHeight = canvas.height // center the drawing vertically
  const scaleY = (canvas.height - 2 * MARGIN) / (axisRange.max - axisRange.min)
  const scaleX = chartWidth / (controlData.length - 1)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawAxis(ctx, chartWidth, chartHeight)
  drawLeftAxis(ctx, chartHeight, axisRange, scaleY)
  drawLines(ctx, chartWidth, chartHeight, MARGIN, axisRange.min, scaleY, average, stDev)
  drawData(ctx, controlData, chartWidth, chartHeight, MARGIN, axisRange.min, scaleY, scaleX)
  drawLegend(ctx, chartWidth, chartHeight, average, stDev)
}
