<template lang="pug">
  div(class="demo-course-content")
    section(class="columns")
      div(class="column is-3 aside")
        div(class="aside-section showing-labels")
          div {{demoText.personaLabel}}: {{ demoPersona.name }}
          div {{demoText.roleLabel}}: {{ demoPersona.role}}
          div(v-if='demoPersona.role === "instructor"') {{demoText.switchRoleSegmentTitle}} &nbsp;
            label
              input(class="checkbox", type="checkbox", v-model="asStudent")
              span as student
            div(v-if='asStudent') {{demoText.switchRoleExplain}}
          div
            ui-button(v-on:buttonClicked="gotoChangeCharacter()",
              :secondary="true",
              :title='demoText.switchRoleLabel') {{ demoText.switchRoleLabel }}
        div(class="aside-section", v-text-to-html.noAutoLink="demoText.lmsAside")
      div(class="column is-8 is-offset-1 is-centered")
        div(class="columns")
          div(class="column is-11")
            h2 {{demoText.lmsTitle}}
              ui-info(:title="demoText.lmsTitle", :text="demoText.lmsHint")
            h3 {{demoText.courseTitle}}
          div(class="column is-1")
            ui-button(v-on:buttonClicked="editMode = !editMode", :class="editButtonClass", title='Edit activity configuration')
              fas-icon(:icon="appIcons.edit")
        section(v-for="activity in activities", :key="`des-${activity.resource_link_title}`")
          demo-course-activity(:activity="activity", :switch-role="asStudent", :edit-mode='editMode')
          hr
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import DemoCourseActivity from '@/outside/views/DemoCourseActivity'
import DemoHelper from '@/helpers/demo-helper'
import UiButton from '@/app/ui/UiButton'
import UiInfo from '@/app/ui/UiInfo'
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '@/helpers/event-bus'
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
      activities: [],
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
    demoData () {
      /* Sample data:
      { "toolConsumerKey": "Demo-98098098-asda", "toolConsumerId": "5265820495c96c8eef7b2e3d",
      "personaList": [ { "id": 1, "name": "Dorothea Dix", "email": "dorothea@edehr.org", "role": "instructor" },
      { "id": 11, "name": "Lystra Eggert Gretter",  "role": "instructor" },
      { "id": 2, "name": "Juliet Seton", "role": "student" },
      { "id": 3, "name": "Roxanne Snow", "role": "student" },
      { "id": 4, "name": "Carly Dixon",  "role": "student" } ] }
       */
      return StoreHelper.getDemoTokenData()
    },
    demoPersona () {
      return StoreHelper.getDemoPersona()
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
          this.activities = response.data.activities
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
      if (debugDC) console.log('Demo LMS PAGE_DATA_READY_EVENT')
      _this.loadActivities()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    _this.loadActivities()
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.demo-course-content {
  //font-size: 1.2rem;
}

.aside {
  .aside-section {
    margin-bottom: 3rem;
  }
}

@media screen and (max-width: $main-width-threshold1){
  .aside {
    .aside-section {
      margin-bottom: 0.5rem;
    }
  }
}
section {
  margin-bottom: 0.5rem;
}

</style>
