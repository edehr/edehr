<template lang="pug">
div
  transition(name="fade")
    div(class="modal-mask", v-show="blockUser")
      div(class="modal-wrapper")
        div(class="modal-container is-centered")
          ui-button(value="esso-in", v-on:buttonClicked="actionSignOn")
            fas-icon(class="fa", :icon="appIcons.signIn")
            span &nbsp; {{ ehrText.signInButtonLabel }}
          p {{ehrText.mustSignIn}}
  ehr-simulation-sign-on-dialog(ref='showSignIn')
</template>

<script>
import { t18EhrText } from '@/helpers/ehr-t18'
import UiButton from '@/app/ui/UiButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import EhrSimulationSignOnDialog from '@/inside/components/EhrSimulationSignOnDialog.vue'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { EhrSimulationSignOnDialog, UiButton },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    visitId () { return this.$store.getters['visit/visitId']},
    blockUser () {
      let blocked = false
      if (this.isStudent && !this.isSimSignedOn) {
        blocked = true
      }
      if (this.isDevelopingContent && !this.isSimSignedOn) {
        blocked = true
      }
      return blocked
    },
    isStudent () { return StoreHelper.isStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    isDevelopingContent () { return StoreHelper.isDevelopingContent() },
    isSimSignedOn () { return this.$store.getters['visit/isSimSignedOn'] }
  },
  methods: {
    async actionSignOn () {
      this.$refs.showSignIn.showSignIn()
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: absolute;
  z-index: 4; /* trial and error to have the mask cover EHR tables with sticky headers and yet allow the sign in dialog to come out on top of this mask*/
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  //vertical-align: middle;
}
.modal-container {
  position: relative;
  top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 20rem;
  height: 20rem;
  padding: 20px 10px 0 10px;
  background-color: darkgray;
  font-size: 1.25rem;
}


//.fade-enter-active {
//  transition: opacity .15s;
//}
.fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
