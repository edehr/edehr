
const debug = false

function linky (text) {
  let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[\/[a-zA-Z0-9()@:%_\-\+.~#?&=]*]*/g
  let linkedText = text.replace(re,'<a href="$&" target="_blank">$&</a>')
  if(debug) console.log('T2H linky', text, linkedText)
  return linkedText
}

function worker (el, binding, source) {
  if (debug) console.log('T2H directive source' , source, binding)
  if (binding.value) {
    if (debug) console.log('T2H directive binding', binding.value)
    let sentences = binding.value.split('\n')
    let html = []
    let seenOne = false
    html.push('<p>')
    sentences.forEach(s => {
      if (seenOne) html.push('</p><p>')
      html.push(linky(s))
      seenOne = true
    })
    html.push('</p>')
    el.innerHTML = html.join('\n')
    if (debug) console.log('T2H el.innerHTML', el.innerHTML)
  }
}

export default {
  bind (el, binding) {
    worker(el,binding, 'bind')
  },
  update (el, binding) {
    worker(el,binding, 'update')
  }

}