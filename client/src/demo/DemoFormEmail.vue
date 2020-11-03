<template lang="pug">
  div
    div(class="columns")
      div(v-text-to-html="demoText.prompt")
    div(class="columns")
      div(class="column is-4")
        label(for="email") {{demoText.label}}
      div(class="column is-4")
        input(type="email", v-model="email", id="email", name="email", required, :class="{ invalid: !isValid }")
    div(class="columns")
      ui-button(v-on:buttonClicked="authUser", :title="demoText.buttonLabel", :disabled="!isValid") {{demoText.buttonLabel}}
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
      email: '',
      demoText: demoText.emailForm,
    }
  },
  computed : {
    isValid () {
      /* The goal is to just do a  cursory test to prevent obvious errors. Don't get fancy here... */
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(String(this.email).toLowerCase())
    }
  },
  methods: {
    authUser () {
      console.log('authUser', this.email)
      this.$emit('email-sent', this.email)
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
