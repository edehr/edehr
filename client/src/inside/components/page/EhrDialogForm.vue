<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      @cancel="cancelDialog", 
      @save="saveDialog", 
      v-bind:errors="errorList", 
      :hasFooterContent="true"
      :useSave="!isViewOnly"
      :disableSave="disableSave"
    )
      h3(slot="header") {{ formLabel }}
      div(slot="body", class="ehr-page-content")
        ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp", :viewOnly='isViewOnly')
      div(slot="footer-content", class="checkbox-wrapper", v-if="acknowledgeSignature")
        label
          input(class="checkbox", type="checkbox", v-model="ackCaseStudyData")
          span {{ ackText }}
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import EhrGroup from '@/inside/components/page/EhrGroup'
import CaseContext from '@/helpers/case-context'
import EventBus from '@/helpers/event-bus'
import EhrOnlyDemo from '@/helpers/ehr-only-demo'

export default {
  components: {
    EhrGroup,
    AppDialog
  },
  data: function () {
    return {
      errorList: [],
      ackCaseStudyData: false // has the user acknowledged the reqHeader?, that is, confirmed the checkbox
    }
  },
  props: {
    ehrHelp: { type: Object },
    tableDef: { type: Object },
  },
  computed: {
    formLabel () {
      return this.tableDef.label || this.tableDef.addButtonText
    },
    ehrOnlyDemo () {
      return EhrOnlyDemo.isActiveEhrOnlyDemo()
    },
    isViewOnly () {
      return this.ehrHelp.isViewOnly(this.tableKey)
    },
    tableKey () {
      return this.tableDef.tableKey
    },
    groups () {
      return this.tableDef.form ? this.tableDef.form.ehr_groups : []
    },
    // TODO add acknowledgement signature to the flow of each form both table and page form
    acknowledgeSignature () {
      return CaseContext.getPageTableShowSignature(this.ehrHelp.pageKey, this.tableKey)
    },
    disableSave () {
      if (this.acknowledgeSignature) {
        // disable save until the user has acknowledged / confirmed signature
        return !this.ackCaseStudyData
      } else {
        return this.isViewOnly
      }
    },
    ackText () {
      const persona = this.getCaseStudyData()
      return `I, ${persona.profession} ${persona.name}, certify the above information is correct. Day: ${persona.day} Time: ${persona.time}`
    },
    assignmentHasCaseContext () {
      return CaseContext. assignmentHasCaseContext()
    },
    featureCaseContext () {
      return CaseContext.isCaseContextFeature()
    }
  },
  methods: {
    cssFromDefs: function (element) {
      return element.formCss ? element.formCss : undefined
    },
    cancelDialog: function () {
      this.ehrHelp.cancelDialog()
      this.errorList = []
    },
    saveDialog: function () {
      this.errorList = this.ehrHelp.saveDialog() || []
      this.ackReqHeader = false
    },
    receiveShowHideEvent (eData) {
      if (eData.isEmbedded) {
        /*
        When a portion of the dialog form is used as an embedded form fragment we want to be
        sure to not open the underlying dialog that would normally contain that fragment.
         */
        return
      }
      if(eData.value) {
        this.$refs.theDialog.onOpen()
      } else {
        this.$refs.theDialog.onClose()
      }
    },
    getCaseStudyData () {
      return CaseContext.getAssignmentCaseContext()
    }
  },
  mounted: function () {
    const _this = this
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    this.eventHandler = function (eData) {
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
  },
  beforeDestroy: function () {
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    if (this.eventHandler) {
      EventBus.$off(ch, this.eventHandler)
    }
  }
}
</script>

