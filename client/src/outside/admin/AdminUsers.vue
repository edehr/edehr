<template lang="pug">
  div
    div(v-for='(user, index) in usersList', class="selectable", @click='loadVisits(user)')
      div(class='row', :id="`S-${user._id}`")
        div(class='kvpair')
          div(class='key') User Name
          div(class='value') {{ user.fullName }}
        div(class='kvpair')
          div(class='key') Created / Updated
          div(class='value') {{ user.createDate }} / {{ user.lastUpdateDate }}
    admin-visits(:user='user')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import AdminVisits from '@/outside/admin/AdminVisits'

export default {
  components: { AdminVisits },
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
    }
  },
}
</script>
<style scoped lang='scss'>
.selectable {
  cursor: pointer;
}
.row {
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0;
  row-gap: 0.2rem;
  width: 90vw;
}
.kvpair {
  display: flex;
  flex-flow: row;
  div {
    border: 1px solid #b5b5b5;
  }
}
.key {
  width: 20%;
}
.value {
  width: 80%;
  background-color: #b5b5b5;
}

</style>

