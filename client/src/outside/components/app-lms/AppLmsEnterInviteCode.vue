<template lang="pug">
  div
    section(v-if="!hasErrMsg")
      div(id="inviteCode")
          input(type='text', v-model='inviteCode')
          span &nbsp;
          ui-button(value="lms-start-inviteCode", :disabled="!isInviteCodeValid", @buttonClicked="submitInviteCode")
            span Submit
      p.
        Once your invite is verified, we will ask for your email address to help you use the application.
    //section(v-if="hasErrMsg")
    //  div Something went wrong.
    //  div {{ errorMessage }}
    //  ui-button(value="lms-reset-error", @buttonClicked="resetError") Reset

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    UiButton
  },
  data () {
    return {
      inviteCode: '',
      errorMessage: ''
    }
  },
  computed: {
    hasErrMsg () { return !!this.errorMessage },
    isInviteCodeValid () { return !!this.inviteCode },
  },
  methods: {
    async resetError () {
      await StoreHelper.setApiError('')
    },
    async submitInviteCode () {
      console.log('submitInviteCode. ', this.inviteCode)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';


</style>

