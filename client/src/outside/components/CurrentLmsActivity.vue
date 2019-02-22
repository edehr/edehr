<template lang="pug">
  div
    h1 Current LMS Activity
    table.table
      thead
        tr
          th Name
          th Value
      tbody
        tr
          td Course Name
          td {{ activity.context_title }}
        tr
          td Course Label
          td {{ activity.context_label }}
        tr
          td Course Id
          td {{ activity.context_id }}
        tr
          td Activity Name
          td {{ activity.resource_link_title }}
        tr
          td Activity Description
          td {{ activity.resource_link_description }}
        tr
          td Activity Id
          td {{ activity.resource_link_id }}
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink'
export default {
  name: 'OutPanelNav',
  components: {
    UiButton,
    UiLink
  },
  computed: {
    returnLabel() {
      return 'Return to ' + this.$store.getters['visit/lmsName']
    },
    returnUrl() {
      return this.$store.getters['visit/returnUrl']
    },
    activity() {
      return this.$store.state.ehrData.sActivityData
    }
  }
}
</script>

<style lang="scss" scoped>
.OutPanelNav {
  &__nav {
    display: inline;
    margin-right: 1rem;

    span {
      display: inline;
      margin-left: 1rem;
    }
  }
}
</style>
