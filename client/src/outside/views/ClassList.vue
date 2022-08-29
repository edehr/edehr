<template lang="pug">
  div
    div(class="details-action-bar")
      ui-link(:name="'lms-activity'", :query="{activityId: activityId}")
        fas-icon(class="fa", :icon="appIcons.activity")
        span &nbsp; Return to: {{ activityName }}
      activity-actions

    div(class="classlist-body")
      div(v-for="(studentVisit) in classList", class="list-card list-element", :class="rowClass(studentVisit)")
        class-list-item(
          @selectedStudent="changeStudent(studentVisit)",
          :studentVisit="studentVisit")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EvalHelper from '@/helpers/eval-helper'
import { downArrayToCsvFile, formatTimeStr } from '@/helpers/ehr-utils'
import { Text } from '@/helpers/ehr-text'
import UiLink from '@/app/ui/UiLink.vue'
import ClassListItem from '@/outside/components/lms-activity/ClassListItem'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions'
import OutsideCommon from '@/outside/views/OutsideCommon'

const debug = false
export default {
  extends: OutsideCommon,
  components: { ActivityActions, UiLink, ClassListItem  },
  data () {
    return {
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
      let list = StoreHelper.getClassList()
      // for development make the class list large
      // TODO remove this for development hack
      const hackABigList = false
      if (hackABigList) {
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
      }
      return list
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
        await StoreHelper.loadAsCurrentActivity(this.activityId)
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
