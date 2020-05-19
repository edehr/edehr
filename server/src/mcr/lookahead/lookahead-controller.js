import {ok, fail} from '../common/utils'
import { Router } from 'express'
import fs from 'fs'
import path from 'path'
import { Text } from '../../config/text'

export default class LookaheadController {

  constructor () {
    const fName = path.join(__dirname, 'medicationsList.json')
    const content = fs.readFileSync(fName, 'utf-8')
    this.medications = JSON.parse(content)
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

  lookupMeds (term) {
    return new Promise( (resolve, reject) => {
      let err = this.validateTerm(term)
      if(err) {
        return reject(err)
      }
      const upperCase = term.toUpperCase()
      let cnt = 0
      let results = []
      this.medications.forEach( med => {
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
        .then(null, fail(res))
    })
    return router
  }
}
