
const debug = false

export default {
  bind (el, binding) {
    function linky(text) {
      let re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[\/[a-zA-Z0-9()@:%_\-\+.~#?&=]*]*/g
      let linkedText = text.replace(re,'<a href="$&" target="_blank">$&</a>')
      if(debug) console.log('rich text linky', text, linkedText)
      return linkedText
    }
    if(debug) console.log('rich text directive binding', binding.value)
    let sentences = binding.value.split('\n')
    let html = []
    let seenOne = false
    html.push('<p>')
    sentences.forEach( s => {
      if (seenOne) html.push('<br/>')
      html.push(linky(s))
      seenOne = true
    })
    html.push('</p>')
    el.innerHTML = html.join('\n')
    if(debug) console.log('rich text el.innerHTML', el.innerHTML)
  }

}