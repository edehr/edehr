<template lang="pug">
  div(:class="$options.name")
    app-dialog(:isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Evaluation {{ studentName }}
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(v-model="theNotes")
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrEvaluationDialog',
  components: {
    UiButton,
    AppDialog
  },
  data: function() {
    return {
      theNotes: ''
    }
  },
  computed: {
    studentName() {
      let sInfo = this.$store.state.ehrData.sCurrentStudentInfo || {}
      return sInfo.studentName
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
    cancelDialog: function() {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveDialog: function() {
      // console.log('Save the evaluation notes', this.theNotes)
      this.$store.dispatch('ehrData/sendEvaluationNotes', this.theNotes).then(() => {
        this.$emit('saved')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrEvaluationDialog {
  color: $black;
}
</style>
