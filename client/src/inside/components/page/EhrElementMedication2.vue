<template>
  <div id="ehr-element-medication-v2">
    <vue-autosuggest
      ref="autocomplete"
      v-model="query"
      :suggestions="suggestions"
      :inputProps="inputProps"
      :sectionConfigs="sectionConfigs"
      :renderSuggestion="renderSuggestion"
      :shouldRenderSuggestions="shouldRenderSuggestions"
      :getSuggestionValue="getSuggestionValue"
      @selected="onSelected"
      @input="fetchResults"
      @focus="autoSuggestHasFocus = true"
      @keydown.tab="autoSuggestHasFocus = false"
    />
    <div v-if="selected" style="margin-top: 10px">
      You have selected:
      <code>
        <pre>{{ JSON.stringify(selected, null, 4) }}</pre>
      </code>
    </div>
  </div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import axios from 'axios'
import { h } from 'vue'
import StoreHelper from '@/helpers/store-helper'
import { getCurrentMedicationDb } from '@/helpers/med-db-utils'
import { extractMedName } from '@/ehr-definitions/med-definitions/medOrder-model'
/*
https://codesandbox.io/p/sandbox/vueautosuggest-api-fetching-forked-ryk5pq?file=%2FApp.vue%3A13%2C31
https://codesandbox.io/p/sandbox/vueautosuggest-api-fetching-forked-ryk5pq?file=%2FApp.vue%3A118%2C55-118%2C56

API to fetch details about a medication
https://en.wikipedia.org/api/rest_v1/page/summary/Barbituric_acid
Adding @focus="autoSuggestHasFocus = true" so that TAB closes suggestion list
Use @keydown.tab rather than @blur because using @blur disables click select option

 */
export default {
  name: 'app',
  components: {
    VueAutosuggest,
  },
  data () {
    return {
      query: '',
      autoSuggestHasFocus: false,
      results: [],
      timeout: null,
      selected: null,
      debounceMilliseconds: 250,
      inputProps: { // these are bound onto the <input element
        id: this.domId,
        placeholder: 'Search by name or purpose.',
        class: 'form-control',
        name: this.domId,
      },
      suggestions: [],
      sectionConfigs: {
        default: {
          // need this default section with onSelected to handle ENTER keypress.
          limit: 6,
          onSelected: function (item, originalInput) {
            console.log('onSelected - default', originalInput, item)
          },
        },
        medications: {
          limit: 200,
          label: 'Medications',
          onSelected: (selected) => {
            console.log('onSelected - medications', selected)
            this.selected = selected.item
            this.$emit('selected', this.selected)
          },
        },
      },
    }
  },
  props: {
    domId: { type: String },
    inputVal: [Object, String]
  },
  computed: {
    source () { return getCurrentMedicationDb() }
  },
  methods: {
    onSelected (selected) {
      console.log('component method onSelected', selected)
      this.selected = selected.item
    },
    shouldRenderSuggestions (size, loading) {
      return this.autoSuggestHasFocus && size >= 0 && !loading
    },
    fetchResults () {
      if (!this.query) {
        this.suggestions = []
        this.selected = null
        return
      }
      const query = this.query
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        let queryUrl = StoreHelper.apiUrlGet() + '/lookahead/medicationsV3'
        queryUrl += '?src=' + this.source
        // encode the text to safely send characters like '/'
        queryUrl += '&term=' +encodeURIComponent(query)
        axios.get(queryUrl).then((values) => {
          // console.log('--- Received ', values.data.length, 'results')
          this.suggestions = []
          this.selected = null
          values.data &&
          this.suggestions.push({ name: 'medications', data: values.data })
        })
      }, this.debounceMilliseconds)
    },
    renderSuggestion ( suggestion ) {
      let term = this.query.toLowerCase()
      if (!suggestion.item) {
        // console.log(' render sugg no item', suggestion)
        return ''
      }
      if (!term || term === '') {
        this.query = ''
        this.suggestions = []
        this.selected = null
        return ''
      }
      let name = suggestion.item.med
      let thera = suggestion.item.thD
      let combined = name + ' (' + thera + ')'
      let parts = []
      let index = combined.toLowerCase().indexOf(term)
      const maxParts = 10
      let cnt = 0
      while (index >= 0 && cnt < maxParts) {
        let p1 = combined.substring(0, index)
        let p2 = combined.substring(index, index + term.length)
        p1.length > 0 ? parts.push((<span>{p1}</span>)) : null
        parts.push((<strong>{p2}</strong>))
        combined = combined.substring(index + term.length)
        index = combined.toLowerCase().indexOf(term)
        cnt++ //prevent infinite loop
      }
      if (combined.length > 0) {
        parts.push((<span>{combined}</span>))
      }
      return h('div', parts)
    },
    getSuggestionValue (suggestion) {
      // console.log('----suggestion.item',suggestion.item)
      // extract the value to display, from the data object.
      return suggestion.item.med
    },
  },
  watch: {
    inputVal () {
      this.query = extractMedName(this.inputVal)
    }
  }
}
</script>

<style>
/* style must not be scoped so that it can apply to the inner autosuggest element */
#autosuggest__input {
  outline: none;
  position: relative;
  display: block;
  border: 1px solid #616161;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  position: relative;
  width: 100%;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0;
  max-height: 30rem;
  overflow-y: scroll;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
  padding: 5px;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results-before {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 5px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results-item:active,
.autosuggest__results .autosuggest__results-item:hover,
.autosuggest__results .autosuggest__results-item:focus,
.autosuggest__results .autosuggest__results-item.autosuggest__results-item--highlighted
{
  background-color: #dddddd;
}
</style>
