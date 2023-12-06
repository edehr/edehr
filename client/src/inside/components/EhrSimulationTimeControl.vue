<template lang="pug">
  div(class='simulation-time-control', v-if='isSimSignOnEnabled')
    div(v-if='editOn', class='flow_across')
      label(for="sDate") Date:
      input(class="input sdt-date", id="sDate", type="text", v-model="sDate")
      label(for="sTime") Time
      input(class="input sdt-time", id="sTime", type="text", v-model='sTime')
      ui-button(v-on:buttonClicked="saveChange", :disabled='!isReady', title='Save the simulation time' )
        fas-icon(class='fa', :icon='appIcons.save')
      ui-info(title="Simulation time", :text="text.simulationDayTime")
    div(v-else, class='flow_across')
      label(for="sDated") Date:
      input(class="input sdt-date", id="sDated", type="text", :value="cDate", disabled)
      label(for="sTimed") Time
      input(class="input sdt-time", id="sTimed", type="text", :value='cTime', disabled)
      ui-button(v-on:buttonClicked="enableEdit" )
        fas-icon(class='fa', :icon='appIcons.edit', title='Change the simulation time')
      ui-info(title="Simulation time", :text="text.simulationDayTime")

</template>
<script>
import StoreHelper from '@/helpers/store-helper'
import FeatureHelper, { FF_SIGN_ON } from '@/helpers/feature-helper'
import { validDayStr, validTimeStr } from '@/helpers/ehr-utils'
import UiButton from '@/app/ui/UiButton.vue'
import { APP_ICONS } from '@/helpers/app-icons'
import UiInfo from '@/app/ui/UiInfo.vue'
import { ehrInfoText } from '@/appText'

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
      explainText: 'this needs to be described',
      text: ehrInfoText
    }
  },
  computed: {
    isStudent () { return StoreHelper.isStudent() },
    cDate () { return this.$store.getters['visit/simDate']},
    cTime () { return this.$store.getters['visit/simTime']},
    mergedData () { return StoreHelper.getMergedData() },
    isReady () { return validTimeStr(this.sTime) && validDayStr(this.sDate) },
    visitId () { return this.$store.getters['visit/visitId']}
  },
  methods: {
    isSimSignOnEnabled () {
      const cid = this.$store.getters['consumerStore/consumerId']
      return FeatureHelper.isFeatureFlagEnabled(cid, FF_SIGN_ON)
    },
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
