export default function () {
  return {
    testPage: {
      pageDataKey: 'testPage',
      pageTitle: 'Test Page',
      pIndex: '40',
      isV2: true,
      hasGridForm: true,
      pageChildren: {
        pform_label: {
          elementKey: 'pform_label',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label'
        },
        pspacer: {
          elementKey: 'pspacer',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer'
        },
        ptext: {
          elementKey: 'ptext',
          defaultValue: 'default content',
          formIndex: '1',
          inputType: 'text',
          label: 'text w def',
          suffix: 'lb',
          fqn: 'testPage.ptext'
        },
        pcheckbox: {
          elementKey: 'pcheckbox',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        ptextpcheckbox: {
          elementKey: 'ptextpcheckbox',
          dependantOn: 'pcheckbox',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.ptextpcheckbox',
          helperHtml: '<p>a text input</p>'
        },
        passetLink: {
          elementKey: 'passetLink',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink'
        },
        pselect: {
          elementKey: 'pselect',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a'
            },
            {
              text: '2=b'
            },
            {
              text: '3=c'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect'
        },
        pselect2: {
          elementKey: 'pselect2',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a'
            },
            {
              text: '2=b'
            },
            {
              text: '3=c'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect2'
        },
        'p-cValue1': {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        pcheckset: {
          elementKey: 'pcheckset',
          defaultValue: 'check1,all',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              text: 'check1=check option 1'
            },
            {
              text: 'check2=check option 2'
            },
            {
              text: 'other=another option'
            },
            {
              text: 'all=all options are selectable'
            }
          ],
          fqn: 'testPage.pcheckset'
        },
        ptext1: {
          elementKey: 'ptext1',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.ptext1'
        },
        ptextarea1: {
          elementKey: 'ptextarea1',
          formIndex: '1',
          inputType: 'textarea',
          label: 'textarea',
          fqn: 'testPage.ptextarea1'
        },
        pselect1: {
          elementKey: 'pselect1',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1 = Yes'
            },
            {
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          fqn: 'testPage.pselect1'
        },
        'p-cValue2': {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue2'
        },
        pcheckbox2: {
          elementKey: 'pcheckbox2',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox2'
        },
        ptext2: {
          elementKey: 'ptext2',
          dependantOn: 'pcheckbox2',
          formIndex: '1',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.ptext2'
        },
        pform_label2: {
          elementKey: 'pform_label2',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label2'
        },
        pspacer2: {
          elementKey: 'pspacer2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer2'
        },
        passetLink2: {
          elementKey: 'passetLink2',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink2'
        },
        pdate2: {
          elementKey: 'pdate2',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          fqn: 'testPage.pdate2'
        },
        name: {
          elementKey: 'name',
          formIndex: '2',
          inputType: 'text',
          label: 'Name',
          fqn: 'testPage.name'
        },
        place: {
          elementKey: 'place',
          formIndex: '2',
          inputType: 'text',
          label: 'Place',
          fqn: 'testPage.place'
        }
      },
      generated: '2019-08-21T16:49:23-07:00',
      pageElements: {
        form1: {
          elementKey: 'form1',
          formKey: 'form1',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'A group label',
              gIndex: '1',
              gChildren: [
                'pform_label',
                'pspacer',
                'ptext',
                'pcheckbox',
                'ptextpcheckbox',
                'passetLink',
                'pselect',
                'pselect2',
                'p-cValue1'
              ]
            },
            {
              label: 'Second group',
              gIndex: '2',
              gChildren: [
                {
                  label: 'subgroup 1',
                  sgChildren: [
                    'pcheckset'
                  ]
                },
                {
                  label: 'subgroup 2',
                  sgChildren: [
                    'ptext1',
                    'ptextarea1',
                    'pselect1',
                    'p-cValue2'
                  ]
                },
                {
                  label: 'subgroup 3',
                  sgChildren: [
                    'pcheckbox2',
                    'ptext2',
                    'pform_label2',
                    'pspacer2',
                    'passetLink2',
                    'pdate2'
                  ]
                }
              ]
            }
          ]
        },
        form2: {
          elementKey: 'form2',
          label: 'Form 2',
          formKey: 'form2',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'A group label',
              gIndex: '1',
              gChildren: [
                'name',
                'place'
              ]
            }
          ]
        }
      }
    },
    testTable: {
      pageDataKey: 'testTable',
      pageTitle: 'Test Table',
      pIndex: '41',
      isV2: true,
      hasGridTable: true,
      pageChildren: {
        e1: {
          elementKey: 'e1',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testTable.e1'
        },
        e2: {
          elementKey: 'e2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.e2'
        },
        e3: {
          elementKey: 'e3',
          defaultValue: 'default content',
          formIndex: '1',
          inputType: 'text',
          label: 'text w def',
          tableColumn: '2',
          fqn: 'testTable.e3'
        },
        e4: {
          elementKey: 'e4',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '1',
          fqn: 'testTable.e4',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        e5: {
          elementKey: 'e5',
          dependantOn: 'e4',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          tableColumn: '3',
          tableCss: 'hr-table',
          fqn: 'testTable.e5',
          helperHtml: '<p>a text input</p>'
        },
        e6: {
          elementKey: 'e6',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.e6'
        },
        e7: {
          elementKey: 'e7',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a'
            },
            {
              text: '2=b'
            },
            {
              text: '3=c'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          fqn: 'testTable.e7'
        },
        e8: {
          elementKey: 'e8',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1=a'
            },
            {
              text: '2=b'
            },
            {
              text: '3=c'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          fqn: 'testTable.e8'
        },
        'p-cValue1': {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '5',
          fqn: 'testTable.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        e10: {
          elementKey: 'e10',
          defaultValue: 'check1,other',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              text: 'check1=check option 1'
            },
            {
              text: 'check2=check option 2'
            },
            {
              text: 'other=another option'
            },
            {
              text: 'all=all options are selectable'
            }
          ],
          tableColumn: '4',
          fqn: 'testTable.e10'
        },
        g1: {
          elementKey: 'g1',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'text',
          tableColumn: '7',
          fqn: 'testTable.g1'
        },
        g2: {
          elementKey: 'g2',
          formIndex: '1',
          inputType: 'textarea',
          label: 'textarea',
          tableColumn: '8',
          fqn: 'testTable.g2'
        },
        g3: {
          elementKey: 'g3',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              text: '1 = Yes'
            },
            {
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          tableColumn: '9',
          fqn: 'testTable.g3'
        },
        'p-cValue2': {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '10',
          fqn: 'testTable.p-cValue2'
        },
        g4: {
          elementKey: 'g4',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '12',
          fqn: 'testTable.g4'
        },
        g5: {
          elementKey: 'g5',
          dependantOn: 'g4',
          formIndex: '1',
          inputType: 'text',
          label: 'text',
          tableColumn: '13',
          fqn: 'testTable.g5'
        },
        g6: {
          elementKey: 'g6',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          tableColumn: '14',
          fqn: 'testTable.g6'
        },
        g7: {
          elementKey: 'g7',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.g7'
        },
        g8: {
          elementKey: 'g8',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.g8'
        },
        g9: {
          elementKey: 'g9',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          tableColumn: '15',
          fqn: 'testTable.g9'
        },
        e11: {
          elementKey: 'e11',
          formIndex: '1',
          formCss: 'full-width',
          inputType: 'textarea',
          label: 'textarea',
          tableColumn: '6',
          tableCss: 'hr-table',
          fqn: 'testTable.e11'
        },
        record_header: {
          elementKey: 'record_header',
          formIndex: '2',
          inputType: 'record_header',
          tableColumn: '1',
          fqn: 'testTable.record_header'
        },
        referralName: {
          elementKey: 'referralName',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral name',
          tableColumn: '3',
          fqn: 'testTable.referralName'
        },
        referralProfession: {
          elementKey: 'referralProfession',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral profession',
          tableColumn: '3',
          fqn: 'testTable.referralProfession'
        },
        undefined: {
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'testTable.undefined'
        },
        appointmentDate: {
          elementKey: 'appointmentDate',
          formIndex: '2',
          inputType: 'date',
          label: 'Appointment date',
          tableColumn: '4',
          fqn: 'testTable.appointmentDate'
        },
        appointmentTime: {
          elementKey: 'appointmentTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Appointment time',
          tableColumn: '4',
          fqn: 'testTable.appointmentTime'
        },
        status: {
          elementKey: 'status',
          formIndex: '2',
          inputType: 'select',
          label: 'Status',
          options: [
            {
              text: 'Active'
            },
            {
              text: 'Discharged'
            }
          ],
          tableColumn: '5',
          fqn: 'testTable.status'
        }
      },
      generated: '2019-08-21T16:49:23-07:00',
      pageElements: {
        table1: {
          elementKey: 'table1',
          tableKey: 'table1',
          isTable: true,
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          ehr_list: {},
          form: {
            elementKey: 'table1',
            label: 'Test table 1',
            addButtonText: 'Add a row to the test table',
            formKey: 'table1',
            ehr_groups: [
              {
                label: 'Group 1',
                gIndex: '1',
                gChildren: [
                  'e1',
                  'e2',
                  'e3',
                  'e4',
                  'e5',
                  'e6',
                  'e7',
                  'e8',
                  'p-cValue1'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  {
                    label: 'subgroup 1',
                    sgChildren: [
                      'e10'
                    ]
                  },
                  {
                    label: 'subgroup 1',
                    sgChildren: [
                      'g1',
                      'g2',
                      'g3',
                      'p-cValue2'
                    ]
                  },
                  {
                    label: 'subgroup 1',
                    sgChildren: [
                      'g4',
                      'g5',
                      'g6',
                      'g7',
                      'g8',
                      'g9'
                    ]
                  }
                ]
              },
              {
                gIndex: '3',
                gChildren: [
                  'e11'
                ]
              }
            ]
          }
        },
        stacked: {
          elementKey: 'stacked',
          tableKey: 'stacked',
          isTable: true,
          label: 'Stacked table',
          addButtonText: 'Add a referral',
          ehr_list: {},
          form: {
            elementKey: 'stacked',
            label: 'Stacked table',
            addButtonText: 'Add a referral',
            formKey: 'stacked',
            ehr_groups: [
              {
                gIndex: '1',
                gChildren: [
                  'record_header'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'referralName',
                  'referralProfession',
                  null,
                  'appointmentDate',
                  'appointmentTime',
                  'status'
                ]
              }
            ]
          }
        }
      }
    }
  }
}