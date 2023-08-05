<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      h2(slot="header") {{dialogHeader}}
      div(slot="body")
        div
          div(class="top-row")
            div
              label {{cText.nameLabel}}
              input(type="text", v-model="assignmentName", v-validate="nameValidate")
            div
              label(:title="labelText.SEED_OBJ_TP")  {{labelText.SEED_OBJ}}
              select(v-if="!isCreate", v-model="selectedSeed", v-validate="seedValidate")
                option(value="")
                option(v-for="seed in seedOptionList", :value="seed.id", :selected="seed.selected") {{ seed.name}} {{seed.selected}}
              div(v-else)
                input(type="text", disabled , :value='seedModel.seed.name')
          div
            label {{labelText.DESCRIPTION}}
            textarea(v-model="description")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import StoreHelper from '@/helpers/store-helper'
import { Text, TextLearningObjects } from '@/helpers/ehr-text'
const TITLES = Text.LOBJ_DIALOG.TITLES
const ERRORS = Text.LOBJ_DIALOG.ERRORS
const LABELS = Text.LOBJ_DIALOG.LABELS
const EDIT_ACTION = 'edit'
const CREATE_ACTION = 'create'
export default {
  data () {
    return {
      assignmentName: '', description: '',
      actionType: '',
      assignmentId: '',
      labelText: LABELS,
      selectedSeed: '',
      inUseIds: [],
      showAdvanced: false,
      seedModel: undefined
    }
  },
  components: { AppDialog },
  computed: {
    cText () { return TextLearningObjects },
    isCreate () { return this.actionType === CREATE_ACTION },
    nameValidate () {
      return this.assignmentName.trim() ? undefined :  ERRORS.NAME_REQUIRED
    },
    seedValidate () {
      return this.isCreate || this.selectedSeed.trim() ? undefined :  ERRORS.SEED_REQUIRED
    },
    errors () {
      const errmsg = this.nameValidate || this.seedValidate
      return errmsg ? [errmsg] : []
    },
    disableSave () {
      const errmsg = this.nameValidate || this.seedValidate
      const isInvalid = !!errmsg
      return isInvalid
    },
    dialogHeader () {
      return TITLES[this.actionType] || ''
    },
    seedOptionList () {
      let sdList = StoreHelper.getSeedDataList(this)
      return sdList.map(sd => {
        return { id: sd._id, name: sd.name }
      }).sort( (a,b) => a.name.localeCompare(b.name))
    },
    hasAdvanced () {
      return this.actionType === EDIT_ACTION
    }
  },
  methods: {
    clearInputs: function () {
      this.selectedSeed
        = this.actionType
        = this.assignmentName
        = this.description
        = this.assignmentId
        = ''
      this.seedModel = undefined
    },
    showDialog (assignmentData, seedModel) {
      this.clearInputs()
      if (assignmentData) {
        this.actionType = EDIT_ACTION
        this.assignmentName = assignmentData.name
        this.description = assignmentData.description
        this.assignmentId = assignmentData._id
        this.selectedSeed = assignmentData.seedDataId || ''
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
      if(this.isCreate) {
        sId = this.seedModel.id
      }
      else {
        sId = this.selectedSeed && this.selectedSeed.length > 0 ? this.selectedSeed : null
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
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';
.top-row {
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  div {
    margin-right: 1rem;
  }
  div:last-child {
    margin: 0
  }
}

.top-row div label,
.top-row div input {
  display: block;
  width: 100%;
}

@media screen and (max-width: $dialog-width-threshold){
  .top-row {
    grid-template-columns: 1fr;
  }
}
</style>
