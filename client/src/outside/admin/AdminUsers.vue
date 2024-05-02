<template lang="pug">
  div(class="outside-admin-page")
    admin-links(:consumerId="consumerId")
    h2 Users
    p Click on a user to see their visits
    div(v-for='(user, index) in usersList', class="selectable", @click='loadVisits(user)')
      div(class='row', :id="`S-${user._id}`")
        div(class='kvpair')
          div(class='key') User Name
          div(class='value')
            strong {{ user.fullName }}
        div(class='kvpair')
          div(class='key') Id
          div(class='value') {{ user._id}} ({{user.toolConsumer}})
        div(class='kvpair')
          div(class='key') Created / Updated
          div(class='value') {{ user.createDate }} / {{ user.lastUpdateDate }}
    admin-visits-component(:user='user')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AdminVisitsComponent from '@/outside/admin/components/AdminVisitsComponent'
import AdminLinks from '@/outside/admin/components/AdminLinks.vue'
import AdminCommon from '@/outside/admin/AdminCommon.vue'

export default {
  extends: AdminCommon,
  components: { AdminLinks, AdminVisitsComponent },
  data: function () {
    return {
      user: {}
    }
  },
  computed: {
    usersList () { return StoreHelper.getUsersList()}
  },
  methods: {
    loadVisits (user) {
      this.user = user
      this.$store.dispatch('visitList/loadUserVisits', user._id)
    },
    loadComponent: async function () {
      await this.$store.dispatch('userStore/loadUsers', this.consumerId)
      await this.$store.dispatch('visitList/loadUserVisits', undefined) // clear visit list
    }
  }
}
</script>
<style scoped lang='scss'>
</style>

