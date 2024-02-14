<template lang="pug">
  div
    div.intro
      p.italics.
        The activity you selected is not yet connected to EdEHR content. Come and try again later once your instructor has configured this activity.

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
      p.italics The EdEHR respects your privacy. Note how little data the EdEHR needs.
      h4 About your school's learning management system (LMS)
      p Product family: {{ consumer.tool_consumer_info_product_family_code }}
      p Instance name: {{ consumer.tool_consumer_instance_name }}
      p Instance description: {{ consumer.tool_consumer_instance_description }}

      p(v-if="lmsUrl")
        ui-button(value="usa-exit", v-on:buttonClicked="exit()",
          :title="returnToLmsText")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; {{returnToLmsText}}
      p(v-else).
        Your LMS does not provide return url addresses, so you will need to close this window,
        and return to your LMS some other way.
</template>

<script>
import UiButton from '@/app/ui/UiButton'
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
export default {
  data () {
    return {
      appIcons: APP_ICONS
    }
  },
  components: { UiButton },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord']},
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsUrl () { return StoreHelper.lmsUrl() },
    user () { return this.$store.getters['userStore/user']},
    role () { return this.$store.getters['visit/role']},
    returnToLmsText () { return 'Return to ' + this.consumer.tool_consumer_instance_name}
  },
  methods: {
    exit () { StoreHelper.exitToLms() },
  },
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
