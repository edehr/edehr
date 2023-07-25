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
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'Tab',
  data () {
    return {
      tabs: []
    }
  },
  inject: [ 'pageDataKey' ],
  created () {
    this.tabs = this.$children
  },
  computed: {
    tabNames () { return this.tabs.map( t => t.name)}
  },
  mounted () {
    this.$store.dispatch('ehrPageTab/pageActivated', {pageKey: this.pageDataKey, tabNames: this.tabNames})
  },
  methods: {
    selectTab (selectedTab) {
      this.$store.dispatch('ehrPageTab/tabSelected', {pageKey: this.pageDataKey, tabName: selectedTab.name})
      // emit the page refresh event so the newly selected tab can process a refresh event and load its content
      // console.log('Tab change emit PAGE_DATA_REFRESH_EVENT')
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
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
    border-bottom: 6px solid $grey20;
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
      //border-bottom: 6px solid $brand-primary-hover;
    }
  }
}
.ehr-branding .tabs li.is-active a {
  border-bottom: 6px solid $colour-brand-ehr;
}
.lis-branding .tabs li.is-active a {
  border-bottom: 6px solid $colour-brand-lis;
}

</style>
