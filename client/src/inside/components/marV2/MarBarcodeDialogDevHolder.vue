<template lang="pug">
  div
    ui-button(v-on:buttonClicked="openBarCodeDialog") BarCode
    mar-barcode-dialog(ref="refBarCodeDialog", :patientData='patientData',
      :barCodedMeds='barCodedMeds',
      @barcodedMed='changeBarcodedMed')
    hr
    div barCodedMeds {{ barCodedMeds }}
</template>

<script>
import MarBarcodeDialog from '@/inside/components/marV2/MarBarcodeDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'

/* **************************************
  Used this component to develop the bar code dialog. Without this holder you need to navigate deeply
  into the app to get to the dialog. With this holder you can place the holder anywhere (temporarily)
  and see a button that can be used to launch the dialog. One handy place is on the Demo.vue page.

 */
export default {
  components: {
    UiButton,
    MarBarcodeDialog
  },
  data () {
    return {
    }
  },
  computed: {
    barCodedMeds () { return this.$store.getters['system/barCodedMedOrders']},
    patientData () { return {
      mrn: '1234',
      medorders: [
        {med_medication: 'm1'},
        {med_medication: 'm2'},
        {med_medication: 'm3'},
        {med_medication: 'm4'},
        {med_medication: 'm5'},
        {med_medication: 'm6'},
        {med_medication: 'm7'},
      ]
    } },
  },
  methods: {
    changeBarcodedMed ( data ) {
      console.log('barcodedMed', data)
      this.$store.dispatch('system/setBarCodedMedOrders', data)
    },
    openBarCodeDialog () {
      this.$refs.refBarCodeDialog.openBarCodeDialog()
    },
  }
}
</script>
