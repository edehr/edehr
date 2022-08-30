<template lang="pug">
  div(id="seedDataList")
    h1 Seed Data
    //div(v-show="isDevelopingContent")
    //  ui-button(v-on:buttonClicked="showCreateDialog") Create new seed
    //  ui-button(v-on:buttonClicked="downloadAll") Download all
    div(class="seed-list")
      table
        tr
          th(class='seed-name-col') Name
          th(class='seed-desc-col') Description
        tr(v-for="sv in seedDataList",
          class='seed-list-row',
          :title="rowToolTip(sv)",
          v-on:click='selectedSeed = sv')
          td {{sv.name}}
          td {{sv.description}}
    //div {{ selectedSeed }}
    seed-structural(:seed="selectedSeed")
    //  ui-agree(ref="aggreeDialog")
    //ehr-seed-data-dialog(ref="theDialog", @showDialog="showDialog")
    //ui-confirm(
    //  ref="confirmDialog",
    //  @confirm="confirmSeedDuplication",
    //  @abort="cancelSeedDuplication",
    //  @cancel="cancelSeedDuplication",
    //  set-footer
    //  )
</template>

<script>
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: {
    SeedStructural,
  },
  data () {
    return {
      selectedSeed: { }
    }
  },
  props: {},
  computed: {
    seedDataList () {
      return StoreHelper.getSeedDataList().filter( sv => !sv.isDefault)
    },
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
  },
  methods: {
    rowToolTip (row) {
      return 'View or edit ' + row.name
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.seed-list {
  background-color: $grey03;
  border: 1px solid rgba(255, 255, 255, 0);
  margin-bottom: 0;
}
.seed-list-row {
  height: 4rem;
  cursor: pointer;
}
.seed-name-col {
  width: 20rem;
}
.seedData-list-body {
}
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}
</style>
