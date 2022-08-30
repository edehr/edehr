<template lang="pug">
  div
    div(v-on:click="exit", :title='title') Exit
    ui-confirm(ref="confirmDialog", saveLabel="Exit", v-on:confirm="proceed", @abort="$emit('clicked')")
</template>
<script>
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'

export default {
  components: {
    UiButton,
    UiConfirm
  },
  data () {
    return {
    }
  },
  computed: {
    hasSubmitted () {
      return StoreHelper.isStudent() && StoreHelper.isSubmitted()
    },
    lmsUrl ()  { return StoreHelper.lmsUrl()  },
    lmsName () { return StoreHelper.lmsName() },
    body ()   { return 'Your work is not yet submitted. Are you sure you wish to exit the EdEHR and return to your school\'s learning management system?'},
    title ()   { return `Exit the EdEHR and return to ${this.lmsName}`}
  },
  methods: {
    exit () {
      this.$refs.confirmDialog.showDialog(this.title, this.body)
    },
    proceed () {
      this.$emit('clicked')
      // student is finished with their activity. take them back to the lms
      window.location = StoreHelper.lmsUrl()
    },
  },
}
</script>
<style lang="scss" scoped>
button {
  height: 1.8rem;
  min-width: 5rem;
}
</style>