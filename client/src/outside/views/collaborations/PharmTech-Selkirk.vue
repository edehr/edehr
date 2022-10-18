<template lang="pug">
  div(class='main-with-side-content')
    div
      h2 Planned pharmacy technician support
      p.
        With Selkirk College we plan on augmenting and correcting the medication orders and medication administration (MAR) modules.
      ul
        li Add vitamins to complement the medication list
        li Best Possible Medication History (BPMH) section
        li Make adjustments to the prescribing and administration of scheduled and PRN medications
        li Introduce a two step process where a pharmtech creates the medication order and a pharmacist verifies the order
        li Allow for drugs that are not on formulary (patient's own medication)
        li Extend the allergies chart with a list of medications that the patient can be allergic to.  Include opioids, ACE inhibitors and antibiotics
    collab-list
</template>

<script>
import { appText } from '@/appText'
import AppQuote from '@/app/components/AppQuote'
import UiLink from '@/app/ui/UiLink'
import CollabList from '@/outside/views/collaborations/collabList'

export default {
  components: { CollabList, UiLink, AppQuote },
  data () {
    return {
      appText: appText,
    }
  },
}
</script>
