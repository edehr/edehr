<template lang='pug'>
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      saveButtonLabel="Open",
      :disableSave="disableSave",
      has-left-button
    )
      h2(slot="header") {{ titleText }}
      div(slot="body")
        div Search by MRN or patient's family name
        div(class="flow_across table_space_across search-box")
          input(
            ref='searchMrnBox',
            type="text",
            placeholder='MRN',
            v-model='mrnValue',
            @keyup.enter="doSearch"
          )
          input(
            ref='searchNameBox',
            type="text",
            v-model='nameValue',
            placeholder='Family name',
            @keyup.enter="doSearch"
          )
          button(
            v-on:click="doSearch",
            :disabled="!mrnValue || !nameValue",
            class='search-button'
          )
            fas-icon(icon="search", class='fa')
        transition(name="fade")
          div
            ui-spinner-small(refId='searchMatchArea', :loading="isLoading")
            div(id='searchMatchArea')
              div(v-if="searchMatches.length>0") Select patient
                div(v-for='p in searchMatches', :key="p._id")
                  input(
                    type='radio',
                    :id="p._id",
                    :value='p._id',
                    v-model='selectedSeedId',
                    @change='patientSelected',
                    :ref='p._id'
                  )
                  label(:for='p._id', class='selectable') &nbsp; {{patientData(p)}}
              div(v-else) No matches
</template>

<script>


import AppDialog from '@/app/components/AppDialogShell.vue'
import UiSpinnerSmall from '@/app/ui/UiSpinnerSmall.vue'
import StoreHelper from '@/helpers/store-helper'
import { computeDateOfBirth } from '@/ehr-definitions/ehr-def-utils'
import MPatientHelper from '@/helpers/mPatientHelper'

export default {
  data () {
    return {
      mrnValue: '',
      nameValue: '',
      selectedSeedId: undefined,
    }
  },
  components: { UiSpinnerSmall, AppDialog },
  computed: {
    disableSave () { return false },
    isLoading () { return StoreHelper.isLoading() },
    activePatientList () {
      return MPatientHelper.getCurrentPatientList()
    },
    searchMatches () {
      return this.$store.getters['mPatientStore/searchMatches']
    },
    selectedPatientSeed () {
      let sp = undefined
      if (this.selectedSeedId) {
        sp = this.searchMatches.find( p => p._id === this.selectedSeedId)
      }
      return sp
    },
    titleText () {
      if (this.selectedPatientSeed) {
        let p = this.selectedPatientSeed
        return 'Select patient: ' + p.keyData.familyName + ' (MRN: ' + p.mrn +')'
      }
      return 'Search for patient'
    }
  },
  methods: {
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    clearInputs: function () {
      this.mrnValue = ''
      this.selectedSeedId = undefined
      this.$store.dispatch('mPatientStore/clearSearchMatches')
    },
    async doSearch () {
      let options
      let mrnValue = this.mrnValue
      let nameValue = this.nameValue
      if (mrnValue) {
        options = { mrn: mrnValue }
      } else if (nameValue) {
        options = { name: nameValue }
      }
      if (options) {
        await this.$store.dispatch('mPatientStore/searchForPatientsBy', options)
      }
    },
    patientSelected () {
      this.$refs.theDialog.focusOnSave()
    },
    patientData (seed) {
      // console.log('Patient data from seed keyData', seed.keyData)
      const keyData = seed.keyData
      const newDob = computeDateOfBirth(keyData.personAge, keyData.dateOfBirth) || ''
      const text = []
      text.push( ( keyData.familyName ? keyData.familyName : '') + (keyData.givenName ? ', ' + keyData.givenName : '') )
      text.push(keyData.mrn ? 'MRN: ' + keyData.mrn : '')
      text.push(keyData.gender ? 'Gender ' + keyData.gender : '')
      text.push(keyData.gender ? 'DoB ' + newDob  : '')
      if( StoreHelper.isSeedEditing() && this.searchMatches.length > 0 ) {
        text.push('created: ' + keyData.createDate )
      }
      return text.join(' - ')
    },
    showPatientDialog () {
      this.clearInputs()
      this.$refs.theDialog.onOpen()
      this.$nextTick(() => {
        this.$refs.searchMrnBox.focus()
      })
    },
    saveDialog: async function () {
      this.$refs.theDialog.onClose()
      this.$emit('openPatient', this.selectedPatientSeed)
    },
  },
  watch: {
    isLoading () {
      // goal is to set the focus on the first search result
      // To do Limit this action to when the dialog is open.
      // console.log('is loading change state', this.isLoading)
      if (!this.isLoading ) {
        let matchList = this.searchMatches
        if (matchList.length > 0) {
          // console.log('is loading is off and there are matches')
          let firstMrn = matchList[0]._id
          this.$nextTick(() => {
            // console.log('matchList first', this.$refs[firstMrn][0])
            this.$refs[firstMrn][0].focus()
          })
        }
      }
    }
  }
}
</script>
