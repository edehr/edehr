<template lang="pug">
  div
    <!--div isEditing {{ isEditing}} canEdit {{canEdit}}-->
    ui-button(v-on:buttonClicked="beginEdit", v-show="canEdit")
      fas-icon(icon="edit", class="icon-left")
      span {{ ehrText.buttonLabelEditForm }}
    ui-button(v-on:buttonClicked="saveEdit", v-show="isEditing")
      fas-icon(icon="check-circle", class="icon-left")
      span {{ ehrText.saveButtonLabel}}
    span(v-show="isEditing") &nbsp;
    ui-button(v-on:buttonClicked="cancelEdit", v-show="isEditing")
      fas-icon(icon="times-circle", class="icon-left")
      span {{ ehrText.cancelButtonLabel }}
</template>

<script>
import UiButton from '../../../app/ui/UiButton.vue'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import { t18EhrText } from '@/helpers/ehr-t18'

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
    ehrText () { return t18EhrText()},
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
    saveEdit: async function () {
      await this.ehrHelp.savePageFormEdit()
      EventBus.$emit(PAGE_DATA_REFRESH_EVENT)
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/definitions';

</style>
