/*
 * Vue directive to validate a form field.
 *
 * Usage:
  1. Include this directive you your Vue main.js.
    import Vue from 'vue'
    import validate from './directives/validate'
    Vue.directive('validate', validate)
  2. In a component, add directive to any input field. For example
    input(v-model="name", v-validate="nameValidate")
  3. In the component, provide the validation computed property
    computed: {
    nameValidate () {
      return this.name.trim() ? undefined : 'Name is required'
    },
 *
 * The validator needs to return undefined when the field is valid and a text message when invalid.
 *
 * When the user enters the field the onFocus event will fire.  Now as the user makes updates the validation will happen. Validation also happens when the user leaves the field with the onblur event.  Validtion checks to see if the field is valid which is indicated if the text message is empty.  If a validation message exists then it will be displayed in a div element appended to the parent of the field element.  When the user enters valid content the form field becomes valid this div will be removed.
 *
 * Note that update will run whenever the nameValidate property changes. This directive stores the text message, if present, in the DOM dataset ready to be used when the _onBlur event is fired.

 * For more about Vue custom directives see https://vuejs.org/v2/guide/custom-directive.html
 */
const INVALID_CLASS = 'is-invalid'

export default {
  bind (el, binding) {
    el.addEventListener('blur', _onBlur)
    el.addEventListener('focus', _onFocus)
    // clear on bind because the element may be reused from a previous invocation of a dialog
    _clear (el)
    el.dataset.focus = false
  },
  update (el, binding) {
    _onUpdate(el, binding)
  },
  unbind (el) {
    el.removeEventListener('blur', _onBlur)
    el.removeEventListener('focus', _onFocus)
  }
}

function _onUpdate (el, binding) {
  delete el.dataset.text
  _clear(el)
  if ( binding.value ) {
    el.dataset.text = binding.value
    if (el.dataset.focus ==='true') {
      _check(el)
    }
  }
}

function _onFocus (event){
  event.target.dataset.focus = true
}

function _onBlur (event){
  const el = event.target
  el.dataset.focus = false
  _check(el)
}

function _clear (el) {
  el.classList.remove(INVALID_CLASS)
  _removeChild(el)
}

function _check(el) {
  const invalid = !!el.dataset.text
  _clear(el)
  if (invalid) {
    el.classList.add(INVALID_CLASS)
    _addChild(el)
  }
}
function _addChild (el){
  let after = document.createElement('div')
  after.style.color = 'red'
  after.innerHTML = el.dataset.text
  after.dataset.velem = true
  el.parentElement.appendChild(after)
}

function _removeChild (el) {
  if (el.parentElement) {
    let children = el.parentElement.childNodes
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      if (child.dataset.velem) {
        el.parentElement.removeChild(child)
        break
      }
    }
  }
}