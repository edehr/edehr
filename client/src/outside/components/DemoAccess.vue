<template lang="pug">
  div(class="content")
    div(v-if="hasErrMsg")
      div Can not show you the demonstration features because there is a system error.
      div {{ apiErrorMessage }}
      ui-button(@buttonClicked="logoutUser") Reset
    div(v-else)
      // no error
      div(v-if="isActive || (isDemo && demoFeatureFlag)")
        div {{ message }}
        div(class="enter-demo-buttons")
          div
            ui-button(@buttonClicked="goto") {{goToLabel}}
          div
            ui-button(@buttonClicked="logoutUser") Sign out
      div(v-else)
        div(class="enter-demo-buttons")
          div(v-if="showEhrOnlyDemoLink")
            ui-button(@buttonClicked="gotoEhrOnly", :title='tip1') EHR only demonstration
            //div &nbsp;
          div(v-if="demoFeatureFlag && !isDemo")
            ui-button(@buttonClicked="demoLoginConfirm", :title='tip2') Full EdEHR demonstration
          div(v-else).
            There is a full demonstration mode that shows how the EdEHR works with learning management systems.
            Contact <a href="mailto:info@edehr.org">info@edehr.org</a> for more information.
      div
        a(href="#introText") Learn more ...
    ui-confirm(class="confirmDialog",ref="confirmDemoDialog", @confirm="proceedDemoToolConsumerCreation", htmlBody, saveLabel="Continue")

</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '../../app/ui/UiConfirm'
import UiLink from '../../app/ui/UiLink'
import DemoHelper from '../../helpers/demo-helper'
import StoreHelper from '@/helpers/store-helper'
import { demoText } from '@/appText'

export default {
  components: {
    UiButton,
    UiConfirm,
    UiLink
  },
  data () {
    return {
      tip1: 'See what a medical student will experience when using the EdEHR. Includes a sample patient case study.',
      tip2: 'See how the EdEHR works within a mocked up learning management system. You can log in either as faculty or as a student. Faculty can configure the EdEHR, create course content and see their class lists and evaluate student work.'
    }
  },
  computed: {
    demoFeatureFlag () { return true }, //StoreHelper.getDemoFeatureFlag() },
    isActive () { return this.isStudent || this.isInstructor || this.isDemo  },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    lmsName () { return StoreHelper.lmsName() },
    showEhrOnlyDemoLink () { return !this.isDemo },
    hasErrMsg () { return !!this.$store.state.system.apiError },
    apiErrorMessage () { return this.$store.state.system.apiError },
    message () {
      let msg
      if (this.isStudent) {
        msg = 'You are logged in as a student from ' + this.lmsName
      } else if (this.isInstructor) {
        msg = 'You are logged in as an instructor from ' + this.lmsName
      } else {
        msg = 'You are already logged into the demonstration.'
      }
      return msg
    },
    goToLabel () {
      let msg
      if (this.isStudent) {
        msg = 'Go to your activity'
      } else if (this.isInstructor) {
        msg = 'Go to your course list'
      } else {
        msg = 'Go to the demonstration'
      }
      return msg
    },
    goToRouteName () {
      let msg
      if (this.isStudent) {
        msg = 'ehr'
      } else if (this.isInstructor) {
        msg = 'courses'
      } else {
        msg = 'demo'
      }
      return msg
    }
  },
  methods: {
    demoLoginConfirm () {
      this.$refs.confirmDemoDialog.showDialog(demoText.login.title, demoText.login.body)
    },
    async logoutUser () {
      // do a complete reset but keep the full demo feature flag
      await StoreHelper.logUserOutOfEdEHR()
      // const df = this.$store.getters['demoStore/getDemoFeatureFlag']
      // localStorage.clear()
      // await this.$store.dispatch('demoStore/setDemoFeatureFlag', df)
      // console.log('localStorage', localStorage)
      // refresh this page
      this.$router.go(0)
    },
    goto () {
      const routeName = this.goToRouteName
      this.$router.push({ name: routeName })
    },
    gotoEhrOnly () {
      this.$router.push('ehrOnlyDemo')
    },
    proceedDemoToolConsumerCreation () {
      const demoHelper = new DemoHelper()
      demoHelper.proceedDemoToolConsumerCreation()
        .then( () => {
          this.$router.push('demo')
        })
    }
  },

}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .confirmDialog {
    text-align: left;
    color: $grey80;
  }

  .enter-demo-buttons {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width : 1025px) {
    .enter-demo-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  .button {
    background-color: $toolbar-background-color;
    color: white;
    border-radius: 8px;
    font-size: 1.5rem;
    padding: 1.5rem 1rem;
  }
  a {
    color: white;
    font-weight: bold;
  }
  .demoLogin {
    text-align: center;
    margin-top: 1rem;
  }

</style>
