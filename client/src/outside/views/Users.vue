<template lang="pug">
  div(:class="$options.name")
    h1 Users
    ol Consumer {{ consumer.id }}
      li {{ consumer.tool_consumer_instance_name }}
      li {{ consumer.tool_consumer_instance_description }}

    ui-button(v-on:buttonClicked="refresh") Refresh list
    table.table
      thead
        tr
          th LMS User Id
          th Given Name
          th Family Name
          th Full Name
          th Created
          th Updated
          th Consumer Key
      tbody
        tr(v-for="item in usersList")
          td {{ item.user_id }}
          td {{ item.givenName}}
          td {{ item.familyName}}
          td {{ item.fullName}}
          td {{ item.createDate}}
          td {{ item.lastUpdateDate}}
          td {{ item.consumerKey}}

    router-link(to="/consumers") See consumers page

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'Users',
  components: { UiButton },
  computed: {
    consumerId () {
      console.log('Users consumerId:', this.$route.params.id)
      return this.$route.params.id
    },
    consumer () { return StoreHelper.getConsumer() },
    usersList () { return StoreHelper.getUsersList()}
  },
  methods: {
    refresh: function () {
      const id = this.$route.params.id
      console.log('Users load for', id)
      StoreHelper.loadUsersList(id)
      StoreHelper.loadConsumer(id)
    }
  },
  mounted: function () {
    this.refresh()
  }
}
</script>

<style scoped>
  li {
    margin-left: 1rem;
  }
</style>
