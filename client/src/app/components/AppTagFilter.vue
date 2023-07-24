<template lang='pug'>
  div(ref="dropdownMenu", @keydown.esc="close",)
    ui-table-header-button(
      v-on:buttonClicked="toggle",
      title="Filter by tags")
      fas-icon(class="fa", :icon="appIcons.filter")
    multi-checkbox(
      v-show="show",
      :options="tagMap",
      :value="selectedTagMap"
      @update:value="updated"
      )
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import MultiCheckbox from '@/outside/components/multi-select/MultiCheckbox'
import UiTableHeaderButton from '@/app/ui/UiTableHeaderButton.vue'

const debug = false
export default {
  components: { UiTableHeaderButton, MultiCheckbox },
  props: {
    selectedTags: {
      type: Array
    },
  },
  data () {
    return {
      appIcons: APP_ICONS,
      show: false
    }
  },
  computed: {
    allTagList () { return this.$store.getters['seedListStore/allTagList']},

    tagMap () {
      return this.allTagList.map((p, i) => {
        return { name: p, id: i }
      })
    },
    selectedTagMap () {
      const results = []
      this.allTagList.forEach((p, i) => {
        this.selectedTags.includes(p) ? results.push(i) : ''
      })
      return results
    },
  },
  methods: {
    updated (value) {
      const results = []
      this.allTagList.forEach((p, i) => {
        value.includes(i) ? results.push(p) : ''
      })
      this.$emit('update:tags', results)
    },
    toggle () {
      this.show ? this.close() : this.open()
    },
    async open () {
      if(debug) console.log('open')
      this.show = true
      /*
        Add an "outside this element click listener" to close the dropdown if the user
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
@import '@/scss/definitions';
.dropdownWindow {
  position: absolute;
  z-index: 10;
}
</style>
