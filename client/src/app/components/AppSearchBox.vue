<template lang='pug'>
  div(class="flow_across table_space_across search-box")
    input(
      type="text",
      v-model='searchTerm',
      v-on:keyup.enter="$emit('updateSearchTerm', searchTerm)",
      v-on:keyup.esc="searchTerm = ''",
    )
    button(
      v-on:buttonClicked="$emit('updateSearchTerm')",
      :disabled="!searchTerm",
      class='search-button'
    )
      fas-icon(icon="search", class='fa')
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'

export default {
  data () {
    return {
      searchTerm: '',
    }
  },
  // props: {
  //   searchTerm: {type: String, required: true}
  // }
}
</script>

<style scoped>

</style>
