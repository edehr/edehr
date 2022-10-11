<template lang='pug'>
  div(class="outside-view")
    ed-ehr-org-about
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
  components: { AppQuote, AppRef, AppSourceList, AppTextWithRefs, EdEhrOrgAbout },
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
.outside-view {
  margin: 2rem;
}
.system-info {
  margin-top: 2rem;
}
</style>
