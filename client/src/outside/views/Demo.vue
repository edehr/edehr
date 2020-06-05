<template lang="pug">
  div(class="columns is-centered")
    section(v-if="canAccessDemo", class="column is-8")
      h2(class="has-text-centered") EdEHR Demonstration WIP - Select Your Character
      div(class="content")
        p.
          Welcome to the
          <span class="keyLetter">Ed</span>ucational
          <span class="keyLetter">E</span>lectronic
          <span class="keyLetter">H</span>ealth
          <span class="keyLetter">R</span>ecord
          (EdEHR) demonstration page. Here is where you can try out this educational resource
          that is designed to give practical experience with an EHR (Electronic Health Record) system (sometimes called
          EMR for Electronic Medical Record System) to post secondary health care students.
          From the list below select the type of user you'd like to experiment with. Do you wish to see the
          EdEHR from the point of view of the student or instructor?

        ul
          li(v-for="obj in demoPersonaList" :key="obj.user_id")
            label
              input(
                type="radio",
                :checked="persona.name === obj.name",
                :value="obj",
                @change="setPersona(obj)"
              )
              span(v-if="obj.roles === 'instructor'", class="icon")
                fas-icon(class="fa", icon="chalkboard-teacher")
              span(v-else, class="icon")
                fas-icon(class="fa", icon="graduation-cap")
              span {{obj.name}}
        div
          ui-button(
            :disabled="!isFormValid",
            @buttonClicked="submitDemoAccess"
          ) Log in as {{persona.name}}

    div(v-else)
      div You are not logged in to see the demo
      div Return to
        ui-link(:name="'home'") home page

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'

export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      persona: {}
    }
  },
  computed: {
    demoData () {
      return StoreHelper.getDemoTokenData()
    },
    demoPersonaList () {
      return this.demoData.personaList
    },
    canAccessDemo () {
      return !! this.demoData
    },
    isFormValid () {
      return Object.keys(this.persona).length > 0
    },
    demoToken () {
      return StoreHelper.getDemoToken()
    }
  },
  methods: {
    setPersona (obj) {
      this.persona = obj
      StoreHelper.setDemoPersona(obj)
    },
    submitDemoAccess () {
      this.$router.push('demo-course')
    },
  }
}
</script>

<style lang="scss" scoped>
  //@import '../../scss/definitions';
  .content {
    font-size: 1.2rem;
  }
  .keyLetter {
    font-size: 1.2rem;
  }
  input[type=checkbox] {
    transform: scale(1.5);
  }
  li {
    padding: 1rem 0;
  }
  .icon {
    color: #0473ea;
    margin: 0 1rem;
    font-size: 1.9rem;
    vertical-align: middle;
  }
</style>