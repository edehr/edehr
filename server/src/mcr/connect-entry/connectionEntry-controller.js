import BaseController from '../common/base'
import { fail, ok } from '../common/utils'
import ConnectionEntry from './connectionEntry'
import { ParameterError } from '../common/errors'
import { Router } from 'express'
export default class ConnectionEntryController extends BaseController {
  constructor (config) {
    super(ConnectionEntry)
  }
  async activeLists (year, month) {
    let active = await this.activeSet(year, month)
    let inactive = await this.inactiveSet(year, month)
    inactive = inactive.filter(entry => !active.includes(entry))
    return {
      active: active,
      inactive: inactive
    }
  }
  async activeCount (year, month) {
    let active = await this.activeSet(year, month)
    let inactive = await this.inactiveSet(year, month)
    inactive = inactive.filter(entry => !active.includes(entry))
    return {
      active: active.length,
      inactive: inactive.length
    }
  }
  async activeSet (year, month) {
    return this.userSet(year, month, true)
  }
  async inactiveSet (year, month) {
    return this.userSet(year, month, false)
  }
  async userSet (year, month, active = true) {
    if (!year || !(typeof year === 'number') || year < 2023) {
      throw new ParameterError('Query for active count requires a year >= 2023')
    }
    if (!month || !(typeof month === 'number') || month < 0 || month > 12) {
      throw new ParameterError('Query for active count requires a month in the range of 1 to 12')
    }
    // month = 1 + month
    let list = await ConnectionEntry.find({
      year: {$eq: year},
      month: {$eq: month},
      isStudent: {$eq: true},
      isNewEntry: {$eq: active}
    }, { user: 1, visit: 1 })
    list = list.map((entry) => entry.user.toString())
    list = [...new Set(list)]
    return list
  }
  route () {
    const router = new Router()
    router.get('/:year/:month', async (req, res) => {
      console.log('params', req.params)
      const year = Number.parseInt(req.params.year)
      const month = Number.parseInt(req.params.month)
      this.activeCount(year, month)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    router.get('/lists/:year/:month', async (req, res) => {
      console.log('params', req.params)
      const year = Number.parseInt(req.params.year)
      const month = Number.parseInt(req.params.month)
      this.activeLists(year, month)
        .then(ok(res))
        .then(null, fail(req, res))
    })
    return router
  }
}
