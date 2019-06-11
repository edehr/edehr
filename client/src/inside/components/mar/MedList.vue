<template lang="pug">
  ul
    li(class="medList", v-for="med in medsList")
      h6 {{ med.medication }}
      div {{ med.route }}
      div {{ med.reason }}
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
@import '../../../scss/definitions';

ul {
  margin-left: 0;
  margin-top: 0;
}
ul li {
  list-style: none;
  border-bottom: 1px solid $grey40;
  margin-bottom: 1.5em;
  padding-bottom: 1.5em;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

}
ul li h6 {
  margin-bottom: .25em;
  margin-top: .25em;
}
.medlist span {
  display: block;
  margin-bottom: .5em;
}
</style>