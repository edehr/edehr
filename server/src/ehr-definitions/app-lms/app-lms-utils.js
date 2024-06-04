
export function generateAccessCode () {
  //Credit to https://stackoverflow.com/a/21816636/908570
  // Will always create a number of 6 digits and it ensures the first digit will never be 0. The code in your question will create a number of less than 6 digits.
  // coerce as string
  return '' + Math.floor(100000 + Math.random() * 900000)
}

/**
 *
 Thanks to:
 https://www.npmjs.com/package/email-validator  (no license 6 yrs last update)
 Who extends thanks to
 http://fightingforalostcause.net/misc/2006/compare-email-regex.php
 http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
 http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
 *
 * @param email
 * @returns {boolean}
 */
export function emailValidate (email)
{
  if (!email)
    return false
  if(email.length>254)
    return false
  const eTester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/
  let valid = eTester.test(email)
  if(!valid)
    return false
  // Further checking of some things regex can't handle
  let parts = email.split('@')
  if(parts[0].length>64)
    return false
  let domainParts = parts[1].split('.')
  if(domainParts.some(function (part) { return part.length>63 }))
    return false
  return true
}

export function codeValidate ( code ) {
  let valid = false
  const cTester = /\d{6}/
  if (!!code && code.length === 6) {
    valid = cTester.test(code)
  }
  return valid
}

function linky (text) {
  let linkedText = text
  if (text.includes('mailto')) {
    const re = /mailto:(\S+@\S+)/g
    linkedText = linkedText.replace(re, '<a href="$&" target="_blank">$1</a>')
  }
  const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[\/[a-zA-Z0-9()@:%_\-\+.~#?&=]*]*/g
  linkedText = linkedText.replace(re,'<a href="$&" target="_blank">$&</a>')
  return linkedText
}

function basicMarkdown ( text ) {
  let linkedText = text
  if (text.startsWith('####')) {
    linkedText = '<h4>' + linkedText.replace('####','') + '</h4>'
  } else if (text.startsWith('###')) {
    linkedText = '<h3>' + linkedText.replace('###','') + '</h3>'
  } else if (text.startsWith('##')) {
    linkedText = '<h2>' + linkedText.replace('##','') + '</h2>'
  } else if (text.startsWith('#')) {
    linkedText = '<h1>' + linkedText.replace('#','') + '</h1>'
  }
  return linkedText
}
export function textToHtml (value, noAutoLink=false) {
  let sentences = value.split('\n')
  let html = []
  let seenOne = false
  html.push('<p>')
  sentences.forEach(s => {
    if (seenOne) html.push('</p><p>')
    s = basicMarkdown(s)
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
