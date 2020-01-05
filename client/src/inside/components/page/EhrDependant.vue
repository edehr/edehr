<script>
import EhrDefs from '../../../helpers/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import EhrTypes from '../../../helpers/ehr-types'

const PROPS = EhrTypes.dependantOn
/*
EhrDependant is to be mixed into components to provide linkage between components. For example, one checkbox element
can toogle whether another component is enabled or disabled. Or, the current value of a select can control the
visibility of a group of elements.  These are the only two tested scenarios but more are possible.


See how dependantEvent() is invoked on checkboxes and selects (EhrElementForm). This results in an event being sent.

Other elements may be registered to listen for those events. See _dReceiveEvent below.  This method sets
the incoming dependant on value into the element's properties (see the data element below). This is a reactive field
so the parent class can toggle the enable/disable visible/invisible action.

The setup is a little complex. The inputs spreadsheet contains a 'dependantOn' field. See _dependantKeys below.

 */
export default {
  data: function () {
    return {
      dependantOnKey: '',
      dependantOnValue: '',
    }
  },
  computed: {
    dependantOn () {
      return this.element ? this.element.dependantOn : (this.group ? this.group.dependantOn : undefined)
    },
  },
  methods: {
    dependantEvent () {
      const eData = {key: this.elementKey, value: this.inputVal}
      const channel = this.eventChannelBroadcast
      this.$nextTick(function () {
        // console.log('Send an event on our transmission channel with a payload containing this component\'s value', eData, channel)
        EventBus.$emit(channel, eData)
      })
    },
    _dReceiveEvent (eData) {
      // we're receiving an event transmitted by another instance of this component
      // it has sent a message on the channel this component listens on.
      // console.log(`On channel ${this.dChannel} from key ${eData.key} got hit? ${eData.value}`)
      this.dependantOnValue = eData.value
    },
    _dReceiveSetup () {
      this.dChannel = PROPS.prefix + this.dependantDef.key
      this.dependentEventHandler = (eData) => { this._dReceiveEvent(eData) }
      EventBus.$on(this.dChannel, this.dependentEventHandler)
    },
    _dependantKeys (given) {
      /*
        Here we split the given definition into parts. The expected structure is
        (visible|disable):key[=refValue]
        The first part is the action. Does this dependancy control visibility or enabled.
        Second part is the element key to listen for.
        The optional third part gives the value to look for in the target element. Default to treat the value as boolean.
         */
      let key, type, action, refValue
      key = given
      if (key) {
        const parts = key.split(PROPS.splitActionKeyOn)
        action = parts[0]
        key = parts[1]
        if (key.includes(PROPS.splitKeyValueOn)) {
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
      // console.log('do we have dependantOn and element', this.dependantOn, this.elementKey)
      if (this.elementKey) {
        this.eventChannelBroadcast = PROPS.prefix + this.elementKey
      }
      if (this.dependantOn) {
        this.dependantDef = this._dependantKeys(this.dependantOn)
        if (this.dependantDef.key) {
          this._dReceiveSetup()
          this.dependantOnValue = EhrDefs.getDefaultValue(this.pageDataKey, this.dependantDef.key)
          if (PROPS.type.check === this.dependantDef.type) {
            // ... coerce to be boolean
            this.dependantOnValue = !!this.dependantOnValue
          }
        }
      }
    },
  },
  mounted: function () {
    this.dependantPropertySetUp()
  },
  beforeDestroy: function () {
    if (this.dependentEventHandler) {
      EventBus.$off(this.dChannel, this.dependentEventHandler)
    }
  },
}
</script>
