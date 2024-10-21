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

export function useMedLabTestList () {
/*
  keyMap is a set of test tubes (e.g. Lavender, Yellow, Blue, etc)
  and for each there is a list of lab tests.
  In both the add and remove functions we clone the keyMap to create
  a new object. This is required for Vue reactivity to see the change.
  */

  function addLabTest (keyMap, labTest) {
    keyMap = { ...keyMap }
    const tubeColour = labTest.tube
    let list = keyMap[tubeColour]
    if(!list) {
      list = []
    }
    list.push(labTest)
    keyMap[tubeColour] = list
    return keyMap
  }
  function removeLabTest (keyMap, labTest) {
    keyMap = { ...keyMap }
    const tubeColour = labTest.tube
    keyMap[tubeColour] = keyMap[tubeColour].filter( (item) => {
      return item.id !== labTest.id
    })
    if (keyMap[tubeColour].length === 0)  {
      delete keyMap[tubeColour]
    }
    return keyMap
  }
  function propsForTest (test) {
    let props = test.props
    if (props) {
      props = Object.keys(props).map(p => props[p])
      props = props.filter(p => !!p)
      props = props.join(', ')
    }
    return props
  }
  return {
    addLabTest, removeLabTest,
    propsForTest
  }
}

