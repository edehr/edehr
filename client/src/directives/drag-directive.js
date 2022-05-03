const POINTER_START_EVENTS = ['mousedown', 'touchstart']
const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
const POINTER_END_EVENTS = ['mouseup', 'touchend']
const POINTER_LEAVE_EVENTS = ['mouseleave']

var draggedElem

var innerUtil = {
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

function getLoc (evt) {
  let src = evt
  if (evt.touches) {
    src = evt.touches[0]
  }
  const loc = {
    clientX: src.clientX,
    clientY: src.clientY
  }
  if (deets) console.log('getLoc', src.clientY, src.screenY)
  return loc
}

const deets = false

export default {
  inserted (el, binding, vnode) {
    if (!document) return
    function onPointerStart (evt) {
      if (deets) console.log('onPointerStart', el, evt, evt.touches)
      const { clientX, clientY } = getLoc(evt)
      innerUtil.addEventListeners(document, POINTER_LEAVE_EVENTS, onPointerLeave)
      innerUtil.addEventListeners(document.documentElement, POINTER_MOVE_EVENTS, onPointerMove)
      innerUtil.addEventListeners(document.documentElement, POINTER_END_EVENTS, onPointerEnd)
      el.lastCoords = el.firstCoords = {
        x: clientX,
        y: clientY
      }
      binding.value({
        el,
        first: true,
        clientX: clientX,
        clientY: clientY
      })
      draggedElem = el
    }
    function onPointerLeave (evt) {
      if (deets) console.log('onPointerLeave', el === draggedElem)
      if (el !== draggedElem) return
      onPointerEnd(evt)
    }

    function onPointerEnd (evt) {
      if (deets) console.log('onPointerEnd', el === draggedElem)
      if (el !== draggedElem) return
      const { clientX, clientY } = getLoc(evt)
      el.lastCoords = null
      binding.value({
        el,
        last: true,
        clientX: clientX,
        clientY: clientY
      })
      draggedElem = null
      innerUtil.removeEventListeners(document, POINTER_LEAVE_EVENTS)
      innerUtil.removeEventListeners(document.documentElement, POINTER_END_EVENTS)
      innerUtil.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS)
    }
    function onPointerMove (evt) {
      if (deets) console.log('onPointerMove', evt)
      if (el !== draggedElem) return
      const { clientX, clientY } = getLoc(evt)
      if (clientY < 0) {
        onPointerEnd(evt)
      }
      if (el.lastCoords) {
        var deltaX = clientX - el.lastCoords.x
        var deltaY = clientY - el.lastCoords.y
        var offsetX = clientX - el.firstCoords.x
        var offsetY = clientY - el.firstCoords.y
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
          x: clientX,
          y: clientY
        }
      }
    }
    innerUtil.addEventListeners(el, POINTER_START_EVENTS, onPointerStart)
  },

  unbind (el) {
    innerUtil.removeEventListeners(el, POINTER_START_EVENTS)
    innerUtil.removeEventListeners(document.documentElement, POINTER_END_EVENTS)
    innerUtil.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS)
  }
}
