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
          ehr-context-read-only-instructor(v-if="isReadOnlyInstructor")
          ehr-context-instructor(v-else-if="showInstructor")
          ehr-context-developer(v-else-if="showSeeding")
</template>

<script>
import EhrContextInstructor from './EhrContextInstructor'
import EhrContextStudent from './EhrContextStudent'
import EhrContextReadOnlyInstructor from './EhrContextReadOnlyInstructor'
import EhrContextDeveloper from './EhrContextDeveloper'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrContextBanner',
  components: { EhrContextInstructor, EhrContextStudent, EhrContextDeveloper, EhrContextReadOnlyInstructor },
  data: function () {
    return {
      show: false,
      indicator: '+',
      activity: {}
    }
  },
  computed: {
    title () {
      if (this.isReadOnlyInstructor) {
        return StoreHelper.getCourseTitle()
      } else {
        return StoreHelper.isDevelopingContent() ? 'Edit seed' :StoreHelper.getCourseTitle()
      }
      
    },
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isDevelopingContent()
    },
    showSeeding () {
      return StoreHelper.isDevelopingContent()
    },
    isReadOnlyInstructor () {
      return StoreHelper.isReadOnlyInstructor()
    }
  },
  watch: {
    '$route.query': (n) => {
      if (n.readonly) {
        this.setReadOnlyInstructor(true)
      }
    }
  },

  methods: {
    toggleShow: function () {
      this.show = !this.show
      this.indicator = this.show ? '-' : '+'
    },
    setReadOnlyInstructor: function (isReadOnly) {
      StoreHelper.setIsReadOnlyInstructor(isReadOnly)
    }
  },
  mounted: function () {
    if (StoreHelper.isInstructor(this)){
      this.show = true
    }
    const { readonly } = this.$route.query
    if (readonly) {
      this.setReadOnlyInstructor(true)
    }
  },
  beforeDestroy: function () {
    this.setReadOnlyInstructor(true)
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
  border-bottom: 1px solid $grey20;
  padding: 1rem 1rem 1rem 2rem;
}

.context-header {
  cursor: pointer;
}

h3.header-item {
  margin-bottom: 0;
}
</style>