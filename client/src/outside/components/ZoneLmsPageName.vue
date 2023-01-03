<template lang="pug">
  div(class='zone_lms_page_name')
    fas-icon( class='fa', :icon='pageIcon')
    span  &nbsp; {{pageTitle}}
</template>
<script>
import StoreHelper from '../../helpers/store-helper'
export default {
  computed: {
    pageIcon () {
      // icon comes from route meta data
      let icon = StoreHelper.getPageIcon()
      icon = icon && icon.length > 0 ? icon : undefined
      return icon
    },
    pageTitle () { return StoreHelper.getPageTitle() },
  }
}
</script>

<style lang='scss' scoped >
@import '../../scss/definitions';
.zone_lms_page_name {
  font-size: 1.3rem;
}
@media screen and (max-width: $main-width-threshold3) {
  .zone_lms_page_name {
    margin-left: $ehr-layout-padding-left;
  }
}
</style>
