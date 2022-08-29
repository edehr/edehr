<template lang='pug'>
  ui-link(:name="'learning-objects'", :query="{learningObjectId: learningObjectId}")
    fas-icon(class="fa", :icon="appIcons.list")
    span &nbsp; {{text.ROUTE_NAMES.LOBJS}}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import UiLink from '@/app/ui/UiLink'
export default {
  components: { UiLink },
  data: function () {
    return {
      appIcons: APP_ICONS,
      text: Text
    }
  },
  props: {
    learningObjectId: {type: String}
  }
}
</script>

<style scoped>

</style>