<script>
import StoreHelper from '@/helpers/store-helper'
import EventBus, { PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'

export default {
  name: 'AppLmsCommon',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    async loadBase () {
      // console.log('AppLmsCommon, load base has been invoked. Call the sub view loadComponent', this.$route.name)
      await this.loadComponent()
    },
  },
  created: function () {
    // console.log('==== App Lms common created')
    // Wait for App to load auth before loading this component
    if (!this.loadComponent) {
      StoreHelper.setApiError('MUST DEFINE LOAD COMPONENT METHOD FOR THIS PAGE')
      return
    }
    this.refreshEventHandler = () => {
      // console.log('==== App Lms common page event')
      this.loadBase().catch((err) => console.error('Load base catch promise rejections', err.message))
    }
    EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
  },
  beforeDestroy: function () {
    if (this.refreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.refreshEventHandler)
    }
  },
}
</script>

<style scoped>

</style>
