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
  data() {
    return {
      tabs: []
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(function(tab) {
        tab.isActive = selectedTab.name === tab.name
      })
    }
  }
}
</script>

<style scoped></style>
