<template lang="pug">
  div
    div
      router-link(to="/consumers") Return to consumers page
    div
      ui-button(v-on:buttonClicked="downloadAll")
        fas-icon(class="fa", :icon="appIcons.download")
        span &nbsp; Download all seeds
    h2 Seeds
    admin-seeds
    div
      router-link(to="/consumers") Return to consumers page
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AdminSeeds from '@/outside/admin/AdminSeeds'
import OutsideCommon from '@/outside/views/OutsideCommon'
import { downObjectToFile } from '@/helpers/ehr-utils'
import UiButton from '@/app/ui/UiButton'

export default {
  extends: OutsideCommon,
  components: { UiButton, AdminSeeds },
  computed: {
    consumerId () {
      return this.$route.query.id
    },
    seeds () { return StoreHelper.getSeedDataList().filter( sd => !sd.isDefault)}
  },
  methods: {
    downloadAll () {
      const consumer = this.$store.getters['consumerStore/consumer']
      const fName = consumer.tool_consumer_instance_name
      console.log('downloadall to ', fName)
      const seedList = this.seeds
      console.log('seeds',seedList)
      downObjectToFile(fName, seedList)
    },
    loadComponent: async function () {
      if (this.isAdmin) {
        await StoreHelper.loadConsumer(this.consumerId)
        await StoreHelper.loadAssignmentAndSeedLists()
      }
      // else page controller has already redirected to login
    }
  },
}
</script>

