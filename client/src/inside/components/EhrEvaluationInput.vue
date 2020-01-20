<template lang="pug">
  div
    div(class="ehr-eval-input")
      div(class="evaluation-notes")
        textarea(v-model="theNotes")
      div(class="evaluation-controls")
        ui-button(v-on:buttonClicked="cancelEvaluationNotes", :disabled="!enableActions", v-bind:secondary="true") Cancel
        ui-button(v-on:buttonClicked="saveEvaluationNotes('saveNext')", :disabled="disableNext", class="is-pulled-right")  Save and next student
        ui-button(v-on:buttonClicked="saveEvaluationNotes('saved')", :disabled="!enableActions", class="is-pulled-right")  Save
    ui-confirm(ref="confirmDialog", @confirm="handleConfirm", @abort="handleReset", @cancel="handleReset" set-footer)
</template>

<script>
import UiButton from '../../app/ui/UiButton'
import UiConfirm from '../../app/ui/UiConfirm'
import StoreHelper from '../../helpers/store-helper'

const HEADER = 'Your evaluation notes have not been saved'
const TEXT = 'Would you like to...?'
const CONFIRM =  {
  beforeRouteLeave: 'Save and Continue',
  previous: 'Save and previous',
  next: 'Save and Next',
}
const CANCEL = 'Discard notes and continue'
const LEAVE_PROMPT = 'Your evaluation notes have not been saved'

export default {
  name: 'EhrEvaluationInput',
  components: {
    UiButton,
    UiConfirm 
  },
  data: function () {
    return {
      theNotes: '',
      asStored: '',
      proceed: false,
      confirmStep: '',
      next: null
    }
  },
  
  props: {
    enableNext: { type: Boolean },
    shouldConfirmNavigation: {type: Boolean},
    navigation: { type: String }
  },
  computed: {
    enableActions () {
      return this.theNotes !== this.asStored
    },
    disableNext () {
      return !(this.enableActions && this.enableNext)
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
  mounted: function (){ 
    this.loadDialog()
  },

  created () {
    this._setupEventHandlers()
  },

  beforeRouteLeave : function (to, from, next) {
    console.log('beforeRouteLeave EhrEvaluationInput')
    if(to.meta.layout !== 'inside' && this.hasNewData) {
      this.confirmStep = 'beforeRouteLeave'
      this.next = next
      this.showConfirmationDialog()
    } else {
      next(true)
    }
  },

  beforeDestroy () {
    this._takeDownEventHandlers()
  },

  watch: {
    asStoredEvaluationNotes: function (newData) {
      // console.log('EhrEvaluationInput watched')
      this.setNotes(newData)
    },

    shouldConfirmNavigation: function (shouldConfirm) {
      if(shouldConfirm && this.hasNewData) {
        this.confirmStep = 'navigation'
        this.showConfirmationDialog()
      } else {
        this.$emit('proceedNavigation')
      }
    },  
  },
  methods: {
    setNotes (data) {
      this.theNotes = data
      this.asStored = data
    },
    loadDialog: function () {
      /* restore the data to what is in the db. */
      this.setNotes(StoreHelper.getEvaluationNotes())
    },
    cancelEvaluationNotes: function () {
      this.loadDialog() // reset the data for next time
      this.$emit('canceled')
    },
    saveEvaluationNotes: function (event) {
      if (event) {
        return StoreHelper.saveEvaluationNotes(this.theNotes).then(() => {
          this.$emit(event)
        })
      } else {
        return StoreHelper.saveEvaluationNotes(this.theNotes)
      }
      
    },

    beforeUnloadListener (event) {
      console.log('beforeUnloadListen')
      let e = event || window.event
      if (this.hasNewData) {
        e.preventDefault()
        e.returnValue = LEAVE_PROMPT
      }
    },


    _setupEventHandlers () {
      const _this = this
      this.windowUnloadHandler = function (eData) {
        _this.beforeUnloadListener(eData)
      }
      window.addEventListener('beforeunload', this.windowUnloadHandler)
    },  

    _takeDownEventHandlers (pageKey) {
      window.removeEventListener('beforeunload', this.windowUnloadHandler)
    },

    handleReset () {
      console.log('handlingReset >> ', this.confirmStep)
      if(this.confirmStep === 'navigation') {
        this.$emit('proceedNavigation')
      } else if (this.confirmStep === 'beforeRouteLeave') {
        this.next(true)
      }
      this.proceed = false
      this.confirmStep = ''
      this.setNotes('')
    },

    showConfirmationDialog () {
      const key =  this.confirmStep === 'navigation' ? this.navigation : this.confirmStep     
      this.$refs.confirmDialog.showDialog(HEADER, TEXT, CONFIRM[key], CANCEL)
    },

    handleConfirm () {
      this.saveEvaluationNotes()
      switch(this.confirmStep) {
      case 'beforeRouteLeave':
        this.next(true)
        break
      case 'navigation':
        this.$emit('proceedNavigation')
        break
      default:
        this.saveEvaluationNotes('saved')
      }
      this.setNotes('')
    },
  }
  
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.ehr-eval-input {
  color: $white;
  width: 100%;

  .evaluation-notes {
    width: 100%;
    textarea {
      width: 100%;
      height: 4rem;
      margin-bottom: 1em;
    }
  }
}
</style>