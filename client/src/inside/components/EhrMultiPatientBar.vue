<template lang='pug'>
  div
    div(class='multi-patient-bar')
      ui-button(v-if='showSearchPatient', v-on:buttonClicked='searchPatient')
        fas-icon(class="fa", icon="search")
        span &nbsp; Search
      ehr-patient-tab(v-for='dbObject in activePatientList',
        :key='dbObject._id',
        :dbObject='dbObject',
        :selected='isTabActive(dbObject)',
        @remove='removePatient',
        @select='selectPatient'
      )
    ehr-patient-search-dialog(
      ref='theDialog',
      @openPatient='openPatient')
</template>

<script>
import EhrPatientTab from '@/inside/components/EhrPatientTab.vue'
import EhrPatientSearchDialog from '@/inside/components/EhrPatientSearchDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import MPatientHelper from '@/helpers/mPatientHelper'

export default {
  components: { UiButton, EhrPatientSearchDialog, EhrPatientTab },
  computed: {
    activePatientList () {
      // array of db objects (seed or patient) where each has an _id property
      return MPatientHelper.getCurrentPatientList()
    },
    currentPatientObjectId () {
      return MPatientHelper.getCurrentPatientObjectId()
    },
    showSearchPatient () {
      return StoreHelper.isStudent() || StoreHelper.isSeedEditing()
    }
  },
  methods: {
    isTabActive (dbObject) {
      return MPatientHelper.testMatchCurrentPatient(dbObject)
    },
    async openPatient (dbObject) {
      if (dbObject._id !== this.currentPatientObjectId) {
        await this.$router.push(this.routerRoute(false, dbObject._id))
      }
    },
    removePatient (id) {
      this.$store.dispatch('mPatientStore/removePatient', id)
    },
    routerRoute (select, id) {
      let route = {}
      // TODO In an ideal world we'd check to see if the appType for the next patient is the same as the current patient
      route.name = select ? this.$route.name : 'ehr'
      if (StoreHelper.isSeedEditing()) {
        route.query = { seedEditId: id, r: (new Date()).getTime() }
      } else {
        route.query = { patientId: id, r: (new Date()).getTime() }
      }
      return route
    },
    searchPatient () {
      this.$refs.theDialog.showPatientDialog()
    },
    selectPatient (id) {
      this.$router.push(this.routerRoute(true, id))
    }
  }
}
</script>

