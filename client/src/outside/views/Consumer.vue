<template lang='pug'>
div
  zone-lms-page-banner
    div(class="flow_across flow_across_right flow_wrap menu_space_across")
      zone-lms-button(@action="downloadConsumer", :icon='appIcons.download', text='Download data')
  consumer-l-m-s

  lms-active-student-counts

  medication-database-config

  consumer-flags

  consumer-stats

</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import { downObjectToFile } from '@/helpers/ehr-utils'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import MedicationDatabaseConfig from '@/outside/components/MedicationDatabaseConfig.vue'
import LmsActiveStudentCounts from '@/outside/components/LmsActiveStudentCounts.vue'
import ConsumerLMS from '@/outside/components/lms-related/ConsumerLMS.vue'
import ConsumerFlags from '@/outside/components/lms-related/ConsumerFlags.vue'
import ConsumerStats from '@/outside/components/lms-related/ConsumerStats.vue'
import StoreHelper from '@/helpers/store-helper'
import FeatureHelper from '@/helpers/feature-helper'

export default {
  extends: OutsideCommon,
  components: { ConsumerStats, ConsumerFlags, ConsumerLMS, LmsActiveStudentCounts, MedicationDatabaseConfig, ZoneLmsButton, ZoneLmsPageBanner },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
      appIcons: APP_ICONS,
      consumerId: undefined
    }
  },
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
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
    async loadComponent () {
      const fromRoute = this.$route.query.consumerId
      if (fromRoute) {
        this.consumerId = fromRoute
        await this.$store.dispatch('consumerStore/loadDetails', this.consumerId)
        await FeatureHelper.loadFlags(this.consumerId)
      }
    }
  },
}
</script>
