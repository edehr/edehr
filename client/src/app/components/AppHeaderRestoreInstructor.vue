<template lang="pug">
  div(class="flow_across menu_space_across")
    div(@click="restoreAsInstructor", class='titleBar',
      :title='navText.NORMAL_ROLE_TOOLTIP')
      fas-icon(class="fa", :icon="appIcons.course")
</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
import { t18EhrText } from '@/helpers/ehr-t18'
export default {
  components: {  },
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    navText () { return t18EhrText().zoneLmsNav},
  },
  methods: {
    restoreAsInstructor () {
      StoreHelper.restoreAsInstructor(this.$router)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '../../scss/definitions';
.fa {
  height: 1.5em;
  font-size: 1.6rem;
  color: $brand-primary;
  padding-left: 5px;
}
.titleBar {
  display: flex;
  //grid-template-columns: 1fr 1rem;
  line-height: 1.25rem;
  cursor: pointer;
  text-align: right;
}
</style>
