<template lang='pug'>
  div
    div(v-for='(tag) in nonEmptyList',
      :key='tag',
      class="app-tag"
    )
      span {{tag}}
</template>

<script>
export default {
  props: {
    tagList: {type: Array}
  },
  computed: {
    // sometimes the tag list may contain an empty string
    nonEmptyList () { return this.tagList.filter(e => e.length > 0)}
  }
}
</script>
