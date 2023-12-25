import store from '@/store'

export function t18GetLanguage () { return store.getters['ehrText/ehrLanguage']}
export async function t18SetFrench () {
  await store.dispatch('ehrText/setEhrLanguageFrench')
}
export async function t18SetEnglish () {
  await store.dispatch('ehrText/setEhrLanguageEnglish')
}

export function t18EhrText () {
  return store.getters['ehrText/ehrText']
}
export function t18EhrFunctions () {
  return store.getters['ehrText/ehrTextFn']
}
export function t18ElementLabel ( elementDef ) {
  let val
  const key = elementDef.fqn
  let def = store.getters['ehrText/ehrLabels']
  val = def[key]
  return val
}
export function t18SelectOption ( elementDef, option ) {
  let val
  const key = elementDef.fqn + '.' + option.key
  let def = store.getters['ehrText/ehrOptionsSelect']
  val = def[key]
  return val
}
export function t18ChecksetOption ( elementDef, option ) {
  let val
  // NOTE that checksets "key" is in the "prop" field
  const key = elementDef.fqn + '.' + option.prop
  let def = store.getters['ehrText/ehrOptionsCheckset']
  val = def[key]
  return val
}

export function t18TableLabel ( elementDef ) {
  let val
  const key = elementDef.fqn
  let def = store.getters['ehrText/ehrTableLabel']
  val = def[key]
  return val
}

export function t18HelperText ( elementDef ) {
  let val
  const key = elementDef.fqn
  let def = store.getters['ehrText/ehrHelperText']
  val = def[key]
  return val
}


const _prepareMultilineHypertext = (inputText) => {
  let html = []
  if (inputText) {
    let parts = inputText.split(/-[lL][nN]-/)
    parts.forEach(p => {
      html.push('<p>' + p + '</p>')
    })
  }
  return html.join('\n')
}

export function t18HelperHtmlText ( elementDef ) {
  let val
  const key = elementDef.fqn
  let def = store.getters['ehrText/ehrHelperText']
  val = def[key]
  return val ? _prepareMultilineHypertext(val) : val
}

export function t18TableAddButtonLabel ( elementDef ) {
  let val
  const key = elementDef.fqn
  let def = store.getters['ehrText/ehrAddButton']
  val = def[key]
  return val
}


