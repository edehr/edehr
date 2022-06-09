<template lang="pug">
  div(class="ehr-panel")
    div(v-if="isStudent", class="action-group")
      ehr-scratch-pad
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
</template>
<script>
import EhrNavList from './EhrNavList'
import EhrScratchPad from '@/inside/components/EhrScratchPad'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    EhrNavList,
    EhrScratchPad
  },
  computed: {
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      const mList = require('../../menuList.json')
      // console.log(mList)
      return mList
    },
    isStudent () {
      return this.$store.getters['visit/isStudent']
    }
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

.action-group {
  padding: 15px;

}
.button {
  width: 99%;
  border-radius: 4px;
  margin: 2px;
}

</style>