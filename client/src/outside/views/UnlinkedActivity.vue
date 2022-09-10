<template lang="pug">
  div(class="outside-view")
    h1 Unlinked Activity
    div(v-if="isStudent")
      p.
        The activity you selected, in your learning management system, is not yet linked to a learning object, here in the EdEHR.
        Please contact your course instructor and ask them to select a learning object for this activity.
    div(v-if="!isStudent")
      p.
        The activity you selected, in your learning management system, is not yet linked to a learning object.
        Please select a learning object from the list below for this activity

    h2 Activity Context
    p Course: {{ activity.context_title }}
    p Activity: {{ activity.resource_link_title }}
    p Description: {{ activity.resource_link_description }}

    div(v-if="!isStudent")
      h2 List of Learning Objects
      

    div(style="display:none")
      div context_label {{ activity.context_label }}
      div context_id {{ activity.context_id }}
      div context_type {{ activity.context_type }}
      div resource_link_id {{ activity.resource_link_id }}
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import StoreHelper from '@/helpers/store-helper'

export default {
  extends: OutsideCommon,
  computed: {
    activity () { return this.$store.getters['activityStore/activity']},
    isStudent () { return StoreHelper.isStudent()}
  },
  methods: {
    async loadComponent () {
      const activityId = this.$route.query.activityId
      console.log('UnlinkedActivity load activity', activityId)
      const activity = await this.$store.dispatch('activityStore/loadAsCurrentActivity', activityId)
    },
  },

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.outside-view {
  margin: 2rem;
}
</style>
