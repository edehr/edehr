<template>
  <div :class="$options.name"><slot /></div>
</template>

<script>
export default {
  name: 'UiText'
}
</script>

<style lang="scss" scoped>
.UiText {
  > :not(:first-child) {
    margin-top: 1.25em;
  }

  p {
    line-height: 1.4;
  }
}
</style>
