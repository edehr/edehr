<template lang='pug'>
  div(class="seed-page")
    div(v-if='pageElement.isTable')
      div(class="flow_across")
        div {{ pageElement.label }}
        zone-lms-button(@action="tableCollapsed = !tableCollapsed"
          class="flow_across_last_item mr5"
          title="Collapse the table",
          :icon='tableCollapsed ? "chevron-down" : "chevron-up"',
          text="")
      transition(name="fade" mode="out-in")
        div(v-show="!tableCollapsed")
          seed-table-horiz(v-show='tableOrientation',
            :pageKey="pageKey",
            :pageChildren="pageChildren",
            :pageElement='pageElement'
          )
          seed-table-vert(v-show='!tableOrientation',
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
export default {
  components: { SeedTableHoriz, ZoneLmsButton, SeedFormElement, SeedTableVert },
  data () {
    return {
      appIcons: APP_ICONS,
      tableCollapsed: false
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}

</style>
