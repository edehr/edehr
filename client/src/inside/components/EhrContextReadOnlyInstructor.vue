<template lang="pug">
  div(class="classlist", v-show="showClassList")
    div(class="classlist_content columns")
      div(class="is-8 column") You are currently viewing 
        b {{ panelInfo.activityTitle }}
        span  in read only mode.
    div
        router-link(to="/instructor") Go back to courses page
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiInfo from '../../app/ui/UiInfo'
import UiLink from '../../app/ui/UiLink'
import EhrEvaluationInput from './EhrEvaluationInput'
import StoreHelper from '../../helpers/store-helper'

export default {
  name: 'EhrClassListNav',
  components: { UiLink, UiButton, EhrEvaluationInput, UiInfo },
  data: function () {
    return {
      shouldConfirmNavigation: false,
      navigation: ''
    }
  },
  computed: {
    showClassList () {
      return true
    },
    panelInfo () {
      return StoreHelper.getPanelData()
    },
  },
}
</script>
