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
          ui-link(:name="'learning-object'", :query="{learningObjectId: assignment._id}")
            fas-icon(class='fa', :icon='appIcons.lobj')
            span &nbsp; {{ assignment.name }}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="assignment.description")
      // Case study
      div(class="details-row")
        div(class="details-name") {{text.CASE_STUDY}}
        div(class="details-value")
          ui-link(name="seed-view", :query="{seedId: caseStudy._id}")
            fas-icon(class='fa', :icon='appIcons.seed')
            span &nbsp; {{ caseStudy.name }}
    div(v-show="!showMore")
      div(class="details-row")
        div(class="details-name") {{text.LOBJ}}
        div(class="details-value")
          div(v-if='hasLinkedLearningObject')
            ui-link(:name="'learning-object'", :query="{learningObjectId: assignment._id}")
              fas-icon(class='fa', :icon='appIcons.lobj')
              span &nbsp; {{ assignment.name }}
          div(v-else)
            div No learning object is linked to this activity
            ui-button(v-on:buttonClicked='goToUnlinked')
              slot(name="save-button") Connect learning object to this activity.

      div(class="details-row")
        div(class="details-name") {{text.CLASS_LIST}}
        div(class="details-value")
          ui-link(:name="'classList'", :query="{activityId: activity._id}")
            fas-icon(class='fa', :icon='appIcons.classList')
            span &nbsp; {{text.CLASS_LIST_BTN}}
      div(class="details-row")
        div(class="details-name") {{text.CASE_STUDY}}
        div(class="details-value")
          div(v-if='hasLinkedLearningObject')
            ui-link(name="seed-view", :query="{seedId: caseStudy._id}")
              fas-icon(class='fa', :icon='appIcons.seed')
              span &nbsp; {{ caseStudy.name }}
          div(v-else) No learning object is linked to this activity
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiLink from '@/app/ui/UiLink'
import { Text } from '@/helpers/ehr-text'
import { UNLINKED_ACTIVITY_ROUTE_NAME } from '@/router'
import UiButton from '@/app/ui/UiButton.vue'
export default {
  components: { UiButton, UiLink, },
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
    activityId () { return this.activity._id },
    assignment () { return this.activity.assignment || {} },
    hasLinkedLearningObject () { return this.activity.assignment },
    caseStudy () { return this.activity.caseStudy || {} }
  },
  methods: {
    goToUnlinked () {
      this.$router.push({ name: UNLINKED_ACTIVITY_ROUTE_NAME, query: { activityId: this.activityId } })
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
