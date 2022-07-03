<template lang="pug">
  div(:class="$options.name")
    div
      router-link(to="/consumers") Return to consumers page

    admin-consumer
    hr
    h2 Seeds
    admin-seeds(:consumer-id="consumerId")
    hr
    h2 Activities
    admin-activities(:consumer-id="consumerId")
    hr
    h2 Users
    admin-users(:consumer-id="consumerId")

    div
      router-link(to="/consumers") Return to consumers page

</template>

<script>
import AdminConsumer from '@/outside/components/admin/AdminConsumer'
import AdminActivities from '@/outside/components/admin/AdminActivities'
import AdminUsers from '@/outside/components/admin/AdminUsers'
import AdminSeeds from '@/outside/components/admin/AdminSeeds'

export default {
  components: { AdminActivities, AdminConsumer, AdminSeeds, AdminUsers },
  props: {
    consumerId: { type: String }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style scoped>
li {
  margin-left: 1rem;
}
</style>
