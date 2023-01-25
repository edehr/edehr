<template lang="pug">
  div
    div(class="flow_across")

      div
        fas-icon(class="fa", :icon="appIcons.lobj")
        span &nbsp; {{activity.resource_link_title}} / {{ assignment.name }}

      div(class="flow_across_last_item")
        div(class="flow_across menu_space_across")
          a(@click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}
          ui-button(@buttonClicked="goToEhr") Go to EHR

    div(v-show="showMore")

      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          ul(v-text-to-html="activity.resource_link_description")
          ul(v-text-to-html="assignment.description")

      div(class="details-row")
        div(class="details-name") Feedback
        div(class="details-value", v-text-to-html="activityData.evaluationData")

      div(class="details-row", v-if='scratchData')
        div(class="details-name") Private notes
        div(class="details-value", v-text-to-html="scratchData")

      div(class="flow_across")
        div(class="flow_across_last_item")
          a(@click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}


    div(v-show="!showMore")

      div(class="flow_across")
        div(class="details-name") Feedback
        div(class="details-value", v-text-to-html="activityData.evaluationData")
        div(class="flow_across_last_item") {{ submitted ? 'Submitted' : 'Open to edit' }}

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiButton from '@/app/ui/UiButton'
export default {
  components: { UiButton },
  data () {
    return {
      appIcons: APP_ICONS,
      showMore: false,
      text: Text.ACTIVITY_PAGE,
    }
  },
  inject: ['isAdmin'],
  props: {
    data: { type: Object },
  },
  computed: {
    activity () { return this.data.activity },
    activityData () { return this.data.activityData },
    assignment () { return this.data.assignment },
    scratchData () { return this.data.activityData.scratchData },
    submitted () { return this.activityData.submitted },
    visit () { return this.data.visit },
    visitId () { return this.visit._id }
  },
  methods: {
    goToEhr () {
      this.$router.push({ name: 'ehr', query: { visitId: this.visitId } })
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
