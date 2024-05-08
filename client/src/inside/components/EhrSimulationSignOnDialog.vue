<template lang="pug">
  div
    app-dialog( ref="theDialog", :isModal="true", @save='actionSignOn', @cancel='cancelSignIn', :disable-save='isReady')
      h3(slot="header") {{ ehrText.signInButtonLabel }}
      div(slot="body")
        div(class='so-group')
          div(class="so-element")
            label(for="nInput")  {{ ehrText.signInNameLabel }}
            input(class="input sso-input", id="nInput", type="text", v-model="pName", :placeholder='ehrText.signInNameLabel')
          div(class="so-element")
            label(for="pInput")  {{ ehrText.signInProfessionLabel }}
            input(class="input sso-input", id="pInput", type="text", v-model="pProfession", :placeholder='ehrText.signInProfessionLabel')

</template>
<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import AppDialog from '@/app/components/AppDialogShell.vue'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'
import { APP_ICONS } from '@/helpers/app-icons'

export default {
  components: {
    AppDialog,
    UiInfo,
    UiButton,
  },
  data () {
    return {
      appIcons: APP_ICONS,
      pName: '',
      pProfession: ''
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    isReady () { return !(this.pName && this.pName.trim().length > 0 && this.pProfession && this.pProfession.trim().length > 0) },
    signOnDetails () { return this.$store.getters['visit/simSignOnData'] },
    userName () {
      return this.signOnDetails.personaName +', ' +  this.signOnDetails.personaProfession
    },
    visitId () { return this.$store.getters['visit/visitId']}
  },
  methods: {
    showSignIn () {
      console.log('extern signal to show sign on dialog')
      this.pName = StoreHelper.givenName()
      this.pProfession = this.$store.getters['visit/role']
      this.$refs.theDialog.onOpen()
    },
    async actionSignOn () {
      this.$refs.theDialog.onClose()
      const postBody = { visitId: this.visitId, personaName: this.pName, personaProfession: this.pProfession }
      await this.$store.dispatch('visit/simulationSignOn', postBody)
      await this.$store.dispatch('visit/loadSimulationSignIn', this.visitId)
    },
    cancelSignIn () {
      this.$refs.theDialog.onClose()
    },
    async actionSignOut () {
      await this.$store.dispatch('visit/simulationSignOut', this.visitId)
      await this.$store.dispatch('visit/loadSimulationSignIn', this.visitId)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../scss/definitions";
.sso-input {
  max-width: 8rem;
}
.signed-in-user {
  margin-right: 1rem;
}
.so-group {
  display: flex;
  flex-direction: column;
}
.so-element {
  label {
    min-width: 5rem;
  }
}
</style>
