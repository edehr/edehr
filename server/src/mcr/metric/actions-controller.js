import { Router } from 'express'
import { ACTION_EVENT, ACTION_EVENT_BUS } from '../../server/trace-actions'

export default class ActionsController {
  constructor () {
  }

  route () {
    const router = new Router()
    router.post('/action',(req, res) => {
      ACTION_EVENT_BUS.emit(ACTION_EVENT,req.body)
      return res.status(200).json({success: true})
    })
    return router
  }

}

