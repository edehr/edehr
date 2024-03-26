<template lang="pug">
  div(class='label-printing')
    h1 Patient Summary
    table(cellspacing="0" cellpadding="0")
      tr
        td
          qrcode-vue(:value="patientData.mrn",:size="150",level="H",margin="5")
        td
          div {{ patientData.patientName }}
          div {{ patientData.mrn }}
          div {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
          div {{ patientData.gender }}
        //td {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
        //td {{ truncate(patientData.allergies, 40) }}
        //td {{ truncate(patientData.risks, 40) }}

    h2 Medication Orders
    p.
      These are the medication orders this patient has on their chart.  Note this list may
      not include medications ordered via order sets.
    table(cellspacing="0" cellpadding="0")
      tr(v-for='med in patientData.medorders', :key='med. medicationOrdersTable_id')
        td
          qrcode-vue(:value="extractMedName(med.med_medication)", :size="150", level="H", margin="5")
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
    ehrText () { return t18EhrText() },
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
  },
  methods: {
    extractMedName ( medMedication ) { return extractMedName (medMedication)},
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }
  }
}
</script>

<style lang='scss' scoped>
.label-printing {
  margin-left: 3rem;
}

</style>
