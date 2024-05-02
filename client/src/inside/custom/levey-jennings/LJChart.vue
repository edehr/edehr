// Custom Levey Jennings page
<template lang="pug">
  canvas(ref="ljChartCanvas" width="800" height="400")
</template>

<script>
import { drawChart } from '@/inside/custom//levey-jennings/LjDrawChart'

export default {
  components: { },
  props: {
    values: { type: Array },
  },
  methods: {
    drawChart () {
      const canvas = this.$refs.ljChartCanvas
      drawChart(canvas, this.values)
    },
  },
  mounted () {
    this.drawChart()
  }
}
</script>
<style>
canvas {
  border: 1px solid #000;
}
.canvas-point:focus {
  outline: 2px solid blue;
}
</style>
