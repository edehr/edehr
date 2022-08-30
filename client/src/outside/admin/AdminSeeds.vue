<template lang="pug">
  div
    div(v-for='(seed, index) in seeds')
      div(class='row', :id="`S-${seed._id}`")
        div(class='kvpair')
          div(class='key') Seed Name
          div(class='value') {{ seed.name }}
        div(class='kvpair')
          div(class='key') Id
          div(class='value') {{ seed._id }}
        div(class='kvpair')
          div(class='key') Created / Updated
          div(class='value') {{ seed.createDate }} / {{ seed.lastUpdateDate }}
        div(class='kvpair')
          div(class='key') Description
          div(class='description value') {{ seed.description }}
</template>
<script>
import StoreHelper from '@/helpers/store-helper'

export default {
  computed: {
    seeds () { return StoreHelper.getSeedDataList().filter( sd => !sd.isDefault)}
  },
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
