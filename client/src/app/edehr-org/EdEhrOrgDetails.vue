<template lang="pug">
  div
    h1 More about the edehr.org services
    h2 {{edehrText.servers.title}}
    div(v-for="line in edehrText.servers.body")
      div(v-text-to-html="line")

    img(:src="sysImage", alt="edehr.org services")

    h2 {{edehrText.userAccess.title}}
    div(v-for="line in edehrText.userAccess.body")
      div(v-text-to-html="line")

    h2 {{edehrText.physicalAccess.title}}
    div(v-for="line in edehrText.physicalAccess.body")
      div(v-text-to-html="line")

</template>

<script>
import { EdOrgText } from '@/app/edehr-org/ed-ehr-org-text'

export default {
  data () {
    return {
      edehrText: EdOrgText
    }
  },
  computed: {
    baseUrl () { return window.location.origin},
    sysImage () { return this.baseUrl + '/assets/edehr.org.system.png'}
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';

.system-info h3 {
  color: #b5b5b5;
}
ul {
  margin-left: 2rem;
  font-size: 18px;
}
li {
  list-style-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='13' viewBox='-1 -1 2 2'><circle r='1' /></svg>");
  max-width: 60rem;

}

</style>
