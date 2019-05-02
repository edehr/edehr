<template lang="pug">
  div(class="EhrContextBanner EhrPanelContent")
    div(class="EhrContextBanner_Inner EhrPanelContent_Inner")
      div(class="context-header columns", v-on:click="toggleShow")
        div(class="header-column is-10 column")
          h3(class="header-item", :title="panelInfo.courseTitle") {{ panelInfo.courseTitle }} - {{ panelInfo.activityTitle }}
        div(class="header-column is-2 column")
          div(class="header-item header-icon")
            fas-icon(icon="angle-double-down", v-show="!show")
            fas-icon(icon="angle-double-up", v-show="show")
      accordion-element(theme="grayTheme", :show="show")
        ehr-context-instructor(v-show="showInstructor")
        ehr-context-student(v-show="showStudent")
        ehr-context-developer(v-show="showSeeding")
</template>

<script>
import AccordionElement from '../../app/components/AccordionElement'
import EhrContextInstructor from './EhrContextInstructor'
import EhrContextStudent from './EhrContextStudent'
import EhrContextDeveloper from './EhrContextDeveloper'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrContextBanner',
  components: { AccordionElement, EhrContextInstructor, EhrContextStudent, EhrContextDeveloper },
  data: function () {
    return {
      show: false,
      indicator: '+',
      activity: {},
      showInstructor: false,
      showStudent: false,
      showSeeding: false
    }
  },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData(this)
    }
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
      this.indicator = this.show ? '-' : '+'
    }
  },
  mounted () {
    this.showStudent = StoreHelper.isStudent(this)
    this.showInstructor = StoreHelper.isInstructor(this)
    this.showSeeding = StoreHelper.isDeveloper(this)
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrContextBanner {
  padding: $panelHeaderPadding;
  background: $context-banner-background-color;
  color: $context-banner-color;
  @media #{$mediaQueryIpadLandscape} {
    padding: $panelHeaderPaddingSmall;
  }
  @media #{$mediaQueryIpadPortrait} {
    padding: $panelHeaderPaddingSmallest;
  }
}
.prototypingContainer {
  ul {
    display: inline;
  }
  li {
    display: inline;
    margin-left: 1rem;
  }
  input {
    display: inline-block;
    margin-right: 5px;
  }
}
</style>
