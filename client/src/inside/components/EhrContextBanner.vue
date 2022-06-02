<template lang="pug">
  div(class="EhrContextBanner")
    div(v-if='isEhrOnlyDemo')
      div {{ehrOnlyDemoText.ehrContextBannerTitle}}
    div(v-else)
      ehr-context-banner-header(@showChanged="(showVal) => show = showVal")
      div(v-show="show")
        ehr-context-instructor(v-if="(showInstructor)")
        ehr-context-developer(v-else-if="showSeeding")
        ehr-context-student(v-else-if="showStudent")
</template>

<script>
import EhrContextInstructor from './EhrContextInstructor'
import EhrContextStudent from './EhrContextStudent'
import EhrContextDeveloper from './EhrContextDeveloper'
import EhrContextBannerHeader from '@/inside/components/EhrContextBannerHeader'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '../../helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { ehrOnlyDemoText } from '@/appText'

export default {
  name: 'EhrContextBanner',
  components: { EhrContextBannerHeader, EhrContextInstructor, EhrContextStudent, EhrContextDeveloper, UiLink },
  data: function () {
    return {
      show: false,
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    isEhrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
    },
    showSeeding () {
      return StoreHelper.isSeedEditing()
    },
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

.EhrContextBanner {
  padding: 0 1rem;
  border-top: 1px solid $grey40;
}
</style>
