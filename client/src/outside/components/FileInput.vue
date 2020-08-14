<template lang="pug">
  div(class="file")
    label(class="file-label")
      input(
        class="file-input"
        type="file",
        :name="fieldName",
        :id="inputId",
        :accept="acceptTypes",
        :disabled="disabled",
        ref="fileInput",
        @change="$emit('file', $event.target.files)"
      )
      span(class="file-cta")
        span(class="file-label") Add a file ...
</template>
<script>
export default {
  props: {
    acceptTypes: { type: String, default: 'image/*,.pdf'},
    disabled: { type: Boolean, default: false},
    fieldName: { type: String,  default: 'file' },
    inputId: { type: String, default: 'fileInput' }
  },
  methods: {
    change (e) {
      this.$emit('file', e.target.files)
    },
    clear () {
      this.$refs.fileInput.value = ''
    }
  }
}
</script>
<style lang="scss" scoped>
/* Using Bluma class */
</style>
