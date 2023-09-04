<template lang='pug'>
  div(:id='mainId')
    div(v-if='duplicateIds', class='errorMessage') Can not show the custom form because it contains duplicate identifiers. ---{{ duplicateIds }}---
    div(v-else)
      div(v-text-to-html="customHtml", class='ehr-custom-form')
</template>

<script>
import EhrElementCommon from '@/inside/components/page/EhrElementCommon'
const textRegExp = /(\{input:([a-z][0-9a-z_]*)})/g
const checkBoxRegExp = /(\{checkbox:([a-z][0-9a-z_]*)})/g

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
        textIdList: []
      }
      this.html = this.getHtml()
      // common code invokes setup when component is mounted
      this.structure.checkboxIdList = this.collectIds(this.html, checkBoxRegExp)
      this.structure.textIdList = this.collectIds(this.html, textRegExp)
      // next see if the html contains duplicate ids. Can't proceed if it does.
      const combined = [...this.structure.textIdList, ...this.structure.checkboxIdList]
      const idDup = this.getDuplicates(combined)
      if (idDup.length > 0) {
        this.duplicateIds = idDup.join(', ')
      }
      if (this.duplicateIds && this.duplicateIds.length >0 ) {
        console.error('Found duplicate ids so stop set up of custom form')
        return
      }
      this.customSetupCheckboxes()
      this.customSetupText()
      // set the inner html. Vue reactivity will load the dom
      this.customHtml = this.html
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
        const toReplace = element[0]
        const newElement = composer(id)
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

<!--can not use scoped because that prevents the elements inside the custom form from being styled-->
<style lang='scss' >
// Be sure to nest all styles inside the top level class
.ehr-custom-form {
  & section {
    margin: 2rem 0;
  }

  input[type=checkbox] {
    transform: scale(1.5);
  }

  & .boxed {
    margin: 1rem;
    padding: 1rem;
    border: 1px solid #222222;
    & h2 {
      margin-top: 0;
    }
  }

  & .indent {
    margin-left: 2rem;
  }

  & .tbl-no-borders {
    border-collapse: collapse;
    border: none;
    & td, tr, th {
      border: none;
    }
  }

  & .tbl-full-width {
    width: 100%;
  }

  & article {
    padding-left: 1rem;
    margin-top: 1rem;
    & h3 {
      margin-bottom: 0;
    }
    & ul {
      margin-left: 2rem;
    }
    & ul > li {
      list-style: square;
    }
  }
  & .text-right {
    float: right;
  }
  & .form-title {
    margin-bottom: 0;
    text-align: center;
  }
  & .form-subtitle {
    margin-top: 0;
    text-align: center;
  }
}
</style>
