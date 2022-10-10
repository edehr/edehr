<template lang='pug'>
  div
    h2 What to do?
    div Try the home page again &nbsp;
      router-link(:to="{ name: `home` }") Home page
    div Reach out to the administrator of edehr.org &nbsp;
      span <a href="mailto:info@edehr.org">info@edehr.org</a>
    div Reset the system
      div
        ui-button(@buttonClicked="reset") Reset
</template>
<script>
import UiButton from '@/app/ui/UiButton'
import StoreHelper from '@/helpers/store-helper'
export default {
  components: { UiButton },
  methods: {
    async reset () {
      console.log('reset.  do a complete reset but keep the full demo feature flag')
      await StoreHelper.logUserOutOfEdEHR()
      const df = this.$store.getters['demoStore/getDemoFeatureFlag']
      localStorage.clear()
      await this.$store.dispatch('demoStore/setDemoFeatureFlag', df)
      await this.$router.push({ name: 'home' })
    },
  }
}
</script>
