<template lang='pug'>
  div(class="app-tag") {{ tag }}
</template>

<script>
export default {
  props: {
    tag: {type: String}
  }
}
</script>

<style scoped lang='scss'>
.app-tag {
  background-color:lightblue;
  border-radius: 25px;
  display: inline-block;
  padding: 0 10px;
}

</style>
