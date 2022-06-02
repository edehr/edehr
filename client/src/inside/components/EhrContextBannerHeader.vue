<template lang="pug">
  div(class="context-header")
    div(class="toggle-icon", v-on:click="toggleShow")
      div(class='toggle-show-more', v-show="!show")
        fas-icon(icon="chevron-down", class='icon-item')
      div(class='toggle-show-more', v-show="show")
        fas-icon(icon="chevron-up", class='icon-item')
    div(class="main-item")
      ehr-context-instructor(v-if="(showInstructor)", displayControlBar=true)
      ehr-context-student(v-else-if="showStudent", displayControlBar=true)
      div(v-else-if="showDeveloper", class='wrap-items-spaced')
        div(class="item-seed-name") Seed name: {{ seedInfo.name }}
        div(class="item-25 item-center")
          ehr-visit-day-time-control
        div(class="item-25 item-center")
          ui-link(:name="'developEhrData'") Return to EHR seed list
</template>

<script>
import UiLink from '@/app/ui/UiLink'
import EhrVisitDayTimeControl from '@/inside/components/EhrVisitDayTimeControl'
import EhrContextInstructor from '@/inside/components/EhrContextInstructor'
import EhrContextStudent from '@/inside/components/EhrContextStudent'
import StoreHelper from '../../helpers/store-helper'

export default {
  components: { UiLink, EhrVisitDayTimeControl, EhrContextInstructor, EhrContextStudent },
  data: function () {
    return {
      show: false,
    }
  },
  computed: {
    panelInfo () {
      return StoreHelper.getPanelData()
    },
    seedInfo () {
      return StoreHelper.getSeedContent()
    },
    showStudent () {
      return StoreHelper.isStudent()
    },
    showInstructor () {
      return StoreHelper.isInstructor() && !StoreHelper.isSeedEditing()
    },
    showDeveloper () {
      return StoreHelper.isSeedEditing()
    },
  },
  methods: {
    toggleShow: function () {
      this.show = !this.show
      this.$emit('showChanged', this.show)
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
.context-header {
  display: flex;
  height: 3rem;
  flex-direction: row;
}
.toggle-show-more {
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
}
.main-item {
  width: 100%;
  margin: auto
}

.toggle-icon {
  width: 2rem;
  padding: 5px;
  text-align: center;
  margin: auto;
}
.item-seed-name {
  max-width: 45%;
  flex: 1 0 45%;
  margin: auto;
}
.flex-item {
  flex: 1 0 auto
}
.icon-item {
  margin: auto;
  font-size: 1.5rem;
}
</style>
