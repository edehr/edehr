<template lang='pug'>
  div(class="flow_across table_space_across search-box")
    input(
      type="text",
      v-model='value',
      v-on:keyup.enter="$emit('updateSearchTerm', value)",
      v-on:keyup.esc="value = ''",
    )
    button(
      v-on:buttonClicked="$emit('updateSearchTerm')",
      :disabled="!value",
      class='search-button'
    )
      fas-icon(icon="search", class='fa')
</template>

<script>

export default {
  data () {
    return {
      value: '',
    }
  },
  props: {
    searchTerm: {type: String, required: true}
  },
  watch: {
    searchTerm () {
      this.value = this.searchTerm
    }
  }
}
</script>

<style scoped>

</style>
