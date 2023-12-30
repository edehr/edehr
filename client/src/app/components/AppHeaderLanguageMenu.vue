<template lang='pug'>
  div
    app-dropdown(:items="items", icon='globe')
    app-dialog(:isModal="true", ref="theDialog", :useSave="false", @cancel="proceed", cancelButtonLabel="OK")
      h2(slot="header") About EdEHR and support for {{requestedLanguageName}}
      div(slot="body")
        p The support for {{requestedLanguageName}} is a work-in-progress. The translations you will see have been provided by machines not people. Please do not depend on these translations until they have been reviewed.   All the text the student sees will be translated. Other text as seen by faculty will be translated later.
        p.
          Please contact us if you can help with these translations or if you have a suggestion to improve the translations, or the application itself, or perhaps even the wording used in English. Visit the contact page at
          <a href="https://edehr.org"> edehr.org </a>
        //p live setting:  {{ noshow }}
        //p saved setting: {{ userPrefNoShowTranslationWarning }}

        div(v-if="showWarning")
          input(type='checkbox', v-model='noshow')
          label  Don't show me this again


</template>

<script>
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import { APP_LANGUAGE_EN, APP_LANGUAGE_ES, APP_LANGUAGE_FR } from '@/helpers/store-helper'
import { t18EhrText, t18GetLanguage, t18SetEnglish, t18SetFrench, t18SetSpanish } from '@/helpers/ehr-t18'
import AppDialog from '@/app/components/AppDialogShell.vue'
export default {
  components: {
    AppDialog,
    AppDropdown
  },
  data: function () {
    return {
      noshow: false,
      requestedLanguage: '',
      showWarning: false
    }
  },
  computed: {
    requestedLanguageName () { return this.requestedLanguage === APP_LANGUAGE_ES ? 'Spanish' : 'French'},
    userPrefNoShowTranslationWarning () { return this.$store.getters['system/userPrefNoShowTranslationWarning']},
    items () {
      const menu = []
      let currentLn = t18GetLanguage()
      let ehrText = t18EhrText()
      if (currentLn !== APP_LANGUAGE_FR) {
        menu.push({
          label: ehrText.French,
          toolTip: 'Change the language to French',
          callback: () => this.showWarningDialog(APP_LANGUAGE_FR),
          icon: 'globe'
        })
      }
      if (currentLn !== APP_LANGUAGE_ES) {
        menu.push({
          label: ehrText.Spanish,
          toolTip: 'Change the language to Spanish',
          callback: () => this.showWarningDialog(APP_LANGUAGE_ES),
          icon: 'globe'
        })
      }
      if (currentLn !== APP_LANGUAGE_EN) {
        menu.push({
          label: ehrText.English,
          toolTip: 'Change the language to English',
          callback: () => this.showWarningDialog(APP_LANGUAGE_EN),
          icon: 'globe'
        })
      }
      menu.push({
        horizontal: true
      })
      menu.push({
        label: 'About',
        toolTip: 'About the translations',
        callback: () => this.showAboutDialog(),
        icon: 'info-circle'
      })
      return menu
    },
  },
  methods: {
    showAboutDialog () {
      this.showWarning = false
      this.$refs.theDialog.onOpen()
    },
    showWarningDialog (lng) {
      this.showWarning = true
      this.noshow = this.userPrefNoShowTranslationWarning
      this.requestedLanguage = lng
      if (this.requestedLanguage === APP_LANGUAGE_EN || this.userPrefNoShowTranslationWarning) {
        this.makeLanguageChange()
      } else {
        this.$refs.theDialog.onOpen()
      }
    },
    proceed () {
      this.$refs.theDialog.onClose()
      if (this.showWarning) {
        this.$store.dispatch('system/setUserPrefNoShowTranslationWarning', this.noshow)
        this.makeLanguageChange()
      }
    },
    makeLanguageChange () {
      if (this.requestedLanguage === APP_LANGUAGE_FR) {
        t18SetFrench()
      } else  if (this.requestedLanguage === APP_LANGUAGE_ES) {
        t18SetSpanish()
      } else {
        t18SetEnglish()
      }
    }
  }
}
</script>
