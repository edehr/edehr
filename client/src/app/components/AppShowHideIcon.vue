<template lang='pug'>
  div(class="activationControl")
    fas-icon(v-show="!show", class="fa", :icon="iconOpened")
    fas-icon(v-show="show", class="fa", :icon="iconClosed")
</template>

<script>
export default {
  props: {
    show: { type: Boolean },
    accordion: { type: Boolean, default () { return false }}
  },
  computed: {
    iconOpened () { return this.accordion ? 'plus' : 'bars'},
    iconClosed () { return this.accordion ? 'times' : 'bars'}
  }
}
</script>

<style scoped lang='scss'>
@import '../../scss/_definitions.scss';
.activationControl {
  //display: inline-block;
  //position: relative;
  //margin-left: 0.5rem;
}
.fa {
  height: 1.25em;
  color: $brand-primary;
}
</style>