<template lang="pug">
  div(class="EhrNavPanel")
    div(class="EhrNavPanel__top")
      ehr-nav-panel-action
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
    ehr-scratch-pad(v-show="isStudent")
</template>
<script>
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'
import EhrNavList from './EhrNavList'
import EhrNavPanelAction from './EhrNavPanelAction'
import EhrScratchPad from '../components/EhrScratchPad'
import StoreHelper from '../../helpers/store-helper'


export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNavList,
    EhrNavPanelAction,
    EhrScratchPad
  },
  computed: {
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      return require('../../menuList.json')
    },
    isStudent () {
      return this.$store.getters['visit/isStudent']
    }
  },
  provide: {
    pageDataList () {
      return StoreHelper.getHasDataForPagesList()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrNavPanel .button {
  width: 100%;
  margin-bottom: 0;
  color: red;
}

.EhrNavPanel {
  background-color: $nav-background-medium;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*color: $grey10;*/

  &__top {
    padding: 15px;
  }
}

</style>