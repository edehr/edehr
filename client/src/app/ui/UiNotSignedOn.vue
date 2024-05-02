<template lang="pug">
  transition(name="fade")
    div(class="modal-mask", v-show="blockUser")
      div(class="modal-wrapper")
        div(class="modal-container is-centered")
          span {{ehrText.mustSignIn}}
</template>

<script>

import StoreHelper from '@/helpers/store-helper'
import FeatureHelper, { FF_SIGN_ON } from '@/helpers/feature-helper'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  computed: {
    ehrText () { return t18EhrText() },
    blockUser () {
      let block = false
      const cid = this.$store.getters['consumerStore/consumerId']
      if (FeatureHelper.isFeatureFlagEnabled(cid, FF_SIGN_ON)) {
        if (StoreHelper.isSeedEditing() || StoreHelper.isStudent()) {
          block = !this.$store.getters['visit/isSimSignedOn']
        }
      }
      return block
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 4; /* trial and error to have the mask cover EHR tables with sticky headers and yet allow the sign in dialog to come out on top of this mask*/
  top: 7rem;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
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
