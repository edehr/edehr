<template lang='pug'>
  div(@click="clickEvent", class='dropdownItem', :title='itemDef.toolTip')
    fas-icon(v-if="itemDef.icon !== undefined", class="fa dd-icon", :icon="itemDef.icon")
    input(v-if="itemDef.checkbox",
      @input="checkboxChecked",
      type="checkbox",
      :checked="checked")
    div(class='dd-label') {{ itemDef.label }}
</template>

<script>
export default {
  name: 'AppDropdownItem',
  props: {
    itemDef: {type: Object},
  },
  computed: {
    checked () { return this.itemDef.isChecked()}
  },
  methods: {
    checkboxChecked () { // do nothing because the other div will do the click event
    },
    clickEvent () {
      if (this.itemDef.callback) {
        this.itemDef.callback()
        this.$emit('dropdownEvent')
      } else {
        this.$emit('dropdownEvent', this.itemDef.eventName)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../scss/definitions';
.dropdownItem {
  padding: 5px;
  display: grid;
  grid-template-columns: 2rem 1fr;
  line-height: 1.25rem;
  cursor: pointer;
  //width: 100%;
}

</style>