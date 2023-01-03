<template lang="pug">
  div
    zone-lms-button(@action="duplicateSeed(seed)", :icon='appIcons.copy',
      :title="`Make a copy of ${seed.name}`", text='Duplicate')
    ui-confirm(
      ref="confirmDialog",
      @confirm="confirmSeedDuplication",
      @abort="cancelSeedDuplication",
      @cancel="cancelSeedDuplication",
      save-label='Duplicate',
      set-footer
    )
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
const DUPLICATE = {
  TITLE : (name) => `Confirm duplication of ${name}`,
  DESCRIPTION: (name) => `Are you sure you want to duplicate ${name}?`,
}
export default {
  components: {
    ZoneLmsButton,
    UiConfirm
  },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  props: {
    seed: { type: Object }
  },
  computed: {
    seedId () { return this.seed._id },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    duplicateSeed () {
      this.$refs.confirmDialog.showDialog(
        DUPLICATE.TITLE(this.seed.name),
        DUPLICATE.DESCRIPTION(this.seed.name),
        'Confirm'
      )
    },
    async confirmSeedDuplication () {
      const seed = Object.assign({},
        this.seed, {
          name: `COPY OF ${this.seed.name}`,
          createDate: new Date(),
          lastUpdateDate: new Date()
        })
      delete seed._id
      // if user duplicated the default seed we need to make sure the copy isn't kept as the default.
      seed.isDefault = false
      await StoreHelper.createSeed(this, seed)
        .then( () => this.$emit('newSeed' ))
        .catch(error => {
          console.log('Duplicate seed error', error)
          StoreHelper.setSystemMessage(error.message)
        })

    },
    cancelSeedDuplication () {
    }
  }
}
</script>

