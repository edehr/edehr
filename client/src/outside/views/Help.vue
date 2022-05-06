<template lang='pug'>
  div(class="outside-view")
    h1 About the EdEHR
    div
      div(v-text-to-html.noAutoLink="appResourceBody")

    h1 EdEHR Help
    div
      div(v-text-to-html.noAutoLink="helpText.student.body")
    div
      div(v-text-to-html.noAutoLink="helpText.instructor.body")
    div
      div(v-text-to-html.noAutoLink="helpText.lmsadmin.body")

    h2 About edehr.org
    p
      | The EdEHR application is "open source" which means that anyone is free to run an instance of this software on their own servers. The original developer of EdEHR offers the software as a not for profit service at &nbsp;
      a(href='[https://edehr.org') https://edehr.org. &nbsp;
      | To learn more about how your learning institution can use this service please email <a href="mailto:info@edehr.org">info@edehr.org</a>.
      | Click &nbsp;
      router-link(:to="{ name: `privacy` }") here  &nbsp;
      | to read the <strong>privacy policy</strong> for the edehr.org service.

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
import { appText, helpText } from '@/appText'
import StoreHelper from '@/helpers/store-helper'

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
  data () {
    return {
      appText: appText,
      helpText: helpText,
      metrics: { title: 'EdEHR' },
      showMetrics: false
    }
  },
  computed: {
    appResourceBody () { return this.appText.resources.body(window.location.origin) },
    apiUrl () {
      return StoreHelper.apiUrlGet()
    },
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

.system-info p, h3, label {
  color: #b5b5b5;
}

</style>
