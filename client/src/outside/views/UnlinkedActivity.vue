<template lang="pug">
  div(class="outside-view")
    h1 Unlinked Activity
    div(v-if="isStudent")
      p.
        The activity you selected, in your learning management system ({{lmsName}}), is
        not yet linked to a learning object, here in the EdEHR.
        Please contact your course instructor and ask them to select a learning object for this activity.
      div
        ui-button(v-on:buttonClicked="exit()",
          :title="returnToLmsText")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; {{returnToLmsText}}

    div(v-if="!isStudent")
      p.
        The activity you selected, in your learning management system, is not yet linked to a learning object.
        Please select a learning object from the list below and connect it to this activity.  You must do this before
        any student needs to use this activity.

    h2 Activity Information
    p Course: {{ activity.context_title }}
    p Activity: {{ activity.resource_link_title }}
    p Description: {{ activity.resource_link_description }}

    div(v-if="!isStudent")
      h2 List of Learning Objects
      div(class="details-container")
        div(v-for="item in assignmentsListing", class="list-card list-element")
          learning-object-select-item(:id="item._id", :lObj='item', :activity='activity')


    div(style="display:none")
      div context_label {{ activity.context_label }}
      div context_id {{ activity.context_id }}
      div context_type {{ activity.context_type }}
      div resource_link_id {{ activity.resource_link_id }}
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import StoreHelper from '@/helpers/store-helper'
import LearningObjectSelectItem from '@/outside/components/learning-object/LearningObjectSelectItem'
import UiButton from '@/app/ui/UiButton'

export default {
  components: { UiButton, LearningObjectSelectItem  },
  extends: OutsideCommon,
  computed: {
    activity () { return this.$store.getters['activityStore/activity']},
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
      await this.$store.dispatch('activityStore/loadAsCurrentActivity', activityId)
      await this.$store.dispatch('seedListStore/loadSeeds')
      await this.$store.dispatch('assignmentListStore/loadAssignmentsWithCounts')
    },
    exit () { StoreHelper.exitToLms() }
  },

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-view {
  margin: 2rem;
}
</style>
