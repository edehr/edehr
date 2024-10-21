<template lang='pug'>
  div
    div(class='eea')
      label(class='search-label') Search for lab tests
      VueSimpleSuggest(
        class='search-input',
        v-model="chosen"
        display-attribute="test"
        value-attribute="id"
        :list="getSuggestionList",
        @select="onSuggestSelect",
        )
</template>

<script setup>
import { ref } from 'vue'
import StoreHelper from '@/helpers/store-helper'
// eslint-disable-next-line no-unused-vars
import VueSimpleSuggest from 'vue-simple-suggest'  // https://www.npmjs.com/package/vue-simple-suggest
import 'vue-simple-suggest/dist/styles.css'

// reactive state
const chosen = ref('')
const emit = defineEmits(['selected'])

// eslint-disable-next-line no-unused-vars
const onSuggestSelect = (suggest) => {
  // VueSimpleSuggest handles ENTER differently than TAB. Both invoke this onSuggestSelect.
  // While TAB will let us clear the input box,  ENTER will reset the focus back into the input and retain the
  // input value even if we clear it.  So, to work around that we wait tiny amount and then perform the clear.
  // Note that nextTick() did not work.
  setTimeout(() => {
    chosen.value = ''
  }, 10)
  emit('selected', suggest)
}

let baseUrl = StoreHelper.apiUrlGet() + '/medLabTestLibrary/search/'

// eslint-disable-next-line no-unused-vars
const getSuggestionList = (inputValue) => {
  let url = baseUrl + encodeURIComponent(inputValue)
  return fetch(url)
    .then(response => response.json())
}
</script>

<style lang='scss'>
.eea {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}
.search-label {
  min-width: 15rem;
}
.search-input {
  width: 50%;
}
</style>
