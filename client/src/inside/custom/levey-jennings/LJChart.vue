// Custom Levey Jennings page
<template lang="pug">
  canvas(ref="ljChartCanvas" width="800" height="400")
</template>

<script>
import { drawChart } from '@/inside/custom//levey-jennings/LjDrawChart'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

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
    this.refreshEventHandler = () => {
      this.drawChart()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
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
