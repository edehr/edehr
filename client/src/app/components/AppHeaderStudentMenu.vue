<template lang="pug">
  div(class="flow_across menu_space_across")
    div(class="flow_across menu_space_across bigger-than-threshold1")
      router-link(:to="{ name: `ehr` }", class="navLink", :title='tooltip') Activity
      ehr-student-submit(v-if='inZoneEHR')
    ehr-student-other-dropdown(class="flow_across_last_item")
</template>
<script>
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit'
import EhrStudentOtherDropdown from '@/inside/components/EhrStudentOtherDropdown'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { EhrStudentOtherDropdown, EhrStudentSubmit },
  computed: {
    activity () { return this.$store.getters['activityStore/activity'] || {} },
    assignment () { return this.$store.getters['assignmentStore/assignment'] || {} },
    inZoneEHR () { return StoreHelper.inZoneEHR()  },
    tooltip () { return this.activity.resource_link_title + ' / ' + this.assignment.name },
    visitId () { return this.$store.getters['visit/visitId']}
  },
  methods: {
    goToEhr () {
      this.$router.push({ name: 'ehr', query: { visitId: this.visitId } })
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
