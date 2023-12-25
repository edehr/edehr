<template lang="pug">
  div(v-show="groupIsVisible", :class='groupOuterClass')
    h3(v-if="group.label") {{ elementLabel(group) }}
    div(class="ehr-group-wrapper", :class="groupClass")
      div(v-for="child in group.gChildren", :key="forIndex(child)", class="ehr-group-for", :class="childClass(child)")
        ehr-sub-group(v-if="isSubgroup(child)", :subgroup="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
        ehr-element-form(v-else-if="child", :elementKey="child", :ehrHelp="ehrHelp", :viewOnly='viewOnly')
        div(v-else) This group has an undefined element
    hr
</template>

<script>
import EhrSubGroup from './EhrSubGroup'
import EhrElementForm from './EhrElementForm'
import EhrDefs from '../../../ehr-definitions/ehr-defs-grid'
import EhrDependent from './EhrDependent.vue'
import EhrTypes from '@/ehr-definitions/ehr-types'
import { t18ElementLabel } from '@/helpers/ehr-t18'

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
    hideGroup () { return (this.group.formOption === 'hideGroup')},
    groupIsVisible () {
      let testValue = this.dependentOnValue
      let ref =  this.dependentDef && this.dependentDef.refValue ? this.dependentDef.refValue : undefined
      let visible = true
      if (ref) {
        visible =  !!testValue && ref.includes(testValue)
      }
      // console.log('EhrGroup visible?', visible, testValue, !!testValue,  ref)
      return visible
    },
    groupClass () {
      return this.group.formCss
    },
    groupOuterClass () {
      let css = {hiddenGroup: this.hideGroup}
      this.group.formCss.split(' ').map( fCss => {
        css[fCss + '--outer'] = true
      })
      return css
    },
  },
  methods: {
    elementLabel (element) {
      return t18ElementLabel(element)
    },
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
  //padding: 4px;
}
.hiddenGroup {
  display: none;
}
</style>
