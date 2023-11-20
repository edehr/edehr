<template lang="pug">
  div
    div.intro
      p.italics.
        The activity you selected is not yet connected to EdEHR content.
        As an instructor you can select the content for this activity, which is important to do before your students try this activity.
        Select the content you want below. You can change this later.
      p.italics.
        At the bottom of this page you can see everything this application knows about you and this activity.

    learning-object-select-component(ref="lobjSelector", @selected='selectLobj')
    div Selected content: {{hasSelection ? selectedObj.name : ''}}
    button(ref='selectAndGoButton', v-on:click="goWithSelection",  :disabled='!hasSelection')
      span {{ hasSelection ? 'Use ' + selectedObj.name : 'Select content' }}

    hr
    h4 Activity details
    p.
      The following is the information your learning management system provided about you and this activity.
    div(class='lms-activity card selected')
      h4 About the activity
      p Activity: {{ activity.resource_link_title }}
      p Description: {{ activity.resource_link_description }}
      p Course: {{ activity.courseTitle }}
      h4 About you
      p Your given name: {{ user.givenName }}
      p Your family name: {{ user.familyName }}
      p Your role: {{ role }}
      p.italics Note that the EdEHR does not need your email address or anything else, so your privacy is respected.
      h4 About the learning management system (LMS)
      p Product family: {{ consumer.tool_consumer_info_product_family_code }}
      p Instance name: {{ consumer.tool_consumer_instance_name }}
      p Instance description: {{ consumer.tool_consumer_instance_description }}

      p(v-if="lmsUrl")
        ui-button(v-on:buttonClicked="exit()",
          :title="returnToLmsText")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; {{returnToLmsText}}
      p(v-else).
        Your LMS does not provide return url addresses, so you will need to close this window,
        and return to your LMS some other way.


</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import LearningObjectSelectComponent from '@/outside/components/learning-object/LearningObjectSelectComponent.vue'
import UiButton from '@/app/ui/UiButton.vue'
import StoreHelper from '@/helpers/store-helper'
export default {
  data () {
    return {
      appIcons: APP_ICONS,
      selectedObj: {},
    }
  },
  components: { UiButton, LearningObjectSelectComponent },
  computed: {
    hasSelection () { return !! this.selectedObj.name},
    activity () { return this.$store.getters['activityStore/activityRecord']},
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsUrl () { return StoreHelper.lmsUrl() },
    returnToLmsText () { return 'Return to ' + this.consumer.tool_consumer_instance_name},
    user () { return this.$store.getters['userStore/user']},
    role () { return this.$store.getters['visit/role']}
  },
  methods: {
    exit () { StoreHelper.exitToLms() },
    selectLobj (lobj) {
      this.selectedObj = lobj
      // wait for reaction to enable the button
      this.$nextTick(() => {
        const selectAndGoButton = this.$refs.selectAndGoButton
        selectAndGoButton.focus({ focusVisible: true})
      })
    },
    showEditDialog: function () {
      this.$refs.theActivityDialog.showDialog(this.activity)
    },
    goWithSelection () {
      this.changeLearningObjectForActivity(this.selectedObj)
    },
    async changeLearningObjectForActivity (selectedLObj) {
      const lObj = selectedLObj
      const activityId = this.activity.id
      const payload = { activity: activityId, assignment: lObj._id }
      await this.$store.dispatch('activityStore/linkAssignment', payload)
      // take the instructor to activity page for the activity they just made a link to.
      await this.$router.push({
        name: 'lms-instructor-activity',
        query: { activityId: activityId, ts: (new Date()).getTime() }
      })
    },
  },
  mounted () {
    this.$refs.lobjSelector.loadPage()
  }

}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.intro {
  p {
    line-height: 25px; /* within paragraph */
    margin-bottom: 5px; /* between paragraphs */
  }
}
.italics {
  font-style: italic;
}
.bold {
  font-weight: bold;
}

.lms-activity {
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  line-height: 25px;
  p {
    line-height: 22px; /* within paragraph */
    margin-bottom: 3px; /* between paragraphs */
  }
  h4 {
    margin-top: 15px;
    margin-bottom: 5px;
  }
}

</style>
