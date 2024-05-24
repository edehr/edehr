<template lang='pug'>
  div
    zone-lms-page-banner(:title="seed.name", theme='seed-theme')
      seed-actions(:seedModel='seedModel')
    zone-lms-instructions-header
      p Each Case Study contains the simulated health records for a single patient. Each Case Study contains the simulated health records for a single patient.Each Case Study contains the simulated health records for a single patient. Each Case Study contains the simulated health records for a single patient.

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
      zone-lms-instructions-element The description is used by instructors to help put this case study to use. It is not visible to students.

      div(class="details-row")
        div(class="details-name") Creator Notes
        div(class="details-value")
          in-place-text-area-edit(:value='seedModel.creatorNotes', @change='updateCreatorNotes')
      zone-lms-instructions-element Use the creator notes field to describe this case study in a way that helps faculty know what it can be used for. Keep the description to be about the EHR content and use "faculty notes" in the learning object to describe how the case study is used.

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
          div(v-if="assignmentList.length > 0", v-for="lobj in assignmentList")
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
import { computeDateOfBirth } from '@/ehr-definitions/ehr-def-utils'
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
    assignmentList: function () {
      const seedId = this.seed._id
      let assList = StoreHelper.getAssignmentsList()
      return assList.filter(a => a.seedDataId === seedId)
    },
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
      let newDob = ''
      if (keyData.personAge && keyData.dateOfBirth) {
        newDob = computeDateOfBirth(keyData.personAge, keyData.dateOfBirth)
      }
      return `${keyData.familyName}, ${keyData.givenName}  MRN: ${keyData.mrn}  Gender: ${keyData.gender}  DoB: ${newDob}`
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
      // let sd = this.$store.getters['seedListStore/seedContent']
      // console.log('SeedView loaded ', sd)
      // await this._dispatchSeedListProperty('loadSeedContent', seedId)
      // console.log('loading seed view', seedId)
      // StoreHelper.loadAssignmentAndSeedLists()
      // StoreHelper.loadSeed(seedId)
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
