<template lang='pug'>
  div
    h3 U.S. Department of Veterans Affairs - VA National Formulary
    p.
      The EdEHR provides a modified extract of the VA National Formulary database.  For more information see the
      <a href="https://www.pbm.va.gov/nationalformulary.asp">VA National Formulary</a> web site.
      The EdEHR is based on the
       <a href="https://www.pbm.va.gov/PBM/nationalformulary/PharmacyProductSystem_NationalDrugCodeExtract.xlsx">
        VA National Drug File Extract with NDC - Excel Spreadsheet
      </a>

    section
      h4 Comments about the EdEHR version of the VA Formulary
      p.
        The VA database has over 33,000 items. The EdEHR uses a filtered set where th following rules are applied to remove extra elements.
      ul
        li All inactive medications.
        li All non-formulary medications.
        li All items with a classification code starting with "XA".  This removes items such as bandages, dressings, and other equipment.
      p.
        The <code>route</code> property contains both the route and the type of dispensing. E.g. 'oral, tab'

    section
      h4 Regulations and control schedules
      p.
        There are currently 5 schedules and their meanings are as follows:
      ul
        li Schedule I: Drugs with no current medical use with high potential for abuse and/or addiction.
        li Schedule II: Drugs with some medically acceptable uses, but with high potential for abuse and/or addiction. These drugs can be obtained through prescription.
        li Schedule III: Drugs with low to moderate potential for abuse and/or addiction, but less dangerous than Schedule I or II. These drugs can be obtained through prescription, but generally are not available over the counter.
        li Schedule IV: Drugs with viable medical use and low probability of use or misuse.
        li Schedule V: Drugs with low potential for abuse (lower than Schedule IV).
      p.
        The drugs that are considered the most dangerous by the DEA are known as Schedule I substances. These are drugs with no current medical use, per analysis by the DEA and FDA. These substances also carry a high potential for abuse and addiction.
      p.
        For more about these schedules see <a href="https://americanaddictioncenters.org/prescription-drugs/classifications"> Drug Scheduling & Classifications (List of Schedule I-V Controlled Drugs) </a>.
</template>

<script>
import SeedListItem from '@/outside/components/seed-management/SeedListItem.vue'
import UiLink from '@/app/ui/UiLink.vue'

export default {
  components: { UiLink, SeedListItem },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>

section {
  margin-bottom: 1rem;
}

ul {
  margin-left: 2rem;
  margin-bottom: 1rem;
}
li {
  list-style-type: initial;
}
</style>
