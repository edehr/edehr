<template lang="pug">
  div(v-if='isSimSignedOn', class='flow_across')
    div(class="signed-in-user")  {{ userName }}
    ui-button(value="esso-out", v-on:buttonClicked="actionSignOut")
      span {{ ehrText.signOutButtonLabel }}  &nbsp;
      fas-icon(class="fa", :icon="appIcons.signOut")
</template>
<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import FeatureHelper, { FF_SIGN_ON } from '@/helpers/feature-helper'
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
      pProfession: '',
      explainText: 'This is a simulation of the process of signing into an EHR or LIS.' +
        ' Enter any name. You may use your own name or another name. It doesn\'t matter. ' +
        ' This is a simulated EHR/LIS and you are "signing in" as a healthcare professional who is attending a patient\'s needs.' +
        ' Also enter the profession of the persona you are going to work as.'
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    isSimSignOnEnabled () {
      const cid = this.$store.getters['consumerStore/consumerId']
      return FeatureHelper.isFeatureFlagEnabled(cid, FF_SIGN_ON)
    },
    isReady () { return !(this.pName && this.pName.trim().length > 0 && this.pProfession && this.pProfession.trim().length > 0) },
    isSimSignedOn () { return this.$store.getters['visit/isSimSignedOn']},
    signOnDetails () { return this.$store.getters['visit/simSignOnData'] },
    userName () {
      return this.signOnDetails.personaName +', ' +  this.signOnDetails.personaProfession
    },
    visitId () { return this.$store.getters['visit/visitId']}
  },
  methods: {
    showSignIn () {
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
