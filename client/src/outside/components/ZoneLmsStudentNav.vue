<template lang="pug">
  div(class="nav_divs")
    div(@click="gotoCourses")
      fas-icon(class="fa", :icon="appIcons.course")
      span {{navText.COURSES_LABEL}}
    div(@click="gotoActivity")
      fas-icon(class="fa", :icon="appIcons.activity")
      span {{navText.ACTIVITIES}}
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
  },
  methods: {
    exitToLms () {
      StoreHelper.exitToLms()
    },
    gotoActivity () {
      this.navigate('/ehr')
      // router-link(:to="{ name: `ehr` }", class="navLink") Activity
    },
    gotoCourses () {
      this.navigate('/student-courses')
    },
    navigate (path) {
      // prevent Vue's NavigationDuplicated
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
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
