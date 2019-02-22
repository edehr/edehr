<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__bottom`")
      ui-button(v-on:buttonClicked="showDialog", :class="`${$options.name}__button`")
        fas-icon(icon="notes-medical")
    app-dialog( v-if="showingDialog", :isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Evaluation [ ToDo  put student's name here ]
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
  name: 'EhrEvaluationPad',
  components: {
    UiButton,
    AppDialog
  },
  data: function() {
    return {
      showingDialog: true,
      populate: true,
      theNotes: ''
    }
  },
  methods: {
    resetNotes: function() {
      let sp = this.$store.getters['ehrData/evaluationData']
      console.log('EhrEvaluationPad reset with existing ', sp)
      this.theNotes = sp
    },
    showDialog: function() {
      this.resetNotes()
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.resetNotes()
      this.showingDialog = false
    },
    saveDialog: function() {
      this.showingDialog = false
      console.log('EhrEvaluationPad saving ', this.theNotes)
      this.$store.dispatch('ehrData/sendScratchData', this.theNotes)
    }
  }
}
</script>

<style lang="scss" scoped>
.EhrEvaluationPad {
}
</style>
