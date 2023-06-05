<template lang='pug'>
  div
    app-tag(v-for='(tag, x) in tagList', :key='tag + x', :tag='tag')
</template>

<script>
import AppTag from '@/app/components/AppTag.vue'

export default {
  components: { AppTag },
  props: {
    tagList: {type: Array}
  }
}
</script>

<style scoped>

</style>
