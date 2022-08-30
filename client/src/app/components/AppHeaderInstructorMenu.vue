<template lang="pug">
  div(class="secondMenu")
    div(v-if='pageIcon', class='outer-page-title')
      fas-icon( class='fa', :icon='pageIcon')
      span  &nbsp; {{pageTitle}}
    div(v-else,, class='outer-page-title') {{ pageTitle }}
    app-instructor-other-dropdown
</template>
<script>
import AppInstructorOtherDropdown from '@/app/components/AppInstructorOtherDropdown'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { AppInstructorOtherDropdown },
  computed: {
    showItems () { return ! StoreHelper.isSmallWindow() },
    pageIcon () {
      // icon comes from route meta data
      let icon = StoreHelper.getPageIcon()
      icon = icon && icon.length > 0 ? icon : undefined
      return icon
    },
    pageTitle () { return StoreHelper.getPageTitle() }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.secondMenu {
  display: grid;
  grid-template-columns: 3fr 1fr;
  padding: 10px 20px;
}
/* Menu colours */
.secondMenu {
  background: $brand-primary-light;
  color: $black;
  .outer-page-title {
    color: $black;
    font-weight: bold;
    font-size: 1.4rem;
  }
}
</style>
