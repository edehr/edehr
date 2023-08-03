<template lang="pug">
  div
    div
      router-link(to="/consumers") Return to consumers page
    div
      router-link(:to="{ name:'admin-activities', query: { consumerId: consumerId }}") Admin activities
    div
      router-link(to="/admin-users") Admin users
    hr
    h2 Consumer
    admin-consumer
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AdminConsumer from '@/outside/admin/AdminConsumer'
import AdminActivities from '@/outside/admin/AdminActivities'
import AdminUsers from '@/outside/admin/AdminUsers'
import AdminSeeds from '@/outside/admin/AdminSeeds'
import OutsideCommon from '@/outside/views/OutsideCommon'

export default {
  extends: OutsideCommon,
  components: { AdminActivities, AdminConsumer, AdminSeeds, AdminUsers },
  computed: {
    consumerId () {
      return this.$route.query.consumerId
    },
  },
  methods: {
    loadComponent: async function () {
      if (this.isAdmin) {
        await StoreHelper.loadConsumer(this.consumerId)
        // await StoreHelper.loadAssignmentAndSeedLists()
        await StoreHelper.loadUsersList(this.consumerId)
      }
      // else page controller has already redirected to login
    }
  },
}
</script>

