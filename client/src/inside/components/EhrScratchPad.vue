<template lang="pug">
  div
    ui-button(v-on:buttonClicked="showDialog",v-bind:secondary="true")
      span Private notes for you {{userName}}

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
import EhrOnlyDemo from '@/helpers/ehr-only-demo'

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
      let sp = ''
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        sp = EhrOnlyDemo.ehrOnlyScratch()
      } else {
        sp = StoreHelper.getStudentScratchData()
      }
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
      if (EhrOnlyDemo.isActiveEhrOnlyDemo()) {
        EhrOnlyDemo.ehrOnlyScratchSave(this.theNotes)
      } else {
        this.$store.dispatch('activityDataStore/sendScratchData', this.theNotes)
      }

    }
  }
}
</script>

<style lang="scss" scoped>

.button {
  width: 99%;
  margin-bottom: 5px !important;
}

textarea {
  height: 15rem;
}

</style>
