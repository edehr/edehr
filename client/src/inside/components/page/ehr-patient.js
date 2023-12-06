import StoreHelper from '@/helpers/store-helper'
import EhrTypes from '@/ehr-definitions/ehr-types'
import { computeDateOfBirth } from '@/ehr-definitions/ehr-def-utils'
import { makeHumanTableCell } from '@/ehr-definitions/ehr-def-utils'

class EhrPatientC {
  patientData () {
    let data = StoreHelper.getMergedData()
    const demographics = this._demographics(data)
    const visitDetails = this._visitDetails(data)
    let dateStr = computeDateOfBirth(demographics.personAge, demographics.dateOfBirth)
    const result = {}
    result.allergies = this._allergies(data)
    result.careTeam = this._careTeam(data)
    result.codeStatus = visitDetails.codeStatus
    result.dateOfBirth = dateStr
    result.diagnosis = this._diagnosis(visitDetails)
    result.gender = demographics.gender
    result.mrn = demographics.mrn
    result.mrp = demographics.decisionMakerName? (demographics.decisionMakerName + ' (' + demographics.decisionMakerRelationship + ')') : ''
    result.mrpPhone = demographics.decisionMakerPhone
    result.personAge = demographics.personAge
    result.phn = demographics.phn
    result.risks = this._riskIndicators(data)
    result.location = this._location(visitDetails)
    result.patientName = this._lastFirstMiddle(demographics)
    result.weight = demographics.weight? (demographics.weight + 'kg') : ''
    return result
  }
  _allergies (data) {
    let results = ''
    let asStored = data.allergies || {}
    let pageData = JSON.parse(JSON.stringify(asStored))
    const tableData = pageData['allergyList'] || []
    const allergens = tableData.map( (row) => row.allergen)
    if (allergens.length===0) {
      const hasNoKnown = pageData['checkbox']
      results = hasNoKnown ? 'NKA' : ''
    } else {
      results = allergens.join(', ')
    }
    // old field that will be removed
    const content = pageData['text']
    if (content) {
      console.error('Coding error. The old allergy page content field has not yet been merged into the new table. ' + content)
    }
    return results
  }
  _demographics (data) {
    let asStored = data.demographics || {}
    return JSON.parse(JSON.stringify(asStored))
  }
  _careTeam (data) {
    let asStored = data.careTeam ? data.careTeam.teams : []
    return JSON.parse(JSON.stringify(asStored))
  }
  _location (visitDetails) {
    var place = ''
    var locations = visitDetails.table || []
    if (locations.length > 0) {
      var latest = locations[locations.length - 1]
      place = latest.location
    }
    return place
  }
  _riskIndicators (data) {
    /*
    Precautions
    "Airborne:=Airborne Precautions
    Contact:=Contact Precautions
    Droplet:=Droplet Precautions
    DC:=Droplet/Contact Precautions
    Routine:=Routine Precautions"

    Risks
    "AVB:=AVB (Aggressive Violent Behaviour
    ARO:=ARO (Antibiotic Resistant Organism)
    DNA:=DNA (Do Not Acknowledge)"

    we want the first word from the right hand side. That is why, below,  we use split on spaces and take first word.
     */
    function getRisks (pageData, pKey, tKey, elemKey) {
      const tableData = pageData[tKey] || []
      return tableData.map((row) => {
        let val = row[elemKey] || ''
        val = makeHumanTableCell(pKey, elemKey, EhrTypes.dataInputTypes.select, val)
        return val.split(' ')[0]
      })
    }
    const pKey = 'specialIndicators'
    const tKey1 = 'riskList'
    const elem1 = 'riskIndicator'
    const tKey2 = 'precautionList'
    const elem2 = 'precautionIndicator'
    let asStored = data[pKey] || {}
    let pageData = JSON.parse(JSON.stringify(asStored))
    const risks = getRisks(pageData, pKey, tKey1, elem1)
    const precautions = getRisks(pageData, pKey, tKey2, elem2)
    return [...risks, ...precautions].join(', ')
  }
  _diagnosis (visitDetails) {
    let diagnosis = visitDetails.diagnosis
    let tableData = visitDetails.diagnosisTable || []
    if (tableData.length > 0) {
      let latest = tableData[tableData.length - 1]
      diagnosis = latest.diagnosisRecord
    }
    return diagnosis
  }
  _lastFirstMiddle (d) {
    const fn = d.familyName ? d.familyName.toUpperCase() : ''
    const gn = d.givenName
    const mn = d.middleName
    let np = []
    fn ? np.push(fn) : ''
    gn ? np.push(gn) : ''
    mn ? np.push(mn) : ''
    // let n = ''
    // n += fn ? fn : ''
    // n += gn ? `, ${gn}` : ''
    // n += mn ? `, ${mn}` : ''
    // return n
    return np.join(', ')
  }
  _visitDetails (data) {
    let asStored = data.visit || {}
    return JSON.parse(JSON.stringify(asStored))
  }
}
const EhrPatient = new EhrPatientC()
export default EhrPatient
