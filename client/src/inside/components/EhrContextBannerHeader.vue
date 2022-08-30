<template lang="pug">
  div(class="context-header")
    ehr-context-instructor(v-if="showInstructor")
    ehr-context-student(v-if="showStudent")
    div(v-else-if="showDeveloper", class='seed-context')
      div(class="item-seed-name") Seed name:
        span(class='seed-name') &nbsp; {{ seedInfo.name }}
      div(class="cb-item")
        ehr-sim-time(:ehrData="seedInfo.ehrData")
      app-seed-developer-dropdown(:seedId="seedInfo._id")
</template>

<script>
import AppSeedDeveloperDropdown from '@/app/components/AppSeedDeveloperDropdown'
import EhrContextInstructor from '@/inside/components/EhrContextInstructor'
import EhrContextStudent from '@/inside/components/EhrContextStudent'
import StoreHelper from '../../helpers/store-helper'
import EhrSimTime from '@/inside/components/EhrSimTime'
export default {
  components: { EhrSimTime, AppSeedDeveloperDropdown, EhrContextInstructor, EhrContextStudent },
  computed: {
    seedInfo () {
      return StoreHelper.getSeedContent()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
    },
    showDeveloper () {
      return StoreHelper.isSeedEditing()
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.seed-context {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  height: 3rem;
  padding-top: 1rem;
}
.seed-name{
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
