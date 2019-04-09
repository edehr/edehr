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
        li(v-if="showDashboard", class="navItem")
          router-link(:to="{ name: `student` }", class="navLink subMenu") Assignment details
          ul(class="subNavList", v-show="showAssignmentDetails")
            div(class="columns")
              div(class="column is-11")
                h3 EDEHR 19 - Sample
              div(class="column is-1")
                ui-close(v-on:close="closeDetails")
            p The description for the assignment would go here.
            li(class="subNavItem") Erin Johns health case study #2
            li(class="subNavItem") Instructor's notes
        li(class="navItem")
          router-link(:to="{ name: `help` }", class="navLink") Help
    system-error
</template>
<script>
import SystemError from './SystemError'
import UiClose from '../ui/UiClose'

export default {
  name: 'AppHeader',
  components: { SystemError, UiClose },
  data () {
    return {
      showAssignmentDetails: true
    }
  },
  computed: {
    home () {
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
    fullName () {
      return this.$store.getters['visit/fullName']
    },
    lmsUrl () {
      return this.$store.getters['visit/returnUrl']
    },
    lmsName () {
      return this.$store.getters['visit/lmsName']
    },
    showDashboard () {
      return this.$store.getters['visit/hasDashboard']
    }
  },
  methods: {
    closeDetails () {
      this.showAssignmentDetails = false
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

    .subNavList {
      background: $white;
      border: solid 1px $grey40;
      border-radius: .5em;
      box-shadow: 0 0 20px 0px $grey40;
      color: $grey80;
      font-size: 1em;
      margin-left: 2em;
      margin-top: .5em;
      margin-right: 1em;
      padding: 1.5em 2em;
      position: absolute;
      transition: all 0.5s ease;
      /*    visibility: hidden;
      opacity: 0;*/

      &:before {
          content: '';
          position: absolute;
          left: 26px;
          top: -26px;
          width: 0;
          height: 0;
          border: 14px solid transparent;
          border-bottom-color: $white;
      }

      .subNavItem {
        margin-top: .5em;
      }
    }

/*    &:hover {
      visibility: visible;
      opacity: 1;
      display: block;
    }*/
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

  .app-title {
    font-size: 1.25rem;
    margin-left: 0;
  }
}
</style>
