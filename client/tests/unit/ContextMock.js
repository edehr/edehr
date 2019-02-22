//https://stackoverflow.com/questions/4406864/html-canvas-unit-testing

export default class {
  constructor(mock, canvas) {
    this.mock = mock
    this.canvas = canvas
  }

  beginPath() {
    this.mock.push('[beginPath]')
  }
  save() {
    this.mock.push('[save]')
  }
  restore() {
    this.mock.push('[restore]')
  }
  fill() {
    this.mock.push('[fill]')
  }

  arc(x, y, radius, startAngle, endAngle) {
    this.mock.push(`[arc, ${x}, ${y}, ${radius}, ${startAngle}, ${endAngle}`)
  }
  moveTo(x, y) {
    this.mock.push('[moveTo,' + x + ', ' + y + ']')
  }

  lineTo(x, y) {
    this.mock.push('[lineTo, ' + x + ', ' + y + ']')
  }

  clearRect(x, y, w, h) {
    this.mock.push(`[clearRect, ${x}, ${y}, ${w}, ${h}] `)
  }

  stroke() {
    this.mock.push('[stroke]')
  }
  translate(x, y) {
    this.mock.push(`[translate, ${x}, ${y}] `)
  }
  rotate(angle) {
    this.mock.push(`[rotate, ${angle}] `)
  }
  fillText(label, labelOffset, width) {
    this.mock.push(`[fillText, ${label}, ${labelOffset}, ${width}] `)
  }
  measureText(text) {
    this.mock.push(`[measureText, ${text}]`)
    let w = text.length * 10
    return { width: w }
  }
}
