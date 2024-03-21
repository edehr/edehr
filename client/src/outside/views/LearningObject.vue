<template lang="pug">
  div
    div
      zone-lms-page-banner(:title="learningObject.name", theme='lobj-theme')
        learning-object-actions(class="flow_across_last_item", :learningObject="learningObject", :showDetails='false')
    zone-lms-instructions-header
      p.
        A "Learning Object" is another name for "the content", or a "lesson plan", or "simulation plan". It defines what the student sees and does.
        A Learning Object may have a Case Study which provides the simulated health records for a patient.
        You may design a Learning Object to not have any case study which will require the student to search for the correct patient.
      p.
        Many activities might be using the same learning object so consider this when making changes to a learning object.

    div(class="details-container")

      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          div(class="details-important-text") {{ learningObject.name }}

      div(class="details-row")
        div(class="details-name") {{ text.DESCRIPTION }}
        div(class="details-value")
          div(class="details-important-text", v-text-to-html="learningObject.description")
      zone-lms-instructions-element  The name and description above are seen by the student.

      div(class="details-row")
        div(class="details-name") {{ text.SEED }}
        div(class="details-value")
          ui-link(v-if="learningObject.seedDataId", :name="'seed-view'", :query="{seedId: learningObject.seedDataId}") {{ learningObject.seedName }}
          div(v-else) (This learning object does not provide a case study.)
      zone-lms-instructions-element  Usually, each Learning Object has a Case Study which provides the simulated health records for a patient. Click on the link above to see, and perhaps edit, the details about this case study.

      div(class="details-row")
        div(class="details-name") Application type
        div(class="details-value")
          app-type-details-page-element(:appType="learningObject.appType", :showEx='showEx')
      app-type-details-page-element-explain

      div(v-if="learningObject.seedDataId", class="details-row")
        div(class="details-name") Simulation staging
        div(class="details-value")
          ui-link(:name="'lobjSimController'", :query="{learningObjectId: learningObjectId}")
            fas-icon(class='fa', :icon='appIcons.stopwatch')
            span &nbsp; Configure the staging of the case study.


      div(class="details-row")
        div(class="details-name") {{text.USED}}
        div(class="details-value")
          div(v-if="actCount>0")
            div(v-for="act in accessibleActivities", :key="act.visitId")
              ui-link(:name="'lms-instructor-activity'", :query="{visitId: act.visitId}")
                fas-icon(class="fa", :icon="appIcons.activity")
                span &nbsp; {{act.courseTitle}} / {{act.activityTitle}}
            div(v-if="unreachableActivityCount > 0 ") {{unreachableActivityText}}
          div(v-else) (This learning object is not used by any activity.)
      zone-lms-instructions-element The above tells you how many activities are using this learning object. The above lists all the activities you have permission to see (because you have used the link in your LMS).  Otherwise, the list is reduced to a a count of the activities you can not access that are using this learning object.

      div(class="details-row")
        div(class="details-name") LMS Id
        div(class="details-value") {{ learningObject.idForLTI }}
      zone-lms-instructions-element The LMS ID can be used in your LMS connections to pre-link new activities to the same learning object.

      div(class="details-row")
        div(class="details-name") {{ text.DATES }}
        div(class="details-value").
          Created on {{ learningObject.createDate | formatDateTime }}.
          Last modified on {{ learningObject.lastUpdateDate | formatDateTime }}.
</template>

<script>
import LearningObjectActions from '@/outside/components/learning-object/LearningObjectActions'
import OutsideCommon from '@/outside/views/OutsideCommon'
import StoreHelper from '@/helpers/store-helper'
import UiLink from '@/app/ui/UiLink.vue'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { downObjectToFile } from '@/helpers/ehr-utils'
import { TextLearningObjects } from '@/helpers/ehr-text'
import { Text } from '@/helpers/ehr-text'
import AppTypeDetailsPageElement from '@/outside/components/AppTypeDetailsPageElement.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import AppTypeDetailsPageElementExplain from '@/outside/components/AppTypeDetailsPageElementExplain.vue'

export default {
  extends: OutsideCommon,
  components: { AppTypeDetailsPageElementExplain, ZoneLmsInstructionsElement, ZoneLmsInstructionsHeader, AppTypeDetailsPageElement, ZoneLmsPageBanner, LearningObjectActions, UiLink },
  data () {
    return {
      text: Text.LOBJ_PAGE,
      activitiesUsingAssignmentCount: 0
    }
  },
  computed: {
    accessibleActivities () {
      return this.learningObject && this.learningObject.userVisits ? this.learningObject.userVisits : []
    },
    unreachableActivityCount () {
      return this.learningObject.activityCount - this.accessibleActivities.length
    },
    unreachableActivityText () {
      let txt = ''
      const cnt = this.unreachableActivityCount
      const hasAccessibleActivities = this.accessibleActivities.length > 0
      if (this.unreachableActivityCount > 0) {
        if (hasAccessibleActivities) {
          txt = `Plus ${cnt} other activities that you do not have permission to access.`
        } else {
          txt = `${cnt} activities that you do not have permission to access.`
        }
      }
      return txt
    },
    actCount () {
      return this.learningObject.activityCount
    },
    cText () { return TextLearningObjects },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    learningObject () {
      return this.$store.getters['assignmentStore/learningObject'] || {}
    },
    learningObjectId () {
      return this.learningObject  ? this.learningObject._id : ''
    },
    assignmentsListing () { return StoreHelper.getAssignmentsList()}
  },

  methods: {
    rowClass () {
      let selected = this.learningObject._id === this.$route.params.assignmentId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    downloadAll () {
      StoreHelper.loadAssignmentList(this)
        .then((aList) => {
          downObjectToFile('EdEHR-learning-object-list.json', aList)
        })
    },
    findAssignment: function (id) {
      return this.assignmentsListing.find(e => {
        return e._id === id
      })
    },
    showEditDialog: async function (event, assignmentId) {
      await this.$store.dispatch('seedListStore/loadSeeds')
      let lObjData = Object.assign({}, this.findAssignment(assignmentId))
      this.$refs.theDialog.showDialog(lObjData)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
    async loadComponent () {
      const fromRoute = this.$route.query.learningObjectId
      const fromStore = this.$store.getters['assignmentStore/learningObjectId']
      const learningObjectId = fromRoute ? fromRoute : fromStore
      if (!learningObjectId) {
        const msg = 'Loading of learning object requires an id for an object'
        StoreHelper.setApiError(msg)
        return
      }
      await this.$store.dispatch('assignmentStore/load', learningObjectId)
    }
  },
}
</script>

