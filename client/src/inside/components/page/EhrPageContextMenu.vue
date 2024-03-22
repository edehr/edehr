<template lang='pug'>
div
  app-dropdown(:items="items")
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown.vue'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import StoreHelper from '@/helpers/store-helper'

export default {
  name: 'EhrPageContextMenu',
  components: { AppDropdown },
  inject: [ 'pageDataKey'],
  computed: {
    isEhr () { return StoreHelper.isEHR_Showing() },
    isLis () { return StoreHelper.isLIS_Showing() },
    items () {
      const menu = []
      menu.push({
        label: 'Demographics',
        callback: () => { this.$router.push({name: 'demographics'} ) },
        icon: 'user'
      })
      menu.push({
        label: 'Allergies',
        callback: () => { this.$router.push({name: 'allergies'} ) },
        icon: 'allergies'
      })
      if (this.isEhr) {
        menu.push({
          label: 'Diagnosis',
          callback: () => { this.$router.push({name: 'visit-details'} ) },
          icon: 'user-injured'
        })
        menu.push({
          label: 'Vitals',
          callback: () => {
            this.$router.push({ name: 'vital-signs' })
          },
          icon: 'stethoscope'
        })
      }
      menu.push({
        label: 'Lab requisitions',
        callback: () => { this.$router.push({name: 'lab-requisitions'} ) },
        icon: 'notes-medical'
      })
      if (this.isEhr) {
        menu.push({
          label: 'Lab Reports',
          callback: () => {
            this.$router.push({ name: 'lab-reports' })
          },
          icon: 'file-medical'
        })
        menu.push({
          label: 'Medications',
          callback: () => {
            this.$router.push({ name: 'meds' })
          },
          icon: 'prescription'
        })
        menu.push({
          label: 'eMAR',
          callback: () => {
            this.$router.push({ name: 'mar' })
          },
          icon: 'hand-holding-medical'
        })
        menu.push({
          label: 'Notes',
          callback: () => { this.$router.push({name: 'progress-notes'} ) },
          icon: 'edit'
        })
      }
      if (this.isLis) {
        menu.push({
          label: 'Hematology',
          callback: () => {
            this.$router.push({ name: 'hematology' })
          },
          icon: 'heartbeat'
        })
        menu.push({
          label: 'Chemistry',
          callback: () => {
            this.$router.push({ name: 'med-lab-chemistry' })
          },
          icon: 'flask'
        })
        menu.push({
          label: 'Urinalysis',
          callback: () => {
            this.$router.push({ name: 'med-lab-urinalysis' })
          },
          icon: 'vial'
        })
      }
      return menu
    },
    pageDef () {
      return EhrDefs.getPageDefinition(this.pageDataKey)
    },
  },
  methods: {
    routeName (path) {
      let route = path.name
      return route
    }
  },
}
</script>

<style scoped>

</style>
