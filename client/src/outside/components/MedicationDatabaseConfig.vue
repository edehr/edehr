<template lang='pug'>
  div(class="details-container card selected")
    h2 Medication database
    div(class="about-section")
      div(class="details-row")
        div(class="details-name") Current
        div(class="details-value") {{currentMedDbLabel}}

      div(class="details-row")
        div(class="details-name") Change
        div(class="details-value")
          select(:value="currentMedDb",
            v-on:change="medDbChange")
            option(v-for="option in medDbOptions", :key="option.key", :value="option.key") {{ option.label}}

    div(class="about-section")
      accordion-element(header-text='About the Canadian medication database')
        div(slot='body')
          medication-database-about-c-a
    div(class="about-section")
      accordion-element(header-text='About the US medication database')
        div(slot='body')
          medication-database-about-v-a
</template>

<script>
import {
  getCurrentMedicationDb, getCurrentMedicationDbLabel, setCurrentMedicationDb,
  MEDICATION_DB_CANADA,
  MEDICATION_DB_CANADA_LABEL, MEDICATION_DB_USA,
  MEDICATION_DB_USA_LABEL
} from '@/helpers/med-db-utils'
import AccordionElement from '@/app/components/AccordionElement.vue'
import MedicationDatabaseAboutCA from '@/outside/components/MedicationDatabaseAboutCA.vue'
import MedicationDatabaseAboutVA from '@/outside/components/MedicationDatabaseAboutVA.vue'
export default {
  components: { AccordionElement, MedicationDatabaseAboutCA, MedicationDatabaseAboutVA },
  data () {
    return {
      medDb: ''
    }
  },
  computed: {
    currentMedDb () { return getCurrentMedicationDb()},
    currentMedDbLabel () { return getCurrentMedicationDbLabel()},
    medDbOptions () { return [
      {key: MEDICATION_DB_CANADA, label: MEDICATION_DB_CANADA_LABEL },
      {key: MEDICATION_DB_USA, label: MEDICATION_DB_USA_LABEL }

    ]}
  },
  methods: {
    medDbChange ( item ) {
      console.log('medDbChange', item.target.value)
      setCurrentMedicationDb(item.target.value)
    }
  }
}
</script>

<style scoped>

.about-section {
  margin: 1rem 0;
  max-width: 100%;
}
</style>
