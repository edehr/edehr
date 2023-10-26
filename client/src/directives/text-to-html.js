
const debug = false

function linky (text) {
  if (text.includes('mailto')) {
    const re = /mailto:(\S+@\S+)/g
    return text.replace(re, '<a href="$&" target="_blank">$1</a>')
  }
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[\/[a-zA-Z0-9()@:%_\-\+.~#?&=]*]*/g
  const linkedText = text.replace(re,'<a href="$&" target="_blank">$&</a>')
  if(debug) console.log('T2H linky', text, linkedText)
  return linkedText
}

function worker (el, binding, source) {
  if (debug) console.log('T2H directive source' , source, binding)
  if (binding.value) {
    if (debug) console.log('T2H directive binding', binding.value)
    el.innerHTML = textToHtml(binding.value, binding.modifiers.noAutoLink)
    if (debug) console.log('T2H el.innerHTML', el.innerHTML)
  } else {
    el.innerHTML = ''
  }
}

export function textToHtml (value, noAutoLink=false) {
  let sentences = value.split('\n')
  let html = []
  let seenOne = false
  html.push('<p>')
  sentences.forEach(s => {
    if (seenOne) html.push('</p><p>')
    if (noAutoLink) {
      html.push(s)
    } else {
      html.push(linky(s))
    }
    seenOne = true
  })
  html.push('</p>')
  return html.join('\n')
}


export default {
  bind (el, binding) {
    worker(el,binding, 'bind')
  },
  update (el, binding) {
    worker(el,binding, 'update')
  }

}
