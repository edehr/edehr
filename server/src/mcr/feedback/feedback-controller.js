import BaseController from '../common/base'
import Feedback from '../feedback/feedback'

export default class FeedbackController extends BaseController {
  constructor (config) {
    super(Feedback, '_id')
    this.config = config
  }

  route () {
    const router = super.route()
    return router
  }
}
