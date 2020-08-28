<template lang="pug">
  div
    div(v-if="authorized")
      div(v-show="hasFiles", class="list-body")
        h2 Images
        div(class="list-images-container")
          div(v-for="file in imageFiles", class="list-element image-element")
            ehr-file-link(:ehrFile="file")
        h2 Files
        div(class="list-files-container")
          div(v-for="file in otherFiles", class="list-element")
            ehr-file-link(:ehrFile="file")

      div(v-show="errorMessage", class="error-msg") {{ errorMessage }}
    div(v-else)  You are not authorized to upload files.
</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import EhrFileLink from '@/inside/components/EhrFileLink'
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

export default {
  components: { EhrFileLink },
  data () {
    return {
    }
  },
  computed: {
    hasFiles () { return this.imageFiles.length > 0 || this.otherFiles.length > 0},
    errorMessage () { return StoreHelper.getFileListErrorMessage() },
    imageFiles () { return StoreHelper.getFileListImages() },
    otherFiles () { return StoreHelper.getFileListOther() },
    authorized () {
      // TODO add check for is instructor too
      const authData = StoreHelper.getAuthData()
      return !!authData
    },
  },
  methods: {
    refresh () { StoreHelper.refreshFileLists(StoreHelper.toolConsumerId()) }
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      _this.refresh()
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
.list-images-container {
  display: flex;
  flex-flow: row wrap;
  margin: 0;
}
.list-files-container {
  display: flex;
  flex-flow: column wrap;
  margin: 0;
}
.list-element {
  flex: 0 0 auto;
  background: $grey10;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
}
.image-element {
  flex: 0 0 200px;
  padding: 1rem 1.5rem;
  /*height: 120px;*/
}
.error-msg {
  color: $error;
}

</style>
