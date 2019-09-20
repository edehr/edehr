<template lang="pug">
  div
    h3(v-if="group.label") {{ group.label }}
    div(class="ehr-group-wrapper", :class="groupClass")
      div(v-for="child in group.gChildren", :key="forIndex(child)", class="ehr-group-for", :class="childClass(child)")
        ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp")
        ehr-element-form(v-else-if="child", :elementKey="child", :ehrHelp="ehrHelp")
        div(v-else) This group has an undefined element
</template>

<script>
import EhrEditControls from '../../components/EhrEditControls.vue'
import EhrSubGroup from './EhrSubGroup'
import EhrElementForm from './EhrElementForm'
import EhrDefs from '../../../helpers/ehr-defs-grid'

export default {
  name: 'EhrPageForm',
  components: {
    EhrEditControls,
    EhrSubGroup,
    EhrElementForm
  },
  inject: [ 'pageDataKey'],
  props: {
    group: {type: Object },
    ehrHelp: { type: Object }
  },
  computed: {
    groupClass () {
      let css
      const theDefault = 'grid-left-to-right-3'
      if (this.group.formCss) {
        css = this.group.formCss
        if (!this.group.formCss.includes('grid')) {
          css += ' ' + theDefault
        }
      } else {
        css = theDefault
      }
      return css
    },
  },
  methods: {
    childClass (elementKey) {
      if (typeof elementKey === 'string') {
        let element = EhrDefs.getPageChildElement(this.pageDataKey, elementKey)
        if (!element) console.error('Why no element for key ', elementKey)
        return element.formCss
      }
      return ''
    },
    forIndex (child) {
      return (typeof element === 'string') ? child : child.elementKey
    },
    isSubgroup (element) {
      return element !== null && (typeof element === 'object')
    },
  },
}
</script>

<style lang="scss">

.full-grid,
.grid-left-to-right-1 {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  margin-bottom: 1rem;
}

.grid-left-to-right-2 {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;
}

.grid-left-to-right-3 {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1rem;
}

.record-header, .grid-left-to-right-4 {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(4, 1fr);
}

.grid-left-to-right-4 {
  margin-bottom: 1rem;
}

.cardio-assessment,
.grid-left-to-right-5 {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(5, 1fr);
}

.grid-up-to-down {
  display: grid;
  grid-gap: 1rem 1.25rem;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
}

.grid-span-2-columns {
  grid-column: span 2;
}
</style>
