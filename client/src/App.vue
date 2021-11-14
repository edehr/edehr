<template>
  <div id="app" :class="appCssClass">
    <component :is="layout"> <router-view /> </component>
  </div>
</template>

<script>
import StoreHelper from './helpers/store-helper'
const DefaultLayout = 'outside'


export default {
  name: 'App',
  components: {},
  methods: {
    // for the data load method that has been here in App.vue since the beginning go to
    // the new helper PageController
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    appCssClass () {
      let css = []
      if (StoreHelper.isStudent()) {
        css.push('isStudentClass')
      }
      if (StoreHelper.isInstructor()) {
        css.push('isInstructorClass')
      }
      return css.join(' ')
    },
  },
  mounted () {
    console.log('VUE_APP_ROOT_API',process.env.VUE_APP_ROOT_API)
  }
}
</script>

<style lang="scss"></style>
