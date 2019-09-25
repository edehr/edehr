<template lang="pug">
  div(class="ehr-eval-input")
    div(class="evaluation-notes")
      textarea(v-model="theNotes")
    div(class="evaluation-controls")
      ui-button(v-on:buttonClicked="cancelEvaluationNotes", :disabled="!enableActions", v-bind:secondary="true") Cancel
      ui-button(v-on:buttonClicked="saveEvaluationNotes('saveNext')", :disabled="disableNext", class="is-pulled-right")  Save and next student
      ui-button(v-on:buttonClicked="saveEvaluationNotes('saved')", :disabled="!enableActions", class="is-pulled-right")  Save
</template>

<script>
import UiButton from '../../app/ui/UiButton'
export default {
  name: 'EhrEvaluationInput',
  components: { UiButton },
  data: function () {
    return {
      theNotes: '',
      asStored: ''
    }
  },
  props: {
    enableNext: { type: Boolean }
  },
  computed: {
    enableActions () {
      return this.theNotes !== this.asStored
    },
    disableNext () {
      return !(this.enableActions && this.enableNext)
    },
    asStoredEvaluationNotes () {
      // console.log('EhrEvaluationInput computed asStoredEvaluationNotes')
      return this.$store.getters['ehrData/evaluationData']
    }
  },
  mounted: function (){
    this.loadDialog()
  },
  watch: {
    asStoredEvaluationNotes: function (newData) {
      // console.log('EhrEvaluationInput watched')
      this.setNotes(newData)
    }
  },
  methods: {
    setNotes (data) {
      this.theNotes = data
      this.asStored = data
    },
    loadDialog: function () {
      /* restore the data to what is in the db. */
      this.setNotes(this.$store.getters['ehrData/evaluationData'])
    },
    cancelEvaluationNotes: function () {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveEvaluationNotes: function (event) {
      this.$store.dispatch('ehrData/sendEvaluationNotes', this.theNotes).then(() => {
        this.$emit(event)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.ehr-eval-input {
  color: $white;
  width: 100%;

  .evaluation-notes {
    width: 100%;
    textarea {
      width: 100%;
      height: 4rem;
      margin-bottom: 1em;
    }
  }
}
</style>
