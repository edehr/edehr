<template lang='pug'>
  a(:href="`#ref-${reference}`") ({{reference}})
</template>

<script>
export default {
  props: {
    reference: { type: String },
  },
}
</script>
