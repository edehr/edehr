<template lang='pug'>
  div
    h2 What to do?
    ol
      li Reach out to the administrator of edehr.org &nbsp;
        span <a href="mailto:info@edehr.org">info@edehr.org</a>
      li Close this browser tab and return to your LMS and start again.
      li Return to the home page and locate the reset button
      li
        ui-button(value="what-home", v-on:buttonClicked="home()")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; Home
      li(v-if="lmsName")
        ui-button(value="what-exit", v-on:buttonClicked="exit()",
          :title="returnToLmsText")
          fas-icon(class="fa", :icon="appIcons.exitToLms")
          span &nbsp; {{returnToLmsText}}

</template>
<script>
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '@/helpers/store-helper'
import { APP_ICONS } from '@/helpers/app-icons'
export default {
  components: { UiButton },
  data () {
    return {
      appIcons: APP_ICONS,
    }
  },
  computed: {
    consumer () { return this.$store.getters['consumerStore/consumer']},
    lmsName () { return this.consumer.tool_consumer_instance_name},
    isStudent () { return StoreHelper.isStudent()},
    returnToLmsText () { return 'Return to ' + this.lmsName}
  },
  methods: {
    exit () { StoreHelper.exitToLms() },
    home () { this.$router.push({ name: 'home' })}
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/definitions';
.button {
  background-color: $toolbar-background-color;
  color: white;
  border-radius: 8px;
  font-size: 1.5rem;
  padding: 1.5rem 1rem;
}
ol {
  margin-left: 2rem;
  li {
    list-style: disc;
  }
}
</style>
