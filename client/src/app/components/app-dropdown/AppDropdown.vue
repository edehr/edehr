<template lang='pug'>
  div(class="app-dropdown")
    div(
      @click="toggle", class='titleBar'
      @keydown.esc="close",
      tabindex=0 )
      fas-icon(class="fa bars", icon="bars")
    div(v-show="showDropdown", class='dropdownWindow', ref='dropdownMenu')
      div(v-for="item in items", :key='item.label')
        hr(v-if="item.horizontal")
        app-dropdown-item(v-else, :itemDef='item', @dropdownEvent='dropdownEvent')
</template>

<script>
import AppShowHideIcon from '@/app/components/AppShowHideIcon'
import AppDropdownItem from '@/app/components/app-dropdown/AppDropdownItem'
const logit = false
export default {
  name: 'AppDropdown',
  components: { AppShowHideIcon, AppDropdownItem },
  props: {
    items: {type: Array},
  },
  data () {
    return {
      showDropdown: false,
    }
  },
  methods: {
    dropdownEvent (eventName) {
      if ( eventName ) {
        this.$emit(eventName)
      }
      this.$nextTick(() => {
        // will run after $emit is done
        this.close()
      })
    },
    close () {
      if(logit) console.log('close',this.outsideClickListener)
      // only close if the open has happened properly and completely
      if (this.outsideClickListener) {
        this.showDropdown = false
        this.removeOutsideListener()
      }
    },
    async open () {
      if(logit) console.log('open')
      this.showDropdown = true
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
        if(logit) console.log('after setTimeout ')
        this.addOutsideListener()
      }, 50)
    },
    addOutsideListener () {
      const element = this.$refs.dropdownMenu
      const isVisible = elem => !!elem && !!( elem.offsetWidth
        || elem.offsetHeight || elem.getClientRects().length )
      this.outsideClickListener = event => {
        if (!element.contains(event.target) && isVisible(element)) {
          // or use: event.target.closest(selector) === null
          if(logit) console.log('outside click -> close')
          this.close()
        }
      }
      if(logit) console.log('addEventListener outside click listener')
      document.addEventListener('click', this.outsideClickListener)
    },
    removeOutsideListener () {
      if (this.outsideClickListener) {
        if(logit) console.log('removeEventListener outside click listener')
        document.removeEventListener('click', this.outsideClickListener)
      }
    },
    toggle () {
      this.showDropdown ? this.close() : this.open()
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../../scss/definitions';
.fa {
  height: 1.5em;
  font-size: 1.6rem;
  color: $brand-primary;
  padding-left: 5px;
}
.titleBar {
  display: flex;
  //grid-template-columns: 1fr 1rem;
  line-height: 1.25rem;
  cursor: pointer;
  text-align: right;
}
.dropdownWindow {
  border-radius: 5px;
  border: 1px solid $grey60;
  padding: 1rem;
  position: absolute;
  z-index: 10;
  background-color: $white;
  color: $grey80;
}

/* mobile first */
.dropdownWindow {
  right: 0; /* keeps the drop down on the screen when window is small */
}
@media screen and (min-width: $main-width-threshold2) {
  .dropdownWindow {
    right: 2rem;
  }
}

</style>
