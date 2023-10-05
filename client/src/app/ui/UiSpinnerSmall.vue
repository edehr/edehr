<template lang="pug">
  transition(name="fade")
    div(class="modal-mask", v-show="loading",
      :style="{ top: top + 'px', left: left + 'px', width: width + 'px', height: height + 'px' }"
      )
      div(class="modal-wrapper")
        div(class="modal-container is-centered")
          spinner(:speed="1.0", :depth="5", :size="100", :color="'$brand-primary'")
</template>

<script>
import Spinner from 'vue-spinner-component/src/Spinner.vue'

export default {
  data () {
    return {
      top: 0,
      left: 0,
      width: 100,
      height: 100
    }
  },
  props: {
    loading: { type: Boolean, default: false },
    refId: { type: String }
  },
  components: {
    Spinner
  },
  mounted () {
    const refElem = document.getElementById(this.refId)
    if (!refElem) {
      console.error('Coding error must provide id of element that this spinner is to overlap', this.refId)
      return
    }
    const offSets = refElem.getBoundingClientRect()
    this.left = offSets.left
    this.top = offSets.top
    this.width = offSets.width
    this.height = offSets.height

  }
}
</script>

<style lang="scss" scoped>

.fade-leave-active {
  transition: opacity .25s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.modal-mask {
  position: fixed;
  z-index: 999;
  opacity: 0.4;
  background-color: white;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  margin-left: auto;
  margin-right: auto;
  width: 120px;
  height: 120px;
  padding: 10px;
  border-radius: 60px;
  background-color: lightgrey;
}

</style>
