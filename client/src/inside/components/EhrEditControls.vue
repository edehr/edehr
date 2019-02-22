<template lang="pug">
  div
    button(v-on:click="beginEdit", v-show="!isEditing")
      fas-icon(icon="edit")
    button(v-on:click="saveEdit", v-show="isEditing")
      fas-icon(icon="check-circle")
    button(v-on:click="cancelEdit", v-show="isEditing")
      fas-icon(icon="times-circle")
</template>

<script>
export default {
  name: 'EhrEditControls',
  components: {},
  data: function() {
    return {}
  },
  props: {
    ehrHelp: { type: Object },
    pageDataKey: { type: String }
  },
  computed: {
    isEditing() {
      return this.ehrHelp.isEditing()
    }
  },
  methods: {
    beginEdit: function() {
      this.ehrHelp.beginEdit(this.pageDataKey)
    },
    cancelEdit: function() {
      this.ehrHelp.cancelEdit(this.pageDataKey)
    },
    saveEdit: function() {
      this.ehrHelp.saveEdit(this.pageDataKey)
    }
  }
}
</script>

<style scoped></style>
