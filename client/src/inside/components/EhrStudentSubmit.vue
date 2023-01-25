<template lang="pug">
  div(class='student-submit')
    div(v-if="showSubmit", title='End your work and send to your instructor to evaluate.')
      ui-button(
        v-on:buttonClicked="npButtonClicked",
        :class='{draft : hasDraft}',
        :title='submitButtonTip',
        :disabled="disableNavAction"
        ) Submit Activity
    div(v-else, class='status-message') {{ statusMessage }}
    ui-confirm(ref="confirmDialog", v-on:confirm="proceed", saveLabel='Submit')
    ui-agree(ref="successDialog", v-on:confirm="finishedAction")
    app-dialog(
      :isModal="true",
      ref="submitFeedback",
      :useSave="true",
      saveButtonLabel="Submit Feedback",
      cancelButtonLabel="Skip",
      @save="submitFeedback"
      @cancel="finishedAction"
      )
      h2(slot="header") {{ feedbackFormTitle }}
      div(slot="body")
        div {{ feedbackFormIntro }}
        div(style="margin-top:2%;")
          textarea(v-model="feedbackContent")
</template>
<script>
import AppDialog from '@/app/components/AppDialogShell.vue'
import UiAgree from '@/app/ui/UiAgree.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { postFeedback } from '@/helpers/feedback'
import { Text } from '@/helpers/ehr-text'

const FEEDBACK_TITLE = 'Optional Feedback Form'
const FEEDBACK_BODY = 'Your assignment is submitted. Before you go, '+
  ' can you please give us your thoughts and suggestions about the EdEHR.' +
  ' This is completely anonymous and optional yet your comments will help us improve this application.'
const BUTTON_WARN = 'Warning. Your work contains draft reports'
/*
Collect student feedback, completely anonymous and voluntary, after work is submitted.
 */
const COLLECT_FEEDBACK = false

export default {
  components: {
    UiAgree,
    UiButton,
    UiConfirm,
    AppDialog
  },
  data () {
    return {
      feedbackFormTitle: FEEDBACK_TITLE,
      feedbackFormIntro: FEEDBACK_BODY,
      feedbackContent: ''
    }
  },
  computed: {
    hasDraft () { return StoreHelper.getStudentAssignmentDataHasDraftRows() },
    showSubmit () {
      return !StoreHelper.isSubmitted()
    },
    submitButtonTip () { return this.hasDraft ? BUTTON_WARN : ''},
    statusMessage () {
      return StoreHelper.isSubmitted() ? Text.IS_SUBMITTED : ''
    },
    disableNavAction () {
      return this.$store.state.system.isEditing
    },
  },
  methods: {
    npButtonClicked () {
      this.$refs.confirmDialog.showDialog(Text.SEND_FOR_EVAL_TITLE, Text.SEND_FOR_EVAL_BODY)
    },
    proceed () {
      StoreHelper.studentSubmitsAssignment(true)
        .then(() => {
          if (COLLECT_FEEDBACK) {
          // show confirmation and collect feedback form Next step is finishedAction
            this.$refs.submitFeedback.onOpen()
          } else {
          // show confirmation. Next step is finishedAction
            let text = 'Your assignment has been submitted. Click OK to go to your "My Activities" dashboard.'
            this.$refs.successDialog.showDialog('Submitted', text)
          }
        })
    },
    finishedAction () {
      // student is finished with their activity. take them back to the lms
      this.$router.push('/student-courses')
    },
    submitFeedback () {
      postFeedback(this.feedbackContent).then( () => {
        StoreHelper.exitToLms()
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../../scss/definitions";
.draft {
  background-color: $table-draft-colour !important;
  color: black !important;
}
.student-submit {
  display: flex;
  flex-direction: row;
  div {
    margin-right: 5px;
  }
}
.status-message {
  font-size: 1.2rem;
  font-weight: normal;
}
button {
  min-width: 5rem;
}
</style>
