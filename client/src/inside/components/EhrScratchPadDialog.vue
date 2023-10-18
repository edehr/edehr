<template lang="pug">
  div
    app-dialog(:isModal="false", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :zIndexBase=10000)
      h4(slot="header") These private notes are for you {{userName}}
      div(slot="body")
        textarea(v-model="theNotes")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'
export default {
  components: {
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
      console.log('scratch dialog showDialog')
      this.resetNotes()
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$store.dispatch('system/setScratchPadVisible', false )
      this.resetNotes()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      this.$store.dispatch('system/setScratchPadVisible', false )
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

textarea {
  width: 100%;
  height: 15rem;
}

.dialog-wrapper{
  z-index: 1111 !important;
}
</style>
