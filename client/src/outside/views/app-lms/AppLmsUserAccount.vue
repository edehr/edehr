<template lang="pug">
div(class="centered-wrapper")
  section(class="card")
    header.card-header
      p.card-header-title User Profile/Account
    .card-content
      app-lms-user-account-content
</template>

<script>
import AppLmsUserAccountContent from '@/outside/components/app-lms/AppLmsUserAccountContent.vue'
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'
import { APP_LMS_ACCESS_ROUTE_NAME } from '@/router'

export default {
  extends: AppLmsCommon,
  components: {
    AppLmsUserAccountContent,
  },
  data () {
    return {
    }
  },
  computed: {
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

</style>
