<template lang="pug">
div
  ui-button(@buttonClicked="showInstructions" ) Instructions
  ui-agree(ref="showInstructionsConfirm")
</template>

<script>
import { textToHtml } from '@/directives/text-to-html'
import { t18EhrText } from '@/helpers/ehr-t18'
import UiButton from '@/app/ui/UiButton.vue'
import UiAgree from '@/app/ui/UiAgree.vue'

export default {
  components: { UiAgree, UiButton },
  data () {
    return {}
  },
  computed: {
    ehrText () {
      return t18EhrText()
    },
    activityRecord () {
      return this.$store.getters['activityStore/activityRecord']
    },
    instructions () {
      return textToHtml(this.studentInstructions || '')
    },
    studentInstructions () {
      return this.activityRecord.learningObjectDescription
    },
  },
  methods: {
    showInstructions: function () {
      const title = this.ehrText.studentBannerActivityInstructionsTitle
      const text = this.instructions
      this.$refs.showInstructionsConfirm.showDialog(title, text)
    }
  }
}
</script>
