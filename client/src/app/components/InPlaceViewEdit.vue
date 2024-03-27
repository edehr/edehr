<template lang="pug">
  div(class="ehr-eval-input")
    div(class="evaluation-notes")
      textarea(rows="2", :disabled='disabled',
        :value='value',
        @input='oninput')
</template>

<script>
import EhrEvaluationConfirm from '@/inside/components/EhrEvaluationConfirm'

export default {
  components: { EhrEvaluationConfirm },
  data: function () {
    return {
    }
  },
  props: {
    disabled: { type: Boolean },
    valueKey: { type: String},
    value: { type: String}
  },
  computed: {
    // evaluationData () {
    //   return this.$store.getters['activityDataStore/evaluationData']
    //   // return StoreHelper.getEvaluationNotes()
    // },
  },
  methods: {
    oninput (event) {
      const newValue = event.target.value
      this.$emit('change', this.valueKey, newValue)
      // this.$store.dispatch('activityDataStore/sendEvaluationNotes', newNotes)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.evaluation-notes {
  textarea {
    //max-width: 60rem;
    //height: auto;
  }
}
</style>
