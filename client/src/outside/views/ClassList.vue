<template lang="pug">
  div
    zone-lms-page-banner(:title='activityName')
      div(class="flow_across menu_space_across flow_across_right")
        ui-link(:name="'lms-instructor-activity'")
          fas-icon(class="fa", :icon="appIcons.activity")
          span &nbsp; Return to {{ activityName }}
        activity-actions(class="flow_across_last_item")

    zone-lms-instructions-header
      p This page shows you the class list for this activity. Here you can ....

    div(class="details-container card")
      span &nbsp; {{text.STUDENTS_VAL(classList.length, classSubmittedList.length)}}
    //div(class="details-row")
    //    span &nbsp; {{text.STUDENTS_VAL(classList.length, classSubmittedList.length)}}
    div(class="classlist-body")
      div(v-if="classList.length===0", class='empty-message') {{ text.EMPTY_CLASSLIST }}
      div(v-else, class="e-table")
        div(class="thead")
          div(class="thcell e-name") Student
          div(class="thcell e-status") Submitted
          div(class="thcell e-date") Last date
          div(class="thcell e-description") Evaluation notes
          div(class="thcell e-actions") &nbsp;
        div(class="tbody")
          div(class="row", v-for="(studentVisit) in classList", :class="rowClass(studentVisit)")
            div(class='cell e-name') {{ studentVisit.user.fullName }}
            div(class='cell e-status')
              div(v-if="studentVisit.activityData.submitted") Time to submit {{ timeToComplete(studentVisit) }} (hrs:mins:secs)
            div(class='cell e-date') {{ studentVisit.activityData.lastDate | formatDateTime }}
            div(class="cell e-description").
              {{ truncate(studentVisit.activityData.evaluationData, 100) }}
            div(class='cell e-actions')
              class-list-actions(:studentVisit='studentVisit')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { Text } from '@/helpers/ehr-text'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions.vue'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions.vue'
import UiLink from '@/app/ui/UiLink.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import { APP_ICONS } from '@/helpers/app-icons'

const debug = false
export default {
  extends: OutsideCommon,
  components: { ZoneLmsInstructionsHeader, UiLink, ActivityActions, ClassListActions, ZoneLmsPageBanner  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.ACTIVITY_PAGE,
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord']
    },
    activityId () {
      return this.$store.getters['activityStore/activityId']
    },
    activityName () {
      return this.activity.learningObjectName
    },
    classList () {
      return this.$store.getters['instructor/classList'] || []
    },
    classSubmittedList () {
      return this.classList.filter(sv => sv.activityData.submitted)
    },
    hasLinkedLearningObject () { return this.activity.hasLinkedLearningObject },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === StoreHelper.getCurrentEvaluationStudentId()
      return selected ? 'selected' : ''
    },
    timeToComplete (sv) {
      let ttc = sv.activityData.timeToComplete
      let days = Math.floor(ttc/(24*60*60))
      let leftSec = ttc - days * 24*60*60
      let hrs = Math.floor(leftSec/(60*60))
      leftSec = leftSec - hrs * 60*60
      let min = Math.floor(leftSec/(60))
      leftSec = leftSec - min * 60
      return (days > 0 ? days + ' days ' : '') + hrs + ':' + min + ':' + leftSec
    },
    async loadComponent () {
      /*
       */
      if (debug) console.log('CL loadComponent', this.activityId)
      try {
        const vFromRoute = this.$route.query.visitId
        const vFomStore = this.$store.getters['visit/visitId']
        const visitId = vFromRoute ? vFromRoute : vFomStore
        await StoreHelper.setVisitId(visitId)
        const activityRecord = await this.$store.dispatch('activityStore/loadActivityRecord')
        await this.$store.dispatch('courseStore/loadCurrentCourse', { courseId: activityRecord.courseId })
        await this.$store.dispatch('instructor/loadClassList')
      } catch(error){
        console.error('CL loadComponent failed', error)
      }
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.classlist-body {
  margin-top: 1rem;
}

.empty-message {
  font-weight: bold;
  font-size: 1.5rem;
}
.e-name {
  min-width: 10rem;
  width: 10rem;
}
.e-date {
  min-width: 7rem;
  width: 7rem;
}
.e-status {
  min-width: 4rem;
  width: 4rem;
}
.e-actions {
  min-width: 12rem;
  width: 12rem;
}
</style>
