<template lang='pug'>
  ui-link(:name="'seed-list'", :query="{seedId: seedId}")
    fas-icon(class="fa", :icon="appIcons.list")
    span &nbsp; {{text.ROUTE_NAMES.SEEDS}}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiLink from '@/app/ui/UiLink'
export default {
  name: 'SeedListLink',
  components: { UiLink },
  data: function () {
    return {
      appIcons: APP_ICONS,
      text: Text
    }
  },
  props: {
    seedId: {type: String}
  }
}
</script>

<style scoped>

</style>