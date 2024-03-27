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
      :class="routeClass('/lms-instructor-activity')",
      v-if="hasCourse && hasActivity",
      to="/lms-instructor-activity",
      :title='ehrTextFn.GOTO_ACTIVITY(activityName)',
      class='router-item level3')
      fas-icon(class="fa", :icon="appIcons.activity")
      span(v-show='!iconsOnly') &nbsp; {{truncate(activityName)}}
    router-link(
      :class="routeClass('/learning-objects')",
      to="/learning-objects", :title='navText.LOBJ_LABEL', class='router-item level1 lobj-theme')
      fas-icon(class="fa", :icon="appIcons.lobj")
      span(v-show='!iconsOnly') &nbsp; {{navText.LOBJ_LABEL}}
    router-link(
      :class="routeClass('/seed-list')",
      to="/seed-list", :title='navText.SEED_LIST_LABEL', class='router-item level1 seed-theme')
      fas-icon(class="fa", :icon="appIcons.seed")
      span(v-show='!iconsOnly') &nbsp; {{navText.SEED_LIST_LABEL}}
    router-link(
      :class="routeClass('/fileList')",
      to="/fileList", :title='navText.FILE_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.file")
      span(v-show='!iconsOnly') &nbsp; {{navText.FILE_LABEL}}
    div(class='mode-toggle')
      input(type="checkbox", id="creator", @input="setDevContent", :checked="isDevelopingContent",
        :title='navText.DESIGNER_MODE_LABEL')
      label(for='creator') &nbsp; {{navText.DESIGNER_MODE_LABEL}}
    transition(name="fade")
      span(v-if="showEx", class="explain-text") &nbsp; {{navText.DESIGNER_MODE_EXPLAIN}}

      // hiding show button labels.
      // TODO consider removal of unused code
      //div(v-if="false", class="clickable")
      //  input(type="checkbox", id="showLabels", @input="setOutsideLabels",
      //    :checked="isOutsideShowButtonLabels")
      //  label(for='showLabels') {{navText.SHOW_BUTTON_LABELS(this.isOutsideShowButtonLabels)}}
    router-link( v-if="isDevelopingContent",
      :class="routeClass('/consumer')",
      :to="{ name: 'consumer', query: { consumerId: consumerId } }",
      :title='navText.LMS_LABEL',
      class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.consumer")
      span(v-show='!iconsOnly') &nbsp; {{navText.LMS_LABEL}}
    a(v-if="exitUrl", href="#", @click.prevent="exitToLms", :title='navText.EXIT_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.exitToLms")
      span(v-show='!iconsOnly') &nbsp; {{navText.EXIT_LABEL}}
    hr
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '../../helpers/store-helper'
import { t18EhrFunctions, t18EhrText } from '@/helpers/ehr-t18'
export default {
  components: {},
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
    activityName () { return this.activity.learningObjectName || this.activity.title },
    consumerId () { return StoreHelper.consumerId() },
    hasActivity () { return this.$store.getters['activityStore/hasActivity'] },
    hasCourse () { return this.$store.getters['courseStore/hasCourse'] },
    course () { return this.$store.getters['courseStore/course']},
    courseTitle () { return this.course ? this.course.title : undefined },
    isDevelopingContent () { return StoreHelper.isDevelopingContent() },
    isOutsideShowButtonLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    exitUrl () { return StoreHelper.lmsUrl() },
    showEx () { return this.$store.getters['system/showExplanationTextOutside']},
    visitData () { return this.$store.getters['visit/visitData'] || {}}
  },
  methods: {
    exitToLms () {
      StoreHelper.exitToLms()
    },
    gotoActivity () {
      this.navigate('/lms-instructor-activity')
    },
    gotoCourse () {
      this.navigate({ name: 'course', query: { courseId: this.course._id } })
    },
    gotoCourses () {
      this.navigate('/courses')
    },
    gotoFiles () {
      this.navigate('/fileList')
    },
    gotoLObj () {
      this.navigate('/learning-objects')
    },
    gotoLms () {
      this.navigate({ name: 'consumer', query: { consumerId: StoreHelper.consumerId() } })
    },
    gotoSeeds () {
      this.navigate('/seed-list')
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
    setOutsideLabels () {
      StoreHelper.setOutsideShowButtonLabels( !this.isOutsideShowButtonLabels)
    },
    setDevContent () {
      StoreHelper.setIsDevelopingContent( !this.isDevelopingContent)
    },
    truncate (text) {
      const lim = 18
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
.mode-toggle {
  margin: 0.5rem 0 0.5rem 0.75rem;
  cursor: pointer;
}
.left_side_small .mode-toggle label {
  display: none;
}
/*
.router-item is defined in outside.css. Here we adjust its bottom margin
*/
.router-item {
  margin-bottom: 5px;
  padding: 5px;
  text-decoration: none;
}
.router-item:hover {
  cursor: pointer;
  background-color: $brand-primary-hover;
}
.active-link {
  background-color: $activity-header-colour;
}
.seed-theme.active-link {
  background-color: $seed-header-colour;
}
.lobj-theme.active-link {
  background-color: $lobj-header-colour;
}

.level2 {
  margin-left: 8px;
}
.level3 {
  margin-left: 16px;
}
</style>
