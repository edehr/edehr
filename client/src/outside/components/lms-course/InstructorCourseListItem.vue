<template lang="pug">
  div
    div(class='instructor-course-activity')
      fas-icon(class="fa", :icon="appIcons.activity")
      span &nbsp; {{ learningObjectName }}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
export default {
  components: {  },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  props: {
    activity: { type: Object },
  },
  computed: {
    learningObjectName () { return this.activity.learningObjectName },
  },
  methods: {
  }
}
</script>
