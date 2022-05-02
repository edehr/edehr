<template lang="pug">
  div
    ui-button(v-on:buttonClicked="showDialog",v-bind:secondary="true")
      span Private notes for {{userName}}

    app-dialog(:isModal="false", ref="theDialog", @cancel="cancelDialog", @save="saveDialog")
      h2(slot="header") These private notes are for you {{userName}}
      div(slot="body")
        div
          textarea(v-model="theNotes")
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'
import StoreHelper from '../../helpers/store-helper'

export default {
  components: {
    UiButton,
    AppDialog
  },
  data: function () {
    return {
      populate: true,
      theNotes: ''
    }
  },
  computed: {
    userName () {
      return StoreHelper.fullName()
    }
  },
  methods: {
    resetNotes: function () {
      let sp = StoreHelper.getStudentScratchData()
      // console.log('EhrScratchPad reset with existing ', sp)
      this.theNotes = sp
    },
    showDialog: function () {
      this.resetNotes()
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.resetNotes()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      this.$refs.theDialog.onClose()
      // console.log('EhrScratchPad saving ', this.theNotes)
      this.$store.dispatch('activityDataStore/sendScratchData', this.theNotes)
    }
  }
}
</script>

<style lang="scss" scoped>

button {
  width: 100%;
  margin-bottom: 2px !important;
}

textarea {
  height: 15rem;
}

</style>
