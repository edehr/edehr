<template lang="pug">
</template>
<script>
import OutsideCommon from '@/outside/views/OutsideCommon.vue'
import StoreHelper from '@/helpers/store-helper'
export default {
  extends: OutsideCommon,
  computed: {
    consumerId () {
      return this.$route.query.consumerId
    },
    consumer () { return StoreHelper.getConsumer() },
  },
  methods: {
    loadComponent: async function () {
    }
  }
}
</script>
