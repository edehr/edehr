<template lang="pug">
  div(class="assignment-save")
    div Assignment last saved: {{ ehrHelp.getLastPageDataUpdateDate() }}
    div Page design last saved: {{ ehrHelp.getPageGeneratedDate() }}
</template>

<script>
export default {
  props: {
    pageDataKey: { type: String },
    ehrHelp: { type: Object }
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';

.assignment-save{
  font-style: italic;
  margin-top: 5em;
  margin-left: 2rem;
}
</style>
