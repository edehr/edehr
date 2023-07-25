<template lang="pug">
  div(class="EhrNavList")
    div(v-show="showNavPath(path)", class="EhrNavList__teaserList")
      ehr-nav-list-item(:path="path", :level="level", :opened='open')
      div(v-show="open")
        ehr-nav-list(v-for="child in path.children", v-bind:key="child.name" :path="child" :level="level + 1")
</template>

<script>
import EhrNavList from './EhrNavList'
import EhrNavListItem from './EhrNavListItem'
import StoreHelper from '@/helpers/store-helper'

export default {
  name: 'EhrNavList',
  components: {
    EhrNavList,
    EhrNavListItem
  },
  props: {
    path: { type: Object },
    level: { type: Number }
  },
  computed: {
    open () {
      if (this.level > 1) {
        return true
      }
      return this.$store.state.visit.topLevelMenu === this.path.name
    }
  },
  methods: {
    showNavPath (path) {
      let showLIS = path.isLIS && StoreHelper.isLIS_Showing()
      let showEHR = path.isEHR && StoreHelper.isEHR_Showing()
      return showLIS || showEHR
    }
  },
  watch: {
    $route: function (to) {
      if (to.name === this.path.name) {
        this.$store.commit('visit/topLevelMenu', this.path.topLevel)
      }
    }
  },
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
