<template lang="pug">
  div
    ui-confirm(ref="confirmDialog", @confirm="$emit('confirmPageLeave')", @abort="$emit('cancelPageLeave')", set-footer)
</template>

<script>
import UiConfirm from '../../app/ui/UiConfirm'

const HEADER = 'Your evaluation notes have not been saved'
const TEXT = 'Press confirm to continue and lose your work. Press cancel to stop navigation.'
const CONFIRM = 'Confirm continue and lose your work'
const CANCEL = 'Discard notes and continue'

export default {
  components: {
    UiConfirm
  },
  methods: {
    showDialog () {
      this.$refs.confirmDialog.showDialog(HEADER, TEXT, CONFIRM, CANCEL)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>