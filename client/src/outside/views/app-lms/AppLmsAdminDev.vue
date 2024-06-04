<template lang="pug">
  div(class="centered-wrapper")
    app-lms-dev-area(@deleteAppLms='deleteAppLms', @deleteUser='deleteUser')
</template>

<script>
import AppLmsDevArea from '@/outside/components/app-lms/AppLmsDevArea.vue'
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'
import { appLmsClientDeleteAppLms, appLmsClientDeleteUser } from '@/helpers/app-lms-helper'

export default {
  extends: AppLmsCommon,
  components: {
    AppLmsDevArea,
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    deleteAppLms (appLms) {
      if (appLms) {
        appLmsClientDeleteAppLms(appLms._id)
      }
    },
    deleteUser (user) {
      if (user) {
        appLmsClientDeleteUser(user._id)
      }
    },
    async loadComponent () {
      console.log('==== App Lms Admin Dev loading ')
    },

  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
