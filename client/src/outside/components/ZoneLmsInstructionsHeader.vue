<template lang='pug'>
div
  ui-button(value="zlih-explain",
    class="explain-button",
    secondary=true,
    @buttonClicked="toggleShowExplanationTextOutside",
    title="Show helpful information")
    span {{showEx ? 'Hide the explanation ' : 'Tell me about this page'}} &nbsp;
  transition(name="fade")
    div(v-if="showEx", class="explain-container explain-page-intro")
      slot
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import UiButton from '@/app/ui/UiButton.vue'

export default {
  name: 'ZoneLmsInstructionsHeader',
  components: { UiButton, ZoneLmsButton },
  data: function () {
    return {
      appIcons: APP_ICONS
    }
  },
  computed: {
    showEx () { return this.$store.getters['system/showExplanationTextOutside']},
  },
  methods: {
    toggleShowExplanationTextOutside () {
      this.$store.dispatch('system/setShowExplanationTextOutside', !this.showEx)
    },
  }
}
</script>

<style scoped>

</style>
