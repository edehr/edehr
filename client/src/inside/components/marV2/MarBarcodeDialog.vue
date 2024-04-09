<template lang="pug">
  div
    app-dialog(
      :isModal="false",
      ref="theDialog",
      @save="closeProceed",
      @cancel="closeCancel",
      :disableSave="disableSave")

      h3(slot="header") Bar code scan to confirm medication
      div(slot="body")
        p.
          Scan the patient's MRN and when a match is made the focus will shift to the medication input field.
          Next scan the medications. Each time there is a match with the patient's medication orders.

        div(class="medInputs")
          label Scan patient MRN
          input(class="input", type="text", ref="mrnInput", :disabled='matchedMrn', v-model="inputPatientMrn", v-on:keyup.enter="watchMrn")
          ehr-patient-banner(v-if="matchedMrn")
          div(v-else) Scan Patient MRN and press ENTER
        div(class="medInputs")
          label Scan medication
          input(class="input", type="text", ref="medInput", v-model="inputMed", v-on:keyup.enter="watchMed")
          div Enter a medication order and press ENTER

        section(v-show="inputMeds.length>0")
          h4 Medication orders
          table(class="med-details-table")
            thead
              tr
                th Medication order
                th Information
                th
                  div Schedule
                  div Now {{ getCurrentSimDate}} T {{currentSimTime}}
                th(class="table-action-col") &nbsp;
            tbody
              template(v-for='(medOrder) in inputMeds')
                tr
                  td(rowspan=2) {{ medSummary(medOrder) }}
                  td Reason: {{ medReason(medOrder) }}
                  td Actioned:
                    div(v-if='medActioned(medOrder).length === 0') No previous
                    div(v-else)
                      table(class="event-table")
                        tbody
                          tr(v-for='mar in medActioned(medOrder)')
                            td {{marDate(mar)}}T{{mar.schedTime}}
                            td {{mar.status}}
                            td {{mar.dose}}
                  td
                    button(v-on:click="removeMedAction(medOrder)") x
                tr(class="second-row")
                  td Alerts: {{ medAlerts(medOrder) }}
                  td Scheduled:
                    div(v-if="medPending(medOrder).length === 0")
                      div Nothing scheduled
                    div(v-else)
                      table(class="event-table")
                        tbody
                          tr(v-for='mme in medPending(medOrder)')
                            td {{marDate(mme)}}T{{mme.schedTime}}
                  td &nbsp;
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { beepSound } from '@/inside/components/marV2/beep-util'
import { MedOrder } from '@/ehr-definitions/med-definitions/medOrder-model'
import { getCurrentSimDate, getCurrentSimTime, simDateCalc } from '@/helpers/date-helper'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'
import { MED_ORDERS_ALERT_ELEMENT, MED_ORDERS_PAGE_KEY } from '@/ehr-definitions/ehr-defs-grid'
import EhrTypes from '@/ehr-definitions/ehr-types'
import { MarTimelineModel } from '@/ehr-definitions/med-definitions/mar-model'
import EhrPatientBanner from '@/inside/components/EhrPatientBanner.vue'

export default {
  components: {
    EhrPatientBanner,
    AppDialog,
  },
  data () {
    return {
      inputPatientMrn: '',
      inputLabels: [],
      inputMeds: [],
      inputMed: '',
      matchedMrn: false
    }
  },
  props: {
    patientData: { type: Object }, // EhrPatient.patientData()
    barCodedMeds: { type: Array },
    timeLineModel : { type: MarTimelineModel }
  },
  computed: {
    getCurrentSimDate () { return simDateCalc(getCurrentSimDate()) },
    currentSimTime () { return getCurrentSimTime() },
    disableSave () { return !(this.validPatient && this.inputMeds.length > 0) },
    patientMrn () { return this.patientData.mrn },
    medOrders () { return this.patientData.medorders.map( raw => new MedOrder(raw)) },
    medOrderNames () { return this.medOrders.map( mo => mo.medName) },
    validPatient () { return this.patientMrn === this.inputPatientMrn },
    actionedMarEvents () { return this.timeLineModel.actionedMarEvents},
    pendingMarEvents () { return this.timeLineModel.pendingMarEvents}
  },
  methods: {
    marDate (mar) { return simDateCalc(mar.schedDay)},
    beepGood1 () { beepSound (600, 0.2) },
    beepGood2 () { beepSound (900, 0.2) },
    beepMiss () { beepSound (300, 0.4) },
    focusMrn () { this.$refs.mrnInput.focus() },
    focusMed () { this.$refs.medInput.focus() },
    medAlerts (medOrder) {
      return medOrder.alerts ? makeHumanTableCell(
        MED_ORDERS_PAGE_KEY,
        MED_ORDERS_ALERT_ELEMENT,
        EhrTypes.dataInputTypes.checkset,
        medOrder.alerts) : 'No alerts'
    },
    medActioned ( medOrder ) {
      const filtered =  this.actionedMarEvents.filter( mme => mme.medOrderId === medOrder.id)
      return filtered.map( mme => mme.marRecord)
    },
    medPending ( medOrder ) {
      let pending = this.pendingMarEvents.filter( mme => mme.medOrderId === medOrder.id)
      return pending.slice(0, 2)
    },
    medReason (medOrder) {
      return medOrder.reason || 'No reason given in the order.'
    },
    medScheduleTimes (medOrder) {
      const times = medOrder.getScheduledTimes()
      return times.length > 0 ? times.join(', ') : 'No scheduled times'
    },
    medSummary (medOrder) { return medOrder.medOrderSummary() },
    removeMedAction ( removeOrder) {
      const index = this.inputMeds.findIndex( medOrder => medOrder.med_medication === removeOrder.med_medication)
      if (index > -1) {
        this.inputMeds.splice(index, 1)
      }
    },
    openBarCodeDialog (period, medOrder) {
      this.inputPatientMrn = ''
      this.inputMed = ''
      this.inputMeds = []
      this.inputLabels = []
      this.$refs.theDialog.onOpen()
      this.matchedMrn = false
      this.$nextTick( () => this.focusMrn() )
    },
    watchMrn () {
      if (this.validPatient) {
        this.beepGood1()
        this.matchedMrn = true
        this.focusMed(0)
      } else {
        this.beepMiss()
        this.inputPatientMrn = ''
        this.focusMrn()
      }
    },
    watchMed () {
      if (this.medOrderNames.includes(this.inputMed) ) {
        this.beepGood1()
        const found = this.inputMeds.find( medOrder => medOrder.medName === this.inputMed)
        if (!found) {
          const selectedMedOrder = this.medOrders.find(medOrder => medOrder.medName === this.inputMed)
          selectedMedOrder && this.inputMeds.push(selectedMedOrder)
        }
        this.inputMed = ''
        this.focusMed()
      } else {
        this.beepMiss()
        this.inputMed = ''
        this.focusMed()
      }
    },
    closeCancel () {
      this.$emit('barcodedMed', [])
      this.closeDialog()
    },
    closeProceed () {
      this.$emit('barcodedMed', this.inputMeds)
      this.closeDialog()
    },
    closeDialog () {
      this.$refs.theDialog.onClose()
    }
  },
  mounted () {
    let limit = 5
    for(let i = 0; i< limit; i++) {
      this.inputLabels.push('Med'+i)
    }
  },
  watch: {
    barCodedMeds () {
      this.inputMeds = [...this.barCodedMeds]
      // console.log('watch ', this.inputMeds, this.barCodedMeds)
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../../scss/definitions';
.med-details-table {
  table-layout: fixed;
  td {
    width: 1%
  }
  table-action-col {
    width: 4rem;
  }
}

.event-table {
  border: none;
  td {
    border: none;
  }
}
.second-row {
    border-bottom: 2px solid;
}
.medInputs {
  display: grid;
  grid-template-columns: 1fr 1fr 5fr;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>
