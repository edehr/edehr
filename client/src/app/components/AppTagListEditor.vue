<template lang='pug'>
  div
    app-tag-list(:tag-list="tagListAsArray")
    input(class="input", type="text", v-model="liveList", @input="handleUpdate")

</template>

<script>

import AppTagList from '@/app/components/AppTagList.vue'

export default {
  components: { AppTagList },
  data: function () {
    return {
      // local property that is used by input
      liveList: ''
    }
  },
  props: {
    // parent provided property
    tagList: {type: String}
  },
  computed: {
    tagListAsArray () {
      return this.liveList.split(' ')
    }
  },
  methods: {
    // inform parent about update
    handleUpdate () {
      this.$emit('update',this.liveList)
    }
  },
  watch: {
    // parent changes property. copy to local
    tagList () {
      this.liveList = this.tagList || ''
    },
  }
}
</script>

<style scoped>

</style>
