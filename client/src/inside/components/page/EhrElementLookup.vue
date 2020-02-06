<template lang="pug">
  vue-autosuggest(
    ref="autocomplete",
    :suggestions="suggestions",
    :inputProps="inputProps",
    @input= "fetchResults",
    :sectionConfigs="sectionConfigs",
    :renderSuggestion="renderSuggestion",
    :getSuggestionValue="getSuggestionValue",
    :value="inputVal",
    :disabled="disabled"
  )
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import StoreHelper from '../../../helpers/store-helper'
import axios from 'axios'

export default {
  components: {
    VueAutosuggest
  },
  data () {
    const apiUrl = StoreHelper.apiUrl()
    const base = apiUrl + '/lookahead/medications/'
    // console.log('Using url ', base)
    return {
      showDetails: true, // set true/false to show/hide details about the selected results
      timeout: null,
      searchTerm: this.inputVal,
      selected: this.inputVal,
      resultCount: 0,
      debounceMilliseconds: 50,
      medicationsUrl: base,
      inputProps: {
        id: 'autosuggest__input',
        placeholder: 'Enter medication name',
        class: 'form-control',
        name: 'autosuggest'
      },
      suggestions: [],
      sectionConfigs: {
        medications: {
          // limit: 16,
          onSelected: selected => {
            this.$emit('selected', selected.item.name)
          }
        }
      }
    }
  },
  props: {
    lookaheadKey: { type: String },
    inputVal: { type: String },
    disabled: { type: Boolean }
  },

  watch: {
    inputVal (curr) {
      if(curr === '') {
        this.suggestions = []
      }
    }
  },

  computed: {
    dropDownTitle () {
      return 'Found ' + this.resultCount + ' possible matches'
    }
  },
  methods: {
    fetchResults (val) {
      // console.log('input changed', val)
      if (val.length <= 2) {
        this.suggestions = []
        this.selected = ''
        return
      }
      this.searchTerm = val
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        const url = this.medicationsUrl + val
        // console.log('get', url)
        const usersPromise = axios.get(url)
        Promise.all([usersPromise]).then(values => {
          this.suggestions = []
          this.selected = ''
          const data = values[0].data
          // console.log('rdata', data)
          this.resultCount = data.count
          // console.log('resultCount', data.count, this.resultCount)
          const medications = data.medications
          medications.length &&
            this.suggestions.push({ name: 'medications', data: medications })
        })
      }, this.debounceMilliseconds)
    },
    renderSuggestion (suggestion) {
      const searchTerm = this.searchTerm
      const re = new RegExp(searchTerm, 'ig')
      const str = suggestion.item.name
      const result = re[Symbol.split](str)
      const html = []
      for (let i = 0; i < result.length; i++) {
        const part = result[i]
        if (part.trim().length > 0) {
          html.push(<span>{part}</span>)
        }
        if (i + 1 < result.length) {
          html.push(<span class="searchHighlight">{searchTerm}</span>)
        }
      }
      return html
    },
    getSuggestionValue (suggestion) {
      return suggestion.item.name
    }
  }
}
</script>

<style>
  .searchHighlight {
    color: red;
    font-weight: bold;
  }
  #autosuggest__input {
    outline: none;
    position: relative;
    display: block;
    padding: 3.5px;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  #autosuggest__input.autosuggest__input--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .autosuggest__results {
    /*font-weight: 300;*/
    margin: 0;
    position: absolute;
    z-index: 10000001;
    background: #d6e9c6;
    width: 100%;
    border: 1px solid #e0e0e0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 5px;
    max-height: 400px;
    overflow-y: auto;
  }

  .autosuggest__results ul {
    list-style: none;
    margin: 0;
  }

  .autosuggest__results-item {
    cursor: pointer;
    padding-left: 15px;
  }

  .autosuggest__results-before {
    font-weight: bold;
    color: gray;
    margin-left: 0;
    padding: 5px 0 5px;
    bottom: 1px solid lightgray;
  }

  .autosuggest__results-item:active,
  .autosuggest__results-item:hover,
  .autosuggest__results-item:focus,
  .autosuggest__results-item--highlighted {
    background-color: #f6f6f6;
  }
</style>
