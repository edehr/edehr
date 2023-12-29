<template lang="pug">
  div
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

export default {
  computed: {
    consumer () { return StoreHelper.getConsumer() },
  },
}
</script>

<style scoped lang='scss'>
.row {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0;
  row-gap: 0.2rem;
  width: 90vw;
}
.kvpair {
  display: flex;
  flex-flow: row;
  div {
    border: 1px solid #b5b5b5;
  }
}
.key {
  width: 20%;
}
.value {
  width: 80%;
  background-color: #b5b5b5;
}
</style>
