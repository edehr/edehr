<template lang='pug'>
  div
    div(class="action-section")
      ui-button(v-on:buttonClicked="confirmOpen", title="Allow all students to work on the assignment.")
        fas-icon(class="icon-right", :icon="appIcons.retractSubmit")
        span(v-if="showLabels") &nbsp; All students can edit
      ui-button(v-on:buttonClicked="confirmClose", title="Force the submission of all work.")
        fas-icon(class="icon-right", :icon="appIcons.forceSubmit")
        span(v-if="showLabels") &nbsp; Force all submissions

      ui-button(
        data-test-id="ClassList.button.download",
        v-on:buttonClicked="downloadEvaluations",
        :title='text.downloadTip'
      )
        fas-icon(class="icon-right", :icon="appIcons.download")
        span(v-if="showLabels") &nbsp; {{text.downloadButtonLabel}}
      ui-save-as-prompt(data-test-id="ClassList.prompt.saveAs",
        ref="promptDialog",
        :title="text.saveEvaluationTip",
        :message="promptMessage",
        :filename="downloadFileName", v-on:confirm="proceedDownloard")
    ui-confirm(ref="confirmOpen", v-on:confirm="openAll", saveLabel='Confirm')
    ui-confirm(ref="confirmClose", v-on:confirm="closeAll", saveLabel='Confirm')

</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import StoreHelper from '@/helpers/store-helper'
import UiButton from '@/app/ui/UiButton'
import UiLink from '@/app/ui/UiLink'
import { downArrayToCsvFile } from '@/helpers/ehr-utils'
import UiSaveAsPrompt from '@/app/ui/UiSaveAsPrompt'
import UiConfirm from '@/app/ui/UiConfirm'
const TEXT = {
  closeAllTip: 'Block all students from working on the activity',
  closeAllLabel: 'Block all student edits',
  downloadButtonLabel: 'Download evaluation notes',
  downloadTip: 'Download a CSV file with all your student evaluations to later import into your course grade book.',
  openAllTip: 'Allow all students to work on the activity',
  openAllLabel: 'Open activity',
  saveEvaluationTip: 'Save evaluation',
}
export default {
  components: { UiConfirm, UiSaveAsPrompt,  UiButton, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
      text: TEXT,
    }
  },
  props: {
    showDetails: {type: Boolean, default: true}
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activity']
    },
    activityId () {
      return this.$store.getters['activityStore/activityId']
    },
    assignment () {
      return this.$store.getters['assignmentStore/assignment']
    },
    classList () {
      return this.$store.getters['instructor/list']
    },
    classSubmittedList () {
      return this.classList.filter(sv => sv.activityData.submitted)
    },
    activityName () {
      return this.activity.resource_link_title
    },
    downloadFileName () {
      const name = this.activityName || ''
      return name.replace(/[-+():#"]/g, '')
    },
    promptMessage () {
      return 'Save evaluations for ' + this.activityName + this.downloadFileName
    },
    canDo () { return StoreHelper.isDevelopingContent() },
    showLabels () { return StoreHelper.isOutsideShowButtonLabels() },
  },
  methods: {
    confirmOpen () {
      this.$refs.confirmOpen.showDialog('Confirm', 'Proceed to allow all students to work on the assignment')
    },
    confirmClose () {
      this.$refs.confirmClose.showDialog('Confirm', 'Close the activity to any further edits by students.')
    },
    async closeAll () {
      await StoreHelper.closeActivity(this.activityId)
    },
    async openAll () {
      await StoreHelper.openActivity(this.activityId)
    },
    downloadEvaluations () {
      this.$refs.promptDialog.showDialog()
    },
    closeDialog () {
      this.$refs.promptDialog.cancelDialog()
    },
    proceedDownloard (filename) {
      let data = []
      data.push([
        'givenName',
        'familyName',
        'lms_user_id',
        'feedback: ' + this.activityName
      ])
      this.classList.forEach ( sv => {
        data.push([
          sv.user.givenName,
          sv.user.familyName,
          sv.user.user_id,
          sv.activityData.evaluationData
        ])
      })
      downArrayToCsvFile(filename, data)
    },
  },
}
</script>
