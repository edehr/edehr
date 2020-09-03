<template lang="pug">
  div(class="navList")
    div(class="navItem")
      button(v-on:click="downloadSeed") download seed


</template>

<script>
import StoreHelper from '@/helpers/store-helper'
export default {
  methods: {
    downloadSeed () {
      console.log('download seed clicked')
      const data = StoreHelper.getSeedEhrData()
      console.log( JSON.stringify(data, null, 2))
    }
  }
}
</script>

<style scoped>

</style>