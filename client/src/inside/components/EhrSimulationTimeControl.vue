<template lang="pug">
  div(class='simulation-time-control')
    div(v-if='editOn', class='flow_across')
      label(for="sDate") {{ehrText.simulationDayTimeDay}}
      input(class="input sdt-date", id="sDate", type="text", v-model="sDate")
      label(for="sTime") {{ehrText.simulationDayTimeTime}}
      input(class="input sdt-time", id="sTime", type="text", v-model='sTime')
      ui-button(value="estc-save", v-on:buttonClicked="saveChange", :disabled='!isReady', :text="ehrText.simulationDayTime" )
        fas-icon(class='fa', :icon='appIcons.save')
      ui-info(title="Simulation time", :text="ehrText.simulationDayTime")
    div(v-else, class='flow_across')
      div(class="sdt-display") {{ dateVal  }}T{{ cTime }}
      ui-button(v-if="showEditTime", value="estc-enable", v-on:buttonClicked="enableEdit" )
        fas-icon(class='fa', :icon='appIcons.edit',
          :title='ehrText.simulationDayTimeToolTip')

</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import { validDayStr, validTimeStr } from '@/helpers/ehr-utils'
import UiButton from '@/app/ui/UiButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import UiInfo from '@/app/ui/UiInfo.vue'
import { t18EhrText } from '@/helpers/ehr-t18'
import { getCurrentSimDate, getCurrentSimTime, isActivitySimTimeActive, simDateCalc } from '@/helpers/date-helper'

export default {
  components: {
    UiInfo,
    UiButton
  },
  data () {
    return {
      appIcons: APP_ICONS,
      editOn: false,
      sDate: '',
      sTime: '',
    }
  },
  computed: {
    isActivitySimTimeActive () { return isActivitySimTimeActive() },
    ehrText () { return t18EhrText()},
    isStudent () { return StoreHelper.isStudent() },
    isDevelopingContent () { return StoreHelper.isDevelopingContent },
    showEditTime () { return this.isStudent ? !this.isActivitySimTimeActive : this.isDevelopingContent},
    cDate () { return getCurrentSimDate() },
    cTime () { return getCurrentSimTime() },
    mergedData () { return StoreHelper.getMergedData() },
    isReady () { return validTimeStr(this.sTime) && validDayStr(this.sDate) },
    visitId () { return this.$store.getters['visit/visitId']},
    dateVal () {
      return simDateCalc(this.cDate)
    }
  },
  methods: {
    isActualDateEnabled () {
      // const cid = this.$store.getters['consumerStore/consumerId']
      return true //FeatureHelper.isFeatureFlagEnabled(cid, FF_ACTUAL_DATE)
    },
    // isSimSignOnEnabled () {
    //   const cid = this.$store.getters['consumerStore/consumerId']
    //   return FeatureHelper.isFeatureFlagEnabled(cid, FF_SIGN_ON)
    // },
    enableEdit () {
      this.sDate= this.cDate
      this.sTime = this.cTime
      this.editOn = true
    },
    saveChange () {
      this.editOn = false
      const payload = { visitId: this.visitId, cDate: this.sDate, cTime: this.sTime}
      this.$store.dispatch('visit/setSimulationDateTime', payload)
    }
  },
}
</script>
<style lang="scss" scoped>
@import "../../scss/definitions";
.sdt-display {
  font-weight: 600;
  padding: 5px 5px 5px 7px;
}
.sdt-date {
  max-width: 2rem;
}
.sdt-time {
  max-width: 4rem;
}
.button {
  padding: 5px 5px 5px 7px;
}
</style>
