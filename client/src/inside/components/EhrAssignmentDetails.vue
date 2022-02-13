<template lang="pug">
  div
    ui-button(v-on:buttonClicked="assignmentDetailsShow()") Activity Details
    app-dialog(
    :isModal="false",
    ref="assignmentDetails",
    :useSave="false",
    cancelButtonLabel="Done",
    @cancel="assignmentDetailsHide()"
    )
      h2(slot="header") Assignment Details
      div(slot="body")
        ehr-assignment-details

</template>
<script>
import EhrAssignmentDetails from './EhrAssignmentDetailsContent.vue'
import UiButton from '../../app/ui/UiButton.vue'
import AppDialog from '../../app/components/AppDialogShell.vue'

export default {
  name: 'EhrNavPanelAction',
  components: {
    EhrAssignmentDetails,
    UiButton,
    AppDialog
  },
  methods: {
    assignmentDetailsHide () {
      this.$refs.assignmentDetails.onClose()
    },
    assignmentDetailsShow () {
      this.$refs.assignmentDetails.onOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions'; 

.button {
  width: 100%;
  margin-bottom: 2px !important;
}
</style>
