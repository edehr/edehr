<template lang="pug">
  div
    app-dialog(
      :isModal="false",
      small=true,
      ref="theDialog",
      :useSave="false",
      @cancel="cancelDialog",
      :cancelButtonLabel='ehrText.closeButtonLabel',
      :zIndexBase=10000
    )
      h2(slot="header", class='ui-info-title') {{ title  }}
      div(slot="body", class='ui-info-body')
        p(v-text-to-html='instructions')

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { t18EhrText } from '@/helpers/ehr-t18'
import { textToHtml } from '@/directives/text-to-html'
export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
    }
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
    title () {
      return this.ehrText.studentBannerActivityInstructionsTitle
    }
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$store.dispatch('system/setDialogInstructionsVisible', false )
      this.$refs.theDialog.onClose()
    },
  }
}
</script>
