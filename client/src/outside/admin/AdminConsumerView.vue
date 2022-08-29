<template lang="pug">
  div
    div
      router-link(to="/consumers") Return to consumers page
    admin-consumer
    hr
    h2 Activities
    admin-activities
    hr
    h2 Users
    admin-users
    div
      router-link(to="/consumers") Return to consumers page
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
      return this.$route.query.id
    },
  },
  methods: {
    loadComponent: async function () {
      if (this.isAdmin) {
        await StoreHelper.loadConsumer(this.consumerId)
        await StoreHelper.loadAssignmentAndSeedLists()
        await StoreHelper.loadUsersList(this.consumerId)

      } else {
        this.redirectAdminLogin()
      }
    }
  },
}
</script>

