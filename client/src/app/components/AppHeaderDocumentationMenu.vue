<template lang="pug">
  div(class="flow_across_last_item")
    a(:href="url", target="_blank", class="navLink")
      span {{ linkText }}
      fas-icon(class="fa external-link-icon", :icon="appIcons.externalLink")
</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
export default {
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    isStudent () { return StoreHelper.isStudent()  },
    isInstructor () { return StoreHelper.isInstructor() },
    isDevelopingContent () { return StoreHelper.isDevelopingContent() },
    linkText () {
      let text = 'Documentation'
      if (this.isStudent) {
        text = 'Students guide'
      }
      if (this.isDevelopingContent) {
        text = 'Creators guide'
      } else if (this.isInstructor) {
        text = 'Instructors guide'
      }
      return text
    },
    url () {
      let url = 'https://edehr.github.io/edehr/'
      if (this.isStudent) {
        url += 'student/'
      }
      if (this.isDevelopingContent) {
        url += 'course-designer/'
      } else if (this.isInstructor) {
        url += 'instructor/'
      }
      return url
    }
  },
  methods: { }
}
</script>
