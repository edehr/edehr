<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      :errors="errorList",
      @cancel="closeDialog",
      @save="saveDialog",
      :disableSave="disableSave")

      h3(slot="header") Add a record of medication administration
      div(slot="body")
        div
          h3 Day {{currentDay}} - {{scheduledTime}}
          //med-order(:medOrder='medOrder')
          div(class="data-entry")
            div(class='label-value')
              label Medication:
              div
                div {{ medOrder.medication }} {{ medOrder.dose }}
                div {{ medOrder.route }} &nbsp; {{ medOrder.reason }}
            div(class='label-value')
              div Instructions:
              div {{ medOrder.instructions }}

          div(class="data-entry")
            div(class="label-value")
              label Administered by
              input(class="input", type="text", v-model="who", @input="validate")
            div(class="label-value")
              label Administered time
              input(class="input", type="text", v-model="when", @input="validate")
            div(class="label-value")
              label Comment
              textarea(v-model="comment", v-on:change="validate()")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import UiButton from '@/app/ui/UiButton'
import MarEntity from './mar-entity'
import MedOrder from '@/inside/components/mar/MedOrder'

export default {
  name: 'MarDialog',
  components: {
    MedOrder,
    UiButton,
    AppDialog,
  },
  data () {
    return {
      who: '',
      when: '',
      comment: '',
      errorList: [],
      scheduledTime: '',
      medOrder: {}
    }
  },
  props: {
    marHelper: { type: Object },
    currentDay: { type: Number }
  },
  computed: {
    disableSave () {
      return this.errorList.length > 0
    },
  },
  methods: {
    openMarDialog (period, medOrder) {
      this.comment = this.when = this.who = ''
      this.medOrder = period ? period.medList[0] : medOrder
      // console.log('open mar', JSON.stringify(this.medOrder))
      this.scheduledTime = period ? period.hour24 : ''
      this.$refs.theDialog.onOpen()
      this.validate()
    },
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    },
    validate: function () {
      let mar = new MarEntity(this.who, this.currentDay, this.when, this.comment, this.scheduledTime, this.medOrder)
      this.errorList = mar.validate()
    },
    saveDialog: function () {
      let mar = new MarEntity(this.who, this.currentDay, this.when, this.comment, this.scheduledTime, this.medOrder)
      this.errorList = mar.validate()
      if(this.errorList.length > 0) {
        return
      }
      this.$emit('saveMar', mar)
    },
  }
}
</script>

<style scoped>

.data-entry {
  width: 50rem;
}

</style>
