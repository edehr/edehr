<template lang="pug">
  div(class="demo_page showing-labels")
    section(class="content")
      strong This page is a WIP
      div code? {{ code }}
      ui-button(@buttonClicked="joinDemo", title='Join into the demo session') Join demo

</template>

<script>
import StoreHelper from '../../helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import { demoText } from '@/appText'
import UiConfirm from '@/app/ui/UiConfirm'
import DemoHelper from '@/helpers/demo-helper'

export default {
  components: {
    UiConfirm,
    UiButton, UiLink
  },
  data () {
    return {
      persona: '',
      demoText: demoText
    }
  },
  computed: {
    code () { return     this.$route.query.code }
  },
  methods: {
    joinDemo () {
      const payload = { toolConsumerId: this.code, joinCode: this.code }
      const demoHelper = new DemoHelper()
      demoHelper.joinDemoToolConsumerCreation(payload)
        .then( () => {
          this.$router.push('demo')
        })
        .catch(err => {
          let msg = err
          if (err && err.response && err.response.status === 429) {
            let msg = 'Too many attempts to join a demo.'
            StoreHelper.setApiError(msg)
            msg += ' For security reasons you will now need to wait a long time. See the page footer to find out how to contact help.'
            console.error(msg)
          } else {
            console.error('Demo join error: ', msg)
            StoreHelper.setApiError(msg)
          }
        })
    }

  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.content {
  font-size: 1.2rem;
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
}
select {
  width: 15rem;
}
.demo_page{
  padding-left: $ehr-layout-padding-left;
}
</style>
