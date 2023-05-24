<template lang='pug'>
  a(:href='iPath', target="_blank", class='iLink')
    img(:src='iPath', alt='bloodSmear', class='iImage')
    div {{iName}}
</template>

<script>
export default {
  name: 'SmearImage',
  props: {
    iName: { type: String }
  },
  computed: {
    iPath () { return '/assets/landing/labcon2023/' + this.iName}
  }
}
</script>

<style lang='scss' scoped>
@import '../../../scss/definitions';

.iLink {
  margin-right: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div {
    align-self: center;
  }
}
.iImage {
  width: 200px;
  align-self: center;
}

</style>
