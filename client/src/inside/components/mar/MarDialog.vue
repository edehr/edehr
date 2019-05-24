<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="closeDialog", @save="saveDialog")
      h3(slot="header") Add a record of medication administration
      div(slot="body")
        div
          div Day: {{currentDay}}
          div Period: {{activePeriod.name}}
          div Medications:
          med-list(:medsList="activePeriod.medsList")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Who administered
                input(class="input", type="text", v-model="who")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Actual time
                input(class="input", type="text", v-model="when")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              label Comment
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="comment")
          div(v-show="errorMesageList.length > 0", class="errorMesageList")
            li(v-for="error in errorMesageList") {{ error }}
</template>

<script>
import AppDialog from '../../../app/components/AppDialogShell'
import UiButton from '../../../app/ui/UiButton'
import MedList from './MedList'
import MarEntity from './mar-entity'

export default {
  name: 'MarDialog',
  components: {
    UiButton,
    AppDialog,
    MedList
  },
  data () {
    return {
      who: '',
      when: '',
      comment: '',
      errorMesageList: [],
      activePeriod: { name: '', medsList: [] }
    }
  },
  props: {
    marHelper: { type: Object },
    currentDay: { type: Number }
  },
  methods: {
    openMarDialog (period) {
      console.log('MarDialog open', period)
      this.comment = this.when = this.who = ''
      this.activePeriod = period
      this.$refs.theDialog.onOpen()
    },
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      let mar = new MarEntity(this.who, this.currentDay, this.when, this.comment, this.activePeriod)
      this.errorMesageList = mar.validate()
      if(this.errorMesageList.length > 0) {
        return
      }
      this.$emit('saveMar', mar)
    },
  }
}
</script>

<style scoped>

</style>