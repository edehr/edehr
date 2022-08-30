<template lang='pug'>
  div
    div(v-for='peKey in pageElementKeys')
      seed-page(
        :pageKey="pageKey",
        :pageChildren="pageChildren",
        :pageElement='pageElements[peKey]',
        :pageSeedData='pageSeedData')
</template>

<script>
import SeedPage from '@/outside/components/seed-struct/SeedPage'
export default {
  components: { SeedPage },
  props: {
    pageKey: { type: String },
    pageDef: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
    pageElements () { return this.pageDef.pageElements || {}},
    pageElementKeys () { return Object.keys(this.pageElements) },
    pageChildren () { return this.pageDef.pageChildren},
  },
  methods: {
  }
}
</script>
