import {ok, fail} from '../common/utils'
import { Router } from 'express'
import { getNextSequence } from '../common/counter-controller'

const TEST_LIBRARY = {}
const DATA = require('./testLibrary.json')
DATA.forEach(test => {
  TEST_LIBRARY[test.test.toUpperCase()] = test
})

let TEST_KEYS = Object.keys(TEST_LIBRARY)

export default class AccessioningController {

  constructor () {
    // this limit matches the limit in the client VueSimpleSuggest default for maxSuggestions
    this.limitCnt = 10
  }

  searchTerm (term) {
    return new Promise( (resolve, reject) => {
      let results = []
      if(!term) {
        results = []
      } else {
        const upperCase = term.toUpperCase()
        let cnt = 0
        TEST_KEYS.forEach(key => {
          if (key.includes(upperCase)) {
            cnt++
            if (cnt <= this.limitCnt) {
              results.push(TEST_LIBRARY[key])
            }
          }
        })
      }
      results.sort((a,b) => a.test.localeCompare(b.test))
      resolve(results)
    })
  }

  generateAccessioningNumber (req) {
    const toolConsumer = req.authPayload?.toolConsumerId
    if(!toolConsumer) {
      let msg = 'Request error. Must be authenticated to get accession number.'
      console.error(msg)
      throw new Error(msg)
    }
    // console.log('generateAccessioningNumber get next in sequence')
    // start at 110,000,000 just so the first digits are not 0 for aesthetic reasons
    return getNextSequence(toolConsumer, 'Accession', 9, 110000000)
  }
  publicRoute () {
    const router = new Router()
    router.get('/search/:term?', (req, res) => {
      this
        .searchTerm(req.params.term)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }

  route () {
    const router = new Router()
    router.get('/generate-accession/', (req, res) => {
      this
        .generateAccessioningNumber(req)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
