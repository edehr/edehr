<template lang="pug">
  div
    app-dialog(
      :isModal="false",
      ref="theDialog",
      :useSave="false",
      @cancel="closeDialog")

      h3(slot="header") Bar code scan to confirm medication
      div(slot="body")
        p.
          Scan the Patient's MRN first. It must match exactly.  Once the match is made the focus will shift to the medication input field..
          Next scan the medication.
          The dialog will close if the scan matches one of this patient's medications.
        div(class="mbdInput")
          label Scan patient MRN
          input(class="input", type="text", ref="mrnInput", v-model="inputPatientMrn", v-on:keyup.enter="watchMrn")
        div(class="mbdInput")
          label Scan medication
          input(class="input", type="text", ref="medInput", v-model="inputMed", v-on:keyup.enter="watchMed1")

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrPatient from '@/inside/components/page/ehr-patient'
import { beepSound } from '@/inside/components/marV2/beep-util'

export default {
  components: {
    AppDialog,
  },
  data () {
    return {
      inputPatientMrn: '',
      inputMed: ''
    }
  },
  computed: {
    patientData () { return EhrPatient.patientData() },
    patientMrn () { return this.patientData.mrn },
    medOrders () { return this.patientData.medorders.map( mo => mo.med_medication) },
    validPatient () {
      return this.patientMrn === this.inputPatientMrn
    },
    validMed () {
      return this.medOrders.includes(this.inputMed)
    }
  },
  methods: {
    beepGood1 () { beepSound (600, 0.2) },
    beepGood2 () { beepSound (900, 0.2) },
    beepMiss () { beepSound (300, 0.4) },
    openBarCodeDialog (period, medOrder) {
      this.inputPatientMrn = ''
      this.inputMed = ''
      this.$refs.theDialog.onOpen()
      this.$nextTick( () =>  this.$refs.mrnInput.focus())
    },
    watchMrn () {
      if (this.validPatient) {
        this.beepGood1()
        this.$refs.medInput.focus()
      } else {
        this.beepMiss()
        this.inputPatientMrn = ''
        this.$refs.mrnInput.focus()
      }
    },
    watchMed1 (event) {
      if (this.validPatient && this.validMed) {
        this.closeDialog()
        this.beepGood2()
        this.$emit('barcodedMed', this.inputMed)
      } else {
        this.beepMiss()
        this.inputMed = ''
        this.$refs.medInput.focus()
      }
    },
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    }
  },
}
</script>

<style scoped lang='scss'>
.mbdInput {
  input {
    width: 10rem;
  }
  label {
    width: 10rem;
  }
  margin: 10px;
}
</style>
