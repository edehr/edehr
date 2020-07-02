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
        input(class="checkbox", type="checkbox", v-model="ackCaseStudyData")
        span {{ ackText }}
      span(slot="save-button") Create and close
</template>

<script>
import AppDialog from '../../../app/components/AppDialogShell'
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EhrGroup from './EhrGroup'
import EventBus from '../../../helpers/event-bus'
import StoreHelper from '../../../helpers/store-helper'

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
      let groups = this.tableDef.form ? this.tableDef.form.ehr_groups : []
      if (this.acknowledgeSignature) {
        return groups.filter(g => g.formCss !== 'record-header')
      }
      return groups
    },
    acknowledgeSignature () {
      return (
        this.isSigning &&
        EhrDefs.getCaseStudyDataStatus(this.ehrHelp.pageKey) && 
        this.hasPersonaData
      )
    }, 

    hasCaseStudyData () {
      return EhrDefs.getCaseStudyDataStatus(this.ehrHelp.pageKey) && 
        this.hasPersonaData
    },

    disableSave () {
      // disable save in case there is any case study data and the user hasn't acknowledged / confirmed
      // it yet
      return this.hasCaseStudyData ? !this.ackCaseStudyData : false
    },
    ackText () {
      const persona = this.getPersonaData()
      return `I hereby certify correct ${persona.persona}, ${persona.profession}. 
      Hospital date: ${persona.day} ${persona.time}`
    },
    hasPersonaData () {
      const persona = this.getPersonaData()
      return Object.keys(persona).length > 0
    },
    isSigning () {
      return StoreHelper.isSigning()
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
    getPersonaData () {
      return StoreHelper.getAssignmentCaseStudyData()
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
