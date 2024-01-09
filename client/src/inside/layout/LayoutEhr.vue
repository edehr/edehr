<template lang="pug">
  div(class="ehr_layout flow_down")
    div(class="sticky")
      app-header
      // banner for student, eval, seed, or ehr only
      ehr-context-banner
    main(:class="ehrOrLis")
      ehr-multi-patient-bar(class='ehr-multi-patient-bar')
      div(v-if="hasPatient")
        ui-not-signed-on
        div(class="ehr-context flow_across")
          div(class="pageTitle left_side") {{pageTitle}}
          // banner with patient information
          ehr-patient-banner(class="patient-banner right_side")
        div(class="ehr-main-content flow_across")
          div(class="ehr_layout__nav left_side bigger-screens-900")
            ehr-nav-panel
          div(class="ehr_layout__content right_side")
            div(class="smaller-than-900")
              span(class="ehr-nav-menu")
                span(class="ehr-nav-hamburger")
                  fas-icon(class="fa bars", icon="bars", @click="showingNavPanel = !showingNavPanel")
                transition(name="hamburger-action")
                  ehr-nav-panel(v-if="showingNavPanel")
            slot Main EHR content selected by the router
          ehr-scratch-pad-dialog(ref='scratchPad')
          ehr-eval-feedback-dialog(ref='feedbackDialog')
      div(v-else, class="ehr-no-content")
        div Search and select a patient.
    app-footer
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

export default {
  name: 'LayoutEhr',
  components: {
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
    pageTitle () { return StoreHelper.getPageTitle() },
    ehrOrLis () { return StoreHelper.isEHR_Showing() ? 'ehr-branding' : StoreHelper.isLIS_Showing() ? 'lis-branding' : ''},
    pId () { return this.$store.getters['mPatientStore/currentPatientObjectId'] },
    hasPatient () { return !! this.pId },
    evalDialogVisible () { return this.$store.getters['system/evalDialogVisible']},
    scratchPadVisible () { return this.$store.getters['system/scratchPadVisible']}

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
      if (val) this.$refs.feedbackDialog.showDialog()
    },
    scratchPadVisible (val) {
      if (val) this.$refs.scratchPad.showDialog()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
$contentMinHeight: 700px;

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
  .pageTitle {
    padding-left: $ehr-layout-padding-left;
  }
  .pageTitle,
  .patient-banner {
    padding-bottom: 5px;
    padding-top: 5px;
  }
}
.ehr-no-content {
  height: 40rem;
  display: flex;
  position: relative;
  //align-items: center;

  align-content: center;
  & div {
    font-size: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10rem;
    //width: 40rem;
  }
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
.left_side {
  width: 25%;
}
.right_side {
  width: 75%;
}
@media screen and (max-width: $main-width-threshold3) {
  .flow_across {
    flex-direction: column;
  }
  .left_side,
  .right_side {
    width: 100%;
  }
}

@media screen and (max-width: $main-width-threshold3) {
  .patient-banner {
    padding-left: $ehr-layout-padding-left;
  }
}
.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .15s;
}
.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}

.fa {
  height: 1.5em;
  color: $brand-primary;
  padding-top: 10px;
}

/* FONTS TEXT */
.pageTitle {
  font-weight: bold;
  font-size: 1.2rem;
}

/* COLOURS */
.ehr-context {
  background-color: $grey22;
}
.ehr-branding {
  .ehr-context {
    border-left: 2px solid $colour-brand-ehr;
    border-right: 2px solid $colour-brand-ehr;
  }
}
.lis-branding {
  .ehr-context {
    border-top: 2px solid $colour-brand-lis;
    border-left: 2px solid $colour-brand-lis;
    border-right: 2px solid $colour-brand-lis;
  }
}
</style>
