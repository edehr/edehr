<template lang="pug">
  div
    ui-link(class="breadcrumb", v-show="show('instructor')", :to="{ name: `instructor` }") Course activities
    ui-link(class="breadcrumb", v-show="show('assignments')", :to="{ name: `assignments` }") Manage Assignments
    ui-link(class="breadcrumb", v-show="show('developEhrData')", :to="{ name: `developEhrData` }") Manage EHR data
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
    isDeveloper () {
      return this.$store.getters['visit/isDeveloper']
    }
  },
  methods: {
    show (ref) {
      console.log('show? ', this.currentPage, ref, ref !== this.currentPage)
      return ref !== this.currentPage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.breadcrumb {
  margin-right: 1rem;
}
</style>
