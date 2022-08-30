<template lang="pug">
  div(class="outside-layout", :class='cssClass')
    ui-spinner(:loading="isLoading")
    slot(name="outside-header", class="outside-header")
      app-header
      div(class="app")
        main(class="outside-main")
          div(name="mainContent", class="outside-content")
            div(class="section")
              slot
        slot(name="outside-footer", class="outside-footer")
      // div Consumer: {{ lmsName }}
      app-footer

</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import StoreHelper from '../../helpers/store-helper'
import UiLink from '../../app/ui/UiLink.vue'
import UiSpinner from '../../app/ui/UiSpinner'
export default {
  name: 'LayoutOutside',
  components: {
    AppFooter,
    AppHeader,
    UiLink,
    UiSpinner
  },
  data: function () {
    return {
    }
  },
  computed: {
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    cssClass () {
      // if showing labels then apply a class on the layout to be used by buttons
      return this.showLabels ? 'showing-labels' : ''
    },
    isLoading () {
      return StoreHelper.isLoading()
    },
    lmsName ()          { return StoreHelper.lmsName() }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';


  // background: $grey10÷;
.outside-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  
}

.app {
  flex: 1 0 auto;
}
footer {
  flex-shrink: 0;
}


.section {
  padding: 1.5rem;
}
.nv-item {
  display: inline-block;
  padding-right: 1rem;
}
// .outside-layout {
  
//   .outside-header {
//   }
//   .outside-content {
//     margin: 0;
//   }
//   .outside-nav {
//     padding: 1.5rem 0 0 1.5rem;
//   }
// }
</style>
