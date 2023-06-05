<template lang="pug">
  div(class="ehr-panel")
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
    div
      ui-toggle-button(
        :toggleValue='isEHR_Showing',
        @toggle='toggleShowEHR',
        theme='dark',
        :label='isEHR_Showing? "Hide EHR pages" : "Show EHR pages"')
      ui-toggle-button(
        :toggleValue='isLIS_Showing',
        @toggle='toggleShowLIS',
        theme='dark',
        :label='isLIS_Showing? "Hide LIS pages" : "Show LIS pages"')
</template>
<script>
import EhrNavList from './EhrNavList'
import StoreHelper from '@/helpers/store-helper'
import UiToggleButton from '@/app/ui/UiToggleButton.vue'
export default {
  components: { UiToggleButton,  EhrNavList  },
  computed: {
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      const mList = require('../../menuList.json')
      // console.log(mList)
      return mList
    },
    isEHR_Showing () {
      return StoreHelper.isEHR_Showing()
    },
    isLIS_Showing () {
      return StoreHelper.isLIS_Showing()
    }
  },
  provide: {
    pageDataList () {
      return StoreHelper.getHasDataForPagesList()
    }
  },
  methods: {
    toggleShowEHR () {
      StoreHelper.toggleShowEHR()
    },
    toggleShowLIS () {
      StoreHelper.toggleShowLIS()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-panel {
  background-color: $nav-background-medium;
  border-radius: 0;
  display: flex;
  flex-direction: column;
}
</style>
