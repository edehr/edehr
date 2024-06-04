<template lang="pug">
div
  section
    p The name of your EdEHR Lite is  "{{userOwnedAppLms.appLmsName }}"
    p The people who you share this instance with will see your name: {{ ownerName }}
  section
    h3 Share with others
    p.
      Share your EdEHR Lite and give some access as a Student or Instructor.
      Simply give them a code word, tell them to visit this site,
      and enter the code word when they access the site.
    p Student access:  {{ userOwnedAppLms.inviteCodeWordStudent }}
    p Instructor access:  {{ userOwnedAppLms.inviteCodeWordTeacher }}

  section
    h3 Access your LMS
    app-lms-course-list(:toolConsumerId='userOwnedAppLms.toolConsumer', given='Foo', family='Bar', role='instructor')

  div(v-if="showTable")
    input(type='text', v-model='studentJoinCode', @input='validateCode')
    span &nbsp;
    ui-button(@buttonClicked="copyJoinStudent", :disabled='!joinCodeIsValid')
      span Copy Link for Student
    div(v-show="studentJoinCode")
      p.
        Your clipboard contains the link below. Now paste this link into an email to your students.
      p Code: {{ studentJoinCode }}

    p.
      My plan is.
    ul
      li let user create codes with role or just set options to 'blue' red' 'green' for example
      li or not even to create codes ... just hard code them to get rest going
      li may limit number of codes that can be outstanding?
      li api end point to add a code
      li api end point to get list of codes
      li codes have expiry -- later
      li codes have role (student vs instructor)  or just do instructor role for now
      li can give out the code
      li later do the clipboard url
    p The above is LATER .. for now focus on the following ...
    ul
      li user can come to site with code
      li enter code on page
      li validate code is 'blue' the hard coded key
      li so LATER: code is validated against db --- api end point to validate code and get lms details
      li next user enters email and validates with code
      li next user is joined into the lms with role.
      li next user can see the lms's they have joined
      li next user can enter the lms
    table
    thead
      th id
      th name
      td consumer id
      td created
      td last update
    tbody
      tr(v-for='appLms in [userOwnedAppLms]')
        td {{appLms._id }}
        td {{appLms.appLmsName }}
        td {{appLms.toolConsumer }}
        td {{appLms.createDate }}
        td {{appLms.lastUpdateDate }}

</template>

<script>
import { appLmsClientDeleteAppLms, makeInviteCode } from '@/helpers/app-lms-helper'
import UiButton from '@/app/ui/UiButton.vue'
import AppLmsCourseList from '@/outside/views/app-lms/AppLmsCourseList.vue'

export default {
  components: {
    AppLmsCourseList,
    UiButton
  },
  data () {
    return {
      showTable: false,
      joinCodeIsValid: false,
      studentJoinCode: '',
      baseUrl: window.origin +'/app-lms-user-join'
    }
  },
  props: {
    userOwnedAppLms: { type: Object}
  },
  computed: {
    owner () { return this.userOwnedAppLms.owner },
    ownerName () { return this.owner.givenName + ' ' + this.owner.familyName }
  },
  methods: {
    validateCode () {
      this.joinCodeIsValid = this.studentJoinCode.length >= 5
    },
    copyJoinStudent () {
      this.studentJoinCode = makeInviteCode()
      this.copyJoinText(this.studentJoinCode)
    },
    copyJoinText (code) {
      let joinText = this.baseUrl + '?code=' + code
      navigator.clipboard.writeText(joinText)
    },
    deleteAppLms (appLms) {
      if (appLms) {
        appLmsClientDeleteAppLms(appLms._id)
      }
      this.loadComponent()
    },
  }
}
</script>
