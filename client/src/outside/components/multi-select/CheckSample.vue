<template lang='pug'>
  div(class='sample')
    multi-checkbox(
      :value="heroes" :options="options",
      @update:value="updated")
    div heros {{ heroes }}
</template>

<script>
import MultiCheckbox from './MultiCheckbox.vue'

export default {
  components: { MultiCheckbox },
  data () {
    return {
      heroes: [],
      options: []
    }
  },
  methods: {
    updated (value) {
      console.log(value)
      this.heroes = value
    }
  },
  mounted () {
    this.heroes = [2, 3, 4]
    this.options = [
      { name: 'Luther', id: 1 },
      { name: 'Diego', id: 2 },
      { name: 'Allison', id: 3 },
      { name: 'Klaus', id: 4 },
      { name: 'Five', id: 5 },
      { name: 'Ben', id: 6 },
      { name: 'Vanya', id: 7 },
    ]
  }
}
</script>

<style lang='scss' scoped>
@import "../../../scss/definitions";

.sample {
  width: 10%
}
</style>
