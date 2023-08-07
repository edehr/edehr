<template lang='pug'>
  div(class="flow_across table_space_across")
    div(v-for="t in appTypes", :key='t.key')
      label(class="clickable")
        input(type="checkbox", :value="t.key", id="t.key", v-model="checkAppTypes", @change="checkedAppType($event)")
        span {{t.key}}
</template>

<script>

export default {
  data () {
    return {
      appTypes: [
        {key: 'EHR'},
        {key: 'LIS'}
      ],
      checkAppTypes: ['EHR']
    }
  },
  methods: {
    checkedAppType ( event) {
      event.stopPropagation()
      // remove empty strings
      this.checkAppTypes = this.checkAppTypes.filter( t => !!t)
      this.$emit('changeAppTypes', this.checkAppTypes)
    },

  }
}
</script>

<style scoped>

</style>
