<template lang="pug">
  div(class='med-order')
    div(class='label-value')
      label Medication:
      div
        div {{ medOrder.medication }} {{ medOrder.dose }}
        div {{ medOrder.route }} &nbsp; {{ medOrder.reason }}
    div(class='label-value', v-if='medOrder.instructions')
      div Instructions:
      div {{ medOrder.instructions }}
</template>

<script>
export default {
  props: {
    medOrder: { type: Object }
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.med-order {
  width: 24rem;
  //border: 1px solid red;
}

</style>
