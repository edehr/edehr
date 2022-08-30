<template lang='pug'>
  label(:for="fieldId", class='cbox')
    input(
      @input="(event) => $emit('update:checked', event.target.checked)",
      type="checkbox",
      :checked="checked",
      :id="fieldId",
      class="")
    span &nbsp; {{ label }}
</template>

<script>
export default {
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
}
</script>

<style lang='scss', scoped>
.cbox{
  display: block;
}
</style>
