<template lang="pug">
  div
    div(class="details-action-bar")
      ui-link(:name="'courses'", :query="{activityId: activityId}")
        fas-icon(class="fa", :icon="appIcons.course")
        span &nbsp; {{ textRoutes.COURSES}}
      //activity-actions
    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{ text.ACTIVITY_LABEL}}
        div(class="details-value")
          div(v-text-to-html="activity.resource_link_title")
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}:
        div(class="details-value")
          div(v-text-to-html="activity.resource_link_description")
      div(class="details-row")
          div(class="details-name") {{text.LOBJ}}
          div(class="details-value")
            ui-link(:name="'learning-object'", :query="{learningObjectId: assignment._id}")
              fas-icon(class='fa', :icon='appIcons.lobj')
              span &nbsp; {{ assignment.name }}
      div(class="details-row")
        div(class="details-name") {{text.CLASS_LIST}}
        div(class="details-value")
          ui-link(:name="'classList'", :query="{activityId: activityId}")
            fas-icon(class='fa', :icon='appIcons.activity')
            span &nbsp; {{text.CLASS_LIST_BTN}}
      div(class="details-row")
        div(class="details-name") {{text.STATUS}}
        div(class="details-value") {{activity.closed ? "Closed" : "Open" }}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") {{text.DATES_VAL(createDate, lastUpdate) }}
      div(class="details-row")
        div(class="details-name") {{text.STUDENTS}}
        div(class="details-value")
          span {{text.STUDENTS_VAL(classList.length, classSubmittedList.length)}}

    div(v-show='false')
      div activityId {{ activityId }}
      div activity {{ activity }}
      div classList {{ classList }}
      div assignment {{ assignment }}
</template>

<script>
import { Text } from '@/helpers/ehr-text'
import { formatTimeStr} from '@/helpers/ehr-utils'

import UiLink from '@/app/ui/UiLink'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions'
import OutsideCommon from '@/outside/views/OutsideCommon'
export default {
  extends: OutsideCommon,
  components: {
    ActivityActions,
    UiLink
  },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      textRoutes: Text.ROUTE_NAMES,
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    activityId () {
      return this.$store.getters['activityStore/activityId']
    },
    assignment () {
      return this.$store.getters['assignmentStore/assignment']
    },
    classList () {
      return this.$store.getters['instructor/list']
    },
    classSubmittedList () {
      return this.classList.filter(sv => sv.activityData.submitted)
    },
    lastUpdate () {
      return formatTimeStr(this.activity.lastDate)
    },
    createDate () {
      return formatTimeStr(this.activity.createDate)
    },
  },
  methods: {
    /*
    LmsActivity is THE landing place for all instructor users. The LTI process brings all
    instructors here. In the url will be the expected activityId. Also the user will have beeb
    authenticated so you can get the user id etc from the auth token.

    LmsActivity is also the page for instructors who wish to work with another activity that
    they will have selected from the Courses page.  In this case, as well as above, the
    request URL will have the activityId.

    Otherwise, the instructor user may arrive here via a page refresh, back button, or the
    LMS Activity option on the instructor tools menu. In each of these situations the
    request url does not have the activityId.

    If request has activityId then store it. Then proceed.
    - retrieve the stored activityId
    - use this to load the activity

    ALSO IMPORTANT is other pages need to load the current activity, such as the class list page.
     */
    async loadComponent () {
      const fromRoute = this.$route.query.activityId
      const fromStore = this.$store.getters['activityStore/activityId']
      const activityId = fromRoute ? fromRoute : fromStore
      const activity = await this.$store.dispatch('activityStore/loadAsCurrentActivity', activityId)
      // await StoreHelper.loadAssignment(activity.assignment)
      await this.$store.dispatch('assignmentStore/load', activity.assignment)
      await this.$store.dispatch('instructor/loadClassList')

    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.lms-activity-page {
  margin-left: 5rem;
}
.activity-list {
  margin: 2rem 0;
}
@media screen and (max-width: $main-width-threshold2){
  .lms-activity-page {
    margin-left: 0;
  }
}
</style>
