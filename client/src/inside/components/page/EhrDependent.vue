<script>
import EhrDefs from '../../../ehr-definitions/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import EhrTypes from '@/ehr-definitions/ehr-types'
const dbug = false
const PROPS = EhrTypes.dependentOn
const UI_TYPES = EhrTypes.inputTypes
/*
EhrDependent is to be mixed into components to provide linkage between components. For example, one checkbox element
can toggle whether another component is enabled or disabled. Or, the current value of a select can control the
visibility of a group of elements.  These are the only two tested scenarios but more are possible.


See how dependentUIEvent() is invoked on checkboxes and selects (EhrElementForm). This results in an event being sent.

Other elements may be registered to listen for those events. See _dReceiveEvent below.  This method sets
the incoming dependent on value into the element's properties (see the data element below). This is a reactive field
so the parent class can toggle the enable/disable visible/invisible action.

The setup is a little complex. The inputs spreadsheet contains a 'dependentOn' field. See _dependentKeys below.

 */
export default {
  data: function () {
    return {
      dependentOnKey: '',
      dependentOnValue: '',
      dependentDef: {}
    }
  },
  computed: {
    isEventSource () {
      const type = this.inputType
      return type === UI_TYPES.select || type === UI_TYPES.checkbox || type === UI_TYPES.personAge
    },
    dependentOn () {
      return this.element ? this.element.dependentOn : (this.group ? this.group.dependentOn : undefined)
    },
  },
  methods: {
    setInitialDependentValue () {
      if(this.isEventSource) {
        if (dbug) console.log('eDep setInitialDependentValue inputType, elementKey', this.inputType, this.elementKey)
        this.dependentUIEvent()
      }
    },
    setDependentValue (value) {
      if (dbug) console.log('eDep setDependentValue', this.elementKey, value, this.dependentDef)
      this.dependentOnValue = value
    },
    dependentUIEvent () {
      const channel = this.eventChannelBroadcast
      if(channel) {
        const eData = {key: this.elementKey, value: this.inputVal}
        this.$nextTick(function () {
          if (dbug) console.log('eDep Send an event on our transmission channel '+channel+' with a payload containing this component\'s value', eData, channel)
          EventBus.$emit(channel, eData)
        })
      }
    },
    _dReceiveEvent (eData) {
      if (dbug) console.log('eDep _dReceiveEvent', eData)
      // we're receiving an event transmitted by another instance of this component
      // it has sent a message on the channel this component listens on.
      // if (dbug) console.log(`On channel ${this.dChannel} from key ${eData.key} got hit? ${eData.value}`)
      this.setDependentValue(eData.value)
    },
    _dReceiveSetup () {
      this.dChannel = PROPS.prefix + this.dependentDef.key
      if (dbug) console.log('eDep _dReceiveSetup dChannel', this.dChannel)
      this.dependentEventHandler = (eData) => { this._dReceiveEvent(eData) }
      EventBus.$on(this.dChannel, this.dependentEventHandler)
    },
    _dependentKeys (given) {
      /*
        visble:administration=sched,prn
        visble:administration=set
        visble:administration=once
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
        action = parts[0] // e.g. visible
        key = parts[1] // e.g. administration=sched,prn
        if (key.includes(PROPS.splitKeyValueOn)) {
          const kv = key.split(PROPS.splitKeyValueOn)
          key = kv[0] // e.g. administration
          refValue = kv[1] // e.g. sched,prn
          type = PROPS.type.select
        } else if (PROPS.action.age === action) {
          type = PROPS.type.age
        } else {
          type = PROPS.type.check
        }
      }
      return {key: key, type: type, action: action, refValue: refValue}
    },
    dependentPropertySetUp () {
      if (this.dependentOn) {
        if (dbug) console.log('eDep do we have dependentOn and element', this.dependentOn, this.elementKey)
        this.dependentDef = this._dependentKeys(this.dependentOn)
        if (dbug) console.log('eDep dependentDef', this.dependentDef)
        if (this.dependentDef.key) {
          this._dReceiveSetup()
          this.dependentOnValue = EhrDefs.getDefaultValue(this.pageDataKey, this.dependentDef.key)
          if (PROPS.type.check === this.dependentDef.type) {
            // ... coerce to be boolean
            this.dependentOnValue = !!this.dependentOnValue
          }
        }
      }
      if(this.isEventSource) {
        this.eventChannelBroadcast = PROPS.prefix + this.elementKey
      }
    },
  },
  mounted: function () {
    this.dependentPropertySetUp()
  },
  beforeDestroy: function () {
    if (this.dependentEventHandler) {
      EventBus.$off(this.dChannel, this.dependentEventHandler)
    }
  },
}
</script>
