<template lang='pug'>
  div
    p {{text}} &nbsp;
      app-ref(v-for='r in references', :key="r", :reference='r')
        span &nbsp;
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
    references () { return this.def.references },
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';


</style>