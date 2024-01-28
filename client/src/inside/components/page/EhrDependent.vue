<script>
import EhrDefs from '../../../ehr-definitions/ehr-defs-grid'
import EventBus from '../../../helpers/event-bus'
import EhrTypes from '@/ehr-definitions/ehr-types'
import { processDependentOnChange } from '@/ehr-definitions/ehr-def-utils'
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
    /**
     * Get this element's dependentOn property.
     * If the subclass is an EhrGroup then there may be a group property. Get it's dependentOn property.
     * Samples:
     * dateOfBirth age:personAge
     * Many samples in the medications form set visibility.  E.g. 'visble:med_timing=cont'  Note the misspelling is legacy.
     * This says the element's visibility is dependent on the element with key 'med_timing' and this element is expected
     * to be a select with a value of 'cont'
     * Another sample, 'visble:med_timing=prn,sched,set' shows that the values can be a CSV string
     *
     * Samples in the test pages.
     *
     * @returns {*|undefined}
     */
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
    setDependentValue (value, because) {
      if (dbug) console.log('eDep setDependentValue', this.elementKey, value, this.dependentDef)
      if (this.dependentDef.type === 'onChange') {
        if (because !== 'selectChange') {
          return
        }
        value = processDependentOnChange(this.dependentDef, value, this.pageDataKey, this.elementKey)
        // bad form to use a subclass' method but need to do it
        this.setInitialValue(value)
      }
      this.dependentOnValue = value
    },
    /**
     * Pass in a "because" value if you need to take special actions. For example, the onChange dependent value
     * should only be updated on actual user input and not the usual value initialization process because the
     * semantics of "onChange" imply doing it only when the user changes the source value.
     * @param because
     */
    dependentUIEvent (because) {
      const channel = this.eventChannelBroadcast
      if(channel) {
        const eData = {key: this.elementKey, value: this.inputVal, because: because}
        this.$nextTick(function () {
          if (dbug) console.log('eDep Send an event on our transmission channel '+channel+' with a payload containing this component\'s value', eData, channel)
          EventBus.$emit(channel, eData)
        })
      }
    },
    /**
     * _dReceiveEvent is the flip side of the emit in dependentUIEvent
     * @param eData { value | because (optional string)}
     * @private
     */
    _dReceiveEvent (eData) {
      if (dbug) console.log('eDep _dReceiveEvent', eData)
      // we're receiving an event transmitted by another instance of this component
      // it has sent a message on the channel this component listens on.
      // if (dbug) console.log(`On channel ${this.dChannel} from key ${eData.key} got hit? ${eData.value}`)
      this.setDependentValue(eData.value, eData.because)
    },
    _dReceiveSetup () {
      this.dChannel = PROPS.prefix + this.dependentDef.key
      if (dbug) console.log('eDep _dReceiveSetup dChannel', this.dChannel)
      this.dependentEventHandler = (eData) => { this._dReceiveEvent(eData) }
      EventBus.$on(this.dChannel, this.dependentEventHandler)
    },

    dependentPropertySetUp () {
      if (this.dependentOn) {
        const depOnValue = this.dependentOn
        const def = this.dependentDef = EhrDefs.parseDependentOn(depOnValue)
        // console.log('depOnValue', depOnValue)
        // console.log('dependentDef', def)
        if (def.key) {
          this._dReceiveSetup()
          this.dependentOnValue = EhrDefs.getDefaultValue(this.pageDataKey, def.key)
          if (PROPS.type.check === def.type) {
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
