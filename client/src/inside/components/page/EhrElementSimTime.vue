<template lang="pug">
  div(class="form-element")
    div(class="select_wrapper")
      ehr-page-form-label(:element="element", css="select_label")
      div(v-if="!viewOnly")
        div(v-if="!isTimeValue")
          input(type="text", class="input numb-input", name="visitDay", list="dayList", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          datalist(id="dayList")
            option(v-for='t in daySeries', :key='t', :value='t')
        div(v-if="isTimeValue")
          input(type="text", class="input numb-input", name="visitTime", list="timeList", :disabled="disabled", v-model="inputVal", v-on:change="dependentUIEvent()")
          datalist(id="timeList")
            option(v-for='t in timeSeries', :key='t', :value='t')

      div(v-if="viewOnly") {{ inputVal }}
</template>

<script>
import EhrDefs from '@/helpers/ehr-defs-grid'
import EhrTypes from '@/ehr-definitions/ehr-types'
import EhrElementCommon from '@/inside/components/page/EhrElementCommon'
import EhrPageFormLabel from '@/inside/components/page/EhrPageFormLabel'
import StoreHelper from '@/helpers/store-helper'
const VISIT_DAY_TYPE = EhrTypes.dataInputTypes.visitDay
const VISIT_TIME_TYPE = EhrTypes.dataInputTypes.visitTime
const MAX_DAY = 10
// const minIncr = [ '00', '15', '30', '45']
const minIncr = [ '00', '30']

export default {
  extends: EhrElementCommon,
  // for props, etc see EhrCommonElement
  components: { EhrPageFormLabel },
  data: () => {
    return {
      initialVal: ''
    }
  },
  computed: {
    activeData () { return this.ehrHelp.getActiveData()}, // the active un-submitted form data
    activeDayValue () {
      let result = 0
      const pageKey = this.ehrHelp.getPageKey()
      const visitDayElement = EhrDefs.findRecHdrVisitDayChild(pageKey)
      if(visitDayElement) {
        const key = visitDayElement.elementKey
        const activeData = this.activeData
        result = activeData[key]
      }
      return result
    },
    isTimeValue () { return this.element.inputType === VISIT_TIME_TYPE },
    elementLabel () {
      let label = this.element.label
      if(this.element.recHeader) {
        if (this.element.inputType === VISIT_TIME_TYPE) {
          label = 'Record time'
        }
        if (this.element.inputType === VISIT_DAY_TYPE) {
          label = 'Record day'
        }
      }
      return label
    },
    helperText () {
      let helperText = this.element.helperText
      if(this.element.recHeader) {
        let d = { type: '' }
        if (this.element.inputType === VISIT_TIME_TYPE) {
          d.type = 'time of day'
        }
        if (this.element.inputType === VISIT_DAY_TYPE) {
          d.type = 'visit day'
        }
        let ht = []
        ht.push(`This is the ${d.type} for this record. A real EHR provides this automatically but in a simulation you need to provide the ${d.type} the \'user\' is making this record.`)
        ht.push('The current simulation time is calculated based on these record headers.')
        ht.push('To be consistent you can only set the time to be equal or later than the simulation time.')
        helperText = ht.join(' ')
      }
      return helperText
    },
    metaSimTime () {
      let data = StoreHelper.getMergedData()
      return data.meta.simTime
    },
    simulationDay () { return this.metaSimTime.visitDay }, // the current computed day of the simulation
    simulationTime () { return this.metaSimTime.visitTime },
    daySeries () {
      const ds = []
      const start = this.element.recHeader ? this.simulationDay : 0
      for(let i = start; i < MAX_DAY ; i++) {
        ds.push(i)
      }
      return ds
    },
    timeSeries () {
      const ts = []
      let h, t
      const restrictTimeSeries = false //  this.element.recHeader && this.simulationDay === this.activeDayValue
      for(let i = 0; i < 24; i++) { // 24 hours
        h = (i < 10 ? '0' : '') + i // left pad with '0' if needed
        minIncr.forEach(incr => {
          t = h + incr // create a time value
          if (restrictTimeSeries) { // if the current day is the same as the simulation day
            if (t >= this.simulationTime) { // if time value is later than simulation time
              ts.push(t)
            }
          } else { // else the user is working with a day beyond the simulation day
            ts.push(t) // so add all time values into the time series
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
    selectOptions () {
      if (this.element.inputType === VISIT_TIME_TYPE) {
        return this.timeSeries
      }
      if (this.element.inputType === VISIT_DAY_TYPE) {
        return this.daySeries
      }
      return []
    },
    listId () {
      if (this.element.inputType === VISIT_TIME_TYPE) {
        return 'SimTime'
      }
      if (this.element.inputType === VISIT_DAY_TYPE) {
        return 'SimDay'
      }
      return []
    },
  },
  methods: {
    setInitialValue (value) {
      // save the given initial value to test for inclusion in the generated time series.
      this.initialVal = value
      if(this.element.recHeader) {
        if (this.element.inputType === VISIT_TIME_TYPE) {
          this.inputVal = this.simulationTime
        }
        if (this.element.inputType === VISIT_DAY_TYPE) {
          this.inputVal = this.simulationDay
        }
      } else {
        this.inputVal = value
      }
    },
  },
  created () {
    // set label and helper text for all rec header sim time fields to the same. Overrides the definitions for consistency.
    // This is not done in the definition generation because that would duplicate the lengthy helper text across all elements.
    this.element.helperText = this.helperText
    this.element.label = this.elementLabel
  }
}
</script>

<style lang="scss" scoped>

</style>
