<template lang="pug">
  div(class="content")
    div(class="columns")
      div(class="column is-10 is-offset-1 is-centered")
        h1(class="has-text-centered") Nursing 101 - Intro to EHR
      div(class="column is-2")
        ui-button(v-on:buttonClicked="editMode = !editMode", :class="editButtonClass", title='Edit activity configuration')
          fas-icon(icon="pen")
    section(class="columns")

      div(class="column is-3 aside")
        div(class="aside-section")
          ul
            li Demo Persona: {{ demoPersona.name }}
            li Demo Role: {{ demoPersona.role}}
            li(v-if='demoPersona.role === "instructor"') Switch role: &nbsp;
              label
                input(class="checkbox", type="checkbox", v-model="asStudent")
                span as student
              div(v-if='asStudent') When you click on an activity this 'instructor' will become a 'student' same as how Moodle allows users to switch roles.
          ul
            li
              ui-button(v-on:buttonClicked="gotoChangeCharacter()", :secondary="true", title='Change to another persona') Change to another persona

        div(class="aside-section", v-text-to-html.noAutoLink="demoText.lmsAside")
      div(class="column is-8 is-offset-1 is-centered")

        section(v-for="assignment in assignments", :key="`des-${assignment.externalId}`")
          demo-course-activity(:assignment="assignment", :switch-role="asStudent", :edit-mode='editMode')
          hr
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import DemoCourseActivity from '@/outside/views/DemoCourseActivity'
import DemoHelper from '../../helpers/demo-helper'
import UiButton from '../../app/ui/UiButton'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '../../helpers/event-bus'
import { demoText } from '@/appText'

const debugDC = false

export default {
  components: {
    UiButton, DemoCourseActivity
  },
  data () {
    return {
      asStudent: false,
      assignments: [],
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
    loadAssignments: function () {
      const demoHelper = new DemoHelper()
      demoHelper.loadAssignments()
        .then((list) => {
          this.assignments = list
        })
    }
  },
  mounted: function () {
    if (!StoreHelper.isDemoMode()) {
      if (debugDC) console.log('go to home because the user is not in the demo mode')
      return this.$router.push('/')
    }
    const p = StoreHelper.getDemoPersona()
    if (!p || !p.name) {
      if (debugDC) console.log('Go to the demo change persona page')
      // return this.$router.push('demo')
    }
    const _this = this
    this.refreshEventHandler = function () {
      if (debugDC) console.log('Demo LMS PAGE_DATA_READY_EVENT')
      _this.loadAssignments()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
    _this.loadAssignments()
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_READY_EVENT, this.loadAssignments)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.content {
  font-size: 1.2rem;
}

.aside {
  .aside-section {
    margin-bottom: 3rem;
  }
}

section {
  margin-bottom: 0.5rem;
}

</style>
