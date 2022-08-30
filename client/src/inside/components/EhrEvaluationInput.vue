<template lang="pug">
  div(class="ehr-eval-input")
    div(class="evaluation-notes")
      textarea(v-model="theNotes", :disabled='disabled')
    ehr-evaluation-confirm(
      ref='evaluationConfirmDialog',
      @cancelPageLeave='cancelPageLeave',
      @confirmPageLeave='confirmPageLeave'
      )
</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import EhrEvaluationConfirm from '@/inside/components/EhrEvaluationConfirm'
import { LEAVE_PROMPT } from '@/inside/components/page/ehr-helper'

export default {
  components: { EhrEvaluationConfirm },
  data: function () {
    return {
      theNotes: '',
      asStored: '',
    }
  },
  props: {
    disabled: {type: Boolean}
  },
  computed: {
    enableActions () {
      return this.theNotes !== this.asStored
    },
    asStoredEvaluationNotes () {
      return StoreHelper.getEvaluationNotes()
    },
    hasNewData () {
      return (
        this.theNotes && 
        this.theNotes.length > 0 && 
        this.theNotes !== this.asStoredEvaluationNotes
      )
    }
  },
  methods: {
    setNotes (data) {
      this.theNotes = data
      this.asStored = data
    },
    initialize: function () {
      /* restore the data to what is in the db. */
      this.setNotes(StoreHelper.getEvaluationNotes())
    },
    resetNotes: function () {
      this.initialize() // reset the data for next time
    },
    saveNotes: async function () {
      return await StoreHelper.saveEvaluationNotes(this.theNotes).then(() => {
        this.initialize()
      })
    },
    beforePageUnload (event) {
      console.log('beforePageUnload')
      if (this.hasNewData) {
        event.preventDefault()
        event.returnValue = LEAVE_PROMPT
      }
    },
    beforeRouteChange () {
      if (this.hasNewData) {
        this.$refs.evaluationConfirmDialog.showDialog()
      }
    },
    cancelPageLeave () {
      // do nothing
    },
    confirmPageLeave () {
      this.next(true)
    },
  },
  mounted: function (){
    this.initialize()
    console.log('To Do add in route guard for when user edits notes and then tries to leave')
    // the guard below doesn't work because guards only work on the component that
    // is routed.

  },
  created () {
    const _this = this
    this.windowUnloadHandler = function (eData) {
      _this.beforePageUnload(eData)
    }
    window.addEventListener('beforeunload', this.windowUnloadHandler)
  },
  beforeDestroy () {
    if (this.windowUnloadHandler) {
      window.removeEventListener('beforeunload', this.windowUnloadHandler)
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave EhrEvaluationInput')
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    if (!answer) return false
    if(to.meta.layout !== 'inside' && this.hasNewData) {
      this.next = next
      this.beforeRouteChange()
    } else {
      next(true)
    }
  },
  watch: {
    asStoredEvaluationNotes: function (newData) {
      this.setNotes(newData)
    },
    hasNewData: function (state) {
      this.$emit('hasNewDataChanged', state)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.evaluation-notes {
  textarea {
    max-width: 60rem;
    height: 4rem;
  }
}
</style>