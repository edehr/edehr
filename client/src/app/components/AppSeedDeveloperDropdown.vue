<template lang='pug'>
  div
    app-dropdown(:items="items")
      template(#dropdownTitle)
        div(class='titleBarLabel') {{text.SEED_DEVELOPERS_MENU}}
    ui-agree(ref="seedInfoDialog")
    ehr-visit-day-time-dialog(ref='visitDialog')
</template>
<script>
import { APP_ICONS } from '@/helpers/app-icons'
import { Text } from '@/helpers/ehr-text'
import AppDropdown from '@/app/components/app-dropdown/AppDropdown'
import EhrVisitDayTimeDialog from '@/inside/components/EhrVisitDayTimeDialog'
import UiAgree from '@/app/ui/UiAgree'
export default {
  components: {
    UiAgree,
    EhrVisitDayTimeDialog,
    AppDropdown
  },
  data () {
    return {
      text: Text.SEED_ACTIONS,
    }
  },
  props: {
    seedId: { type: String }
  },
  computed: {
    items () {
      const menuItems = [
      ]
      // TODO add simulation time
      menuItems.push(  {
        label: this.text.MENU_DETAILS,
        toolTip: this.text.MENU_DETAILS_TP ,
        callback: () => {
          this.$router.push({ name: 'seed-view', query: { seedId: this.seedId } })
        },
        icon: APP_ICONS.seed
      })
      menuItems.push(  {
        label: 'Visit day and time',
        toolTip: 'Edit the simulation day and time.',
        callback: () => this.$refs.visitDialog.showDialog(),
        icon: 'book-open'
      })
      menuItems.push( {
        label: this.text.MENU_RETURN,
        toolTip: this.text.MENU_RETURN_TP,
        callback: () => {
          this.$router.push({ name: 'seed-list', query: { seedId: this.seedId } })
        },
        icon: APP_ICONS.returnToSeedList
      })

      return menuItems
    },
  },
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';
.confirmDialog {
  color: $grey80;
}
.titleBarLabel {
  font-size: 1.2rem;
  padding-right: 15px;
}
</style>