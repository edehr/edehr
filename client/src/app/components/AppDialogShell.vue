<template lang="pug">
  transition(name="dialog")
    div(v-show="showingDialog")
      div(:class="modalClass")
      div(class="dialog-wrapper", :class="moused", ref="theDialog", v-bind:style="{ top: top + 'px', left: left + 'px'}")
        div(class="dialog-move-bar", v-dragged="onDragged")
        div(class="dialog-header")
          slot(name="header") default header
          ui-close(v-on:close="$emit('cancel')")
        div(class="dialog-body")
          slot(name="body") default body
        div(class="dialog-footer")
          div(class="dialog-footer-errors is-pulled-left")
            div(v-show="errors.length")
              span {{ errorDirections }} 
              span(v-for="(error, index) in errors.join(', ')", class="error-color")
                span {{ error }}

          div(class="dialog-footer-content")
            div(v-if="hasLeftButton" class="is-pulled-left")
              slot(name="left-button")
            div(class="is-pulled-right")
              ui-button(v-on:buttonClicked="$emit('cancel')", v-bind:secondary="true")
                slot(name="cancel-button") {{ cancelButtonLabel }}
              div(class="dialog-footer-button-space", v-show="useSave")
              ui-button(v-on:buttonClicked="$emit('save')", v-show="useSave", :disabled="disableSave")
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
    disableSave: { type: Boolean, default: false },
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
    },
    hasLeftButton: {
      type: Boolean,
      default: false
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
    return {
      moused: false,
      showingDialog: false,
      top: 0,
      left: 0
    }
  },
  methods: {
    onDragged ({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      // Change top/left position based on drag
      // console.log('on drag', 'deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last' )
      // console.log('on drag', deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last )
      if (first || last) {
        // When drag starts 'first' exists. When drag stops 'first' does not exist.
        // Set the is being moused flag to trigger drag styling
        this.moused = !!first
        return
      }
      let d = this.$refs.theDialog
      let br = d.getBoundingClientRect()
      console.log('getBoundingClientRect', br)
      this.left += deltaX
      this.top += deltaY
    },
    onOpen () {
      if (this.isModal) {
        // console.log('FREEZEEEEEEE')
        document.body.className += ' is-modal'
      }
      // wait a tick and then reset size. This accounts for the rendering engine to completely populate the dialog
      const _this = this
      _this.showingDialog = true
      this.$nextTick(function () {
        _this.reset()
      })
    },
    onClose () {
      this.showingDialog = false
      if (this.isModal) {
        // console.log('UN -- FREEZEEEEEEE')
        const replacedClass = document.body.className.replace(' is-modal','')
        document.body.className = replacedClass
      }
    },
    reset () {
      // Set the top/left position based on window and dialog dimensions
      let d = this.$refs.theDialog
      let ew = d.clientWidth
      let eh = d.clientHeight
      let ww = window.innerWidth
      let wh = window.innerHeight
      let mx = (ww - ew) / 2
      let my = (wh - eh) / 2
      // console.log('The Dialog w', ww, ew, mx, d)
      // console.log('The Dialog h', wh, eh, my, d)
      this.left = mx
      this.top = my
    }
  },
  mounted: function () {
    // Trigger the reset but wait until all rendering is done in case there are elements that have not yet been sized.
    // const _this = this
    // this.$nextTick(function () {
    //   _this.reset()
    // })
  }
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
  /*   For top and see the data properties */
  min-width: 700px;
  max-width: 1024px;
  min-height: 40vh;
  z-index: 999;
  background-color: $dialog-wrapper-background-color;
  border: 1px solid $grey40;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.dialog-wrapper.moused {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.dialog-move-bar {
  background-color: $grey40;
  width: 100%;
  height: 1vh;
  cursor: move;
}

.dialog-header, .dialog-footer {
  background-color: $grey03;
  height: 60px;
  padding: 1em 2em;
}

.dialog-body {
  overflow-y: auto;
  max-height: calc( 90vh - 20vh );
  padding: 1.5rem 2rem 2rem 2rem;
  margin-bottom: 4rem;
}

.dialog-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /*margin-top: 30px;*/
  align-items: flex-end;
  .dialog-footer-content {
    flex-grow: 1;
    button,
    .button {
      margin-bottom: 0;
    }
  }
  .dialog-footer-errors {
    /*margin-left: 5px;*/
    display: inline-block;
    max-width: 62%;
  }
  .error-color {
    color: red;
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

<style>
  /*  
    This is needed in order to fix potential conflicts which may occur
      when setting the parent element's position to fixed in child components
      that have display: flex set. It has been set in a separated style tag
      so that this style is accessible to the body's scope
  */
  .is-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 100%
  }
  
</style>
