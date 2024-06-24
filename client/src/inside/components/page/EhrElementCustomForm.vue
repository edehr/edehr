<template lang='pug'>
  div(:id='mainId')
    div(v-if='duplicateIds', class='errorMessage') Can not show the custom form because it contains duplicate identifiers. ---{{ duplicateIds }}---
    div(v-else)
      div(v-text-to-html="customHtml", class='ehr-custom-form')
</template>

<script>
import EhrElementCommon from '@/inside/components/page/EhrElementCommon'
import StoreHelper from '@/helpers/store-helper'
import { currentSimDayTime } from '@/helpers/date-helper'
const textRegExp = /(\{input:([a-z][0-9a-z_]*)})/g
const checkBoxRegExp = /(\{checkbox:([a-z][0-9a-z_]*)})/g
const radioSetRegExp = /(\{radioSet:id=([a-z][0-9a-z_]*),name=([a-z][0-9a-z_]*)})/g
const recDateRegExp = /(\{recordDate})/g
const recPersonRegExp = /(\{recordPerson})/g
const commentRegExp = /(\{textarea:([a-z][0-9a-z_]*)})/g


export default {
  extends: EhrElementCommon,
  components: {},
  props: {},
  data () {
    return {
      customHtml: '',
      duplicateIds: undefined,
      initial: ''
    }
  },
  computed: {
    mainId () {
      return this.element.elementKey
    }
  },
  methods: {
    /*
    The entry point is when the ehr common sets the initial value. This component
    then creates the inner html and uses the starting values.  See setInitialValueExtended
     */
    collectIds (html, regexp) {
      const idList = []
      const elements = [...html.matchAll(regexp)]
      elements.forEach(element => {
        const id = element[2]
        idList.push(id)
      })
      return idList
    },
    customSetupCommon () {
      this.formValues = {}
      this.structure = {
        checkboxIdList: [],
        radioSetIdList: [],
        textIdList: [],
        recDateIdList: [],
        recPersonIdList: [],
        commentList: []
      }
      this.html = this.getHtml()
      // common code invokes setup when component is mounted
      this.structure.recDateIdList = this.collectIds(this.html, recDateRegExp)
      this.structure.recPersonIdList = this.collectIds(this.html, recPersonRegExp)
      this.structure.checkboxIdList = this.collectIds(this.html, checkBoxRegExp)
      this.structure.radiosetIdList = this.collectIds(this.html, radioSetRegExp)
      this.structure.textIdList = this.collectIds(this.html, textRegExp)
      this.structure.commentIdList = this.collectIds(this.html, commentRegExp)
      // next see if the html contains duplicate ids. Can't proceed if it does.
      const combined = [
        ...this.structure.textIdList,
        ...this.structure.commentList,
        ...this.structure.checkboxIdList,
        ...this.structure.radiosetIdList,
        ...this.structure.recDateIdList,
        ...this.structure.recPersonIdList
      ]
      const idDup = this.getDuplicates(combined)
      if (idDup.length > 0) {
        this.duplicateIds = idDup.join(', ')
      }
      if (this.duplicateIds && this.duplicateIds.length >0 ) {
        console.error('Found duplicate ids so stop set up of custom form')
        return
      }
      this.customSetupRecValues()
      this.customSetupCheckboxes()
      this.customSetupRadioSets()
      this.customSetupText()
      this.customSetupComments()
      // set the inner html. Vue reactivity will load the dom
      this.customHtml = this.html
    },
    customSetupRecValues () {
      let dateStamp = currentSimDayTime()
      let name = StoreHelper.getSimSignOnName()
      let role = StoreHelper.getSimSignOnProfession()
      this.html = this.makeSubstitutions( this.html, recDateRegExp,
        () => { return `<span>${dateStamp}</span>` }
      )
      this.html = this.makeSubstitutions( this.html, recPersonRegExp,
        () => { return `<span>${name}, ${role}</span>` }
      )
    },
    customSetupCheckboxes () {
      this.html = this.makeSubstitutions(
        this.html,
        checkBoxRegExp,
        (id) => {
          let elem = [`<input type='checkbox' id='${id}'`]
          if (this.viewOnly) {
            elem.push('disabled')
          }
          let value = this.initial[id]
          if (value) {
            this.formValues[id] = value
            elem.push('checked')
          }
          elem.push('/>')
          return elem.join(' ')
        }
      )
    },
    customSetupRadioSets () {
      this.html = this.makeSubstitutions(
        this.html,
        radioSetRegExp,
        (id, name) => {
          let elem = [`<input type='radio' id='${id}' name='${name}'`]
          if (this.viewOnly) {
            elem.push('disabled')
          }
          let value = this.initial[id]
          if (value) {
            this.formValues[id] = value
            elem.push('checked')
          }
          elem.push('/>')
          return elem.join(' ')
        }
      )
    },
    customSetupComments () {
      this.html = this.makeSubstitutions(
        this.html,
        commentRegExp,
        (id) => {
          let elem = [`<textarea id='${id}' rows="5" cols="33"`]
          if (this.viewOnly) {
            elem.push('disabled')
          }
          elem.push('>')
          // elem.push('uncomment to see textarea')
          let value = this.initial[id]
          if (value) {
            this.formValues[id] = value
            elem.push(value)
          }
          elem.push('</textarea>')
          return elem.join(' ')
        }
      )
    },
    customSetupText () {
      this.html = this.makeSubstitutions(
        this.html,
        textRegExp,
        (id) => {
          let elem = [`<input type='text' id='${id}'`]
          if (this.viewOnly) {
            elem.push('disabled')
          }
          let value = this.initial[id]
          if (value) {
            this.formValues[id] = value
            elem.push(`value='${value}'`)
          }
          elem.push('/>')
          return elem.join(' ')
        }
      )
    },
    getDuplicates (arr) {
      let aSet = new Set()
      let dSet = new Set()
      for (let i = 0; i < arr.length; i++) {
        let a = arr[i]
        if (aSet.has(a)) {
          dSet.add(a)
        } else {
          aSet.add(a)
        }
      }
      return [...dSet]
    },
    getHtml () {
      const fName = this.element.formOption
      return require('../../../custom_forms/' + fName + '.txt')
    },
    makeSubstitutions (html, regexp, composer) {
      const elements = [...html.matchAll(regexp)]
      elements.forEach(element => {
        const id = element[2]
        const name = element[3]
        const toReplace = element[0]
        const newElement = composer(id, name)
        html = html.replace(toReplace, newElement)
      })
      return html
    },
    removeListener () {
      const mainElement = document.querySelector('#' + this.mainId)
      if (this.handler && mainElement) {
        mainElement.removeEventListener('change', this.handler)
        this.handler = undefined
      }
    },
    setInitialValueExtended (value) {
      this.initial = value ? JSON.parse(value) : {}
      if (this.viewOnly) {
        this.setupViewOnly()
      } else {
        this.setupActive()
      }
    },
    setupActive () {
      this.customSetupCommon()
      this.handler = (event) => {
        const { id, value } = event.target
        this.formValues[id] = value
        // set inputVal will trigger the watch in ehr common
        this.inputVal = JSON.stringify(this.formValues)
      }
      const mainElement = document.querySelector('#' + this.mainId)
      mainElement.addEventListener('change', this.handler)
    },
    setupViewOnly () {
      this.customSetupCommon()
      this.removeListener()
    },
  },
  beforeDestroy () {
    this.removeListener()
  },
}
</script>
