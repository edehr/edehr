/* **********************
  RESIZE DIRECTIVE

  USAGE

 */

/* ***********
    UTILITIES
 */

var medUtil = {
  addEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.addEventListener(events[i], handler)
    }
  },

  removeEventListeners(el, events, handler) {
    for (var i = 0, len = events.length; i < len; i++) {
      el.removeEventListener(events[i], handler)
    }
  },
  debugLevelsAll: ['fine', 'listeners', 'finest'],
  debugLevelsMajor: ['fine'],
  debugLevelsNone: [],
  debug(level, msg) {
    var levels
    levels = this.debugLevelsNone
    // levels = this.debugLevelsMajor
    // levels = this.debugLevelsAll
    if (levels.includes(level)) {
      console.log(msg)
    }
  }
}

const MOUSE_ENTER = ['mouseenter']

export default {
  inserted(container, binding, vnode) {
    var mousedElem
    var delta // the thickness of the hovered border area
    var resizeDirection = null // string containing n, e, s, w or combos
    var overContainer = false // true when mouse is inside container
    var resizingNow = false // true when mouse is down and resizing is happening
    if (!document) {
      console.log('no root document for directive so return and do nothing')
      return
    }
    delta = window.getComputedStyle(container)['border-right-width'].slice(0, -2) || 10
    medUtil.addEventListeners(container, MOUSE_ENTER, mouseEnterBorder)

    function mouseEnterBorder(evt) {
      evt.preventDefault()
      if (evt.target === evt.currentTarget) {
        mousedElem = container
        resizeDirection = null
        overContainer = false
        medUtil.debug('fine', 'ENTER BORDER')
        // let the listeners handle the over border state...
        addOverBorderListener(mousedElem)
      }
    }

    function mouseLeaveBorder(evt) {
      evt.preventDefault()
      medUtil.debug('fine', 'LEAVE BORDER')
      overContainer = false
      resizeDirection = null
      removeOverBorderListener(mousedElem)
      removeMouseDownListeners()
    }

    function mouseMoveOnBorder(evt) {
      var currentDirection = overBorderCalc(evt)
      if (currentDirection) {
        // the mouse is on top of the border
        if (!resizeDirection) {
          // the mouse has just moved on top of the border ...
          if (overContainer) {
            // ... from inside the container
            medUtil.debug('fine', 'REENTER BORDER ' + currentDirection)
            addOverBorderListener(mousedElem)
          } else {
            // ... else from outside the container
            medUtil.debug('fine', 'ENTER DIRECTION ' + currentDirection)
          }
          // the mouse just moved ontop of the border:
          resizeDirection = currentDirection
          setContainerCursor(container, currentDirection)
          addMouseDownListeners()
        } else if (!resizingNow && resizeDirection !== currentDirection) {
          // over the border yet mouse moved from one edge to a corner or another edge
          medUtil.debug('fine', 'CHANGE DIRECTION ' + currentDirection)
          resizeDirection = currentDirection
          setContainerCursor(container, currentDirection)
        }
      } else {
        // else not on top of the border
        if (resizeDirection) {
          // the mouse is now over the inside of the container
          medUtil.debug('fine', 'CENTER LEAVE BORDER ')
          resizeDirection = null
          overContainer = true
          setContainerCursor(container, null)
          removeOverBorderListener(mousedElem)
          removeMouseDownListeners()
        }
      }
    }

    /* ***********
        RESIZING START
     */
    function mouseDownOnBorder(evt) {
      evt.preventDefault()
      medUtil.debug('fine', 'MOUSE DOWN')
      resizingNow = true
      addPointerListeners()
      removeMouseDownListeners()
      removeOverBorderListener(mousedElem)
      container.lastCoords = container.firstCoords = {
        x: evt.clientX,
        y: evt.clientY
      }
      binding.value({
        container,
        start: true,
        resizeDirection: resizeDirection
      })
    }

    /* ***********
        RESIZING MOVE
     */
    function mouseMove(evt) {
      evt.preventDefault()
      medUtil.debug('finest', 'mouse move while down')
      var deltaX = evt.clientX - container.lastCoords.x
      var deltaY = evt.clientY - container.lastCoords.y
      binding.value({
        container,
        deltaX,
        deltaY
      })
      container.lastCoords = {
        x: evt.clientX,
        y: evt.clientY
      }
    }

    /* ***********
        RESIZING END
     */
    function mouseUp(evt) {
      evt.preventDefault()
      medUtil.debug('fine', 'MOUSE UP')
      resizingNow = false
      removePointerListeners()
      container.lastCoords = null
      binding.value({
        container,
        end: true
      })
    }

    /* *******************
        CALCULATION - CURSOR STRING
    */

    function overBorderCalc(evt) {
      var rect = container.getBoundingClientRect()
      // medUtil.debug('fine','delta', delta)
      var x = evt.clientX - rect.left // the relative mouse postion to the element
      var y = evt.clientY - rect.top // ...
      var w = rect.right - rect.left // width of the element
      var h = rect.bottom - rect.top // height of the element
      var directionStr = '' // which cursor to use
      if (y < delta) directionStr += 'n'
      // north
      else if (y > h - delta) directionStr += 's' // south
      if (x < delta) directionStr += 'w'
      // west
      else if (x > w - delta) directionStr += 'e' // east
      medUtil.debug('finest', 'over border calculation: ' + directionStr)
      var enableResize = directionStr.length > 0
      return enableResize ? directionStr : null
    }

    function setContainerCursor(container, directionStr) {
      if (directionStr) {
        var cursor
        switch (directionStr) {
          case 'n':
          case 's':
            cursor = 'ns'
            break
          case 'e':
          case 'w':
            cursor = 'ew'
            break
          case 'nw':
          case 'se':
            cursor = 'nwse'
            break
          case 'ne':
          case 'sw':
            cursor = 'nesw'
            break
        }
        container.style.cursor = cursor + '-resize'
      } else {
        container.style.cursor = null
      }
    }

    /* *******************
        LISTENERS
     */
    const POINTER_END_EVENTS = ['mouseup', 'touchend']
    const POINTER_MOVE_EVENTS = ['mousemove', 'touchmove']
    const POINTER_START_EVENTS = ['mousedown', 'touchstart']
    const MOUSE_LEAVE = ['mouseleave']
    var cntPointerListeners = 0
    function addPointerListeners() {
      cntPointerListeners++
      medUtil.debug('listeners', 'add pointer' + cntPointerListeners)
      medUtil.addEventListeners(document.documentElement, POINTER_MOVE_EVENTS, mouseMove)
      medUtil.addEventListeners(document.documentElement, POINTER_END_EVENTS, mouseUp)
    }

    function removePointerListeners() {
      cntPointerListeners--
      medUtil.debug('listeners', 'remove pointer' + cntPointerListeners)
      medUtil.removeEventListeners(document.documentElement, POINTER_MOVE_EVENTS, mouseMove)
      medUtil.removeEventListeners(document.documentElement, POINTER_END_EVENTS, mouseUp)
    }

    var cntMouseDownListeners = 0
    function addMouseDownListeners() {
      cntMouseDownListeners++
      medUtil.debug('listeners', 'add down ' + cntMouseDownListeners)
      medUtil.addEventListeners(document.documentElement, POINTER_START_EVENTS, mouseDownOnBorder)
    }

    function removeMouseDownListeners() {
      cntMouseDownListeners--
      medUtil.debug('listeners', 'remove down ' + cntMouseDownListeners)
      medUtil.removeEventListeners(
        document.documentElement,
        POINTER_START_EVENTS,
        mouseDownOnBorder
      )
    }

    var cntOverBorderListener = 0
    function addOverBorderListener(elem) {
      cntOverBorderListener++
      medUtil.debug('listeners', 'add over ' + cntOverBorderListener)
      medUtil.addEventListeners(elem, POINTER_MOVE_EVENTS, mouseMoveOnBorder)
      medUtil.addEventListeners(elem, MOUSE_LEAVE, mouseLeaveBorder)
    }

    function removeOverBorderListener(elem) {
      cntOverBorderListener--
      medUtil.debug('listeners', 'remove over ' + cntOverBorderListener)
      medUtil.removeEventListeners(elem, POINTER_MOVE_EVENTS, mouseMoveOnBorder)
      medUtil.removeEventListeners(elem, MOUSE_LEAVE, mouseLeaveBorder)
    }
  },

  // directive unbind. The element is being removed from the DOM
  unbind(container) {
    medUtil.removeEventListeners(container, MOUSE_ENTER)
  }
}
