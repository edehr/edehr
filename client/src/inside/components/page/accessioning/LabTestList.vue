<template lang='pug'>
div
  div(class='eea')
    label(v-if='!viewOnly', class='search-label')
    table
      thead
        th(class="tubeName")  Tube
        th(class="testList")  Tests
      tbody
        tr(v-for='tubeKey in tubeColours')
          td {{tubeKey}}
          td(class='test-table-cell')
            table
              thead
                th(class="testName") Name
                th(class="notes") Notes
                th(class='action', v-if='!viewOnly')
              tbody
                tr(v-for='test in testListForTube(tubeKey)',
                  class='tubeRow',
                  :style="tubeColor(test)")
                  td {{ test.test }}
                  td {{ propsForTest(test) }}
                  td(v-if='!viewOnly')
                    ui-button(@buttonClicked="handleRemoveTest(test)" )
                      fas-icon(icon="trash")
</template>

<script>
import UiButton from '@/app/ui/UiButton.vue'
import { useMedLabTestList } from '@/inside/components/page/accessioning/labTestList'

export default {
  setup () {
    const { propsForTest } = useMedLabTestList()
    return { propsForTest }
  },
  components: { UiButton },
  props: {
    viewOnly: { type: Boolean, default: false },
    tableData: { type: [String, Object] }
  },
  computed: {
    tubeColours () {
      return Object.keys(this.keyMap)
    },
    keyMap () {
      // Use spread create a new object reference so that tubeColours is reactive
      return { ...this.tableData }
    }
  },
  methods: {
    testListForTube (tube) {
      return this.keyMap[tube]
    },
    handleRemoveTest (test) {
      this.$emit('removeTest', test)
    },
    tubeColor (test) {
      let bc1, bc2
      switch (test.colour) {
      case 'lightGreen,yellow':
        bc1 = 'greenyellow'
        bc2 = '#FFF176'
        break
      case 'lavender':
        bc1 = '#9B59B6'
        bc2 = '#9B59B6'
        break
      case 'gold':
        bc1 = '#FFD700'
        bc2 = '#FFD700'
        break
      case 'yellow':
        bc1 = '#FFF176'
        bc2 = '#FFF176'
        break
      default:
        bc1 = test.colour
        bc2 = test.colour
      }
      return {
        'border-top-color': bc1,
        'border-left-color': bc2,
        'border-right-color': bc2,
        'border-bottom-color': bc1,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.eea {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}
.search-label {
  min-width: 15rem;
  //flex: 0.3 1 auto;
}
.tubeName,
.testList{
  min-width: 25rem;
}
.testName {
  min-width: 19rem; /* trial and error on lab test: Lipid */
}
.notes {
  min-width: 11rem;
}
.test-table-cell {
  padding: 0;
}
.tubeRow {
  border-style: solid;
  border-width: 3px;
  border-collapse: separate;
  border-spacing: 4px;
}
</style>
