<template lang="pug">
  div(class='student-submit')
    div(v-if="showSubmit", :title='ehrText.submitToolTip')
      ui-button(value="ess-submit",
        v-on:buttonClicked="npButtonClicked",
        :class='{draft : hasDraft}',
        :title='submitButtonTip',
        :disabled="disableNavAction"
        ) {{ ehrText.submitActivityButtonLabel }}
    div(v-else, class='status-message') {{ statusMessage }}
    ui-confirm(ref="confirmDialog", v-on:confirm="proceed", :saveLabel='ehrText.submitButtonLabel')
</template>
<script>
import AppDialog from '@/app/components/AppDialogShell.vue'
import UiAgree from '@/app/ui/UiAgree.vue'
import UiButton from '@/app/ui/UiButton.vue'
import UiConfirm from '@/app/ui/UiConfirm.vue'
import StoreHelper from '@/helpers/store-helper'
import { t18EhrText } from '@/helpers/ehr-t18'

export default {
  components: {
    UiAgree,
    UiButton,
    UiConfirm,
    AppDialog
  },
  data () {
    return {
    }
  },
  computed: {
    ehrText () { return t18EhrText()},
    givenName () { return StoreHelper.givenName() },
    hasDraft () { return this.$store.getters['activityDataStore/hasDraftRows'] },
    showSubmit () {
      return !StoreHelper.isSubmitted()
    },
    submitButtonTip () { return this.hasDraft ? this.ehrText.submitWarnHasDraft : ''},
    statusMessage () {
      return StoreHelper.isSubmitted() ? this.ehrText.IS_SUBMITTED : ''
    },
    disableNavAction () {
      return this.$store.state.system.isEditing
    },
  },
  methods: {
    npButtonClicked () {
      this.$refs.confirmDialog.showDialog(
        this.ehrText.SEND_FOR_EVAL_TITLE,
        this.ehrText.SEND_FOR_EVAL_BODY)
    },
    async proceed () {
      await StoreHelper.studentSubmitsAssignment(true)
      const visitId = StoreHelper.getVisitId()
      this.$router.push({ name: 'lms-student-activity', query: { visitId: visitId } })
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../../scss/definitions";
.draft {
  background-color: $table-draft-colour !important;
  color: black !important;
}
.student-submit {
  display: flex;
  flex-direction: row;
  div {
    margin-right: 5px;
  }
}
.status-message {
  font-size: 1.2rem;
  font-weight: normal;
}
button {
  min-width: 5rem;
}
</style>
