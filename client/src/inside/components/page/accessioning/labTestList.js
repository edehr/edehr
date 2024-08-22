import { ref } from 'vue'
import { isObject } from '@/helpers/ehr-utils'
// keyMap is a set of test tubes (e.g. Lavender, Yellow, Blue, etc) and for each there is a list of lab tests
const keyMap = ref({})
/*
https://docs.google.com/spreadsheets/d/1eXE1zyq__Uf_KYA91JAlzX7fA7SoZgjjZwA6rmHp2pw/edit?usp=sharing
 */
/*
Sample lab test record
  {
    "id": "LT10",
    "type": "Chemistry Tests",
    "tube": "PST (light green) or SST (yellow)",
    "colour": "lightGreen,yellow",
    "test": "Cholesterol",
    "props": {
      "fasting": "Fasting",
      "onIce": "",
      "asap": "",
      "timed": "",
      "lmp": ""
    }
  },
 */

const dbg = true
export function useMedLabTestList () {
  function initializeData (data) {
    if (dbg) console.log('initializeData to ', data)
    keyMap.value = isObject(data) ? data : {}
  }
  function addLabTest (labTest) {
    const tubeColour = labTest.tube
    if (dbg) console.log('adding labtest to ', keyMap.value)
    if(!keyMap.value[tubeColour]) {
      keyMap.value[tubeColour] = []
    }
    keyMap.value[tubeColour].push(labTest)
    // using Vue 2.7 composition API which does not work with objects.
    // workaround is to reset the root value. This workaround is not needed in Vue 3
    keyMap.value = Object.assign({}, keyMap.value)
    if (dbg) console.log('key map after adding', keyMap.value)
  }
  function removeLabTest (labTest) {
    // console.log('remove lab test', labTest)
    const tubeColour = labTest.tube
    keyMap.value[tubeColour] = keyMap.value[tubeColour].filter( (item) => {
      return item.id !== labTest.id
    })
    if (keyMap.value[tubeColour].length === 0)  {
      delete keyMap.value[tubeColour]
    }
    // using Vue 2.7 composition API which does not work with objects.
    // workaround is to reset the root value. This workaround is not needed in Vue 3
    keyMap.value = Object.assign({}, keyMap.value)
    if (dbg) console.log('key map after removal', keyMap.value)
  }
  function tubeColours () {
    return Object.keys(keyMap.value)
  }
  function testListForTube (tube) {
    return keyMap.value[tube]
  }
  function propsForTest (test) {
    let props = test.props
    if (props) {
      props = Object.keys(props).map(p => props[p])
      props = props.filter(p => !!p)
      props = props.join(', ')
    }
    // props = props.length > 0 ? props : 'None'
    return props
  }
  return {
    keyMap,
    addLabTest, removeLabTest, initializeData,
    tubeColours,
    testListForTube,
    propsForTest
  }
}

