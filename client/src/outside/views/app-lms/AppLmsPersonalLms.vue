<template lang="pug">
div(class="centered-wrapper")
  <!-- ---------------------------- USER's LMS ---------------------------------------------------- -->
  section(class="card")
    header.card-header
      p.card-header-title Personal EdEHR Lite
    .card-content
      div(v-if='!isConfigured')
        p
          strong You must configure your profile before you can proceed
        router-link(:to="{ name: 'AppLmsUserAccount' }") User Profile
      div(v-else)
        section(v-if="userOwnedAppLms")
          app-lms-personal-lms-component(:userOwnedAppLms='userOwnedAppLms')
        section(v-else)
          p.
            You can create your own EdEHR Lite "school" with its own very basic learning
            management system (LMS) and it will be connected to a real instance of the EdEHR.
          p.
            Once you create your own instance you will be able to invite a limited number of
            friends, colleagues, students, etc. to participate in the healthcare educational
            activities you create, in you instance.

          label Name of your instance
            span &nbsp;
            input(type="text", v-model="appLmsName", @input="validateLmsName")
            span &nbsp;
            ui-button(@buttonClicked="createAppLms", :disabled='!validName')
              span Create
          p {{ errorMessages }}
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import AppLmsPersonalLmsComponent from '@/outside/components/app-lms/AppLmsPersonalLmsComponent.vue'
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'
import { appLmsClientCreateAppLms, appLmsClientIsKeyInUse } from '@/helpers/app-lms-helper'

export default {
  extends: AppLmsCommon,
  components: {
    AppLmsPersonalLmsComponent,
    UiButton
  },
  data () {
    return {
      errorMessages: '',
      appLmsName: '',
      ltiSecret: ''
    }
  },
  computed: {
    isConfigured () { return this.$store.getters['appLmsStore/isConfigured']},
    userOwnedAppLms () { return this.$store.getters['appLmsStore/userOwnedAppLms'] },
    validName () { return this.errorMessages.length === 0 },
    userId () { return this.$store.getters['appLmsStore/appLmsUserId']}
  },
  methods: {
    async validateLmsName () {
      this.errorMessages = ''
      if (!this.userId) {
        this.errorMessages = 'Not logged in'
      } else if (this.appLmsName.length < 3 ) {
        this.errorMessages = 'Name is too short.'
      } else {
        let results = await appLmsClientIsKeyInUse(this.appLmsName)
        console.log('====== ', results.isKeyInUse)
        if (results.isKeyInUse) {
          console.log('====== key in use')
          this.errorMessages = 'That key is in use. Choose something else'
        }
      }
    },
    async createAppLms () {
      const payload = {
        ltiKey: this.appLmsName,
        userId: this.userId
      }
      await appLmsClientCreateAppLms(payload)
    },
    async loadComponent () {
    },
  }
}
</script>
