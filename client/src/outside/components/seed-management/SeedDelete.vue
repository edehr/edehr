<template lang="pug">
  div(class="outside-action")
    ui-button(v-on:buttonClicked="deleteSeed(seed)", :disabled='disabled', :title="title", class="outside-action")
      fas-icon(class="fa", :icon="appIcons.trash")
      span(v-if="showLabels") &nbsp; Delete
    ui-confirm(
      ref="confirmDialog",
      @confirm="confirmSeedDeletion",
      @abort="cancelSeedDeletion",
      @cancel="cancelSeedDeletion",
      save-label='Delete',
      set-footer
    )
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
const TEXT = {
  TITLE : (name) => `Confirm deletion of ${name}`,
  DESCRIPTION: (name) => `Are you sure you want to delete ${name}?`,
}
export default {
  components: {
    UiButton,
    UiConfirm
  },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  props: {
    seed: { type: Object },
    disabled: { type: Boolean },
    showIds: { type: Boolean }
  },
  computed: {
    title () {
      return this.disabled ? 'Can not delete a seed that is in used by a learning object' : `Delete ${this.seed.name}`
    },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    deleteSeed () {
      const sv = this.seed
      let desc = TEXT.DESCRIPTION(sv.name)
      desc += '\n (' + sv._id + ')'
      this.$refs.confirmDialog.showDialog(
        TEXT.TITLE(sv.name),
        desc,
        'Confirm'
      )
    },
    async confirmSeedDeletion () {
      const seedId = this.seed._id
      console.log('About to delete seed', seedId)
      await StoreHelper.deleteSeed(seedId)
        .then( () => {
          console.log('After seed deleted', seedId)
          this.$emit('seedDeleted')
        })
        .catch(error => {
          console.log('Seed Data list delete error', error)
          StoreHelper.setSystemMessage(error.message)
        })
    },
    cancelSeedDeletion () {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
</style>
