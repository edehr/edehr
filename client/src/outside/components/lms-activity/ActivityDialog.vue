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
      h2(slot="header") Activity:  {{ name }}
      div(slot='header-extra-content', class='intro') The student will see the following activity title and description so it is important to give them context and guidance. Edit the title and description below. Or choose to use the content provided either by the {{ lmsName }} or by the Learning Object.
      div(slot="body")
        section
          fieldset
            div(class="flow_across")
              label Title
              input(class="input", type="text", v-model="name", v-validate="nameValidate")
            div(class="flow_across")
              label Description
              textarea(v-model="description")
        section(class="other-source")
          div <strong> Provided by: {{ lmsName }} </strong>
          div(class="flow_across")
            div.
              {{ !contentMatchesLms ? 'Press the "Use LMS Content" button to copy the text below into the activity\'s title and description.' : `The activity is currently using the content as provided by ${lmsName}.` }}
            ui-button(
              v-show="!contentMatchesLms",
              @buttonClicked='useLMS',
              class='flow_across_last_item')
              span Use LMS Content
          fieldset(disabled, v-show="!contentMatchesLms")
            div(class="flow_across")
              label Title
              div {{ activity.resource_link_title }}
            div(class="flow_across")
              label Description
              div {{ activity.resource_link_description }}
        section(class="other-source")
          div <strong> Learning object </strong>
          div(class="flow_across")
            div.
              {{ !contentMatchesLObj ? 'Press the "Use Learning Object" button to copy the text below into the activity\'s title and description.' : 'The activity is currently using the content as provided from the Learning Object.' }}
            ui-button(
              v-show="!contentMatchesLObj",
              @buttonClicked='useLObj',
              class='flow_across_last_item')
              span Use Learning Object
          fieldset(disabled, v-show="!contentMatchesLObj")
            div(class="flow_across")
              label Title
              div {{ activity.learningObjectName }}
            div(class="flow_across")
              label Description
              div {{ activity.learningObjectDescription }}
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton.vue'
import UiInfo from '@/app/ui/UiInfo'

export default {
  components: { AppDialog, UiButton, UiInfo },
  data () {
    return {
      activity: {},
      description: '',
      name: '',
      originalContent: ''
    }
  },
  props: {},
  computed: {
    contentLms () { return this.activity.resource_link_title + this.activity.resource_link_description },
    contentLObj () { return this.activity.learningObjectName + this.activity.learningObjectDescription },
    contentCurrent () { return this.name + this.description },
    contentUnchanged () { return this.contentCurrent === this.originalContent },
    contentMatchesLms () { return this.contentCurrent === this.contentLms },
    contentMatchesLObj () { return this.contentCurrent === this.contentLObj },
    disableSave () {
      return this.contentUnchanged || this.name.length === 0
    },
    lmsName () { return StoreHelper.lmsName() },
    nameValidate () {
      let v = this.name.length > 0
      return v ? undefined : 'Activity name is required'
    },
    userName () {
      return StoreHelper.fullName()
    }
  },
  methods: {
    clearInputs: function () {
    },
    showDialog (activityRecord) {
      this.clearInputs()
      this.activity = activityRecord
      this.name = activityRecord.title
      this.description = activityRecord.description
      this.originalContent = this.name + this.description
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      let payload = {
        activityId: this.activity.id,
        custom_title: this.name,
        custom_description: this.description,
      }
      this.$refs.theDialog.onClose()
      await this.$store.dispatch('activityStore/updateTitleDescription', payload)
      await this.$store.dispatch('activityStore/loadActivityRecord')
    },
    useLMS () {
      this.name = this.activity.resource_link_title
      this.description = this.activity.resource_link_description
    },
    useLObj () {
      this.name = this.activity.learningObjectName
      this.description = this.activity.learningObjectDescription
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/definitions';

section {
  margin-bottom: 10px;
}
.other-source {
  background-color: $grey10;
  padding: 10px;
}
.intro {
  max-width: 50rem;
}

label {
  min-width: 10rem;
}
.flow_across {
  margin-bottom: 10px;
}
</style>
