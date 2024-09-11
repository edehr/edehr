<template lang='pug'>
  div
    zone-lms-page-banner(:title="seed.name", theme='seed-theme')
      seed-actions(:seedModel='seedModel')
    zone-lms-instructions-header
      p Each Case Study contains the simulated health records for a single patient.
      p Remember that Activities have the class list and are linked to a Learning Object.
      p The Learning Object may optionally provide a Case Study.
      p The Case Study provides the EHR content.

    div(class="details-container ", :class='{ draftStyle: hasDraftReports }')
      div(v-if="hasDraftReports", class="details-row")
        div(class="details-name") WARNING
        div(class="details-value").
          This case study contains draft EHR reports. These must be saved as verified reports
          before using this case study with a student assignment.
          Edit this case study in the EHR and complete the reports (or remove them)

      div(class="details-row")
        div(class="details-name") {{text.DESCRIPTION}}
        div(class="details-value")
          div(v-text-to-html="seed.description")
      zone-lms-instructions-element
        p Describe the pedagogical goals for this case study here and use the "Faculty Notes" in the Learning Object to describe how to use the case study in class. Students will not see this description.

      div(class="details-row")
        div(class="details-name") Creator notes
        div(class="details-value")
          div(v-text-to-html="seed.creatorNotes")
      zone-lms-instructions-element
        p Use the creator notes field to describe how to manage the EHR content in the Case Study.
        p Tip: Compose a sequence of events for your scenario. E.g. Admission at 0900, Jane, RN does initial assessments.  Doctor Perry sees the patient at 0915 and enters lab reqs and med orders. Lab results are prepared by Lenah, MLT at 1030. Etc.

      div(class="details-row")
        div(class="details-name") Patient
        div(class="details-value") {{ patientData(seed) }}
      zone-lms-instructions-element The above information has been extracted from the case study to help you identify the contents.

      div(class="details-row")
        div(class="details-name") Type
        div(class="details-value")
          app-type-details-page-element(:appType="seed.appType", :showEx='showEx')
      app-type-details-page-element-explain

      div(class="details-row")
        div(class="details-name") Tags
        div(class="details-value")
          app-tag-list(v-if="tagList.length> 0", :tagList="tagList")
          span(v-else) (there are no tags for this case study)
      zone-lms-instructions-element Content creators (e.g. your faculty) use tags to create categories of case studies.

      div(class="details-row")
        div(class="details-name") {{text.CONTRIBUTORS}}
        div(class="details-value") {{ seed.contributors }}
      zone-lms-instructions-element The above lists the content creators who have contributed to this case study.

      div(class="details-row")
        div(class="details-name") {{text.VERSION}}
        div(class="details-value") {{seed.version}}
      zone-lms-instructions-element Content creators may use this version number to indicate significant changes from a previous version.

      div(class="details-row")
        div(class="details-name") {{ text.STATS }}
        div(class="details-value")
          span {{text.STATS_VALUE(pageCount)}}:
          span(v-for='pgn in pageNamesWithContent', :key='pgn') &nbsp; {{ pgn }}
      zone-lms-instructions-element The above is meant to help you identify the case studies contents.
      div(class="details-row")
        div(class="details-name") {{text.LOBJ_LABEL}}
        div(class="details-value")
          div(v-if="lobjListForSeed.length > 0", v-for="lobj in lobjListForSeed")
            router-link(:to="{ name:'learning-object', query: { learningObjectId: lobj._id }}") {{lobj.name}}
          span(v-else="") No learning objects are using this case study.
      zone-lms-instructions-element The list above provides links to all the learning objects that are using this case study.

      div(class="details-row")
        div(class="details-name") {{text.DATES}}
        div(class="details-value") Created on {{ seed.createDate | formatDateTime }}. Last modified on {{ seed.lastUpdateDate | formatDateTime }}
      div(v-if="showIds", class="details-row")
        div(class="details-name") Id
        div(class="details-value") {{ seedId }}
</template>

<script>
import { APP_ICONS } from '@/helpers/app-icons'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural'
import SeedActions from '@/outside/components/seed-management/SeedActions'
import UiLink from '@/app/ui/UiLink'
import StoreHelper from '@/helpers/store-helper'
import { downloadSeedToFile } from '@/helpers/ehr-utils'
import { Text } from '@/helpers/ehr-text'
import SeedDuplicate from '@/outside/components/seed-management/SeedDuplicate'
import UiButton from '@/app/ui/UiButton'
import SeedListLink from '@/outside/components/seed-management/SeedListLink'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { EhrPages } from '@/ehr-definitions/ehr-models'
import AppTagList from '@/app/components/AppTagList.vue'
import AppTagListEditor from '@/app/components/AppTagListEditor.vue'
import AppTypeDetailsPageElement from '@/outside/components/AppTypeDetailsPageElement.vue'
import ZoneLmsInstructionsHeader from '@/outside/components/ZoneLmsInstructionsHeader.vue'
import ZoneLmsInstructionsElement from '@/outside/components/ZoneLmsInstructionsElement.vue'
import AppTypeDetailsPageElementExplain from '@/outside/components/AppTypeDetailsPageElementExplain.vue'
import InPlaceTextAreaEdit from '@/app/components/InPlaceTextAreaEdit.vue'

export default {
  extends: OutsideCommon,
  components: { InPlaceTextAreaEdit, AppTypeDetailsPageElementExplain, ZoneLmsInstructionsElement, ZoneLmsInstructionsHeader, AppTypeDetailsPageElement, AppTagListEditor, AppTagList, ZoneLmsPageBanner, SeedActions, SeedListLink, UiButton, SeedDuplicate, SeedStructural, UiLink },
  data () {
    return {
      appIcons: APP_ICONS,
      ehrPages: new EhrPages(),
      text: Text.SEED_VIEW_PAGE
    }
  },
  computed: {
    showIds () { return this.isAdmin },
    canDo () { return StoreHelper.isDevelopingContent() },
    hasDraftRows () { return this.statsMeta.draftRows },
    lobjListForSeed () { return this.$store.getters['assignmentListStore/lobjListForSeed'] },
    loCount () { return this.assignmentList.length  },
    hasDraftReports () { return this.statsMeta.draftRows && this.statsMeta.draftRows > 0 },
    pageCount () { return this.pageNamesWithContent.length },
    pageNamesWithContent () {
      // statsKeys contains all the pages with content plus some other fields like meta
      const statsKeys = Object.keys(this.seedStats)
      // pageList contains all the ehr page definitions
      const pageList = this.ehrPages.pageList
      const withContent = pageList.filter(pg => statsKeys.includes(pg.pageKey))
      // console.log ('withContent', withContent)
      // console.log( withContent[0] ? withContent[0].pageTitle : '' )
      return withContent.map( pg => pg.pageTitle).sort()
    },
    seed () { return this.seedModel.seed || {} },
    seedId () { return this.seedModel.id},
    seedModel () {
      return this.$store.getters['seedListStore/seedModel'] || {}
    },
    seedStats () { return this.seed.ehrData ? this.ehrPages.ehrPagesStats(this.seed.ehrData) : {} },
    statsMeta ( ) { return this.seedStats.meta || {}},
    tagList () { return this.seed.tagList || []}
  },
  methods: {
    downloadSeed () {
      const seedId = this.seedId
      // console.log('download seed for ', seedId)
      let sSeedContent = this.seed
      let data = sSeedContent.ehrData
      downloadSeedToFile(seedId, sSeedContent, data, this.seed.tagList)
    },
    gotoEhrWithSeed () {
      this.$router.push({ name: 'ehr', query: { seedEditId: this.seedId } })
    },
    viewEhrCondensed () {
      this.$router.push({ name: 'seed-view-condensed', query: { seedId: this.seedId } })
    },
    patientData (seed) {
      let keyData = seed.keyData || {}
      let name = keyData.familyName ? keyData.familyName +', ' : ''
      name += keyData.givenName ? keyData.givenName : ''
      let gender = keyData.gender ? 'Gender: ' + keyData.gender : ''
      let dob = 'DoB: ' + keyData.dateOfBirth
      return `${name}  MRN: ${keyData.mrn}  ${gender} ${dob}`
    },
    seedDuplicated () {
      // delete to prevent NavigationDuplication error from vue router.
      delete this.$route.query.seedId
      // reload
      const fromStore = this.$store.getters['seedListStore/seedId']
      this.$router.push({ name: 'seed-view', query: { seedId: fromStore } })
    },
    async loadComponent () {
      const fromRoute = this.$route.query.seedId
      const fromStore = this.$store.getters['seedListStore/seedId']
      const seedId = fromRoute ? fromRoute : fromStore
      await this.$store.dispatch('seedListStore/loadSeedContent', seedId)
      const payload = { consumerId: StoreHelper.getAuthdConsumerId(), seedId: seedId}
      await this.$store.dispatch('assignmentListStore/loadLobjForSeedList', payload)
    },
    async updateCreatorNotes (notes) {
      const seedData = JSON.parse(JSON.stringify(this.seedModel))
      seedData.creatorNotes = notes
      await StoreHelper.updateSeed(this, this.seedId, seedData)
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.draftStyle {
  background-color: $table-draft-colour;
}
</style>
