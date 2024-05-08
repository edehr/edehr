<template lang="pug">
div
  ui-button(@buttonClicked="showFeedback" )
    span Feedback
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'

export default {
  components: { UiButton },
  methods: {
    showFeedback: function () {
      this.$store.dispatch('system/setEvalDialogVisible', true)
    },
  },
}
</script>
