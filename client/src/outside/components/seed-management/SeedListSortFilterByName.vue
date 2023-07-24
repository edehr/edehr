<template lang='pug'>
  div(ref="dropdownMenu", @keydown.esc="close")
    ui-button(
      v-on:buttonClicked="toggle",
      title="Sort by name")
      fas-icon(v-for='icon in [appIcons.sortDesc]', :key="icon", class="fa", :icon="icon", :class='iconClass')
      span &nbsp; Name
    div COntent
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import UiButton from '@/app/ui/UiButton'

const debug = true
export default {
  components: { UiButton },
  props: {
  },
  data () {
    return {
      appIcons: APP_ICONS,
      show: false
    }
  },
  computed: {
  },
  methods: {
    toggle () {
      this.show ? this.close() : this.open()
    },
    async open () {
      if(debug) console.log('open')
      this.show = true
      /*
        Add a "outside this element click listener" to close the dropdown if the user
        clicks anywhere outside the dropdown.
        Based on https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
        But, use setTimeout to delay adding the outside click listener. This allows
        the current click event to complete. Do not use vue nexttick.
        nextTick only waits for the DOM rendering to complete and somehow,
        the addition of the listener to the document means that listener is given
        the current click event to process and that
        triggers the outside click listener which immediately closes the dropdown
       */
      setTimeout(() => {
        if(debug) console.log('after setTimeout ')
        this.addOutsideListener()
      }, 50)
    },
    close () {
      if(debug) console.log('close',this.outsideClickListener)
      // only close if the open has happened properly and completely
      if (this.outsideClickListener) {
        // this.$emit('close')
        this.show = false
        this.removeOutsideListener()
      }
    },
    addOutsideListener () {
      const element = this.$refs.dropdownMenu
      const isVisible = elem => !!elem && !!( elem.offsetWidth
        || elem.offsetHeight || elem.getClientRects().length )
      this.outsideClickListener = event => {
        if (!element.contains(event.target) && isVisible(element)) {
          // or use: event.target.closest(selector) === null
          if(debug) console.log('outside click -> close')
          this.close()
        }
      }
      if(debug) console.log('addEventListener outside click listener on element',element)
      document.addEventListener('click', this.outsideClickListener)
    },
    removeOutsideListener () {
      if (this.outsideClickListener) {
        if(debug) console.log('removeEventListener outside click listener')
        document.removeEventListener('click', this.outsideClickListener)
      }
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../../scss/definitions';

.dropdownWindow {
  position: absolute;
  z-index: 10;
  min-width: 16rem;
  right: 2rem;
}

/* mobile first */
.dropdownWindow {
  //right: 0; /* keeps the drop down on the screen when window is small */
}
@media screen and (min-width: $main-width-threshold2) {
  .dropdownWindow {
    //right: 2rem;
  }
}

</style>
