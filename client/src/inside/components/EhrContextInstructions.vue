<template lang="pug">
div
  ui-button(@buttonClicked="showInstructions" ) Instructions
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'

export default {
  components: { UiButton },
  methods: {
    showInstructions: function () {
      // See EhrInstructionDialog
      // See EhrLayout for the placement of the dialog
      this.$store.dispatch('system/setDialogInstructionsVisible', true)
    }
  }
}
</script>
