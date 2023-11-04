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
          input(type="text", class="object-name", v-model="learningObjectName", v-validate="nameValidate")
        div(class="dialog-step")
          h2 Step 2
          label  Describe the learning objectives.
            ui-info(title="Why is the description important?", :html="cText.step2")
        div(class="dialog-item")
          label Learning object description
          textarea(v-model="description", class='learning-object-description')
        div(class="dialog-step")
          h2 Step 3
          p Determine if you want the student to work with a case study or if you want them to start with a blank charting system and make them locate the patient (case study).
        div(class="dialog-item")
          label Use cast study?
          app-type-toggle-button(
            v-bind:useColour="false",
            :modelValue='useCaseStudy',
            @change='toggleUseCaseStudy',
            labelOn='Provide case study'
            labelOff='No case study'
          )
        div {{ useCaseStudy ? 'Students will see the case study you select or create in the next step': 'Students will need to search for the correct patient (case study)' }}

        transition(name="fade",  mode="out-in")
          div(v-if='useCaseStudy')
            div(class="dialog-step")
              h2 Step 4
              p Link this learning object to a case study to provide the simulated health records.
              p Do you want to select an existing case study or create a new one that is empty?
            div(class="dialog-item")
              label Create new or select
              app-type-toggle-button(
                v-bind:useColour="false",
                :modelValue='createNewCaseStudy',
                @change='toggleCreateOrSelect',
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
      learningObjectName: '',
      caseStudyName: '',
      caseStudyDescription: '',
      createNewCaseStudy: false, // select or create new seed for the learning object
      description: '',
      actionType: '', // edit or create the learning object
      learningObjectId: '',
      labelText: LABELS,
      searchTerm: '',
      selectedSeedId: '',
      seedList: [],
      seedModel: undefined,
      useCaseStudy: true
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
      if(this.useCaseStudy && this.createNewCaseStudy) {
        return this.caseStudyName.trim() ? /* OK */ undefined :  ERRORS.CASE_STUDY_NAME
      }
      return undefined
    },
    nameValidate () {
      return this.learningObjectName.trim() ? /* OK */ undefined :  ERRORS.NAME_REQUIRED
    },
    seedDescription () {
      return this.selectedSeed ? this.selectedSeed.description : ''
    },
    seedValidate () {
      if(this.useCaseStudy && !this.createNewCaseStudy) {
        return this.selectedSeedId.trim() ? /* OK */ undefined : ERRORS.SEED_REQUIRED
      }
      return undefined
    },
    errors () {
      let errMsg = this.nameValidate || this.seedValidate
      if (this.useCaseStudy) {
        errMsg = errMsg || this.caseStudyNameValidate
      }
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
        = this.learningObjectName
        = this.description
        = this.learningObjectId
        = ''
      this.seedModel = undefined
    },
    toggleCreateOrSelect (val) {
      this.createNewCaseStudy = !this.createNewCaseStudy
    },
    toggleUseCaseStudy (val) {
      this.useCaseStudy = !this.useCaseStudy
      if (this.useCaseStudy) {
        this.fetchSeedSelectionList()
      }
    },
    async fetchSeedSelectionList () {
      const options = {
        appType: this.appType || APP_TYPE_EHR,
        searchTerm: this.searchTerm
      }
      this.seedList = await this.$store.dispatch('seedListStore/fetchSeedSelectionList', options)
      this.seedList.length ? this.selectedSeedId = this.seedList[0]._id : null
    },
    async showLObjDialog (options) {
      this.clearInputs()
      if (options.action === 'edit') {
        const learningObject = options.learningObject
        if (!learningObject) {
          console.error('Coding error. Must provide learning object to edit')
          return
        }
        this.actionType = EDIT_ACTION
        this.learningObjectName = learningObject.name
        this.description = learningObject.description
        this.learningObjectId = learningObject._id
        this.appType = learningObject.appType
        await this.fetchSeedSelectionList()
        this.selectedSeedId = learningObject.seedDataId || ''
        this.useCaseStudy = !!learningObject.seedDataId
      } else if (options.action === 'create') {
        this.actionType = CREATE_ACTION
        this.useCaseStudy = true
        // seedModel is optional. If given then load the correct list of seeds and per-select the given seed
        if (options.seed) {
          this.appType = options.seed.appType
          await this.fetchSeedSelectionList()
          this.selectedSeedId = options.seed._id
        } else {
          await this.fetchSeedSelectionList()
        }
      } else {
        console.error('Coding error. Must provide edit or create option for this dialog open')
        return
      }
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    saveSeed: async function () {
      let seedData = {
        name: this.caseStudyName,
        appType: this.appType,
        description: this.caseStudyDescription,
        contributors: StoreHelper.fullName(),
        ehrData: {},
        tagList: [],
        toolConsumer: StoreHelper.getAuthdConsumerId()
      }
      return await StoreHelper.createSeed(undefined, seedData)
    },
    saveDialog: async function () {
      let aAssignment = {
        name: this.learningObjectName,
        description: this.description,
        toolConsumer: StoreHelper.getAuthdConsumerId(),
      }
      if (this.useCaseStudy) {
        let sId
        if (this.createNewCaseStudy) {
          let seedModel = await this.saveSeed()
          sId = seedModel.id
        } else {
          if (this.seedModel) {
            sId = this.seedModel.id
          } else {
            sId = this.selectedSeedId && this.selectedSeedId.length > 0 ? this.selectedSeedId : null
          }
        }
        aAssignment.seedDataId = sId
      }
      this.$refs.theDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        if (!this.useCaseStudy) {
          await this.$store.dispatch('assignmentStore/clearSeed', this.learningObjectId)
        }
        await StoreHelper.updateAssignment(this, this.learningObjectId, aAssignment)
      } else if (this.isCreate) {
        await StoreHelper.createAssignment(aAssignment)
      }
      this.$emit('update')
    }
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
