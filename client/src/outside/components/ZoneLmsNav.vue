<template lang="pug">
  div(id='nav-menu', :class='{ iconsOnly: iconsOnly }')
    button(@click="gotoCourses", :title='navText.COURSES_LABEL')
      fas-icon(class="fa", :icon="appIcons.course")
      span(v-show='!iconsOnly') {{navText.COURSES_LABEL}}
    button(@click="gotoActivity", :title='navText.ACTIVITIES')
      fas-icon(class="fa", :icon="appIcons.activity")
      span(v-show='!iconsOnly') {{navText.ACTIVITIES}}
    button(@click="gotoLObj", :title='navText.LOBJ_LABEL')
      fas-icon(class="fa", :icon="appIcons.lobj")
      span(v-show='!iconsOnly') {{navText.LOBJ_LABEL}}
    button(@click="gotoSeeds", :title='navText.SEED_LIST_LABEL')
      fas-icon(class="fa", :icon="appIcons.seed")
      span(v-show='!iconsOnly') {{navText.SEED_LIST_LABEL}}
    button(@click="gotoFiles", :title='navText.FILE_LABEL')
      fas-icon(class="fa", :icon="appIcons.file")
      span(v-show='!iconsOnly') {{navText.FILE_LABEL}}
    button(@click="gotoLms", :title='navText.LMS_LABEL')
      fas-icon(class="fa", :icon="appIcons.consumer")
      span(v-show='!iconsOnly') {{navText.LMS_LABEL}}
    div(v-show='!iconsOnly')
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
    button(@click="exitToLms", :title='navText.EXIT_LABEL')
      fas-icon(class="fa", :icon="appIcons.exitToLms")
      span(v-show='!iconsOnly') {{navText.EXIT_LABEL}}
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

.iconsOnly button {
  width: 2rem;
}

#nav-menu button {
  display: block;
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
.clickable {
  margin-left: 0.75rem;
  margin-bottom: 1rem;
}
</style>
