<template lang="pug">
  div
    div(class="details-action-bar")
      ui-link(:name="'lms-activity'", :query="{activityId: activityId}")
        fas-icon(class="fa", :icon="appIcons.activity")
        span &nbsp; Return to: {{ activityName }}
      activity-actions

    div(class="classlist-body")
      div(v-if="classList.length===0") No students have attempted this activity.
      div(v-else, v-for="(studentVisit) in classList", class="list-card list-element", :class="rowClass(studentVisit)")
        class-list-item(
          @selectedStudent="changeStudent(studentVisit)",
          :studentVisit="studentVisit")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
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
      list = list.slice() // make a copy so we can sort the list
      // for development you can make the class list large by setting hack to true
      const hackABigList = false
      if (hackABigList) {
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
        list = [...list, ...list,]
      }
      return list.sort((a,b) => a.user.fullName.localeCompare(b.user.fullName))
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv._id === StoreHelper.getCurrentEvaluationStudentId()
      return selected ? 'selected' : ''
    },
    changeStudent (sv) {
      if (debug) console.log('CL changeStudentForInstructor', sv._id)
      StoreHelper.changeStudentForInstructor(sv._id)
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
