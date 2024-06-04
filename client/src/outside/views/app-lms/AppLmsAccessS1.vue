<template lang="pug">
  div(class="centered-wrapper")
    p.
      PLEASE.  If you are a student or instructor in a school that is using
      EdEHR then you must go to your school's learning management system
      (e.g. Moodle, Canvas, D2L, etc) to access EdEHR.
    p.
      This access page is for users who want to
      create a personal EdEHR Lite LMS
      or
      join into someone's EdEHR Lite LMS.

    div(class="access-area flow_across menu_space_across")
      section
        h2 Invite code
        p.
          Has someone given you a code word and invited you to use their LMS?
          Note, you only need to use the invite code once.
        label
          span Invite code &nbsp;
          input(type='text', v-model='inviteCode')

      section
        h2 Access EdEHR Lite LMS
        p Enter your email address to register or login.
        app-lms-enter-email(@submitUserEmail='userEmailSubmitted', :inviteCode='inviteCode')



    app-lms-access-reset

</template>

<script>

import AppLmsAccessReset from '@/outside/components/app-lms/AppLmsAccessReset.vue'
import AppLmsEnterEmail from '@/outside/components/app-lms/AppLmsEnterEmail.vue'
import AppLmsEnterInviteCode from '@/outside/components/app-lms/AppLmsEnterInviteCode.vue'
import UiButton from '@/app/ui/UiButton.vue'
import AppLmsWarning from '@/outside/components/app-lms/AppLmsWarning.vue'

export default {
  components: {
    AppLmsWarning,
    AppLmsAccessReset,
    AppLmsEnterEmail,
    AppLmsEnterInviteCode,
    UiButton
  },
  data () {
    return {
      inviteCode: undefined
    }
  },
  computed: {
    hasInviteCode () { return !!this.inviteCode }
  },
  methods: {
    submitInviteCode () {

    },
    userEmailSubmitted () {
      this.$router.push({name: 'AppLmsAccessS2'} )
    }
  },
  mounted () {
    const code = this.$route.query.code
    if (code) {
      this.inviteCode = code
      sessionStorage.setItem('appLmsInviteCode', this.inviteCode)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.access-area {
  section {
    width: 50%;
    border: 1px solid;
  }
}
@media screen and (max-width: $main-width-threshold3) {
  .access-area {
    section {
      width: 100%;
    }
  }
}
</style>
