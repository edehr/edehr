<template lang="pug">
  div(:class="`${$options.name}`")
    div(:class="`${$options.name}__teaserList`", @click="toggle")
      ehr-nav-list-item(:path="path", :level="level")
      div(v-show="open")
        ehr-nav-list(v-for="child in path.children", v-bind:key="child.name" :path="child" :level="level + 1")
</template>

<script>
import EhrNavList from './EhrNavList'
import EhrNavListItem from './EhrNavListItem'
// 				ui-link(:to="{ name: path.name }", :class="`${$options.name}__link`") - {{ path.label }}

export default {
  name: 'EhrNavList',
  components: {
    EhrNavList,
    EhrNavListItem
  },
  computed: {
    open() {
      if (this.level > 1) {
        return true
      }
      return this.$store.state.visit.topLevelMenu === this.path.name
    }
  },
  watch: {
    $route: function(to) {
      if (to.name === this.path.name) {
        this.$store.commit('visit/topLevelMenu', this.path.topLevel)
      }
    }
  },
  props: {
    path: {
      type: Object
    },
    level: { type: Number }
  },
  methods: {
    toggle: function(event) {
      if (this.level === 1) {
        //this.open = !this.open
      }
      event.stopPropagation()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrNavList {
  padding: 0;
  &__teaserList {
    margin-left: 0;
  }
  &__link {
    color: $white;
  }
}
</style>
