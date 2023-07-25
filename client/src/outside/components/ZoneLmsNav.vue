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
      :title='navText.GOTO_COURSE(courseTitle)',
      class='router-item level2')
      fas-icon(class="fa", :icon="appIcons.course")
      span(v-show='!iconsOnly') &nbsp; {{truncate(courseTitle)}}
    router-link(
      :class="routeClass('/lms-instructor-activity')",
      v-if="hasCourse && hasActivity",
      to="/lms-instructor-activity",
      :title='navText.GOTO_ACTIVITY(activityName)',
      class='router-item level3')
      fas-icon(class="fa", :icon="appIcons.activity")
      span(v-show='!iconsOnly') &nbsp; {{truncate(activityName)}}
    router-link(
      :class="routeClass('/learning-objects')",
      to="/learning-objects", :title='navText.LOBJ_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.lobj")
      span(v-show='!iconsOnly') &nbsp; {{navText.LOBJ_LABEL}}
    router-link(
      :class="routeClass('/seed-list')",
      to="/seed-list", :title='navText.SEED_LIST_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.seed")
      span(v-show='!iconsOnly') &nbsp; {{navText.SEED_LIST_LABEL}}
    router-link(
      :class="routeClass('/fileList')",
      to="/fileList", :title='navText.FILE_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.file")
      span(v-show='!iconsOnly') &nbsp; {{navText.FILE_LABEL}}
    a(v-if="exitUrl", href="#", @click.prevent="exitToLms", :title='navText.EXIT_LABEL', class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.exitToLms")
      span(v-show='!iconsOnly') &nbsp; {{navText.EXIT_LABEL}}
    router-link(
      :class="routeClass('/consumer')",
      :to="{ name: 'consumer', query: { consumerId: consumerId } }",
      :title='navText.LMS_LABEL',
      class='router-item level1')
      fas-icon(class="fa", :icon="appIcons.consumer")
      span(v-show='!iconsOnly') &nbsp; {{navText.LMS_LABEL}}
    div(v-show='!iconsOnly')
      div(class="clickable")
        input(type="checkbox", id="creator", @input="setDevContent",
          :checked="isDevelopingContent")
        label(for='creator') {{navText.DESIGNER_MODE_LABEL}}
      // hiding show button labels.
      // TODO consider removal of unused code
      //div(v-if="false", class="clickable")
      //  input(type="checkbox", id="showLabels", @input="setOutsideLabels",
      //    :checked="isOutsideShowButtonLabels")
      //  label(for='showLabels') {{navText.SHOW_BUTTON_LABELS(this.isOutsideShowButtonLabels)}}
    hr
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
export default {
  components: {},
  props: {
    iconsOnly: { type: Boolean }
  },
  data: function () {
    return {
      navText: Text.INSTRUCTOR_TOOLS,
      appIcons: APP_ICONS
    }
  },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord'] },
    activityName () { return this.activity.learningObjectName },
    consumerId () { return StoreHelper.consumerId() },
    hasActivity () { return this.$store.getters['activityStore/hasActivity'] },
    hasCourse () { return this.$store.getters['courseStore/hasCourse'] },
    course () { return this.$store.getters['courseStore/course']},
    courseTitle () { return this.course ? this.course.title : undefined },
    isDevelopingContent () { return StoreHelper.isDevelopingContent() },
    isOutsideShowButtonLabels () { return StoreHelper.isOutsideShowButtonLabels() },
    exitUrl () { return StoreHelper.lmsUrl() },
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
.clickable {
  margin-left: 0.75rem;
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
