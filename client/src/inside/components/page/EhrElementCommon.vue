<script>
import EhrPageFormLabel from './EhrPageFormLabel.vue'
import EhrDependent from './EhrDependent.vue'
import EhrDefs from '@/helpers/ehr-defs-grid'
import EhrTypes from '@/inside/defs-grid/ehr-types'
import CaseContext from '@/helpers/case-context'
import UiInfo from '@/app/ui/UiInfo'
import EventBus, { FORM_INPUT_EVENT, PAGE_DATA_READY_EVENT } from '@/helpers/event-bus'

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
      inputVal: '',
      suffix: '',
      options: '',
      assignment: {}
    }
  },
  props: {
    elementKey: { type: String },
    ehrHelp: { type: Object },
    viewOnly: { type: Boolean, default: false }
  },
  computed: {
    element () {
      return EhrDefs.getPageChildElement(this.pageDataKey, this.elementKey)
    },
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
    assignmentCaseContext () {
      return CaseContext.getAssignmentCaseContext()
    },
    showSignature () {
      return CaseContext.getPageTableShowSignature(this.pageDataKey, this.tableKey)
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
      if (this.showSignature) {
        // make the record header read only if the case context feature is enabled and there is case context data
        // and the field is part of the record header
        disable = true
      }
      return disable
    }
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
    setInitialValue (value) {
      this.inputVal = value
      // invoke setInitialDependentValue after inputVal is set
      this.setInitialDependentValue()
    },
    sendInputEvent (val) {
      if (dbInputs) console.log('EhrCommon broadcast PAGE_FORM_INPUT_EVENT ', val, this.elementKey)
      EventBus.$emit(FORM_INPUT_EVENT, { value: val, element: this.element })
    },
    refreshPage () {
      try {
        let pageData = this.ehrHelp.getMergedPageData()
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
              console.log('TODO Create a more general way to transform ehr content when structure changes')
            }
            value = vt
          }
        }
        if (dbPage || dbInputs) console.log('EhrCommon page data is ready', this.elementKey, value)
        this.setInitialValue(value)
      } catch (err) {
        console.error('Refresh element on page', err.message)
      }
    },
    dialogEvent (open, options) {
      if (dbDialog) console.log('EhrCommon dialog opened or closed', this.elementKey, open)
      this.dialogIsOpen = open
      if (open) {
        if (this.isEmbedded) {
          let inputs = options.inputs
          let initialValue = inputs[this.elementKey]
          this.setInitialValue(initialValue)
        } else {
          let inputs = this.ehrHelp.getDialogInputs(this.tableKey)
          let initialValue = inputs[this.elementKey]
          if (dbDialog || dbInputs) console.log('EhrCommon key has value', this.key, initialValue)
          this.setInitialValue(initialValue)
          if (this.showSignature) {
            const v = this.assignmentCaseContext[this.key]
            this.setInitialValue(v)
          }
          if (this.inputType === EhrTypes.dataInputTypes.ehr_embedded) {
            const refValue = this.element.embedRef + '.' + options.tableActionRowIndex
            // console.log('dialogEvent SET embedded value', this.$options.name, initialValue, refValue)
            // store this value into the active inputs area to be saved along with other data, if the dialog save is invoked.
            this.sendInputEvent(refValue)
            // the element receiving this event may not be a EhrElementEmbedded
            if (this.setEmbeddedGroupData) {
              this.setEmbeddedGroupData(refValue)
            }
          }
        }
      }
    },
    setupCommon () {
      const element = this.element
      this.suffix = element.suffix
      this.options = element.options
    },
    setupEventHandlers () {
      const _this = this
      if (this.isPageElement) {
        this.pageRefreshEventHandler = function () {
          _this.refreshPage()
        }
        EventBus.$on(PAGE_DATA_READY_EVENT, this.pageRefreshEventHandler)
      }
      if (this.isTableElement) {
        this.dialogEventHandler = function (eData) {
          _this.dialogEvent(eData.value, eData.options)
        }
        this.dialogEventKey = this.ehrHelp.getDialogEventChannel(this.tableKey)
        // console.log('ehr common listen on channel', this.dialogEventKey)
        EventBus.$on(this.dialogEventKey, this.dialogEventHandler)
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
      EventBus.$off(PAGE_DATA_READY_EVENT, this.pageRefreshEventHandler)
    }
    if (this.dialogEventHandler) {
      console.log('ehr common stop list on ', this.dialogEventKey)
      EventBus.$off(this.dialogEventKey, this.dialogEventHandler)
    }
  },
  watch: {
    inputVal (val) {
      if (dbInputs) console.log('EhrElement input val changed', this.elementKey, val)
      if (this.isPageElement && this.isEditing) {
        // only broadcast if user is editing the form
        this.sendInputEvent(val)
      }
      if (dbInputs)
        console.log(
          'EhrElement this.isTableElement',
          this.isTableElement,
          'this.dialogIsOpen',
          this.dialogIsOpen
        )
      if (this.isTableElement && this.dialogIsOpen) {
        this.sendInputEvent(val)
      }
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
.text-input {
  display: inline-block;
}

.suffix {
  position: absolute;
  margin-left: 5px;
  bottom: 5px;
  right: 10px;
}
</style>
