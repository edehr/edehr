<template lang="pug">
  div
    zone-lms-page-banner
      learning-objects-actions(class="flow_across_last_item")
    div
      div(v-for="item in assignmentsListing", class="list-card list-element", :class="rowClass(item)")
        learning-object-list-item(:id="item._id", :lObj='item')
</template>

<script>
import StoreHelper from '@/helpers/store-helper'
import LearningObjectListItem from '@/outside/components/learning-object/LearningObjectListItem'
import OutsideCommon from '@/outside/views/OutsideCommon'
import LearningObjectsActions from '@/outside/components/learning-object/LearningObjectsActions'
import ZoneLmsPageBanner from '@/outside/components/ZoneLmsPageBanner'
export default {
  extends: OutsideCommon,
  data () {
    return {
    }
  },
  components: { ZoneLmsPageBanner, LearningObjectsActions, LearningObjectListItem },
  computed: {
    canDo () {
      return StoreHelper.isDevelopingContent()
    },
    assignmentsListing () {
      return this.$store.getters['assignmentListStore/list']
    },
  },
  methods: {
    rowClass: function (item) {
      let selected = item._id === this.$route.query.learningObjectId
      let classString = selected ? 'selected ' : ''
      return `${classString}`
    },
    async loadComponent () {
      const fromRoute = this.$route.query.learningObjectId
      const fromStore = this.$store.getters['assignmentStore/learningObjectId']
      const learningObjectId = fromRoute ? fromRoute : fromStore
      await this.$store.dispatch('instructor/loadCourses')
      await this.$store.dispatch('seedListStore/loadSeeds')
      await this.$store.dispatch('assignmentListStore/loadAssignmentsWithCounts')
      if (learningObjectId) {
        this.$nextTick(() => {
          let element = document.getElementById(learningObjectId)
          if (!element) {
            // possibly just deleted the object ... do nothing
            return
          }
          // The magic number of 130 was obtained by trial and error. It scrolls the selected object
          // to the top of the viewable area
          let top = element.offsetTop - 130
          top = Math.max(0, top)
          window.scrollTo(0, top)
        })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
.list-element {
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
}
.key {
  font-weight: bold;
}
.key::after {
  content: ': '
}

.un-configured {
  background: $greyWarn;
  opacity: 0.8;
}

.un-configured-warning {
  color: $grey80;
}

</style>
