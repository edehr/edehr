<template lang="pug">
  div(class='label-printing')
    h1 Patient Labels
    div
      table(cellspacing="0" cellpadding="0")
        tr(v-for='p in patientList', :key='p.mrn', class='wrist-band')
          td {{p.familyName }}
          td {{ p.mrn }}
          td(class='code39') {{code39(p)}}
          td {{p.name }}

</template>

<script>
export default {
  components: {  },
  computed: {
    patientList () {
      return this.$store.getters['seedListStore/list']
    }
  },
  methods: {
    code39 (p) { return '*' + p.mrn + '*'},
    async loadPage () {
      const query = this.$route.query
      let queryPayload = Object.assign({}, query)
      queryPayload.limit = this.$store.getters['system/paginateLimit']
      console.log('page load query payload', queryPayload)
      await this.$store.dispatch('seedListStore/loadPage', queryPayload)
    },
  },
  mounted () {
    // this.$store.dispatch('seedListStore/loadSeeds')
    this.loadPage()
  }
}
</script>

<style lang='scss' scoped>
.label-printing {
  margin-left: 3rem;
}

.wrist-band {
  height: 7rem;
}
table, tr, td {
  border: none;
}

.code128 {
  font-size: 60px;
}
</style>
