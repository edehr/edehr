<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div(class="dialog-step")
          label {{ cText.intro }}
            ui-info(title="What is a Learning Object?", :html="cText.explain")

        div(class="dialog-step")
          h2 Step 1
          label Give this content a name. Often this is the simulation patient name.
        div(class="dialog-item")
          label Learning object name
          input(type="text", class="object-name", v-model="assignmentName", v-validate="nameValidate")
        div(class="dialog-step")
          h2 Step 2
          label  Describe the learning objectives.
            ui-info(title="Why is the description important?", :html="cText.step2")

        div(class="dialog-item")
          label Learning object description
          textarea(v-model="description", class='learning-object-description')
        div(class="dialog-step")
          h2 Step 3
          p Link this learning object to a case study to provide the simulated health records.
          p Do you want to select an existing case study or create a new one that is empty?
        div(class="dialog-item")
          label Create new or select
          app-type-toggle-button(
            v-bind:useColour="false",
            :modelValue='createNewCaseStudy',
            @change='createOrSelect',
            labelOn='Create new'
            labelOff='Select'
          )
        transition(name="fade",  mode="out-in")
          div(v-if='createNewCaseStudy', key="createSeed", class='select-seed-section card')
            // ---------------------------- Create a case study
            h3 Create new case study
            div(class="dialog-item app-type-section")
              label Set type
              app-type-toggle-button(
                :modelValue='isEHR_Showing',
                @change='changeApp',
                labelOn='EHR'
                labelOff='LIS'
              )
              label {{ appTypeCreateText }}
            div(class="dialog-item")
              label Case study name
              input(type="text", class="object-name", v-model="caseStudyName", v-validate="caseStudyNameValidate")
            div(class="dialog-item")
              label Description
              textarea(v-model="caseStudyDescription", class='learning-object-description')

          div(v-else, key="selectSeed", class='select-seed-section card')
            // ---------------------------- Choose a case study
            h3 Select case study
            div(class="dialog-item app-type-section")
              label Select by type
              app-type-toggle-button(
                :modelValue='isEHR_Showing',
                @change='changeAppSelect',
                labelOn='EHR'
                labelOff='LIS'
              )
              label {{ appTypeSelectText }}

            div(class="dialog-item")
              label Search text
              div(class="flow_across table_space_across search-box")
                input(
                  class="object-name",
                  type="text",
                  v-model='searchTerm',
                  placeholder='Filter list by key word',
                  v-on:keyup.enter="fetchSeedSelectionList",
                  v-on:keyup.esc="searchTerm = ''",
                )
                button(
                  v-on:buttonClicked="fetchSeedSelectionList",
                  :disabled="!searchTerm",
                  class='search-button'
                )
                  fas-icon(icon="search", class='fa')
            div(class="dialog-item")
              label Select a case study
              select(v-model="selectedSeedId", v-validate="seedValidate", class="object-name select-case-study",)
                option(value="")
                option(v-for="seed in seedList", :value="seed._id") {{ seed.name}}
            div(class="dialog-item")
              label Selected case study description
              textarea(disabled) {{seedDescription }}
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
import { Text, TextLearningObjects } from '@/helpers/ehr-text'
import AppTypeToggleButton from '@/outside/components/seed-management/AppTypeToggleButton.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
const TITLES = Text.LOBJ_DIALOG.TITLES
const ERRORS = Text.LOBJ_DIALOG.ERRORS
const LABELS = Text.LOBJ_DIALOG.LABELS
const EDIT_ACTION = 'edit'
const CREATE_ACTION = 'create'
export default {
  data () {
    return {
      appType: 'EHR',
      assignmentName: '',
      caseStudyName: '',
      caseStudyDescription: '',
      createNewCaseStudy: false,
      description: '',
      actionType: '',
      assignmentId: '',
      labelText: LABELS,
      searchTerm: '',
      selectedSeedId: '',
      seedList: [],
      seedModel: undefined
    }
  },
  components: { UiInfo, AppTypeToggleButton, AppDialog },
  computed: {
    appTypeCreateText () {
      return this.isEHR_Showing ?
        'Make the new case study an electronic health record (EHR) case study.' :
        'Make the new case study a lab information system (LIS) case study.'
    },
    appTypeSelectText () {
      return this.isEHR_Showing ?
        'Filter the list to show electronic health record (EHR) case studies.' :
        'Filter the list to show lab information system (LIS) case studies.'
    },
    cText () { return TextLearningObjects },
    isCreate () { return this.actionType === CREATE_ACTION },
    isEdit () { return this.actionType === EDIT_ACTION },
    caseStudyNameValidate () {
      if(this.createNewCaseStudy) {
        return this.caseStudyName.trim() ? /* OK */ undefined :  ERRORS.CASE_STUDY_NAME
      }
      return undefined
    },
    nameValidate () {
      return this.assignmentName.trim() ? /* OK */ undefined :  ERRORS.NAME_REQUIRED
    },
    seedDescription () {
      return this.selectedSeed ? this.selectedSeed.description : ''
    },
    seedValidate () {
      return this.isCreate || this.selectedSeedId.trim() ? /* OK */ undefined :  ERRORS.SEED_REQUIRED
    },
    errors () {
      const errMsg = this.nameValidate || this.seedValidate || this.caseStudyNameValidate
      return errMsg ? [errMsg] : []
    },
    disableSave () {
      return this.errors.length !== 0
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    isEHR_Showing () {
      return APP_TYPE_EHR === this.appType
    },
    selectSeed () { return this.isEdit || (this.isCreate && !this.seedModel)},
    selectedSeed () { return this.seedList.find( s => s._id === this.selectedSeedId)},
    seedName () { return this.seedModel ? this.seedModel.seed.name : '?'}
  },
  methods: {
    changeApp (event) {
      if (this.isEHR_Showing) {
        this.appType = APP_TYPE_LIS
      } else {
        this.appType = APP_TYPE_EHR
      }
    },
    changeAppSelect () {
      this.changeApp()
      this.fetchSeedSelectionList()
    },
    clearInputs: function () {
      this.selectedSeedId
        = this.actionType
        = this.assignmentName
        = this.description
        = this.assignmentId
        = ''
      this.seedModel = undefined
    },
    createOrSelect (val) {
      this.createNewCaseStudy = !this.createNewCaseStudy
      console.log('createOrSelect', this.createNewCaseStudy)
    },
    async fetchSeedSelectionList () {
      console.log('fetchSeedSelectionList searchTerm', this.searchTerm)
      const options = {
        appType: this.appType,
        searchTerm: this.searchTerm
      }
      this.seedList = await this.$store.dispatch('seedListStore/fetchSeedSelectionList', options)
      this.seedList.length ? this.selectedSeedId = this.seedList[0]._id : null
    },
    showDialog (assignmentData, seedModel) {
      this.clearInputs()
      this.fetchSeedSelectionList()
      if (assignmentData) {
        this.actionType = EDIT_ACTION
        this.assignmentName = assignmentData.name
        this.description = assignmentData.description
        this.assignmentId = assignmentData._id
        this.selectedSeedId = assignmentData.seedDataId || ''
      } else {
        this.actionType = CREATE_ACTION
        this.seedModel = seedModel
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveDialog: function () {
      let sId
      if(this.seedModel) {
        sId = this.seedModel.id
      }
      else {
        sId = this.selectedSeedId && this.selectedSeedId.length > 0 ? this.selectedSeedId : null
      }
      let aAssignment = {
        name: this.assignmentName,
        description: this.description,
        seedDataId: sId,
        toolConsumer: StoreHelper.getAuthdConsumerId(),
      }
      // console.log('save learning object', aAssignment)
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        return StoreHelper.updateAssignment(this, this.assignmentId, aAssignment)
      } else if (this.isCreate) {
        return StoreHelper.createAssignment( aAssignment)
      }
    }
  },
  mounted () {
    this.showDialog()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.object-name {
  min-width: 30rem;
  width: 30rem;
}
.select-case-study {

}
.learning-object-description {
  display: inline;
}

$labelWidth: 10rem;
.dialog-step {
  margin-bottom: 10px;
  label {
    max-width: 50rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
.app-type-section {
  label {
    position: relative;
    top: 5px; // to align with the toggle button
  }
  label:nth-child(3) {
    margin-left: 2rem;
  }
  }
.dialog-item {
  display: flex;
  margin-bottom: 1rem;
  label:nth-child(1) {
    border: 1px;
    font-weight: bold;
    padding-right: 5px;
    min-width: $labelWidth;
    max-width: $labelWidth;
    width: $labelWidth;
  }
}
.select-seed-section {
  padding: 5px;
}
</style>
