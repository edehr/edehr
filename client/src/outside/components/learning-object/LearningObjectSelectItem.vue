<template lang="pug">
  div
    div(class="list-item-container")
      div(class="list-item-name") {{lObj.name}} &nbsp;
        a(@click="showMore = !showMore; $emit('selectLObj', lObj)") {{showMore ? 'show less' : 'show more'}}
      div(class="list-item-actions")
        ui-button(v-on:buttonClicked="selectLearningObject(lObj)", class='link-button') Connect this to activity
        ui-confirm(ref="confirmDialog", saveLabel="Connect", v-on:confirm="proceed", html-body=true)
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
        div(class="details-value") Used by {{actCount > 0 ? actCount : 'no'}} {{ actCount > 1 ? 'activities' : 'activity' }}
          div(v-if='actCount > 0 && lmsActivities') You can access these activities
          div(v-if='actCount > 0 && !lmsActivities') You can not access any activities
          div(v-for="act in lmsActivities", :key="act._id")
            div
              fas-icon(class="fa", :icon="appIcons.activity")
              span &nbsp; {{act.resource_link_title}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ lObj.createDate | formatDateTime }}. Last modified on {{ lObj.lastUpdateDate | formatDateTime }}
      div(v-if="isAdmin", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ lObj._id }}
    div(v-if="!showMore")
      div(class="details-row")
        div(class="details-name") {{text.SEED}}
        div(class="details-value")
          div
            fas-icon(class="fa", :icon="appIcons.seed")
            span &nbsp; {{ lObj.seedDataObj.name }}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import LearningObjectActions from '@/outside/components/learning-object/LearningObjectActions'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
import UiLink from '@/app/ui/UiLink'
import { Text } from '@/helpers/ehr-text'
import UiConfirm from '@/app/ui/UiConfirm'
import { textToHtml} from '@/directives/text-to-html'

export default {
  components: { UiConfirm, LearningObjectActions, UiLink,  UiButton, },
  data () {
    return {
      appIcons: APP_ICONS,
      showMore: false,
      text: Text.LOBJ_PAGE,
    }
  },
  inject: ['isAdmin'],
  props: {
    activity: { type: Object },
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
    selectLearningObject (lObj) {
      const body = textToHtml('Confirm you wish to connect "' + lObj.name
        + '"\nto the activity "' + this.activity.resource_link_title + '".' +
        '\nThis can not be undone.')
      const title ='Confirm connection'
      this.$refs.confirmDialog.showDialog(title, body)
    },
    proceed () {
      console.log('To do establish link')
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input }
  }
}
</script>
<style lang='scss' scoped>
.link-button {
  font-size: 1rem;
  font-weight: normal;
}
</style>