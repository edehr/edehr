<template lang="pug">
  div(class="columns is-centered")
    section(v-if="canAccessDemo", class="content")
      h2(class="has-text-centered") {{ ehrOnlyDemoText.title }}
      div
        div(v-text-to-html="ehrOnlyDemoText.intro")
      div
        div(v-text-to-html="ehrOnlyDemoText.explanation")
      div(class="columns is-centered")
        ui-button(v-on:buttonClicked="gotoDemo()", title='Enter the EHR') {{ ehrOnlyDemoText.enterEHRButtonLabel }}
      div &nbsp;
      //div
      //  div(v-text-to-html="ehrOnlyDemoText.after")

    div(v-else)
      p {{ ehrOnlyDemoText.noAccess }}

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import { ehrOnlyDemoText } from '@/appText'

export default {
  components: {
    UiButton, UiLink
  },
  data () {
    return {
      ehrOnlyDemoText: ehrOnlyDemoText
    }
  },
  computed: {
    canAccessDemo () {
      return !StoreHelper.isDemoMode()
    }
  },
  methods: {
    gotoDemo: function () {
      this.$router.push('/ehr')
    }
  },
}
</script>

<style lang="scss" scoped>
  .content {
    font-size: 1.2rem;
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
  }
  select {
    width: 15rem;
  }

</style>
