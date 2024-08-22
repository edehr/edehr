<template lang="pug">
  div(class='label-printing')
    h1 Patient Summary
    table(cellspacing="0" cellpadding="0")
      tr
        td
          qrcode-vue(:value="patientData.mrn",:size="qrsize",level="H",margin="5")
        td
          div {{ patientData.patientName }}
          div {{ patientData.mrn }}
          div {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
          div {{ patientData.gender }}
    div
      h2 Medication Orders
      p.
        These are the medication orders this patient has on their chart, including those found on order sets.
      table(cellspacing="0" cellpadding="0")
        tr(v-for='med in patientData.medorders', :key='med. medicationOrdersTable_id')
          td
            qrcode-vue(:value="extractMedName(med.med_medication)", :size="qrsize", level="H", margin="5")
          td  {{ extractMedName(med.med_medication) }}
          td  {{ med.med_dose }}
          td  {{ med.med_timing }}
          td  {{ med.med_route }}
          td  {{ med.med_scheduled }}
          td {{ med.med_reason }}
</template>

<script>
import { t18EhrText } from '@/helpers/ehr-t18'
import StoreHelper from '@/helpers/store-helper'
import EhrPatient from '@/inside/components/page/ehr-patient'
import QrcodeVue from 'qrcode.vue'
import { extractMedName } from '@/ehr-definitions/med-definitions/medOrder-model'
export default {
  components: { QrcodeVue },
  computed: {
    /*
     * 1. Remove lab reqs and accessioning. Do lab reqs when required. Do accessioning via new accessioning action.
     * 2. Increase size of QR code to handle some of the larger medication orders.
     * NOTE this size increase helps yet medication names can grow quite large. So this quick adjustment will not suffice.
     * Will need to truncate medication names for the sake of bar code scanning
     */
    qrsize () { return 80 },
    ehrText () { return t18EhrText() },
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
    mData () {
      let data = StoreHelper.getMergedData()
      return JSON.parse(JSON.stringify(data))
    }
  },
  methods: {
    extractMedName ( medMedication ) { return extractMedName (medMedication)},
  }
}
</script>

<style lang='scss' scoped>
.label-printing {
  margin-left: 3rem;
}

</style>
