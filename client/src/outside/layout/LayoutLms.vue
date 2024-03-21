<template lang="pug">
  div(class="outside-layout flow_down", :class='cssClass')
    app-header(class="sticky")
    main(class="flow_across outside-view")
      div(v-if="showSideNav", class="left_side bigger-screens-900", :class='{left_side_small: lgScreenNavCollapsed}')
        div(class="lmsNavPanel lgScrnNavPanel")
          div(class="flow_across collapse-button")
            div(v-show="!lgScreenNavCollapsed")  {{givenName}} / {{ role }}
            zone-lms-button(
              class="flow_across_last_item",
              @action="toggleCollapseNavPanel",
              :icon='lgScreenNavCollapsed ? "angle-right" : "angle-left" '
            )
          zone-lms-student-nav(v-if="isStudent", :icons-only='lgScreenNavCollapsed')
          zone-lms-nav(v-else, :icons-only='lgScreenNavCollapsed')
      div(class="right_side", :class='{right_side_large: lgScreenNavCollapsed}')
        div(class="smaller-than-900")
          span(style="text-align: left; font-size: 1.7rem;")
            fas-icon(class="fa bars", icon="bars", @click="smScrnShowNav = !smScrnShowNav")
          div(:class="{smScrnShowNav: smScrnShowNav}", class="lmsNavPanel lmsNavPanelSmallScreen smScrnHideNav")
            zone-lms-student-nav(v-if="isStudent")
            zone-lms-nav(v-else)
        slot
    app-footer
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import AppHeader from '../../app/components/AppHeader.vue'
import AppFooter from '../../app/components/AppFooter.vue'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsNav from '@/outside/components/ZoneLmsNav'
import { UNLINKED_ACTIVITY_ROUTE_NAME } from '@/router'
import ZoneLmsStudentNav from '@/outside/components/ZoneLmsStudentNav'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'

export default {
  name: 'LayoutOutside',
  components: {
    ZoneLmsButton,
    ZoneLmsStudentNav,
    ZoneLmsNav,
    AppFooter,
    AppHeader,
  },
  data: function () {
    return {
      smScrnShowNav: false,
      navText: Text.INSTRUCTOR_TOOLS,
      appIcons: APP_ICONS
    }
  },
  computed: {
    isStudent () { return StoreHelper.isStudent() },
    asStudent () { return StoreHelper.isInstructorAsStudent() },
    isInstructor () { return StoreHelper.isInstructor() },
    inZoneLMS () { return StoreHelper.inZoneLMS() },
    showSideNav () { return this.inZoneLMS && this.$route.name !== UNLINKED_ACTIVITY_ROUTE_NAME },
    pageIcon () {
      // icon comes from route meta data
      let icon = StoreHelper.getPageIcon()
      icon = icon && icon.length > 0 ? icon : undefined
      return icon
    },
    pageTitle () { return StoreHelper.getPageTitle() },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    cssClass () {
      // if showing labels then apply a class on the layout to be used by buttons
      return this.showLabels ? 'showing-labels' : ''
    },
    lmsName ()          { return StoreHelper.lmsName() },
    lgScreenNavCollapsed () { return this.$store.getters['system/lmsNavCollapsed']},
    givenName () { return StoreHelper.givenName()},
    role () {
      return this.isInstructor ? 'instructor' :
        this.asStudent ? 'as student' :
          'student'
    }
  },
  methods: {
    toggleCollapseNavPanel () {
      const value = this.lgScreenNavCollapsed
      this.$store.dispatch('system/setLmsNavCollapsed', !value)
    },
  },
  watch: {
    $route: function (curr, prev) {
      if (curr !== prev && this.smScrnShowNav) {
        const currArray = curr.path.split('/')
        const prevArray = prev.path.split('/')
        console.log('LayoutLms fix smScrnShowNav. currArray[2] === prevArray[2]', currArray[2], prevArray[2])
        // The third item in the path array contains information about the
        // page, which was making the navigation awkward on mobile devices.
        // By implementing this, we assure that the navPanel will only be hidden
        // if the current path is within the same group as the previous one.
        if (currArray[2] === prevArray[2])
          this.smScrnShowNav = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

main {
  min-height: 90vh;
  padding-bottom: 2rem;
}
.left_side {
  //width: 16%;
  min-width: 15rem;
}
.right_side {
  width: 100%;
  margin-left: 1rem;
  overflow-x: auto;
}
.left_side_small {
  width: 3.3rem !important;
}
.right_side_large {
  width: 94% !important;
}
@media screen and (max-width: $main-width-threshold3) {
  .flow_across {
    flex-direction: column;
  }
  .left_side {
    width: auto;
  }
  .right_side {
    width: 100%;
  }
}

.outside-main {
  padding: 1.5rem;
}

.collapse-button {
  margin-bottom: 1rem;
}
.collapse-button button {
  background-color: $grey20;
  color: $brand-primary;
  box-shadow: none;
  border-radius: $button-border-radius;
  margin-right: 5px;
  margin-top: 5px;
  width: 1.75rem;
  border-color: rgba(0, 0, 0, 0.2)
}
.collapse-button button:focus {
  background-color: $grey20;
  color: $brand-primary;
  box-shadow: none !important;
}
.collapse-button button:hover {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) !important;
}

.lmsNavPanel {
  background-color: $grey03;
  transition: .3s width ease-in-out;
}

.smScrnShowNav {
  height: auto !important;
}
.smScrnHideNav {
  height: 0;
  overflow: hidden;
}

</style>
