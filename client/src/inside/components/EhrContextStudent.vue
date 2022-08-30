<template lang="pug">
  div
    div(class='ehr-context-student')
      div(class="cb-item")
        div(class="activity")  {{pageTitle}}
      div(class="cb-item cb-right")
        ehr-sim-time(:ehr-data="md")
        ehr-student-submit
        ehr-student-other-dropdown
          div Student tools
</template>

<script>
import EhrStudentOtherDropdown from '@/inside/components/EhrStudentOtherDropdown'
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit'
import StoreHelper from '@/helpers/store-helper'
import EhrSimTime from '@/inside/components/EhrSimTime'
export default {
  components: { EhrSimTime, EhrStudentOtherDropdown, EhrStudentSubmit },
  data () {
    return {
    }
  },
  computed: {
    md () { return StoreHelper.getMergedData() },
    pageTitle ()        { return StoreHelper.getPageTitle() },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.ehr-context-student {
  display: grid;
  /* activity name, submit button, other dropdown menu */
  grid-template-columns: 1fr 3fr;;
  height: 2.5rem;
  div {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 2px;
  }
  .cb-right {
    justify-content: flex-end;
    gap: 15px;
    padding-right: 2rem;
    display: flex;
    flex-flow: row;
  }
}
@media screen and (max-width: $main-width-threshold1){
  .ehr-context-student {
    /* activity name, submit button, other dropdown menu */
    grid-template-columns: 1fr 4fr;
    div {
      font-weight: normal;
      font-size: 0.9rem;
    }
  }
  .titleBarLabel {
    font-size: 0.9rem;
    padding-right: 0;
  }
}
</style>
