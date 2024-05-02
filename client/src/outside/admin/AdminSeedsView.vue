<template lang="pug">
  div(class="outside-admin-page")
    admin-links(:consumerId="consumerId")
    h2 Case studies
    div
      ui-button(value="admin-dwn-all", v-on:buttonClicked="downloadAll")
        fas-icon(class="fa", :icon="appIcons.download")
        span &nbsp; Download all seeds
    div(v-for='(seed, index) in seeds')
      div(class='row', :id="`S-${seed._id}`")
        div(class='kvpair')
          div(class='key') Seed Name
          div(class='value')
            strong {{ seed.name }}  ({{ seed.lastUpdateDate }})
        div(class='kvpair')
          div(class='key') Id
          div(class='value') {{ seed._id }} ({{ seed.toolConsumer }})
        div(class='kvpair')
          div(class='key') Created
          div(class='value') {{ seed.createDate }}
        div(class='kvpair')
          div(class='key') Description
          div(class='description value') {{ truncate(seed.description, 50) }}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import { downObjectToFile } from '@/helpers/ehr-utils'
import UiButton from '@/app/ui/UiButton'
import AdminLinks from '@/outside/admin/components/AdminLinks.vue'
import AdminCommon from '@/outside/admin/AdminCommon.vue'

export default {
  extends: AdminCommon,
  components: { AdminLinks, UiButton },
  computed: {
    seeds () {
      let list = this.$store.getters['seedListStore/list'].filter( sd => !sd.isDefault)
      list = JSON.parse(JSON.stringify(list))
      list.sort((a,b) => a.name.localeCompare(b.name))
      return list
    }
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
        await this.$store.dispatch('seedListStore/loadSeedsConsumer', this.consumerId)
      }
    },
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
  },
}
</script>

<style scoped lang='scss'>
</style>
