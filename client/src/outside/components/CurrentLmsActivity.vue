<template lang="pug">
  div
    h1 Current LMS activity
    table.table
      thead
        tr
          th Name
          th Value
      tbody
        tl
          td Course name
          td {{ activity.context_title }}
        tr
          td Course label
          td {{ activity.context_label }}
        tr
          td Course id
          td {{ activity.context_id }}
        tr
          td Activity name
          td {{ activity.resource_link_title }}
        tr
          td Activity description
          td {{ activity.resource_link_description }}
        tr
          td Activity id
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
    returnLabel () {
      return 'Return to ' + this.$store.getters['visit/lmsName']
    },
    returnUrl () {
      return this.$store.getters['visit/returnUrl']
    },
    activity () {
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
