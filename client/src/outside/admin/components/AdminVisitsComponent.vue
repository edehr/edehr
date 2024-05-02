<template lang="pug">
  div
    h4 User Visit
    div(v-for='(visit, index) in visitsList')
      div(class='row', :id="`S-${visit._id}`")
        div(class='kvpair')
          div(class='key') Last date
          div(class='value')
            strong {{ visit.lastVisitDate }}
        div(class='kvpair')
          div(class='key') Role
          div(class='value') {{ visit.role }} - &nbsp;
            span {{ visit.isStudent ? 'LMS student' : '' }}
            span {{ visit.isInstructor ? 'LMS instructor' : '' }}
            span {{ visit.isDeveloper ? 'LMS developer' : '' }}
        div(class='kvpair')
          div(class='key') User Name
          div(class='value') {{ visit.user.fullName }}
        div(class='kvpair')
          div(class='key') Created
          div(class='value') {{ visit.createDate }}
        div(class='kvpair')
          div(class='key') activity
          div(class='value') {{ visit.activity }}
        div(class='kvpair')
          div(class='key') activityData
          div(class='value') {{ visit.activityData }}
</template>

<script>
import AdminCommon from '@/outside/admin/AdminCommon.vue'

export default {
  extends: AdminCommon,
  components: { },
  props: {
    user: { type: Object }
  },
  computed: {
    visitsList () {
      // get list and decouple from store so we can sort the list
      let list = JSON.parse(JSON.stringify(this.$store.getters['visitList/getVisitList']))
      return list.sort((a, b) => new Date(b.lastVisitDate) - new Date(a.lastVisitDate))
      // return list.sort((a, b) => b.lastVisitDate - a.lastVisitDate)}
    }
  },
  methods: {
    loadComponent: async function () {
    }
  }
}
</script>
<style scoped lang='scss'>
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

