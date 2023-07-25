<template lang="pug">
  div(class="demo-course-content")
    div(class="aside-section showing-labels")
      div(class="aside-login")
        div {{demoText.personaLabel}}: <strong>{{ demoPersona.name }}</strong>
        div {{demoText.roleLabel}}: <strong>{{ demoPersona.role}}</strong>
        ui-button(v-on:buttonClicked="gotoChangeCharacter()",
          :title='demoText.switchRoleLabel') {{ demoText.switchRoleLabel }}
      div(class="aside-intro", v-text-to-html.noAutoLink="demoText.lmsAside")
      div(class="aside-intro", v-text-to-html.noAutoLink="demoText.lmsAside2")
    div(class="sample-lms")
      div(class="sample-lms-header")
        h2 {{demoText.lmsTitle}}
          ui-info(:title="demoText.lmsTitle", :text="demoText.lmsHint")
        div(class="margin-match-h2")
          ui-button(v-on:buttonClicked="editMode = !editMode", :class="editButtonClass",
            title='Edit activity configuration'
            )
            span {{ !editMode ? "Advanced edit mode" : "Normal display" }} &nbsp;
            //fas-icon(:icon="appIcons.edit")
      div
        div(v-for="course in courses", :key="course.courseTitle")
          h3 {{course.courseTitle}}
          section(v-for="activity in course.activities", :key="`des-${activity.resource_link_title}`")
            demo-course-activity(:activity="activity", :course="course", :switch-role="asStudent", :edit-mode='editMode')
            hr
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import DemoCourseActivity from '@/outside/views/DemoCourseActivity'
import DemoHelper from '@/helpers/demo-helper'
import UiButton from '@/app/ui/UiButton'
import UiInfo from '@/app/ui/UiInfo'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import { demoText } from '@/appText'

const debugDC = false

export default {
  components: {
    UiButton, UiInfo, DemoCourseActivity
  },
  data () {
    return {
      appIcons: APP_ICONS,
      asStudent: false,
      courses: [],
      demoText: demoText,
      editMode: false
    }
  },
  computed: {
    editButtonClass: function () {
      return {
        'is-light': this.editMode
      }
    },
    demoPersona () {
      return StoreHelper.getDemoPersona() || {}
    }
  },
  methods: {
    gotoChangeCharacter: function () {
      this.$router.push('/demo')
    },
    loadActivities: function () {
      const demoHelper = new DemoHelper()
      demoHelper.loadActivities()
        .then((response) => {
          if (debugDC) console.log('load acts', response)
          this.courses = response.data.courses
        })
    }
  },
  mounted: function () {
    if (!StoreHelper.isDemoMode()) {
      if (debugDC) console.log('go to home because the user is not in the demo mode')
      return this.$router.push('/')
    }
    // const p = StoreHelper.getDemoPersona()
    // if (!p || !p.name) {
    //   if (debugDC) console.log('Go to the demo change persona page')
    //   // return this.$router.push('demo')
    // }
    const _this = this
    this.refreshEventHandler = function () {
      if (debugDC) console.log('Demo LMS PAGE_DATA_REFRESH_EVENT')
      _this.loadActivities()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    _this.loadActivities()
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.demo-course-content {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.sample-lms {
  border: 1px solid blue;
  border-radius: 10px;
  padding: $ehr-layout-padding-left;
}
.sample-lms-header {
  display: grid;
  grid-template-columns: 4fr 0.5fr;
}

.margin-match-h2 {
  margin-top: 0.625em;
}
.aside-section {
  padding: $ehr-layout-padding-left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  //height: 60vh;
}

@media screen and (max-width: $main-width-threshold1){
  .aside-section {
    margin-bottom: 0.5rem;
  }
}
section {
  margin-bottom: 0.5rem;
}

</style>
