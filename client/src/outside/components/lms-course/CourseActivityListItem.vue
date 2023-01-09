<template lang="pug">
  div
    div(class="flow_across")
      div(class="details-row")
        div(class="details-name") {{ text.ACTIVITY_LABEL}}
        div(class="details-value")
          ui-link(:name="'lms-activity'", :query="{activityId: activity._id}")
            fas-icon(class="fa", :icon="appIcons.activity")
            span &nbsp; {{activity.resource_link_title}}
      div(class="flow_across_last_item")
        a(@click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}
    div(v-show="showMore")
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="activity.resource_link_description")
      // learning object
      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          ui-link(:name="'learning-object'", :query="{learningObjectId: activity.assignment._id}")
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ activity.assignment.name }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="activity.assignment.description")
      // Case study
      div(class="details-row")
        div(class="details-name") {{text.CASE_STUDY}}
        div(class="details-value")
          ui-link(name="seed-view", :query="{seedId: activity.caseStudy._id}")
            fas-icon(class='fa', :icon='appIcons.seed')
            span &nbsp; {{ activity.caseStudy.name }}
    div(v-show="!showMore")
      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          ui-link(:name="'learning-object'", :query="{learningObjectId: activity.assignment._id}")
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ activity.assignment.name }}
      div(class="details-row")
        div(class="details-name") {{text.CASE_STUDY}}
        div(class="details-value")
          ui-link(name="seed-view", :query="{seedId: activity.caseStudy._id}")
            fas-icon(class='fa', :icon='appIcons.seed')
            span &nbsp; {{ activity.caseStudy.name }}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
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
    activity: { type: Object },
    showIds: { type: Boolean }
  },
  computed: {
  },
  methods: {
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
