<template lang="pug">
  ul
    li(class="medList", v-for="med in medsList")
      med-order(:medOrder='med')
</template>

<script>
import MedOrder from '@/inside/components/mar/MedOrder'
export default {
  components: { MedOrder },
  props: {
    medsList: { type: Array }
  },
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
  padding-bottom: 1em;
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
