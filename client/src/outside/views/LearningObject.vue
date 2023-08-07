<template lang="pug">
  div
    div
      zone-lms-page-banner(:title="learningObject.name")
        learning-object-actions(class="flow_across_last_item", :learningObject="learningObject", :showDetails='false')
    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") {{ text.DESCRIPTION }}
        div(class="details-value")
          div(v-text-to-html="learningObject.description")
      div(class="details-row")
        div(class="details-name") {{ text.SEED }}
        div(class="details-value")
          ui-link(:name="'seed-view'", :query="{seedId: learningObject.seedDataId}") {{ learningObject.seedName }}
      div(class="details-row")
        div(class="details-name") {{text.USED}}
        div(class="details-value")
          div(v-for="act in accessibleActivities", :key="act.id")
            ui-link(:name="'lms-instructor-activity'", :query="{activityId: act.id}")
              fas-icon(class="fa", :icon="appIcons.activity")
              span &nbsp; {{act.title}}
          div(v-if="unreachableActivityCount > 0 ") {{unreachableActivityText}}
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

export default {
  extends: OutsideCommon,
  components: { ZoneLmsPageBanner, LearningObjectActions, UiLink },
  data () {
    return {
      text: Text.LOBJ_PAGE,
      activitiesUsingAssignmentCount: 0
    }
  },
  computed: {
    accessibleActivities () {
      return StoreHelper.lmsActivitiesUsingLearningObject(this.learningObject._id)
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
      let assignmentData = Object.assign({}, this.findAssignment(assignmentId))
      this.$refs.theDialog.showDialog(assignmentData)
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

