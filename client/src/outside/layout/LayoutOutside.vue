<template lang="pug">
  div(class="outside-layout flow_down")
    app-header(class="sticky")
    main(class="flow_across outside-view")
      slot
    app-footer
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
export default {
  name: 'LayoutOutside',
  components: {
    AppFooter,
    AppHeader,
  },
  data: function () {
    return {
    }
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
main {
  min-height: 90vh;
  padding-bottom: 2rem;
}
</style>
