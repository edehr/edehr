<template lang="pug">
  header(class="apphdr")
    div(class="wrapper")
      ul(class="navList")
        li(class="navItem")
          router-link(:to="{ name: `${home}` }", class="navLink app-title") Educational Electronic Health Record - {{ fullName }}
        li(class="navItem push")
          a(:href="lmsUrl", class="navLink") {{lmsName}}
        li(v-if="showDashboard", class="navItem")
          router-link(:to="{ name: `instructor` }", class="navLink") Dashboard
        li(class="navItem")
          router-link(:to="{ name: `help` }", class="navLink") Help
    system-error
</template>
<script>
import SystemError from './SystemError'

export default {
  name: 'AppHeader',
  components: { SystemError },

  computed: {
    home() {
      let isStudent = this.$store.getters['visit/isStudent']
      let isDevelopingContent = this.$store.state.visit.isDevelopingContent
      let isInstructor = this.$store.getters['visit/isInstructor']
      let home = isStudent
        ? 'demographics'
        : isInstructor
        ? 'instructor'
        : isDevelopingContent
        ? 'assignments'
        : 'home'
      return home
    },
    fullName() {
      return this.$store.getters['visit/fullName']
    },
    lmsUrl() {
      return this.$store.getters['visit/returnUrl']
    },
    lmsName() {
      return this.$store.getters['visit/lmsName']
    },
    showDashboard() {
      return this.$store.getters['visit/hasDashboard']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.apphdr {
  background: $toolbar-background-color;
  color: $toolbar-color;

  .wrapper {
    padding: 10px 20px;
  }
  .navList {
    display: flex;
    /* default is flow in row without wrap */
  }

  .app-title {
    font-weight: bold;
    font-size: 2.2rem;
    color: white;
  }

  .push {
    margin-left: auto;
  }

  /*  .navItem {
    margin-right: 1em;
  }*/

  .navLink {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    margin-left: 3em;

    &,
    &:visited {
      color: inherit;
    }

    &:focus,
    &:hover,
    &.is-active {
      text-decoration: underline;
    }
  }
}
</style>
