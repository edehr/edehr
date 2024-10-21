<template lang='pug'>
div
  h3 Order status
  p.
    This feature will be visible on orders (non-medication, medication and then order sets).
    It allows the evolving case study to change an order's status.
    Here are the possible non-medication orders status values.
  pre.
    entry:=Ordered      (pending)
    ready:=In process   (active)
    cancel:=Cancelled   (inactive)
    done:=Completed     (inactive)
    stop:=Discontinued  (inactive)

  p Currently this feature is {{ ffOrdersValue ? 'enabled' : 'disabled'}}
  button(@click='ffOrderToggle')
    span &nbsp; {{ ffOrdersValue ? 'disable' : 'enable '}} &nbsp;
  div(v-if="ffOrdersValue")

</template>

<script>
import FeatureHelper, { FF_ORDERS } from '@/helpers/feature-helper'
export default {
  computed: {
    consumer () {
      return this.$store.getters['consumerStore/consumer']
    },
    ffOrdersValue () {
      return FeatureHelper.isFeatureFlagEnabled(FF_ORDERS)
    }
  },
  methods: {
    async ffOrderToggle () {
      if (this.ffOrdersValue) {
        await FeatureHelper.disableFeatureFlag(this.consumer._id, FF_ORDERS)
      } else {
        await FeatureHelper.enableFeatureFlag(this.consumer._id, FF_ORDERS)
      }
    }
  }
}
</script>
