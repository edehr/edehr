import { currentSimDayTime } from '@/helpers/date-helper'
import StoreHelper from '@/helpers/store-helper'

export function makeSubstitutions (html, regexp, composer) {
  const elements = [...html.matchAll(regexp)]
  elements.forEach(element => {
    const id = element[1]
    const name = element[2]
    const value = element[3]
    const toReplace = element[0]
    const newElement = composer(id, name, value)
    html = html.replace(toReplace, newElement)
  })
  return html
}

export const checkBoxRegExp = /{checkbox:([a-zA-Z][0-9a-zA-Z_]*)}/g
export const textRegExp = /{input:([a-zA-Z][0-9a-zA-Z_]*)}/g
export const radioSetRegExp = /{radioSet:id=([a-zA-Z][0-9a-zA-Z_]*),name=([a-zA-Z][0-9a-zA-Z_]*),value='([^']*)'}/g
export const recDateRegExp = /{recordDate}/g
export const recPersonRegExp = /{recordPerson}/g
export const commentRegExp = /{textarea:([a-zA-Z][0-9a-zA-Z_]*)}/g

export class CustomFormHelper {
  constructor (viewOnly, initialValues) {
    this.viewOnly = viewOnly
    this.initialValues = initialValues
    this.idToRadioSetName = {}
    this.idToType = {} // id : 'check'|...
  }

  isCheckId (id) {
    return this.idToType[id] === 'check'
  }
  isRadioId (id) {
    return !!this.idToRadioSetName[id]
  }
  getRadioName (id) {
    return this.idToRadioSetName[id]
  }
  getRadioIdsForName (name) {
    let results = []
    Object.keys(this.idToRadioSetName).forEach(
      (id) => {
        let rName = this.getRadioName(id)
        if (rName === name) {
          results.push(id)
        }
      })
    return results
  }

  buildForm (formValues, html, medHelper) {
    // next see if the html contains duplicate ids. Can't proceed if it does.
    let combined = []
    combined = combined.concat(this.collectIds(html, recDateRegExp))
    combined = combined.concat(this.collectIds(html, recPersonRegExp))
    combined = combined.concat(this.collectIds(html, checkBoxRegExp))
    combined = combined.concat(this.collectIds(html, radioSetRegExp))
    combined = combined.concat(this.collectIds(html, textRegExp))
    combined = combined.concat(this.collectIds(html, commentRegExp))
    const idDup = this.getDuplicates(combined)
    if (idDup.length > 0) {
      this.duplicateIds = idDup.join(', ')
    }
    if (this.duplicateIds && this.duplicateIds.length >0 ) {
      console.error('Found duplicate ids so stop set up of custom form')
      return
    }
    html = medHelper.setupMeds(html)
    html = this.customSetupRecValues(html)
    html = this.customSetupCheckboxes(html, formValues)
    html = this.customSetupRadioSets(html, formValues)
    html = this.customSetupText(html, formValues)
    html = this.customSetupComments(html, formValues)
    return html
  }

  formChanged (id, value, checked, formValues) {
    value = value ? value.trim() : value
    if (this.isCheckId(id)) {
      formValues[id] = checked
    } else if (this.isRadioId(id)) {
      const name = this.getRadioName(id)
      const idSet = this.getRadioIdsForName(name)
      idSet.forEach(rid => delete formValues[rid])
      formValues[id] = checked
      formValues[name] = value
    } else if (!value) {
      delete formValues[id]
    } else {
      formValues[id] = value
    }
  }
  // private ....

  collectIds (html, regexp) {
    const idList = []
    const elements = [...html.matchAll(regexp)]
    elements.forEach(element => {
      const id = element[1]
      idList.push(id)
    })
    return idList
  }

  customSetupRecValues (html) {
    let dateStamp = currentSimDayTime()
    let name = StoreHelper.getSimSignOnName()
    let role = StoreHelper.getSimSignOnProfession()
    html = makeSubstitutions( html, recDateRegExp,
      () => { return `<span>${dateStamp}</span>` }
    )
    html = makeSubstitutions( html, recPersonRegExp,
      () => { return `<span>${name}, ${role}</span>` }
    )
    return html
  }
  customSetupCheckboxes (html, formValues) {
    html = makeSubstitutions(
      html,
      checkBoxRegExp,
      (id) => {
        this.idToType[id] = 'check'
        let elem = [`<input type='checkbox' id='${id}'`]
        if (this.viewOnly) {
          elem.push('disabled')
        }
        let value = this.initialValues[id]
        if (value) {
          formValues[id] = value
          elem.push('checked')
        }
        elem.push('/>')
        return elem.join(' ')
      }
    )
    return html
  }
  customSetupRadioSets (html, formValues) {
    html = makeSubstitutions(
      html,
      radioSetRegExp,
      (id, name, value) => {
        // collect radio sets...
        this.idToRadioSetName[id] = name
        // stash type
        this.idToType[id] = 'radio'
        let elem = [`<input type='radio' id='${id}' name='${name}' value='${value}'`]
        if (this.viewOnly) {
          elem.push('disabled')
        }
        let iValue = this.initialValues[id]
        if (iValue) {
          formValues[id] = true
          formValues[name] = value
          elem.push('checked')
        }
        elem.push('/>')
        return elem.join(' ')
      }
    )
    return html
  }
  customSetupComments (html, formValues) {
    html = makeSubstitutions(
      html,
      commentRegExp,
      (id) => {
        this.idToType[id] = 'textarea'
        let elem = [`<textarea id='${id}' rows="5" cols="33"`]
        if (this.viewOnly) {
          elem.push('disabled')
        }
        elem.push('>')
        let value = this.initialValues[id]
        if (value) {
          formValues[id] = value
          elem.push(value)
        }
        elem.push('</textarea>')
        return elem.join(' ')
      }
    )
    return html
  }
  customSetupText (html, formValues) {
    html = makeSubstitutions(
      html,
      textRegExp,
      (id) => {
        this.idToType[id] = 'text'
        let elem = [`<input type='text' id='${id}'`]
        if (this.viewOnly) {
          elem.push('disabled')
        }
        let value = this.initialValues[id]
        if (value) {
          formValues[id] = value
          elem.push(`value='${value}'`)
        }
        elem.push('/>')
        return elem.join(' ')
      }
    )
    return html
  }
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
  }

}
