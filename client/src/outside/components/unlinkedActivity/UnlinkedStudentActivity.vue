<template lang="pug">
  div
    h1 Activity needs to be linked with content
    p Hi {{givenName}}.
    p The activity you selected is not yet linked to EdEHR content.
    p Please contact your instructor and remind them that they need to select EdEHR content to show for this activity.
    div(class='lms-activity card selected')
      p Activity: {{ activity.title }}
      p Description: {{ activity.description }}
      p Course: {{ activity.courseTitle }}
    p(v-if="lmsUrl")
      ui-button(v-on:buttonClicked="exit()",
        :title="returnToLmsText")
        fas-icon(class="fa", :icon="appIcons.exitToLms")
        span &nbsp; {{returnToLmsText}}


</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import { APP_ICONS } from '@/helpers/app-icons'
export default {
  data () {
    return {
      appIcons: APP_ICONS,
      showDetails: false,
    }
  },
  components: { UiButton },
  computed: {
    activity () { return this.$store.getters['activityStore/activityRecord']},
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsName () { return this.consumer.tool_consumer_instance_name},
    lmsUrl () { return StoreHelper.lmsUrl() },
    givenName () { return StoreHelper.givenName()},
    returnToLmsText () { return 'Return to ' + this.lmsName}
  },
  methods: {
    exit () { StoreHelper.exitToLms() },
  },
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

button, .button {
  font-size: 1rem;
}
.lms-activity {
  margin-left: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
