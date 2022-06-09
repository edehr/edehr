<template lang="pug">
  div
    div(v-if="showNavAction", title='End your work and send to your instructor to evaluate.')
      ui-button(v-on:buttonClicked="npButtonClicked", :disabled="disableNavAction") Submit
    div(v-else)
      div {{ afterSubmitText }}
    ui-confirm(ref="confirmDialog", v-on:confirm="proceed")
    ui-agree(ref="successDialog", v-on:confirm="finishedAction")
    app-dialog(
      :isModal="true",
      ref="submitFeedback",
      :useSave="true",
      saveButtonLabel="Submit Feedback",
      cancelButtonLabel="Cancel",
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
const FEEDBACK_BODY = 'Your assignment has been submitted successfully.  Before you leave, '+
  ' we hope you will share your thoughts and suggestions about this Educational Electronic Health Record System.' +
  ' Providing feedback is optional and totally anonymous but very much appreciated.'
const SUBMITTED_TEXT = 'Your assignment is now submitted. Will now return you back to your learning management system.'
/*
Collect student feedback, completely anonymous and voluntary, after work is submitted.
 */
const COLLECT_FEEDBACK = true

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
    afterSubmitText () {
      const panelInfo = StoreHelper.getPanelData()
      return panelInfo.evaluated ? 'Evaluated': 'Pending Evaluation'
    },
    hasSubmitted () {
      return StoreHelper.isStudent() && StoreHelper.isSubmitted()
    },
    showNavAction () {
      return !StoreHelper.getActivityIsClosed() && !StoreHelper.isSubmitted()
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
            this.$refs.successDialog.showDialog('Submitted', SUBMITTED_TEXT)
          }
        })
    },
    finishedAction () {
      // student is finished with their activity. take them back to the lms
      window.location = StoreHelper.lmsUrl()
    },
    submitFeedback () {
      postFeedback(this.feedbackContent).then( () => {
        window.location = StoreHelper.lmsUrl()
      })
    }
  },
}
</script>
