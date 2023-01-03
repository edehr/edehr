<template lang="pug">
  div(class="flow_across menu_space_across")
    div(class="flow_across menu_space_across bigger-than-threshold1")
      router-link(:to="{ name: `ehr` }", class="navLink") Activity
      ehr-student-submit
    ehr-student-other-dropdown(class="flow_across_last_item")
</template>
<script>
import EhrStudentSubmit from '@/inside/components/EhrStudentSubmit'
import EhrStudentOtherDropdown from '@/inside/components/EhrStudentOtherDropdown'
export default {
  components: { EhrStudentOtherDropdown, EhrStudentSubmit },
  computed: { },
  methods: { }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
</style>
