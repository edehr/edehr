<template lang="pug">
  div
    button(class="accButton") {{ title }}
    div(class="accPanel")
      slot
    button(class="closeButton", style='display: none') close
</template>

<script>
export default {
  components: { },
  props: {
    title: { type: String }
  }
}
</script>

