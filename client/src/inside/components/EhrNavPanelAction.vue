<template lang="pug">
  div
    div(v-if="isStudent")
      ui-button(v-on:buttonClicked="npButtonClicked", :class="`${$options.name}__button`") {{ npButtonLabel }}
      ui-confirm(ref="confirmDialog", v-on:confirm="proceed")
</template>
<script>
import UiButton from '../../app/ui/UiButton.vue'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import EhrActions from '../../helpers/ehr-actions'

export default {
  name: 'EhrNavPanelAction',
  components: {
    UiButton,
    UiConfirm
  },
  data () {
    return {
      ehrAction: {}
    }
  },
  computed: {
    npButtonLabel () {
      return this.ehrAction.getNavPanelActionLabel()
    },
    menuList () {
      // read the menu definition stored in the project root src (client/src)
      return require('../../menuList.json')
    },
    isStudent () {
      return this.$store.getters['visit/isStudent']
    }
  },
  methods: {
    npButtonClicked () {
      if (this.ehrAction.navPanelActionNeedsConfirmation() ) {
        let opts = this.ehrAction.navPanelActionConfirmOptions()
        this.$refs.confirmDialog.showDialog(opts.title, opts.msg)
      } else {
        this.ehrAction.invokeNavPanelAction()
      }
    },
    proceed () {
      this.ehrAction.invokeNavPanelAction()
    }
  },
  created: function () {
    this.ehrAction = new EhrActions(this.$store, this.$router)
  }
}
</script>

<style lang="scss" scoped>
/* @import '../../scss/definitions'; */
</style>
