<template lang="pug">
  div(:class="$options.name")
    span(:title="text")
      button(class="info-button", v-on:click="buttonClicked")
        fas-icon(class="info-icon", icon="info-circle")
    app-dialog(:isModal="false", ref="theDialog", :useSave="false", @cancel="cancelDialog")
      h3(slot="header") {{ title }}
      div(slot="body", v-html="content")
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'

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
    text: { type: String }
  },
  computed: {
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
  margin-left: 8px;
  .info-button {
    background: none;
    color: $grey40;
    line-height: 0;
    padding: 0;
    border: none;
    border-radius: 50%; /* to encircle the circle icon*/
    height: .85em; /* to match height of fas icon*/
  }
  .info-icon {
    vertical-align: -2px;

    &:hover {
      color: $black;
      cursor: pointer;
    }
  }
}
</style>
