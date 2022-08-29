import fs from 'fs'
import path from 'path'


export const SEED = getObjFromFile('seed-data1.json')
export const STUDENT1 = getObjFromFile('student-data1.json')
export const STUDENT2 = getObjFromFile('student-data2.json')
export const STUDENT_DATA = [STUDENT1, STUDENT2]

export function getObjFromFile (fName) {
  const seedFN = path.resolve(__dirname, '_data', fName)
  let content = fs.readFileSync(seedFN, 'utf8')
  return JSON.parse(content)
}

export function createRootState () {
  return {
    seedStore: {},
    visit: {
      isDevelopingContent: false,
      sVisitInfo: {
        isInstructor: false
      }
    }
  }
}
export function createActivityData (index=0) {
  return {
    submitted: false,
    scratchData: undefined,
    assignmentData: STUDENT_DATA[index]
  }
}

export function activityData (index=0) {
  let data = {
    _id: 'asdasda',
    evaluationData: {},
    assignmentData: STUDENT_DATA[index]
  }
  return data
}

export function vInfo () {
  return {
    _id: 'asdasda'
  }
}

export function instructorVisit () {
  let data = vInfo()
  data.isInstructor = true
  return data
}

export function studentVisit () {
  let data = vInfo()
  data.isStudent = true
  return data
}

export function developerVisit () {
  let data = vInfo()
  data.isDeveloper = true
  return data
}
