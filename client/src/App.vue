<template lang='pug'>
  div(id="app", :class="appCssClass")
    component(:is="layout")
      router-view
    ui-spinner(:loading="isLoading")
    language-translation-warn-dialog(ref="theLanguageWarningDialog")
</template>

<script>
import StoreHelper  from './helpers/store-helper'
import UiSpinner from '@/app/ui/UiSpinner'
import EventBus, {  CHANGE_LANGUAGE_EVENT } from '@/helpers/event-bus'
import LanguageTranslationWarnDialog from '@/app/components/LanguageTranslationWarnDialog.vue'
const DefaultLayout = 'outside'


export default {
  name: 'App',
  components: { LanguageTranslationWarnDialog, UiSpinner },
  methods: {
    handleResize () {
      this.$store.commit('system/setSmallWindow', window.innerWidth <= 500 )
      this.$store.commit('system/setSmallerThan900Window', window.innerWidth <= 900 )
    },
    showLanguageWarning () {
      this.$refs.theLanguageWarningDialog.showWarningDialog()
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
    userSettings () { return this.$store.getters['userStore/userSettings'] || {} },
    allowDark () {
      return !!this.userSettings.allowDark
    },
    appCssClass () {
      let css = []
      if (StoreHelper.isStudent()) {
        css.push('isStudentClass')
      }
      if (StoreHelper.isInstructor()) {
        css.push('isInstructorClass')
      }
      if (this.allowDark) {
        // Get OS dark mode. Note that the browser settings can override the OS setting
        const isDark = window.matchMedia('(prefers-color-scheme:dark)').matches
        if (isDark) {
          css.push('dark-theme')
        }
      }
      return css.join(' ')
    },
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.languageChangeHandler = this.showLanguageWarning
    EventBus.$on(CHANGE_LANGUAGE_EVENT, this.languageChangeHandler)
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
    if (this.languageChangeHandler) {
      EventBus.$off(CHANGE_LANGUAGE_EVENT, this.languageChangeHandler)
    }
  },
}
</script>

<style lang="scss"></style>
