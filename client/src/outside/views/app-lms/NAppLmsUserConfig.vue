<template lang="pug">
  section(class="centered-wrapper")
    h3 Profile
    p.
      EdEHR Lite requires users to provide a profile name.
      Your name will be seen by others, but only when you share your EdEHR Lite with them,
      or when you join into another EdEHR Lite.
    div
      label Given &nbsp;
        input(type='text', v-model='given')
      span &nbsp;
      label Family &nbsp;
        input(type='text', v-model='family')
      span &nbsp;
      ui-button(@buttonClicked='saveName', :disabled='!enableSave')
        span Save
      span &nbsp;
      ui-button(v-if='showCancel', secondary, @buttonClicked='cancelSave')
        span Cancel

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { appLmsClientUpdateUserData } from '@/helpers/app-lms-helper'
import store from '@/store'
import { APP_LMS_DASH_ROUTE_NAME } from '@/router'
import AppLmsCommon from '@/outside/views/app-lms/AppLmsCommon.vue'

export default {
  extends: AppLmsCommon,
  components: {
    UiButton
  },
  data () {
    return {
      given: '',
      family: '',
    }
  },
  computed: {
    givenName () { return this.$store.getters['appLmsStore/givenName']},
    familyName () { return this.$store.getters['appLmsStore/familyName']},
    showCancel () { return this.givenName || this.familyName },
    userDataSame () { return this.givenName === this.given && this.familyName === this.family},
    enableSave () { return !this.userDataSame && !!this.given && !!this.family }
  },
  methods: {
    cancelSave () {
      console.log('==== App Lms User Config go to dashboard page')
      this.$router.push({name: APP_LMS_DASH_ROUTE_NAME} )
    },
    async saveName () {
      const appLmsUserId = this.$store.getters['appLmsStore/appLmsUserId']
      let payload = Object.assign({}, this.appUserData)
      payload._id = appLmsUserId
      payload.givenName = this.given
      payload.familyName = this.family
      await appLmsClientUpdateUserData(payload)
      await this.$router.push({name: APP_LMS_DASH_ROUTE_NAME} )
    },
    async loadComponent () {
      this.given = this.givenName
      this.family = this.familyName
    }
  },
  watch: {
    givenName () { this.given = this.givenName},
    familyName () { this.family = this.familyName},
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
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
