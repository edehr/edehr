<template lang="pug">
  div(class="consumer-listing")
    h1 LTI Consumers
    div
      ui-button(v-on:buttonClicked="showCreateDialog") Create a new consumer
      ui-button(v-on:buttonClicked="refresh") Refresh list
    table.table
      thead
        tr
          th Name
          th Name
          th Name
          th Key
          th LTI version
          th Is Primary
          th Tool Software Version
          th Description
          th Created / Updated
          th GUID
      tbody
        tr(v-for="item in consumerListing", :class="rowClass(item)")
          td
            div
              router-link(:to="{ name:'admin-consumer', params: { id: item._id }}") Details
          td
            ui-button(v-on:buttonClicked="showEditDialog", :value="item._id")
              fas-icon(icon="edit") Edit consumer properties
          td
            div {{ item.tool_consumer_instance_name }}
            div {{ item._id }}
          td
            div {{ item.oauth_consumer_key}}
            div {{ item.oauth_consumer_secret}}
          td {{ item.lti_version}}
          td {{ item.is_primary === true ? 'Primary' : item.is_primary === false ? 'Demo' : 'Unknown'}}
          td {{ item.tool_consumer_info_version}}
          td {{ item.tool_consumer_instance_description}}
          td
            div {{ item.createDate}}
            div {{ item.lastUpdateDate}}
          td {{ item.tool_consumer_instance_guid}}
    consumer-dialog(ref="theDialog")
</template>

<script>
/*
oauth_consumer_key
oauth_consumer_secret
lti_version
tool_consumer_info_version
tool_consumer_instance_description
tool_consumer_instance_guid
tool_consumer_instance_name
   */
import UiButton from '@/app/ui/UiButton.vue'
import UiLink from '@/app/ui/UiLink.vue'
import StoreHelper from '@/helpers/store-helper'
import ConsumerDialog from '@/outside/components/ConsumerDialog'

export default {
  name: 'ConsumerListing',
  data () {
    return {
    }
  },
  components: { ConsumerDialog, UiButton, UiLink },
  computed: {
    consumerListing () { return StoreHelper.getConsumersList()}
  },

  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.params.assignmentId
      return selected ? 'selected' : ''
    },
    findConsumer: function (id) {
      return this.consumerListing.find(e => {
        return e._id === id
      })
    },
    showEditDialog: function (event, id) {
      let consumerData = Object.assign({}, this.findConsumer(id))
      console.log('consumerData', consumerData)
      this.$refs.theDialog.showDialog(consumerData)
    },
    showCreateDialog: function () {
      this.$refs.theDialog.showDialog()
    },
    refresh: function () {
      StoreHelper.loadConsumerList()
    }
  },
  mounted: function () {
    StoreHelper.loadConsumerList()
  }
}
</script>
<style lang="scss">
//@import '@/../scss/definitions';
.table {
  max-width: 90vw;
  overflow-x: auto;
  display: block;
}
</style>