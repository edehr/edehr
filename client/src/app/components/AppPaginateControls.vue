<template lang='pug'>
  div(class="flow_across table_space_across")
    div {{ pagesOfText }}
    ui-button(value="apc-prev", v-on:buttonClicked="previousPage", :disabled="!enablePrev", title='Previous page', class='paginate-button')
      fas-icon(icon="angle-left", class='fa')
    ui-button(value="apc-next", v-on:buttonClicked="nextPage", :disabled="!enableNext", title='Next page', class='paginate-button')
      fas-icon(icon="angle-right", class='fa')

</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'

export default {
  components: { UiButton },
  props: {
    offset: {type: Number},
    listMetadata: {type: Object}
  },
  computed: {
    enablePrev () {
      return this.hasPrev
    },
    enableNext () {
      return this.hasNext
    },
    hasNext () {
      let { totalCount, offset, limit } = this.listMetadata
      return offset + limit < totalCount
    },
    hasPrev () {
      let { offset } = this.listMetadata
      return offset > 0
    },
    pagesOfText () {
      let { totalCount, offset, limit } = this.listMetadata
      let start = totalCount ? offset + 1 : 0
      let end = Math.min(offset + limit, totalCount)
      return `${start} to ${end} of ${totalCount}`
    },
    limit () { return this.$store.getters['system/paginateLimit']},
  },
  methods: {
    nextPage () {
      let { totalCount } = this.listMetadata
      let offset = Math.min(totalCount, this.offset + this.limit)
      this.$emit('repage', offset)
    },
    previousPage () {
      let offset = Math.max(0, this.offset - this.limit)
      this.$emit('repage', offset)
    },
  }
}
</script>

<style scoped>

</style>
