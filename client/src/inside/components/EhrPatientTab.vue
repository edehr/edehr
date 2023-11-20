<template lang='pug'>
  div(class="patient-tab",
    :class='{ patientTabActive: selected, patientTabDisable: disableNavAction }')
    div(class="name-part")
      span(v-if="disableNavAction") {{ familyName }}
      a(v-else, @click="selectPatient()", href='#', :class='disabledClass') {{ familyName }}
      button(
        v-if='isSeedEditing',
        class='close-button',
        :disabled='disableNavAction',
        @click="removePatient") x
    div(class="bottom-part")
</template>

<script>
import StoreHelper from '@/helpers/store-helper'

export default {
  props: {
    selected: { type: Boolean, default: false},
    dbObject: { type: Object }
  },
  computed: {
    isSeedEditing () { return StoreHelper.isSeedEditing() },
    _id () { return this.dbObject._id },
    keyData () { return this.dbObject ? this.dbObject.keyData : {}},
    mrn () { return this.keyData.mrn },
    familyName () { return this.keyData.familyName },
    disableNavAction () { return this.$store.state.system.isEditing },
    disabledClass () { return this.$store.state.system.isEditing ? 'disabled' : '' }
  },
  methods: {
    removePatient () {
      this.$emit('remove', this.dbObject._id)
    },
    selectPatient () {
      if (!this.selected) {
        this.$emit('select', this.dbObject._id)
      }
    }
  }
}
</script>
<style lang='scss' scoped>
.disabled {
  cursor: not-allowed;
  color: lightgray;
}
</style>

