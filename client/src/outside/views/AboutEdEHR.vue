<template lang='pug'>
  div
    h1 The EdEHR Project

    div(v-text-to-html.noAutoLink="appText.heroText.what")

    app-quote(:def="quotes.mbridge")
    app-quote(:def="quotes.chillary")
    app-quote(:def="quotes.sonja")

    div(v-text-to-html.noAutoLink="appText.heroText.goal")


    div(v-text-to-html.noAutoLink="appText.heroText.introText")

    h2 Introduction
    app-text-with-refs(:def="about.intro1")

    app-text-with-refs(:def="about.intro2")

    app-quote(:def="quotes.shaykewich")

    h3 First appearance of the EdEHR
    app-text-with-refs(:def="about.firstAppearance")

    h3 Introduction to edehr.org services
    app-text-with-refs(:def="about.introEdEhrOrg")
    div
      ui-link(name="aboutSaaS")
        span Click here for more information about the edehr.org service


    h3 Licensing history
    app-text-with-refs(:def="about.license")

    h3 Quotes
    app-quote(:def="quotes.jmin")
    app-quote(:def="quotes.rees")
    app-quote(:def="quotes.antony")

    h3 Privacy
    app-text-with-refs(:def="about.privacy")

    h3 Documentation
    app-text-with-refs(:def="about.helpText")

    app-text-with-refs(:def="about.more")

    h3 {{appText.related.title }}
    div(v-text-to-html.noAutoLink="appText.related.body")

    hr

    h2 Sources
    app-source-list(:source-list="appText.sourceList")

    div(class="system-info", style="text-align: right; margin-top: 5px;",)
      label(@click="showMetrics = !showMetrics") M
    div(class="system-info" v-if="showMetrics")
      h3 System information:
      p Environment: {{ environment }}
      p API: {{ apiUrl }}
      p Host: {{ metrics.host }}
      p Title: {{ metrics.title }}
      p Version: {{ metrics.version }}
      p Get Count: {{ metrics.getCount }}
      p Server Start: {{ startTime }}
      p Runtime: {{ elapsedTime }}
      p Last URL: {{ metrics.lastRequestUrl }}

</template>

<script>
import AppQuote from '@/app/components/AppQuote'
import AppRef from '@/app/components/AppRef'
import AppSourceList from '@/app/components/AppSourceList'
import AppTextWithRefs from '@/app/components/AppTextWithRefs'
import EdEhrOrgAbout from '@/app/edehr-org/EdEhrOrgAbout'
import { appText } from '@/appText'
import StoreHelper from '@/helpers/store-helper'
import { textToHtml } from '@/directives/text-to-html'
import UiLink from '@/app/ui/UiLink'

function msToTime (ms) {
  let seconds = (ms / 1000).toFixed(1)
  let minutes = (ms / (1000 * 60)).toFixed(1)
  let hours = (ms / (1000 * 60 * 60)).toFixed(1)
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1)
  if (seconds < 60) return seconds + ' Sec'
  else if (minutes < 60) return minutes + ' Min'
  else if (hours < 24) return hours + ' Hrs'
  else return days + ' Days'
}

export default {
  components: { UiLink, AppQuote, AppRef, AppSourceList, AppTextWithRefs, EdEhrOrgAbout },
  data () {
    return {
      appText: appText,
      metrics: { title: 'EdEHR' },
      showMetrics: false
    }
  },
  computed: {
    apiUrl () {
      return StoreHelper.apiUrlGet()
    },
    about () { return appText.about },
    quotes () { return appText.quotes },
    elapsedTime () {
      return msToTime(this.metrics.runTime)
    },
    environment () {
      return process.env.NODE_ENV
    },
    startTime () {
      return new Date(this.metrics.startDate1)
    }
  },
  methods: {
    textToHtml: (text) => { return textToHtml(text) },
    refreshMetrics: async function () {
      const url = StoreHelper.apiUrlGet() + '/metric'
      const res = await fetch(url)
      this.metrics = await res.json()
    }
  },
  mounted () {
    this.refreshMetrics()
    this.timeout = setInterval(() => {
      this.refreshMetrics()
    }, 1000 * 10 + 34)
  },
  destroyed () {
    // console.log('Stop refreshing api data')
    clearInterval(this.timeout)
  }
}
</script>

<style lang='scss' scoped>
@import '../../scss/definitions';

</style>
