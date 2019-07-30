<template lang="pug">
  div
    div(v-if="showStudent")
      ehr-context-student
    div(v-else)
      div(class="EhrContextBanner EhrPanelContent")
        div(class="EhrPanelContent_Inner")
          div(class="context-header columns", v-on:click="toggleShow")
            div(class="header-column is-10 column")
              h3(class="header-item", :title="panelInfo.courseTitle") {{ panelInfo.courseTitle }} - {{ panelInfo.activityTitle }}
            div(class="header-column is-2 column")
              div(class="header-item header-icon")
                fas-icon(icon="angle-double-down", v-show="!show")
                fas-icon(icon="angle-double-up", v-show="show")
          div(v-show="show")
            ehr-context-instructor(v-if="showInstructor")
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
      activity: {}
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
    },
    showSeeding () {
      return false
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
  padding: 0;

  .header-column {
    padding: 0; // override bulma column padding
  }
}

.EhrPanelContent {
  padding: 1.75rem 2rem 1rem 2rem;
}
</style>