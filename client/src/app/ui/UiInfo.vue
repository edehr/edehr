<template lang="pug">
  div(:class="$options.name")
    sup(:title="text")
      button(class="info-button", v-on:click="buttonClicked")
        fas-icon(class="info-icon", icon="info-circle")
    app-dialog(:isModal="false", v-show="showingDialog", :useSave="false", @cancel="cancelDialog")
      h3(slot="header") Information
      div(slot="body") {{ text }}
  
</template>

<script>
import AppDialog from '../components/AppDialogShell'

export default {
  name: 'UiInfo',
  components: {
    AppDialog
  },
  data: function() {
    return {
      showingDialog: false
    }
  },
  props: {
    text: { type: String }
  },
  methods: {
    buttonClicked: function() {
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.showingDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
.UiInfo {
  display: inline;
  margin-left: 10px;
  .info-button {
    padding: 0;
    border: none;
    border-radius: 50%; /* to encircle the circle icon*/
    height: 1em; /* to match height of fas icon*/
  }
  .info-icon {
    vertical-align: 0;
  }
}
</style>
