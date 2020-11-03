<template lang="pug">
  div
    div(class="columns")
      div(v-text-to-html="demoText.prompt")
    div(class="columns")
      div(class="column is-4")
        label(for="vcode") {{demoText.label}}
      div(class="column is-4")
        input(type="text", v-model="vcode", id="vcode", name="vcode", required, :class="{ invalid: !isValid }")
    div(class="columns")
      input(type="checkbox", v-model="consent", id="consent", name="consent", required)
      label(for="consent") {{ consentText.prompt }}
    div(class="columns")
      div {{ consentText.prompt2 }}

    div(class="columns")
      ui-button(v-on:buttonClicked="verifyUser", :title="demoText.buttonLabel", :disabled="!canSubmit") {{demoText.buttonLabel}}
      ui-button(v-on:buttonClicked="$emit('cancel')", title="Cancel") Cancel
</template>

<script>
import UiButton from '@/app/ui/UiButton'
import { demoText } from '@/demo/demoText'

export default {
  components: {
    UiButton,
  },
  data () {
    return {
      vcode: '',
      consent: false,
      demoText: demoText.vCodeForm,
      consentText: demoText.consentForm,
    }
  },
  computed : {
    isValid () {
      /* 5 digits or four code words */
      const re = /^\d{5,}$/
      return re.test(String(this.vcode).toLowerCase())
    },
    canSubmit () {
      return this.isValid && this.consent
    }
  },
  methods: {
    verifyUser () {
      console.log('verifyUser', this.vcode)
      this.$emit('vcode-sent', this.vcode)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/definitions';

  .invalid {
    background-color: $invalid-background;
    border-color: $invalid-border;
    border-width: 1px;
  }

  .columns {
    margin-bottom: 1rem;
  }
</style>
