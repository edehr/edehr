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
    hasSystemError () {
      return !!this.systemError
    },
    systemError () {
      return this.$store.state.system.apiError
    }
  },
  methods: {
    clearMessage () {
      setApiError(this.$store, '')
      // this.$store.commit('system/setApiError', '')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.closer {
  color: transparentize($white, .4);
  transition: 350ms;
    &:hover {
      color: $white;
    }
}

.SystemError {
  background-color: $system-error-background;
  color: $system-error-color;
  padding: .5rem 2rem;
  position: relative;
}
.errMsg {
  font-size: 1rem;
}
</style>
