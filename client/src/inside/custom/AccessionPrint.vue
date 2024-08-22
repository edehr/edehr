<template lang="pug">
div
  div(v-for='tube in labTestSet')
    .page
      .inner.toplabel
        .demographic
          .patientName {{ patientData.patientName }}
          .patientDob {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
        .wrap39
          .code39 {{ code39(patientData.mrn) }}
          .value39 MRN: {{ patientData.mrn }}
        .wrap39
          .code39 {{ code39(rowData.accessionID) }}
          .value39 ACCN#: {{ rowData.accessionID }}
        div {{ tube }} {{ rowData.priority }}
        div {{ rowData.physician }}
      .inner.bottomlabel
        div {{ patientData.patientName }}
        .wrap39
          .code39 {{ code39(rowData.accessionID) }}
          .value39 ACCN#: {{ rowData.accessionID }}
        div {{ tube }} {{ rowData.priority }}
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import EhrPatient from '@/inside/components/page/ehr-patient'
export default {
  data: function () {
    return {
      rowId: '',
    }
  },
  computed: {
    md () { return StoreHelper.getMergedData() },
    patientData () { return EhrPatient.patientData() },
    mData () {
      let data = StoreHelper.getMergedData()
      return JSON.parse(JSON.stringify(data))
    },
    accData () { return this.mData.medLabAccession?.mlAccessioning || [] },
    rowData () { return this.accData.find( row => row.mlAccessioning_id === this.rowId) || {}},
    labTestSet () { return this.rowData.labTestSet ? Object.keys(this.rowData.labTestSet) : '' }
  },
  methods: {
    truncate (input, lim) {
      return input && input.length > lim ? `${input.substring(0, lim)}...` : input
    },
    code39 (p) { return '*' + p + '*'},
    async loadPage () {
      const query = this.$route.query
      this.rowId = query.rowId
      console.log('page load query ', query)
    },
  },
  mounted () {
    // this.$store.dispatch('seedListStore/loadSeeds')
    this.loadPage()
  }
}
</script>

<style lang='scss' scoped>
.demographic {
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
}
.patientName {
  font-size: 1.2rem;
}

$pw: 105mm;
$ph: 93mm;
$mw: 101mm;
$mh: 89mm;
$tw: 101mm;
$bw: 50mm;

@page {
  size: $pw $ph;
  margin: 2mm;
}

.page {
  font-size: 14px;
  position: relative;
  padding-left: 2mm;
  width: $mw;
  min-width: $mw;
  max-width: $mw;
  height: $mh;
  min-height: $mh;
  max-height: $mh;
  //margin: 2mm !important;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 57mm 31mm;
  //outline: 2px solid red;
}

.inner {
  display: grid;
  //place-items: center;
  padding: 2mm 0 0 2mm;
  outline: 2px dashed blue;
  //div {
  //  outline: 1px solid magenta;
  //}
}
.toplabel {
  width: $tw;
  min-width: $tw;
  max-width: $tw;
}
.bottomlabel {
  width: $bw;
  min-width: $bw;
  max-width: $bw;
  //height: 31mm;
  //min-height: 31mm;
  //max-height: 31mm;
  //padding: 3mm;
}
.wrap39 {
  position: relative;
  //overflow: hidden;
  height: 14mm; /* just enough for the barcode and label */
  .code39 {
    position: relative;
    font-size: 33px;
    //top: -2mm;
  }
  .value39 {
    position: relative;
    //width: 14rem;
    top: -4mm;
    //left: 1mm;
    //padding: 0.5mm;
    //text-align: center;
    //background-color: grey;
  }
}
</style>
