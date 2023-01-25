<template lang="pug">
  div(class="nav_divs")
    div(@click="gotoCourses")
      fas-icon(class="fa", :icon="appIcons.course")
      span {{navText.COURSES_LABEL}}
    div(@click="gotoActivity")
      fas-icon(class="fa", :icon="appIcons.activity")
      span {{navText.ACTIVITIES}}
    div(@click="gotoLObj")
      fas-icon(class="fa", :icon="appIcons.lobj")
      span {{navText.LOBJ_LABEL}}
    div(@click="gotoSeeds")
      fas-icon(class="fa", :icon="appIcons.seed")
      span {{navText.SEED_LIST_LABEL}}
    div(@click="gotoFiles")
      fas-icon(class="fa", :icon="appIcons.file")
      span {{navText.FILE_LABEL}}
    div(@click="gotoLms")
      fas-icon(class="fa", :icon="appIcons.consumer")
      span {{navText.LMS_LABEL}}
    hr
    div(class="clickable")
      input(type="checkbox", id="creator", @input="setDevContent",
        :checked="isDevelopingContent")
      label(for='creator') {{navText.DESIGNER_MODE_LABEL}}
    div(class="clickable")
      input(type="checkbox", id="showLabels", @input="setOutsideLabels",
        :checked="isOutsideShowButtonLabels")
      label(for='showLabels') {{navText.SHOW_BUTTON_LABELS(this.isOutsideShowButtonLabels)}}
    hr
    div(@click="exitToLms")
      fas-icon(class="fa", :icon="appIcons.exitToLms")
      span {{navText.EXIT_LABEL}}

    hr

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '../../helpers/store-helper'
import { Text } from '@/helpers/ehr-text'
export default {
  components: {},
  data: function () {
    return {
      navText: Text.INSTRUCTOR_TOOLS,
      appIcons: APP_ICONS
    }
  },
  computed: {
    isDevelopingContent () {
      return StoreHelper.isDevelopingContent()
    },
    isOutsideShowButtonLabels () {
      return StoreHelper.isOutsideShowButtonLabels()
    }
  },
  methods: {
    exitToLms () {
      StoreHelper.exitToLms()
    },
    gotoActivity () {
      this.navigate('/lms-activity')
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
    setOutsideLabels () {
      StoreHelper.setOutsideShowButtonLabels( !this.isOutsideShowButtonLabels)
    },
    setDevContent () {
      StoreHelper.setIsDevelopingContent( !this.isDevelopingContent)
    }
  }
}

</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
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
</style>
