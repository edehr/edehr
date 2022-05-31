<template lang='pug'>
  div(class="quote_wrapper")
    blockquote {{text}}
    div(class="quote_source") {{source}} &nbsp;
      app-ref(:reference="reference")
</template>

<script>
import AppRef from '@/app/components/AppRef'
export default {
  components: { AppRef },
  props: {
    def: { type: Object },
  },
  computed: {
    text () { return this.def.text },
    source () { return this.def.source },
    reference () { return this.def.reference },
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';


</style>