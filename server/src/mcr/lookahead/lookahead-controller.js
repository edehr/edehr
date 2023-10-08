import {ok, fail} from '../common/utils'
import { Router } from 'express'
import { Text } from '../../config/text'
const MEDICATIONS = require('../../resources/medicationsList.json')

export default class LookaheadController {

  constructor () {
    this.limitCnt = 100
  }

  validateTerm (term) {
    if(!term) {
      return Text.SEARCH_TERM_REQUIRED
    }
    if(typeof term !== 'string') {
      return Text.SEARCH_TERM_TYPE_ERROR
    }
    if(term.length < 3) {
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
      // console.log('lookupMedsv2', term, results.length)
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
    return router
  }
}
