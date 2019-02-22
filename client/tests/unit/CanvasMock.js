// https://stackoverflow.com/questions/4406864/html-canvas-unit-testing
import ContextMock from './ContextMock.js'

export default class {
  constructor(width, height) {
    this.mock = []
    this.width = width
    this.height = height
    this.context = new ContextMock(this.mock, this)
  }

  getContext(string) {
    this.mock.push('[getContext ' + string + ']')
    return this.context
  }
}
