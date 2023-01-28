<template lang='pug'>
  div(class="seed-page")
    div(v-if='pageElement.isTable')
      div(class="flow_across")
        zone-lms-button(@action="toggleTableOrientation"
          class="flow_across_last_item"
          :title="`Rotate the table ${tableOrientation ? 'vertical' : 'horizontal'}`",
          :icon='appIcons.table',
          :icon-class='{rotatedIcon: tableOrientation}',
          text="")
      seed-table-horiz(v-show='tableOrientation',
        :pageKey="pageKey",
        :pageChildren="pageChildren",
        :pageElement='pageElement',
        :pageSeedData='pageSeedData'
      )
      seed-table-vert(v-show='!tableOrientation',
        :pageKey="pageKey",
        :pageChildren="pageChildren",
        :pageElement='pageElement',
        :pageSeedData='pageSeedData'
      )
    div(v-if='pageElement.isPageForm')
      div(v-for='group in pageElement.ehr_groups')
        div(v-for='child in group.gChildren')
          seed-form-element(
            :element='getElement(child)',
            :seedElement='getSeedData(child)')
</template>

<script>
import EhrDefs from '@/helpers/ehr-defs-grid'
import { APP_ICONS } from '@/helpers/app-icons'
import SeedFormElement from '@/outside/components/seed-struct/SeedFormElement'
import SeedTableVert from '@/outside/components/seed-struct/SeedTableVert'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import SeedTableHoriz from '@/outside/components/seed-struct/SeedTableHoriz'
export default {
  components: { SeedTableHoriz, ZoneLmsButton, SeedFormElement, SeedTableVert },
  data () {
    return {
      appIcons: APP_ICONS
    }
  },
  props: {
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
    tableOrientation () { return this.$store.getters['system/condensedTableVertical']},
  },
  methods: {
    getElement (eKey) {
      return EhrDefs.getPageChildElement(this.pageKey, eKey)
    },
    getSeedData (eKey) {
      return this.pageSeedData[eKey]
    },
    toggleTableOrientation () {
      const value = this.tableOrientation
      this.$store.dispatch('system/setCondensedTableVertical', !value)
    }
  }
}
</script>

<style lang="scss">
.rotatedIcon {
  transform: rotate(270deg);
}
</style>

<style lang="scss" scoped>
.seed-page{
  margin-bottom: 3rem;
}
</style>
