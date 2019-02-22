<template lang="pug">
  div(:class="`${$options.name}`")
    div(:class="outClass")
      ui-link(:to="{ name: routeName(path) }", :class="linkClass") {{ path.label }}
</template>

<script>
import ENList from './EhrNavList'
import UiLink from '../../app/ui/UiLink.vue'
// <div class="loading" v-if="loading">Loading...</div>
export default {
  name: 'EhrNavListItem',
  components: {
    UiLink,
    ENList
  },
  computed: {
    outClass() {
      var lv = this.level || 1
      return 'EhrNavListItem__level' + lv
    },
    linkClass() {
      var lv = this.level || 1
      return 'EhrNavListItem__link' + lv
    }
  },
  methods: {
    routeName(path) {
      return path.redirect ? path.redirect : path.name
    }
  },
  props: {
    path: {
      type: Object
    },
    level: { type: Number }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrNavListItem {
  margin-top: 1px;
  &__level1,
  &__level2,
  &__level3 {
    display: flex;
    align-items: center;
  }
  &__level1,
  &__level2 {
    & a {
      color: $grey20;
    }
  }
  .router-link-active {
    background-color: $nav-active;
  }
  &__level1 {
    background-color: $nav-level1;
    font-size: 18px;
    height: 40px;
    & a {
      color: $nav-color-level1;
    }
  }
  &__level2 {
    background-color: $nav-level2;
    height: 30px;
    & a {
      color: $nav-color-level2;
    }
  }
  &__level3 {
    background-color: $nav-level3;
    height: 30px;
    & a {
      color: $nav-color-level3;
    }
  }
  &__link1 {
    margin-left: 15px;
  }
  &__link2 {
    margin-left: 15px;
  }
  &__link3 {
    margin-left: 30px;
  }
}
</style>
