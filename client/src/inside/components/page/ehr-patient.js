import StoreHelper from '@/helpers/store-helper'

class EhrPatientC {
  patientData () {
    let data = StoreHelper.getMergedData()
    const demographics = this._demographics(data)
    const visitDetails = this._visitDetails(data)
    const result = {}
    result.allergies = this._allergies(data)
    result.codeStatus = demographics.codeStatus
    result.dateOfBirth = demographics.dateOfBirth
    result.diagnosis = visitDetails.diagnosis
    result.gender = demographics.gender
    result.mrn = demographics.mrn
    result.mrp = demographics.decisionMakerName + ' (' + demographics.decisionMakerRelationship + ')'
    result.mrpPhone = demographics.decisionMakerPhone
    result.personAge = demographics.personAge
    result.phn = demographics.phn
    result.location = this._location(visitDetails)
    result.patientName = this._lastFirstMiddle(demographics)
    result.weight = demographics.weight + 'kg'
    return result
  }
  _allergies (data) {
    let asStored = data.allergies || {}
    let pageData = JSON.parse(JSON.stringify(asStored))
    const keyToCheckbox = 'checkbox'
    const keyToAllergyList = 'text'
    return (pageData[keyToCheckbox]) ? 'None' : pageData[keyToAllergyList]
  }
  _demographics (data) {
    let asStored = data.demographics || {}
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
  _lastFirstMiddle (d) {
    const fn = d.familyName
    const gn = d.givenName
    const mn = d.middleName
    let n = fn ? fn : '-'
    n += gn ? `, ${gn}` : ''
    n += mn ? `, ${mn}` : ''
    return n
  }
  _visitDetails (data) {
    let asStored = data.visit || {}
    return JSON.parse(JSON.stringify(asStored))
  }
}
const EhrPatient = new EhrPatientC()
export default EhrPatient