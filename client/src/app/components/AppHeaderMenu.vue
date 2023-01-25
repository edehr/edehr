<template lang="pug">
  div
    div(class="app-header flow_across")
      router-link(:to="{ name: 'home' }", class="navLink")
        img(src="/edehr-Logo.png", class='brand-image', alt='EdEHR')
      div(class="flow_across menu_space_across flow_across_last_item side-menu")
        app-header-documentation-menu
        app-header-public-menu(v-if="!isStudent && !isInstructor && isPublic")
        app-header-student-menu(v-if="isStudent")
        app-header-instructor-menu(v-if="isInstructor")
        router-link(v-if="isDemo", :to="{ name: `demo` }", class="navLink") Demonstration
    // app styling -- coloured line under header
    div(class="app-header-bottom")
      div(class="app-header-bottom-left")
      div(class="app-header-bottom-right")
</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import AppHeaderPublicMenu from '@/app/components/AppHeaderPublicMenu'
import AppHeaderStudentMenu from '@/app/components/AppHeaderStudentMenu'
import AppHeaderInstructorMenu from '@/app/components/AppHeaderInstructorMenu'
import AppHeaderDocumentationMenu from '@/app/components/AppHeaderDocumentationMenu'
export default {
  components: { AppHeaderDocumentationMenu, AppHeaderInstructorMenu, AppHeaderStudentMenu, AppHeaderPublicMenu },
  computed: {
    isPublic () { return StoreHelper.inZonePublic() },
    isDemo () { return StoreHelper.inZoneDemo() },
    isStudent () { return StoreHelper.isStudent()  },
    isInstructor () { return StoreHelper.isInstructor() },
  },
  methods: { }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.app-header-bottom {
  display: grid;
  grid-template-columns: 1fr 1rem;
  & .app-header-bottom-left {
    border-bottom: 2px solid $brand-highlight;
  }
  & .app-header-bottom-right {
    border-bottom: 2px solid $brand-highlight-red;
  }
}
.side-menu {
  margin-top: 10px;
  margin-right: 10px;
}
.brand-image {
  height: 2.5rem;
  margin-top: 6px;
  margin-left: 2rem;
  margin-bottom: 2px;
}
/* Menu colours */

/* Small screens */
@media screen and (max-width: $main-width-threshold3){
  .brand-image {
    height: 1.5rem;
    margin-top: 6px;
    margin-left: 1rem;
    margin-bottom: 0;
  }
  .side-menu {
    margin-top: 6px;
  }
}
</style>
