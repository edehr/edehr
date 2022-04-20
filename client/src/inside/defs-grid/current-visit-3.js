export default function () {
  return {
    labRequisitions: {
      pageDataKey: 'labRequisitions',
      pageTitle: 'Lab requisitions',
      pIndex: '24',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'labRequisitions.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labRequisitions.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'labRequisitions.time'
        },
        {
          elementKey: 'urinaryGroup1',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Urinary symptoms',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Increased frequency',
              text: 'Increased frequency'
            },
            {
              key: 'Dysuria',
              text: 'Dysuria'
            },
            {
              key: 'Hermaturia',
              text: 'Hermaturia'
            },
            {
              key: 'Oliguria',
              text: 'Oliguria'
            },
            {
              key: 'Incontinence',
              text: 'Incontinence'
            },
            {
              key: 'Retention',
              text: 'Retention'
            },
            {
              key: 'Distention',
              text: 'Distention'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Urinary symptoms',
          fqn: 'labRequisitions.urinaryGroup1'
        },
        {
          elementKey: 'lastVoidedDay',
          formIndex: '1',
          inputType: 'day',
          label: 'Last voided day',
          tableColumn: '3',
          tableLabel: 'Last voided day',
          fqn: 'labRequisitions.lastVoidedDay'
        },
        {
          elementKey: 'lastVoidedTime',
          formIndex: '1',
          inputType: 'time',
          label: 'Last voided time',
          tableColumn: '4',
          tableLabel: 'Last voided time',
          fqn: 'labRequisitions.lastVoidedTime'
        },
        {
          elementKey: 'colour',
          formIndex: '1',
          inputType: 'select',
          label: 'Urine colour',
          options: [
            {
              key: 'Pale yellow',
              text: 'Pale yellow'
            },
            {
              key: 'Dark yellow',
              text: 'Dark yellow'
            },
            {
              key: 'Amber',
              text: 'Amber'
            },
            {
              key: 'Red/blood',
              text: 'Red/blood'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Urine colour',
          fqn: 'labRequisitions.colour'
        },
        {
          elementKey: 'consistency',
          formIndex: '1',
          inputType: 'select',
          label: 'Urine consistency',
          options: [
            {
              key: 'Clear',
              text: 'Clear'
            },
            {
              key: 'Cloudy',
              text: 'Cloudy'
            },
            {
              key: 'Foamy',
              text: 'Foamy'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Urine consistency',
          fqn: 'labRequisitions.consistency'
        },
        {
          elementKey: 'diaper',
          formIndex: '1',
          helperText: 'Does the patient need the assistance of a brief, condom catheter, or etc.',
          inputType: 'select',
          label: 'Continence containment device',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Continence containment device',
          fqn: 'labRequisitions.diaper',
          helperHtml: '<p>Does the patient need the assistance of a brief, condom catheter, or etc.</p>'
        },
        {
          elementKey: 'toilettingMethod',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Toiletting method',
          options: [
            {
              key: 'Bedpan',
              text: 'Bedpan'
            },
            {
              key: 'Comode',
              text: 'Comode'
            },
            {
              key: 'Urinal',
              text: 'Urinal'
            },
            {
              key: 'Help to the toilet',
              text: 'Help to the toilet'
            },
            {
              key: 'Brief',
              text: 'Brief'
            },
            {
              key: 'Mesh pant/pad',
              text: 'Mesh pant/pad'
            },
            {
              key: 'Clean intermittent catheter',
              text: 'Clean intermittent catheter'
            },
            {
              key: 'Indwelling catheter',
              text: 'Indwelling catheter'
            }
          ],
          tableColumn: '8',
          tableCss: 'hr-table',
          fqn: 'labRequisitions.toilettingMethod'
        },
        {
          elementKey: 'foley',
          formIndex: '1',
          inputType: 'select',
          label: 'Indwelling Catheter',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Indwelling Catheter',
          fqn: 'labRequisitions.foley'
        },
        {
          elementKey: 'foleyType',
          formIndex: '1',
          helperText: 'eg. indwelling catheter',
          inputType: 'text',
          label: 'Type',
          tableColumn: '10',
          tableLabel: 'Type',
          fqn: 'labRequisitions.foleyType',
          helperHtml: '<p>eg. indwelling catheter</p>'
        },
        {
          elementKey: 'foleySize',
          formIndex: '1',
          inputType: 'text',
          label: 'Size',
          tableColumn: '11',
          tableLabel: 'Size',
          fqn: 'labRequisitions.foleySize'
        },
        {
          elementKey: 'lastChange',
          formIndex: '1',
          inputType: 'day',
          label: 'Last catheter change (day)',
          tableColumn: '12',
          tableCss: 'hr-table',
          tableLabel: 'Last catheter change (day)',
          fqn: 'labRequisitions.lastChange'
        },
        {
          elementKey: 'pelvicPain',
          formIndex: '1',
          inputType: 'select',
          label: 'Pelvic pain',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '13',
          tableLabel: 'Pelvic pain',
          fqn: 'labRequisitions.pelvicPain'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '14',
          tableLabel: 'Location',
          fqn: 'labRequisitions.location'
        },
        {
          elementKey: 'pelvicPainSource',
          formIndex: '1',
          inputType: 'select',
          label: 'Pelvic pain source',
          options: [
            {
              key: 'Observed',
              text: 'Observed'
            },
            {
              key: 'As per patient observed',
              text: 'As per patient observed'
            },
            {
              key: 'Not observed',
              text: 'Not observed'
            }
          ],
          tableColumn: '15',
          tableCss: 'hr-table',
          tableLabel: 'Pelvic pain source',
          fqn: 'labRequisitions.pelvicPainSource'
        },
        {
          elementKey: 'aLabel',
          formIndex: '1',
          inputType: 'form_label',
          label: 'If answered yes, please complete the pain assessment',
          fqn: 'labRequisitions.aLabel'
        },
        {
          elementKey: 'discharge',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Discharge',
          options: [
            {
              key: 'Discharge',
              text: 'Discharge'
            },
            {
              key: 'Bleeding',
              text: 'Bleeding'
            }
          ],
          tableColumn: '16',
          tableLabel: 'Discharge',
          fqn: 'labRequisitions.discharge'
        },
        {
          elementKey: 'description',
          formIndex: '1',
          inputType: 'text',
          label: 'Description',
          tableColumn: '17',
          tableLabel: 'Description',
          fqn: 'labRequisitions.description'
        },
        {
          elementKey: 'lastMenstrualPeriodDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Last menstrual period date',
          tableColumn: '18',
          tableCss: 'hr-table',
          tableLabel: 'Last menstrual period date',
          fqn: 'labRequisitions.lastMenstrualPeriodDate'
        },
        {
          elementKey: 'pregnant',
          formIndex: '1',
          inputType: 'select',
          label: 'Pregnant',
          options: [
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            },
            {
              key: 'Unknown',
              text: 'Unknown'
            }
          ],
          tableColumn: '19',
          tableLabel: 'Pregnant',
          fqn: 'labRequisitions.pregnant'
        },
        {
          elementKey: 'gravida',
          formIndex: '1',
          inputType: 'text',
          label: 'Gravida (number of pregnancies)',
          tableColumn: '20',
          tableLabel: 'Gravida (number of pregnancies)',
          fqn: 'labRequisitions.gravida'
        },
        {
          elementKey: 'para',
          formIndex: '1',
          inputType: 'text',
          label: 'Para (number of children)',
          tableColumn: '21',
          tableLabel: 'Para (number of children)',
          fqn: 'labRequisitions.para'
        },
        {
          elementKey: 'livingChildren',
          formIndex: '1',
          inputType: 'text',
          label: 'Living children',
          tableColumn: '22',
          tableCss: 'hr-table',
          tableLabel: 'Living children',
          fqn: 'labRequisitions.livingChildren'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '23',
          tableLabel: 'Comments',
          fqn: 'labRequisitions.comments'
        }
      ],
      generated: '2022-04-20T09:45:13-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a xxx assessment',
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
              label: 'Urinary symptoms',
              ehr_list_index: '2',
              items: [
                'urinaryGroup1'
              ]
            },
            {
              label: 'Last voided day',
              ehr_list_index: '3',
              items: [
                'lastVoidedDay'
              ]
            },
            {
              label: 'Last voided time',
              ehr_list_index: '4',
              items: [
                'lastVoidedTime'
              ]
            },
            {
              label: 'Urine colour',
              ehr_list_index: '5',
              items: [
                'colour'
              ]
            },
            {
              label: 'Urine consistency',
              ehr_list_index: '6',
              items: [
                'consistency'
              ]
            },
            {
              label: 'Continence containment device',
              ehr_list_index: '7',
              items: [
                'diaper'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '8',
              items: [
                'toilettingMethod'
              ]
            },
            {
              label: 'Indwelling Catheter',
              ehr_list_index: '9',
              items: [
                'foley'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '10',
              items: [
                'foleyType'
              ]
            },
            {
              label: 'Size',
              ehr_list_index: '11',
              items: [
                'foleySize'
              ]
            },
            {
              label: 'Last catheter change (day)',
              tableCss: 'hr-table',
              ehr_list_index: '12',
              items: [
                'lastChange'
              ]
            },
            {
              label: 'Pelvic pain',
              ehr_list_index: '13',
              items: [
                'pelvicPain'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '14',
              items: [
                'location'
              ]
            },
            {
              label: 'Pelvic pain source',
              tableCss: 'hr-table',
              ehr_list_index: '15',
              items: [
                'pelvicPainSource'
              ]
            },
            {
              label: 'Discharge',
              ehr_list_index: '16',
              items: [
                'discharge'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '17',
              items: [
                'description'
              ]
            },
            {
              label: 'Last menstrual period date',
              tableCss: 'hr-table',
              ehr_list_index: '18',
              items: [
                'lastMenstrualPeriodDate'
              ]
            },
            {
              label: 'Pregnant',
              ehr_list_index: '19',
              items: [
                'pregnant'
              ]
            },
            {
              label: 'Gravida (number of pregnancies)',
              ehr_list_index: '20',
              items: [
                'gravida'
              ]
            },
            {
              label: 'Para (number of children)',
              ehr_list_index: '21',
              items: [
                'para'
              ]
            },
            {
              label: 'Living children',
              tableCss: 'hr-table',
              ehr_list_index: '22',
              items: [
                'livingChildren'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '23',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a xxx assessment',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group1',
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
                elementKey: 'urinaryGroup2',
                label: 'Urinary',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'urinaryGroup1',
                  'lastVoidedDay',
                  'lastVoidedTime',
                  'colour',
                  'consistency',
                  'diaper',
                  'toilettingMethod'
                ]
              },
              {
                elementKey: 'foleyGroup',
                label: 'Indwelling Catheter',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'foley',
                  'foleyType',
                  'foleySize',
                  'lastChange'
                ]
              },
              {
                elementKey: 'pelvicGroup',
                label: 'Pelvic',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'pelvicPain',
                  'location',
                  'pelvicPainSource',
                  'aLabel'
                ]
              },
              {
                elementKey: 'vaginal',
                label: 'Vagina',
                formCss: 'section-divider',
                gIndex: '5',
                gChildren: [
                  'discharge',
                  'description',
                  'lastMenstrualPeriodDate'
                ]
              },
              {
                elementKey: 'pregnantGroup',
                label: 'Pregnancy',
                formCss: 'section-divider',
                gIndex: '6',
                gChildren: [
                  'pregnant',
                  'gravida',
                  'para',
                  'livingChildren'
                ]
              },
              {
                elementKey: 'ehr_group2',
                formCss: 'grid-left-to-right-1',
                gIndex: '7',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              urinaryGroup1: '',
              lastVoidedDay: '',
              lastVoidedTime: '',
              colour: '',
              consistency: '',
              diaper: '',
              toilettingMethod: '',
              foley: '',
              foleyType: '',
              foleySize: '',
              lastChange: '',
              pelvicPain: '',
              location: '',
              pelvicPainSource: '',
              discharge: '',
              description: '',
              lastMenstrualPeriodDate: '',
              pregnant: '',
              gravida: '',
              para: '',
              livingChildren: '',
              comments: ''
            }
          }
        }
      }
    }
  }
}