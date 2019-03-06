<template lang="pug">
  transition(name="dialog")
    div
      div(:class="modalClass")
      div(class="dialog-wrapper")
        div(class="dialog-header columns")
          div(class="dialog-header-element column is-11")
            slot(name="header") default header
          div(class="dialog-header-element  column is-1")
            ui-close(v-on:close="$emit('cancel')")
        div(class="dialog-container")
          div(class="dialog-body")
            slot(name="body") default body
          div(class="dialog-footer")
            div(class="dialog-footer-errors")
              div(v-show="errors.length")
                p {{ errorDirections }}
                ul
                  li(v-for="error in errors") {{ error }}
            div(class="dialog-footer-content is-pulled-right")
              ui-button(v-on:buttonClicked="$emit('cancel')", v-bind:secondary="true")
                slot(name="cancel-button") {{ cancelButtonLabel }}
              div(class="dialog-footer-button-space", v-show="useSave")
              ui-button(v-on:buttonClicked="$emit('save')", v-show="useSave")
                slot(name="save-button") {{ saveButtonLabel }}
</template>

<script>
import UiClose from '../ui/UiClose'
import UiButton from '../ui/UiButton'
export default {
  name: 'AppDialog',
  components: {
    UiClose,
    UiButton
  },
  props: {
    isModal: { type: Boolean, default: false },
    useSave: { type: Boolean, default: true },
    saveButtonLabel: {
      type: String,
      default: 'Save'
    },
    cancelButtonLabel: {
      type: String,
      default: 'Cancel'
    },
    errorDirections: {
      type: String,
      default: 'Correct the following:'
    },
    errors: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    saveEnabled () {
      return false
    },
    modalClass: function () {
      return {
        'modal-mask': this.isModal
      }
    }
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.modal-mask {
  position: fixed;
  z-index: 990;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: table;
  transition: opacity 0.3s ease;
}

.dialog-wrapper {
  position: fixed;
  // See the data properties
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1024px;
  max-height: 90%;
  overflow: auto;
  z-index: 999;
  background-color: $dialog-wrapper-background-color;
  border: solid 1px;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 15px 30px;
}

.dialog-wrapper.moused {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.dialog-container {
  overflow: hidden;
}

.dialog-header {
}

.dialog-header-element {
  padding: 0;
}
.dialog-body {
  /*margin: 20px 0;*/
  /*width: 100%;*/
}

.dialog-footer {
  margin-top: 30px;
  align-items: flex-end;
  .dialog-footer-content {
    flex-grow: 1;
    button,
    .button {
      margin-bottom: 0;
    }
  }
  .dialog-footer-errors li {
    /*margin-left: 5px;*/
  }
  .dialog-footer-button-space {
    display: inline-block;
    width: 10px;
  }
}

/* **********
Cursors
*/
.n-resize {
  cursor: n-resize;
}
.e-resize {
  cursor: e-resize;
}
.s-resize {
  cursor: s-resize;
}
.w-resize {
  cursor: w-resize;
}
.ns-resize {
  cursor: ns-resize;
}
.ew-resize {
  cursor: ew-resize;
}
.ne-resize {
  cursor: ne-resize;
}
.nw-resize {
  cursor: nw-resize;
}
.se-resize {
  cursor: se-resize;
}
.sw-resize {
  cursor: sw-resize;
}

/* *******
  * The following styles are auto-applied to elements with
  * transition="dialog" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the dialog transition by editing
  * these styles.
  */

.dialog-enter {
  opacity: 0;
}

.dialog-leave-active {
  opacity: 0;
}

.dialog-enter .dialog-container,
.dialog-leave-active .dialog-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
