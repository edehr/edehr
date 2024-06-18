<template lang="pug">
  div
    div(v-if='editState', class='working-area')
      textarea(rows="3",
        v-model='workingText')
      zone-lms-button(@action="editSave",
        :icon='appIcons.save',
        text='Save')
      zone-lms-button(@action="editCancel",
        :icon='appIcons.stopCircle',
        text='Cancel')
    div(v-else, class='working-area')
      div(class='clickable', @click='editStart') {{ value }}
      zone-lms-button(@action="editStart",
        :icon='appIcons.edit',
        text='Edit')

</template>

<script>

import ZoneLmsButton from '@/outside/components/ZoneLmsButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'

export default {
  components: { ZoneLmsButton },
  data: function () {
    return {
      appIcons: APP_ICONS,
      editState: false,
      workingText: ''
    }
  },
  props: {
    value: { type: String}
  },
  computed: {
  },
  methods: {
    editStart () {
      this.editState = true
      this.workingText = this.value
    },
    editSave () {
      this.editState = false
      this.$emit('change', this.workingText)
    },
    editCancel () {
      this.editState = false
    },
    oninput (event) {
      const newValue = event.target.value
      this.$emit('change', this.valueKey, newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.working-area{
  display: flex;
  flex-direction: row;
}
//textarea {
  //max-width: 60rem;
  //height: auto;
//}
</style>
