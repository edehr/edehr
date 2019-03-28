<template lang="pug">
  div
    ul
      li(class="medList", v-for="med in medsList")
        div {{ medText(med) }}
</template>

<script>
import MedOrder from './med-entity'
const MAX_LEN = 80
export default {
  name: 'MedList',
  props: {
    medsList: { type: Array }
  },
  methods: {
    medText (med) {
      let text =  MedOrder.medOrderAsTextLine(med, MAX_LEN)
      // console.log('MedList medText', text)
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin-left: 5px;
  list-style: circle outside;
}
</style>