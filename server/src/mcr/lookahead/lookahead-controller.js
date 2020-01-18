import {ok, fail} from '../common/utils'
import { Router } from 'express'
import fs from 'fs'
import path from 'path'

export default class LookaheadController {

  constructor () {
    const fName = path.join(__dirname, 'medicationsList.json')
    const content = fs.readFileSync(fName, 'utf-8')
    this.medications = JSON.parse(content)
    this.limitCnt = 100
  }

  validateTerm (term) {
    if(!term) {
      return 'Need to provide a search term for the medication lookup'
    }
    if(typeof term !== 'string') {
      return 'Search term for the medication lookup need to be given a string'
    }
    if(term.length < 3) {
      return 'Search term for the medication lookup needs to be at least 3 characters long'
    }
    return undefined
  }

  lookupMeds (term) {
    return new Promise( (resolve, reject) => {
      let err = this.validateTerm(term)
      if(err) {
        return reject(err)
      }
      let cnt = 0;
      let results = []
      this.medications.forEach( med => {
        if(med.name.includes(term)) {
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
