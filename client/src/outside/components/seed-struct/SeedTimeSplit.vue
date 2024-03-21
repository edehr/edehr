<template lang="pug">
div
  table(class="time-seq-table")
    tr
      td(class="timeElementHeader") Time Slices
      td(v-for="key in timeSteps", :class='{ selectedTime: isSelected(key), active: isActive(key)  }')
        ui-button(v-if="isSimTimeKey(key)", v-on:buttonClicked='showTime(key)') {{displayLabel(key)}}
        div(v-else, class='emptySpace') &nbsp;
    tr(v-if='showStages')
      td(class="timeElementHeader") Stages
      td(v-for="key in timeSteps", :class='{ selectedTime: isSelected(key), active: isActive(key) }')
        ui-button(v-if="isStageKey(key)", class="stageButton",  v-on:buttonClicked='showTime(key)') {{displayLabel(key)}}
        div(v-else, class='emptySpace') &nbsp;
  div(id="showCombinedWrapper")
    label(for="showCombined") show combined &nbsp;
    input(id='showCombined', @input="toggleCombined", type="checkbox", :checked="showCombined")
  seed-structural(:ehrData='sliceData', v-on="$listeners", :viewOnly='viewOnly')
</template>

<script>
import SeedStructural from '@/outside/components/seed-struct/SeedStructural.vue'
import UiButton from '@/app/ui/UiButton.vue'
import { convertToEventSequence, splitSimTimeKey, PAGEDATA_KEY } from '@/ehr-definitions/sim-time-seq-utils'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'


export default {
  components: { UiButton, SeedStructural },
  data () {
    return {
      showCombined: true,
      currentKey: ''
    }
  },
  props: {
    ehrData: { type: Object },
    stages : { type: Array, default: () => [] },
    purpose: { type: String /* activity, lobj, seed */}
  },
  computed: {
    viewOnly () { return ['activity'].includes(this.purpose)},
    showStages () { return ['activity', 'lobj'].includes(this.purpose)},
    timeKeys () { return Object.keys(this.timeSequence) },
    stagesKeys () { return this.stages.map( s => s.simKey)  },
    timeSteps () {
      // combine and sort
      const tkeys = [...this.timeKeys, ...this.stagesKeys].sort()
      // remove duplicates that may happen if both sets have the same key
      return [...new Set(tkeys)]
    },
    timeSequence () { return convertToEventSequence(this.ehrData) },
    sliceData () {
      const key = this.currentKey
      const keys = this.timeKeys
      let eDate = {}
      if (this.showCombined) {
        for (let i = 0; i < keys.length; i++) {
          let cKey = keys[i]
          let data = this.timeSequence[cKey]
          eDate = EhrDataModel.MergeTwoLevels(eDate, data)
          if (cKey === key) { // up to and include key
            break
          }
        }
      } else {
        for (let i = 0; i < keys.length; i++) {
          let cKey = keys[i]
          eDate = this.timeSequence[cKey]
          if (cKey === key) { // up to and include key
            break
          }
        }
      }
      return eDate
    },
  },
  methods: {
    isSimTimeKey ( key) {
      return this.timeKeys.includes(key)
    },
    isActive ( key) {
      return key === this.currentKey
    },
    isStageKey ( key) {
      return this.stagesKeys.includes(key)
    },
    isSelected (key ) {
      if (!this.currentKey) {
        // when there is no current key then all elements are selected.
        return true
      }
      if (!this.showCombined) {
        return key === this.currentKey
      }
      let [d, t] = splitSimTimeKey(key)
      let [cd, ct] = splitSimTimeKey(this.currentKey)
      return d < cd ? true : d === cd && t <= ct
    },
    displayLabel (key) {
      if ( key === PAGEDATA_KEY) {
        return 'Base'
      }
      let [d, t] = splitSimTimeKey(key)
      return  d + ' / ' + t
    },
    showTime (key) {
      this.currentKey = key
      this.$emit('selected', key)
    },
    toggleCombined () {
      this.showCombined = !this.showCombined
      this.showTime(this.currentKey)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.time-seq-table {
  background-color: $grey10;
}
.timeElementHeader {
  background-color: $grey30;
  font-weight: bold;
}

.selectedTime button {
  background-color: $brand-primary-hover;
}
.selectedTime.active .button {
  background-color: $button-active-color;
}
.stageButton {
  background-color: $seed-header-colour;
}

#showCombinedWrapper {
  margin: 0.5rem 0;
}
</style>
