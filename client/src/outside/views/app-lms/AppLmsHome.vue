<template lang="pug">
div(class="centered-wrapper")
  <!-- ---------------------------- USER ---------------------------------------------------- -->
  section(class="card")
    header.card-header
      p.card-header-title Introduction
    .card-content
      p.
        EdEHR Lite is a very limited learning management system that will allow people to explore the EdEHR
        without needing to configure a real LMS (e.g. Moodle, D2L, Canvas, etc)
      div(v-if='!isConfigured')
        p
          strong You must configure your profile before you can proceed
      table
        tr
          td
            router-link(:to="{ name: 'AppLmsUserAccount' }") User Profile
          td View and configure your account
        tr
          td
            router-link(:to="{ name: 'AppLmsPersonalLms' }") Personal EdEHR Lite
          td Create and work with your own EdEHR Lite LMS
        tr
          td
            router-link(:to="{ name: 'AppLmsUserLinks' }") Shared with you
          td Access shared instances of EdEHR Lite LMS


</template>

<script>
import { APP_LMS_ACCESS_ROUTE_NAME } from '@/router'
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'

export default {
  extends: AppLmsCommon,
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    givenName () { return this.$store.getters['appLmsStore/givenName']},
    familyName () { return this.$store.getters['appLmsStore/familyName']},
    isConfigured () { return this.givenName || this.familyName },
    appLmsTokenData () { return this.$store.getters['appLmsStore/appLmsTokenData'] },
    userId () { return this.$store.getters['appLmsStore/appLmsUserId'] },
  },
  methods: {
    async loadComponent () {
      // console.log('==== App Lms Dash loadComponent with user id: (',this.userId,')')
      if (!this.userId) {
        console.log('==== App Lms Dash No user id so go to access page')
        await this.$router.push({ name: APP_LMS_ACCESS_ROUTE_NAME })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

</style>
