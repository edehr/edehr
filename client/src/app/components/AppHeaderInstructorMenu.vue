<template lang="pug">
  div(class="flow_across menu_space_across")
    app-instructor-other-dropdown
</template>
<script>
import AppInstructorOtherDropdown from '@/app/components/AppInstructorOtherDropdown'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { AppInstructorOtherDropdown },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] || {} },
    showSeeding () { return StoreHelper.inZoneEHR() && StoreHelper.isSeedEditing() },
    seedInfo () { return StoreHelper.getSeedContent() },
    tooltip () { return this.activity.learningObjectName },
    linkText () {
      return 'Return to case study: ' + this.truncate(this.seedInfo.name, 30)
    }
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    }
  }
}
</script>
