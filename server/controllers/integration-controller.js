import BaseController from './base'
import Integration from '../models/integration'

export default class IntegrationController extends BaseController {
  constructor () {
    super(Integration, '_id')
  }
}
