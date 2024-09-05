<template lang="pug">
div
  div(v-if='labTestSet.length > 0', v-for='tube in labTestSet')
    .page
      .inner.bottomlabel
        .line.line1 {{ patientData.patientName }}
        .line.line2 MRN: {{ patientData.mrn }}
        .wrap39.line.line3
          .code39 {{ code39(rowData.accessionID) }}
          .value39 ACCN#: {{ rowData.accessionID }}
        .line.line4 {{ testInfo(tube) }}
      .inner.toplabel
        .demographic.line.line1
          .patientName {{ patientData.patientName }}
          .patientDob {{ patientData.dateOfBirth }} ({{ patientData.personAge }} yrs)
        .wrap39.line.line2
          .code39 {{ code39(patientData.mrn) }}
          .value39 MRN: {{ patientData.mrn }}
        .wrap39.line.line3
          .code39 {{ code39(rowData.accessionID) }}
          .value39 ACCN#: {{ rowData.accessionID }}
        .line.line4 {{ tube }} {{ rowData.priority }}
        .line.line5 {{ testInfo(tube) }}
        .line.line6 Physician: {{ rowData.physician }}
  div(v-else) Your query does not match any accessioning records.
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
    testInfo ( tube) {
      let tests = []
      let tstList = this.rowData.labTestSet[tube]
      console.log('-----', tstList)
      for (let i = 0; i< tstList.length; i++) {
        tests.push(tstList[i].test)
      }
      return tests.join(', ')
    },
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 31mm 57mm;
  //outline: 2px solid red;
}

.inner {
  display: grid;
  padding: 2mm 0 0 2mm;
  outline: 1px dashed blue;
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
}

.line { position: relative; }
.toplabel {
  .line1 {
    top: 0;
  }

  .line2 {
    top: -3mm;
  }

  .line3 {
    top: -6mm;
  }

  .line4 {
    top: -8mm;
  }

  .line5 {
    top: -8mm;
  }

  .line6 {
    top: -1mm;
  }
}

.bottomlabel {
  .line1 {
    top: 0;
  }

  .line2 {
    top: 0;
  }

  .line3 {
    top: -2mm;
  }
  .line4 {
    top: -3mm;
  }
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
