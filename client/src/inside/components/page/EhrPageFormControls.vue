<template lang="pug">
  div
    <!--div isEditing {{ isEditing}} canEdit {{canEdit}}-->
    button(v-on:click="beginEdit", v-show="canEdit", class=" button is-light")
      fas-icon(icon="edit", class="icon-left") 
      span Edit form
    button(v-on:click="saveEdit", v-show="isEditing", class=" button is-primary")
      fas-icon(icon="check-circle", class="icon-left")
      span Save
    button(v-on:click="cancelEdit", v-show="isEditing", class=" button is-light")
      fas-icon(icon="times-circle", class="icon-left")
      span Cancel
</template>

<script>
import UiButton from '../../../app/ui/UiButton.vue'

export default {
  components: {
    UiButton
  },
  props: {
    ehrHelp: { type: Object },
    pageDataKey: { type: String },
    formKey: { type: String }
  },
  computed: {
    canEdit () {
      return this.ehrHelp.canEditForm(this.formKey)
    },
    isEditing () {
      return this.ehrHelp.isEditingForm(this.formKey)
    }
  },
  methods: {
    beginEdit: function () {
      this.ehrHelp.beginEdit(this.formKey)
    },
    cancelEdit: function () {
      this.ehrHelp.cancelEdit()
    },
    saveEdit: function () {
      this.ehrHelp.savePageFormEdit()
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';

</style>
