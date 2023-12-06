<template lang="pug">
  div
    zone-lms-page-banner(:title='activityTitle')

    div(class="details-container card")
      div(class="details-row")
        div(class="details-name") Return to activity
        div(class="details-value")
          ui-link(:name="'lms-instructor-activity'")
            // no visit id because we are not changing visit
            fas-icon(class="fa", :icon="appIcons.activity")
            span &nbsp; {{activity.title}}

    div(class="details-container card selected")
      div(class='flow_across')
        div(v-for="key in Object.keys(seq)", class='')
          button(@click='showTime(key)') {{key}}
      seed-structural(:ehrData='sliceData')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import OutsideCommon from '@/outside/views/OutsideCommon'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
import { Text } from '@/helpers/ehr-text'
import ClassListActions from '@/outside/components/lms-activity/ClassListActions.vue'
import ActivityActions from '@/outside/components/lms-activity/ActivityActions.vue'
import UiLink from '@/app/ui/UiLink.vue'
import SeedStructural from '@/outside/components/seed-struct/SeedStructural.vue'
import { EhrPages } from '@/ehr-definitions/ehr-models'
function _makeDayStr (dVal) {
  let d = Number.parseInt(dVal)
  return Number.isInteger(d) ? String(d).padStart(4, '0') : '0'
}
function _rowWork (seq, pageKey, tableKey, row) {
  const rowTime = row[tableKey + '_time']
  const rowDay = _makeDayStr(row[tableKey + '_day'])
  if ((rowDay === undefined || rowTime === undefined))
    return // from a table without day and time values
  const key = rowDay + '-' + rowTime
  seq[key] = seq[key] || []
  let eventData = { pKey: pageKey, tKey: tableKey, data: row }
  seq[key].push(eventData)
}

export function convertToEventSequence (ehrData) {
  const ehrDataInSequence = {}
  let results
  const pages = new EhrPages()
  pages.pageList.forEach(page => {
    const pageKey = page.pageKey
    const pageData = ehrData[pageKey]
    if (!!pageData) {
      page.pageTables.forEach(table => {
        const tableKey = table.elementKey
        const tableData = pageData[tableKey]
        // console.log('tableData', tableKey, tableData)
        if (!!tableData) {
          tableData.forEach(row => {
            _rowWork(ehrDataInSequence, pageKey, tableKey, row)
          })
        }
      })
    }
  })
  results = Object.keys(ehrDataInSequence).sort()
    .reduce(
      (obj, key) => {
        const timeData = ehrDataInSequence[key]
        let timeEhr = {}
        for (let k = 0; k < timeData.length; k++) {
          const { pKey, tKey, data } = timeData[k]
          timeEhr[pKey] = timeEhr[pKey] || {}
          timeEhr[pKey][tKey] = timeEhr[pKey][tKey] || []
          timeEhr[pKey][tKey].push(data)
        }
        obj[key] = timeEhr
        return obj
      },
      {}
    )
  // console.log(seqOrders)
  return results
}

const debug = false
export default {
  extends: OutsideCommon,
  components: { SeedStructural, UiLink, ActivityActions, ClassListActions, ZoneLmsPageBanner  },
  data () {
    return {
      text: Text.ACTIVITY_PAGE,
      ehrData: {},
      sliceData: {},
      seq: {}
    }
  },
  computed: {
    activity () {
      return this.$store.getters['activityStore/activityRecord']
    },
    activityTitle () { return this.isUnleashedActivityEnabled ? this.activity.learningObjectName : this.activity.title
    },
    activityName () {
      return this.activity.learningObjectName
    },
  },
  methods: {
    showTime (key) {
      this.sliceData = this.seq[key]
    },
    async refresh () {
      this.seq = convertToEventSequence(this.ehrData)
      // console.log(this.seq)
    },
    async loadComponent () {
      /*
       */
      if (debug) console.log('CL loadComponent', this.activityId)
      try {
        const vFromRoute = this.$route.query.visitId
        const vFomStore = this.$store.getters['visit/visitId']
        const visitId = vFromRoute ? vFromRoute : vFomStore
        await StoreHelper.setVisitId(visitId)
        let activityRecord = await this.$store.dispatch('activityStore/loadActivityRecord')
        const caseStudyId = activityRecord.caseStudyId
        const seed = await this.$store.dispatch('seedListStore/fetchSeed', caseStudyId)
        this.ehrData = seed.ehrData
        await this.refresh()
      } catch(error){
        console.error('CL loadComponent failed', error)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.classlist-body {
  margin-top: 1rem;
}

.empty-message {
  font-weight: bold;
  font-size: 1.5rem;
}
.e-name {
  min-width: 10rem;
  width: 10rem;
}
.e-date {
  min-width: 7rem;
  width: 7rem;
}
.e-status {
  min-width: 4rem;
  width: 4rem;
}
.e-actions {
  min-width: 9rem;
  width: 9rem;
}
</style>
