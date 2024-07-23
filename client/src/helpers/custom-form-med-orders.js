import { checkBoxRegExp, radioSetRegExp, textRegExp } from '@/helpers/custom-form-helper'
import { currentSimDayNumber, currentSimTime } from '@/helpers/date-helper'
import StoreHelper from '@/helpers/store-helper'

const medRegExp = /{mk="([^"]*)",role="([^"]*)",value="([^"]*)"(,display="([^"]*)")?}/g
export function makeReSubstitutions (html, regexp, composer) {
  const elements = [...html.matchAll(regexp)]
  elements.forEach(element => {
    const id = element[1]
    const name = element[2]
    const value = element[3]
    // const displayGroup = element[4]
    const display = element[5]
    const toReplace = element[0]
    const newElement = composer(id, name, value, display)
    html = html.replace(toReplace, newElement)
  })
  return html
}

export class CustomFormMedOrderHelper {
  constructor (pageKey, tableKey, elementKey) {
    this.pageKey = pageKey
    this.tableKey = tableKey
    this.elementKey = elementKey
    this.medsByMedKey = {}
  }

  get customMedsByMedKey () { return this.medsByMedKey }

  setupMeds (html) {
    // within the value part of the med order there are likely some inputs.
    // find them, map the id to the med order, and compose the template for the eventual med order
    // these inputs are of two types: text or checkbox
    // the checkbox is special as it indicates if this med order is to be included in the MAR
    // the text inputs (there can be more than one for a given field in the med order) are values for the user to insert
    const srch = (template, regex, idList) => {
      let matches = [...template.matchAll(regex)]
      matches.forEach( element => {
        const id = element[1]
        const toReplace = element[0]
        template = template.replace(toReplace, id)
        idList.push(id)
      })
      return template
    }
    const srchRadio = (template, nameList) => {
      let matches = [...template.matchAll(radioSetRegExp)]
      matches.forEach( element => {
        // const id = element[1]
        const name = element[2]
        // const value = element[3]
        // const toReplace = element[0]
        template = name
        // template = template.replace(toReplace, id)
        nameList.push(name)
      })
      return template
    }
    /**
     * The HTML is search via a regexp and that matches three fields: medKey, role, and value
     * composeMedOrderDef creates a structure
     * @param medKey
     * @param role | 'include', 'med', 'dose',
     * @param value | content which may include a form input
     * @param display | optional text to display replacing value
     * @returns {*}
     */
    const composeMedOrderDef = (medKey, role, value, display) => {
      let def = { medKey: medKey, type: 'med', role: role, value: value, display: display}
      // console.log('--- compose med order from def', def)
      // validate the role values are what is expected and can be processed later
      if (role !== 'include') { // the 'include' role is special. It determines if the med order is created
        let mappedRole = this.medRoleMap(role)
        if (!mappedRole) {
          // this is an assert that will be seen while developers are working on custom forms.
          const msg = 'Custom form. No mapped role for ' + role + ' with med key ' + medKey
          console.error(msg)
          throw new Error(msg)
        }
      }
      let template = value
      let idList = []
      let nameList = []
      if (role === 'include') {
        template = srch(template, checkBoxRegExp, idList)
        if (idList.length !== 1) {
          // this is an assert that will be seen while developers are working on custom forms.
          const msg = 'Custom form med order requires one checkbox input for "include" role. MedKey:' + medKey + ' -' + JSON.stringify(idList) + ' -' + template
          console.error(msg)
          throw new Error(msg)
        }
      } else {
        // look for text inputs. Replace each input def with just the id. Later this id will be replaced with the form value
        template = srch(template, textRegExp, idList)
        template = srchRadio(template, nameList)
      }
      def.template = template
      def.inputList = idList
      def.nameList = nameList
      def.isRadio = nameList.length > 0
      // console.log('----- med def', def)
      let medDefs = this.medsByMedKey[medKey] || {}
      if(!medDefs[role]) {
        medDefs[role] = [] // array of defs per role
      }
      medDefs[role].push(def)
      this.medsByMedKey[medKey] = medDefs
      // console.log('---- this.medsByMedKey', this.medsByMedKey)
      // in the end this method does not alter the original html
      return display ? display : value
    }
    return makeReSubstitutions(html, medRegExp, composeMedOrderDef )
  }
  updateAllMedOrders (formValues) {
    return Object.keys(this.medsByMedKey).reduce((result, medKey) => {
      const mo = this.updateMedOrder(medKey, formValues)
      if (mo) {
        result.push(mo)
      }
      return result
    }, [])
  }
  /**
   * Update the composed medOrder because it's content was changed by the user.
   * @param medKey the key for the med order from the custom form
   * @param formValues
   * @returns {{}}
   */
  updateMedOrder (medKey, formValues ) {
    // ToDo fix hard coded row index below
    let rowIndex = '0'
    // console.log('----- updateMedOrder', medKey)
    let include = true // initial assumption is the med order has no checkbox to indicate inclusion in the list of meds
    let name = StoreHelper.getSimSignOnName()
    let profession = StoreHelper.getSimSignOnProfession()
    let composedMedOrderForMar = {
      medicationOrdersTable_id: [this.pageKey, this.tableKey, rowIndex, this.elementKey, medKey].join('.'),
      med_timing: 'prn', // default is PRN
      medicationOrdersTable_name: name,
      medicationOrdersTable_profession: profession,
      medicationOrdersTable_day: /* to string */ '' + currentSimDayNumber(),
      medicationOrdersTable_time: currentSimTime(),
    }
    // Remember that some parts of the order (e.g. instructions) can contain one or more inputs.
    // All of these need to be fetched and inserted into a copy of the template to provide the complete order.
    // As well, we allow some parts to span multiple DOM elements, so we need to gather the composed works.
    let medOrderDef = this.medsByMedKey[medKey]
    let roles = Object.keys(medOrderDef)
    roles.forEach(role => {
      let mappedRole = this.medRoleMap(role)
      let defList = medOrderDef[role]
      if (role === 'include') {
        const theDef = defList[0]
        // this med order has a checkbox the user checks to include the medication
        // what is the current value of this checkbox? Only include med orders that are checked or have no checkbox
        include = formValues[theDef.inputList[0]]
        // console.log('looking for the include signal', include)
      } else {
        // the parts of the order may be spread over a set of elements
        defList.forEach( def => {
          // each def defines part of the content for the given role.
          let orderContent = def.template
          def.inputList.forEach(id => {
            let value = formValues[id]
            if (value) {
              orderContent = orderContent.replace(id, value)
              // console.log('------ replace id with value', id, value)
            }
          })
          def.nameList.forEach(name => {
            let value = formValues[name]
            if (value) {
              orderContent = value
              // console.log('------ place name with value', name, value)
            }
          })
          if (role === 'med') {
            composedMedOrderForMar.med_medication = { med: orderContent }
          } else {
            let content = composedMedOrderForMar[mappedRole]
            if (def.isRadio || mappedRole === 'med_timing' || mappedRole === 'med_route' ) {
              if (mappedRole === 'med_timing') {
                orderContent = orderContent.toLowerCase()
              }
              content = orderContent
            } else {
              content = (content ? content + ' ' : '')
              content = content + orderContent
            }
            composedMedOrderForMar[mappedRole] = content
          }
        })
      }
    })
    return include ? composedMedOrderForMar : undefined
  }
  medRoleMap (role) {
    // on the left are the field ids used in the custom forms.
    // on the right are the fields ids used in the EHR
    let cRoles = {
      med: 'med_medication.med',
      dose: 'med_dose',
      // type: 'med_timing',
      timing: 'med_timing', // PRN, STAT etc
      route: 'med_route', // oral
      // "med_route": "oral,inha,intraosseous,nasa,rect,tran,bucc,intraperitoneal,nebu,subc,vagi,epidural,intradermal,intrathecal,ocul,subl,topical,intra,intramuscular,impl,otic",
      reason: 'med_reason',
      status: 'med_status', //e.g sche
      sched: 'med_scheduled',
      instruct: 'med_instructions'
    }
    return cRoles[role]
  }

}

export const customFormMedOrderHelper = new CustomFormMedOrderHelper()
// export customFormMedOrderHelper
