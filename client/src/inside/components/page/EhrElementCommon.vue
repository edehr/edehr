<script>
import EhrPageFormLabel from './EhrPageFormLabel.vue'
import EhrDependent from './EhrDependent.vue'
import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrTypes from '@/ehr-definitions/ehr-types'
import UiInfo from '@/app/ui/UiInfo'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_REFRESH_EVENT } from '@/helpers/event-bus'
import EhrData from '@/inside/components/page/ehr-data'
import { validateAgeValue } from '@/ehr-definitions/ehr-def-utils'

const DEPENDENT_PROPS = EhrTypes.dependentOn

const dbInputs = false
const dbDialog = false
const dbPage = false

export default {
  extends: EhrDependent,
  components: {
    EhrPageFormLabel,
    UiInfo
  },
  inject: ['pageDataKey', 'isPageElement', 'isTableElement', 'tableKey', 'formKey', 'isEmbedded'],
  data: function () {
    return {
      dialogIsOpen: false,
      initialVal: '',
      inputVal: '',
      validData: true,
      assignment: {}
    }
  },
  props: {
    elementKey: { type: String },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false }
  },
  computed: {
    devEnv () { return process.env.NODE_ENV === 'development' },
    elementIsId () { return this.element.inputType === EhrTypes.dataInputTypes.generatedId },
    element () {
      return EhrDefs.getPageChildElement(this.pageDataKey, this.elementKey)
    },
    helperText () { return this.element.helperText },
    helperHtml () { return this.element.helperHtml },
    hideElement () { return (this.element.formOption === 'hideElement' && this.hideIfId)},
    hideIfId () { return this.elementIsId ? !this.devEnv : true },

    _id () { return this.element.fqn}, // element fqn are pageKey.tableKey.childKey
    inputId () {
      return this.elementKey + this.element.inputType
    },
    inputType () {
      return this.element.inputType
    },
    label () {
      return this.element.label
    },
    key () {
      return this.element.elementKey
    },
    lookaheadKey () {
      return this.element.lookaheadKey
    },
    isEditing () {
      return this.ehrHelp.isEditing()
    },
    disabled () {
      let disable = false
      if (this.isPageElement) {
        disable = !this.ehrHelp.isEditingForm(this.formKey)
      }
      if (this.dependentDef) {
        if (!disable && this.dependentDef.action === DEPENDENT_PROPS.action.disable) {
          disable = !(this.dependentOnValue === true || this.dependentOnValue === 'TRUE')
          if (disable) {
            if (dbInputs) console.log('EhrElementCommon. A change to false means disable this element so empty it.', this.key)
            this.setInitialValue('')
          }
        }
      }
      if (this.element.formOption === 'elementViewOnly') {
        disable = true
      }
      return disable
    },
    suffix () { return this.element.suffix }
  },
  methods: {
    isType (type) {
      return this.inputType === type
    },
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
    internalSetInputValue (value) {
      // this should trigger the watch ...
      this.inputVal = value
    },
    /**
     * Set this element's model value (inputVal).
     * @param value
     */
    setInitialValue (value) {
      if (dbInputs) console.log('EhrCommon set initial value ', value, this.elementKey)
      this.initialVal = value
      this.inputVal = value
      if (this.setInitialValueExtended) {
        // setInitialValueExtended is for components that extend this one.
        this.setInitialValueExtended(value)
      }
      // invoke setInitialDependentValue after inputVal is set
      this.setInitialDependentValue()
    },
    sendInputEvent (val) {
      if (dbInputs) console.log('EhrCommon broadcast PAGE_FORM_INPUT_EVENT ', val, this.elementKey)
      // notify the dependents that they have a new value to use
      this.dependentUIEvent()
      if (this.isPageElement &&  this.isEditing || this.isTableElement && this.dialogIsOpen) {
        // TODO consider changing dialogIsOpen flag to something we actively get from the open dialog.
        EventBus.$emit(FORM_INPUT_EVENT, { value: val, element: this.element, tableKey: this.tableKey })
      } else {
        // do nothing.  This happens on load when setIntialValue is used.
      }
    },
    refreshPage () {
      try {
        let pageData = EhrData.getMergedPageData(this.pageDataKey)
        let value = pageData[this.elementKey]

        let defVal = EhrDefs.getDefaultValue(this.pageDataKey, this.elementKey)
        value = value || defVal
        if (this.inputType === EhrTypes.dataInputTypes.visitDay) {
          // From earlier EHR records the admissionDay field and perhaps other fields may
          // have "Day x" content. The field now requires the visit day, a number 0,1,2,3,4
          function transform (value) {
            let re = /\D*(\d*).*/
            let vt = value
            if (typeof value === 'string') {
              vt = value.replace(re, '$1')
              // console.log(`${value} --> ${vt}`)
            }
            return vt
          }

          // samples of transform. All produce just 03
          // transform('Day 03 fe 45-23')
          // transform('03 fe')
          // transform('D asd 03')
          // transform('D - 03 asd 04')
          // transform(3)

          let vt = transform(value)
          if (vt !== value) {
            if (process.env.NODE_ENV !== 'production') {
              console.log(`In EhrElementCommon transforming visitDay from "${value} to "${vt}"`)
              // TODO
              console.log('TODO Create a more general way to transform ehr content when structure changes', this.element)
            }
            value = vt
          }
        }
        if (dbPage || dbInputs) console.log('EhrCommon page data is ready', this.elementKey, value)
        this.setInitialValue(value)
      } catch (err) {
        console.error('Refresh element on page', err)
      }
    },
    handleDialogEvent (options) {
      const open = options.open
      // const { key, tableAction, sendersTableDef, sourceRowId, tableActionDraftRowIndex, draftRowData, draftRowId } = options
      // console.log('EEC dialog event.', key, tableAction, sourceRowId, tableActionDraftRowIndex, draftRowId)
      /*
      this.dialogIsOpen = open
      TODO Change this.dialogIsOpen from a local value per element to an accessor on the single source of truth.
      This might be accomplished by passing the dialog into the event instead of the options.
       */
      this.dialogIsOpen = open
      if (!open) {
        // console.log('EEC If closing (not open) then just return')
        return
      }
      if (this.isEmbedded) {
        // console.log('isEmbedded is provided by the parent', this.isEmbedded)
        /*
          let inputs = options.inputs ? options.inputs : options.data
          Change this. Data should not come from two different object types without a strong and clear need
           */
        let inputs = options.inputs ? options.inputs : options.data
        // console.log('EEC handleDialogEvent. is embedded', inputs)
        if (inputs) {
          /*
            If this is an embedded item then it is read only and only reflects values ... so why the following two steps?
             */
          let initialValue = inputs[this.elementKey]
          this.setInitialValue(initialValue) // setInitialValue will emit event to trigger items dependent on this item
        } else {
          /**
             * Document why there might not be inputs in the options.
             */
          // console.log('inputs TODO fix no inputs here ', options, this.elementKey)
        }
      } else {
        let inputs = this.ehrHelp.getDialogInputs(this.tableKey)
        let initialValue = inputs[this.elementKey]
        if (dbDialog || dbInputs) console.log('EhrCommon dialog input for key has value:', this.key, initialValue)
        this.setInitialValue(initialValue)
        if (this.inputType === EhrTypes.dataInputTypes.ehr_embedded) {
          if( options.viewOnly ) {
            // skip sending input event on embedded.
            // This may impact dynamic values inside the embedded form but
            // that should be avoided in the design of the page/form.
          } else {
            const refValue = options.embedRefValue
            // console.log('EEC set embedded refValue', refValue)
            if (refValue) {
              // store this value into the active inputs area to be saved along with other data, if the dialog save is invoked.
              // Why are we sending the FORM INPUT EVENT here? Why not from the watch?
              this.sendInputEvent(refValue)
              // If the element receiving this event is a EhrElementEmbedded ...
              if (this.setEmbeddedGroupData) {
                this.setEmbeddedGroupData(refValue)
              }
            }
          }
        }
      }
    },
    setupCommon () {
    },
    setupEventHandlers () {
      const _this = this
      if (EhrTypes.nondataInputType[this.inputType]) {
        // skip setting up listeners on elements that don't change
        return
      }
      // is the container a page?
      if (this.isPageElement) {
        this.pageRefreshEventHandler = function () {
          _this.refreshPage()
        }
        EventBus.$on(PAGE_DATA_REFRESH_EVENT, this.pageRefreshEventHandler)
      }
      // is the container a table?
      if (this.isTableElement) {
        this.dialogEventHandler = function (eData) {
          _this.handleDialogEvent(eData)
        }
        EventBus.$on(this.ehrHelp.getDialogEventChannel(this.tableKey), this.dialogEventHandler)
      }
    },
    /**
     * When the element's value changes we can validate it.
     * @param newVal
     */
    validateSelf (newVal) {
      this.validData = true
      if (this.inputType === EhrTypes.dataInputTypes.personAge) {
        this.validData = validateAgeValue(newVal)
      }
    }
  },
  mounted: function () {
    this.setupCommon()
    this.setupEventHandlers()
    if (this.setup) {
      this.setup()
    }
  },
  beforeDestroy: function () {
    if (this.pageRefreshEventHandler) {
      EventBus.$off(PAGE_DATA_REFRESH_EVENT, this.pageRefreshEventHandler)
    }
    if (this.dialogEventHandler) {
      EventBus.$off(this.ehrHelp.getDialogEventChannel(this.tableKey), this.dialogEventHandler)
    }
  },
  watch: {
    inputVal (val) {
      if (dbInputs) console.log('EhrElement input val changed', this.elementKey, val)
      this.validateSelf(val)
      this.sendInputEvent(val)
    }
  }
}
</script>
<style lang='scss'>
@import '@/scss/definitions';

.check-label {
  display: inline;
  label {
    width: auto;
    text-align: left;
    padding-right: 0;
  }
  label::after {
    content: "" !important;
  }
}

.assetLink a {
  color: $grey60;
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
.suffix,
.numb-input,
.text-input {
  display: inline-block;
}

.suffix {
  position: absolute;
  right: 10px;
}
</style>
