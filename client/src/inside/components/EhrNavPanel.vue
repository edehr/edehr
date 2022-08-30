<template lang="pug">
  div(class="ehr-panel")
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
</template>
<script>
import EhrNavList from './EhrNavList'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: {  EhrNavList  },
  computed: {
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      const mList = require('../../menuList.json')
      // console.log(mList)
      return mList
    },
  },
  provide: {
    pageDataList () {
      return StoreHelper.getHasDataForPagesList()
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-panel {
  background-color: $nav-background-medium;
  border-radius: 0;
  height: 98vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
</style>