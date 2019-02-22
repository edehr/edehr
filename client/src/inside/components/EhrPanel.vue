<template lang="pug">
	div(:class="$options.name")
		div
			slot(name="ehrPageTitle") in ehrPageTitle
		slot Here
</template>

<script>
import EhrPanelHeader from '../components/EhrPanelHeader.vue'
import EhrPanelContent from '../components/EhrPanelContent.vue'

export default {
  name: 'EhrPanel',
  components: {
    EhrPanelHeader,
    EhrPanelContent
  }
}
</script>

<style lang="scss" scoped>
.EhrPanel {
  padding-left: 1.5rem;
}
</style>
