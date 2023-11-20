<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theLobjDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        ui-button(
          class="explain-button",
          secondary=true,
          @buttonClicked="showEx = !showEx")
          span {{showEx ? 'Hide the explanation ' : 'Tell me about this dialog'}} &nbsp;
        div  &nbsp;

        div(class="dialog-step")
          label {{ cText.intro }}
        dialog-instructions-element(:show-ex="showEx") Essentially, a learning object has a name, description (the instructions for students) and an optional case study. This is the content the students will work with.


        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Name: &nbsp;
            input(type="text", id="name",  class="object-name", v-model="learningObjectName", v-validate="nameValidate")
        dialog-instructions-element(:show-ex="showEx") Step 1. Give this learning object a name, for the student to recognize. Often this is the simulated patient name, perhaps with its MRN.


        div(class="dialog-step")
          div(class="dialog-item")
            label(for="name") Description: &nbsp;
            textarea(v-model="description")
          dialog-instructions-element(:show-ex="showEx") Step 2. Describe what the student needs to do with the content and what learning objectives they ought to accomplish.

        div(v-if='allowSeedSelect', class="dialog-step")
          div(class="dialog-item", id='setEnabler')
            label() Shall this learning object provide a case study?
            input(id='enablerYes', type="radio", name="enabler", value="yes", v-model="enableSeedSelector",  @change="changeEnabler($event)")
            label(for="enablerYes") Yes
            input(id='enablerNo', type="radio", name="enabler", value="no", v-model="enableSeedSelector",  @change="changeEnabler($event)")
            label(for="enablerNo") No
            div {{ enableSeedSelector === 'yes' ? '(Students will see the case study you select in the next step)': '(Students will search for the correct patient (case study))' }}
          dialog-instructions-element(:show-ex="allowSeedSelect && showEx") Step 3. Determine if you want the student to work with a case study or to start with a blank charting system and find their patient?

        div(v-if='allowSeedSelect && "no" === enableSeedSelector', class="dialog-step")
          label Application type:
          app-type-radio(:value="checkAppTypes", @changeAppTypes='changeAppTypes')
        dialog-instructions-element(:show-ex="allowSeedSelect && 'no' === enableSeedSelector && showEx") Step 4. Select the application type for the lesson. When the student searches for patients they will only be searching case studies with the chosen application type.

        div The selected seedModel name is: {{ seedModel ? seedModel.name : '' }}
        dialog-instructions-element(:show-ex="showEx && enableSeedSelector ==='yes'")
          p Step 4. Select a case study to provide the simulated patient health records.
          p If you need to create a new case study then save your work. Create the new case study and then return to set up this learning object.

        transition(name="fade",  mode="out-in")
          div(v-if='enableSeedSelector ==="yes"')
            seed-select-component(:forDialog="true",
              ref="seedSelectComponent",
              @selectSeed='selectSeed')
</template>
<!--
This dialog has some complicated logic, but that is OK because it gives us so much reuse.  There are several entry points,

1. createWithSeed  From Seed View page. The call is to create a new LObj with a given seed.
allowSeedSelect = false

2. create   From the LObj listing page. The call is to create a new LObj with the option to use a seed
allowSeedSelect = true
Then, in the dialog the user can select .....


3. edit    From the LObj page. The call is to edit a LObj.
allowSeedSelect = true
Then as above if user ...

-->

<script>
import AppDialog from '@/app/components/AppDialogShell'
import AppTypeRadio from '@/app/components/AppTypeRadio.vue'
import StoreHelper, { APP_TYPE_LIS } from '@/helpers/store-helper'
import { Text, TextLearningObjects } from '@/helpers/ehr-text'
import UiInfo from '@/app/ui/UiInfo.vue'
import SeedSelectComponent from '@/outside/components/seed-management/SeedSelectComponent.vue'
import DialogInstructionsElement from '@/outside/components/DialogInstructionsElement.vue'
import UiButton from '@/app/ui/UiButton.vue'
const TITLES = Text.LOBJ_DIALOG.TITLES
const ERRORS = Text.LOBJ_DIALOG.ERRORS
const EDIT_ACTION = 'edit'
const CREATE_ACTION = 'create'
const CREATE_WITH_SEED = 'createWithSeed'
export default {
  data () {
    return {
      showEx: false, // default to not show help text.
      actionType: '', // edit or create the learning object
      cText: TextLearningObjects,
      checkAppTypes: APP_TYPE_LIS,
      learningObjectName: '',
      learningObject: {},
      description: '',
      learningObjectId: '',
      selectedSeedId: '',
      seedModel: undefined,
      allowSeedSelect: true,
      enableSeedSelector: false,
      useGivenSeed: false
    }
  },
  components: { UiButton, DialogInstructionsElement, AppTypeRadio, SeedSelectComponent, UiInfo, AppDialog },
  computed: {
    nameValidate () {
      return this.learningObjectName.trim() ? /* OK */ undefined :  ERRORS.NAME_REQUIRED
    },
    errors () {
      let em = []
      let nv = this.nameValidate
      if (nv) {
        em.push(nv)
      }
      if (!this.seedModel && !this.checkAppTypes) {
        // If this error happens its probably a coding error
        em.push(ERRORS.APP_TYPE_REQUIRED)
      }
      return em
    },
    disableSave () {
      return this.errors.length !== 0
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
  },
  methods: {
    changeAppTypes (checkAppTypes) {
      this.checkAppTypes = checkAppTypes
    },
    clearInputs: function () {
      this.selectedSeedId
        = this.checkAppTypes
        = this.actionType
        = this.learningObjectName
        = this.description
        = this.learningObjectId
        = ''
      this.seedModel = undefined
      this.useGivenSeed = false
    },
    selectSeed ( selectedSeed ) {
      console.log('selectSeed', selectedSeed)
      this.seedModel = selectedSeed
    },
    changeEnabler (event) {
      this.enableSeedSelector = event.target.value
      if (this.enableSeedSelector ==='yes') {
        console.log('changeEnabler', this.enableSeedSelector)
        this.fetchSeedSelectionList()
      } else {
        this.checkAppTypes = this.checkAppTypes || APP_TYPE_LIS
        this.seedModel = undefined
      }
    },
    fetchSeedSelectionList () {
      this.$nextTick( async () => {
        if (this.$refs.seedSelectComponent ) {
          await this.$refs.seedSelectComponent.fetchSeedList()
        }
      })
    },
    async showLObjDialog (options) {
      this.clearInputs()
      if (options.action === EDIT_ACTION) {
        const learningObject = this.learningObject = options.learningObject
        if (!learningObject) {
          throw Error('Coding error. Must provide learning object to edit')
        }
        this.actionType = EDIT_ACTION
        if (learningObject.seedDataId) {
          this.seedModel = await this.$store.dispatch('seedListStore/fetchSeed', learningObject.seedDataId)
        }
        this.learningObjectName = learningObject.name
        this.description = learningObject.description
        this.learningObjectId = learningObject._id
        await this.fetchSeedSelectionList()
        this.useGivenSeed = false
        this.allowSeedSelect = true
      }
      if (options.action === CREATE_ACTION) {
        this.actionType = CREATE_ACTION
        this.allowSeedSelect = true
      }
      if (options.action === CREATE_WITH_SEED) {
        if (!options.seed) {
          throw Error('Coding error. Must provide case study with LObj')
        }
        this.actionType = CREATE_ACTION
        this.allowSeedSelect = false
        this.useGivenSeed = true
        this.seedModel = options.seed
        console.log('asdadsa------', this.seedModel)
      }
      if (this.seedModel) {
        this.checkAppTypes = this.seedModel.appType
      }
      if (this.allowSeedSelect) {
        this.enableSeedSelector ='yes'
        await this.fetchSeedSelectionList()
      }
      this.$refs.theLobjDialog.onOpen()
    },
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theLobjDialog.onClose()
    },
    saveDialog: async function () {
      let aAssignment = {
        _id: this.learningObjectId || undefined,
        toolConsumer: StoreHelper.getAuthdConsumerId(),
        name: this.learningObjectName,
        description: this.description,
        mPatientAppType: this.checkAppTypes,
        seedDataId: this.seedModel ? this.seedModel._id : undefined
      }
      this.$refs.theLobjDialog.onClose()
      if (this.actionType === EDIT_ACTION) {
        this.$emit('update', aAssignment)
      } else if (this.actionType === CREATE_ACTION) {
        this.$emit('create', aAssignment)
      }
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
.dialog-item {
  display: flex;
  margin-bottom: 1rem;
  textarea {
    padding: 10px;
    max-width: 80%;
    line-height: 1.5;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px #999;
  }
  //label:nth-child(1) {
  //  border: 1px;
  //  font-weight: bold;
  //  padding-right: 5px;
  //  min-width: $labelWidth;
  //  max-width: $labelWidth;
  //  width: $labelWidth;
  //}
}
#setEnabler label {
  padding-left: 5px;
  padding-right: 8px;
}
.select-seed-section {
  padding: 5px;
}
</style>
