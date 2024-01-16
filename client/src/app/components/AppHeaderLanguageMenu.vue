<template lang='pug'>
  div
    app-dropdown(:items="items", icon='globe')
</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import { APP_LANGUAGE_EN, APP_LANGUAGE_ES, APP_LANGUAGE_FR } from '@/helpers/store-helper'
import { t18EhrText, t18GetLanguage } from '@/helpers/ehr-t18'
export default {
  components: {
    AppDropdown
  },
  data: function () {
    return {
    }
  },
  computed: {
    items () {
      const menu = []
      let currentLn = t18GetLanguage()
      let ehrText = t18EhrText()
      if (currentLn !== APP_LANGUAGE_FR) {
        menu.push({
          label: ehrText.French,
          toolTip: 'Change the language to French',
          callback: () => this.makeLanguageChange(APP_LANGUAGE_FR),
          icon: 'globe'
        })
      }
      if (currentLn !== APP_LANGUAGE_ES) {
        menu.push({
          label: ehrText.Spanish,
          toolTip: 'Change the language to Spanish',
          callback: () => this.makeLanguageChange(APP_LANGUAGE_ES),
          icon: 'globe'
        })
      }
      if (currentLn !== APP_LANGUAGE_EN) {
        menu.push({
          label: ehrText.English,
          toolTip: 'Change the language to English',
          callback: () => this.makeLanguageChange(APP_LANGUAGE_EN),
          icon: 'globe'
        })
      }
      return menu
    },
  },
  methods: {
    makeLanguageChange (requestedLanguage) {
      this.$router.replace({ name: this.$route.name,  query: { lang: requestedLanguage }})
    }
  }
}
</script>
