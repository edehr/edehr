<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper")
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
      app-footer
      input(class="checkbox", type="checkbox", v-model="showingSpecial")
      div(v-show="showingSpecial")
        ehr-special
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrSpecial from '../components/EhrSpecial.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'
import UiSpinner from '../../app/ui/UiSpinner'

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
  data: function() {
    return {
      showingSpecial: false
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.system.isLoading
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr_layout {
  margin: 1px;
  background-color: $grey60;
  &__wrapper {
    width: 100%;
  }
  &__main {
    color: $grey60;
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
    @media #{$mediaQueryIpadLandscape} {
      min-width: $navMinWidthSmall;
      max-width: $navMaxWidthSmall;
    }
    @media #{$mediaQueryIpadPortrait} {
      min-width: $navMinWidthSmallest;
      max-width: $navMaxWidthSmallest;
    }
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
    overflow-x: hidden;
    width: $contentWidth;
    @media #{$mediaQueryIpadLandscape} {
      width: $contentWidthSmall;
    }
    @media #{$mediaQueryIpadPortrait} {
      width: $contentWidthSmallest;
    }
  }
  &__content_banner {
    background-color: $grey10;
    color: $grey60;
    padding: 0;
    margin-left: $panelMarginLeft;
    @media #{$mediaQueryIpadLandscape} {
      margin-left: $panelMarginLeftSmall;
    }
    @media #{$mediaQueryIpadPortrait} {
      margin-left: $panelMarginLeftSmallest;
    }
  }
  &__content_banner_content {
    padding: 0;
    max-width: 80%;
  }
  &__content_page {
    padding: 0;
    width: 100%;
    margin-left: $panelMarginLeft;
    @media #{$mediaQueryIpadLandscape} {
      margin-left: $panelMarginLeftSmall;
    }
    @media #{$mediaQueryIpadPortrait} {
      margin-left: $panelMarginLeftSmallest;
    }
  }
}
</style>
