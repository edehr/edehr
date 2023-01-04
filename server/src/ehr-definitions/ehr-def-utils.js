// noinspection DuplicatedCode

import { EhrPages } from './ehr-models'
import EhrDataModel from '../ehr-definitions/EhrDataModel'

export function computeDateOfBirth (ageValue, demographicsDoB) {
  let dateStr
  if (ageValue) {
    const now = new Date()
    const dob = new Date(demographicsDoB)
    const isAfter = dob.getMonth() > now.getMonth() || dob.getMonth() === now.getMonth() && dob.getDay() > now.getDay()
    let nyr = now.getFullYear()
    nyr = nyr - ageValue
    nyr += isAfter ? -1 : 0
    dob.setFullYear(nyr)
    dateStr = dob.toISOString().split('T')[0]
  }
  return dateStr
}

// The ehr time values may be stored as 00:00
export function convertTimeStr (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let time = text.replace(/:/g, '')
    let temp = Number.parseInt(time)
    result = Number.isInteger(temp) ? temp : result
  }
  return result
}
export function convertTimeStrToMilTime (text) {
  let result = text
  if (text && Object.prototype.toString.call(text) === '[object String]' && text.length > 0) {
    let mTime = ''+ convertTimeStr(text)
    result = mTime.padStart(4,'0')
  }
  return result
}

export function updateAllVisitTime (eData,pageDefs) {
  const model = new EhrDataModel(eData)
  const pages = new EhrPages(pageDefs)
  const pageList = pages.pageList
  pageList.forEach(page => {
    const pageKey = page.pageKey
    if (model.hasData(pageKey)) {
      const pChildren = page.pageChildren.filter(c => c.inputType === 'visitTime')
      pChildren.forEach(c => {
        let d = model.getPageFormData(pageKey, c.elementKey)
        if(d) {
          let val = convertTimeStrToMilTime(d)
          model.updatePageFormData(pageKey, c.elementKey, val)
        }
      })
      page.pageTables.forEach(table => {
        const children = table.children
        const timeChildren = children.filter(c => c.inputType === 'visitTime')
        const tableKey = table.elementKey
        const tableData = model.getPageTableData(pageKey, tableKey)
        if (tableData) {
          tableData.forEach((row, rowIndex) => {
            timeChildren.forEach(timeChild => {
              const k = timeChild.elementKey
              let elemData = row[k]
              if(elemData) {
                let val = convertTimeStrToMilTime(elemData)
                model.updateRowElem(pageKey, tableKey, rowIndex, k, val)
              }
            })
          })
        }
      })
    }
  })
  return model.ehrData
}

