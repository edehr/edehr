<template lang="pug">
  div
    zone-lms-page-banner
      div(class="flow_across menu_space_across flow_across_right")
        div(class="flow_across table_space_across")
          div something to the side
    div(class="e-table")
      div(class="thead")
        div(class="thcell") Col 1
        div(class="thcell") Col 2
      div(class="tbody")
        div(class="row", v-for="rowModel in modelData", :class="rowClass(rowModel)")
          div(class='cell e-name')  {{truncate(rowModel.name, 40)}}
          div(class="cell description") {{truncate(rowModel.description, 200)}}

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'

export default {
  extends: OutsideCommon,
  components: {
    ZoneLmsPageBanner,
  },
  data () {
    return {
      appIcons: APP_ICONS,
      text: Text.SEEDS_PAGE,
    }
  },
  props: {},
  computed: {
  },
  methods: {
    rowClass: function (sv) {
      let selected = sv.id === this.selectedSeedId
      return selected ? 'selected' : ''
    },
    async loadPage () {
    },
    truncate (input, lim) {
      return input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    async loadComponent () {
      await this.loadPage()
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';



</style>
