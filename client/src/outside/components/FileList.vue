<template lang="pug">
  div
    div(v-if="authorized")
      div(v-show="hasFiles", class="list-body")
        h2 Images
        div(class="rows")
          div(v-for="file in imageFiles", class="row card columns list-element")
            div(class="column is-1")
              a(:href="file.url", target="_blank")
                img(:src="file.url", class="thumbnail")
            div(class="column")
              a(:href="file.url", target="_blank")  {{file.fName}}
        h2 Other file types
        div(class="rows")
          div(v-for="file in otherFiles", class="row card columns list-element")
            div(class="column is-1")
            div(class="column")
              a(:href="file.url", target="_blank")  {{file.fName}}


      div(class="controls")
        ui-button(v-on:buttonClicked="refresh") Refresh
      div(v-show="errorMessage", class="error-msg") {{ errorMessage }}
    div(v-else)  You are not authorized to upload files.
</template>
<script>
import axios from 'axios'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

export default {
  components: { UiButton  },
  data () {
    return {
      imageFiles: [],
      otherFiles: [],
      errorMessage: '',
    }
  },
  computed: {
    hasFiles () { return this.imageFiles.length > 0 || this.otherFiles.length > 0},
    authorized () {
      // TODO add check for is instructor too
      const authData = StoreHelper.getAuthDataSync()
      return !!authData
    },
  },
  methods: {
    async getFileList (){
      const apiUrl = StoreHelper.apiUrlGet()
      const consumer = StoreHelper.toolConsumerId()
      if (!consumer) {
        StoreHelper.setApiError('No tool consumer id so can not do file listing.')
        return
      }
      const url = apiUrl + '/files/list'
      await axios.get(url)
        .then((res) => {
          const fileNames = JSON.parse(res.data)
          // sort
          fileNames.sort( (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          // get file names of image files
          const imageNames = fileNames.filter( (fName) => {
            let fExt = fName.split('.').pop().toLowerCase()
            return /jpeg|jpg|png|gif|tiff|tif|bmp/.test(fExt)
          })
          // get all the other file names (not images)
          const otherNames = fileNames.filter ( fName => imageNames.indexOf(fName) < 0)
          // compose the data structure for each file
          const map = (fName) => {
            return {
              fName: fName,
              url: apiUrl + `/files/public/${fName}/consumer/${consumer}`
            }
          }
          this.imageFiles = imageNames.map((fName) => map(fName) )
          this.otherFiles = otherNames.map((fName) => map(fName) )
        })
        .catch( (error) => {
          this.errorMessage = error
          if (error.response)
            this.errorMessage = error.response.data.message
        })
    },
    refresh () { this.getFileList() }
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      _this.getFileList()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.list-body {
}
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}

.thumbnail {
  border: 1px solid black;
  width: 100px;
  height: 100px;
}
.error-msg {
  color: $error;
}
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}
</style>
