<template lang="pug">
  div(:class="$options.name")
    ul
      li(:class="`${$options.name}__nav`")
        a(v-bind:href="returnUrl") Return to {{ returnLabel }}
        span |
      li(:class="`${$options.name}__nav`")
        ui-link(:to="{ name: 'instructor' }") Course List
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink'
export default {
  name: 'OutPanelNav',
  components: {
    UiButton,
    UiLink
  },
  computed: {
    returnLabel() {
      return 'Return to ' + this.$store.getters['visit/lmsName']
    },
    returnUrl() {
      return this.$store.getters['visit/returnUrl']
    }
  }
}
</script>

<style lang="scss" scoped>
.OutPanelNav {
  &__nav {
    display: inline;
    margin-right: 1rem;

    span {
      display: inline;
      margin-left: 1rem;
    }
  }
}
</style>
