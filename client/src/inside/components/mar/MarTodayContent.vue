<template lang="pug">
  div
    h1 Medication Administration Records
    div Today is: {{ currentDay }}
    div(class="periodsList", v-for="period in periodDefs")
      h4 {{ period.name }}
      div(class="columns")
        div(class="column")
          med-list(:medsList="period.medsList")
        div(class="column")
          div(v-show="!period.hasMar")
            ui-button(v-on:buttonClicked="openMarDialog(period)") Add MAR
          div(v-show="period.hasMar")
            mar-record(:record="period.marRecord || {}")
      hr
    app-dialog( v-if="showMarDialog", :isModal="true", @cancel="cancelDialog", @save="saveDialog")
      h3(slot="header") Add MAR
      div(slot="body")
        div
          div Day: {{currentDay}}
          div Period: {{activePeriod.name}}
          div Medications:
          med-list(:medsList="activePeriod.medsList")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Who administered
                input(class="input", type="text", v-model="who")
            div(class="ehrdfe")
              div(class="text_input_wrapper")
                label Actual time
                input(class="input", type="text", v-model="when")
          div(class="input-fieldrow")
            div(class="ehrdfe")
              label Comment
              div(class="input-element input-element-full")
                textarea(class="textarea",v-model="comment")
          div(v-show="errorMesageList.length > 0", class="errorMesageList")
            li(v-for="error in errorMesageList") {{ error }}

    div(style="display:none") {{refreshData}}

</template>

<script>
import EventBus from '@/helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'
import MedList from './MedList'
import UiButton from '../../../app/ui/UiButton'
import MarRecord from './MarRecord'
import AppDialog from '../../../app/components/AppDialogShell'
import MarEntity from './mar-entity'

export default {
  name: 'MarTodayContent',
  components: {
    UiButton,
    AppDialog,
    MedList,
    MarRecord
  },
  data () {
    return {
      who: '',
      when: '',
      comment: '',
      activePeriod: {},
      errorMesageList: [],
      showMarDialog: false,
      periodDefs: [],
      currentDay: 0
    }
  },
  props: {
    marHelper: { type: Object }
  },
  computed: {
    refreshData () {
      // See EhrPageForm for more on why we have currentData
      console.log('MarTodayContent refreshData')
      this.refresh()
      return this.periodDefs
    }
  },
  methods: {
    openMarDialog (period) {
      this.comment = this.when = this.who = ''
      this.activePeriod = period
      this.showMarDialog = true
    },
    cancelDialog: function () {
      this.showMarDialog = false
    },
    saveDialog: function () {
      const _this = this
      let mar = new MarEntity(this.who, this.currentDay, this.when, this.comment, this.activePeriod)
      this.errorMesageList = mar.validate()
      if(this.errorMesageList.length > 0) {
        return
      }
      this.marHelper.saveMarDialog(mar)
        .then(() => {
          _this.showMarDialog = false
        })
    },
    refresh () {
      if (this.marHelper) {
        // this.marHelper.marRefresh()
        let pd = this.marHelper.periodDefinitions
        this.periodDefs = pd.periodList
        this.currentDay = pd.currentDay
      }
    }
  },
  mounted: function () {
    const _this = this
    this.refreshEventHandler = function () {
      // console.log('MarTodayContent PAGE_DATA_REFRESH_EVENT')
      _this.refresh()
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.errorMesageList {
  color: $dialog-error-color;
}
</style>