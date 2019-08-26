<template lang="pug">
  div
    input(id="v2control", type="checkbox", v-model="inputVal")
    label(for="v2control") {{label}}

</template>

<script>
export default {
  data: function () {
    return {
      inputVal: false,
    }
  },
  computed: {
    label () {
      return 'Showing ' + (this.inputVal ? 'V2' : 'V1')
    }
  },
  mounted: function () {
    this.inputVal = this.$store.state.system.usingV2
  },
  watch: {
    inputVal (val) {
      this.$store.commit('system/setUseV2', val)
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
