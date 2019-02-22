<template lang="pug">
  div(:class="$options.name")
    div(:class="`${$options.name}__top`")
      ui-button(v-on:buttonClicked="returnToClicked", :class="`${$options.name}__button`") {{ returnButtonLabel }}
    ehr-nav-list(v-for="path in menuList" :key="path.name" :path="path" :level="1")
    ehr-scratch-pad(v-show="isStudent")
</template>
<script>
import UiLink from '../../app/ui/UiLink.vue'
import UiButton from '../../app/ui/UiButton.vue'
import EhrNavList from './EhrNavList'
import EhrScratchPad from '../components/EhrScratchPad'
import EhrEvaluationPad from '../components/EhrEvaluationPad'

export default {
  name: 'EhrNavPanel',
  components: {
    UiButton,
    UiLink,
    EhrNavList,
    EhrScratchPad,
    EhrEvaluationPad
  },
  computed: {
    returnButtonLabel() {
      if (this.isStudent) {
        return 'Return to ' + this.$store.getters['visit/lmsName']
      } else {
        return 'Return to class list'
      }
    },
    lmsName() {
      return this.$store.getters.lmsName
    },
    menuList() {
      // read the menu definition stored in the project root src (client/src)
      var menu = require('../../menuList.json')
      return menu
    },
    isStudent() {
      return this.$store.getters['visit/isStudent']
    }
  },
  methods: {
    returnToClicked() {
      if (this.isStudent) {
        // hard return to the calling LMS
        window.location = this.$store.getters['visit/returnUrl']
      } else {
        // stay within application and use router push
        var pathname = this.$store.state.instructor.sInstructorReturnUrl
        console.log(
          'As instructor return via router push to retain veux state information',
          pathname
        )
        this.$router.push({ path: pathname })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.EhrNavPanel {
  background-color: $nav-background-medium;
  height: 100%;
  display: flex;
  flex-direction: column;
  /*color: $grey10;*/

  &__top {
    padding: 15px;
  }
  &__bottom {
    padding: 15px;
  }
  a {
    color: $white;
  }
  &__button {
    width: 100%;
  }
}
</style>
