<template lang="pug">
  div
    div(class="flow_across")
      div(class="list-item-name")
        ui-link(:name="'learning-object'",  :query='{ learningObjectId: this.lObj._id }' )
          span(class='clickable') {{lObj.name}}
      learning-object-actions(class="flow_across_last_item", :learningObject='lObj')
    div(v-if="showMore")
      a(@click="showMore = !showMore; $emit('selectLObj', lObj)") {{showMore ? 'show less' : 'show more'}}
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
        div(class="details-value") Used by {{actCount > 0 ? actCount : 'no'}} {{ actCount > 1 ? 'activities' : 'activity' }}
          div(v-if='actCount > 0 && lmsActivities') You can access these activities
          div(v-if='actCount > 0 && !lmsActivities') You can not access any activities
          div(v-for="act in lmsActivities", :key="act._id")
            ui-link(:name="'lms-activity'", :query="{activityId: act._id}")
              fas-icon(class="fa", :icon="appIcons.activity")
              span &nbsp; {{act.resource_link_title}}
      div(class="details-row")  
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ lObj.createDate | formatDateTime }}. Last modified on {{ lObj.lastUpdateDate | formatDateTime }}
      div(v-if="isAdmin", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ lObj._id }}
    div(v-if="!showMore")
      div(class="details-row flow_across content_space_across")
        a(@click="showMore = !showMore; $emit('selectLObj', lObj)") {{showMore ? 'show less' : 'show more'}}
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
    lmsActivities () {
      return StoreHelper.lmsActivitiesUsingLearningObject(this.lObj._id)
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
