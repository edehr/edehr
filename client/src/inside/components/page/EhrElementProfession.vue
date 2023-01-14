<template lang="pug">
  vue-typeahead(
    :disabled="combinedDisabled",
    :domId="_id",
    :placeholder="ehrText.professionPlaceholder",
    :source='profSource'
    :value="inputVal",
    @selected="updateValue",
  )
</template>

<script>
import EhrPatient from '@/inside/components/page/ehr-patient'
import EventBus, { PRACTITIONER } from '@/helpers/event-bus'
import VueTypeahead from '@/app/ui/VueTypeahead'
import { ehrText } from '@/appText'

export default {
  components: { VueTypeahead },
  props: {
    domId: { type: String },
    inputVal: { type: String },
    disabled: { type: Boolean }
  },
  data () {
    return {
      isFromProfession: false,
      ehrText: ehrText
    }
  },
  computed: {
    combinedDisabled () { return this.disabled ? true: this.isFromProfession},
    patientData () { return EhrPatient.patientData() },
    careTeam () { return this.patientData.careTeam },
    professions () {
      // careTeam is a list of { name: ..., profession:...}
      // this input combo needs an array of elements with property name
      // so can just return the careTeam without adjustment
      const profs = this.careTeam.map( m => m.profession )
      let list = [...new Set(profs)].sort()
      // console.log('get professions', list)
      return list
    },
    profSource () {
      return {
        local: this.professions,
      }
    },
  },
  methods: {
    updateValue: function (value) {
      console.log('eeprof updateValue', value)
      this.$emit('selected', value)
    },
    _dReceiveEvent (eData) {
      this.isFromProfession = eData.profession.length > 0
      // console.log('dependentEventHandler',eData.profession)
      // console.log('isFromProfession',this.isFromProfession)
      this.$emit('selected', eData.profession)
    }
  },
  mounted: function () {
    this.dependentEventHandler = (eData) => { this._dReceiveEvent(eData) }
    EventBus.$on(PRACTITIONER, this.dependentEventHandler)
  },
  beforeDestroy: function () {
    if (this.dependentEventHandler) {
      EventBus.$off(PRACTITIONER, this.dependentEventHandler)
    }
  },
}
</script>

