<template lang="pug">
  div(class="ehr-panel")
    div(v-if="isActiveEhrOnlyDemo")
      div
        ui-button(v-on:buttonClicked="ehrOnlyDemoActionButtonClicked") {{ ehrOnlyDemoText.navPanelSubmitButton }}
      div
        ui-button(v-on:buttonClicked="ehrOnlyDemoActivityButtonClicked") {{ ehrOnlyDemoText.navPanelActivityButton }}
      ehr-scratch-pad
    div(v-if="isStudent", class="action-group")
      ehr-nav-panel-action
      ehr-nav-panel-assignment-details
      ehr-scratch-pad
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
    ui-agree(ref="submitDialog")
</template>
<script>
import UiLink from '@/app/ui/UiLink.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiAgree from '@/app/ui/UiAgree'
import EhrNavList from './EhrNavList'
import EhrNavPanelAction from './EhrNavPanelAction'
import EhrNavPanelAssignmentDetails from './EhrAssignmentDetails.vue'
import EhrScratchPad from '@/inside/components/EhrScratchPad'
import StoreHelper from '@/helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
import { ehrOnlyDemoText } from '@/appText'

export default {
  name: 'EhrNavPanel',
  components: {
    UiAgree, UiButton,
    UiLink,
    EhrNavList,
    EhrNavPanelAction,
    EhrNavPanelAssignmentDetails,
    EhrScratchPad
  },
  data: function () {
    return {
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    isActiveEhrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
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
    ehrOnlyDemoActivityButtonClicked () {
      const msg = ehrOnlyDemoText.activityDialogMessage
      const title = ehrOnlyDemoText.activityDialogTitle
      this.$refs.submitDialog.showDialog(title, msg)
    },
    ehrOnlyDemoActionButtonClicked () {
      const msg = ehrOnlyDemoText.submitDialogMessage
      const title = ehrOnlyDemoText.submitDialogTitle
      this.$refs.submitDialog.showDialog(title, msg)
    }
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