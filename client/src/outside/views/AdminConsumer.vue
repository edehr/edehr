<template lang="pug">
  admin-consumer-page(:consumer-id='consumerId')
</template>

<script>
import AdminConsumerPage from '@/outside/components/admin/AdminConsumerPage'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { AdminConsumerPage},
  computed: {
    consumerId () {
      return this.$route.params.id
    },
  },
  methods: {
    refresh: function () {
      StoreHelper.loadConsumer(this.$route.params.id)
    }
  },
  mounted: function () {
    this.refresh()
  }
}
</script>

