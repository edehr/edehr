<template lang="pug">
  header(class="apphdr")
    //system-message
    app-header-menu
    app-header-instructor-menu(v-if='showInstructor')
</template>
<script>
import SystemMessage from './SystemMessage'
import AppHeaderMenu from '@/app/components/AppHeaderMenu'
import AppHeaderInstructorMenu from '@/app/components/AppHeaderInstructorMenu'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { AppHeaderMenu, AppHeaderInstructorMenu, SystemMessage },
  computed: {
    showInstructor () {
      return StoreHelper.isInstructor()
    },
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
}
</style>
