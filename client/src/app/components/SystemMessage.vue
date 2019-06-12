<template lang="pug">
  div(v-show="showMessage", class="wrapper" :class="msgClass")
    ul(class="navList")
      li(class="navItem")
        button(v-on:click="clearMessage", class="button closer")
          fas-icon(class="icon-right", icon="times")
      li(class="navItem")
        div(class="message-title") {{systemMsg}}
</template>

<script>
import UiClose from '../ui/UiClose'
import { setApiError, setSystemMessage } from '../../helpers/ehr-utills'
import { Text } from '../../helpers/ehr-text'
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
        setApiError(this, '')
      else
        setSystemMessage(this,'')
    },
    updateSystemMessage () {
      let msg = ''
      if (StoreHelper.isStudent(this)) {
        if (StoreHelper.isSubmitted(this)) {
          msg = Text.STUDENT_HAS_SUBMITTED
        } else {
          msg = Text.STUDENT_INTRO
        }
      } else if (StoreHelper.isInstructor(this)){
        if (StoreHelper.isEvaluated(this)) {
          msg = Text.ASSIGNMENT_HAS_BEEN_EVALUATED
        }
      }
      // uncomment to set a test message
      // setApiError(this.$store, 'This a test api error message')
      // msg = Text.STUDENT_HAS_SUBMITTED
      // msg = Text.STUDENT_INTRO
      // msg = Text.ASSIGNMENT_HAS_BEEN_EVALUATED
      // console.log('updateSystemMessage', msg)
      setSystemMessage(this, msg)
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
  background-color: $system-message-background;
  color: $system-message-color;
}
/* If api error exists then change the background color */
.apiError {
  background-color: $system-error-background;
  color: $system-error-color;
}

.wrapper {
  padding: 10px 20px;
}
.navList {
  display: flex;
  font-size: 1.25em;
}

.message-title {
  margin-left: 1rem;
}

.closer {
  padding: 0;
  height: 1.6rem;
  background: none;
  border: none;
  color: transparentize($white, .4);
  transition: 350ms;
  &:hover {
    color: $white;
  }
}

</style>
