<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper app")
      ui-spinner(:loading="isLoading")
      app-header
      ehr-context-banner
      main(class="ehr_layout__main columns")
        div(class="ehr_layout__nav column")
          ehr-nav-panel
        div(class="ehr_layout__content column")
          div(class="ehr_layout__content_banner")
            div(class="ehr_layout__content_banner_content")
              ehr-banner
          div(class="ehr_layout__content_page")
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
      showingSpecial: false
    }
  },
  computed: {
    isLoading () {
      return StoreHelper.isLoading()
    }
  },
  mounted: function () {
    console.log('LayoutEhr mounted')
  },
  watch: {
    showingSpecial: function (flag) {
      StoreHelper.setShowAdvanced(flag)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr_layout {

  // background-color: $grey60;
  height: 100vh;
  display: flex;
  flex-direction: column;
  &__wrapper {
    margin: 1px;
    
  }
  &__main {
    color: $grey80;
    background-color: $white;
    display: flex;
    overflow: hidden;
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
</style>
