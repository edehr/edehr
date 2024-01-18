<template lang='pug'>
  div
    app-dialog(:isModal="true", ref="theDialog", :useSave="false", @cancel="proceed", cancelButtonLabel="OK")
      h2(slot="header") About EdEHR and support for French and Spanish
      div(slot="body")
        p(v-text-to-html="warnMsg")
        p.
          Please contact us via the contact page at
          <a href="https://edehr.org"> edehr.org </a>
          if you can help with these translations.

        div
          input(type='checkbox', v-model='noShowPref')
          label  Don't show me this again
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell.vue'
import { APP_LANGUAGE_ES, APP_LANGUAGE_FR } from '@/helpers/store-helper'
import {  t18GetLanguage } from '@/helpers/ehr-t18'
export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
      noShowPref: false
    }
  },
  computed: {
    userPrefNoShowTranslationWarning () { return this.$store.getters['system/userPrefNoShowTranslationWarning']},
    warnMsg () {
      let msg
      msg = ' Only the student experience is fully translated. The text seen by faculty may be translated later. \n' +
        ' The French translation is a machine translation with many expected mistakes. ' +
        ' Do not depend on this translation until it is professionally reviewed. \n' +
        ' The Spanish translation is currently being reviewed by a translator ' +
        ' who has both medical and educational experience.  \n'
      return msg
    }
  },
  methods: {
    showWarningDialog () {
      let requestedLanguage = t18GetLanguage()
      this.noShowPref = this.userPrefNoShowTranslationWarning
      if (!this.noShowPref) {
        if (requestedLanguage === APP_LANGUAGE_FR || requestedLanguage === APP_LANGUAGE_ES ) {
          this.$refs.theDialog.onOpen()
        }
      }
    },
    proceed () {
      this.$refs.theDialog.onClose()
      if (this.noShowPref !== this.userPrefNoShowTranslationWarning) {
        this.$store.dispatch('system/setUserPrefNoShowTranslationWarning', this.noShowPref)
      }
    }
  }
}
</script>
