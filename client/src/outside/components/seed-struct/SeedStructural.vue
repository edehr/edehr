<template lang='pug'>
  div(class="ehrData-structure")
    div(class="ehrData-menu")
      div(class="bigger-screens-900")
        seed-menus(
          @selectPage="selectPage",
          :activePageKey='activePageKey',
          :ehrData='ehrData')
      div(class="smaller-than-900")
        div(class="flow_across")
          zone-lms-button(@action="toggleTableOrientation"
            class="flow_across_last_item mr5"
            :title="`Rotate the table ${tableOrientation ? 'vertical' : 'horizontal'}`",
            :icon='appIcons.table',
            :icon-class='{rotatedIcon: tableOrientation}',
            text="")
        h2(class="smaller-than-900")
          fas-icon(:icon="appIcons.menu", @click="showingNavPanel = !showingNavPanel")
          span &nbsp; {{pageTitle}}

        transition(name="hamburger-action")
          seed-menus(v-if="showingNavPanel",
            @selectPage="selectPage",
            :activePageKey='activePageKey',
            :ehrData='ehrData')
    div(class="ehrData-details")
      div(class="flow_across")
        h2(class="bigger-screens-900") {{pageTitle}}
        zone-lms-button(@action="toggleTableOrientation"
          class="flow_across_last_item mr5"
          :title="`Rotate the table ${tableOrientation ? 'vertical' : 'horizontal'}`",
          :icon='appIcons.table',
          :icon-class='{rotatedIcon: tableOrientation}',
          text="")
      seed-pages(
        :pageKey="activePageKey",
        :pageDef="pageDef",
        :pageSeedData='pageSeedData')
</template>

<script>
import SeedPages from '@/outside/components/seed-struct/SeedPages'
import SeedMenus from '@/outside/components/seed-struct/SeedMenus'
import EhrDefs from '@/helpers/ehr-defs-grid'
import { APP_ICONS } from '@/helpers/app-icons'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
export default {
  components: { ZoneLmsButton, SeedPages, SeedMenus },
  data () {
    return {
      appIcons: APP_ICONS,
      activePageKey: '',
      showingNavPanel: false
    }
  },
  props: {
    // ehrData is undefined if the student submitted no work at all
    ehrData: { type: Object }
  },
  computed: {
    seedEhrData () { return this.ehrData ? this.ehrData.ehrData : {}},
    pageDef () { return this.activePageKey ? EhrDefs.getPageDefinition(this.activePageKey) : {}},
    pageTitle () { return this.pageDef ? this.pageDef.pageTitle : 'Select a page from the menu'},
    pageSeedData (  ) {
      const pkey = this.activePageKey
      return this.ehrData ? (pkey ? this.ehrData[pkey] : {}) : {}
    },
    tableOrientation () { return this.$store.getters['system/condensedTableVertical']},
  },
  methods: {
    selectPage ( key ) {
      this.activePageKey = key
      this.showingNavPanel = false
    },
    setInitialPage () {
      const data = this.ehrData
      if (data) {
        const keys = Object.keys(data).filter( k => k !== 'meta')
        if (keys.length > 0) {
          const key = keys.includes('demographics') ? 'demographics' : keys[0]
          this.selectPage(key)
        }
      } else {
        console.log('ehrData structure without data. Why?')
      }
    },
    toggleTableOrientation () {
      const value = this.tableOrientation
      this.$store.dispatch('system/setCondensedTableVertical', !value)
    }
  },
  watch: {
    ehrData: function () {
      this.setInitialPage()
    }
  },
}
</script>

<style scoped lang='scss'>
@import '../../../scss/definitions';
.ehrData-structure {
  margin-top: 1.5rem;
  border-top: 1px solid $brand-primary;
  padding-top: 5px;
}
@media screen and (min-width: $main-width-threshold3) {
  .ehrData-structure {
    display: flex;
    flex-flow: row;
    width: 95%; // less than 100% to keep the right side from slipping down the page
  }
  .ehrData-menu {
    flex: 0 0 20rem;
    max-height: 60vh;
    overflow-y: auto;
  }
  .ehrData-details {
    flex: 1 1 auto;
    padding-left: 1rem;
    overflow: auto;
    //max-height: 80vh;
  }
}
.hamburger-action-enter-active, .hamburger-action-leave-active  {
  transition: opacity .25s;
}
.hamburger-action-enter, .hamburger-action-leave-to {
  opacity: 0;
}

</style>
