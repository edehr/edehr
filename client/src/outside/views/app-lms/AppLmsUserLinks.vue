<template lang="pug">
div(class="centered-wrapper")
  <!-- ---------------------------- LINKS ---------------------------------------------------- -->
  section(class="card")
    header.card-header
      p.card-header-title
        span(v-if='hasShares') You have joined these shared instances of EdEHR Lite
        span(v-else) You have not joined any other instances of EdEHR Lite
    .card-content
      div(v-if='!isConfigured')
        p
          strong You must configure your profile before you can proceed
        router-link(:to="{ name: 'AppLmsUserAccount' }") User Profile
      div(v-else)
        section(v-if="hasInstructorShares")
          h2 As an instructor
          div(v-for='app in userAsInstructorAppLms', key='app.appLms')
            app-lms-component(:appLmsId='app.appLms', role='instructor')
        section(v-if="hasStudentShares")
          h2 As a student
          div(v-for='app in userAsStudentAppLms', key='app.appLms')
            app-lms-component(:appLmsId='app.appLms', role='student')
            //div appLms {{ app.appLms }}
</template>

<script>
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'
import AppLmsComponent from '@/outside/components/app-lms/AppLmsComponent.vue'

export default {
  extends: AppLmsCommon,
  components: {
    AppLmsComponent
  },
  data () {
    return {
    }
  },
  computed: {
    hasInstructorShares () { return this.userAsInstructorAppLms.length>0 },
    hasStudentShares () { return this.userAsStudentAppLms.length>0 },
    hasShares () { return this.hasInstructorShares || this.hasStudentShares },
    isConfigured () { return this.$store.getters['appLmsStore/isConfigured']},
    userAsStudentAppLms () { return this.$store.getters['appLmsStore/userAsStudentAppLms'] },
    userAsInstructorAppLms () { return this.$store.getters['appLmsStore/userAsInstructorAppLms'] }
  },
  methods: {
    async loadComponent () {
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

section.card {
  border: 1px solid $brand-primary-dark;
  margin-bottom: 1rem;
}
.content {
  font-size: 1.2rem;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
select {
  width: 15rem;
}
.demo_page{
  padding-left: $ehr-layout-padding-left;
}
</style>
