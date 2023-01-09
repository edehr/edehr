<template lang="pug">
  div
    div(class="flow_across")
      div(class="list-item-name")
        ui-link(:name="'learning-object'",  :query='{ learningObjectId: this.lObj._id }' )
          span(class='clickable') {{lObj.name}}
      div(class="flow_across_last_item")
        div(class="flow_across")
          a(class="show-more", @click="showMore = !showMore") {{showMore ? 'show less' : 'show more'}}
          learning-object-actions(:learningObject='lObj')
    div(v-if="showMore")
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="lObj.description")
      div(class="details-row")
        div(class="details-name") {{text.SEED}}
        div(class="details-value")
          ui-link(:name="'seed-view'", :query="{seedId: lObj.seedDataId}")
            fas-icon(class="fa", :icon="appIcons.seed")
            span &nbsp; {{ lObj.seedDataObj.name }}
      div(class="details-row")
        div(class="details-name") {{text.ACTIVITIES}}
        div(class="details-value")
          div(v-for="act in accessibleActivities", :key="act._id")
            ui-link(:name="'lms-activity'", :query="{activityId: act._id}")
              fas-icon(class="fa", :icon="appIcons.activity")
              span &nbsp; {{act.resource_link_title}}
          div(v-if="unreachableActivityCount > 0 ") {{unreachableActivityText}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ lObj.createDate | formatDateTime }}. Last modified on {{ lObj.lastUpdateDate | formatDateTime }}
      div(v-if="isAdmin", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ lObj._id }}
    div(v-if="!showMore")
      div(class="details-row flow_across content_space_across")
        div
          span {{text.SEED}}: &nbsp;
          ui-link(:name="'seed-view'", :query="{seedId: lObj.seedDataId}")
            fas-icon(class="fa", :icon="appIcons.seed")
            span &nbsp; {{ lObj.seedDataObj.name }}
      //div(class="") {{truncate(lObj.description, 180)}}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import LearningObjectActions from '@/outside/components/learning-object/LearningObjectActions'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import UiLink from '@/app/ui/UiLink'
import { Text } from '@/helpers/ehr-text'
export default {
  components: { LearningObjectActions, UiLink,  UiButton, },
  data () {
    return {
      appIcons: APP_ICONS,
      showMore: false,
      text: Text.LOBJ_PAGE,
    }
  },
  inject: ['isAdmin'],
  props: {
    lObj: { type: Object },
    showIds: { type: Boolean }
  },
  computed: {
    canDo () { return StoreHelper.isDevelopingContent() },
    accessibleActivities () {
      return StoreHelper.lmsActivitiesUsingLearningObject(this.lObj._id)
    },
    unreachableActivityCount () {
      return this.lObj.activityCount - this.accessibleActivities.length
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
      return this.lObj.activityCount
    }
  },
  methods: {
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>

<style lang='scss' scoped >
@import '../../../scss/definitions';
.show-more {
  display: inline-block;
  margin-right: 1rem;
}
</style>
