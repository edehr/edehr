<template lang='pug'>
  lab-test-list(viewOnly='true')
</template>

<script setup>
import { useMedLabTestList } from '@/inside/components/page/accessioning/labTestList'
import LabTestList from '@/inside/components/page/accessioning/LabTestList.vue'
const { initializeData } = useMedLabTestList()
const props = defineProps(['tableData'])
initializeData(props.tableData)
</script>

