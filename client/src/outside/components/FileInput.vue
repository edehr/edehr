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
      span(class="file-label button is-primary") {{buttonLabel}}
</template>
<script>
export default {
  props: {
    acceptTypes: { type: String, default: 'image/*,.pdf'},
    disabled: { type: Boolean, default: false},
    fieldName: { type: String,  default: 'file' },
    inputId: { type: String, default: 'fileInput' },
    buttonLabel:  { type: String, default: 'Add a file ...' }
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
.file-label{
  /* to override the 2rem marging that buttons have */
  margin-bottom: 0;
}

</style>
