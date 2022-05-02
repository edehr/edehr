<template lang="pug">
  div(class="EhrNavList")
    div(class="EhrNavList__teaserList")
      ehr-nav-list-item(:path="path", :level="level", :opened='open')
      div(v-show="open")
        ehr-nav-list(v-for="child in path.children", v-bind:key="child.name" :path="child" :level="level + 1")
</template>

<script>
import EhrNavList from './EhrNavList'
import EhrNavListItem from './EhrNavListItem'

export default {
  name: 'EhrNavList',
  components: {
    EhrNavList,
    EhrNavListItem
  },
  computed: {
    open () {
      if (this.level > 1) {
        return true
      }
      return this.$store.state.visit.topLevelMenu === this.path.name
    }
  },
  watch: {
    $route: function (to) {
      if (to.name === this.path.name) {
        this.$store.commit('visit/topLevelMenu', this.path.topLevel)
      }
    }
  },
  props: {
    path: { type: Object },
    level: { type: Number }
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
