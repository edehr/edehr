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
          input(class="input", type="text", ref="mrnInput", v-model="inputPatientMrn", @input="watchMrn")
        div(class="mbdInput")
          label Scan medication
          input(class="input", type="text", ref="medInput", v-model="inputMed", @input="watchMed1")

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrPatient from '@/inside/components/page/ehr-patient'

// From StackOveflow the most amazing people contribute to this resource
// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
function beep (frequency, durationSec, ramp=false)
{
  var audioContext = null
  var oscillatorNode = null
  var stopTime = 0
  if (oscillatorNode === null) {
    audioContext = new (window.AudioContext || window.webkitAudioContext) ()
    stopTime = audioContext.currentTime

    oscillatorNode = audioContext.createOscillator()
    oscillatorNode.type = 'sine'
    oscillatorNode.connect (audioContext.destination)
    if (ramp) {
      oscillatorNode.frequency.setValueAtTime (frequency, stopTime)
    }
    oscillatorNode.start ()
    oscillatorNode.onended = function () {
      oscillatorNode = null
      audioContext = null
    }
  }

  if (ramp) {
    oscillatorNode.frequency.linearRampToValueAtTime (frequency, stopTime) // value in hertz
  } else {
    oscillatorNode.frequency.setValueAtTime (frequency, stopTime)  // value in hertz
  }

  stopTime += durationSec
  oscillatorNode.stop (stopTime)
}

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
    openBarCodeDialog (period, medOrder) {
      this.inputPatientMrn = ''
      this.inputMed = ''
      this.$refs.theDialog.onOpen()
      this.$nextTick( () =>  this.$refs.mrnInput.focus())
    },
    watchMrn () {
      if (this.validPatient) {
        beep (250, 0.5)
        this.$refs.medInput.focus()
      }
    },
    watchMed1 () {
      if (this.validPatient && this.validMed) {
        this.closeDialog()
        beep (500, 0.5)
        this.$emit('barcodedMed', this.inputMed)
      }
    },
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    }
  },
  mounted () {
    this.$refs.mrnInput.focus()
  }
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
