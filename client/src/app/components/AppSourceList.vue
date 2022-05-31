<template lang='pug'>
  div(class='link-list')
    div(v-for="(src, index) in sourceList", class='list-item')
      div(:id="`ref-${index+1}`", class='item-label') ({{index +1}}.) &nbsp;
      div(v-text-to-html="src", class='item-value')
</template>

<script>
export default {
  props: {
    sourceList: { type: Array },
  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.link-list {
}
.list-item  {
  display: flex;
  flex-direction: row;
}

.item-label {
  width: 3rem;
  text-align: end;
}
.item-value {
  max-height: 1.8rem;
}
</style>