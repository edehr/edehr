<template lang="pug">
  div(class="ehr_layout flow_down", :class='{compactLayout : isCompact}')
    div(class="sticky")
      app-header
      // banner for student, eval, seed, or ehr only
      ehr-context-banner
    main(:class="ehrOrLis")
      ehr-multi-patient-bar(class='ehr-multi-patient-bar')
      div(v-if="!hasPatient", class="ehr-no-content")
        div Search and select a patient.
      div(v-if="hasPatient")
        // Once there is a patient open then prompt user to do the simulated sign on if they haven't.
        ui-not-signed-on
        // patient banner area. Also displays current ehr page
        div(class="ehr-banner-context flow_across")
          div(class="pageTitle left_side_banner") {{pageTitle}}
          // banner with patient information
          ehr-patient-banner(class="patient-banner right_side_banner")
          ui-button(value="lay-summary", class="banner-button", v-on:buttonClicked="openPatientSummary" )
            fas-icon(class='fa', icon='user-injured', title='patient summary')

        div(class="ehr-context flow_across")
          div(v-if="smallerThan900Window")
            div.smallLeftSide
              span(class="ehr-nav-menu")
                span(class="ehr-nav-hamburger")
                  fas-icon(class="fa bars", icon="bars", @click="showingNavPanel = !showingNavPanel")
                transition(name="hamburger-action")
                  ehr-nav-panel(v-if="showingNavPanel")
            div.smallRightSide
              slot(name='default') Main EHR content selected by the router
          div(v-else, class='ehr-large-screen')
            div(:class="ehrNavCollapsed ? 'ehr-nav-collapsed' : 'ehr-nav-full'", class='ehr-main')
              div(class='nav-side')
                ui-button(v-on:buttonClicked="toggleCollapseNavPanel" )
                  fas-icon(class='fa', :icon='ehrNavCollapsed ? "angle-right" : "angle-left" ', :title='ehrNavCollapsed ? "expand navigation" : "shrink navigation"')
                ehr-nav-panel
              div(class='content-side')
                slot(name='default') Main EHR content selected by the router
    app-footer
    ehr-scratch-pad-dialog(ref='scratchPad')
    ehr-eval-feedback-dialog(ref='feedbackDialog')
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import EhrNavPanel from '../components/EhrNavPanel.vue'
import EhrPatientBanner from '../components/EhrPatientBanner.vue'
import EhrContextBanner from '../components/EhrContextBanner'
import UiSpinner from '../../app/ui/UiSpinner'
import StoreHelper from '../../helpers/store-helper'
import EhrMultiPatientBar from '@/inside/components/EhrMultiPatientBar.vue'
import EhrScratchPadDialog from '@/inside/components/EhrScratchPadDialog.vue'
import UiNotSignedOn from '@/app/ui/UiNotSignedOn.vue'
import AppDialog from '@/app/components/AppDialogShell.vue'
import EhrEvalFeedbackDialog from '@/inside/components/EhrEvalFeedbackDialog.vue'
import UiButton from '@/app/ui/UiButton.vue'

export default {
  name: 'LayoutEhr',
  components: {
    UiButton,
    EhrEvalFeedbackDialog,
    AppDialog,
    UiNotSignedOn,
    EhrScratchPadDialog,
    EhrMultiPatientBar,
    AppHeader,
    AppFooter,
    EhrPatientBanner,
    EhrNavPanel,
    EhrContextBanner,
    UiSpinner
  },
  data: function () {
    return {
      showingNavPanel: false,
    }
  },
  computed: {
    ehrNavCollapsed () { return this.$store.getters['system/ehrNavCollapsed']},
    ehrOrLis () { return StoreHelper.isEHR_Showing() ? 'ehr-branding' : StoreHelper.isLIS_Showing() ? 'lis-branding' : ''},
    evalDialogVisible () { return this.$store.getters['system/evalDialogVisible']},
    hasPatient () { return !! this.pId },
    isCompact () { return this.userSettings.ehrLayout === 'compact' },
    pageTitle () { return StoreHelper.getPageTitle() },
    pId () { return this.$store.getters['mPatientStore/currentPatientObjectId'] },
    scratchPadVisible () { return this.$store.getters['system/scratchPadVisible']},
    smallerThan900Window () { return this.$store.getters['system/smallerThan900Window']},
    userSettings () { return this.$store.getters['userStore/userSettings'] || {} },
  },
  methods: {
    openPatientSummary () {
      // $router.push({ name: 'patient-summary'})
      // const routeData = this.$router.resolve({name: 'patient-summary', query: {data: "someData"}});
      const routeData = this.$router.resolve({name: 'patient-summary'})
      window.open(routeData.href, '_blank')
    },
    toggleCollapseNavPanel () {
      const value = this.ehrNavCollapsed
      this.$store.dispatch('system/setEhrNavCollapsed', !value)
    },
  },
  watch: {
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
    },
    evalDialogVisible (val) {
      if (val && this.$refs.feedbackDialog) this.$refs.feedbackDialog.showDialog()
    },
    scratchPadVisible (val) {
      if (val && this.$refs.scratchPad) this.$refs.scratchPad.showDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
$contentMinHeight: 700px;
main {
  padding-bottom: 5rem;
}

/* Padding and margins and overflow*/
.ehr_layout {
  margin: 1px;
  .ehr_layout__nav {
    padding: 0;
    margin: 0;
    position: relative;
  }
  .ehr_layout__nav_control {
    position: relative;
    bottom: 0;
  }
  .ehr_layout__content {
    padding: 0;
    margin: 0;
  }
  .pageTitle,
  .patient-banner {
    padding-bottom: 5px;
    padding-top: 5px;
  }
  .patient-banner {
    padding-left: 5px;
  }
}
.ehr-no-content {
  height: 40rem;
  display: flex;
  position: relative;
  align-content: center;
  & div {
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    //width: 40rem;
  }
}
.ehr-banner-context {
  padding-left: $ehr-layout-padding-left;
  padding-right: $ehr-layout-padding-left;
  gap: 10px;
}
.left_side_banner { // page title
  width: 15%;
}
.right_side_banner { //patient data
  width: 100%; // set width to fill container to get nice wrapping
}

@media screen and (max-width: $main-width-threshold3) {
  .flow_across {
    flex-direction: column;
  }
  .left_side_banner,
  .right_side_banner,
  .left_side_content,
  .right_side_content {
    width: 100%;
  }
}

.ehr-main {
  position: relative;
  display: flex;
  flex-direction: row;
}
.ehr-large-screen {
  width: 100%;

  .content-side {
    flex: 1 1 auto;
    width: 52%;

    .nav-side {
      flex: 0 1;
    }
  }
}

.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .15s;
}
.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}

.banner-button {
  width: 1.5rem;
}

/* FONTS TEXT */
.pageTitle {
  font-weight: bold;
  font-size: 1.2rem;
}

/* COLOURS */
.content-side {
  border-bottom: 1px solid $grey40;
}
.ehr-banner-context {
  border-bottom: 1px solid black;
}
.nav-side,
.ehr-banner-context {
  background-color: $grey22;
}
.ehr-context {
  background-color: white;
}
.ehr-branding {
  .ehr-banner-context,
  .ehr-context {
    border-left: 2px solid $colour-brand-ehr;
    border-right: 2px solid $colour-brand-ehr;
  }
}
.lis-branding {
  .ehr-banner-context,
  .ehr-context {
    border-top: 2px solid $colour-brand-lis;
    border-left: 2px solid $colour-brand-lis;
    border-right: 2px solid $colour-brand-lis;
  }
}
</style>
