
<script>
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import EhrTypes from '../../../helpers/ehr-types'

const PROPS = EhrTypes.dependantOn

export default {
  data: function () {
    return {
      dependantOnKey: '',
      dependantOnValue: '',
    }
  },
  methods: {
    /*
    About dependant elements ... we need to enable input elements based on the state of a checkbox.  We can't depend
    on reactive properties because the data structures for the pages only get created as needed. Vue's reactivity system
    needs properties to exist on load to work best. The vue $set method was tried but it had inconsistent results.
    I chose the direct listen-for-click-event approach. This approach also allows me to do more when the click
    happens and to setup default values.
     */
    dependantClickEvent () {
      const eData = { key: this.elementKey, value: this.inputVal }
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
    _dependantKeys (given) {
      /*
      Here we split the given definition into parts. The expected structure is
      (visible|disable):key[=refValue]
      The first part is the action. Does this dependancy control visibility or enabled.
      Second part is the element key to listen for.
      The optional third part gives the value to look for in the target element. Default to treat the value as boolean.
       */
      let  key, type, action, refValue
      key = given
      if (key) {
        console.log('whats in the dp', key)
        const parts = key.split(PROPS.splitActionKeyOn)
        action = parts[0]
        key = parts[1]
        if(key.includes(PROPS.splitKeyValueOn)) {
          const kv = key.split(PROPS.splitKeyValueOn)
          key = kv[0]
          refValue = kv[1]
          type = PROPS.type.select
        } else {
          type = PROPS.type.check
        }
      }
      return {key: key, type: type, action: action, refValue: refValue}
    },
    dependantPropertySetUp () {
      this.eventChannelBroadcast = PROPS.prefix + this.elementKey
      this.dependantDef = this._dependantKeys(this.element.dependantOn)
      if (this.dependantDef.key) {
        console.log('whats in the dp', this.dependantDef)
        this.dependantOnValue  = EhrDefs.getDefaultValue(this.pageDataKey, this.dependantDef.key)
        if(PROPS.typeCheck === this.dependantDef.type) {
          // ... and coerce to be boolean
          this.dependantOnValue = !!this.dependantOnValue
        }
        this.dependentPropertyChangeChannel = PROPS.prefix + this.dependantDef.key
        this.dependentEventHandler = (eData) => {
          this.dependentPropertyReceiveEvent(eData)
        }
        EventBus.$on(this.dependentPropertyChangeChannel, this.dependentEventHandler)
      }
    },
  },
  mounted: function () {
    this.dependantPropertySetUp()
  },
  beforeDestroy: function () {
    if (this.dependentEventHandler) {
      EventBus.$off(this.dependentPropertyChangeChannel, this.dependentEventHandler)
    }
  },
}
</script>
