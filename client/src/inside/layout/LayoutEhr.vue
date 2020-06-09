<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper app")
      ui-spinner(:loading="isLoading")
      app-header
      main(class="ehr_layout__main columns")
        div(class="ehr_layout__nav column", v-if="!isResponsive")
          ehr-nav-panel
        div(class="ehr_layout__content column")
          div(class="ehr_layout__content_banner")
            ehr-context-banner
            div(class="ehr_layout__content_banner_content")
              ehr-banner
          div(class="ehr_layout__content_page")
            div(v-if="isResponsive")
              span(style="text-align: left; margin-left: 1em; font-size: 2em;",  @click="showingNavPanel = !showingNavPanel")
                fas-icon(icon="bars")
                transition(name="hamburger-action")
                  ehr-nav-panel(v-if="showingNavPanel", @pressed="showingNavPanel = false")
              slot Main EHR content for a component will appear here. The component is selected by the router
    input(class="checkbox", type="checkbox", v-model="showingSpecial")
    div(v-show="showingSpecial")
      ehr-special
    app-footer
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../components/EhrSpecial.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'
import UiSpinner from '../../app/ui/UiSpinner'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'LayoutEhr',
  components: {
    AppHeader,
    AppFooter,
    EhrBanner,
    // EhrPanel,
    EhrNavPanel,
    EhrContextBanner,
    EhrSpecial,
    UiSpinner
  },
  data: function () {
    return {
      showingSpecial: false,
      showingNavPanel: false,
    }
  },
  computed: {
    isLoading () {
      return StoreHelper.isLoading()
    },
    isResponsive () {
      return window.innerHeight <= 1400 && window.innerWidth <= 1024
    }
  },
  mounted: function () {
    console.log('LayoutEhr mounted')
  },
  watch: {
    showingSpecial: function (flag) {
      StoreHelper.setShowAdvanced(flag)
    },
    $route: function (curr, prev) {
      console.log('comparing routes >> ', curr, prev)
      if (curr !== prev && this.isResponsive && this.showingNavPanel) {
        this.showingNavPanel = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr_layout {

  background-color: $grey60;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 1px;
  // &__wrapper {
    
  // }
  &__main {
    color: $grey80;
    background-color: $white;
    display: flex;
    overflow: hidden;
    margin-top: auto;
  }
  &__main_content {
  }
  &__nav {
    /* max-width: $navWidth; */
    min-width: $navMinWidth;
    max-width: $navMaxWidth;
    width: 20%; /* of page width */
    padding: 0;
    min-height: $contentMinHeight;
    margin: 0;
    overflow-y: auto;
  }
  &__content {
    padding: 0;
    min-height: $contentMinHeight;
    margin: 0;
    overflow-y: auto;
    overflow-x: auto;
    width: $contentWidth;
  }
  &__content_banner {
    background-color: $grey10;
    color: $grey60;
    padding: 0;
    margin-left: $panelMarginLeft;
  }
  &__content_banner_content {
    padding: 0;
    max-width: 80%;
  }
  &__content_page {
    padding: 0;
    width: 100%;
    margin-left: $panelMarginLeft;
  }
}

.app {
  flex: 1 0 auto;
}

footer {
  flex-shrink: 0;
  justify-self: flex-end;
}

@media(device-width: 768px) and (device-height: 1024px){
    ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0,0,0,.5);
        -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    }
}

.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .3s;
}

.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}


</style>
