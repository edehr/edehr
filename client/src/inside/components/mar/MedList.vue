<template lang="pug">
  ul
    li(class="medList", v-for="med in medsList")
      span medication: {{ med.medication }}, &nbsp;
      span route: {{ med.route }}, &nbsp;
      span reason: {{ med.reason }}
</template>

<script>
import MedOrder from './med-entity'
export default {
  name: 'MedList',
  props: {
    medsList: { type: Array }
  },
  methods: {
    medText (med) {
      let text =  MedOrder.medOrderAsTextLine(med)
      // console.log('MedList medText', text)
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
ul li {
  margin-left: 0;
  list-style: square inside;
}
</style>