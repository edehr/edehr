<template lang="pug">
div
  div
    p.
      Your profile name is visible to others when you
      share your EdEHR Lite LMS or when you join someone else's EdEHR Lite LMS.
      The EdEHR Lite requires users to provide a profile name before they can
      create an instance or join other's.
    div(class='flow_across menu_space_across')
      div(v-if='!editName')
        label Given name
          input(type='text', v-model='givenName', disabled)
        span &nbsp;
        label Family name &nbsp;
          input(type='text', v-model='familyName', disabled)
        span &nbsp;
        ui-button(@buttonClicked="startEdit")
          span Edit
          div
      div(v-else)
        label Given name
          input(type='text',  ref="givenNameInput", v-model='given')
        span &nbsp;
        label Family name &nbsp;
          input(type='text', v-model='family')
        span &nbsp;
        ui-button(@buttonClicked='saveName', :disabled='!enableSave')
          span Save
        span &nbsp;
        ui-button(v-if='showCancel', secondary, @buttonClicked='cancelSave')
          span Cancel
    div(class='account-name')
      p.
        Account name: {{ appLmsUserEmail }}
        <br/>
        Your account name is not visible to others.
  //div userData {{ userData }}
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { appLmsClientUpdateUserData } from '@/helpers/app-lms-helper'

export default {
  components: {
    UiButton
  },
  data () {
    return {
      editName: false,
      given: '',
      family: '',
    }
  },
  computed: {
    isConfigured () { return this.$store.getters['appLmsStore/isConfigured']},
    appLmsUserEmail () { return this.$store.getters['appLmsStore/appLmsUserEmail']},
    appUserData () { return this.$store.getters['appLmsStore/appUserData']},
    givenName () { return this.appUserData.givenName },
    familyName () { return this.appUserData.familyName },
    showCancel () { return this.givenName || this.familyName },
    userDataSame () { return this.givenName === this.given && this.familyName === this.family},
    enableSave () { return !this.userDataSame && !!this.given && !!this.family }
  },
  methods: {
    startEdit () {
      this.given = this.givenName
      this.family = this.familyName
      this.editName = true
      this.$nextTick( () => {
        this.$refs.givenNameInput.focus()
      })
    },
    cancelSave () {
      this.editName = false
    },
    async saveName () {
      const appLmsUserId = this.$store.getters['appLmsStore/appLmsUserId']
      let payload = Object.assign({}, this.appUserData)
      payload._id = appLmsUserId
      payload.givenName = this.given
      payload.familyName = this.family
      await appLmsClientUpdateUserData(payload)
    },
  },
  mounted () {
    if (!this.givenName || ! this.familyName) {
      this.startEdit()
    }
  }
}
</script>

<style scoped>
.account-name {
  margin-top:1rem;
}
</style>
