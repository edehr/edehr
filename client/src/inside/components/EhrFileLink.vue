<template lang="pug">
  div
    a(v-if="alink", target="_blank", :href="url")
      img(v-if="isImage", :src="url", class="thumbnail")
      div {{ name }}
    div(v-else)
      img(v-if="isImage", :src="url", class="thumbnail")
      div {{ name }}
</template>

<script>
import { isImageFile } from '@/helpers/ehr-utils'
import StoreHelper from '@/helpers/store-helper'

export default {
  props: {
    ehrFile: { type: Object },
    alink: { type: Boolean, default: true}
  },
  computed: {
    isImage () { return this.ehrFile ? isImageFile(this.ehrFile.fName) : false },
    name ()  { return this.ehrFile ? this.ehrFile.fName : '' },
    url () {
      const apiUrl = StoreHelper.apiUrlGet()
      const consumerId = StoreHelper.getAuthdConsumerId()
      // https://edehr.org/api/files/public/consumer/5f4824e9e2e063001e4b43a6/name/Morse-Fall-Scale-score.png
      return apiUrl + '/files/public/consumer/' + consumerId + '/name/' + this.name
    }
  },
}
</script>
