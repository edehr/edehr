<template lang='pug'>
  div
    zone-lms-page-banner
    div(class="details-container card selected")
      h2 {{ text.PAGE_TITLE }}
      div(class="details-row")
        div(class="details-name") {{text.EHR_LAYOUT_LABEL}}
          ui-info(:title="text.EHR_LAYOUT_TITLE", :text="text.EHR_LAYOUT_TIP")
        div(class="details-value")
          label(class="clickable")
            input(type="radio", name='ehrLayout', v-model="ehrLayout", value="compact", id="radio-compact",  @change="setCompactEHRLayout")
            span &nbsp; {{ text.COMPACT_BUTTON_LABEL }}
          span &nbsp;
          label(class="clickable")
            input(type="radio", name='ehrLayout', v-model="ehrLayout", value="open", id="radio-regular",  @change="setOpenEHRLayout")
            span &nbsp; {{ text.OPEN_BUTTON_LABEL }}
      div(class="details-row")
        div(class="details-name") Enable automatic dark theme
        div(class="details-value")
          input(type="checkbox", id="allowDark", @input="setAllowDark", :checked="allowDark")
          label(for='creator') &nbsp; Dark them {{ allowDark ? 'will' : 'will not' }} sync with OS.
</template>

<script>
import OutsideCommon from '@/outside/views/OutsideCommon'
import UiInfo from '@/app/ui/UiInfo'
import UiButton from '@/app/ui/UiButton'
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import ZoneLmsButton from '@/outside/components/ZoneLmsButton'

export default {
  extends: OutsideCommon,
  components: { ZoneLmsButton, ZoneLmsPageBanner, UiButton, UiInfo },
  data () {
    return {
      text: Text.USER_SETTINGS_PAGE,
      appIcons: APP_ICONS,
      ehrLayout: 'open'
    }
  },
  computed: {
    userSettings () { return this.$store.getters['userStore/userSettings'] || {} },
    isCompactEhrLayout () {
      return this.userSettings.ehrLayout === 'compact'
    },
    isOpenEhrLayout () {
      return this.userSettings.ehrLayout === 'open'
    },
    allowDark () {
      return !!this.userSettings.allowDark
    }
  },
  methods: {
    setAllowDark () { return this.$store.dispatch('userStore/toggleAllowDark')},
    setCompactEHRLayout () { return this.$store.dispatch('userStore/setEhrLayout', 'compact')
    },
    setOpenEHRLayout () { return this.$store.dispatch('userStore/setEhrLayout', 'open')
    },
    async loadComponent () {
      console.log('load')
      this.ehrLayout = this.userSettings.ehrLayout
    }
  }
}
</script>
