<template lang="pug">
  div(class="columns is-centered")
    section(v-if="canAccessDemo", class="column is-8")
      h2(style="text-align: center") EdEHR Demonstration WIP - Select Your Assignment
      div(class="content")
        p.
          The EdEHR can be used to create diverse educational resources. The sample assignments below are based on the
          open text-book <a target="_blank" href="https://pressbooks.bccampus.ca/healthcasestudies/">Health Case Studies - Toward Closing the Healthcare Communication Gap</a> by:  Glynda Rees, Rob Kruger,
          Janet Morrison.

      div(v-for="assignment in assignments", :key="`des-${assignment.externalId}`", class="content assignment-description")
        h2 {{assignment.name}}
        div(v-text-to-html="assignment.description", class="assignment-description")

      h3 Select which assignment you want to explore
      div(v-for="assignment in assignments", :key="`sel-${assignment.externalId}`", class="content assignment-selection")
        label
          input(
            type="radio",
            :checked="selectedAssignment._id === assignment._id",
            :value="assignment",
            @change="setAssignment(assignment)"
          )
          span(class="icon")
            fas-icon(class="fa", icon="stethoscope")
          span {{assignment.name}}

      div(class="content")
        p(v-if="!!selectedAssignment.name").
          You have selected assignment {{selectedAssignment.name}}.
        p(v-else).
          You need to select an assignment.
        ui-button(:disabled="!readyForLti", @buttonClicked="gotoEhr") Go to assignment.

      div(class="content")
        p(v-if="!!demoPersona.name").
          You are "logged in" as character "{{ demoPersona.name }}" with the role of {{ demoPersona.role}}.
        p(v-else).
          You need to go back and select a character.
        ui-button(secondary, @buttonClicked="gotoChangeCharacter") Change character.

    div(v-else, class="content")
      div You are not logged in to see the demo
      div Return to
        ui-link(:name="'home'") home page

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import axios from 'axios'
import InstoreHelper from '../../store/modules/instoreHelper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_READY_EVENT } from '../../helpers/event-bus'

const debugDC = true

export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      show2nd: false, // under development, when ready enable
      assignments: [],
      selectedAssignment: {}
    }
  },
  computed: {
    demoData () {
      return StoreHelper.getDemoTokenData()
    },
    demoPersona () {
      return StoreHelper.getDemoPersona()
    },
    canAccessDemo () {
      return !! this.demoData
    },
    readyForLti () {
      return !!(this.selectedAssignment.name && this.demoPersona.name)
    }
  },
  methods: {
    setAssignment: function (assignment) {
      this.selectedAssignment = assignment
    },
    gotoChangeCharacter: function () {
      this.$router.push('demo')
    },
    gotoEhr: function () {
      const persona = this.demoPersona
      const submitData = {
        assignmentName: this.selectedAssignment.name,
        externalId: this.selectedAssignment.externalId,
        personaName: persona.name,
        personaEmail: persona.email,
        personaRole: persona.role,
        returnUrl: window.location.origin,
        theKey: this.demoData.toolConsumerKey
      }
      StoreHelper.setLoading(null, true)
      StoreHelper.submitPersona(submitData)
        .then(({url}) => {
          StoreHelper.setLoading(null, false)
          console.log('DemoCourse - Should we redirect here? do we get an url?', url)
          window.location.replace(url)
        }).catch(err => {
          StoreHelper.setLoading(null, false)
          setApiError('An error occurred during the launch of the demonstration mode. ', err)
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
      return InstoreHelper.getRequest(undefined, 'assignments', url)
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
    const _this = this
    this.refreshEventHandler = function () {
      _this.loadAssignments()
    }
    EventBus.$on(PAGE_DATA_READY_EVENT, this.refreshEventHandler)
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
.assignment-description {
  p {
    font-size: 1.25rem;
    margin-bottom: 0.6rem;
  }
}

.assignment-selection {
  margin-bottom: 0.6rem;
}

input[type=checkbox] {
  transform: scale(1.5);
}
.icon {
  color: #0473ea;
  margin: 0 1rem;
  font-size: 1.9rem;
  vertical-align: middle;
}

</style>