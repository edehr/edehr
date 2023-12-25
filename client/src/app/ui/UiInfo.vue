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

.UiInfo {
  display: inline;
  margin-left: 4px;
  margin-right: 5px;
  .info-button {
    background: none;
    color: $grey40;
    line-height: 0;
    padding: 0;
    border: none;
    border-radius: 50%; /* to encircle the circle icon*/
    height: .85em; /* to match height of fas icon*/

    span {
      color: $blue;
    }
  }
  .info-icon {
    vertical-align: -2px;
    &:hover {
      color: $black;
      cursor: pointer;
    }
  }
  .ui-info-body,
  .ui-info-title {
    text-align: left;
  }
}
</style>
