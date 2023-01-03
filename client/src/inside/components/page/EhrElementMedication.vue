<template lang="pug">
  vue-typeahead(
    :disabled="disabled",
    domId="medication-lookahead",
    :placeholder="ehrText.medicationPlaceholder",
    :source='medSource'
    :value="inputVal",
    @selected="updateValue",
    )
</template>

<script>
import VueTypeahead from '@/app/ui/VueTypeahead'
import StoreHelper from '@/helpers/store-helper'
import { ehrText } from '@/appText'

export default {
  components: { VueTypeahead },
  data () {
    return {
      ehrText: ehrText,
    }
  },
  props: {
    inputVal: { type: String },
    disabled: { type: Boolean }
  },
  computed: {
    medSource () {
      const url = StoreHelper.apiUrlGet() + '/lookahead/medicationsv2/'
      return {
        remote: {
          url: url + '%QUERY',
          wildcard: '%QUERY'
        },
        transform: (data) => {
          return data.map(m => m.name)
        }
      }
    },
  },
  methods: {
    updateValue: function (value) {
      // console.log('update value', value)
      this.$emit('selected', value)
    },
  }
}
</script>

