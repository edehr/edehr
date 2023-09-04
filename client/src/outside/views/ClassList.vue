<template lang="pug">
  div
    zone-lms-page-banner
      div(class="flow_across menu_space_across flow_across_right")
        activity-actions(class="flow_across_last_item")

    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") Return to activity
        div(class="details-value")
          ui-link(:name="'lms-instructor-activity'")
            // no visit id because we are not changing visit
            fas-icon(class="fa", :icon="appIcons.activity")
            span &nbsp; {{activity.title}}
      div(class="details-row")
        div(class="details-name") {{text.GOTOLOBJ}}
        div(class="details-value")
          div(v-if='hasLinkedLearningObject')
            ui-link(:name="'learning-object'", :query="{learningObjectId: activity.learningObjectId}")
              fas-icon(class='fa', :icon='appIcons.lobj')
              span &nbsp; {{ activity.learningObjectName }}
          div(v-else) {{ text.ACTIVITY_MISSING}}
    div(class="classlist-body")
      div(v-if="classList.length===0", class='empty-message') {{ text.EMPTY_CLASSLIST }}
      div(v-else, class="e-table")
        div(class="thead")
          div(class="thcell e-name") Student
          div(class="thcell e-status") Submitted
          div(class="thcell e-date") Last date
          div(class="thcell e-description") Evaluation
          div(class="thcell e-actions") &nbsp;
        div(class="tbody")
          div(class="row", v-for="(studentVisit) in classList", :class="rowClass(studentVisit)")
            div(class='cell e-name') {{ studentVisit.user.fullName }}
            div(class='cell e-status') {{ studentVisit.activityData.submitted ? 'Yes' : '' }}
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

const debug = false
export default {
  extends: OutsideCommon,
  components: { UiLink, ActivityActions, ClassListActions, ZoneLmsPageBanner  },
  data () {
    return {
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
      return StoreHelper.getClassList()
    },
    hasLinkedLearningObject () { return this.activity.hasLinkedLearningObject },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === StoreHelper.getCurrentEvaluationStudentId()
      return selected ? 'selected' : ''
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
        await this.$store.dispatch('courseStore/setCourseId', activityRecord.courseId)
        await this.$store.dispatch('courseStore/loadCurrentCourse')
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
  min-width: 9rem;
  width: 9rem;
}
</style>
