export default function () {
  return {
    testPage: {
      pageDataKey: 'testPage',
      pageTitle: 'Test Page',
      pIndex: '40',
      isV2: true,
      hasGridTable: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'pform_label',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label'
        },
        {
          elementKey: 'pspacer',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer'
        },
        {
          elementKey: 'weight',
          defaultValue: '80',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          mandatory: true,
          suffix: 'lb',
          validation: 'isNumber',
          fqn: 'testPage.weight'
        },
        {
          elementKey: 'pcheckbox',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        {
          elementKey: 'defaultText',
          defaultValue: 'some default',
          dependantOn: 'disable:pcheckbox',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.defaultText',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'passetLink',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink'
        },
        {
          elementKey: 'pselect',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1=a choice 1',
              text: '1=a choice 1'
            },
            {
              key: '2=b choice 1',
              text: '2=b choice 1'
            },
            {
              key: '3=c choice 1',
              text: '3=c choice 1'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect'
        },
        {
          elementKey: 'pselect2',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1=a choice 2',
              text: '1=a choice 2'
            },
            {
              key: '2=b choice 2',
              text: '2=b choice 2'
            },
            {
              key: '3=c choice 2',
              text: '3=c choice 2'
            }
          ],
          passToFunction: 'p-cValue1',
          fqn: 'testPage.pselect2'
        },
        {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        {
          elementKey: 'pcheckset',
          defaultValue: 'check1,all',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              key: 'check1=check option 1',
              text: 'check1=check option 1'
            },
            {
              key: 'check2=check option 2',
              text: 'check2=check option 2'
            },
            {
              key: 'other=another option',
              text: 'other=another option'
            },
            {
              key: 'all=all options are selectable',
              text: 'all=all options are selectable'
            }
          ],
          fqn: 'testPage.pcheckset'
        },
        {
          elementKey: 'dayValue',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          mandatory: true,
          validation: 'isDay',
          fqn: 'testPage.dayValue'
        },
        {
          elementKey: 'timeValue',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          mandatory: true,
          validation: 'isTime',
          fqn: 'testPage.timeValue'
        },
        {
          elementKey: 'forCalc',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1 = Yes',
              text: '1 = Yes'
            },
            {
              key: '2 = No',
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          fqn: 'testPage.forCalc'
        },
        {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          fqn: 'testPage.p-cValue2'
        },
        {
          elementKey: 'pcheckbox2',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          fqn: 'testPage.pcheckbox2'
        },
        {
          elementKey: 'ptext2',
          dependantOn: 'disable:pcheckbox2',
          formIndex: '1',
          formOption: 'hideLabel',
          inputType: 'text',
          label: 'text',
          fqn: 'testPage.ptext2'
        },
        {
          elementKey: 'pform_label2',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testPage.pform_label2'
        },
        {
          elementKey: 'pspacer2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testPage.pspacer2'
        },
        {
          elementKey: 'passetLink2',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testPage.passetLink2'
        },
        {
          elementKey: 'pdate2',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          fqn: 'testPage.pdate2'
        },
        {
          elementKey: 't1',
          formIndex: '2',
          inputType: 'text',
          label: 'Text 1',
          tableColumn: '1',
          tableLabel: 'Text 1',
          fqn: 'testPage.t1'
        },
        {
          elementKey: 't2',
          formIndex: '2',
          helperText: 'a text input',
          inputType: 'text',
          label: 'Text 2',
          tableColumn: '2',
          tableLabel: 'Text 2',
          fqn: 'testPage.t2',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'name',
          formIndex: '3',
          inputType: 'text',
          label: 'Name',
          tableLabel: 'Identification',
          fqn: 'testPage.name'
        },
        {
          elementKey: 'profession',
          formIndex: '3',
          inputType: 'text',
          label: 'Profession',
          fqn: 'testPage.profession'
        },
        {
          elementKey: 'day',
          formIndex: '3',
          inputType: 'day',
          label: 'Day',
          fqn: 'testPage.day'
        },
        {
          elementKey: 'time',
          formIndex: '3',
          inputType: 'time',
          label: 'Time',
          fqn: 'testPage.time'
        },
        {
          elementKey: 'textDate',
          formIndex: '3',
          inputType: 'text',
          label: 'TextDate',
          fqn: 'testPage.textDate'
        },
        {
          elementKey: 'textDateDate',
          formIndex: '3',
          inputType: 'date',
          label: 'TextDate',
          fqn: 'testPage.textDateDate'
        },
        {
          elementKey: 'spacer5',
          formIndex: '3',
          inputType: 'spacer',
          label: 'TextDate',
          fqn: 'testPage.spacer5'
        },
        {
          elementKey: 'name',
          formIndex: '3',
          inputType: 'text',
          label: 'Name',
          fqn: 'testPage.name'
        },
        {
          elementKey: 'place',
          formIndex: '3',
          inputType: 'text',
          label: 'Place',
          fqn: 'testPage.place'
        }
      ],
      generated: '2020-01-04T14:49:55-08:00',
      pageElements: {
        form1: {
          elementKey: 'form1',
          label: 'Form 1',
          formKey: 'form1',
          isPageForm: true,
          ehr_groups: [
            {
              label: 'A group label',
              gIndex: '1',
              gChildren: [
                'pform_label',
                'pspacer',
                'weight',
                'pcheckbox',
                'defaultText',
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
                  elementKey: 'subgroup20',
                  sgChildren: [
                    'pcheckset'
                  ]
                },
                {
                  label: 'subgroup 2',
                  elementKey: 'subgroup21',
                  sgChildren: [
                    'dayValue',
                    'timeValue',
                    'forCalc',
                    'p-cValue2'
                  ]
                },
                {
                  label: 'subgroup 3',
                  elementKey: 'subgroup22',
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
        table1: {
          elementKey: 'table1',
          tableKey: 'table1',
          isTable: true,
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          ehr_list: [
            {
              label: 'Text 1',
              ehr_list_index: '1',
              items: [
                't1'
              ]
            },
            {
              label: 'Text 2',
              ehr_list_index: '2',
              items: [
                't2'
              ]
            }
          ],
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
                  't1',
                  't2'
                ]
              }
            ],
            ehr_data: {
              t1: '',
              t2: ''
            }
          }
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
                'profession',
                'day',
                'time',
                'textDate',
                'textDateDate',
                'spacer5',
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
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'e1',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          fqn: 'testTable.e1'
        },
        {
          elementKey: 'e2',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.e2'
        },
        {
          elementKey: 'weight',
          defaultValue: '80',
          formIndex: '1',
          inputType: 'text',
          label: 'Weight',
          mandatory: true,
          suffix: 'lb',
          tableColumn: '2',
          tableLabel: 'Wieght',
          validation: 'isNumber',
          fqn: 'testTable.weight'
        },
        {
          elementKey: 'pcheckbox',
          defaultValue: true,
          formIndex: '1',
          helperText: 'a checkbox iinput',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '1',
          tableLabel: 'A bool',
          fqn: 'testTable.pcheckbox',
          helperHtml: '<p>a checkbox iinput</p>'
        },
        {
          elementKey: 'defaultText',
          defaultValue: 'some default',
          dependantOn: 'disable:pcheckbox',
          formIndex: '1',
          helperText: 'a text input',
          inputType: 'text',
          label: 'text',
          tableColumn: '3',
          tableCss: 'hr-table',
          tableLabel: 'Text',
          fqn: 'testTable.defaultText',
          helperHtml: '<p>a text input</p>'
        },
        {
          elementKey: 'e6',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.e6'
        },
        {
          elementKey: 'e7',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1=a choice 1',
              text: '1=a choice 1'
            },
            {
              key: '2=b choice 1',
              text: '2=b choice 1'
            },
            {
              key: '3=c choice 1',
              text: '3=c choice 1'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          tableLabel: 'Selects',
          fqn: 'testTable.e7'
        },
        {
          elementKey: 'e8',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1=a choice 2',
              text: '1=a choice 2'
            },
            {
              key: '2=b choice 2',
              text: '2=b choice 2'
            },
            {
              key: '3=c choice 2',
              text: '3=c choice 2'
            }
          ],
          passToFunction: 'p-cValue1',
          tableColumn: '5',
          fqn: 'testTable.e8'
        },
        {
          elementKey: 'p-cValue1',
          formIndex: '1',
          helperText: 'a calculated value based on the select \'pselect1\' on this page',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '5',
          fqn: 'testTable.p-cValue1',
          helperHtml: '<p>a calculated value based on the select \'pselect1\' on this page</p>'
        },
        {
          elementKey: 'e10',
          defaultValue: 'check1,other',
          formIndex: '1',
          inputType: 'checkset',
          label: 'checkset',
          options: [
            {
              key: 'check1=check option 1',
              text: 'check1=check option 1'
            },
            {
              key: 'check2=check option 2',
              text: 'check2=check option 2'
            },
            {
              key: 'other=another option',
              text: 'other=another option'
            },
            {
              key: 'all=all options are selectable',
              text: 'all=all options are selectable'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Set',
          fqn: 'testTable.e10'
        },
        {
          elementKey: 'dayValue',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          mandatory: true,
          tableColumn: '7',
          tableLabel: 'Day',
          validation: 'isDay',
          fqn: 'testTable.dayValue'
        },
        {
          elementKey: 'timeValue',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          mandatory: true,
          tableColumn: '8',
          tableLabel: 'Time',
          validation: 'isTime',
          fqn: 'testTable.timeValue'
        },
        {
          elementKey: 'forCalc',
          formIndex: '1',
          inputType: 'select',
          label: 'select',
          options: [
            {
              key: '1 = Yes',
              text: '1 = Yes'
            },
            {
              key: '2 = No',
              text: '2 = No'
            }
          ],
          passToFunction: 'p-cValue2',
          tableColumn: '9',
          tableLabel: 'Source',
          fqn: 'testTable.forCalc'
        },
        {
          elementKey: 'p-cValue2',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'calculatedValue',
          tableColumn: '10',
          tableLabel: 'Calculated',
          fqn: 'testTable.p-cValue2'
        },
        {
          elementKey: 'g4',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'checkbox',
          tableColumn: '12',
          tableLabel: 'Bool',
          fqn: 'testTable.g4'
        },
        {
          elementKey: 'g5',
          dependantOn: 'disable:g4',
          formIndex: '1',
          inputType: 'text',
          label: 'text',
          tableColumn: '13',
          tableLabel: 'Text',
          fqn: 'testTable.g5'
        },
        {
          elementKey: 'g6',
          formIndex: '1',
          inputType: 'form_label',
          label: '<b>a form <i>label</i></b>',
          tableColumn: '14',
          tableLabel: 'Lable',
          fqn: 'testTable.g6'
        },
        {
          elementKey: 'g7',
          formIndex: '1',
          inputType: 'spacer',
          label: 'spacer',
          fqn: 'testTable.g7'
        },
        {
          elementKey: 'g8',
          assetBase: 'standardized-assessment-tools',
          assetName: 'the-canadian-ed-triage-and-acuity-scale.gif',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'assetLink',
          fqn: 'testTable.g8'
        },
        {
          elementKey: 'g9',
          formIndex: '1',
          inputType: 'date',
          label: 'date',
          tableColumn: '15',
          tableLabel: 'Date',
          fqn: 'testTable.g9'
        },
        {
          elementKey: 'e11',
          formIndex: '1',
          inputType: 'textarea',
          label: 'textarea',
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'Long text',
          fqn: 'testTable.e11'
        },
        {
          elementKey: 'name',
          formIndex: '2',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'testTable.name'
        },
        {
          elementKey: 'profession',
          formIndex: '2',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'testTable.profession'
        },
        {
          elementKey: 'day',
          formIndex: '2',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'testTable.day'
        },
        {
          elementKey: 'time',
          formIndex: '2',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'testTable.time'
        },
        {
          elementKey: 'cd1',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'C D 1',
          tableColumn: '2',
          tableLabel: 'Chk 1',
          fqn: 'testTable.cd1'
        },
        {
          elementKey: 'cd1Date',
          formIndex: '2',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'C D 1',
          tableColumn: '2',
          tableLabel: 'Chk 1',
          fqn: 'testTable.cd1Date'
        },
        {
          elementKey: 'spacer11',
          formIndex: '2',
          inputType: 'spacer',
          label: 'C D 1',
          tableColumn: '2',
          tableLabel: 'Chk 1',
          fqn: 'testTable.spacer11'
        },
        {
          elementKey: 'cd2',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'C D 2',
          tableColumn: '3',
          tableLabel: 'Chk 2',
          fqn: 'testTable.cd2'
        },
        {
          elementKey: 'cd2Date',
          formIndex: '2',
          formOption: 'hideLabel',
          inputType: 'date',
          label: 'C D 2',
          tableColumn: '3',
          tableLabel: 'Chk 2',
          fqn: 'testTable.cd2Date'
        },
        {
          elementKey: 'spacer12',
          formIndex: '2',
          inputType: 'spacer',
          label: 'C D 2',
          tableColumn: '3',
          tableLabel: 'Chk 2',
          fqn: 'testTable.spacer12'
        },
        {
          elementKey: 'td1',
          formIndex: '2',
          inputType: 'text',
          label: 'TextDate',
          tableColumn: '4',
          tableLabel: 'Txt 1',
          fqn: 'testTable.td1'
        },
        {
          elementKey: 'td1Date',
          formIndex: '2',
          inputType: 'date',
          label: 'TextDate',
          tableColumn: '4',
          tableLabel: 'Txt 1',
          fqn: 'testTable.td1Date'
        },
        {
          elementKey: 'spacer13',
          formIndex: '2',
          inputType: 'spacer',
          label: 'TextDate',
          tableColumn: '4',
          tableLabel: 'Txt 1',
          fqn: 'testTable.spacer13'
        },
        {
          elementKey: 'referralName',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral name',
          tableColumn: '5',
          tableLabel: 'Referral',
          fqn: 'testTable.referralName'
        },
        {
          elementKey: 'referralProfession',
          formIndex: '2',
          inputType: 'text',
          label: 'Referral profession',
          tableColumn: '5',
          fqn: 'testTable.referralProfession'
        },
        {
          elementKey: 'spacer1',
          formIndex: '2',
          inputType: 'spacer',
          label: 'even spacers need a element key',
          fqn: 'testTable.spacer1'
        },
        {
          elementKey: 'appointmentDate',
          formIndex: '2',
          inputType: 'date',
          label: 'Appointment date',
          tableColumn: '6',
          tableLabel: 'Appointment',
          fqn: 'testTable.appointmentDate'
        },
        {
          elementKey: 'appointmentTime',
          formIndex: '2',
          inputType: 'time',
          label: 'Appointment time',
          tableColumn: '6',
          tableLabel: 'Appointment',
          fqn: 'testTable.appointmentTime'
        },
        {
          elementKey: 'status',
          formIndex: '2',
          inputType: 'select',
          label: 'Status',
          options: [
            {
              key: 'Active',
              text: 'Active'
            },
            {
              key: 'Discharged',
              text: 'Discharged'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Status',
          fqn: 'testTable.status'
        },
        {
          elementKey: 'administration',
          defaultValue: 'sched',
          formIndex: '3',
          inputType: 'select',
          label: 'Administration',
          options: [
            {
              key: 'sched',
              text: 'Scheduled'
            },
            {
              key: 'prn',
              text: 'PRN (as needed)'
            },
            {
              key: 'once',
              text: 'Once'
            },
            {
              key: 'stat',
              text: 'Stat'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Administration',
          fqn: 'testTable.administration'
        },
        {
          elementKey: 'scheduled',
          formIndex: '3',
          inputType: 'select',
          label: 'Scheduled',
          options: [
            {
              key: 'BID / q12h',
              text: 'BID / q12h'
            },
            {
              key: 'TID',
              text: 'TID'
            },
            {
              key: 'q8h',
              text: 'q8h'
            },
            {
              key: 'QID',
              text: 'QID'
            },
            {
              key: 'q6h',
              text: 'q6h'
            },
            {
              key: 'q4h',
              text: 'q4h'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Scheduled',
          fqn: 'testTable.scheduled'
        },
        {
          elementKey: 'prn1',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 1',
          tableColumn: '10',
          fqn: 'testTable.prn1'
        },
        {
          elementKey: 'prn2',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 2',
          tableColumn: '11',
          fqn: 'testTable.prn2'
        },
        {
          elementKey: 'prn3',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 3',
          tableColumn: '12',
          fqn: 'testTable.prn3'
        },
        {
          elementKey: 'prn4',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 4',
          tableColumn: '13',
          fqn: 'testTable.prn4'
        },
        {
          elementKey: 'prn5',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 5',
          tableColumn: '14',
          fqn: 'testTable.prn5'
        },
        {
          elementKey: 'prn6',
          formIndex: '3',
          inputType: 'text',
          label: 'PRN 6',
          tableColumn: '15',
          fqn: 'testTable.prn6'
        },
        {
          elementKey: 'once',
          formIndex: '3',
          inputType: 'text',
          label: 'Once',
          tableColumn: '10',
          fqn: 'testTable.once'
        },
        {
          elementKey: 'stat',
          formIndex: '3',
          inputType: 'text',
          label: 'Stat',
          tableColumn: '10',
          fqn: 'testTable.stat'
        }
      ],
      generated: '2020-01-04T14:49:55-08:00',
      pageElements: {
        table1: {
          elementKey: 'table1',
          tableKey: 'table1',
          isTable: true,
          label: 'Test table 1',
          addButtonText: 'Add a row to the test table',
          ehr_list: [
            {
              label: 'A bool',
              ehr_list_index: '1',
              items: [
                'pcheckbox'
              ]
            },
            {
              label: 'Wieght',
              ehr_list_index: '2',
              items: [
                'weight'
              ]
            },
            {
              label: 'Text',
              tableCss: 'hr-table',
              ehr_list_index: '3',
              items: [
                'defaultText'
              ]
            },
            {
              label: 'Set',
              ehr_list_index: '4',
              items: [
                'e10'
              ]
            },
            {
              label: 'Selects',
              ehr_list_index: '5',
              items: [
                'e7',
                'e8',
                'p-cValue1'
              ]
            },
            {
              label: 'Long text',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'e11'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '7',
              items: [
                'dayValue'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '8',
              items: [
                'timeValue'
              ]
            },
            {
              label: 'Source',
              ehr_list_index: '9',
              items: [
                'forCalc'
              ]
            },
            {
              label: 'Calculated',
              ehr_list_index: '10',
              items: [
                'p-cValue2'
              ]
            },
            {
              label: 'Bool',
              ehr_list_index: '12',
              items: [
                'g4'
              ]
            },
            {
              label: 'Text',
              ehr_list_index: '13',
              items: [
                'g5'
              ]
            },
            {
              label: 'Lable',
              ehr_list_index: '14',
              items: [
                'g6'
              ]
            },
            {
              label: 'Date',
              ehr_list_index: '15',
              items: [
                'g9'
              ]
            }
          ],
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
                  'weight',
                  'pcheckbox',
                  'defaultText',
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
                    elementKey: 'subgroup23',
                    sgChildren: [
                      'e10'
                    ]
                  },
                  {
                    label: 'subgroup 2',
                    elementKey: 'subgroup24',
                    sgChildren: [
                      'dayValue',
                      'timeValue',
                      'forCalc',
                      'p-cValue2'
                    ]
                  },
                  {
                    label: 'subgroup 3',
                    elementKey: 'subgroup25',
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
                formCss: 'full-width',
                gIndex: '3',
                gChildren: [
                  'e11'
                ]
              }
            ],
            ehr_data: {
              weight: '80',
              pcheckbox: true,
              defaultText: 'some default',
              e7: '',
              e8: '',
              'p-cValue1': '',
              e10: 'check1,other',
              dayValue: '',
              timeValue: '',
              forCalc: '',
              'p-cValue2': '',
              g4: '',
              g5: '',
              g9: '',
              e11: ''
            }
          }
        },
        stacked: {
          elementKey: 'stacked',
          tableKey: 'stacked',
          isTable: true,
          label: 'Stacked table',
          addButtonText: 'Add a stacked row',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Chk 1',
              ehr_list_index: '2',
              items: [
                'cd1',
                'cd1Date',
                'spacer11'
              ]
            },
            {
              label: 'Chk 2',
              ehr_list_index: '3',
              items: [
                'cd2',
                'cd2Date',
                'spacer12'
              ]
            },
            {
              label: 'Txt 1',
              ehr_list_index: '4',
              items: [
                'td1',
                'td1Date',
                'spacer13'
              ]
            },
            {
              label: 'Referral',
              ehr_list_index: '5',
              items: [
                'referralName',
                'referralProfession'
              ]
            },
            {
              label: 'Appointment',
              ehr_list_index: '6',
              items: [
                'appointmentDate',
                'appointmentTime'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '7',
              items: [
                'status'
              ]
            }
          ],
          form: {
            elementKey: 'stacked',
            label: 'Stacked table',
            addButtonText: 'Add a stacked row',
            formKey: 'stacked',
            ehr_groups: [
              {
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'name',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                gIndex: '2',
                gChildren: [
                  'cd1',
                  'cd1Date',
                  'spacer11',
                  'cd2',
                  'cd2Date',
                  'spacer12',
                  'td1',
                  'td1Date',
                  'spacer13'
                ]
              },
              {
                gIndex: '3',
                gChildren: [
                  'referralName',
                  'referralProfession',
                  'spacer1',
                  'appointmentDate',
                  'appointmentTime',
                  'status'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              cd1: '',
              cd1Date: '',
              cd2: '',
              cd2Date: '',
              td1: '',
              td1Date: '',
              referralName: '',
              referralProfession: '',
              appointmentDate: '',
              appointmentTime: '',
              status: ''
            }
          }
        },
        form3: {
          elementKey: 'form3',
          label: 'Form 3',
          formKey: 'form3',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'administration'
              ]
            },
            {
              gIndex: '2',
              gChildren: [
                'scheduled'
              ]
            },
            {
              gIndex: '3',
              gChildren: [
                'prn1',
                'prn2',
                'prn3',
                'prn4',
                'prn5',
                'prn6'
              ]
            },
            {
              gIndex: '4',
              gChildren: [
                'once'
              ]
            },
            {
              gIndex: '5',
              gChildren: [
                'stat'
              ]
            }
          ]
        }
      }
    }
  }
}