<template lang="pug">
  div(v-show="hasSystemError", class="SystemError")
    ui-close(v-on:close="clearMessage", class="closer")
    div(class="errMsg") {{systemError}}

</template>

<script>
import UiClose from '../ui/UiClose'
import { setApiError } from '../../helpers/ehr-utills'

export default {
  name: 'SystemError',
  components: { UiClose },
  computed: {
    hasSystemError() {
      return !!this.systemError
    },
    systemError() {
      return this.$store.state.system.apiError
    }
  },
  methods: {
    clearMessage() {
      setApiError(this.$store, '')
      // this.$store.commit('system/setApiError', '')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.SystemError {
  background-color: $system-error-background;
  color: $system-error-color;
  padding: 1rem;
}
.closer {
  font-size: 0.5rem;
  display: inline;
}
.errMsg {
  display: inline;
  margin-left: 1rem;
  font-size: 1.3rem;
}
</style>
