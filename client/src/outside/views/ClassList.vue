<template lang="pug">
  div
    zone-lms-page-banner
      activity-actions(class="flow_across_last_item")

    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{ text.ACTIVITY_LABEL}}
        div(class="details-value")
          div(v-text-to-html="activity.resource_link_title")
      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          fas-icon(class='fa', :icon='appIcons.lobj')
          span &nbsp; {{ assignment.name }}

    div(class="classlist-body")
      div(v-if="classList.length===0") No students have attempted this activity.
      div(v-else, v-for="(studentVisit) in classList", class="list-card list-element", :class="rowClass(studentVisit)")
        class-list-item(:studentVisit="studentVisit")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiLink from '@/app/ui/UiLink.vue'
import ClassListItem from '@/outside/components/lms-activity/ClassListItem'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageName from '@/outside/components/ZoneLmsPageName'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { Text } from '@/helpers/ehr-text'

const debug = false
export default {
  extends: OutsideCommon,
  components: { ZoneLmsPageBanner, ZoneLmsPageName, ActivityActions, UiLink, ClassListItem  },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    activityId () {
      return this.$store.getters['activityStore/activityId']
    },
    activityName () {
      return this.activity.resource_link_title
    },
    assignment () {
      return this.$store.getters['assignmentStore/assignment']
    },
    classList () {
      return StoreHelper.getClassList()
    },
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
        await StoreHelper.loadCurrentActivity()
        if (debug) console.log('CL loadComponent loadInstructorWithStudent', this.activityId)
        let result = await StoreHelper.loadInstructorWithStudent()
        if (result) {
          if (debug) console.log('CL results', result)
        } else {
          console.error('CL loadComponent no results', this.activityId)
        }
      } catch(error){
        console.error('CL loadComponent failed', error)
      }
    },
  }
}
</script>
