<template lang="pug">
  div(id='nav-menu', :class='{ iconsOnly: iconsOnly }')
    button(@click="gotoCourses", :title='navText.COURSES_LABEL')
      fas-icon(class="fa", :icon="appIcons.course")
      span(v-show='!iconsOnly') {{navText.COURSES_LABEL}}
    button(@click="gotoActivity", :title='navText.ACTIVITIES')
      fas-icon(class="fa", :icon="appIcons.activity")
      span(v-show='!iconsOnly') {{navText.ACTIVITIES}}
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

</style>
