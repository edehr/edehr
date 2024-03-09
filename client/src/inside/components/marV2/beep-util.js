
// https://developer.mozilla.org/en-US/docs/Web/API/AudioContext
/*
It's recommended to create one AudioContext and reuse it instead of initializing a new one each time, and it's OK
to use a single AudioContext for several audio sources and pipeline concurrently.
 */
let audioContext

// Based on StackOverflow the most amazing people contribute to this resource
// https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
export function beepSound (frequency, durationSec)
{
  if (!audioContext) {
    // lazy create singleton for app
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode
  let oscillatorNode = audioContext.createOscillator()
  oscillatorNode.type = 'sine'
  oscillatorNode.connect (audioContext.destination)
  let stopTime = audioContext.currentTime
  oscillatorNode.start ()
  oscillatorNode.frequency.setValueAtTime (frequency, stopTime)  // value in hertz
  stopTime += durationSec
  oscillatorNode.stop (stopTime)
}
