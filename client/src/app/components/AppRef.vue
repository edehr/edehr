<template lang='pug'>
  a(:href="`#ref-${reference}`") {{text}}
</template>

<script>
export default {
  props: {
    reference: { type: String },
  },
  computed: {
    text () { return this.reference? '(' + this.reference + ')': ''}
  }
}
</script>
