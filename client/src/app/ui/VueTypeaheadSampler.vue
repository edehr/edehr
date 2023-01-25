<template lang='pug'>
  section
    h1 testing
    div(style="display:flex; flex-direction: row; gap: 2rem; margin: 2rem;")
      div
        button(@click="show = !show") {{ show ? 'enable' : 'disable' }}
      div
        div medVal: {{ medVal }}
        div
          vue-typeahead(
            :disabled="show",
            domId="home-medication-lookahead",
            placeholder="Search for medication",
            :source='medSource'
            :value="medVal",
            @selected="(selected) => medVal = selected",
          )
      div
        div medVal2: {{ medVal2 }}
        div
          ehr-element-medication(
            :inputVal="medVal2",
            :disabled="show",
            @selected="(selected) => medVal2 = selected",
          )
      div
        div search a source based on a function. Value: {{fnVal}}
        div
          vue-typeahead(
            :disabled="show",
            domId="fns-lookahead",
            @selected="(selected) => fnVal = selected",
            :value="fnVal",
            placeholder="Search for fnVal",
            showOnFocus=true
            :source='fnSource'
          )
      div
        div search a local source. Value: {{locVal}}
        div
          vue-typeahead(
            :disabled="show",
            domId="local-lookahead",
            @selected="(selected) => locVal = selected",
            :value="locVal",
            placeholder='search local list',
            showOnFocus=true
            :source='localSource'
          )

</template>

<script>
import { appText } from '@/appText'
import VueTypeahead from '@/app/ui/VueTypeahead'
import EhrElementMedication from '@/inside/components/page/EhrElementMedication'

export default {
  name: 'VueTypeaheadSampler',
  components: { EhrElementMedication, VueTypeahead },
  data () {
    return {
      appText: appText,
      activateDemoMode: false,
      locVal: '',
      medVal: '',
      medVal2: '',
      profVal: '',
      fnVal: '',
      show: false,
    }
  },
  computed: {
    localSource () {
      let text = 'A grey mare jumped over a brown cow and then the red foo bar flew over the coocoo nest as it went by the moon told the spoon to eat.'
      const list = text.split(' ').sort().map(t => {
        return { label: t}
      })
      console.log(JSON.stringify(list))
      return {local: list}
    },
    fnSource () {
      return {
        fnSource: () => {
          let results = []
          let base = '' + Date.now()
          base = base.slice(-3)
          for(let i = 0; i < 10; i++) {
            results.push({label: 'a ' + i + base})
          }
          console.log('HOME ', JSON.stringify(results))
          return results
        }
      }
    },
    medSource () {
      const url = 'http://localhost:27000/api/lookahead/medicationsv2/'
      return {
        remote: {
          url: url + '%QUERY',
          wildcard: '%QUERY'
        },
        transform: (data) => {
          return data.map(m => m.name)
        }
      }
    }
  },

}
</script>

<style scoped>

</style>
