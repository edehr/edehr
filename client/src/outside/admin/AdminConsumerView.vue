<template lang="pug">
  div(class="outside-admin-page")
    admin-links(:consumerId="consumerId")
    hr
    h2 Consumer {{ consumerId }}
    div(class='row', :id="`C-${consumer._id}`")
      div(class='kvpair')
        div(class='key') Consumer Name
        div(class='value') {{ consumer.tool_consumer_instance_name }}
      div(class='kvpair')
        div(class='key') Id
        div(class='value') {{ consumer._id }}
      div(class='kvpair')
        div(class='key') Description
        div(class='description value') {{ consumer.tool_consumer_instance_description }}
      div(class='kvpair')
        div(class='key') Key
        div(class='value') {{ consumer.oauth_consumer_key }}
      div(class='kvpair')
        div(class='key') Secret
        div(class='value') {{ consumer.oauth_consumer_secret }} To Do add getter for this
      div(class="kvpair")
        div(class="key") Recent visit counts
        div(class="value") {{consumer.recentVisitCounts}}
      div(class='kvpair')
        div(class='key') Created / Updated
        div(class='value') {{ consumer.createDate }} / {{ consumer.lastUpdateDate }}
      div(class='kvpair')
        div(class='key') Product family code
        div(class='value') {{ consumer.tool_consumer_info_product_family_code }}
      div(class='kvpair')
        div(class='key') GUID
        div(class='value') {{ consumer.tool_consumer_instance_guid }}
      div(class='kvpair')
        div(class='key') Version
        div(class='value') {{ consumer.tool_consumer_info_version }}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AdminLinks from '@/outside/admin/components/AdminLinks.vue'
import AdminCommon from '@/outside/admin/AdminCommon.vue'

export default {
  extends: AdminCommon,
  components: { AdminLinks },
  computed: {
  },
  methods: {
    loadComponent: async function () {
      if (this.isAdmin) {
        await this.$store.dispatch('consumerStore/loadDetails', this.consumerId)
        // await StoreHelper.loadConsumer(this.consumerId)
        // await StoreHelper.loadAssignmentAndSeedLists()
        await StoreHelper.loadUsersList(this.consumerId)
      }
      // else page controller has already redirected to login
    }
  },
}
</script>

