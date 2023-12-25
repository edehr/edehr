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
      ehr-patient-banner(slot="header-extra-content")
      div(slot="body")
        div
          h3 Day {{currentDay}}
            span(v-if='scheduledTime') - {{scheduledTime}}
          div(class="data-entry")
            div(class='label-value')
              label Prescribed medication:
              div {{ medOrder.medication }}
            div(class='label-value')
              label Prescribed dosage:
              div {{ medOrder.dose }}
            div(class='label-value')
              label When
              div {{ administrationText }}
            div(class='label-value')
              label Schedule
              div {{ schedule }}
            div(class='label-value')
              label Schedule Times
              div
                span(v-for='t in scheduleTimes', :key='t') {{t}} &nbsp;
            div(class='label-value')
              label Prescribed route:
              div {{ medOrder.route }}
            div(class='label-value')
              label Reason:
              div {{ medOrder.reason }}
            div(class='label-value')
              div Instructions:
              div {{ medOrder.instructions }}

          div(class="data-entry")
            div(class="label-value")
              label Administered by
              input(class="input", type="text", v-model="who", @input="validate")
            div(class="label-value")
              label Administered time
              input(class="input", type="text", v-model="actualTime", @input="validate")
            div(class="label-value")
              label Dosage
              input(class="input", type="text", v-model="dosage", @input="validate")
            div(class="label-value")
              label Comment
              textarea(v-model="comment", v-on:change="validate()")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import UiButton from '@/app/ui/UiButton'
import MarEntity from './mar-entity'
import MedOrder from '@/inside/components/mar/MedOrder'
import EhrPatientBanner from '@/inside/components/page/EhrDialogPatientBanner'

export default {
  name: 'MarDialog',
  components: {
    EhrPatientBanner,
    MedOrder,
    UiButton,
    AppDialog,
  },
  data () {
    return {
      who: '',
      actualTime: '',
      comment: '',
      dosage: '',
      errorList: [],
      medOrder: {},
      period: undefined
    }
  },
  props: {
    marHelper: { type: Object },
    currentDay: { type: Number }
  },
  computed: {
    administration () { return this.medOrder.administration },
    disableSave () { return this.errorList.length > 0 },
    scheduledTime () { return this.period ? this.period.hour24 : undefined },
    schedule () { return this.medOrder.scheduleKey },
    scheduleTimes () { return this.medOrder.scheduleTimes },
    administrationText () { return EhrDefs.getMedOrderScheduleTypes()[this.medOrder.administration] }
  },
  methods: {
    openMarDialog (period, medOrder) {
      this.period = period
      this.comment = this.actualTime = this.who = ''
      this.medOrder = period ? period.medList[0] : medOrder
      // console.log('open mar', JSON.stringify(this.medOrder))
      this.$refs.theDialog.onOpen()
      this.validate()
    },
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    },
    validate: function () {
      let mar = new MarEntity(this.who, this.currentDay, this.actualTime, this.comment, this.scheduledTime, this.dosage, this.medOrder)
      this.errorList = mar.validate()
    },
    saveDialog: function () {
      let mar = new MarEntity(this.who, this.currentDay, this.actualTime, this.comment, this.scheduledTime, this.dosage, this.medOrder)
      // console.log('save mar', JSON.stringify(mar))
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
