<template lang="pug">
  div(class="content")
    div(class="enter-demo-buttons")
      div(v-if="showEhrOnlyDemoLink")
        ui-button(class="demoButton",@buttonClicked="gotoEhrOnly", :title='tip1') EHR only demonstration
        //div &nbsp;
      div(v-if="demoFeatureFlag && !isDemo")
        ui-button(class="demoButton",@buttonClicked="demoLoginConfirm", :title='tip2') Full EdEHR demonstration
    div
      div(class="columns", v-if="isInstructor")
        div(class="column is-8") You are logged in as an instructor.  &nbsp;
          ui-link(:name="'courses'") Go to your course lists.
        div(class="column is-4")
          ui-button(@buttonClicked="logoutUser") Sign out as instructor
      div(class="columns", v-if="isStudent")
        div(class="column is-10") You are logged in as a student. &nbsp;
          ui-link(:name="'ehr'") Go to your assignment.
        div(class="column is-2", v-if="isDemo")
          ui-button(@buttonClicked="logoutUser") Sign out as student
    div(v-if="demoFeatureFlag")
      div(v-if="isDemo")
        div You are already logged into the demonstration. &nbsp;
          ui-link(:name="'demo'") Click here to return to the demonstration page.
      //div(v-else class="demoLogin")
      //  ui-button(class="demoButton",@buttonClicked="demoLoginConfirm", :title='tip2') Full EdEHR demonstration
    div(v-else).
      There is a full demonstration mode that shows how the EdEHR works with learning management systems.
      Contact <a href="mailto:info@edehr.org">info@edehr.org</a> for more information.
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
    demoFeatureFlag () { return StoreHelper.getDemoFeatureFlag() },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    showEhrOnlyDemoLink () { return !this.isDemo },
  },
  methods: {
    demoLoginConfirm () {
      this.$refs.confirmDemoDialog.showDialog(demoText.login.title, demoText.login.body)
    },
    async logoutUser () {
      await StoreHelper.logUserOutOfEdEHR()
      // refresh this page
      this.$router.go(0)
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
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .demoButton {
    ////box-shadow: 2px 2px 2px 2px  #DC143C;
    //box-shadow: 2px 2px 2px 2px  $brand-primary-hover;
    ////border: 1px solid #ff5555;
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
