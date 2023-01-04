import { convertTimeStrToMilTime, updateAllVisitTime } from './ehr-def-utils'
import { EhrPages, PageChildElement } from './ehr-models'
const should = require('should')
const pageDefs = {
  visit: {
    pageDataKey: 'visit',
    pageTitle: 'Visit details and location',
    pIndex: '10',
    hasGridTable: true,
    hasGridForm: true,
    pageChildren: [
      {
        elementKey: 'admissionDay',
        defaultValue: '0',
        formIndex: '1',
        inputType: 'visitDay',
        label: 'Admission day',
        mandatory: true,
        fqn: 'visit.admissionDay'
      },
      {
        elementKey: 'admissionTime',
        defaultValue: '0.375',
        formIndex: '1',
        inputType: 'visitTime',
        label: 'Admission time',
        mandatory: true,
        fqn: 'visit.admissionTime'
      },
      {
        elementKey: 'status',
        formIndex: '1',
        inputType: 'select',
        label: 'Admission status',
        mandatory: true,
        options: [
          {
            key: 'Admission in progress',
            text: 'Admission in progress'
          },
          {
            key: 'Admitted',
            text: 'Admitted'
          },
          {
            key: 'Inpatient',
            text: 'Inpatient'
          },
          {
            key: 'Outpatient',
            text: 'Outpatient'
          },
          {
            key: 'Surgical day care',
            text: 'Surgical day care'
          },
          {
            key: 'Discharge pending',
            text: 'Discharge pending'
          },
          {
            key: 'Discharged',
            text: 'Discharged'
          }
        ],
        fqn: 'visit.status'
      },
      {
        elementKey: 'locationLabel',
        formIndex: '1',
        inputType: 'form_label',
        label: 'Location records are below',
        fqn: 'visit.locationLabel'
      },
      {
        elementKey: 'consentForTreatment',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Consent for treatment',
        fqn: 'visit.consentForTreatment'
      },
      {
        elementKey: 'consentForBlood',
        formIndex: '1',
        inputType: 'checkbox',
        label: 'Consent for blood products',
        tableCss: 'hr-table',
        fqn: 'visit.consentForBlood'
      },
      {
        elementKey: 'diagnosis',
        dependentOn: 'disable:consentForBlood',
        formIndex: '1',
        inputType: 'textarea',
        label: 'Physician admitting diagnosis',
        fqn: 'visit.diagnosis'
      },
      {
        elementKey: 'location',
        formIndex: '2',
        helperText: 'hospital, ward #, room #, home, out patient clinic',
        inputType: 'text',
        label: 'Patient location',
        mandatory: true,
        tableColumn: '1',
        tableCss: 'hr-table',
        fqn: 'visit.location',
        helperHtml: '<p>hospital, ward #, room #, home, out patient clinic</p>'
      },
      {
        elementKey: 'transferInDay',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Transfer in day',
        tableColumn: '2',
        fqn: 'visit.transferInDay'
      },
      {
        elementKey: 'transferInTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Transfer in time',
        tableColumn: '3',
        fqn: 'visit.transferInTime'
      },
      {
        elementKey: 'aSpacer',
        formIndex: '2',
        inputType: 'spacer',
        fqn: 'visit.aSpacer'
      },
      {
        elementKey: 'transferOutDay',
        formIndex: '2',
        inputType: 'visitDay',
        label: 'Transfer out day',
        tableColumn: '4',
        fqn: 'visit.transferOutDay'
      },
      {
        elementKey: 'transferOutTime',
        formIndex: '2',
        inputType: 'visitTime',
        label: 'Transfer out time',
        tableColumn: '5',
        fqn: 'visit.transferOutTime'
      }
    ],
    generated: '2022-06-09T05:33:39-07:00',
    pageElements: {
      pageForm: {
        elementKey: 'pageForm',
        formKey: 'pageForm',
        isPageForm: true,
        ehr_groups: [
          {
            elementKey: 'ehr_group28',
            gIndex: '1',
            gChildren: [
              'admissionDay',
              'admissionTime',
              'status',
              'locationLabel',
              'consentForTreatment',
              'consentForBlood'
            ]
          },
          {
            elementKey: 'ehr_group29',
            formCss: 'grid-left-to-right-1',
            gIndex: '2',
            gChildren: [
              'diagnosis'
            ]
          }
        ]
      },
      table: {
        elementKey: 'table',
        tableKey: 'table',
        isTable: true,
        hasRecHeader: false,
        label: 'Patient Location',
        addButtonText: 'Add a patient location',
        ehr_list: [
          {
            tableCss: 'hr-table',
            ehr_list_index: '1',
            items: [
              'location'
            ]
          },
          {
            ehr_list_index: '2',
            items: [
              'transferInDay'
            ]
          },
          {
            ehr_list_index: '3',
            items: [
              'transferInTime'
            ]
          },
          {
            ehr_list_index: '4',
            items: [
              'transferOutDay'
            ]
          },
          {
            ehr_list_index: '5',
            items: [
              'transferOutTime'
            ]
          }
        ],
        form: {
          elementKey: 'table',
          label: 'Patient Location',
          addButtonText: 'Add a patient location',
          formKey: 'table',
          ehr_groups: [
            {
              elementKey: 'ehr_group30',
              formCss: 'grid-left-to-right-1',
              gIndex: '1',
              gChildren: [
                'location'
              ]
            },
            {
              elementKey: 'ehr_group31',
              gIndex: '2',
              gChildren: [
                'transferInDay',
                'transferInTime',
                'aSpacer',
                'transferOutDay',
                'transferOutTime'
              ]
            }
          ],
          ehr_data: {
            location: '',
            transferInDay: '',
            transferInTime: '',
            transferOutDay: '',
            transferOutTime: ''
          }
        }
      }
    }
  },
}

const ehrData = {
  visit: {
    admissionDay: 'Day 0',
    admissionTime: '06:00',
    diagnosis: 'COPD\nShortness of breath\nDizzy',
    status: 'Admitted',
    table: [
      {
        location: 'here',
        transferInDay: 0,
        transferInTime: '00:30',
        transferOutDay: 1,
        transferOutTime: '04:00',
        createdDate: '2022-08-17T00:37:42-07:00'
      },
      {
        location: 'there',
        transferInDay: 1,
        transferInTime: '21:31',
        transferOutDay: 2,
        transferOutTime: '23:32',
        createdDate: '2022-08-17T00:37:42-07:00'
      }
    ],
    lastUpdate: '2022-08-17T00:37:42-07:00'
  }
}

describe( 'utils work', () => {
  let pages
  before(function () {
    pages = new EhrPages(pageDefs)
  })
  it('page form elements', () => {
    const page = pages.findPage('visit')
    const pageForms = page.pageForms
    const theForm = pageForms[0]
    const children = theForm.children
    children.length.should.equal(7)
    children.forEach(ch => ch.should.be.instanceof(PageChildElement))
  })
  it('page form element data', () => {
    /*
    find all page form elements and update elements of type visitTime and convert them to 0000 format
     */
    const page = pages.findPage('visit')
    const data0 = page.pageEhrData
    const asStr0 = JSON.stringify(data0)
    asStr0.includes('06:00').should.equal(true)
    const theForm = page.pageDef.pageForms[0]
    const children = theForm.children
    const timeChildren = children.filter(c => c.inputType === 'visitTime')
    timeChildren.forEach(tc => {
      const data = page.getPageFormData(tc.elementKey)
      page.updatePageFormData(tc.elementKey, convertTimeStrToMilTime(data))
    })
    const data2 = page.pageEhrData
    const asStr = JSON.stringify(data2)
    // a better test would compare the two strings for equality except in the changed value(s)
    asStr.includes('0600').should.equal(true)
  })
  it('page table elements', () => {
    const page = pages.findPage('visit')
    const pageDef = page.pageDef
    pageDef.should.have.property('pageTables')
    const pageTables = pageDef.pageTables
    should.exist(pageTables)
    pageTables.should.be.instanceof(Array)
    pageTables.length.should.equal(1)
    const theTable = pageTables[0]
    theTable.should.be.instanceof(PageDefTable)
    const children = theTable.children
    should.exist(children)
    children.should.be.instanceof(Array)
    children.length.should.equal(5)
    children.forEach(ch => ch.should.be.instanceof(PageDefChild))
  })
  it('page table elements data', () => {
    const page = pages.findPage('visit')
    const pageDef = page.pageDef
    pageDef.pageTables.forEach(table => {
      const children = table.children
      const timeChildren = children.filter(c => c.inputType === 'visitTime')
      const tableData = page.getPageFormData(table.elementKey)
      let before = JSON.stringify(tableData)
      before = before.match(/:/g)
      before = before.length
      tableData.should.be.instanceof(Array)
      tableData.length.should.equal(2)
      tableData.forEach(row => {
        timeChildren.forEach(timeChild => {
          let elemData = row[timeChild.elementKey]
          row[timeChild.elementKey] = convertTimeStrToMilTime(elemData)
        })
      })
      let after = JSON.stringify(tableData)
      after = after.match(/:/g)
      after.should.be.instanceof(Array)
      after = after.length
      let diff = before - after
      diff.should.equal(4)
    })
  })
})
describe( 'updateAllVisitTime', () => {
  it('updateAllVisitTime', () => {
    let before = JSON.stringify(ehrData)
    console.log('before', before)
    before = before.match(/:/g)
    before = before.length
    const updated = updateAllVisitTime(ehrData, pageDefs)
    let after = JSON.stringify(updated)
    console.log('after', after)
    after = after.match(/:/g)
    after.should.be.instanceof(Array)
    after = after.length
    let diff = before - after
    diff.should.equal(4)
  })
})
