<template lang="pug">
  div(class="columns is-centered")
    section(v-if="canAccessDemo", class="content")
      h2(class="has-text-centered") {{ demoText.title }}
      div
        div(v-text-to-html="demoText.intro")
        div(class="columns")
          div(class="column")
            div
              label Select a user
            div
              select(v-model="persona", required)
                option(v-for="dp in demoPersonaList", v-bind:value="dp", :selected="dp===persona") {{dp.name}} ({{dp.role}})

          div(class="column")
            div(v-if="persona.role")
              span.
                Great! You will be
                {{ persona.role==='instructor' ? "instructor" : persona.role==='student' ? "student" : "" }}
                {{persona.name}}.
            div(v-else) Please choose a user to start the demo.
            div
              ui-button(:disabled="!isFormValid", @buttonClicked="submitDemoAccess")
                span Log into demo LMS
      div
        div(v-text-to-html="demoText.explanation")

    div(v-else)
      div You are not logged in to see the demo
      div Click &nbsp;
        ui-link(:name="'home'") here
        span &nbsp; to return to the main home page.

</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import UiLink from '@/app/ui/UiLink.vue'
import { demoText } from '@/demo/demoText'

export default {
  components: {
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
