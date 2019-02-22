import VitalChart from '@/helpers/vitalChart'
//import VitalChart from '../../src/helpers/vitalChart'
import CanvasMock from './CanvasMock'

const POINT_TYPES = {
  POINT: 'point',
  DOWN_CHEVRON: 'downChevron',
  UP_CHEVRON: 'upChevron',
  TEXT: 'text'
}

function getMockChartData() {
  let min = 0, max = 100
  let chartData = {
    label: 'Mock',
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
      steps: 3
    },
    dataSet: [
      {
        label: 'chev',
        pointStyle: POINT_TYPES.DOWN_CHEVRON,
        values: [20, 21, 22]
      },
      {
        label: 'text',
        pointStyle: POINT_TYPES.UP_CHEVRON,
        values: [20, 21, 22]
      },
      {
        label: 'point',
        pointStyle: POINT_TYPES.POINT,
        values: [20, 21, 22]
      }
    ]
  }
  return chartData
}

describe('VitalChart', () => {
  let axis
  let canvas
  let vitalChart
  it('create mock canvas', () => {
    canvas = new CanvasMock(100, 100)
    axis = new CanvasMock(100, 100)
    expect(canvas).toBeTruthy()
    expect(axis).toBeTruthy()
  })
  it('create vital chart with mock canvas', () => {
    vitalChart = new VitalChart(canvas, axis)
    expect(vitalChart).toBeTruthy()
    vitalChart.clear()
    let chartData = getMockChartData()
    vitalChart.drawChart(chartData, 0, 200)
    // console.log('canvas',canvas.mock)
    // console.log('axis',axis.mock)
  })
})
