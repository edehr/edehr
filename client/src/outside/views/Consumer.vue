<template lang="pug">
  div
    zone-lms-page-banner
      div(class="flow_across flow_across_right flow_wrap menu_space_across")
        zone-lms-button(@action="downloadConsumer", :icon='appIcons.download', text='Download data')
    div(class="details-container card selected")
      div(class="details-row")
        div(class="details-name") {{text.NAME}}
          ui-info(:title="text.NAME", :text="text.NAME_TIP")
        div(class="details-value") {{consumer.tool_consumer_instance_name}}
      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value") {{consumer.tool_consumer_instance_description}}
      div(class="details-row")
        div(class="details-name") {{text.KEY}}
        div(class="details-value") {{consumer.oauth_consumer_key}}
      //div(class="details-row")
      //  div(class="details-name") {{text.SECRET}}
      //  div(class="details-value") {{consumer.oauth_consumer_secret}}
      div(class="details-row", v-if='!consumer.is_primary')
        div(class="details-name") {{text.TYPE}}
        div(class="details-value") Demonstration consumer
      div(class="details-row")
        div(class="details-name") {{text.FAMILY}}
        div(class="details-value") {{consumer.tool_consumer_info_product_family_code}}
      div(class="details-row")
        div(class="details-name") {{text.VERSION_PRODUCT}}
        div(class="details-value") {{consumer.tool_consumer_info_version}}
      div(class="details-row")
        div(class="details-name") {{text.VERSION_LTI}}
        div(class="details-value") {{consumer.lti_version}}
      div(class="details-row")
        div(class="details-name") {{text.GUID}}
        div(class="details-value") {{consumer.tool_consumer_instance_guid}}
      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value").
          Created on {{ consumer.createDate | formatDateTime }}.
          Last modified on {{ consumer.lastUpdateDate | formatDateTime }}.
      div(class="details-row")
        div(class="details-name") {{text.VISITS_TOTAL}}
        div(class="details-value") {{consumer.visitCount}}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_STUDENTS}}
        div(class="details-value") {{consumer.visitStudentCount}}.
      div(class="details-row", v-if='consumer.visitStudentCount> 0')
        div(class="details-name") Most recent:
        div(class="details-value").
          Most recent student visit: {{consumer.lastStudentVisit | formatDateTime}}.
          Return url: {{ consumer.lastStudentReturnUrl}}
      div(class="details-row")
        div(class="details-name") {{text.VISITS_INSTRUCTORS}}
        div(class="details-value") {{consumer.visitInstructorCount}}.
      div(class="details-row", v-if='consumer.visitInstructorCount > 0')
        div(class="details-name") Most recent:
        div(class="details-value").
          Most recent instructor visit: {{consumer.lastInstructorVisit | formatDateTime}}.
          Return url: {{ consumer.lastInstructorReturnUrl}}
      div(class="details-row")
        div(class="details-name") {{text.ACTIVITIES}}
        div(class="details-value") {{consumer.activityCount}}
      div(class="details-row")
        div(class="details-name") {{text.LOBJS}}
        div(class="details-value") {{consumer.assignmentCount}}
      div(class="details-row")
        div(class="details-name") {{text.SEEDS}}
        div(class="details-value") {{consumer.seedCount}}
      div(class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{consumer._id}}
      div(class="details-row")
        div(class="details-name") {{ text.USER_COUNT }}
        div(class="details-value") {{ consumer.userCount }}
      div(class="details-row", v-if='isAdmin')
        div(class="details-name") {{ text.USERS }}
        div(class="details-value")
          div(v-for="user in users") {{user.fullName}}
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import UiInfo from '@/app/ui/UiInfo'
import UiButton from '@/app/ui/UiButton'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import { downObjectToFile } from '@/helpers/ehr-utils'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'

export default {
  extends: OutsideCommon,
  components: { ZoneLmsButton, ZoneLmsPageBanner, UiButton, UiInfo  },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
      appIcons: APP_ICONS,
    }
  },
  computed: {
    consumer () { return this.$store.getters['consumerStore/consumer']},
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    users () { return this.consumer.users || [] },
  },
  methods: {
    downloadConsumer () {
      const fName = 'EdEHR-Consumer' + this.consumer._id + '.json'
      let data = JSON.parse(JSON.stringify(this.consumer))
      data.returnUrl = this.$store.getters['visit/returnUrl']
      data.currentVisitId = this.$store.getters['authStore/visitId']
      let sorted = {}
      Object.keys(data).sort().forEach(k => {
        sorted[k] = data[k]
      })
      downObjectToFile(fName, sorted)
    },
    async loadComponent () {
      const fromRoute = this.$route.query.consumerId
      if (fromRoute) {
        await this.$store.dispatch('consumerStore/loadDetails', fromRoute)
      }
    }
  },
}
</script>
