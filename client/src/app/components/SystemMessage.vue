<template lang="pug">
  div(v-show="showMessage", class="wrapper" :class="msgClass")
    div(class="message-title") {{systemMsg}}
      ui-close(v-on:close="clearMessage", class="flash-close")
</template>

<script>
import UiClose from '../ui/UiClose'
import StoreHelper from '../../helpers/store-helper'
import EventBus from '../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../helpers/event-bus'

export default {
  name: 'SystemError',
  components: { UiClose },
  computed: {
    showMessage () {
      return !!this.systemMsg
    },
    hasErrMsg () {
      return !!this.$store.state.system.apiError
    },
    systemMsg () {
      return this.hasErrMsg ? this.$store.state.system.apiError : this.$store.state.system.sysMessage
    },
    msgClass () {
      return this.hasErrMsg ? 'apiError' : 'systemMessage'
    }
  },
  methods: {
    clearMessage () {
      if (this.hasErrMsg)
        StoreHelper.setApiError('')
      else
        StoreHelper.setSystemMessage('')
    },
    updateSystemMessage () {
      const msg = ''
      StoreHelper.setSystemMessage(msg)
    }

  },
  created: function () {
    const _this = this
    this.refreshEventHandler = function () { _this.updateSystemMessage() }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';


.systemMessage {
  background-color: $info;
  color: $system-message-text;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}
.message-title {
  font-weight: bold;
  font-size: 1em;
}
/* If api error exists then change the background color */
.apiError {
  background-color: $error;
  color: $system-message-text;
}

.wrapper {
  padding: 10px 20px;
}

.flash-close {
  color: $white;
  top: 0;
}

</style>
