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
        //td {{ patientData.codeStatus ? patientData.codeStatus : 'N/A' }}
        //td {{ truncate(patientData.allergies, 40) }}
        //td {{ truncate(patientData.risks, 40) }}

    div(v-if="isEhrShowing")
      h2 Medication Orders
      p.
        These are the medication orders this patient has on their chart.  Note this list may
        not include medications ordered via order sets.
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
    div(v-if='isLisShowing')
      h2 Accessioning
      table(cellspacing="0" cellpadding="0")
        thead
          tr
            th Accession Id
            th Requisition Id
            th Specimen Type
            th Test panel
        tbody
          tr(v-for='acc in accData', :key='acc.accession_id')
            td
              qrcode-vue(:value="acc.accessionID", :size="qrsize", level="H", margin="5")
            td  {{ acc.accRequisitionID }}
            td  {{ acc.accSpecimenType }}
            td  {{ acc.accTestPanel }}
    div(v-if='labReqs')
      h2 Lab Requisitions
      table(cellspacing="0" cellpadding="0")
        thead
          tr
            th Requisition Id
            th Hematology
            th Coagulation
            th Cardiac
            th Electrolytes
            th Liver Function
            th Renal Profile
        tbody
          tr(v-for='req in labReqs', :key='req.requisitions_id')
            td
              qrcode-vue(:value="req.req_id", :size="qrsize", level="H", margin="5")
            td  {{ req.req_hematology }}
            td  {{ req.req_cogagulation }}
            td  {{ req.req_tropinin }}
            td  {{ req.req_electrolytes }}
            td  {{ req.req_liverFunction }}
            td  {{ req.req_renalProfile }}
      div labReqs {{labReqs}}
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
    qrsize () { return 70 },
    ehrText () { return t18EhrText() },
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
    isEhrShowing () { return StoreHelper.isEHR_Showing()},
    isLisShowing () { return StoreHelper.isLIS_Showing()},
    mData () {
      let data = StoreHelper.getMergedData()
      return JSON.parse(JSON.stringify(data))
    },
    accData () { return this.mData.medLabAccession?.mlAccessioning || {} },
    labReqs () { return this.mData.labRequisitions?.requisitions || {} }
  },
  methods: {
    extractAccIdNumber ( accRex ) { return accRex['accessionID']},
    extractAccReqNumber ( accRex ) { return accRex['accRequisitionID']},
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
