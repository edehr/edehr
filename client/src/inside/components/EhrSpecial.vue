<template lang="pug">
  div(:class="$options.name")
    p This is the EHR special content panel.   Path: {{path}}
    div(:class="`${$options.name}__special`")
    hr
    div
      h3 Content Editor Data
      p isDevelopingContent {{ isDevelopingContent }}
      p sSeedId {{ sSeedId }}
      p seedStoreData {{ seedStoreData }}
      h4 sSeedContent:
      div(:class="`${$options.name}__data`")
        li(v-for="(value, propertyName) in sSeedContent", v-bind:key="propertyName")
          strong {{ propertyName }}:&nbsp;
          span {{ value }}
    hr
    div(v-show="isInstructor")
      h3 Instructor Data
      p isDevelopingContent {{ isDevelopingContent }}
      p sCurrentEvaluationStudentId: {{ sCurrentEvaluationStudentId }}
      p Class List with Student Visit
      div(:class="`${$options.name}__data`")
        ol
          li(class="classList", v-for="studentVisit in classList")
            ul
              li(v-for="(value, propertyName) in studentVisit", v-bind:key="propertyName")
                strong {{ propertyName }}
                span : {{ value }}
        hr
        h3 sCurrentActivity
        div(:class="`${$options.name}__data`")
          li(v-for="(value, propertyName) in sCurrentActivity", v-bind:key="propertyName")
            strong {{ propertyName }} :
            span {{ value }}
        h3 sCurrentStudentInfo
        div(:class="`${$options.name}__data`")
          li(v-for="(value, propertyName) in sCurrentStudentInfo", v-bind:key="propertyName")
            strong {{ propertyName }}
            span : {{ value }}
        hr
        h3 sCurrentStudentData
        div(:class="`${$options.name}__data`")
          li(v-for="(value, propertyName) in sCurrentStudentData", v-bind:key="propertyName")
            strong {{ propertyName }}
            span : {{ value }}
    hr
    h3 Ehr Data
    div(:class="`${$options.name}__data`")
      p mergedData:
        li(v-for="(value, propertyName) in mergedData", v-bind:key="propertyName")
          strong {{ propertyName }}
          span : {{ value }}
      p
        strong scratchData
        span : {{ scratchData }}
      p
        strong evaluationData
        span : {{ evaluationData }}
    hr
    h3 Visit
    div(:class="`${$options.name}__data`")
      p apiUrl: {{ apiUrl }}
      p topLevelMenu: {{ topLevelMenu }}
      p isLoggedIn: {{ isLoggedIn }}
      p sVisitData properties:
      li(v-for="(value, propertyName) in sVisitData", v-bind:key="propertyName", v-if="skipVisitProp(propertyName)")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 User
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in userInfo", v-bind:key="propertyName", v-if="propertyName !== 'ltiData'")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 sActivityData
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in sActivityData", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 Assignment
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in assignment", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 LMS Consumer
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in toolConsumer", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}
    hr
    h3 LTI Data
    div(:class="`${$options.name}__data`")
      li(v-for="(value, propertyName) in ltiData", v-bind:key="propertyName")
        strong {{ propertyName }}
        span : {{ value }}

    hr
    h3 Assignments in system
    div(:class="`${$options.name}__data`")
      table.table
        thead
          tr
            th.name(title="Name") EdEHR assignment name
            th.description(title="Description") Description
            th.external(title="External Id") Assignment external id
        tbody
          tr(v-for="item in assignmentsListing")
            td.name {{ item.name }}
            td.description {{ item.description}}
            td.external {{ item.externalId}}
</template>

<script>
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrSpecial',
  data () {
    return {}
  },
  computed: {
    path () {
      return this.$route.path
    },
    userInfo () {
      return this.$store.state.userStore.dataStore || {}
    },
    ltiData () {
      let usr = this.$store.state.userStore.dataStore || {}
      let lti = usr.ltiData || []
      lti = lti[0]
      try {
        lti = JSON.parse(lti)
      } catch (error) {
        lti = usr.ltiData || []
      }
      return lti
    },
    toolConsumer () {
      return this.$store.state.consumerStore.dataStore || {}
    },
    sVisitData () {
      return this.$store.state.visit.sVisitData || {}
    },
    assignmentsListing () {
      return this.$store.state.assignmentStore.assignmentsListing
    },
    assignment () {
      // TODO FIX assignment IN EHR SPECIAL
      var vi = this.sVisitData
      var act = vi && vi.assignment ? vi.assignment : {}
      return act
    },
    assignmentData () {
      return this.$store.getters['activityDataStore/assignmentData']
    },
    mergedData () {
      return StoreHelper.getMergedData()
    },
    scratchData () {
      return StoreHelper.getStudentScratchData()
    },
    evaluationData () {
      return StoreHelper.getEvaluationNotes()
    },
    sActivityData () {
      return StoreHelper.getActivityData()
    },
    sCurrentStudentData () {
      // TODO fix
      return {} //this.$store.state.ehrData.sCurrentStudentData
    },
    sCurrentStudentInfo () {
      // TODO fix
      return {} // this.$store.state.ehrData.sCurrentStudentInfo
    },
    sSeedContent () {
      return StoreHelper.getSeedContent()
    },
    sSeedId () {
      return StoreHelper.getSeedId()
    },
    seedStoreData () {
      return StoreHelper.getSeedEhrData()
    },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    classList () {
      return StoreHelper.getClassList()
    },
    sCurrentActivityId () {
      return StoreHelper.getActivityId()
    },
    sCurrentActivity () {
      return this.$store.state.instructor.sCurrentActivity || []
    },
    courses () {
      return this.$store.state.instructor.sCourses || []
    },
    sCurrentEvaluationStudentId () {
      return StoreHelper.getCurrentEvaluationStudentId()
    },
    isInstructor () {
      return StoreHelper.isInstructor(this)
    },
    apiUrl () {
      return this.$store.state.visit.apiUrl
    },
    topLevelMenu () {
      return this.$store.state.visit.topLevelMenu
    },
    isLoggedIn () {
      return this.$store.state.visit.isLoggedIn
    }
  },
  methods: {
    skipVisitProp (prop) {
      return !(prop === 'user' || prop === 'toolConsumer') // ||
      // prop === 'activity' ||
      // prop === 'assignment'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.EhrSpecial {
  @include wrapper('page');
  background-color: lavender;
  padding: 5rem 2rem;
  z-index: 10;

  &__data {
    li {
      margin-left: 2rem;
    }
    .classList {
      list-style-type: numbered;
    }
  }
}
</style>
