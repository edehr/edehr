<template lang="pug">
  transition(name="dialog")
    div(v-show="showingDialog")
      div(:class="modalClass", :style="{ zIndex: modalZ }")
      div(class="dialog-wrapper",
        :class="{ dragActive: moused, draggable: true, fullScreen: fullScreen }",
        ref="theDialog",
        :style="{ top: top + 'px', left: left + 'px', zIndex: modalD }")
        // header
        div(class="dialog-header", v-dragged="onDragged")
          // header title with buttons
          div(class="dialog-header-title")
            div
              slot(name="header") default header
            div(class="dialog-header-buttons")
              ui-button(v-on:buttonClicked="$emit('cancel')", v-bind:secondary="true")
                slot(name="cancel-button") {{ cancelButtonLabel }}
              div(v-show="useSave")
                span &nbsp;
                ui-button(v-on:buttonClicked="$emit('save')", :disabled="disableSave", ref='saveButton')
                  slot(name="save-button") {{ saveButtonLabel }}
          // header important content from outter container
          div
            slot(name="header-extra-content")
        // main body
        div(class="dialog-body", ref="theDialogBody",)
          slot(name="body") default body
        div(class='dialog-footer')
          // header error list
          div(v-show="errors.length", class="error-color")
            span Correct the following:
            span(v-for="err in errors", :key="err") &nbsp;&nbsp;&nbsp; {{err}},

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
    fullScreen: { type: Boolean, default: false },
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
    errors: {
      type: Array,
      default: function () {
        return []
      }
    },
    hasFooterContent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
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
      showTopButtons: false,
      top: 0,
      left: 0,
      modalD: 901,
      modalZ: 900,
    }
  },
  methods: {
    focusOnSave () {
      this.$refs.saveButton.$el.focus()
    },
    onDragged ({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      // if (this.fullScreen) return
      // Change top/left position based on drag
      // console.log('on drag', 'deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last' )
      // console.log('on drag first, last', first, last )
      if (first || last) {
        // When drag starts 'first' exists. When drag stops 'first' does not exist.
        // Set the is being moused flag to trigger drag styling
        this.moused = !!first
        // console.log('on drag this.moused STOP', this.moused )
        return
      }
      // console.log('on drag this.moused', this.moused )
      // let d = this.$refs.theDialog
      // let br = d.getBoundingClientRect()
      // console.log('getBoundingClientRect', br)
      this.left += deltaX
      this.top += deltaY
      this.top = Math.max(this.top, 0)
    },
    onOpen () {
      if (this.isModal) {
        // add is-modal class to body to prevent the background from scrolling.  See .is-modal css in main styles.css
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
      // if (this.isModal) {
      // console.log('UN -- FREEZEEEEEEE')
      // to be safer than sorry just remove modals on close and remove all too
      document.body.className = document.body.className.replaceAll(' is-modal', '')
      // }
    },
    reset () {
      // if the window is smaller than the threshold defined in the CSS then set the left side to 0
      // $main-width-threshold2: 650px;
      const threshold = 650
      // Set the top/left position based on window and dialog dimensions
      let d = this.$refs.theDialog
      let ew = d.clientWidth
      let eh = d.clientHeight
      let ww = window.innerWidth
      let wh = window.innerHeight
      let mx = ww > threshold ? (ww - ew) / 2 : 0
      let my = (wh - eh) / 8
      my = Math.max(my, 5) // don't let top disappear
      // console.log('The Dialog w', ww, ew, mx, d)
      // console.log('The Dialog h', wh, eh, my, d)
      this.left = this.fullScreen ? 5 : mx
      this.top = my
      // let db = this.$refs.theDialogBody
      // let dbh = db.clientHeight
      // this.showTopButtons = dbh > 200
    }
  },
  mounted () {
    this.$store.dispatch('system/appDialogCountIncrement')
    const cnt = this.$store.getters['system/appDialogCount']
    this.modalD = cnt + 901
    this.modalZ = cnt + 900
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
  z-index: 999;
  position: fixed;
  /*   For top and see the data properties. For width only set the min and let the content decide the rest */
  min-width: $dialog-width-threshold;
  max-width: 70rem;
  max-height: 90%;
  display: flex;
  flex-flow: row wrap;
  flex: 1 100%;
  font-size: 1rem;
  font-weight: normal;
  background-color: $dialog-wrapper-background-color;
  border: 1px solid $grey40;
  border-radius: 5px;
  box-sizing: border-box;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.dialog-body {
  padding: 1rem;
  margin-bottom: 0;
  max-height: calc(80vh - 6rem);
  width: 100%;
  border-bottom: 1px solid #2d2d2d;
  overflow-y: auto;
  overflow-x: hidden;
}
.dialog-footer {
  height: 3rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  overflow-y: auto;
}
.dialog-header{
  width: 100%;
  //max-height: 6rem;
  overflow-y: hidden;
  background-color: $grey03;
  border-bottom: 1px solid $grey30;
  padding: 0.5rem 1rem 0.5rem 1rem;
  //margin-bottom: 1rem;
  touch-action: none;
}
.draggable {
  cursor: move;
}
.fullScreen { // over rides .dialog-wrapper
  font-size: 1.25rem;
  max-width: 98%;
  max-height: 96%;
  .dialog-body {
    max-height: calc(86vh - 6rem);
  }
}

::v-deep(.dialog-header h2),
::v-deep(.dialog-header h3){
  margin: 0;
}

.dialog-header-title {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: $main-width-threshold1){
  .dialog-header-title {
    display: flex;
    flex-direction: column;
  }
  .dialog-header {
    max-height: 12rem;
  }
}

@media screen and (max-width: $dialog-width-threshold){
  .dialog-wrapper{
    min-width: inherit;
    max-width: 100%; /* fit the contents to the screen */
  }
  .dialog-content {
    min-width: inherit;
    max-width: inherit;
  }
  .dialog-header {
    max-height: inherit; /* let the patient banner height fit the content */
  }
}

.dragActive {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
}

.error-color {
  color: red;
}

.dialog-header-buttons {
  display: flex;
  justify-content: flex-end;
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
