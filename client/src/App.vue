<template lang='pug'>
  div(id="app", :class="appCssClass")
    component(:is="layout")
      router-view
    ui-spinner(:loading="isLoading")
</template>

<script>
import StoreHelper from './helpers/store-helper'
import UiSpinner from '@/app/ui/UiSpinner'
const DefaultLayout = 'outside'


export default {
  name: 'App',
  components: { UiSpinner },
  methods: {
    handleResize () {
      this.$store.commit('system/setSmallWindow', window.innerWidth <= 500 )
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || DefaultLayout) + '-layout'
    },
    isLoading () {
      /*
      Stop using this global spinner during loading.  It's annoying and after some experimentation
      it turns out that it's not really needed.
      We **could** put component local spinners into areas that really need it using the same logic.
       */
      return false // && StoreHelper.isLoading()
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
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style lang="scss"></style>
