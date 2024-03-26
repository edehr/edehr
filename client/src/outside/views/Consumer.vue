<template lang='pug'>
  div
    zone-lms-page-banner
      div(class="flow_across flow_across_right flow_wrap menu_space_across")
        zone-lms-button(@action="downloadConsumer", :icon='appIcons.download', text='Download data')
    div(class="details-container card selected")
      h2 Learning management system (LMS)
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
        div(class="details-name") Id
        div(class="details-value") {{consumer._id}}

    medication-database-config

    div(id="FeatureFlags", class="details-container card selected")
      h2 Feature flags
      div(class="details-row")
        div(class="details-name") Feature Flags
        div(class="details-value")
          div
            label(for="fFlagSignOn") Unleash Activities. {{ featureFlagUnleashActivity ? 'enabled' : 'disabled'}}
            span &nbsp;
            button(@click='featureFlagUnleashActivityToggle') {{ featureFlagUnleashActivity ? 'disable' : 'enable '}} unleash activity
          div
            label(for="fFlagSignOn") Simulated sign on is {{ featureFlagSimSignOn ? 'enabled' : 'disabled'}}
            span &nbsp;
            button(@click='featureFlagSimSignToggle') {{ featureFlagSimSignOn ? 'disable' : 'enable '}} simulation sign on
          div
            label(for="fFlagSignOn") Simulated time control is {{ featureFlagSimTimeOn ? 'enabled' : 'disabled'}}
            span &nbsp;
            button(@click='featureFlagSimTimeToggle') {{ featureFlagSimTimeOn ? 'disable' : 'enable '}} simulation time controls

    div(id="Statistics", class="details-container card selected")
      h2 Statistics
      div(class="details-row")
        div(class="details-name") Recent visit counts
        // { "year": { "t": 5, "s": 2, "i": 3 }, "half": { "t": 5, "s": 2, "i": 3 }, "month": { "t": 5, "s": 2, "i": 3 }, "week": { "t": 5, "s": 2, "i": 3 }, "day": { "t": 2, "s": 1, "i": 1 }, "hour": { "t": 1, "s": 0, "i": 1 } }
        div(class="details-value")
          table
            thead
              th
              th Total
              th Instructors
              th Students
            tbody
              tr
                td Year
                td {{ recentVisitCounts.year.t }}
                td {{ recentVisitCounts.year.i }}
                td {{ recentVisitCounts.year.s }}
              tr
                td 6 months
                td {{ recentVisitCounts.half.t }}
                td {{ recentVisitCounts.half.i }}
                td {{ recentVisitCounts.half.s }}
              tr
                td Month
                td {{ recentVisitCounts.month.t }}
                td {{ recentVisitCounts.month.i }}
                td {{ recentVisitCounts.month.s }}
              tr
                td Week
                td {{ recentVisitCounts.week.t }}
                td {{ recentVisitCounts.week.i }}
                td {{ recentVisitCounts.week.s }}
              tr
                td Day
                td {{ recentVisitCounts.day.t }}
                td {{ recentVisitCounts.day.i }}
                td {{ recentVisitCounts.day.s }}
              tr
                td Hour
                td {{ recentVisitCounts.hour.t }}
                td {{ recentVisitCounts.hour.i }}
                td {{ recentVisitCounts.hour.s }}

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
import FeatureHelper, { FF_SIGN_ON, FF_SIM_CONTROL, FF_UNLEASH_ACTIVITY } from '@/helpers/feature-helper'
import MedicationDatabaseConfig from '@/outside/components/MedicationDatabaseConfig.vue'

const DEFAULTRVC = {
  year: { t: 5, s: 2, i: 3 },
  half: { t: 5, s: 2, i: 3 },
  month: { t: 5, s: 2, i: 3 },
  week: { t: 5, s: 2, i: 3 },
  day: { t: 2, s: 1, i: 1 },
  hour: { t: 1, s: 0, i: 1 }
}


export default {
  extends: OutsideCommon,
  components: { MedicationDatabaseConfig, ZoneLmsButton, ZoneLmsPageBanner, UiButton, UiInfo },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
      appIcons: APP_ICONS,
      consumerId: undefined,
      featureFlagUnleashActivity: false,
      featureFlagSimTimeOn: false,
      featureFlagSimSignOn: false
    }
  },
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
    },
    featureFlags () {
      return this.$store.getters['consumerStore/featureFlags']
    },
    showLabels () {
      return StoreHelper.isOutsideShowButtonLabels()
    },
    recentVisitCounts () {
      return this.consumer.recentVisitCounts || DEFAULTRVC
    },
    users () {
      return this.consumer.users || []
    }
  },
  methods: {
    downloadConsumer () {
      const fName = 'EdEHR-Consumer' + this.consumer._id + '.json'
      let data = JSON.parse(JSON.stringify(this.consumer))
      data.returnUrl = StoreHelper.lmsUrl()
      data.currentVisitId = this.$store.getters['authStore/visitId']
      let sorted = {}
      Object.keys(data).sort().forEach(k => {
        sorted[k] = data[k]
      })
      downObjectToFile(fName, sorted)
    },
    async featureFlagUnleashActivityToggle () {
      if (!this.featureFlagUnleashActivity) {
        await FeatureHelper.enableFeatureFlag(this.consumerId, FF_UNLEASH_ACTIVITY)
      } else {
        await FeatureHelper.disableFeatureFlag(this.consumerId, FF_UNLEASH_ACTIVITY)
      }
    },
    async featureFlagSimSignToggle () {
      if (!this.featureFlagSimSignOn) {
        await FeatureHelper.enableFeatureFlag(this.consumerId, FF_SIGN_ON)
      } else {
        await FeatureHelper.disableFeatureFlag(this.consumerId, FF_SIGN_ON)
      }
    },
    async featureFlagSimTimeToggle () {
      if (!this.featureFlagSimTimeOn) {
        await FeatureHelper.enableFeatureFlag(this.consumerId, FF_SIM_CONTROL)
      } else {
        await FeatureHelper.disableFeatureFlag(this.consumerId, FF_SIM_CONTROL)
      }
    },
    async loadComponent () {
      const fromRoute = this.$route.query.consumerId
      if (fromRoute) {
        this.consumerId = fromRoute
        await this.$store.dispatch('consumerStore/loadDetails', this.consumerId)
        await FeatureHelper.loadFlags(this.consumerId)
      }
    }
  },
  watch: {
    featureFlags () {
      const cid = this.$store.getters['consumerStore/consumerId']
      this.featureFlagSimSignOn = FeatureHelper.isFeatureFlagEnabled(cid, FF_SIGN_ON)
      this.featureFlagSimTimeOn = FeatureHelper.isFeatureFlagEnabled(cid, FF_SIM_CONTROL)
      this.featureFlagUnleashActivity = FeatureHelper.isFeatureFlagEnabled(cid, FF_UNLEASH_ACTIVITY)
    }
  }
}
</script>
