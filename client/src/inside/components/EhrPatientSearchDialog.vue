<template lang='pug'>
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      @cancel="cancelDialog",
      @save="saveDialog",
      :saveButtonLabel="ehrText.buttonLabelOpen",
      :disableSave="disableSave",
      has-left-button
    )
      h2(slot="header") {{ titleText }}
      div(slot="body")
        div(class="intro-container") {{ ehrText.patientSearchIntro }}
        div.search-inputs
          div(class="search-input-container search-box")
            label(for="searchNameBox") {{ ehrText.patientSearchLabelMrn }}
            input(
              id='searchMrnBox',
              ref='searchMrnBox',
              type="text",
              v-model='mrnValue',
              @keyup.enter="doSearch",
              @keyup='clearNameValue'
            )
          div(class="search-input-container search-box")
            label(for="searchNameBox") {{ ehrText.patientSearchLabelName }}
            input(
              id='searchNameBox',
              ref='searchNameBox',
              type="text",
              v-model='nameValue',
              @keyup.enter="doSearch",
              @keyup='clearMrnValue'
            )
        div(class="search-input-container search-box")
          button(
            id="searchButton"
            v-on:click="doSearch",
            :disabled="!(mrnValue || nameValue)",
            class='search-button'
          )
            span {{ ehrText.patientSearchButtonLabel }} &nbsp;
            fas-icon(icon="search", class='fa')
        hr
        transition(name="fade")
          div
            ui-spinner-small(refId='searchMatchArea', :loading="isLoading")
            div(id='searchMatchArea')
              div(v-if="searchMatches.length>0")
                span {{ ehrText.patientSearchResultsInstructions }}
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
              div(v-else)
                span {{ehrText.patientSearchNoMatches}}
</template>

<script>


import AppDialog from '@/app/components/AppDialogShell.vue'
import UiSpinnerSmall from '@/app/ui/UiSpinnerSmall.vue'
import StoreHelper from '@/helpers/store-helper'
import { computeDateOfBirth } from '@/ehr-definitions/ehr-def-utils'
import MPatientHelper from '@/helpers/mPatientHelper'
import { t18EhrText } from '@/helpers/ehr-t18'
// import { ehrTextEn } from '../../store/modules/ehrText'

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
    ehrTextEn () {
      return ehrTextEn
    },
    ehrText () { return t18EhrText()},
    disableSave () { return !this.selectedSeedId },
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
        console.log('TODO -- translate search title when we have a seed')
        return 'Select patient: ' + p.keyData.familyName + ' (MRN: ' + p.mrn +')'
      }
      return this.ehrText.patientSearchTitle
    }
  },
  methods: {
    cancelDialog: function () {
      this.clearInputs()
      this.$refs.theDialog.onClose()
    },
    clearInputs: function () {
      this.mrnValue = ''
      this.nameValue = ''
      this.selectedSeedId = undefined
      this.$store.dispatch('mPatientStore/clearSearchMatches')
    },
    clearMrnValue () {
      if (this.nameValue) {
        this.mrnValue = ''
      }
    },
    clearNameValue () {
      if (this.mrnValue) {
        this.nameValue = ''
      }
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
      let lobj = this.$store.getters['assignmentStore/learningObject']
      // is student then lobj will be defined. If case editing then no lobj will be defined
      // limit search to app type when needed.
      options.appType = lobj.appType
      if (options) {
        /*
        Searches the name, description, keyData.familyName and MRN fields.
         */
        await this.$store.dispatch('mPatientStore/searchForPatientsBy', options)
          .catch((err) => {
            alert('Your search did not succeed. Try again with a short search term.')
          })
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
      const labelMrn = this.ehrText.patientBannerMrn
      const labelGen = this.ehrText.patientBannerGender
      const labelDob = this.ehrText.patientBannerDob
      text.push( ( keyData.familyName ? keyData.familyName : '') + (keyData.givenName ? ', ' + keyData.givenName : '') )
      text.push(keyData.mrn ? labelMrn + ' ' + keyData.mrn : '')
      text.push(keyData.gender ? labelGen + ' ' + keyData.gender : '')
      text.push(keyData.gender ? labelDob + ' ' + newDob  : '')
      let fullText =  text.join('. ')
      if( StoreHelper.isSeedEditing() && this.searchMatches.length > 0 ) {
        fullText += '. This case study was created on ' + seed.createDate
      }
      return fullText
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

<style lang="scss" scoped>
@import '../../scss/definitions';

.intro-container {
  margin-bottom: 1rem;
}
#searchButton {
  min-width: 14rem;
}
.search-inputs {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
}
.search-input-container {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 1rem;

  & label {
    min-width: 7rem;
    text-align: right;
  }
}
</style>
