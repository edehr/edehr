<template lang="pug">
  div(class="ehr-context-banner")
    ehr-context-banner-ehr-only(v-if='isEhrOnlyDemo')
    div(v-else)
      student-eval-control(v-if="showInstructorEval", inEhr=true)
      ehr-context-student(v-if="showStudent")
      ehr-context-case-study(v-if='isSeedEditing')
</template>

<script>
import EhrContextBannerEhrOnly from '@/inside/components/EhrContextBannerEhrOnly.vue'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'
import StudentEvalControl from '@/outside/components/lms-activity/StudentEvalControl.vue'
import EhrContextStudent from '@/inside/components/EhrContextStudent.vue'
import EhrContextCaseStudy from '@/inside/components/EhrContextCaseStudy.vue'

export default {
  components: { EhrContextCaseStudy, EhrContextStudent, StudentEvalControl, EhrContextBannerEhrOnly },
  data: function () {
    return {
      show: false,
    }
  },
  computed: {
    isEhrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
    showInstructorEval () {
      return StoreHelper.isInstructorEvalMode()
    },
    isSeedEditing () {
      return StoreHelper.isSeedEditing()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
  },
  methods: {
  },
  mounted: function () {
    if (StoreHelper.isInstructor(this)){
      this.show = true
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-context-banner {
  background-color: $brand-primary-light;
  padding: 5px $ehr-layout-padding-left;
  border-top: 1px solid $grey40;
}
</style>
