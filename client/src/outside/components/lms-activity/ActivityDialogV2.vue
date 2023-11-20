<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      :disableSave="disableSave",
      has-left-button
    )
      h2(slot="header").
        {{ disableSave ? 'Select EdEHR content' : 'Selected ' + selectedObj.name }}
      div(slot="body")
        learning-object-select-component(ref="lobjSelector", @selected='selectLobj')
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import LearningObjectSelectComponent from '@/outside/components/learning-object/LearningObjectSelectComponent.vue'
export default {
  components: { LearningObjectSelectComponent, AppDialog },
  data () {
    return {
      selectedObj: {},
    }
  },
  props: {},
  computed: {
    hasSelection () { return !! this.selectedObj.name},
    disableSave () { return !this.hasSelection },
  },
  methods: {
    selectLobj (lobj) {
      this.selectedObj = lobj
      // wait for reaction to enable the button
      this.$nextTick(() => {
        this.$refs.theDialog.focusOnSave()
      })
    },
    showDialog (activityRecord) {
      this.selectedObj = {}
      this.$refs.lobjSelector.loadPage()
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      this.$emit('selected', this.selectedObj)
      this.$refs.theDialog.onClose()
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/definitions';

section {
  margin-bottom: 10px;
}

</style>
