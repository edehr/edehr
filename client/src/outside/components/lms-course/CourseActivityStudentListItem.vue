<template lang="pug">
  div
    div(class="flow_across")

      div(class="details-row")
        div(class="details-name") {{ text.ACTIVITY_LABEL}}
        div(class="details-value")
          div
            fas-icon(class="fa", :icon="appIcons.activity")
            span &nbsp; {{activity.resource_link_title}}
          div
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ assignment.name }}

      div(class="flow_across_last_item")
        a(@click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}

    div(v-show="showMore")

      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          ul(v-text-to-html="activity.resource_link_description")
          ul(v-text-to-html="assignment.description")

      div(class="details-row")
        div(class="details-name") Feedback
        div(class="details-value", v-text-to-html="activityData.evaluationData")

      div(class="details-row", v-if='activityData.scratchData')
        div(class="details-name") Private notes
        div(class="details-value", v-text-to-html="activityData.scratchData")

    div(v-show="!showMore")

      div(class="details-row")
        div(class="details-name") Feedback
        div(class="details-value", v-text-to-html="activityData.evaluationData")

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiLink from '@/app/ui/UiLink'
import { Text } from '@/helpers/ehr-text'
export default {
  components: { UiLink, },
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
    assignment () { return this.data.assignment }
  },
  methods: {
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
