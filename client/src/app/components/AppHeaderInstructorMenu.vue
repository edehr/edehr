<template lang="pug">
  div(class="flow_across menu_space_across")
    div(class="flow_across menu_space_across bigger-than-threshold1")
      router-link(v-if='showSeeding', :to="{ name: 'seed-view', query: { seedId: seedInfo._id } }", class="navLink") Return to case study: {{ seedInfo.name }}
      router-link(v-else, :to="{ name: `lms-activity` }", class="navLink", :title='tooltip') Activity

    app-instructor-other-dropdown
</template>
<script>
import AppInstructorOtherDropdown from '@/app/components/AppInstructorOtherDropdown'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { AppInstructorOtherDropdown },
  computed: {
    activity () { return this.$store.getters['activityStore/activity'] || {} },
    assignment () { return this.$store.getters['assignmentStore/assignment'] || {} },
    showInstructor () { return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()},
    showSeeding () { return StoreHelper.inZoneEHR() && StoreHelper.isSeedEditing() },
    seedInfo () { return StoreHelper.getSeedContent() },
    tooltip () { return this.activity.resource_link_title + ' / ' + this.assignment.name }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.secondMenu {
  display: flex;
}
/* Menu colours */
.secondMenu {
  background: $brand-primary-light;
  color: $black;
  .outer-page-title {
    color: $black;
    font-weight: bold;
    font-size: 1.4rem;
  }
}
</style>
