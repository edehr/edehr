<template lang="pug">
  div(class="content")
    div
      div(class="columns", v-if="isInstructor")
        div(class="column is-8") You are logged in as an instructor.  &nbsp;
          ui-link(:name="'instructor'") Go to your course lists.
        div(class="column is-4", v-if="isDemo")
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
      div(v-else class="demoLogin")
        ui-button(class="",@buttonClicked="demoLoginConfirm") Try out the prototype EdEHR
    div(v-else).
      Coming soon!  The EdEHR will have a demonstration version.
    ui-confirm(class="confirmDialog",ref="confirmDemoDialog", @confirm="proceedDemoToolConsumerCreation", htmlBody, saveLabel="Continue")

</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '../../app/ui/UiConfirm'
import UiLink from '../../app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import { demoText } from '@/appText'

const debugH = true

export default {
  components: {
    UiButton,
    UiConfirm,
    UiLink
  },
  data () {
    return {
    }
  },
  computed: {
    demoFeatureFlag () { return StoreHelper.getDemoFeatureFlag() },
    isDemo () { return StoreHelper.isDemoMode()  },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() }
  },
  methods: {
    demoLoginConfirm () {
      this.$refs.confirmDemoDialog.showDialog(demoText.login.title, demoText.logout.body)
    },
    async logoutUser () {
      await StoreHelper.logUserOutOfEdEHR()
      // refresh this page
      this.$router.go(0)
    },
    proceedDemoToolConsumerCreation () {
      StoreHelper.setLoading(null, true)
      if(debugH) console.log('Home proceedDemoToolConsumerCreation')
      return StoreHelper.createDemoToolConsumer()
        .then((demoToken) => {
          if (debugH) console.log(`Home consumer created. If have token? ${!!demoToken} go to demo`)
          if (!demoToken) {
            throw Error('Setup of demonstration space failed')
          }
          return StoreHelper.loadDemoData()
        })
        .then ( () => {
          StoreHelper.setLoading(null, false)
          this.$router.push('demo')
        }).catch(err => {
          if(debugH) console.log('createDemoToolConsumer Error', err)
          StoreHelper.setApiError(err)
          StoreHelper.setLoading(null, false)
        })
    }
  },

}
</script>

<style lang="scss" scoped>
  @import '../../scss/definitions';
  .confirmDialog {
    color: $grey80;
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