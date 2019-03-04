<template lang="pug">
  div(class="content")
    button(id="addData", v-on:click="addData") Add data
    tabs
      tab(name="Table")
        div {{ vitals }}
      tab(name="Chart",:selected="true")
        vitals-chart(v-bind:vitals="vitals.table", v-bind:vitalsModel="vitalsModel")
</template>

<script>
import Tabs from './Tabs'
import Tab from './Tab'
import VitalsChart from './VitalsChart'
import VitalModel from '../../helpers/vitalModel'

export default {
  name: 'home',
  components: {
    Tabs,
    Tab,
    VitalsChart
  },
  data() {
    return {
      vitals: {
        table: []
      },
      vitalsModel: {}
    }
  },
  methods: {
    addData() {
      this.vitalsModel.addData(this.vitals.table)
    }
  },
  created: function() {
    this.vitalsModel = new VitalModel()
  }
}
</script>
