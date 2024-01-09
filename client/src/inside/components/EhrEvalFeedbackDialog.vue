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
      h2(slot="header", class='ui-info-title') {{ ehrText.studentBannerInstructorsFeedback  }}
      div(slot="body", class='ui-info-body')
        p(v-text-to-html="evaluationData")

</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { t18EhrText } from '@/helpers/ehr-t18'
export default {
  components: {
    AppDialog
  },
  data: function () {
    return {
      theNotes: ''
    }
  },
  computed: {
    ehrText () { return t18EhrText() },
    evaluationData () { return this.$store.getters['activityDataStore/evaluationData'] },
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$store.dispatch('system/setEvalDialogVisible', false )
      this.$refs.theDialog.onClose()
    },
  }
}
</script>
