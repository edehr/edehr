<template lang="pug">
  footer
    div(class="wrapper" v-if="showNav")
      ui-link(class="footer_link", :to="{ name: `demographics` }") Demographics
      //span(class="spacer") |
      //ui-link(class="footer_link", :to="{ name: `dashboard` }") Dashboard
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: 'instructor' }") Instructor
      span(class="spacer") |
      ui-link(class="footer_link", :to="{ name: `help` }") Help
      p Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International License.
</template>

<script>
import UiLink from '../ui/UiLink.vue'

export default {
  name: 'AppFooter',
  components: {
    UiLink
  },
  data: function() {
    return {
      showNav: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
footer {
  background: $toolbar-background-color;
  color: $toolbar-color;
  padding: 20px;

  .wrapper {
    @include wrapper('content');
  }
  text-align: center;

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
    &:hover {
      color: rgba(255, 255, 255, 1);
      transition: 350ms ease-out;
    }
  }
}
</style>
