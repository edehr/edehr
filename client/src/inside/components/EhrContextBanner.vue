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
      div(v-show="show")
        ehr-context-instructor(v-if="showInstructor")
        ehr-context-student(v-if="showStudent")
        ehr-context-developer(v-if="showSeeding")
</template>

<script>
import EhrContextInstructor from './EhrContextInstructor'
import EhrContextStudent from './EhrContextStudent'
import EhrContextDeveloper from './EhrContextDeveloper'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrContextBanner',
  components: { EhrContextInstructor, EhrContextStudent, EhrContextDeveloper },
  data: function () {
    return {
      show: false,
      indicator: '+',
      activity: {},
      showSeeding: false
    }
  },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData(this)
    },
    showStudent () {
      return StoreHelper.isStudent(this)
    },
    showInstructor () {
      return StoreHelper.isInstructor(this)
    }
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
      this.indicator = this.show ? '-' : '+'
    }
  },
  mounted: function () {
    if (StoreHelper.isInstructor(this)){
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrContextBanner {
  background: $context-banner-background-color;
  color: $context-banner-color;
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
