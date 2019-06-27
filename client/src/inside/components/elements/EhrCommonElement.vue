
<script>
import {getPageChildElement, getDefaultValue} from '../../../helpers/ehr-defs'
import EhrPageFormLabel from '../EhrPageFormLabel.vue'
import EventBus from '../../../helpers/event-bus'
import { PAGE_DATA_REFRESH_EVENT, PAGE_FORM_INPUT_EVENT, DIALOG_INPUT_EVENT } from '../../../helpers/event-bus'

export default {
  name: 'EhrCommonElement',
  components: {
    EhrPageFormLabel
  },
  data: function () {
    return {
      dialogIsOpen: false,
      dependantOnKey: '',
      dependantOnValue: '',
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
    disabled () {
      let disable = this.notEditing
      if (!disable && this.dependantOnKey) {
        disable = !(this.dependantOnValue === true)
      }
      return disable
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
    refreshPage () {
      let pageDataKey = this.element.pageDataKey
      let pageData = this.ehrHelp.getAsLoadedPageData(pageDataKey)
      let value = pageData[this.key]
      this.setInitialValue(value)
    },
    /*
    About dependant elements ... we need to enable input elements based on the state of a checkbox.  We can't depend
    on reactive properties because the data structures for the pages only get created as needed. Vue's reactivity system
    needs properties to exist on load to work best. The vue $set method was tried but it had inconsistent results.
    I chose the direct listen-for-click-event approach. This approach also allows me to do more when the click
    happens and to setup default values.
     */
    dependantClickEvent () {
      const eData = { key: this.key, value: this.inputVal }
      const channel = this.eventChannelBroadcast
      this.$nextTick(function () {
        // console.log('Send an event on our transmission channel with a payload containing this component\'s value', eData, channel)
        EventBus.$emit(channel, eData)
      })
    },
    dependentPropertyReceiveEvent (eData) {
      // we're receiving an event transmitted by another instance of this component
      // it has sent a message on the channel this component listens on.
      // console.log(`On channel ${this.dependentPropertyChangeChannel} from key ${eData.key} got hit? ${eData.value}`)
      this.dependantOnValue = eData.value
      /*
      A change to false means disable this element. So let's also empty it too.
       */
      if (eData.value === false) {
        this.setInitialValue('')
      }
    },
    dependantPropertySetUp (elementDef) {
      const _this = this
      const element = this.element
      this.eventChannelBroadcast = 'radio:' + this.key
      const dKey = this.dependantOnKey = elementDef.dependantOn
      if (dKey) {
        // get default value of the other element and coerce to be boolean
        const dependantDefault = getDefaultValue(element.pageDataKey, dKey)
        this.dependantOnValue = !!dependantDefault
        this.dependentPropertyChangeChannel = 'radio:' + dKey
        this.dependentEventHandler = function (eData) {
          _this.dependentPropertyReceiveEvent(eData)
        }
        EventBus.$on(this.dependentPropertyChangeChannel, this.dependentEventHandler)
      }
    },
    setupCommon () {
      const element = this.element
      this.key = element.elementKey
      this.label = element.label
      this.inputType = element.inputType
      this.showLabel = !(element.formOption === 'hideLabel')
      let elementDef = getPageChildElement(element.pageDataKey, element.elementKey) || {}
      this.helperText = elementDef.helperText
      this.helperHtml = elementDef.helperHtml
      this.suffix = elementDef.suffix
      return elementDef
    },
    setupEventHandlers () {
      const _this = this
      if (this.isPageElement) {
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
    },
    setInitialValue (value) {
      this.inputVal = value
    },
  },
  mounted: function () {
    if (this.setup) {
      this.setup()
    }
    const elementDef = this.setupCommon()
    this.setupEventHandlers()
    this.dependantPropertySetUp(elementDef)
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
  },
  watch: {
    inputVal (val) {
      if (this.isPageElement) {
        if (this.notEditing) {
          // only broadcast if user is editing the form
          return
        }
        // Send event when any input changes. The listener (EhrHelper) will collect the changes
        // and be ready to send the changes to the server. Calculated values also listen.
        EventBus.$emit(PAGE_FORM_INPUT_EVENT, {value: val, element: this.element})
      }
      if (this.isDialogElement) {
        if (this.dialogIsOpen) {
          let element = this.element
          EventBus.$emit(DIALOG_INPUT_EVENT, {value: val, element: element})
        }
      }
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