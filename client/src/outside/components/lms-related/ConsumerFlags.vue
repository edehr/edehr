<template lang='pug'>
div(id="FeatureFlags", class="details-container card selected")
  h2 Feature flags
  consumer-flags-orders
  consumer-flags-answer

</template>

<script>
import ConsumerFlagsOrders from '@/outside/components/lms-related/ConsumerFlags-Orders.vue'
import ConsumerFlagsAnswer from '@/outside/components/lms-related/ConsumerFlags-Answer.vue'
export default {
  components: { ConsumerFlagsAnswer, ConsumerFlagsOrders },
}
</script>
