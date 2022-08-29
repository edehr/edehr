<template lang="pug">
  div
    div(class="app-header")
      div
        router-link(:to="{ name: 'home' }", class="navLink")
          img(src="/edehr-Logo.png", class='brand-image')
      div(class="side-menu")
        router-link(:to="{ name: `about` }",
          class="navLink") About
        router-link(v-if="isStudent", :to="{ name: `ehr` }", class="navLink") EHR Activity
        router-link(v-if="isDemo", :to="{ name: `demo` }",
          class="navLink") Demonstration
    div(class="app-header-bottom")
      div(class="app-header-bottom-left")
      div(class="app-header-bottom-right")
</template>
<script>
import StoreHelper from '@/helpers/store-helper'

export default {
  components: { },
  computed: {
    isDemo () {
      return StoreHelper.isDemoMode()
    },
    isStudent () {
      return StoreHelper.isStudent()
    },
  },
  methods: { }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
// prevent vue router from applying box shadow when route is a match
.navLink {
  border: none !important;
  box-shadow: none !important;
}
.app-header {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}
.app-header-bottom {
  display: grid;
  grid-template-columns: 1fr 1rem;
  & .app-header-bottom-left {
    border-bottom: 2px solid $brand-highlight;
  }
  & .app-header-bottom-right {
    border-bottom: 2px solid $brand-highlight-red;
  }
}
.side-menu {
  display: flex;
  flex-flow: row;
  gap: 2rem;
  justify-content: flex-end;
  // to line up labels with logo text ...
  margin-top: 0.7rem;
  margin-right: 3rem;
}
.brand-image {
  height: 2.5rem;
  margin-top: 6px;
  margin-left: 2rem;
  margin-bottom: 2px;
}
/* Menu colours */
.app-header {
  background: white;
  color: $brand-primary;
  .navLink {
    color: $brand-primary;
    &:focus,
    &:hover,
    &.is-active {
      color: $brand-highlight;
    }
  }
  .router-link-exact-active,
  .router-link-active {
    color: $brand-highlight;
  }
}

/* Menu text */
.app-header {
  .navLink {
    font-weight: bold;
    font-size: 1.6rem;
  }
  a {
    text-decoration: none;
  }
}

/* Small screens */
@media screen and (max-width: $main-width-threshold3){
  .brand-image {
    height: 1.5rem;
    margin-top: 6px;
    margin-left: 1rem;
    margin-bottom: 0;
  }
  .side-menu {
    margin-left: 0;
    margin-top: 0.3rem;
  }
  .app-header {
    .navLink {
      font-weight: bold;
      font-size: 0.9rem;
    }
  }
}
</style>
