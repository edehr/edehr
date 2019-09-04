<template lang="pug">
  div(class="content")
    div(class="chart-wrapper")
      div(class="axis-wrapper")
        canvas(id="axisCanvas", :width="axisCanvasWidth", :height="axisCanvasHeight")
      div(id="chartWrapper", class="canvas-wrapper")
        canvas(id="chartCanvas", :width="chartCanvasWidth", :height="chartCanvasHeight")
</template>

<script>
import VitalChart from '../../helpers/vitalChart'

const yAxisWidth = 75
const canvasHeight = 1140
const canvasWidth = 8200

export default {
  name: 'VitalsChart',
  data: function () {
    return {
      axisCanvasWidth: yAxisWidth,
      axisCanvasHeight: canvasHeight,
      chartCanvasWidth: canvasWidth,
      chartCanvasHeight: canvasHeight
    }
  },
  props: {
    vitals: { type: Array },
    vitalsModel: { type: Object }
  },
  computed: {
    // these arrays are magically updated by Vue when the vitals are changed
    temperatures () {
      return this.vitalsModel.getTemperature(this.vitals)
    },
    dates () {
      return this.vitalsModel.getDates(this.vitals)
    },
    bloodPressure () {
      return this.vitalsModel.getBloodPressure(this.vitals)
    },
    oxygen () {
      return this.vitalsModel.getOxygen(this.vitals)
    },
    respiratory () {
      return this.vitalsModel.getRespiratory(this.vitals)
    }
  },
  watch: {
    // when the vitals are changed trigger a redraw
    vitals: function () {
      this.redraw()
    }
  },
  methods: {
    // Prototype only ....
    // add another row to the data table.
    addData () {
      this.vitalChart.addData(this.vitals.table)
    },
    redraw () {
      let vitalChart = this.vitalChart
      vitalChart.clear()
      // The first number is the origin of the chart relative to the top left
      // The second number is the height of the chart
      let y = 0
      let ht = 50
      let space = 40

      space = 40
      vitalChart.drawChart(this.dates, y, ht)
      y += ht
      vitalChart.drawYLine(y)
      y += space

      space = 60
      ht = 250
      vitalChart.drawChart(this.temperatures, y, ht)
      y += ht + space

      ht = 210
      vitalChart.drawChart(this.bloodPressure, y, ht)
      y += ht + space

      ht = 250
      vitalChart.drawChart(this.respiratory, y, ht)
      y += ht + space

      space = 20
      ht = 80
      vitalChart.drawChart(this.oxygen, y, ht)
      y += ht + space

      vitalChart.drawYLine(y)
      y += 0
      ht = 50
      vitalChart.drawChart(this.dates, y, ht)

      // force the chart to scroll to the beginning of the data.
      let chartWrapper = document.getElementById('chartWrapper')
      chartWrapper.scrollLeft = 0
      // chartWrapper.addEventListener('scroll', function (e) {
      //   let scrollLeft = chartWrapper.scrollLeft
      //   console.log('chartWrapper scrollLeft', scrollLeft)
      // })
    }
  },
  mounted: function () {
    let chartCanvas = document.getElementById('chartCanvas')
    let axisCanvas = document.getElementById('axisCanvas')
    this.vitalChart = new VitalChart(chartCanvas, axisCanvas)
    // draw to get empty chart
    this.redraw()
  }
}
</script>

<style scoped>
.canvas-wrapper {
  flex: 1 0 auto;
  width: 100%;
  padding: 10px 0 10px 0;
  overflow-x: auto;
  /*border: 1px dotted black;*/
}
canvas {
  /*border: 1px dotted black;*/
}

.axis-wrapper {
  flex: 0 1 auto;
  padding: 14px 20px 10px 0;
  /*border: 1px dotted black;*/
}

.chart-wrapper {
  display: flex;
  margin: 1rem;
}
</style>
