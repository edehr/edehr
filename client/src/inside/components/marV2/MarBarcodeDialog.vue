<template lang="pug">
  div
    app-dialog(
      :isModal="false",
      ref="theDialog",
      @save="closeProceed",
      @cancel="closeCancel")

      h3(slot="header") Bar code scan to confirm medication
      div(slot="body")
        p.
          Scan the patient's MRN and when a match is made the focus will shift to the medication input field.
          Next scan the medications. Each time there is a match with the patient's medication orders.

        div(class="medInputs")
          label Scan patient MRN
          input(class="input", type="text", ref="mrnInput", :disabled='matchedMrn', v-model="inputPatientMrn", v-on:keyup.enter="watchMrn")
          div {{ matchedMrn ? 'Patient MRN is matched' : 'Enter Patient MRN' }}
        div(class="medInputs")
          label Scan medication
          input(class="input", type="text", ref="medInput", v-model="inputMed", v-on:keyup.enter="watchMed")
          div {{ matchedMrn ? 'Enter a medication order' : '' }}
        h4 Medication orders
        div(v-for='(med) in inputMeds',
          :key='med',
          class="app-tag"
        )
          span(class="app-tag-label") {{med}}
          button(v-on:click="removeMedAction(med)") x
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { beepSound } from '@/inside/components/marV2/beep-util'

export default {
  components: {
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
  },
  computed: {
    patientMrn () { return this.patientData.mrn },
    medOrders () { return this.patientData.medorders.map( mo => mo.med_medication) },
    validPatient () { return this.patientMrn === this.inputPatientMrn },
  },
  methods: {
    beepGood1 () { beepSound (600, 0.2) },
    beepGood2 () { beepSound (900, 0.2) },
    beepMiss () { beepSound (300, 0.4) },
    focusMrn () { this.$refs.mrnInput.focus() },
    focusMed () { this.$refs.medInput.focus() },
    removeMedAction ( med) {
      const index = this.inputMeds.indexOf(med)
      if (index > -1) {
        this.inputMeds.splice(index, 1)
      }
    },
    openBarCodeDialog (period, medOrder) {
      this.inputPatientMrn = ''
      this.inputMed = ''
      // this.inputMeds = []
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
      if (this.validPatient && this.medOrders.includes(this.inputMed) ) {
        this.beepGood1()
        const index = this.inputMeds.indexOf(this.inputMed)
        if (index < 0) {
          this.inputMeds.push(this.inputMed)
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
      console.log('watch ', this.inputMeds, this.barCodedMeds)
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../../../scss/definitions';
.app-tag {
  margin-right: 1rem;
}
.app-tag-label {
  padding: 5px;
  background-color: $grey30;
  border-radius: 5px;
}
.medInputs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  input {
    width: 10rem;
  }
  label {
    width: 10rem;
  }
}
</style>
