<template lang="pug">
  div
    input(type="text", class="input numb-input", :name="name", :list="listId", :disabled="disabled", :value="inputVal",
      v-on:input="$emit('update', $event.target.value)"
      )
    datalist(:id="listId")
      option(v-for='t in dataSeries', :key='t', :value='t')

</template>

<script>
import EhrTypes from '@/ehr-definitions/ehr-types'
import StoreHelper from '@/helpers/store-helper'
import { ehrText } from '@/appText'
const VISIT_DAY_TYPE = EhrTypes.dataInputTypes.visitDay
const VISIT_TIME_TYPE = EhrTypes.dataInputTypes.visitTime
const MAX_DAY = 10
// const minIncr = [ '00', '15', '30', '45']
const minIncr = [ '00', '30']

export default {
  props: {
    disabled: { type: Boolean },
    domId: { type: String },
    element: { type: Object },
    initialVal: { type: String },
    inputVal: { type: String },
    name: { type : String },
  },
  computed: {
    isTimeValue () { return this.element.inputType === VISIT_TIME_TYPE },
    isDayValue () { return this.element.inputType === VISIT_DAY_TYPE },
    elementLabel () {
      let label = this.element.label
      if(this.element.recHeader) {
        if (this.isTimeValue) {
          label = 'Record time'
        }
        if (this.isDayValue) {
          label = 'Record day'
        }
      }
      return label
    },
    listId () {
      let lid = ''
      if (this.isTimeValue) {
        lid = 'SimTime' + this.element.fnq
      }
      if (this.isDayValue) {
        lid = 'SimDay' + this.element.fnq
      }
      return lid
    },
    metaSimTime () {
      let data = StoreHelper.getMergedData()
      return data.meta.simTime
    },
    simulationDay () { return '' + this.metaSimTime.visitDay }, // the current computed day of the simulation
    simulationTime () { return '' + this.metaSimTime.visitTime },
    dataSeries () {
      let series = []
      if (this.isTimeValue) {
        series = this.timeSeries
      }
      if (this.isDayValue) {
        series = this.daySeries
      }
      return series
    },
    daySeries () {
      const ds = []
      const start = this.element.recHeader ? this.simulationDay : 0
      for(let i = start; i < MAX_DAY ; i++) {
        ds.push('' + i)
      }
      return ds
    },
    timeSeries () {
      const ts = []
      let h, t
      const restrictTimeSeries = false
      for(let i = 0; i < 24; i++) { // 24 hours
        h = (i < 10 ? '0' : '') + i // left pad with '0' if needed
        minIncr.forEach(incr => {
          t = h + incr // create a time value
          if (restrictTimeSeries) { // if the current day is the same as the simulation day
            if (t >= this.simulationTime) { // if time value is later than simulation time
              ts.push(t)
            }
          } else { // else the user is working with a day beyond the simulation day
            ts.push('' + t) // so add all time values into the time series
          }
        })
      }
      if (this.initialVal && !ts.includes(this.initialVal)) {
        ts.push(this.initialVal)
        ts.sort()
      }
      if (this.simulationTime && !ts.includes(this.simulationTime)) {
        ts.push(this.simulationTime)
        ts.sort()
      }
      return ts
    },
  },
  methods: {
  },
  mounted () {
    // set label and helper text for all rec header sim time fields to the same. Overrides the definitions for consistency.
    // This is not done in the definition generation because that would duplicate the lengthy helper text across all elements.
    // this.element.helperText = this.isDayValue ? ehrText.simDayAndTimeHelperText : undefined
    // this.element.label = this.elementLabel
  }
}
</script>

<style lang="scss" scoped>

</style>
