<template lang="pug">
  div(class="EhrPanelHeader EhrPanelContent")
    div(class="EhrPanelHeader_Inner EhrPanelContent_Inner")
      div(class="title")
        h1
          slot Panel Title
      div(class="controls")
        slot(name="controls")
</template>

<script>
export default {
  name: 'EhrPanelHeader',
  components: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrPanelHeader {
  background-color: $grey03;
  color: $grey60;
  height: $ehrPanelHeight;
  .EhrPanelHeader_Inner {
    display: flex;
    .title {
      flex: 1 0 auto;
    }
    .controls {
      /* 6rem width to pull the control into the centre more */
      flex: 0 1 6rem;
    }
  }
}
</style>
