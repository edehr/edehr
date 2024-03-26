import {ok, fail} from '../common/utils'
import { Router } from 'express'
import { Text } from '../../config/text'
import { ParameterError } from '../common/errors'
const MEDICATIONS = require('../../resources/medicationsList.json')

// Support for new medication databases and /medicationsV3/
const MEDICATIONS_VA = require('../../resources/vaMedications.json')
const MEDICATIONS_CA = require('../../resources/canMedications.json')
const MED_KEY = 'med'
function getSearchList (medicationList) {
  const T_KEY = 'thD'
  const results = {}
  medicationList.forEach(med => {
    let key = ''
    key += med[T_KEY] ? med[T_KEY].toLowerCase() : ''
    key += med[MED_KEY] ? med[MED_KEY].toLowerCase() : ''
    results[key] = med
  })
  return results
}
const CaMedicationList = MEDICATIONS_CA.medicationList
const CaSearchList = getSearchList(CaMedicationList)
const VaMedicationList = MEDICATIONS_VA.medicationList
const VaSearchList = getSearchList(VaMedicationList)

export default class LookaheadController {

  constructor () {
    this.limitCnt = 200
  }

  validateTerm (term, minLen = 3) {
    if(!term) {
      return Text.SEARCH_TERM_REQUIRED
    }
    if(typeof term !== 'string') {
      return Text.SEARCH_TERM_TYPE_ERROR
    }
    if(term.length < minLen) {
      return Text.SEARCH_TERM_MIN_CHAR_LENGTH
    }
    return undefined
  }

  lookupMedsv2 (term) {
    return new Promise( (resolve, reject) => {
      let results = []
      if(!term) {
        results = MEDICATIONS.splice(0, this.limitCnt)
      } else {
        const upperCase = term.toUpperCase()
        let cnt = 0
        MEDICATIONS.forEach(med => {
          if (med.medication.includes(upperCase)) {
            cnt++
            if (cnt < this.limitCnt) {
              results.push(med)
            }
          }
        })
      }
      console.log('lookupMedsv2', term, results.length)
      resolve(results)
    })
  }

  lookupMedsV3 (src, term) {
    console.log('--------- lookupMedsV3', src, term)
    let searchList, medList
    if (src === 'ca') {
      searchList = CaSearchList
      medList = CaMedicationList
    }
    else if (src === 'va') {
      searchList = VaSearchList
      medList = VaMedicationList
    } else {
      throw new ParameterError('Medication lookahead requires src of "ca" or "va"')
    }
    const drugList = Object.keys(searchList)
    return new Promise( (resolve, reject) => {
      let results = []
      if(!term || typeof term !== 'string' || term.length <= 1) {
        console.log('--------- lookupMedsV3 no term so return first', this.limitCnt, ' records')
        results = [] // medList.splice(0, 50)
      } else {
        const searchTerm = term.toLowerCase()
        let cnt = 0
        drugList.forEach(med => {
          if(med.includes(searchTerm)) {
            cnt++
            if (cnt < this.limitCnt) {
              results.push(searchList[med])
            }
          }
        })
      }
      results.sort( (a,b) => a[MED_KEY].localeCompare(b[MED_KEY]))
      console.log('lookupMedsV3', term, results.length)
      resolve(results)
    })
  }

  lookupMeds (term) {
    return new Promise( (resolve, reject) => {
      let err = this.validateTerm(term)
      if(err) {
        return reject(err)
      }
      const upperCase = term.toUpperCase()
      let cnt = 0
      let results = []
      MEDICATIONS.forEach( med => {
        if(med.medication.includes(upperCase)) {
          cnt++
          if (cnt < this.limitCnt) {
            results.push(med)
          }
        }
      })
      const response = {count: cnt, medications: results}
      resolve(response)
    })
  }

  route () {
    const router = new Router()
    router.get('/medications/:term', (req, res) => {
      this
        .lookupMeds(req.params.term)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/medicationsv2/:term?', (req, res) => {
      this
        .lookupMedsv2(req.params.term)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/medicationsV3/', (req, res) => {
      console.log('---- ', req.query)
      this
        .lookupMedsV3(req.query.src, req.query.term)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
