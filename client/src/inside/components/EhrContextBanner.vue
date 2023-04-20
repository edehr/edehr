<template lang="pug">
  div(class="ehr-context-banner")
    ehr-context-banner-ehr-only(v-if='isEhrOnlyDemo')
    div(v-else)
      ehr-context-banner-header(@showChanged="(showVal) => show = showVal")
</template>

<script>
import EhrContextBannerHeader from '@/inside/components/EhrContextBannerHeader'
import EhrContextBannerEhrOnly from '@/inside/components/EhrContextBannerEhrOnly.vue'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { EhrContextBannerEhrOnly, EhrContextBannerHeader },
  data: function () {
    return {
      show: false,
    }
  },
  computed: {
    isEhrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
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
