<template lang='pug'>
  div(class="seed-page")
    div(v-if='pageElement.isTable')
      div(class="flow_across seed-table-intro-row")
        h4 {{ label }}
        h4 Table contains {{ tableData.length }} rows.
        zone-lms-button(@action="flipTableCollapsed"
          class="flow_across_last_item mr5"
          :title='tableCollapsed ? "Expand the table" : "Collapse the table"',
          :icon='tableCollapsed ? "chevron-down" : "chevron-up"',
          text="")
      transition(name="fade" mode="out-in")
        div(v-if="!tableCollapsed")
          seed-table-horiz(v-show='tableOrientation',
            :ehrData="ehrData",
            :pageKey="pageKey",
            :pageChildren="pageChildren",
            :pageElement='pageElement'
          )
          seed-table-vert(v-show='!tableOrientation',
            :ehrData="ehrData",
            :pageKey="pageKey",
            :pageChildren="pageChildren",
            :pageElement='pageElement'
          )
    div(v-if='pageElement.isPageForm')
      div(v-for='group in pageElement.ehr_groups')
        div(v-for='child in group.gChildren')
          seed-form-element(
            :element='getElement(child)',
            :seedElement='getSeedData(child)')
</template>

<script>
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import { APP_ICONS } from '@/helpers/app-icons'
import SeedFormElement from '@/outside/components/seed-struct/SeedFormElement'
import SeedTableVert from '@/outside/components/seed-struct/SeedTableVert'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'
import SeedTableHoriz from '@/outside/components/seed-struct/SeedTableHoriz'
import EhrData from '@/inside/components/page/ehr-data'
import { t18ElementLabel } from '@/helpers/ehr-t18'
export default {
  components: { SeedTableHoriz, ZoneLmsButton, SeedFormElement, SeedTableVert },
  data () {
    return {
      appIcons: APP_ICONS
    }
  },
  props: {
    ehrData: { type: Object },
    pageKey: { type: String },
    pageChildren: { type: Array },
    pageElement: { type: Object },
    pageSeedData: { type: Object }
  },
  computed: {
    label () { return t18ElementLabel(this.pageElement)},
    tableKey () {return this.pageElement.tableKey},
    tableOrientation () { return this.$store.getters['system/condensedTableVertical']},
    tableCollapsed () { return this.$store.getters['system/seedTableCollapse'](this.tableKey)},
    tableData () {
      return EhrData.getMergedTableData(this.pageKey, this.pageElement.tableKey) || []
    },
    tableRowCount () { return this.tableData.length },
    hasData () {
      return this.tableData.length > 0
    },

  },
  methods: {
    flipTableCollapsed () {
      this.$store.dispatch('system/flipTableCollapsed', this.tableKey)
    },
    getElement (eKey) {
      return EhrDefs.getPageChildElement(this.pageKey, eKey)
    },
    getSeedData (eKey) {
      return this.pageSeedData[eKey]
    },
  }
}
</script>

<style lang="scss">
.rotatedIcon {
  transform: rotate(270deg);
}

.seed-page{
  margin-bottom: 3rem;
}
.seed-table-intro-row {
  h3, h4 {
    margin: 0 1rem 0 0;
  }

}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}

</style>
