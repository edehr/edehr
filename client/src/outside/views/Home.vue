<template lang="pug">
  div(class="outside-view home")

    section(class="hero is-info is-medium is-bold")
      div(class="hero-body")
        div(class="container has-text-centered")
          h1(class="title") {{ appText.heroText.title }}
          h2(class="subtitle") {{ appText.heroText.subTitle }}
          demo-access(class="demo-access")

    section(class="container features features-light")
      div(class="content", v-text-to-html.noAutoLink="appText.heroText.introText")

    section(class="no-container features features-dark")
      ed-ehr-values

    section(class="container features features-light")
      div(class="content")
        h2(class="title") {{ appText.underDevelopment.title }}
        div(v-text-to-html.noAutoLink="appText.underDevelopment.body")

    section(class="container features features-dark", id="resources")
      div(class="content")
        h2(class="title") {{ appText.resources.title }}
        div(v-text-to-html.noAutoLink="appText.resources.body")

    section(class="container features features-light")
      div(class="content")
        h2(class="title") {{appText.related.title }}
        div(v-text-to-html.noAutoLink="appText.related.body")

    div(class="is-pulled-right")
      input(type="checkbox", v-model="activateDemoMode")


</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import UiButton from '../../app/ui/UiButton'
import UiLink from '../../app/ui/UiLink.vue'
import DemoAccess from '../components/DemoAccess.vue'
import EdEhrValues from '../components/EdEhrValues.vue'
import { appText } from '@/appText'

export default {
  components: {
    DemoAccess,
    EdEhrValues,
    UiButton, UiLink
  },
  data () {
    return {
      appText: appText,
      activateDemoMode: false
    }
  },
  computed: {
    isDemo () { return StoreHelper.isDemoMode()  }
  },
  methods: {
  },
  mounted: function () {
    this.activateDemoMode = StoreHelper.getDemoFeatureFlag()
  },
  watch: {
    activateDemoMode: function (val) {
      StoreHelper.setDemoFeatureFlag(val)
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '../../scss/definitions';

  .content {
    font-size: 1.2rem;
    width: 99%;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    @media only screen and (min-width : 1025px) {
      width: 90%;
    }
    @media only screen and (min-width : 1440px) {
      width: 1024px;
    }

  }

  .features {
    padding: 1.5rem;
  }

  .features-dark {
    background-color: #BCBCBC;
  }
  .features-light {
    background-color: #f0f0f0;
  }

  .hero.is-info.is-bold {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0473ea+0,0085d8+32,1c8ace+100 */
    background: #0473ea; /* Old browsers */
    background: -moz-linear-gradient(top,  #0473ea 0%, #0085d8 32%, #1c8ace 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom,  #0473ea 0%,#0085d8 32%,#1c8ace 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0473ea', endColorstr='#1c8ace',GradientType=0 ); /* IE6-9 */

  }
  .hero.is-info {
    background-color: #1c8ace;
    color: #fff;
  }

  .hero-body {
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
  }
  .hero-body .title {
    color: hsl(192,17%,99%) !important;
  }

  .hero-body .demo-access {
    @media only screen and (min-width : 1025px) {
      margin-top: 5rem;
    }
  }

</style>

