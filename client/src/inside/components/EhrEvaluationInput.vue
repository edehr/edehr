<template lang="pug">
  div(class="ehr-eval-input")
    div(class="evaluation-notes")
      textarea(v-model="theNotes")
    div(class="evaluation-controls")
      ui-button(v-on:buttonClicked="cancelEvaluationNotes") cancel
      ui-button(v-on:buttonClicked="saveEvaluationNotes('saved')")  save
      ui-button(v-on:buttonClicked="saveEvaluationNotes('saveNext')")  save and next
</template>

<script>
import UiButton from '../../app/ui/UiButton'
export default {
  name: 'EhrEvaluationInput',
  components: { UiButton },
  data: function() {
    return {
      theNotes: ''
    }
  },
  computed: {
    asStoredEvaluationNotes() {
      return this.$store.getters['ehrData/evaluationData']
    }
  },
  watch: {
    asStoredEvaluationNotes: function(newData) {
      // console.log('watch sees new eval data')
      this.theNotes = newData
    }
  },
  methods: {
    loadDialog: function() {
      /*
      The containing component needs to invoke this load method when it shows
      this component/dialog. Here we get the data and store it for use in the form.
      It is also possible to use this method to restore the data to what is in the db.
       */
      let edata = this.$store.getters['ehrData/evaluationData']
      // console.log('EhrEvaluationDialog computed eval notes =', edata)
      this.theNotes = edata
    },
    cancelEvaluationNotes: function() {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveEvaluationNotes: function(event) {
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
    }
  }
}
</style>
