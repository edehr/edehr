<template lang="pug">
  div
    div(class="tabs")
      ul
        li(v-for="tab in tabs", v-bind:key="tab.name", v-bind:class="{ 'is-active': tab.isActive }")
          a(@click="selectTab(tab)") {{ tab.name }}
    div(class="tab-details")
      slot
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(function (tab) {
        tab.isActive = selectedTab.name === tab.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.tabs ul {
  border-bottom: 0;
  color: $grey20;
  font-size: 18px;
}

.tabs {
  ul {
    margin-left: 0;
  }

  a {
    border-bottom: 6px solid #fff;
    color: $grey40;
    justify-content: left;
    margin-bottom: 0;
    margin-right: 1em;
    padding: 0;
  }

  li {
    margin-top: 0;
    min-width: 8em;
    &.is-active a {
      color: $black;
      cursor: default;
      border-bottom: 6px solid $brand-primary-hover;
    }
  }
}
</style>
