<template lang="pug">
    app-dialog(
      :isModal="true",
      ref="theDialog",
      @cancel="cancelDialog", 
      @save="saveDialog", 
      v-bind:errors="errorList", 
      :hasFooterContent="true"
      :disableSave="disableSave"
    )
      h3(slot="header") {{ tableDef.addButtonText }}
      div tableKey {{ tableKey}}
      div(slot="body", class="ehr-page-content")
        ehr-group(v-for="group in groups", :key="group.gIndex", :group="group", :ehrHelp="ehrHelp")
      div(slot="footer-content", class="checkbox-wrapper", v-if="acknowledgeSignature")
        label
          input(class="checkbox", type="checkbox", v-model="ackCaseStudyData")
          span {{ ackText }}
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../../app/components/AppDialogShell'
import CaseContext from '@/helpers/case-context'
import EhrGroup from './EhrGroup'
import EventBus from '../../../helpers/event-bus'

const debug = false

export default {
  name: 'EhrDialogForm',
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
    tableKey () {
      return this.tableDef.tableKey
    },
    groups () {
      return this.tableDef.form ? this.tableDef.form.ehr_groups : []
    },
    acknowledgeSignature () {
      return CaseContext.getPageTableShowSignature(this.ehrHelp.pageKey, this.tableKey)
    },
    disableSave () {
      if (this.acknowledgeSignature) {
        // disable save until the user has acknowledged / confirmed signature
        return !this.ackCaseStudyData
      } else {
        return false
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
      let errs = this.ehrHelp.saveDialog()
      if (errs) {
        this.errorList = errs
      } else {
        this.errorList = []
      }
      this.ackReqHeader = false
    },
    receiveShowHideEvent (eData) {
      if(eData.value) {
        if (debug) console.log('EhrDialogForm rcv show hide', this.tableKey)
        if (debug) console.log('EhrDialogForm rcv show hide', this.tableKey)
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
    // console.log('mount dialog', this.pageDataKey)
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    // console.log('EhrDialogForm add listener', ch)
    this.eventHandler = function (eData) {
      // console.log('EhrDialogForm receiveShowHideEvent', ch)
      _this.receiveShowHideEvent(eData)
    }
    EventBus.$on(ch, this.eventHandler)
  },
  beforeDestroy: function () {
    let ch = this.ehrHelp.getDialogEventChannel(this.tableKey)
    if (this.eventHandler) {
      // console.log('beforeDestroy, remove listener', ch)
      EventBus.$off(ch, this.eventHandler)
    }
  }
}
</script>

<style lang="scss">
//@import '../../scss/definitions';
</style>
