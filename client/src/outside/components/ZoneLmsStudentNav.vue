<template lang="pug">
  div(id='nav-menu', :class='{ iconsOnly: iconsOnly }')
    router-link(
      :class="routeClass('/courses')",
      to="/courses", class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.course")
      span(v-show='!iconsOnly') &nbsp; {{navText.COURSES_NAV_LABEL}}
    router-link(
      v-if="hasCourse",
      :class="routeClass('/course')",
      :to="{ name: 'course', query: { courseId: course._id }}",
      :title='ehrTextFn.GOTO_COURSE(courseTitle)',
      class='router-item level2')
      fas-icon(class="fa", :icon="appIcons.course")
      span(v-show='!iconsOnly') &nbsp; {{truncate(courseTitle)}}
    router-link(
      :class="routeClass('/lms-student-activity')",
      v-if="hasCourse && hasActivity",
      to="/lms-student-activity",
      :title='ehrTextFn.GOTO_ACTIVITY(activityName)',
      class='router-item level3'
      )
      fas-icon(class="fa", :icon="appIcons.activity")
      span(v-show='!iconsOnly') &nbsp; {{truncate(activityName)}}
    a(href="#", @click.prevent="exitToLms", :title='navText.EXIT_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.exitToLms")
      span(v-show='!iconsOnly') &nbsp; {{navText.EXIT_LABEL}}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '../../helpers/store-helper'
import UiLink from '@/app/ui/UiLink.vue'
import { t18EhrFunctions, t18EhrText } from '@/helpers/ehr-t18'
export default {
  components: { UiLink },
  props: {
    iconsOnly: { type: Boolean }
  },
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    navText () { return t18EhrText().zoneLmsNav},
    ehrTextFn () { return t18EhrFunctions()},
    activity () { return this.$store.getters['activityStore/activityRecord'] },
    activityName () { return this.activity.learningObjectName },
    consumerId () { return StoreHelper.consumerId() },
    hasActivity () { return this.$store.getters['activityStore/hasActivity'] },
    hasCourse () { return this.$store.getters['courseStore/hasCourse'] },
    course () { return this.$store.getters['courseStore/course']},
    courseTitle () { return this.course ? this.course.title : undefined },
    exitUrl () { return StoreHelper.lmsUrl() },
    visitData () { return this.$store.getters['visit/visitData'] || {}}

  },
  methods: {
    exitToLms () {
      StoreHelper.exitToLms()
    },
    gotoActivity () {
      this.navigate('/ehr')
    },
    gotoCourses () {
      this.navigate('/courses')
    },
    gotoCourse () {
      this.navigate({ name: 'course', query: { courseId: this.course._id } })
    },
    navigate (path) {
      // prevent Vue's NavigationDuplicated
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    routeClass ( path) {
      return this.$route.path === path ? 'active-link' : ''
    },
    truncate (text) {
      const lim = 25
      return text && text.length > lim ? `${text.substring(0, lim)}...` : text
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.iconsOnly button {
  width: 2rem;
}
#nav-menu button {
  display: block;
  background-color: $grey03;
  border: none;
  margin-bottom: 0.5rem;
  &:hover {
    box-shadow: 2px 2px 5px $grey20
  }
  .fa {
    display: inline-block;
    margin-right: 1rem;
    width: 2rem;
  }
}

/*
.router-item is defined in outside.css. Here we adjust its bottom margin
*/
.router-item {
  margin-bottom: 5px;
  padding: 5px;
  text-decoration: none;
}
.active-link {
  background-color: $nav-active;
}
.level2 {
  margin-left: 8px;
}
.level3 {
  margin-left: 16px;
}
</style>
