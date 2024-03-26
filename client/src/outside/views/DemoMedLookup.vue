<template lang='pug'>
div
  div(class="details-container card selected")
    h2 Medication lookahead
    div
      ehr-element-medication-v2(domId='demoMedLookup')
  medication-database-config

</template>

<script>
import EhrElementMedicationV2 from '@/inside/components/page/EhrElementMedication2.vue'
import MedicationDatabaseConfig from '@/outside/components/MedicationDatabaseConfig.vue'
/*
medOrderSummary(medicationOrders,medicationOrdersTable)
embedValue(medicationOrders, medicationOrdersTable, med_instructions)
embedValue(medicationOrders, medicationOrdersTable, med_reason)
embedValue(medicationOrders, medicationOrdersTable, med_timing)
embedValue(medicationOrders, medicationOrdersTable, medicationOrdersTable_id)
medAdminAlert(medicationOrders,medicationOrdersTable)
 */
export default {
  name: 'DemoMedLookup',
  components: { MedicationDatabaseConfig, EhrElementMedicationV2 }
}
</script>

<style>
/* style not scoped */
#demoMedLookup {
  width: 70rem;
}
</style>
