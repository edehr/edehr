<template lang='pug'>
  div
    h3 Health Canada - Drug Product Database (DPD) Data Extract
    p.
      The EdEHR provides a modified extract of the Canadian medication database.  For more information see the
      <a href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/what-data-extract-drug-product-database.html"> Health Canada DPD</a>
      website.  The modifications are mainly application of filters to select only drugs for humans.
      To learn more about the structure of the DPD see <a href="https://health-products.canada.ca/api/documentation/dpd-documentation-en.html"> DPD Documentation </a>

    section
      h4 More information
      p.
        For more information about the DPD see the
        <a href="https://www.canada.ca/en/health-canada/services/drugs-health-products/drug-products/drug-product-database/terminology.html"> Terminology </a> web page.
        Below are two extracts from that page to highlight the medication classification system and the regulation schedules.

    section
      h4 Anatomical Therapeutic Chemical (ATC) Classification
      p.
        In the
        <a href="https://www.who.int/tools/atc-ddd-toolkit/atc-classification"> Anatomical Therapeutic Chemical (ATC) </a>
        classification system, the active substances are divided into different groups according to the organ or system
        on which they act and their therapeutic, pharmacological and chemical properties. Drugs are classified in groups at five different levels.
      ul
        li ATC 1st level. The system has fourteen main anatomical or pharmacological groups (1st level). The ATC 1st levels are shown in the figure.
        li ATC 2nd level Pharmacological or Therapeutic subgroup
        li ATC 3rd& 4th levels Chemical, Pharmacological or Therapeutic subgroup
        li ATC 5th level Chemical substance

    section
      h4 Regulations and control schedules
      p Each drug is assigned one or more schedules, according to the Food and Drug Regulations, and the Controlled Drugs and Substances Act.
      ul
        li Prescription (prescription drugs included in the Prescription Drug List)
        li Prescription Recommended (drugs that are recommended to be listed on the Prescription Drug List)
        li Schedule G (control drugs)
        li Schedule G (Controlled Drugs and Substances Act [CDSA] III)
        li Schedule G (CDSA IV)
        li Schedule C (drugs listed in Schedule C of the Food and Drugs Act, for example, radiopharmaceutical drugs)
        li Schedule D (drugs listed in Schedule D of the Food and Drugs Act, ie. biological products)
        li Narcotic (Narcotic Control Act)
        li Narcotic (CDSA I)S
        li Narcotic (CDSA II)
        li Targeted (CDSA IV)
        li CDSA Recommended- Undergoing Regulatory Amendment to add this new substance to Controlled Drugs Substances Act
        li OTC (over the counter drugs that do not appear on a schedule or are not recommended to appear on any schedule)
        li Ethical: a drug that, in accordance with Federal Legislation, does not require a prescription, but that is generally prescribed by a medical practitioner. Ethical products are unscheduled non-prescription professional use products (e.g. MRI contrast agents, hemodialysis solutions) and a few emergency use products (e.g. nitroglycerine)


</template>

<script>
export default {
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
}
li {
  list-style-type: initial;
}
</style>
