<template lang="pug">
  vue-typeahead(
    :disabled="disabled",
    :domId="domId",
    :placeholder="ehrText.practitionerPlaceholder",
    showOnFocus=true,
    :source='practSource'
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
  data () {
    return {
      ehrText: ehrText,
    }
  },
  props: {
    domId: { type: String },
    inputVal: { type: String },
    disabled: { type: Boolean }
  },
  computed: {
    patientData () { return EhrPatient.patientData() },
    careTeam () { return this.patientData.careTeam },
    practitionerNames () {
      // careTeam is a list of { name: ..., profession:...}
      // this input combo needs an array of objects
      let tm = this.careTeam.map(mb => mb.name)
      tm.sort((a,b) => b.localeCompare(a))
      return tm.map(mb => {
        return { label: mb }
      })
    },
    practSource () {
      return {
        fnSource: () => {
          return this.practitionerNames
        }
      }
    },
  },
  methods: {
    emitUpdatePractitioner (value) {
      const member = this.careTeam.find( e => e.name === value)
      const eData = {
        value: value,
        profession: member ? member.profession : ''
      }
      EventBus.$emit(PRACTITIONER, eData)
    },
    updateValue: function (value) {
      console.log('eepract updateValue', value)
      this.$emit('selected', value)
      this.emitUpdatePractitioner(value)
    },
  },
  watch: {
    inputVal: function (value) {
      // console.log('eep watch inputVal', value)
      this.emitUpdatePractitioner(value)
    }
  }
}
</script>

