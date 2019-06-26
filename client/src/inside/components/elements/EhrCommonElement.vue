
<script>
import {getPageChildElement} from '../../../helpers/ehr-defs'
import EhrPageFormLabel from '../EhrPageFormLabel.vue'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT } from '../../../helpers/event-bus'

export default {
  name: 'EhrCommonElement',
  components: {
    EhrPageFormLabel
  },
  data: function () {
    return {
      dialogIsOpen: false,
      gotHit: false,
      helperHtml: '',
      helperText: '',
      inputType: '',
      inputVal: '',
      key: '',
      label: '',
      showLabel: true,
      suffix: ''
    }
  },
  props: {
    ehrHelp: { type: Object },
    inputs: { type: Object },
    element: { type: Object },
    notEditing: { type: Boolean },
    isPageElement: { type: Boolean},
    isDialogElement: { type: Boolean}
  },
  computed: {
    computedInitialValue () {
      let key = this.key
      let initialValue = this.inputs[key]
      this.setInitialValue(initialValue)
      return initialValue
    },
    parentData () {
      if (this.element.parent) {
        let pVal = this.inputs[this.element.parent.elementKey]
        // console.log('this.inputs', this.inputs)
        // console.log('daf.parent', this.element.parent, 'pVal', pVal)
        return pVal
      }
      return ''
    }
  },
  methods: {
    assetUrl () {
      let e = this.element
      let url = '/assets/' + e.assetBase + '/' + e.assetName
      return url
    },
    assetName () {
      let e = this.element
      let name = e.label
      if (e.assetBase && e.assetName) {
        name = e.label
      }
      return name
    },
    dependentPropertyReceiveEvent (eData) {
      // TODO restore the gotHit functionality that can be used to enable text boxes when a checkbox is checked
      // we're receiving an event transmitted by another instance of this component. An instance
      // that has sent a message on the channel this component listens on.
      this.gotHit = this.element.targetValue === eData.value
      // console.log(`On channel ${this.dependentPropertyChangeChannel} from key ${eData.key} got hit? ${this.gotHit}`)
    },
    refreshPage () {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let value = pageData[this.key]
      this.setInitialValue(value)
    },
    setInitialValue (value) {
      this.inputVal = value
    },
  },
  mounted: function () {
    const _this = this
    const element = this.element
    const parent = element.parent
    this.key = element.elementKey
    this.label = element.label
    this.inputType = element.inputType
    this.showLabel = !(element.formOption === 'hideLabel')

    // there is a child element for most elements. Exceptions include fieldsets
    let child = getPageChildElement(element.pageDataKey, element.elementKey) || {}
    this.helperText = child.helperText
    this.helperHtml = child.helperHtml
    this.suffix = child.suffix

    if (this.setup) {
      this.setup()
    }

    if (this.isPageElement) {
      const _this = this
      this.pageRefreshEventHandler = function () {
        _this.refreshPage()
      }
      EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.pageRefreshEventHandler)
    }

    if (this.isDialogElement) {
      this.dialogEventKey = this.ehrHelp.getDialogEventChannel(this.element.tableKey)
      this.dialogEventHandler = function (eData) {
        _this.dialogIsOpen = eData.value
        if (_this.dialogShowHideEvent) {
          _this.dialogShowHideEvent(eData)
        }
      }
      EventBus.$on(this.dialogEventKey, this.dialogEventHandler)
    }

    this.dependentPropertyChangeChannel = parent ? 'radio:' + parent.elementKey : null
    if (this.dependentPropertyChangeChannel) {
      this.dependentEventHandler = function (eData) {
        _this.dependentPropertyReceiveEvent(eData)
      }
      EventBus.$on(this.dependentPropertyChangeChannel, this.dependentEventHandler)
    }
  },
  beforeDestroy: function () {
    if (this.pageRefreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.pageRefreshEventHandler)
    }
    if (this.dialogEventHandler) {
      EventBus.$off(this.dialogEventKey, this.dialogEventHandler)
    }
    if (this.dependentEventHandler) {
      EventBus.$off(this.dependentPropertyChangeChannel, this.dependentEventHandler)
    }
  }
}
</script>
<style lang="scss">
  @import '../../../scss/definitions';
  .assetLink a{
    color: blueviolet; /*$grey60;*/
    display: block;
    margin-bottom: 10px;

    &:hover {
      color: $black;
      text-decoration: underline;
    }

    .linkIcon {
      color: $grey40;
      margin-right: 5px;
    }

  }
</style>