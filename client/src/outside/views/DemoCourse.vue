<template lang="pug">
  div(class="content")
    h1(class="has-text-centered") EdEHR Demonstration
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
            h3(class="has-text-centered") One Page Learning Management System
            section(v-for="assignment in assignments", :key="`des-${assignment.externalId}`")
              div Assignment: {{assignment.name}}
              div(v-text-to-html="assignment.description", class="assignment-description")
              a(class="is-link", @click="gotoEhr(assignment)") {{assignment.name}}
              span(class="icon")
                fas-icon(class="fa", icon="stethoscope")
              hr
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import axios from 'axios'
import InstoreHelper from '../../store/modules/instoreHelper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '../../helpers/event-bus'
import { demoText } from '@/appText'

const debugDC = true

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
      const persona = this.demoPersona
      const submitData = {
        assignmentName: selectedAssignment.name,
        externalId: selectedAssignment.externalId,
        personaName: persona.name,
        personaEmail: persona.email,
        personaRole: persona.role,
        returnUrl: window.location.origin + this.$route.path, // come back to this LMS page
        toolKey: this.demoData.toolConsumerKey
      }
      if (debugDC) console.log('DemoCourse goto ehr with ', submitData)
      StoreHelper.setLoading(null, true)
      StoreHelper.submitPersona(submitData)
        .then(({url}) => {
          StoreHelper.setLoading(null, false)
          if (debugDC) console.log('DemoCourse goto url ', url)
          window.location.replace(url)
        }).catch(err => {
          StoreHelper.setLoading(null, false)
          StoreHelper.setApiError('An error occurred during the launch of the demonstration mode. ', err)
        })
    },
    loadAssignments: function () {
      const token = StoreHelper.getDemoToken()
      const dd = StoreHelper.getDemoTokenData()
      const toolConsumerId = dd.toolConsumerId
      if (!toolConsumerId) {
        if (debugDC) console.log('DC can not get assignments no toolConsumerId')
        return
      }
      if (debugDC) console.log('DC get assignments toolConsumerId', toolConsumerId)
      axios.defaults.headers['Authorization'] = `Bearer ${token}`
      let url = 'consumer/' + toolConsumerId
      return InstoreHelper.getRequest(undefined/*context not needed*/, 'assignments', url)
        .then(response => {
          let list = response.data.assignments
          if (debugDC) console.log('loadAssignments response.data', list)
          if (!list) {
            const msg = 'System error getting demonstration assignments.'
            StoreHelper.setApiError(msg)
            return
          }
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

.icon {
  color: #0473ea;
  margin: 0 1rem;
  font-size: 1.9rem;
  vertical-align: middle;
}

</style>