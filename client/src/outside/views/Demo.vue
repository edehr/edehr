<template lang="pug">
  div(class="columns is-centered showing-labels")
    section(v-if="canAccessDemo", class="content")
      div(style="display: flex;")
        h2(class="has-text-centered") {{ demoText.title }}
        ui-button(@buttonClicked="logout" secondary, style='margin-left: auto;')
          span Exit Full Demo
      div
        div(v-text-to-html="demoText.intro")
        div(class="columns")
          div(class="column is-4")
            div
              label {{demoText.selectUserLabel}}
            div
              select(v-model="persona", required)
                option(v-for="dp in demoPersonaList", :value="dp", :selected="dp===persona") {{dp.name}} ({{dp.role}})
          div(class="column is-8")
            div(v-if="persona.role")
              span.
                Great! You will log in as:
                {{persona.name}}
                ({{ persona.role==='instructor' ? "instructor" : persona.role==='student' ? "student" : "" }})

            div(v-else) Select a user to start the demonstration mode.
            div
              ui-button(:disabled="!isFormValid", @buttonClicked="submitDemoAccess")
                span Login to Demo LMS
      div
        div(v-text-to-html="demoText.explanation")
      ui-confirm(
        class="confirmDialog",
        ref="confirmDialog",
        @confirm="demoLogOut",
        save-label="Logout")

    div(v-else)
      div You are not logged in to see the demo
      div Click &nbsp;
        ui-link(:name="'home'") here
        span &nbsp; to return to the main home page.

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import { demoText } from '@/appText'
import UiConfirm from '@/app/ui/UiConfirm'

export default {
  components: {
    UiConfirm,
    UiButton, UiLink
  },
  data () {
    return {
      persona: '',
      demoText: demoText
    }
  },
  computed: {
    demoPersonaList () {
      return StoreHelper.getDemoTokenData().personaList
    },
    canAccessDemo () {
      return StoreHelper.isDemoMode()
    },
    isFormValid () {
      return Object.keys(this.persona).length > 0
    }
  },
  methods: {
    submitDemoAccess () {
      StoreHelper.setDemoPersona(this.persona)
      this.$router.push('demo-course')
    },
    logout () {
      this.$refs.confirmDialog.showDialog(demoText.logout.title, demoText.logout.body)
    },
    async demoLogOut () {
      await StoreHelper.demoLogout()
      // StoreHelper.logUserOutOfEdEHR() clears local storage of demo data (the demo db)
      await StoreHelper.logUserOutOfEdEHR()
      this.$router.push('/')
    },

  },
  watch: {
    $route: function (route) {
      console.log('Demo page nav. Clear any previous AuthToken whether user came from an LMS or from the demo')
      StoreHelper.logUserOutOfEdEHR()
    }
  }
}
</script>

<style lang="scss" scoped>
  .content {
    font-size: 1.2rem;
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
  }
  select {
    width: 15rem;
  }

</style>