<template lang="pug">
  div
    div(v-for='(activity, index) in activities')
      div(class='row', :id="`A-${activity._id}`")
        div(class='kvpair')
          div(class='key') Learning Object Name
          div(class='value') {{ activity.name }}
        div(class='kvpair')
          div(class='key') Id
          div(class='value') {{ activity._id }}
        div(class='kvpair')
          div(class='key') Created / Updated
          div(class='value') {{ activity.createDate }} / {{ activity.lastUpdateDate }}
        div(class='kvpair')
          div(class='key') Description
          div(class='description value') {{ activity.description }}
        div(class='kvpair')
          div(class='key') Seed
          div(class='description value')
            a(@click="scrollMeToSeed(activity.seedDataObj._id)")
              span {{ activity.seedDataObj.name }}
</template>
<script>
import StoreHelper from '@/helpers/store-helper'

export default {
  props: {
    consumerId: { type: String }
  },
  computed: {
    activities () { return StoreHelper.getAssignmentsList() }
  },
  methods: {
    scrollMeToSeed (refName) {
      let id = 'S-'+refName
      let element = document.getElementById(id) //.outerHTML
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  mounted: function () {
    StoreHelper.loadAssignmentAndSeedLists()
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
