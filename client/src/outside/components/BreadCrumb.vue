<template lang="pug">
  ui-link(class="breadcrumb", v-show="show('assignments')", :to="{ name: `assignments` }") < Back to assignments
</template>

<script>
import UiLink from '../../app/ui/UiLink.vue'

export default {
  name: 'BreadCrumb',
  components: { UiLink },
  props: {
    currentPage: {type: String}
  },
  computed: {
  },
  methods: {
    show (ref) {
      // console.log('BreadCrumb show? ', this.currentPage, ref, ref !== this.currentPage)
      return ref !== this.currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.breadcrumb {    
  display: block;
  margin: 0 0 1rem 0;
}
</style>
