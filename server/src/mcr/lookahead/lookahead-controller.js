import {ok, fail} from '../common/utils'
import { Router } from 'express'
import { Text } from '../../config/text'
import { ParameterError } from '../common/errors'

const CommonCanadianMedications = require('../../resources/canMedsCommon.json')
const MEDICATIONS = require('../../resources/medicationsList.json')
const MEDICATIONS_VA = require('../../resources/vaMedications.json')
const MEDICATIONS_CA = require('../../resources/canMedications.json')
const Therapeutics_CA = require('../../resources/canTherapeutics.json')
const Therapeutics_VA = require('../../resources/vaTherapeutics.json')

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

const CaCommonList = CommonCanadianMedications.medicationList
const CaCommonSearch = getSearchList(CaCommonList)
const CaMedicationList = MEDICATIONS_CA.medicationList
const CaGovernmentList = getSearchList(CaMedicationList)
// Combine the common with government placing common first
const CaSearchList = Object.assign(CaCommonSearch, CaGovernmentList)
// console.log('CaCommonSearch',CaCommonSearch)
const VaMedicationList = MEDICATIONS_VA.medicationList
const VaSearchList = getSearchList(VaMedicationList)

let debug = false

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
      if (debug) console.log('lookupMedsv2', term, results.length)
      resolve(results)
    })
  }

  lookupMedsV3 (src, term) {
    if (debug) console.log('--------- lookupMedsV3', src, term)
    let searchList
    if (src === 'ca') {
      searchList = CaSearchList
    } else if (src === 'va') {
      searchList = VaSearchList
    } else {
      throw new ParameterError('Medication lookahead requires src of "ca" or "va"')
    }
    const drugList = Object.keys(searchList)
    return new Promise( (resolve, reject) => {
      let results = []
      if(!term || typeof term !== 'string' || term.length <= 1) {
        results = []
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
      // do not sort here. First because it slows the response and second because we want the order
      // in the lists
      // results.sort( (a,b) => a[MED_KEY].localeCompare(b[MED_KEY]))
      if (debug) console.log('lookupMedsV3', term, results.length)
      resolve(results)
    })
  }

  lookupTherapeutics (src, code) {
    let searchList
    if (src === 'ca') {
      searchList = Therapeutics_CA
    }
    else if (src === 'va') {
      searchList = Therapeutics_VA
    } else {
      throw new ParameterError('Therapeutics lookahead requires src of "ca" or "va"')
    }
    return new Promise( (resolve) => {
      let result = {}
      if(!code || typeof code !== 'string') {
        console.error('--------- lookupTherapeutics no code so return empty')
      } else {
        const searchTerm = code.toUpperCase()
        result = searchList[searchTerm]
      }
      if (debug) console.log('lookupTherapeutics', src, code, result)
      resolve(result)
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
      this
        .lookupMedsV3(req.query.src, req.query.term)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/therapeutics/', (req, res) => {
      // sample
      // http://localhost:28000/api/lookahead/therapeutics?src=ca&code=A11AA03
      this
        .lookupTherapeutics(req.query.src, req.query.code)
        .then(ok(res))
        .then(null, fail(req, res))
    })

    return router
  }
}
