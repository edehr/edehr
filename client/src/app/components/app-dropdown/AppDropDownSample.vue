<template lang='pug'>
  div(id="app")
    AppDropdown(:items="items", @a1='a1', @a2='a2', @a3='a3')
      template(#dropdownTitle)
        div(class='sampleTitle') sample title
</template>

<script>
import AppDropdown from './AppDropdown.vue'
export default {
  components: {
    AppDropdown,
  },
  computed: {
    items () {
      return [
        {
          label: 'action one',
          eventName: 'a1',
          icon: 'pen'
        },
        {
          label: 'action two',
          eventName: 'a2',
          icon: 'times'
        },
        {
          label: 'action three',
          eventName: 'a3',
          icon: 'heartbeat'
        }

      ]
    }
  },
  methods: {
    a1 () { console.log('event A 1') },
    a2 () { console.log('event A 2') },
    a3 () { console.log('event A 3') }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../scss/definitions';
.sampleTitle {
  color: #8dd03e;
}
</style>