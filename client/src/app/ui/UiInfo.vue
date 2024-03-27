<template lang="pug">
  div(class="UiInfo showing-labels")
    span(:title="text")
      button(class="info-button", v-on:click="buttonClicked")
        fas-icon(class="info-icon", icon="info-circle")
        span(v-if="linkText") &nbsp; {{linkText}}
    app-dialog(
      :isModal="false",
      ref="theDialog",
      :useSave="false",
      @cancel="cancelDialog",
      :cancelButtonLabel='ehrText.closeButtonLabel'
      )
      h2(slot="header", class='ui-info-title') {{ title }}
      div(slot="body", class='ui-info-body')
        p(v-html="content")

</template>

<script>
import AppDialog from '../components/AppDialogShell'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  name: 'UiInfo',
  components: {
    AppDialog
  },
  data: function () {
    return {
    }
  },
  props: {
    html: { type: String },
    title: { type: String },
    text: { type: String },
    linkText: { type: String }
  },
  computed: {
    ehrText () { return t18EhrText()},
    content () {
      return this.html ? this.html : this.text
    }
  },
  methods: {
    buttonClicked: function () {
      this.showingDialog = true
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.showingDialog = false
      this.$refs.theDialog.onClose()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
// see styles.scss for more
</style>
