<template lang="pug">
  div
    div(v-if="showNavAction")
      ui-button(v-on:buttonClicked="npButtonClicked", :disabled="disableNavAction") {{ npButtonLabel }}
      ui-confirm(ref="confirmDialog", v-on:confirm="proceed")
      app-dialog(
        :isModal="true",
        ref="submittedConfirm",
        :useSave="false",
        cancelButtonLabel="Continue to LMS",
        @cancel="ehrAction.gotoLMS()"
        )
        h2(slot="header") {{ confirmTitle }}
        div(slot="body") {{ confirmBody }}
</template>
<script>
import UiButton from '../../app/ui/UiButton.vue'
import UiConfirm from '../../app/ui/UiConfirm.vue'
import EhrActions from '../../helpers/ehr-actions'
import AppDialog from '../../app/components/AppDialogShell.vue'

const TITLE = 'Assignment submitted successfully'

export default {
  name: 'EhrNavPanelAction',
  components: {
    UiButton,
    UiConfirm,
    AppDialog
  },
  data () {
    return {
      ehrAction: {},
      confirmTitle: TITLE,
      confirmBody: ''
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
    showNavAction () {
      return this.$store.getters['visit/isStudent']
    },
    disableNavAction () {
      return this.$store.state.system.isEditing
    }
  },
  methods: {
    npButtonClicked () {
      if (this.ehrAction.isUnsubmittedStudent() ) {
        let opts = this.ehrAction.navPanelActionConfirmOptions()
        this.$refs.confirmDialog.showDialog(opts.title, opts.msg)
      } else {
        this.ehrAction.invokeNavPanelAction()
      }
    },
    proceed () {
      this.ehrAction.invokeNavPanelAction()
      this.$refs.submittedConfirm.onOpen()
    },
  },
  created: function () {
    this.ehrAction = new EhrActions(this.$store, this.$router)
    this.confirmBody = this.ehrAction.getStudentHasSubmitted()
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions'; 

.EhrNavPanel .button {
  width: 100%;
  margin-bottom: 0;
}
</style>
