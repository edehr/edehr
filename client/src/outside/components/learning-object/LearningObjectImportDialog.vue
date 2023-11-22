<template lang="pug">
  div
    app-dialog(:isModal="true", ref="theDialog", @cancel="cancelDialog", @save="saveDialog", :disableSave="disableSave", :errors="errors")
      div(slot="header")
        h2 {{text.TITLES.import}}
        div {{text.TITLES.import_sub}}
      div(slot="body")
        div(class="flow_across table_space_across")
          label(class="file-label")
            input(
              type="file",
              id="fileUploadInput",
              accept="application/json",
              ref="fileUploadInput",
              @change="setFile"
            )
            span &nbsp; {{ text.LABELS.FILE_INPUT }}
        transition(name="fade",  mode="out-in")
          div(v-if="hasLObj")
            hr
            h2 {{ text.LABELS.LOBJ }}
              ui-info(:title="text.LABELS.LOBJ", :text="sText.LOBJ_EXPLAINED")
            div(class="grid-left-to-right-2")
              label(class="name-label") {{ text.LABELS.LOBJ_NAME }}
              input(class="input", type="text", v-model="lobj_name", v-validate="lObjNameValidate")
            div(class="grid-left-to-right-2")
              label {{ text.LABELS.DESCRIPTION }}
                ui-info(:title="text.LABELS.DESCRIPTION", :text="sText.DESCRIPTION_EXPLAINED")
              textarea(v-model="lobj_description")
        transition(name="fade",  mode="out-in")
          div(v-if="hasSeed")
            hr
            h2 {{ text.LABELS.SEED_OBJ }}
            div(class="grid-left-to-right-2")
              label(class="name-label") {{ text.LABELS.SEED_NAME }}
              input(class="input", type="text", v-model="seed_name", v-validate="caseStudyNameValidate")
            div(class="grid-left-to-right-2")
              label {{ text.LABELS.SEED_DESCRIPTION }}
                ui-info(:title="text.LABELS.SEED_DESCRIPTION", :text="sText.SEED_DESCRIPTION_TP")
              textarea(v-model="seed_description")
            div(class="grid-left-to-right-2")
              label {{ text.LABELS.APP_TYPE }}
                ui-info(:title="text.LABELS.APP_TYPE", :text="sText.APP_TYPE_TP")
              div {{ seed_appType }}
                div {{ appTypeDescriptionText }}
            div(class="grid-left-to-right-2")
              label(class="tags-label") {{ text.LABELS.SEED_TAGS }}
                ui-info(:title="text.LABELS.SEED_TAGS", :text="sText.SEED_TAGS_TP")
              app-tag-list-editor(:tagList="seed_tagList", @update='updateTagList')
            div(class="grid-left-to-right-2")
              label {{ text.LABELS.SEED_CONTRIB }}
                ui-info(:title="text.LABELS.SEED_CONTRIB", :text="sText.SEED_CONTRIB_TP")
              input(class="input", type="text", v-model="seed_contributors")
            div(class="grid-left-to-right-2")
              label {{ text.LABELS.SEED_VERSION }}
                ui-info(title="text.LABELS.SEED_VERSION", :text="sText.SEED_VERSION_TP")
              input(class="input", type="text", v-model="seed_version")
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import { Text } from '@/helpers/ehr-text'
import AppTypeToggleButton from '@/outside/components/seed-management/AppTypeToggleButton.vue'
import StoreHelper, { APP_TYPE_EHR, APP_TYPE_LIS } from '@/helpers/store-helper'
import AppTagListEditor from '@/app/components/AppTagListEditor.vue'
import UiInfo from '@/app/ui/UiInfo.vue'
import { readFile, validateLObjFileContents } from '@/helpers/ehr-utils'

/*  ***************
 * There are some sample LObj export files to use for testing in the /client/test-resources folder
 * ***************  */

export default {
  data () {
    return {
      lobj_description: '',
      lobj_name: '',
      seed_appType: '',
      seed_contributors: '',
      seed_description: '',
      seed_ehrData: {},
      seed_mrn: '',
      seed_name: '',
      seed_tagList: [],
      seed_version: '',
      // mPatientAppType
      // mPatientFilterTag
      lObjFile: null,
      text: Text.LOBJ_DIALOG,
      sText: Text.LOBJ_SHARED,
      uploadError: '',
      uploadWarn: '',
      uploadedLObj: undefined
    }
  },
  components: { UiInfo, AppTagListEditor, AppTypeToggleButton, AppDialog },
  computed: {
    appTypeDescriptionText () {
      const APP_TYPE = this.sText.APP_TYPE
      return this.isEHR_Showing ? APP_TYPE.EHR : (this.isLIS_Showing ? APP_TYPE.LIS : APP_TYPE.NONE )
    },
    disableSave () { return this.errors.length > 0 },
    hasLObj () { return !!this.uploadedLObj },
    hasSeed () { return this.uploadedLObj && this.uploadedLObj.caseStudy },
    isEHR_Showing () { return APP_TYPE_EHR === this.seed_appType },
    isLIS_Showing () { return APP_TYPE_LIS === this.seed_appType },
    lObjNameValidate () {
      const ERRORS = this.text.ERRORS
      return this.lobj_name && this.lobj_name.trim().length > 0 ? /* OK */ undefined :  ERRORS.NAME_REQUIRED
    },
    caseStudyNameValidate () {
      const ERRORS = this.text.ERRORS
      let result = true
      if(this.hasSeed) {
        result = this.seed_name.trim().length > 0 ? /* OK */ undefined : ERRORS.CASE_STUDY_NAME
      }
      return result
    },
    errors () {
      let errs = []
      this.uploadError ? errs.push(this.uploadError) : null
      this.hasLObj && this.lObjNameValidate ? errs.push(this.lObjNameValidate) : null
      this.hasSeed && this.caseStudyNameValidate ? errs.push(this.caseStudyNameValidate) : null
      return errs
    },
    warnings () { return this.uploadWarn },
    hasUploadLObj () {
      return this.uploadedLObj && Object.keys(this.uploadedLObj).length > 0
    },
    uploadSeedPages () {
      let result = []
      if (this.uploadedLObj.ehrData) {
        result = Object.keys(this.uploadedLObj.ehrData)
        result = result.filter( k => k !== 'meta')
      }
      return result.join(', ')
    },
  },
  methods: {
    clearData () {
      this.lobj_description= ''
      this.lobj_name= ''
      this.seed_appType= ''
      this.seed_contributors= ''
      this.seed_description= ''
      this.seed_ehrData= {}
      this.seed_mrn= ''
      this.seed_name= ''
      this.seed_tagList= []
      this.seed_version= ''
      this.lObjFile = ''
      this.uploadedLObj = undefined
      this.uploadError = ''
      this.uploadWarn = ''
    },
    copyData () {
      if (this.hasUploadLObj) {
        const lobj = this.uploadedLObj
        this.lobj_name = lobj.name
        this.lobj_description = lobj.description
        const seed = lobj.caseStudy
        if (seed) {
          this.seed_appType = seed.appType
          this.seed_description = seed.description
          this.seed_contributors = seed.contributors || ''
          this.seed_ehrData = seed.ehrData
          this.seed_name = seed.name
          this.seed_mrn = seed.mrn
          this.seed_tagList = seed.tagList || []
          this.seed_version = seed.version || '1.0'
          const user = StoreHelper.fullName()
          if (!this.seed_contributors.includes(user)) {
            if (this.seed_contributors) {
              this.seed_contributors += ', ' + user
            } else {
              this.seed_contributors = user
            }
          }
        }
      }
    },
    async showLObjImportDialog () {
      this.clearData()
      document.getElementById('fileUploadInput').value= null
      this.$refs.theDialog.onOpen()
    },
    cancelDialog: function () {
      this.$refs.theDialog.onClose()
    },
    saveDialog: async function () {
      this.$refs.theDialog.onClose()
      let sId
      if (this.hasSeed) {
        let seedData = {
          appType: this.appType,
          description: this.seed_description,
          contributors: this.seed_contributors,
          ehrData: this.seed_ehrData,
          name: this.seed_name,
          mrn: this.seed_mrn,
          tagList: this.seed_tagList,
          version: this.seed_version,
          toolConsumer: StoreHelper.getAuthdConsumerId()
        }
        let seedModel = await StoreHelper.createSeed(undefined, seedData)
        sId = seedModel.id
      }
      let aAssignment = {
        name: this.lobj_name,
        description: this.lobj_description,
        seedDataId: sId,
        toolConsumer: StoreHelper.getAuthdConsumerId(),
      }
      await StoreHelper.createAssignment(aAssignment)
      this.$emit('update')
    },
    saveSeed: async function () {
    },
    setFile (event) {
      this.clearData()
      const file = event.target.files[0]
      this.lObjFile = file
      readFile(file).then( (contents) => {
        let {lObj, warnMsg, invalidMsg} = validateLObjFileContents(contents)
        if (invalidMsg) {
          this.uploadError = invalidMsg
        } else {
          if (warnMsg) {
            this.uploadWarn = warnMsg
          }
          this.uploadedLObj = lObj
          this.copyData()
        }
      })
    },
    updateTagList (newListCsv) {
      this.tagList = newListCsv ? newListCsv.split(',') : []
    }
  },
  mounted () {
    this.clearData() // initialize
  }
}
</script>

<style lang="scss" scoped>
@import '../../../scss/definitions';

.grid-left-to-right-2 {
  display: grid;
  grid-auto-flow: row;
  margin-bottom: 1rem;
  grid-template-columns: 0.5fr 1fr;
}
.grid-left-to-right-2 > label{
  text-align: right;
  width: 20rem;
}
</style>
