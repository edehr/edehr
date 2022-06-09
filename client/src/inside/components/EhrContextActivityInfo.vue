<template lang="pug">
  div
    ui-button(v-on:buttonClicked="showDialog")
      span Activity details

    app-dialog-shell(
      :isModal="true",
      ref="theDialog",
      :useSave="false",
      cancelButtonLabel="Close"
      @cancel='cancelDialog'
    )
      h2(slot="header") Activity
      div(slot="body")
        div() Course: {{ panelInfo.courseTitle}}
        div() Activity: {{ panelInfo.activityTitle}}
          p {{ panelInfo.activityDescription }}
        div() Assignment: {{ panelInfo.assignmentName}}
          p {{ panelInfo.assignmentDescription }}
        div Activity is {{ panelInfo.closed ? "closed " : "open "}} to students
</template>

<script>
import AppDialogShell from '@/app/components/AppDialogShell'
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrClassListNav',
  components: { AppDialogShell, UiButton },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData()
    },
  },
  methods: {
    showDialog: function () {
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
