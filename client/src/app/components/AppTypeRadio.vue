<template lang='pug'>
  div(class="flow_across table_space_across")
    div(v-for="t in appTypes", :key='t.key')
      label(class="clickable")
        input(type="radio", name='appType', :value="t.key", id="t.key", v-model="checkAppTypes", @change="checkedAppType($event)")
        span &nbsp; {{t.key}}
</template>

<script>

export default {
  data () {
    return {
      appTypes: [
        {key: 'EHR'},
        {key: 'LIS'}
      ],
      checkAppTypes: 'EHR'
    }
  },
  props: {
    value: { type: String }
  },
  methods: {
    checkedAppType ( event) {
      event.stopPropagation()
      // remove empty strings
      // this.checkAppTypes = this.checkAppTypes.filter( t => !!t)
      this.$emit('changeAppTypes', this.checkAppTypes)
    },
  },
  mounted () {
    this.checkAppTypes = this.value
  },
  watch: {
    value () {
      this.checkAppTypes = this.value
    }
  }
}
</script>

<style scoped>

</style>
