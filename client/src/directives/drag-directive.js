const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']
const POINTER_LEAVE_EVENTS = ['mouseleave']

var draggedElem

var u = {
  addEventListeners (el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler)
    }
  },

  removeEventListeners (el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler)
    }
  }
}

export default {
  inserted (el, binding, vnode) {
    if (!document) return
    function onPointerStart (evt) {
      evt.preventDefault()
      u.addEventListeners(document, POINTER_LEAVE_EVENTS, onPointerLeave)
      u.addEventListeners(document.documentElement, POINTER_MOVE_EVENTS, onPointerMove)
      u.addEventListeners(document.documentElement, POINTER_END_EVENTS, onPointerEnd)
      // console.log('onPointerStart')
      el.lastCoords = el.firstCoords = {
        x: evt.clientX,
        y: evt.clientY
      }
      binding.value({
        el,
        first: true,
        clientX: evt.clientX,
        clientY: evt.clientY
      })
      draggedElem = el
    }
    function onPointerLeave (evt) {
      // console.log('onPointerLeave', el !== draggedElem)
      if (el !== draggedElem) return
      evt.preventDefault()
      // console.log('mouse leave')
      onPointerEnd(evt)
    }

    function onPointerEnd (evt) {
      // console.log('onPointerEnd', el !== draggedElem)
      if (el !== draggedElem) return
      evt.preventDefault()
      el.lastCoords = null
      binding.value({
        el,
        last: true,
        clientX: evt.clientX,
        clientY: evt.clientY
      })
      draggedElem = null
      u.removeEventListeners(document, POINTER_LEAVE_EVENTS)
      u.removeEventListeners(document.documentElement, POINTER_END_EVENTS)
      u.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS)
    }
    function onPointerMove (evt) {
      console.log('onPointerMove', el !== draggedElem)
      if (el !== draggedElem) return
      evt.preventDefault()
      if (el.lastCoords) {
        var deltaX = evt.clientX - el.lastCoords.x
        var deltaY = evt.clientY - el.lastCoords.y
        var offsetX = evt.clientX - el.firstCoords.x
        var offsetY = evt.clientY - el.firstCoords.y
        var clientX = evt.clientX
        var clientY = evt.clientY

        binding.value({
          el,
          deltaX,
          deltaY,
          offsetX,
          offsetY,
          clientX,
          clientY
        })
        el.lastCoords = {
          x: evt.clientX,
          y: evt.clientY
        }
      }
    }
    u.addEventListeners(el, POINTER_START_EVENTS, onPointerStart)
  },

  unbind (el) {
    u.removeEventListeners(el, POINTER_START_EVENTS)
    u.removeEventListeners(document.documentElement, POINTER_END_EVENTS)
    u.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS)
  }
}
