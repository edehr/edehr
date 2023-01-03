<template lang="pug">
  div(class="outside-layout flow_down", :class='cssClass')
    app-header(class="sticky")
    main(class="flow_across outside-view")
      div(v-if="showSideNav", class="left_side bigger-screens-900 nav_divs")
        zone-lms-nav
      div(class="right_side")
        div(class="smaller-than-900")
          span(style="text-align: left; margin-left: 1em")
            fas-icon(class="fa bars", icon="bars", @click="showingNavPanel = !showingNavPanel")
            transition(name="hamburger-action")
              zone-lms-nav(v-if="showingNavPanel")
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

export default {
  name: 'LayoutOutside',
  components: {
    ZoneLmsNav,
    AppFooter,
    AppHeader,
  },
  data: function () {
    return {
      showingNavPanel: false,
      navText: Text.INSTRUCTOR_TOOLS,
      appIcons: APP_ICONS
    }
  },
  computed: {
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
    lmsName ()          { return StoreHelper.lmsName() }
  },
  methods: {
    gotoActivity () { this.navigate('/lms-activity') },
    gotoCourses () { this.navigate('/courses') },
    gotoFiles () { this.navigate('/fileList') },
    gotoLObj () { this.navigate('/learning-objects') },
    gotoLms () { this.navigate({ name: 'consumer', query: { consumerId: StoreHelper.consumerId() } }) },
    gotoSeeds () { this.navigate('/seed-list') },
    navigate (path) {
      // prevent Vue's NavigationDuplicated
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  },
  watch: {
    $route: function (curr, prev) {
      if (curr !== prev && this.showingNavPanel) {
        const currArray = curr.path.split('/')
        const prevArray = prev.path.split('/')
        // The third item in the path array contains information about the
        // page, which was making the navigation awkward on mobile devices.
        // By implementing this, we assure that the navPanel will only be hidden
        // if the current path is within the same group as the previous one.
        if (currArray[2] === prevArray[2])
          this.showingNavPanel = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

main {
  min-height: 50vh;
  padding-bottom: 2rem;
}
.left_side {
  width: 23%;
}
.right_side {
  width: 76%;
}
@media screen and (max-width: $main-width-threshold3) {
  .flow_across {
    flex-direction: column;
  }
  .left_side,
  .right_side {
    width: 100%;
  }
}

.outside-main {
  padding: 1.5rem;
}
.nav_divs {
  margin: 1rem;
}
.nav_divs > div {
  cursor: pointer;
  .fa {
    display: inline-block;
    margin-right: 1rem;
    width: 2rem;
  }
}
.nv-item {
  display: inline-block;
  padding-right: 1rem;
}
</style>
