<template lang="pug">
  div(class="outside-layout")
    ui-spinner(:loading="isLoading")
    slot(name="outside-header", class="outside-header")
      app-header
      div(class="app")
        main(class="outside-main")
          div(name="mainContent", class="outside-content")
            div(class="section")
              slot
        slot(name="outside-footer", class="outside-footer")
      div(v-if="isDeveloper")
        div(style="display:none") Is developing content: {{ isDevelopingContent }} developContent: {{ developContent }}
        input(type="checkbox", id="develop-content", v-model="developContent" )
        label(for="develop-content") Course designer functionality
      input(class="checkbox", type="checkbox", v-model="showingSpecial")
      div(v-show="showingSpecial")
        ehr-special
      app-footer

</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../../inside/components/EhrSpecial.vue'
import StoreHelper from '../../helpers/store-helper'
import UiLink from '../../app/ui/UiLink.vue'
import UiSpinner from '../../app/ui/UiSpinner'

export default {
  name: 'LayoutOutside',
  components: {
    AppFooter,
    AppHeader,
    EhrSpecial,
    UiLink,
    UiSpinner
  },
  data: function () {
    return {
      showingSpecial: false,
      developContent: false
    }
  },
  watch: {
    developContent: function () {
      // when the model changes due to user action in the UI or in the next method update the store
      // console.log('LayoutOutside watch isDeving developContent', this.developContent)
      StoreHelper.setIsDevelopingContent( this.developContent)
    },
    isDevelopingContent: function () {
      // console.log('LayoutOutside watch isDeving isDevelopingContent', this.isDevelopingContent)
      this.developContent = this.isDevelopingContent
    },
    showingSpecial: function (flag) {
      StoreHelper.setShowAdvanced(flag)
    }
  },
  computed: {
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    isDeveloper () {
      return StoreHelper.isDeveloper()
    },
    isLoading () {
      return StoreHelper.isLoading()
    }
  },
  mounted: function () {
    // console.log('LayoutOutside mounted, isDeving isDevelopingContent', typeof this.isDevelopingContent)
    this.developContent = this.isDevelopingContent
  }
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
