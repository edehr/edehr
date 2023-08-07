<template lang="pug">
  div
    h1 Activity needs to be linked with content
    div(v-if="isStudent")
      p.
        Hi.  Please contact your instructor.  They need to select the EdEHR content to show for the activity you selected.
      div
        ui-button(v-on:buttonClicked="exit()",
          :title="returnToLmsText")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; {{returnToLmsText}}

    div(v-if="!isStudent")
      p.
        In your learning management system you just selected an activity that is not yet linked to EdEHR content.
        Please select an EdEHR content item (a learning object) from the list below.  You must do this before
        any student can use this activity.

    div The activity you selected provided this information
    div(class='lms-activity')
      p Activity: {{ activity.title }}
      p Description: {{ activity.description }}
      p Course: {{ activity.courseTitle }}

    div(v-if="!isStudent")
      learning-object-dialog(ref="theDialog")
      div(class='row-flow')
        h3 Select the content you want to use from the list below  or
        ui-button(v-on:buttonClicked="showCreateDialog",
            :title='text.createLearningObjectTip')
          fas-icon(class="fa", :icon="appIcons.new")
          span &nbsp; {{text.createLearningObjectBL}}
      div(class="details-container")
        div(class="e-table")
          div(class="thead")
            div(class="thcell") Connect to
            div(class="thcell") Name
            div(class="thcell") Type
            div(class="thcell") Description
          div(class="tbody")
            div(class="row", v-for="lObj in assignmentsListing")
              div(class="cell")
                ui-button(v-on:buttonClicked="selectLearningObject(lObj)", class='link-button') Use this
              div(class='cell') {{ lObj.name }}
              div(class="cell") {{ lObj.seedDataObj.appType}}
              div(class='cell') {{ lObj.description }}

    ui-confirm(ref="confirmDialog", saveLabel="Connect", v-on:confirm="selectConnect()", html-body=true)

</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import StoreHelper from '@/helpers/store-helper'
import LearningObjectDialog from '@/outside/components/learning-object/LearningObjectDialog'
import UiButton from '@/app/ui/UiButton'
import LearningObjectDelete from '@/outside/components/learning-object/LearningObjectDelete'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import { textToHtml } from '@/directives/text-to-html'
const TEXT = {
  createLearningObjectTip:'Create a new learning object',
  createLearningObjectBL: 'Create new',
}
export default {
  data () {
    return {
      showDetails: false,
      text: TEXT,
      selectedLObj: undefined
    }
  },
  components: { UiConfirm, LearningObjectDelete, LearningObjectDialog,  UiButton  },
  extends: OutsideCommon,
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord']},
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsName () { return this.consumer.tool_consumer_instance_name},
    isStudent () { return StoreHelper.isStudent()},
    assignmentsListing () {
      return this.$store.getters['assignmentListStore/list']
    },
    returnToLmsText () { return 'Return to ' + this.lmsName}
  },
  methods: {
    async loadComponent () {
      const activityId = this.$route.query.activityId
      await this.$store.dispatch('activityStore/setActivityId', activityId)
      await this.$store.dispatch('activityStore/loadActivityRecord')
      // await this.$store.dispatch('seedListStore/loadSeeds')
      await this.$store.dispatch('assignmentListStore/loadAssignmentsWithCounts')
    },
    exit () { StoreHelper.exitToLms() },
    showCreateDialog: function () {
      this.$refs.theDialog.showLObjDialog({action: 'create'})
    },
    selectLearningObject (lObj) {
      this.selectedLObj = lObj
      const body = textToHtml('Confirm connecting your activity to the content: "' + lObj.name
        + '"\nThis can not be undone. If you make a mistake then create a new activity in your LMS as try again.')
      const title ='Confirm connection'
      this.$refs.confirmDialog.showDialog(title, body)
    },
    async selectConnect () {
      const lObj = this.selectedLObj
      const activityId = this.activity.id
      const payload = { activity: activityId, assignment: lObj._id }
      // console.log('establish link',payload)
      await this.$store.dispatch('activityStore/linkAssignment', payload)
      // take the instructor to activity page for the activity they just made a link to.
      await this.$router.push({ name: 'lms-instructor-activity', query: { activityId: activityId } })
    },

  },

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

button, .button {
  font-size: 1rem;
}
.activity-details {
  padding-left: 1rem;
  margin-bottom: 1rem;
  p {
    margin-bottom: 5px;
  }
}
.details-container {
  padding: 0;
}
.row-flow {
  display: flex;
  flex-flow: row;
  gap: 1rem;
}
.lms-activity {
  margin-left: 1rem;
}
</style>
