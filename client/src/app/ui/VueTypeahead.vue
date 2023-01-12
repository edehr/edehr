<template lang='pug'>
  div
    input(
      class="typeahead-suggestions",
      :class="classes",
      :id = "domId",
      :disabled='disabled',
      :value="value",
      v-on:input="updateValue($event.target.value)",
      :placeholder="placeholder",
      onfocus="this.placeholder = ''"
      )
</template>
<script>
import typeahead from '@bryan-gilbert/typeahead-standalone'

export default {
  props: {
    classes: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    domId: { type: String, required: true },
    placeholder: { type: String, default: 'search for...' },
    source: {
      type: Object,
      default () { return { fnSrc: () => ['Greys', 'Brown', 'Black', 'Blue'], } }
    },
    showOnFocus: { type: Boolean, default: false },
    value: { type: String, default () {
      return ''
    }
    },
  },
  mounted: function () {
    this.initialize()
  },
  methods: {
    initialize () {
      const _this = this
      /// Set up a display cb so we can capture the click event on a row in the dropdown list.
      const displayCb = (item, evt) => {
        const isClick = evt ? evt.type === 'click' : undefined
        if (isClick) {
          const selected = item.label
          _this.$emit('selected', selected)
        }
        // console.log('vth display cb: ', item)
        return item.label ? item.label : item
      }
      const config = {
        className: 'ehr-typeahead',
        display: displayCb,
        highlight: true,
        input: document.getElementById(this.domId),
        limit: 100, // 100 happens to be the number of medications the lookahead-controller provides
        onSubmit (evt, suggestion) {
          if (suggestion) {
            _this.$emit('selected', suggestion.label)
          }
        },
        showOnFocus: this.showOnFocus,
        source: this.source,
      }
      typeahead(config)
    },
    updateValue: function (value) {
      // console.log('update value', value)
      this.$emit('selected', value)
    },
  }
}
</script>

<style lang='scss'>
@import '../../scss/definitions';

.typeahead-standalone .tt-hint {
  border: none;
  /* offset top to remove extra line around this "hidden" hint element*/
  top: -7px;
}

.typeahead-standalone .tt-hint,
.typeahead-standalone .tt-input {
  padding: 5px;
}
.typeahead-standalone.ehr-typeahead .tt-list {
  max-width: 30rem;
  width: 30rem !important;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5) !important;
  /* adds scrollbar when necessary.  Important to have the suggestion limit to be larger
   that the space so that the scrollbars appear.  I found that if the limit is
   too small (say 5) then scrollbars never show even if there are a 100 suggestions.*/
  max-height: 16rem;
  overflow: auto;

  .tt-suggestion {
    border-bottom: 1px solid #b5b5b5;
    padding: 3px 0 3px 10px;
  }
  // adding the nth selector creates a strange action when using down arrow to select items from the list.
  //.tt-suggestion:nth-child(even) {
  //  background-color: $table-row-even;
  //}
}

</style>
