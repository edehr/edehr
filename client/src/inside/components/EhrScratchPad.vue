<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__bottom`")
      ui-button(v-on:buttonClicked="showDialog", :class="`${$options.name}__button`") Scratch Pad
    app-dialog( v-if="showingDialog", :isModal="false", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Your private notes
      div(slot="body")
        div
          div(class="input-fieldrow")
            div(class="input-element input-element-full")
              textarea(:class="`${$options.name}__textarea`",v-model="theNotes")
</template>

<script>
import AppDialog from '../../app/components/AppDialogShell'
import UiButton from '../../app/ui/UiButton.vue'

export default {
  name: 'EhrScratchPad',
  components: {
    UiButton,
    AppDialog
  },
  data: function() {
    return {
      showingDialog: false,
      populate: true,
      theNotes: ''
    }
  },
  methods: {
    resetNotes: function() {
      let sp = this.$store.getters['ehrData/scratchData']
      console.log('EhrScratchPad reset with existing ', sp)
      this.theNotes = sp
    },
    showDialog: function() {
      this.resetNotes()
      this.showingDialog = true
    },
    cancelDialog: function() {
      this.resetNotes()
      this.showingDialog = false
    },
    saveDialog: function() {
      this.showingDialog = false
      console.log('EhrScratchPad saving ', this.theNotes)
      this.$store.dispatch('ehrData/sendScratchData', this.theNotes)
    }
  }
}
</script>

<style lang="scss" scoped>
.EhrScratchPad {
  margin-top: auto;
  margin-bottom: 30px;

  &__bottom {
    padding: 15px;
  }
  &__button {
    width: 100%;
  }
  &__textarea {
    width: 100%;
    height: 6rem;
  }
}
</style>
