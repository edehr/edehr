<template lang="pug">
  div(class="outside-layout")
    ui-spinner(:loading="isLoading")
    slot(name="outside-header", class="outside-header")
      app-header
    main(class="outside-main")
      div(name="mainContent", class="outside-content")
        div(class="outside-nav")
          div(class="nv-item", v-show="isInstructor")
            ui-link(:to="{ name: 'instructor' }") Instructor
          div(class="nv-item")
            ui-link(:to="{ name: `assignments` }") Assignments
          div(class="nv-item", v-show="isDeveloper")
            ui-link(:to="{ name: `developEhrData` }") Develop Ehr Data
        div(class="section")
          slot
    slot(name="outside-footer", class="outside-footer")
      app-footer
    input(class="checkbox", type="checkbox", v-model="showingSpecial")
    div(v-show="showingSpecial")
      ehr-special
</template>

<script>
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import OutPanelNav from '../components/OutPanelNav.vue'
import EhrSpecial from '../../inside/components/EhrSpecial.vue'
import UiLink from '../../app/ui/UiLink.vue'
import UiSpinner from '../../app/ui/UiSpinner'

export default {
  name: 'LayoutOutside',
  components: {
    OutPanelNav,
    AppFooter,
    AppHeader,
    EhrSpecial,
    UiLink,
    UiSpinner
  },
  data: function() {
    return {
      showingSpecial: false
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.system.isLoading
    },
    isInstructor() {
      return this.$store.getters['visit/isInstructor']
    },
    isDeveloper() {
      return this.$store.getters['visit/isDeveloper']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

body {
  background: $grey10;
}

.section {
  padding: 1.5rem;
}
.nv-item {
  display: inline-block;
  padding-right: 1rem;
}
.outside-layout {
  .outside-header {
  }
  .outside-content {
    margin: 0;
  }
  .outside-nav {
    padding: 1.5rem 0 0 1.5rem;
  }
}
</style>
