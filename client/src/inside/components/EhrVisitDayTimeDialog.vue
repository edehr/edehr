<template lang="pug">
  app-dialog-shell(
    :isModal="true",
    ref="theDialog",
    :useSave="false",
    cancelButtonLabel="Close"
    @cancel='cancelDialog'
  )
    h2(slot="header") Visit Day and Time
    div(slot="body")
      div(v-text-to-html='visitText')
      ehr-visit-day-time-control
</template>
<script>
import AppDialogShell from '@/app/components/AppDialogShell'
import EhrVisitDayTimeControl from '@/inside/components/EhrVisitDayTimeControl'

export default {
  components: { AppDialogShell, EhrVisitDayTimeControl },
  computed: {
    visitText () {
      const t = []
      t.push('Note that the visit day/time feature is not yet implemented.')
      t.push('Also need to open this dialog with the day/time control in edit mode.')
      t.push('Set the simulated visit day number (0, 1, 2, ...) and time.')
      t.push('This day and time will be used when creating new records.')
      return t.join('\n')
    }
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