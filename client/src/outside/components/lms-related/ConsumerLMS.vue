<template lang='pug'>
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
</template>

<script>
import { Text } from '@/helpers/ehr-text'
import UiInfo from '@/app/ui/UiInfo.vue'

export default {
  components: { UiInfo },
  data () {
    return {
      text: Text.CONSUMER_PAGE,
    }
  },
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
    },
  }
}
</script>
