<template lang="pug">
  div(class="context-header")
    student-eval-control(v-if="showInstructor", inEhr=true)
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
import EhrContextStudent from '@/inside/components/EhrContextStudent'
import StoreHelper from '../../helpers/store-helper'
import EhrSimTime from '@/inside/components/EhrSimTime'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl'
export default {
  components: { StudentEvalControl, EhrSimTime, AppSeedDeveloperDropdown, EhrContextStudent },
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
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
}
.seed-name{
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
