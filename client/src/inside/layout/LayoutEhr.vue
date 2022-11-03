<template lang="pug">
  div(class="ehr_layout")
    div(class="ehr_layout__wrapper app")
      ui-spinner(:loading="isLoading")
      app-header
      // ehr-context-banner lets instructors grade students, seed editors see seed info and students see their evaluations
      ehr-context-banner
      main(class="ehr_layout__main")
        div(class="ehr_layout__nav bigger-screens-900")
          ehr-nav-panel
        div(class="ehr_layout__content")
          div(class="ehr_layout__content_banner")
            // banner with patient information
            ehr-banner
          div(class="ehr_layout__content_page")
            div(class="smaller-than-900")
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
    return {
      showingSpecial: false,
      showingNavPanel: false,
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
$contentMinHeight: 700px;

/* layout */
.ehr_layout {
  height: 100vh;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  .ehr_layout__main {
    display: flex;
  }
  .ehr_layout__content {
    flex:initial;
    width: 75%;
  }
  .ehr_layout__nav {
    min-height: $contentMinHeight;
    flex:none;
    width: 25%;
  }
  .ehr_layout__content {
    min-height: $contentMinHeight;
    // set a ht so the inner ehr panel scrolls vertically.
    // without this the whole body scrolls by default and this "default' sometimes can become off
    height: 100vh;
  }
}

/*
  Borders and margins to illustrate page layout. Add ehr_structure to the ehr_layout
  element to see borders and margins to mark out the page structure.
 */
.ehr_structure {
  //border: 3px solid $border1;
  .ehr_layout__main {
    border: 3px dashed $border2;
    margin: 2px;
  }
  .ehr_layout__nav {
    border: 3px dashed $border3;
    margin: 2px;
  }
  .ehr_layout__content {
    border: 3px solid $border2;
    margin: 2px;
  }
  .ehr_layout__content_banner {
    border: 3px solid $border4;
    margin: 2px;
  }
  .ehr_layout__content_page {
    border: 3px solid $border6;
    margin: 2px;
  }
  footer {
    border: 3px solid $border2;
    margin: 2px;
  }
}

/* Padding and margins and overflow*/
.ehr_layout {
  margin: 1px;
  .ehr_layout__main {
    overflow: hidden;
    margin-top: auto;
    margin-bottom: 1rem;
  }
  .ehr_layout__nav {
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }
  .ehr_layout__content {
    padding: 0;
    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .ehr_layout__content_banner {
    padding: 0;
    margin-left: 0;
    overflow: hidden;
  }
  .ehr_layout__content_page {
    padding: 0;
    margin-left: 0;
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
/*
Mobile Up to 768px
Tablet Between 769px and 1023px
Desktop Between 1024px and 1215px
Widescreen Between 1216px and 1407px
FullHD 1408px and above
 */
@media screen and (max-width: $main-width-threshold3) {
  //.bigger-screens-900 {
  .ehr_layout {
    .ehr_layout__content {
      width: 100%;
    }
  }
}
.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .15s;
}
.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}

/* colours */
.ehr_layout {
  //background-color: $grey60;
  //.ehr_layout__main {
  //  color: $grey80;
  //  background-color: $white;
  //}
  .ehr_layout__content_banner {
    background-color: $grey20;
    color: $grey60;
  }
}


</style>
