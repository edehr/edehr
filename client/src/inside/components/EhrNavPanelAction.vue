<template lang="pug">
  div
    div(v-if="showNavAction")
      ui-button(v-on:buttonClicked="npButtonClicked", :disabled="disableNavAction") {{ npButtonLabel }}
      ui-confirm(ref="confirmDialog", v-on:confirm="proceed")
      app-dialog(
        :isModal="true",
        ref="submitFeedback",
        :useSave="true",
        saveButtonLabel="Submit Feedback",
        cancelButtonLabel="Cancel",
        @save="submitFeedback"
        @cancel="cancelAction"
        )
        h2(slot="header") {{ feedbackFormTitle }}
        div(slot="body") 
          div {{ feedbackFormIntro }}
          div(style="margin-top:2%;")
            textarea(v-model="feedbackContent", rows="5")

</template>
<script>
import UiButton from '../../app/ui/UiButton.vue'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import EhrActions from '../../helpers/ehr-actions'
import { postFeedback } from '../../helpers/feedback'
import AppDialog from '../../app/components/AppDialogShell.vue'

const FEEDBACK_TITLE = 'Optional Feedback Form'
const FEEDBACK_BODY = 'Your assignment has been submitted successfully.  Before you leave, '+
  ' we hope you will share your thoughts and suggestions about this Educational Electronic Health Record System.' +
  ' Providing feedback is optional and totally anonymous but very much appreciated.'

export default {
  name: 'EhrNavPanelAction',
  components: {
    UiButton,
    UiConfirm,
    AppDialog
  },
  data () {
    return {
      ehrAction: {},
      feedbackFormTitle: FEEDBACK_TITLE,
      feedbackFormIntro: FEEDBACK_BODY,
      feedbackContent: ''
    }
  },
  computed: {
    npButtonLabel () {
      return this.ehrAction.getNavPanelActionLabel()
    },
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      return require('../../menuList.json')
    },
    showNavAction () {
      return this.$store.getters['visit/isStudent']
    },
    disableNavAction () {
      return this.$store.state.system.isEditing
    }
  },
  methods: {
    npButtonClicked () {
      if (this.ehrAction.isUnsubmittedStudent() ) {
        let opts = this.ehrAction.navPanelActionConfirmOptions()
        this.$refs.confirmDialog.showDialog(opts.title, opts.msg)
      } else {
        this.ehrAction.gotoLMS()
      }
    },
    proceed () {
      this.ehrAction.invokeNavPanelAction().then(() => {
        this.$refs.submitFeedback.onOpen()
        // use the next line instead if you don't want to collect feedback
        // this.ehrAction.gotoLMS()
      })
    },

    cancelAction () {
      this.ehrAction.gotoLMS()
    },

    submitFeedback () {
      postFeedback(this.feedbackContent).then( () => {
        this.ehrAction.gotoLMS()
      })
    }
  },
  created: function () {
    this.ehrAction = new EhrActions()
    this.confirmBody = this.ehrAction.getStudentHasSubmitted()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions'; 

.EhrNavPanel .button {
  width: 100%;
  margin-bottom: 0;
}
</style>
