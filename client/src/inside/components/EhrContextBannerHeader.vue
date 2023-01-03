<template lang="pug">
  div(class="context-header")
    student-eval-control(v-if="showInstructor", inEhr=true)
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EhrSimTime from '@/inside/components/EhrSimTime'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl'
export default {
  components: { StudentEvalControl, EhrSimTime },
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
