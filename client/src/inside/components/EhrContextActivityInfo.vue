<template lang="pug">
  div
    div(v-on:click="showDialog()") Activity details

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

</style>
