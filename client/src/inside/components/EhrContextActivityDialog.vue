<template lang="pug">
  app-dialog-shell(
    :isModal="true",
    ref="theDialog",
    :useSave="false",
    cancelButtonLabel="Close"
    @cancel='cancelDialog'
  )
    h2(slot="header") Activity
    div(slot="body")
      div(class='dialog-content')
        div {{ panelInfo.submitted ? "You have submitted your work. " : "Submit your work when you are ready"}}
        div
          span(class='fld-label') Course:
          span {{ panelInfo.courseTitle}}
        div
          span(class='fld-label') Activity:
          span {{ panelInfo.activityTitle}}
          p {{ panelInfo.activityDescription }}
        div
          span(class='fld-label') Learning Object:
          span {{ panelInfo.assignmentName}}
          p {{ panelInfo.assignmentDescription }}
</template>

<script>
import AppDialogShell from '@/app/components/AppDialogShell'
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '../../helpers/store-helper'

export default {
  components: { AppDialogShell, UiButton },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData()
    },
  },
  methods: {
    showDialog: function () {
      console.log('showDialog')
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
      this.$emit('clicked')
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.dialog-content div {
  margin-bottom: 5px;
}
.fld-label {
  font-weight: bold;
  display: inline-block;
  min-width: 10rem;
}
</style>
