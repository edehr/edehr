<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper app")
      ui-spinner(:loading="isLoading")
      app-header
      main(class="ehr_layout__main")
        div(class="ehr_layout__nav bigger-screens")
          ehr-nav-panel
        div(class="ehr_layout__content")
          div(class="ehr_layout__content_banner")
            // the area for instructors to grade students, seed editors to see infor about the see and students to see their evaluations
            ehr-context-banner
            div(class="ehr_layout__content_banner_content")
              // banner with patient information
              ehr-banner
          div(class="ehr_layout__content_page")
            div(class="mobile-only")
              span(style="text-align: left; margin-left: 1em")
                fas-icon(icon="bars", @click="showingNavPanel = !showingNavPanel")
                transition(name="hamburger-action")
                  ehr-nav-panel(v-if="showingNavPanel")
            slot Main EHR content for a component will appear here. The component is selected by the router
    app-footer
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrBanner from '../components/EhrBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'
import UiSpinner from '../../app/ui/UiSpinner'
import StoreHelper from '../../helpers/store-helper'
import CaseContext from '../../helpers/case-context'

export default {
  name: 'LayoutEhr',
  components: {
    AppHeader,
    AppFooter,
    EhrBanner,
    EhrNavPanel,
    EhrContextBanner,
    UiSpinner
  },
  data: function () {
    const featureCaseContext = CaseContext.isCaseContextFeature()
    return {
      showingSpecial: false,
      showingNavPanel: false,
      featureCaseContext
    }
  },
  computed: {
    isLoading () {
      return StoreHelper.isLoading()
    },
  },
  // mounted: function () {
  //   console.log('LayoutEhr mounted')
  // },
  watch: {
    showingSpecial: function (flag) {
      StoreHelper.setShowAdvanced(flag)
    },

    featureCaseContext: function (val) {
      CaseContext.setFeature(val)
    },

    $route: function (curr, prev) {
      if (curr !== prev && this.showingNavPanel) {
        const currArray = curr.path.split('/')
        const prevArray = prev.path.split('/')
        // The third item in the path array contains information about the 
        // page, which was making the navigation awkward on mobile devices. 
        // By implementing this, we assure that the navPanel will only be hidden
        // if the current path is within the same group as the previous one. 
        if (currArray[2] === prevArray[2])
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
  &__main {
    color: $grey80;
    background-color: $white;
    display: flex;
    overflow: hidden;
    margin-top: auto;
    margin-bottom: 1rem;
  }
  &__main_content {
    flex:initial;
    width: 75%;
  }
  &__nav {
    padding: 0;
    min-height: $contentMinHeight;
    margin: 0;
    overflow-y: auto;
    flex:none;
    width: 25%;
  }
  &__content {
    padding: 0;
    min-height: $contentMinHeight;
    // set a ht so the inner ehr panel scrolls vertically.
    // without this the whole body scrolls by default and this "default' sometimes can become off
    height: 100vh;
    margin: 0;
    overflow-y: auto;
    overflow-x: auto;
  }
  &__content_banner {
    background-color: $grey10;
    color: $grey60;
    padding: 0;
    margin-left: $panelMarginLeft;
  }
  &__content_banner_content {
    padding: 0;
    //max-width: 80%;
  }
  &__content_page {
    padding: 0;
    //width: 100%;
    margin-left: $panelMarginLeft;
  }
}

.mobile-only {
  display: none;
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
/*
Mobile Up to 768px
Tablet Between 769px and 1023px
Desktop Between 1024px and 1215px
Widescreen Between 1216px and 1407px
FullHD 1408px and above
 */
@media screen and (max-width: 900px) {
  .mobile-only {
    display: block;
  }
  .bigger-screens {
    display: none;
  }
}

.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .15s;
}

.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}


</style>
