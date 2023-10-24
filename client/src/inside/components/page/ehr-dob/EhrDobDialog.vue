<template lang="pug">
  div
    app-dialog(
      :isModal="true",
      ref="theDialog",
      :errors="errorList",
      :disableSave="!validInput",
      @cancel="closeDialog",
      @save="saveDialog")

      h3(slot="header") Set patient's month and day of birth
      div(slot="body")
        div
          label(for="monthVal", class='dobLabel') Month:
          input(class="input text-input dobInput", name="monthVal", v-model="monthVal")

          label(for="dayVal", class='dobLabel') Day:
          input(class="input text-input dobInput", name="dayVal", v-model="dayVal")
        div
          label(for="personAge", class='dobLabel') Patient's age:
          span(class="dobInput") {{ personAge }}
        div(class='results', v-show='validInput')
          h3 Birthdate: {{ dateStr }}
          p The calculated birthdate above is based on given month, day and patient age.
</template>

<script>
import AppDialog from '@/app/components/AppDialogShell'
import UiButton from '@/app/ui/UiButton'
import { computeDateOfBirth, validateAgeValue } from '@/ehr-definitions/ehr-def-utils'

export default {
  components: {
    UiButton,
    AppDialog,
  },
  data () {
    return {
      errorList: [],
      dateStr: '',
      dayVal: '31',
      monthVal: '3',
      personAge: '',
    }
  },
  computed: {
    validDay () {
      let isValid = false
      if (this.validMonth) {
        let mVal = Number.parseInt(this.monthVal)
        let mxDays = (mVal === 2) ? 28 : [9, 4, 6, 10].includes(mVal) ? 30 : 31
        let dVal = this.dayVal
        isValid = 1 <= dVal && dVal <= mxDays
      }
      return isValid
    },
    validInput () { return this.errorList.length === 0 },
    validMonth () { return 1 <= this.monthVal && this.monthVal <= 12},
    validPersonAge () { return validateAgeValue(this.personAge) },
  },
  methods: {
    closeDialog: function () {
      this.$refs.theDialog.onClose()
    },
    openDobDialog (personAge, monthVal, dayVal) {
      this.dayVal = dayVal
      this.monthVal = monthVal
      this.personAge = personAge
      console.log('Open DOB dialog', dayVal, monthVal, personAge)
      this.$refs.theDialog.onOpen()
      this.resetDoB()
    },
    resetDoB () {
      this.validate()
      this.dateStr = ''
      if (this.validInput) {
        let dVal = Number.parseInt(this.dayVal)
        let d = (dVal < 10 ? '0' : '') + dVal
        let mVal = Number.parseInt(this.monthVal)
        let m = (mVal < 10 ? '0' : '') + mVal
        // any year will do.  Be sure to add time or else compute uses local time.
        let dStr = `2000-${m}-${d}T00:00`
        this.dateStr = computeDateOfBirth(this.personAge, dStr)
      }
    },
    saveDialog: function () {
      if(this.errorList.length > 0) {
        return
      }
      this.$emit('update', this.dateStr )
      this.$refs.theDialog.onClose()
    },
    validate () {
      this.errorList= []
      if (!this.validPersonAge) {
        this.errorList.push(`The age value ${this.personAge} is invalid`)
      } else if (!this.validMonth) {
        this.errorList.push(`The month value ${this.monthVal} is invalid`)
      } else if (!this.validDay) {
        this.errorList.push(`The day value ${this.dayVal} is invalid`)
      }
    },
  },
  watch: {
    monthVal () {
      this.resetDoB()
    },
    dayVal () {
      this.resetDoB()
    },
  }
}
</script>

<style scoped>

.dobInput {
  width: 4rem;
  margin-right: 5px;
}
.dobLabel {
  margin-right: 5px;
}
</style>
