<template lang="pug">
  div
    h4 User Visit
    div(v-for='(visit, index) in visitsList')
      div(class='row', :id="`S-${visit._id}`")
        div(class='kvpair')
          div(class='key') Role
          div(class='value') {{ visit.role }}
            span {{ visit.isStudent ? 'LMS student' : '' }}
            span {{ visit.isInstructor ? 'LMS instructor' : '' }}
            span {{ visit.isDeveloper ? 'LMS developer' : '' }}
        div(class='kvpair')
          div(class='key') Created / Updated
          div(class='value') {{ visit.createDate }} / {{ visit.lastVisitDate }}
        div(class='kvpair')
          div(class='key') user
          div(class='value') {{ visit.user }}
        div(class='kvpair')
          div(class='key') activity
          div(class='value') {{ visit.activity }}
        div(class='kvpair')
          div(class='key') assignment
          div(class='value') {{ visit.assignment }}
        div(class='kvpair')
          div(class='key') activityData
          div(class='value') {{ visit.activityData }}
</template>

<script>
export default {
  props: {
    user: { type: Object }
  },
  computed: {
    visitsList () { return this.$store.getters['visitList/getVisitList']}
  },
  mounted: function () {
    const id = this.user ? this.user._id : undefined
    this.$store.dispatch('visitList/loadUserVisits', id)
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

