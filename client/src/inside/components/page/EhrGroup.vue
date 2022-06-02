<template lang="pug">
  div(v-show="groupIsVisible")
    h3(v-if="group.label") {{ group.label }}
    div(class="ehr-group-wrapper", :class="groupClass")
      div(v-for="child in group.gChildren", :key="forIndex(child)", class="ehr-group-for", :class="childClass(child)")
        ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
        ehr-element-form(v-else-if="child", :elementKey="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
        div(v-else) This group has an undefined element
</template>

<script>
import EhrSubGroup from './EhrSubGroup'
import EhrElementForm from './EhrElementForm'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EhrDependent from './EhrDependent.vue'
import EhrTypes from '@/helpers/ehr-types'

export default {
  name: 'EhrGroup',
  extends: EhrDependent,
  components: {
    EhrSubGroup,
    EhrElementForm
  },
  inject: [ 'pageDataKey'],
  data: function () {
    return {
    }
  },
  props: {
    group: {type: Object },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false}
  },
  computed: {
    elementKey () { return this.group.elementKey },
    groupIsVisible () {
      let visible = true
      // console.log('EhrGroup visible?', this.dependentDef, this.dependentOnValue)
      if(this.dependentDef && this.dependentDef.refValue) {
        visible = this.dependentDef.refValue === this.dependentOnValue
      }
      return visible
    },
    groupClass () {
      let css = this.group.formCss
      const theDefault = 'grid-left-to-right-3'
      if (css && !css.includes('grid')) {
        css += ' ' + theDefault
      } else if (!css) {
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
        if (element.inputType === EhrTypes.ehr_embedded) {
          return 'embedded-data'
        }
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
.ehr-group-for {
  //border: 1px solid rgb(55,45,45,0.1);
  //border-radius: 5px;
  padding: 4px;
}
</style>
