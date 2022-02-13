<template lang="pug">
  div(class="content")
    h1(class="has-text-centered") Mock Course Nursing 101 - Intro to EHR
    section(class="columns")

      div(class="column is-3 aside")
        div(class="aside-section")
          ul
            li Persona: {{ demoPersona.name }}
            li Role: {{ demoPersona.role}}.
            li
              ui-link(name="demo") Click here to change persona
        div(class="aside-section", v-text-to-html.noAutoLink="demoText.lmsAside")
      div(class="column is-8 is-offset-1 is-centered")
        div(class="card")
          div(class="card-content")
            section(v-for="assignment in assignments", :key="`des-${assignment.externalId}`")
              div
                span(class="field-head") Activity: &nbsp;
                span {{assignment.name}}
              div
                span(v-text-to-html="assignment.description", class="assignment-description")
              div
                span(class="field-head") Link to EdEHR: &nbsp;
                span
                  a(class="is-link", @click="gotoEhr(assignment)") {{assignment.name}}
              hr
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import DemoHelper from '../../helpers/demo-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '../../helpers/event-bus'
import { demoText } from '@/appText'

const debugDC = false

export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      assignments: [],
      demoText: demoText
    }
  },
  computed: {
    demoData () {
      return StoreHelper.getDemoTokenData()
    },
    demoPersona () {
      return StoreHelper.getDemoPersona()
    }
  },
  methods: {
    gotoChangeCharacter: function () {
      this.$router.push('demo')
    },
    gotoEhr: function (selectedAssignment) {
      const demoHelper = new DemoHelper()
      const returnUrl = window.location.origin + this.$route.path // come back to this LMS page
      // Go to EHR. This will result in a page change
      demoHelper.gotoEhr(this.demoData, this.demoPersona, selectedAssignment, returnUrl)
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
  /*width: 50%;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
}

.aside {
  .aside-section {
    margin-bottom: 3rem;
  }
}
section {
  margin-bottom: 1.5rem;
}
.assignment-description {
  p {
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
  }
}

.field-head {
  font-weight: bold;
}
.icon {
  color: #0473ea;
  margin: 0 1rem;
  font-size: 1.9rem;
  vertical-align: middle;
}

</style>
