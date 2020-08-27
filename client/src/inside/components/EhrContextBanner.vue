<template lang="pug">
  div(v-if="showStudent")
    ehr-context-student
  div(v-else)
    div(class="EhrContextBanner EhrPanelContent")
      div(class="EhrPanelContent_Inner")
        div(class="context-header columns", v-on:click="toggleShow")
            h3(class="header-item", :title="title") {{ title }}
            div(class="icon-group")
              fas-icon(icon="plus", v-show="!show") 
              fas-icon(icon="minus", v-show="show")
        div(v-show="show")
          ehr-context-instructor(v-if="(showInstructor)")
          ehr-context-developer(v-else-if="showSeeding")
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
    title () {
      return StoreHelper.isSeedEditing() ? 'Edit seed' :StoreHelper.getCourseTitle()
    },
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
    },
    showSeeding () {
      return StoreHelper.isSeedEditing()
    },
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
      this.indicator = this.show ? '-' : '+'
    },
  },
  mounted: function () {
    if (StoreHelper.isInstructor(this)){
      this.show = true
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrContextBanner {
  padding: 0;
  border-top: 1px solid black;
  .header-column {
    padding: 0; // override bulma column padding
  }
}

.EhrPanelContent {
  border-bottom: 1px solid $grey20;
  padding: 1rem;
}

.context-header {
  cursor: pointer;
}

h3.header-item {
  margin-bottom: 0;
}
</style>
