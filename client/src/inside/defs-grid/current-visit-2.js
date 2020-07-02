export default function () {
  return {
    genitourinary: {
      pageDataKey: 'genitourinary',
      pageTitle: 'Genitourinary assessment',
      pIndex: '18',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'genitourinary.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'genitourinary.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'genitourinary.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'genitourinary.time'
        },
        {
          elementKey: 'urinaryGroup1',
          assetBase: 'standardized-assessment-tools',
          assetName: 'opqrstuv.pdf',
          dataCaseStudy: 'None',
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
          tableCss: 'hr-table',
          tableLabel: 'Urinary symptoms',
          fqn: 'genitourinary.urinaryGroup1'
        },
        {
          elementKey: 'lastVoidedDay',
          dataCaseStudy: '0',
          formIndex: '1',
          inputType: 'day',
          label: 'Last voided day',
          tableColumn: '3',
          tableLabel: 'Last voided day',
          fqn: 'genitourinary.lastVoidedDay'
        },
        {
          elementKey: 'lastVoidedTime',
          assetBase: 'standardized-assessment-tools',
          assetName: 'consultation-form.pdf',
          dataCaseStudy: '0.666666666666667',
          formIndex: '1',
          inputType: 'time',
          label: 'Last voided time',
          tableColumn: '4',
          tableLabel: 'Last voided time',
          fqn: 'genitourinary.lastVoidedTime'
        },
        {
          elementKey: 'colour',
          dataCaseStudy: 'Pale yellow',
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
          fqn: 'genitourinary.colour'
        },
        {
          elementKey: 'consistency',
          assetBase: 'standardized-assessment-tools',
          assetName: 'copd-assessment-test.pdf',
          dataCaseStudy: 'Clear',
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
          fqn: 'genitourinary.consistency'
        },
        {
          elementKey: 'diaper',
          assetBase: 'standardized-assessment-tools',
          assetName: 'bristol-stool-chart.pdf',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Diaper',
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
          tableCss: 'hr-table',
          tableLabel: 'Diaper',
          fqn: 'genitourinary.diaper'
        },
        {
          elementKey: 'foley',
          assetBase: 'standardized-assessment-tools',
          assetName: 'braden-scale.pdf',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Foley',
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
          tableColumn: '8',
          tableLabel: 'Foley',
          fqn: 'genitourinary.foley'
        },
        {
          elementKey: 'foleyType',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          helperText: 'eg. indwelling catheter',
          inputType: 'text',
          label: 'Type',
          tableColumn: '9',
          tableLabel: 'Type',
          fqn: 'genitourinary.foleyType',
          helperHtml: '<p>eg. indwelling catheter</p>'
        },
        {
          elementKey: 'foleySize',
          assetBase: 'standardized-assessment-tools',
          assetName: 'best_possible_medication.pdf',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'text',
          label: 'Size',
          tableColumn: '10',
          tableLabel: 'Size',
          fqn: 'genitourinary.foleySize'
        },
        {
          elementKey: 'lastChange',
          formIndex: '1',
          inputType: 'day',
          label: 'Last catheter change',
          tableColumn: '11',
          tableCss: 'hr-table',
          tableLabel: 'Last catheter change',
          fqn: 'genitourinary.lastChange'
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
          tableColumn: '12',
          tableLabel: 'Pelvic pain',
          fqn: 'genitourinary.pelvicPain'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '13',
          tableLabel: 'Location',
          fqn: 'genitourinary.location'
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
          tableColumn: '14',
          tableCss: 'hr-table',
          tableLabel: 'Pelvic pain source',
          fqn: 'genitourinary.pelvicPainSource'
        },
        {
          elementKey: 'aLabel',
          formIndex: '1',
          inputType: 'form_label',
          label: 'If answered yes, please complete the pain assessment',
          fqn: 'genitourinary.aLabel'
        },
        {
          elementKey: 'discharge',
          assetBase: '?',
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
          tableColumn: '15',
          tableLabel: 'Discharge',
          fqn: 'genitourinary.discharge'
        },
        {
          elementKey: 'description',
          assetBase: '?',
          formIndex: '1',
          inputType: 'text',
          label: 'Description',
          tableColumn: '16',
          tableLabel: 'Description',
          fqn: 'genitourinary.description'
        },
        {
          elementKey: 'lastMenstrualPeriodDate',
          assetBase: 'static-databases',
          assetName: 'icd-10-medical-diagnosis-codes.pdf',
          formIndex: '1',
          inputType: 'date',
          label: 'Last menstrual period date',
          tableColumn: '17',
          tableCss: 'hr-table',
          tableLabel: 'Last menstrual period date',
          fqn: 'genitourinary.lastMenstrualPeriodDate'
        },
        {
          elementKey: 'pregnant',
          dataCaseStudy: 'no',
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
          tableColumn: '18',
          tableLabel: 'Pregnant',
          fqn: 'genitourinary.pregnant'
        },
        {
          elementKey: 'gravida',
          dataCaseStudy: '5',
          formIndex: '1',
          inputType: 'text',
          label: 'Gravida (number of pregnancies)',
          tableColumn: '19',
          tableLabel: 'Gravida (number of pregnancies)',
          fqn: 'genitourinary.gravida'
        },
        {
          elementKey: 'para',
          dataCaseStudy: '4',
          formIndex: '1',
          inputType: 'text',
          label: 'Para (number of children)',
          tableColumn: '20',
          tableLabel: 'Para (number of children)',
          fqn: 'genitourinary.para'
        },
        {
          elementKey: 'livingChildren',
          dataCaseStudy: '4',
          formIndex: '1',
          inputType: 'text',
          label: 'Living children',
          tableColumn: '21',
          tableCss: 'hr-table',
          tableLabel: 'Living children',
          fqn: 'genitourinary.livingChildren'
        },
        {
          elementKey: 'comments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '22',
          tableLabel: 'Comments',
          fqn: 'genitourinary.comments'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a genitourinary assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Urinary symptoms',
              tableCss: 'hr-table',
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
              label: 'Diaper',
              tableCss: 'hr-table',
              ehr_list_index: '7',
              items: [
                'diaper'
              ]
            },
            {
              label: 'Foley',
              ehr_list_index: '8',
              items: [
                'foley'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '9',
              items: [
                'foleyType'
              ]
            },
            {
              label: 'Size',
              ehr_list_index: '10',
              items: [
                'foleySize'
              ]
            },
            {
              label: 'Last catheter change',
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'lastChange'
              ]
            },
            {
              label: 'Pelvic pain',
              ehr_list_index: '12',
              items: [
                'pelvicPain'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '13',
              items: [
                'location'
              ]
            },
            {
              label: 'Pelvic pain source',
              tableCss: 'hr-table',
              ehr_list_index: '14',
              items: [
                'pelvicPainSource'
              ]
            },
            {
              label: 'Discharge',
              ehr_list_index: '15',
              items: [
                'discharge'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '16',
              items: [
                'description'
              ]
            },
            {
              label: 'Last menstrual period date',
              tableCss: 'hr-table',
              ehr_list_index: '17',
              items: [
                'lastMenstrualPeriodDate'
              ]
            },
            {
              label: 'Pregnant',
              ehr_list_index: '18',
              items: [
                'pregnant'
              ]
            },
            {
              label: 'Gravida (number of pregnancies)',
              ehr_list_index: '19',
              items: [
                'gravida'
              ]
            },
            {
              label: 'Para (number of children)',
              ehr_list_index: '20',
              items: [
                'para'
              ]
            },
            {
              label: 'Living children',
              tableCss: 'hr-table',
              ehr_list_index: '21',
              items: [
                'livingChildren'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '22',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a genitourinary assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group68',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
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
                  'diaper'
                ]
              },
              {
                elementKey: 'foleyGroup',
                label: 'Foley',
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
                label: 'Vaginal',
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
                elementKey: 'ehr_group69',
                formCss: 'grid-left-to-right-1',
                gIndex: '7',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              urinaryGroup1: '',
              lastVoidedDay: '',
              lastVoidedTime: '',
              colour: '',
              consistency: '',
              diaper: '',
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
    },
    musculoskeletal: {
      pageDataKey: 'musculoskeletal',
      pageTitle: 'Musculoskeletal assessment',
      pIndex: '19',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'musculoskeletal.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'musculoskeletal.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'musculoskeletal.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'musculoskeletal.time'
        },
        {
          elementKey: 'swelling',
          dataCaseStudy: 'Absent',
          formIndex: '1',
          inputType: 'select',
          label: 'Swelling',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Swelling',
          fqn: 'musculoskeletal.swelling'
        },
        {
          elementKey: 'pain',
          dataCaseStudy: 'Absent',
          formIndex: '1',
          inputType: 'select',
          label: 'Pain',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '3',
          tableLabel: 'Pain',
          fqn: 'musculoskeletal.pain'
        },
        {
          elementKey: 'deformity',
          dataCaseStudy: 'Absent',
          formIndex: '1',
          inputType: 'select',
          label: 'Deformity',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Deformity',
          fqn: 'musculoskeletal.deformity'
        },
        {
          elementKey: 'movement',
          dataCaseStudy: 'Normal',
          formIndex: '1',
          inputType: 'select',
          label: 'Movement',
          options: [
            {
              key: 'Normal',
              text: 'Normal'
            },
            {
              key: 'Decreased',
              text: 'Decreased'
            },
            {
              key: 'Absent',
              text: 'Absent'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Movement',
          fqn: 'musculoskeletal.movement'
        },
        {
          elementKey: 'sensation',
          dataCaseStudy: 'Present',
          formIndex: '1',
          inputType: 'select',
          label: 'Sensation',
          options: [
            {
              key: 'Present',
              text: 'Present'
            },
            {
              key: 'Absent',
              text: 'Absent'
            },
            {
              key: 'Numb',
              text: 'Numb'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Sensation',
          fqn: 'musculoskeletal.sensation'
        },
        {
          elementKey: 'pulse',
          dataCaseStudy: 'Moderate',
          formIndex: '1',
          inputType: 'select',
          label: 'Pulse',
          options: [
            {
              key: 'Absent',
              text: 'Absent'
            },
            {
              key: 'Weak',
              text: 'Weak'
            },
            {
              key: 'Moderate',
              text: 'Moderate'
            },
            {
              key: 'Strong',
              text: 'Strong'
            },
            {
              key: 'Bounding',
              text: 'Bounding'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Pulse',
          fqn: 'musculoskeletal.pulse'
        },
        {
          elementKey: 'colour',
          dataCaseStudy: 'Flesh',
          formIndex: '1',
          inputType: 'select',
          label: 'Colour',
          options: [
            {
              key: 'Flesh',
              text: 'Flesh'
            },
            {
              key: 'Pale',
              text: 'Pale'
            },
            {
              key: 'Cynanotic',
              text: 'Cynanotic'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Colour',
          fqn: 'musculoskeletal.colour'
        },
        {
          elementKey: 'temp',
          assetBase: '?',
          dataCaseStudy: 'Warm',
          formIndex: '1',
          inputType: 'select',
          label: 'Temp',
          options: [
            {
              key: 'Hot',
              text: 'Hot'
            },
            {
              key: 'Warm',
              text: 'Warm'
            },
            {
              key: 'Cold',
              text: 'Cold'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Temp',
          fqn: 'musculoskeletal.temp'
        },
        {
          elementKey: 'spacer72',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'musculoskeletal.spacer72'
        },
        {
          elementKey: 'useOfAmbulatoryAid',
          assetBase: '?',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Use of ambulatory aid',
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
          tableColumn: '10',
          tableLabel: 'Use of ambulatory aid',
          fqn: 'musculoskeletal.useOfAmbulatoryAid'
        },
        {
          elementKey: 'type',
          assetBase: '?',
          dataCaseStudy: '(none selected)',
          formIndex: '1',
          inputType: 'select',
          label: 'Type',
          options: [
            {
              key: 'Walker',
              text: 'Walker'
            },
            {
              key: 'Cane',
              text: 'Cane'
            },
            {
              key: 'One crutch',
              text: 'One crutch'
            },
            {
              key: 'Two crutches',
              text: 'Two crutches'
            },
            {
              key: 'Wheelchair',
              text: 'Wheelchair'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '11',
          tableCss: 'hr-table',
          tableLabel: 'Type',
          fqn: 'musculoskeletal.type'
        },
        {
          elementKey: 'comments',
          assetBase: '?',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '12',
          tableLabel: 'Comments',
          fqn: 'musculoskeletal.comments'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a musculoskeletal assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Swelling',
              ehr_list_index: '2',
              items: [
                'swelling'
              ]
            },
            {
              label: 'Pain',
              ehr_list_index: '3',
              items: [
                'pain'
              ]
            },
            {
              label: 'Deformity',
              ehr_list_index: '4',
              items: [
                'deformity'
              ]
            },
            {
              label: 'Movement',
              ehr_list_index: '5',
              items: [
                'movement'
              ]
            },
            {
              label: 'Sensation',
              ehr_list_index: '6',
              items: [
                'sensation'
              ]
            },
            {
              label: 'Pulse',
              ehr_list_index: '7',
              items: [
                'pulse'
              ]
            },
            {
              label: 'Colour',
              ehr_list_index: '8',
              items: [
                'colour'
              ]
            },
            {
              label: 'Temp',
              ehr_list_index: '9',
              items: [
                'temp'
              ]
            },
            {
              label: 'Use of ambulatory aid',
              ehr_list_index: '10',
              items: [
                'useOfAmbulatoryAid'
              ]
            },
            {
              label: 'Type',
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'type'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '12',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a musculoskeletal assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group70',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group71',
                gIndex: '2',
                gChildren: [
                  'swelling',
                  'pain',
                  'deformity',
                  'movement',
                  'sensation',
                  'pulse',
                  'colour',
                  'temp',
                  'spacer72',
                  'useOfAmbulatoryAid',
                  'type'
                ]
              },
              {
                elementKey: 'ehr_group73',
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              swelling: '',
              pain: '',
              deformity: '',
              movement: '',
              sensation: '',
              pulse: '',
              colour: '',
              temp: '',
              useOfAmbulatoryAid: '',
              type: '',
              comments: ''
            }
          }
        }
      }
    },
    pain: {
      pageDataKey: 'pain',
      pageTitle: 'Pain assessment',
      pIndex: '20',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'pain.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'pain.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'pain.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'pain.time'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '2',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          dataCaseStudy: '0',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain intensity (0-10)',
          suffix: '/10',
          tableColumn: '3',
          tableLabel: 'Pain intensity (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          dataCaseStudy: '28',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate',
          suffix: 'br/min',
          tableColumn: '4',
          tableLabel: 'Respiratory rate',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '5',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '6',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '7',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '8',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '9',
          tableCss: 'hr-table',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '10',
          tableCss: 'hr-table',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '12',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain intensity (0-10)',
          suffix: '/10',
          tableColumn: '13',
          tableLabel: 'Pain intensity (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate',
          suffix: 'br/min',
          tableColumn: '14',
          tableLabel: 'Respiratory rate',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '15',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '16',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '17',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '18',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '19',
          tableCss: 'hr-table',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '20',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a pain assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '2',
              items: [
                'location'
              ]
            },
            {
              label: 'Pain intensity (0-10)',
              ehr_list_index: '3',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate',
              ehr_list_index: '4',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '5',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '6',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '7',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '8',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              tableCss: 'hr-table',
              ehr_list_index: '9',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              tableCss: 'hr-table',
              ehr_list_index: '10',
              items: [
                'comments'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '12',
              items: [
                'location'
              ]
            },
            {
              label: 'Pain intensity (0-10)',
              ehr_list_index: '13',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate',
              ehr_list_index: '14',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '15',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '16',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '17',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '18',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              tableCss: 'hr-table',
              ehr_list_index: '19',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '20',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a pain assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group86',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group87',
                label: 'Primary pain site',
                gIndex: '2',
                gChildren: [
                  'location',
                  'painScale',
                  'respiratoryRate',
                  'onset',
                  'type',
                  'alleviationAssociatedSymptoms',
                  'radiation',
                  'precipitatingEvents'
                ]
              },
              {
                elementKey: 'ehr_group88',
                formCss: 'grid-left-to-right-1 section-divider',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              },
              {
                elementKey: 'ehr_group89',
                label: 'Secondary pain site',
                gIndex: '4',
                gChildren: [
                  'location',
                  'painScale',
                  'respiratoryRate',
                  'onset',
                  'type',
                  'alleviationAssociatedSymptoms',
                  'radiation',
                  'precipitatingEvents'
                ]
              },
              {
                elementKey: 'ehr_group90',
                formCss: 'grid-left-to-right-1',
                gIndex: '5',
                gChildren: [
                  'comments'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              location: '',
              painScale: '',
              respiratoryRate: '',
              onset: '',
              type: '',
              alleviationAssociatedSymptoms: '',
              radiation: '',
              precipitatingEvents: '',
              comments: ''
            }
          }
        }
      }
    },
    biopsychosocial: {
      pageDataKey: 'biopsychosocial',
      pageTitle: 'Biopsychosocial assessment',
      pIndex: '21',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'biopsychosocial.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'biopsychosocial.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'biopsychosocial.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'biopsychosocial.time'
        },
        {
          elementKey: 'domesticViolence',
          dataCaseStudy: 'no',
          formIndex: '1',
          inputType: 'select',
          label: 'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
          options: [
            {
              key: 'Didn\'t ask',
              text: 'Didn\'t ask'
            },
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Domestic violence?',
          fqn: 'biopsychosocial.domesticViolence'
        },
        {
          elementKey: 'requestContact',
          dataCaseStudy: 'no',
          formIndex: '1',
          inputType: 'select',
          label: 'Would you like to speak to a social worker?',
          options: [
            {
              key: 'Didn\'t ask',
              text: 'Didn\'t ask'
            },
            {
              key: 'Yes',
              text: 'Yes'
            },
            {
              key: 'No',
              text: 'No'
            }
          ],
          tableColumn: '3',
          tableCss: 'hr-table',
          tableLabel: 'Social worker?',
          fqn: 'biopsychosocial.requestContact'
        },
        {
          elementKey: 'hygieneGrooming',
          dataCaseStudy: 'Good',
          formIndex: '1',
          inputType: 'select',
          label: 'Hygiene',
          options: [
            {
              key: 'Good',
              text: 'Good'
            },
            {
              key: 'Requires attention',
              text: 'Requires attention'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Hygiene',
          fqn: 'biopsychosocial.hygieneGrooming'
        },
        {
          elementKey: 'hygieneComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Hygiene comments',
          tableColumn: '5',
          tableCss: 'hr-table',
          tableLabel: 'Hygiene comments',
          fqn: 'biopsychosocial.hygieneComments'
        },
        {
          elementKey: 'behaviour',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Behaviour',
          options: [
            {
              key: 'Calm',
              text: 'Calm'
            },
            {
              key: 'Cooperative',
              text: 'Cooperative'
            },
            {
              key: 'Agitated',
              text: 'Agitated'
            },
            {
              key: 'Flat affect',
              text: 'Flat affect'
            },
            {
              key: 'Threatening',
              text: 'Threatening'
            },
            {
              key: 'Physically agressive',
              text: 'Physically agressive'
            },
            {
              key: 'Uncommunicative',
              text: 'Uncommunicative'
            }
          ],
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'Behaviour',
          fqn: 'biopsychosocial.behaviour'
        },
        {
          elementKey: 'hallucinations',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Hallucinations',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Visual',
              text: 'Visual'
            },
            {
              key: 'Auditory',
              text: 'Auditory'
            },
            {
              key: 'Olafactory',
              text: 'Olafactory'
            }
          ],
          tableColumn: '7',
          tableCss: 'hr-table',
          tableLabel: 'Behaviour',
          fqn: 'biopsychosocial.hallucinations'
        },
        {
          elementKey: 'suicidal',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'select',
          label: 'Suicidal',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Ideation',
              text: 'Ideation'
            },
            {
              key: 'Attempt',
              text: 'Attempt'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Psychological state',
          fqn: 'biopsychosocial.suicidal'
        },
        {
          elementKey: 'homicidal',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'select',
          label: 'Homicidal',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Ideation',
              text: 'Ideation'
            }
          ],
          tableColumn: '9',
          fqn: 'biopsychosocial.homicidal'
        },
        {
          elementKey: 'speech',
          dataCaseStudy: 'Clear and coherent',
          formIndex: '1',
          inputType: 'select',
          label: 'Speech',
          options: [
            {
              key: 'Clear and coherent',
              text: 'Clear and coherent'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '10',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.speech'
        },
        {
          elementKey: 'supportPerson',
          dataCaseStudy: 'Thomas',
          formIndex: '1',
          inputType: 'text',
          label: 'Support person',
          tableColumn: '11',
          tableLabel: 'Support',
          fqn: 'biopsychosocial.supportPerson'
        },
        {
          elementKey: 'supportComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Support comments',
          tableColumn: '12',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.supportComments'
        },
        {
          elementKey: 'securityPolicePresent',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'text',
          label: 'Security/police present',
          tableColumn: '13',
          tableLabel: 'Security',
          fqn: 'biopsychosocial.securityPolicePresent'
        },
        {
          elementKey: 'securityComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Security comments',
          tableColumn: '14',
          tableCss: 'hr-table',
          fqn: 'biopsychosocial.securityComments'
        },
        {
          elementKey: 'patientRestrained',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'select',
          label: 'Patient restrained',
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
          tableColumn: '15',
          tableLabel: 'Patient restrained',
          fqn: 'biopsychosocial.patientRestrained'
        },
        {
          elementKey: 'restraintDay',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '16',
          tableLabel: 'Day',
          fqn: 'biopsychosocial.restraintDay'
        },
        {
          elementKey: 'restraintTime',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '17',
          tableLabel: 'Time',
          fqn: 'biopsychosocial.restraintTime'
        },
        {
          elementKey: 'restraintComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Restraint comments',
          tableColumn: '18',
          tableCss: 'hr-table',
          tableLabel: 'Restraint comments',
          fqn: 'biopsychosocial.restraintComments'
        },
        {
          elementKey: 'generalComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '19',
          tableLabel: 'General comments',
          fqn: 'biopsychosocial.generalComments'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a biopsychosocial assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Domestic violence?',
              ehr_list_index: '2',
              items: [
                'domesticViolence'
              ]
            },
            {
              label: 'Social worker?',
              tableCss: 'hr-table',
              ehr_list_index: '3',
              items: [
                'requestContact'
              ]
            },
            {
              label: 'Hygiene',
              ehr_list_index: '4',
              items: [
                'hygieneGrooming'
              ]
            },
            {
              label: 'Hygiene comments',
              tableCss: 'hr-table',
              ehr_list_index: '5',
              items: [
                'hygieneComments'
              ]
            },
            {
              label: 'Behaviour',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'behaviour'
              ]
            },
            {
              label: 'Behaviour',
              tableCss: 'hr-table',
              ehr_list_index: '7',
              items: [
                'hallucinations'
              ]
            },
            {
              label: 'Psychological state',
              ehr_list_index: '8',
              items: [
                'suicidal'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'homicidal'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '10',
              items: [
                'speech'
              ]
            },
            {
              label: 'Support',
              ehr_list_index: '11',
              items: [
                'supportPerson'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '12',
              items: [
                'supportComments'
              ]
            },
            {
              label: 'Security',
              ehr_list_index: '13',
              items: [
                'securityPolicePresent'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '14',
              items: [
                'securityComments'
              ]
            },
            {
              label: 'Patient restrained',
              ehr_list_index: '15',
              items: [
                'patientRestrained'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '16',
              items: [
                'restraintDay'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '17',
              items: [
                'restraintTime'
              ]
            },
            {
              label: 'Restraint comments',
              tableCss: 'hr-table',
              ehr_list_index: '18',
              items: [
                'restraintComments'
              ]
            },
            {
              label: 'General comments',
              ehr_list_index: '19',
              items: [
                'generalComments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a biopsychosocial assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group91',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group92',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'domesticViolence',
                  'requestContact'
                ]
              },
              {
                elementKey: 'ehr_group93',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'hygieneGrooming',
                  'hygieneComments'
                ]
              },
              {
                elementKey: 'ehr_group94',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'behaviour',
                  'hallucinations'
                ]
              },
              {
                elementKey: 'state',
                label: 'Psychological state',
                gIndex: '5',
                gChildren: [
                  'suicidal',
                  'homicidal',
                  'speech'
                ]
              },
              {
                elementKey: 'support',
                label: 'Support',
                gIndex: '6',
                gChildren: [
                  'supportPerson',
                  'supportComments'
                ]
              },
              {
                elementKey: 'security',
                label: 'Security',
                gIndex: '7',
                gChildren: [
                  'securityPolicePresent',
                  'securityComments'
                ]
              },
              {
                elementKey: 'restraint',
                label: 'Restraint',
                gIndex: '8',
                gChildren: [
                  'patientRestrained',
                  'restraintDay',
                  'restraintTime',
                  'restraintComments'
                ]
              },
              {
                elementKey: 'ehr_group95',
                formCss: 'grid-left-to-right-1',
                gIndex: '9',
                gChildren: [
                  'generalComments'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              domesticViolence: '',
              requestContact: '',
              hygieneGrooming: '',
              hygieneComments: '',
              behaviour: '',
              hallucinations: '',
              suicidal: '',
              homicidal: '',
              speech: '',
              supportPerson: '',
              supportComments: '',
              securityPolicePresent: '',
              securityComments: '',
              patientRestrained: '',
              restraintDay: '',
              restraintTime: '',
              restraintComments: '',
              generalComments: ''
            }
          }
        }
      }
    },
    nonmedOrders: {
      pageDataKey: 'nonmedOrders',
      pageTitle: 'Orders',
      pIndex: '22',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'nonmedOrders.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'nonmedOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'nonmedOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'nonmedOrders.time'
        },
        {
          elementKey: 'order',
          dataCaseStudy: '1) Chest xray-NL-2) ABG-NL-3) CBC, electrolytes, BUN, creatine-NL-4) Spirometry',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Order',
          tableColumn: '2',
          tableLabel: 'Order',
          fqn: 'nonmedOrders.order'
        },
        {
          elementKey: 'orderedBy',
          dataCaseStudy: '1 - 4) Dr. Singh',
          formIndex: '1',
          inputType: 'text',
          label: 'Ordered by',
          mandatory: 'If order is filled, this is mandatory',
          tableColumn: '3',
          tableLabel: 'Ordered by',
          fqn: 'nonmedOrders.orderedBy'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '4',
          tableLabel: 'Reason',
          fqn: 'nonmedOrders.reason'
        },
        {
          elementKey: 'status',
          dataCaseStudy: '1 - 4) Ordered',
          formIndex: '1',
          inputType: 'select',
          label: 'Status',
          mandatory: '?',
          options: [
            {
              key: 'Ordered',
              text: 'Ordered'
            },
            {
              key: 'In process',
              text: 'In process'
            },
            {
              key: 'Cancelled',
              text: 'Cancelled'
            },
            {
              key: 'Completed',
              text: 'Completed'
            },
            {
              key: 'Discontinued',
              text: 'Discontinued'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Status',
          fqn: 'nonmedOrders.status'
        },
        {
          elementKey: 'comment',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comment',
          tableColumn: '6',
          tableLabel: 'Comment',
          fqn: 'nonmedOrders.comment'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an order',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Order',
              ehr_list_index: '2',
              items: [
                'order'
              ]
            },
            {
              label: 'Ordered by',
              ehr_list_index: '3',
              items: [
                'orderedBy'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '4',
              items: [
                'reason'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '5',
              items: [
                'status'
              ]
            },
            {
              label: 'Comment',
              ehr_list_index: '6',
              items: [
                'comment'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an order',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group96',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group97',
                gIndex: '2',
                gChildren: [
                  'order',
                  'orderedBy',
                  'reason',
                  'status'
                ]
              },
              {
                elementKey: 'ehr_group98',
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
                gChildren: [
                  'comment'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              order: '',
              orderedBy: '',
              reason: '',
              status: '',
              comment: ''
            }
          }
        }
      }
    },
    referrals: {
      pageDataKey: 'referrals',
      pageTitle: 'Referrals to other disciplines',
      pIndex: '23',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'referrals.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'referrals.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'referrals.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'referrals.time'
        },
        {
          elementKey: 'referralName',
          dataCaseStudy: 'Matt',
          formIndex: '1',
          inputType: 'text',
          label: 'Referral name',
          tableColumn: '2',
          tableLabel: 'Referral name',
          fqn: 'referrals.referralName'
        },
        {
          elementKey: 'referralProfession',
          dataCaseStudy: 'Resp therapy',
          formIndex: '1',
          inputType: 'text',
          label: 'Referral profession',
          tableColumn: '3',
          tableLabel: 'Referral profession',
          fqn: 'referrals.referralProfession'
        },
        {
          elementKey: 'spacer101',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'referrals.spacer101'
        },
        {
          elementKey: 'appointmentDate',
          dataCaseStudy: '0',
          formIndex: '1',
          inputType: 'date',
          label: 'Appointment date',
          tableColumn: '4',
          tableLabel: 'Appointment date',
          fqn: 'referrals.appointmentDate'
        },
        {
          elementKey: 'appointmentTime',
          dataCaseStudy: '0.833333333333333',
          formIndex: '1',
          inputType: 'time',
          label: 'Appointment time',
          tableColumn: '5',
          tableLabel: 'Appointment time',
          fqn: 'referrals.appointmentTime'
        },
        {
          elementKey: 'status',
          dataCaseStudy: 'Active',
          formIndex: '1',
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
          tableColumn: '6',
          tableLabel: 'Status',
          fqn: 'referrals.status'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a referral',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Referral name',
              ehr_list_index: '2',
              items: [
                'referralName'
              ]
            },
            {
              label: 'Referral profession',
              ehr_list_index: '3',
              items: [
                'referralProfession'
              ]
            },
            {
              label: 'Appointment date',
              ehr_list_index: '4',
              items: [
                'appointmentDate'
              ]
            },
            {
              label: 'Appointment time',
              ehr_list_index: '5',
              items: [
                'appointmentTime'
              ]
            },
            {
              label: 'Status',
              ehr_list_index: '6',
              items: [
                'status'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a referral',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group99',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group100',
                gIndex: '2',
                gChildren: [
                  'referralName',
                  'referralProfession',
                  'spacer101',
                  'appointmentDate',
                  'appointmentTime',
                  'status'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              referralName: '',
              referralProfession: '',
              appointmentDate: '',
              appointmentTime: '',
              status: ''
            }
          }
        }
      }
    },
    labRequisitions: {
      pageDataKey: 'labRequisitions',
      pageTitle: 'Lab requisitions',
      pIndex: '24',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'labRequisitions.persona'
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
          elementKey: 'requisition',
          assetBase: 'requisitions',
          dataCaseStudy: 'lab-requisition-form.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Lab requisition',
          tableColumn: '2',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'requisition',
          assetBase: 'requisitions',
          dataCaseStudy: 'medical-imaging-requisition.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Medical imaging requisition',
          tableColumn: '3',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'spacer104',
          formIndex: '1',
          inputType: 'spacer',
          tableColumn: '4',
          fqn: 'labRequisitions.spacer104'
        },
        {
          elementKey: 'ordered',
          formIndex: '1',
          inputType: 'day',
          label: 'Ordered day',
          tableColumn: '5',
          tableLabel: 'Ordered day',
          fqn: 'labRequisitions.ordered'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a lab requisition',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'requisition'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'requisition'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'spacer104'
              ]
            },
            {
              label: 'Ordered day',
              ehr_list_index: '5',
              items: [
                'ordered'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a lab requisition',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group102',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group103',
                gIndex: '2',
                gChildren: [
                  'requisition',
                  'requisition',
                  'spacer104',
                  'ordered'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              ordered: ''
            }
          }
        }
      }
    },
    medicationOrders: {
      pageDataKey: 'medicationOrders',
      pageTitle: 'Medication orders',
      pIndex: '25',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'medicationOrders.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicationOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicationOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'medicationOrders.time'
        },
        {
          elementKey: 'medication',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'lookahead',
          label: '<a href=\'/assets/static-databases/drug.txt\' target=\'_blank\'>Medication</a>',
          tableColumn: '2',
          tableLabel: 'Medication',
          fqn: 'medicationOrders.medication'
        },
        {
          elementKey: 'dose',
          formIndex: '1',
          inputType: 'text',
          label: 'Dose',
          tableColumn: '3',
          tableLabel: 'Dose',
          fqn: 'medicationOrders.dose'
        },
        {
          elementKey: 'route',
          formIndex: '1',
          inputType: 'select',
          label: 'Route',
          options: [
            {
              key: 'Oral',
              text: 'Oral'
            },
            {
              key: 'Sublingual',
              text: 'Sublingual'
            },
            {
              key: 'Inhalation',
              text: 'Inhalation'
            },
            {
              key: 'Nasal',
              text: 'Nasal'
            },
            {
              key: 'Rectal',
              text: 'Rectal'
            },
            {
              key: 'Vaginal',
              text: 'Vaginal'
            },
            {
              key: 'Intravenous',
              text: 'Intravenous'
            },
            {
              key: 'Intramuscular',
              text: 'Intramuscular'
            },
            {
              key: 'Subcutaneous',
              text: 'Subcutaneous'
            }
          ],
          tableColumn: '4',
          tableLabel: 'Route',
          fqn: 'medicationOrders.route'
        },
        {
          elementKey: 'startMeds',
          formIndex: '1',
          inputType: 'day',
          label: 'Start day',
          tableColumn: '5',
          tableLabel: 'Start day',
          fqn: 'medicationOrders.startMeds'
        },
        {
          elementKey: 'endMeds',
          formIndex: '1',
          inputType: 'day',
          label: 'End day',
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'End day',
          fqn: 'medicationOrders.endMeds'
        },
        {
          elementKey: 'administration',
          defaultValue: 'sched',
          formIndex: '1',
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
            },
            {
              key: 'od',
              text: 'OD (Once a Day)'
            }
          ],
          tableColumn: '7',
          tableLabel: 'Administration',
          fqn: 'medicationOrders.administration'
        },
        {
          elementKey: 'scheduled',
          formIndex: '1',
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
          fqn: 'medicationOrders.scheduled'
        },
        {
          elementKey: 'prn1',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 1',
          tableColumn: '10',
          validation: 'time24',
          fqn: 'medicationOrders.prn1'
        },
        {
          elementKey: 'prn2',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 2',
          tableColumn: '11',
          validation: 'time24',
          fqn: 'medicationOrders.prn2'
        },
        {
          elementKey: 'prn3',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 3',
          tableColumn: '12',
          validation: 'time24',
          fqn: 'medicationOrders.prn3'
        },
        {
          elementKey: 'prn4',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 4',
          tableColumn: '13',
          validation: 'time24',
          fqn: 'medicationOrders.prn4'
        },
        {
          elementKey: 'prn5',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 5',
          tableColumn: '14',
          validation: 'time24',
          fqn: 'medicationOrders.prn5'
        },
        {
          elementKey: 'prn6',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 6',
          tableColumn: '15',
          validation: 'time24',
          fqn: 'medicationOrders.prn6'
        },
        {
          elementKey: 'once',
          formIndex: '1',
          inputType: 'text',
          label: 'Once',
          tableColumn: '10',
          fqn: 'medicationOrders.once'
        },
        {
          elementKey: 'stat',
          formIndex: '1',
          inputType: 'text',
          label: 'Stat',
          tableColumn: '10',
          fqn: 'medicationOrders.stat'
        },
        {
          elementKey: 'instructions',
          formIndex: '1',
          inputType: 'text',
          label: 'Instructions',
          tableColumn: '16',
          tableLabel: 'Instructions',
          fqn: 'medicationOrders.instructions'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '17',
          tableLabel: 'Reason',
          fqn: 'medicationOrders.reason'
        },
        {
          elementKey: 'notes',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Notes',
          tableColumn: '18',
          tableLabel: 'Notes',
          fqn: 'medicationOrders.notes'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a medication order',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Medication',
              ehr_list_index: '2',
              items: [
                'medication'
              ]
            },
            {
              label: 'Dose',
              ehr_list_index: '3',
              items: [
                'dose'
              ]
            },
            {
              label: 'Route',
              ehr_list_index: '4',
              items: [
                'route'
              ]
            },
            {
              label: 'Start day',
              ehr_list_index: '5',
              items: [
                'startMeds'
              ]
            },
            {
              label: 'End day',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'endMeds'
              ]
            },
            {
              label: 'Administration',
              ehr_list_index: '7',
              items: [
                'administration'
              ]
            },
            {
              label: 'Scheduled',
              ehr_list_index: '9',
              items: [
                'scheduled'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'prn1',
                'once',
                'stat'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'prn2'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'prn3'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'prn4'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'prn5'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'prn6'
              ]
            },
            {
              label: 'Instructions',
              ehr_list_index: '16',
              items: [
                'instructions'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '17',
              items: [
                'reason'
              ]
            },
            {
              label: 'Notes',
              ehr_list_index: '18',
              items: [
                'notes'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a medication order',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group105',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group106',
                gIndex: '2',
                gChildren: [
                  'medication',
                  'dose',
                  'route',
                  'startMeds',
                  'endMeds'
                ]
              },
              {
                elementKey: 'adminGroup',
                gIndex: '3',
                gChildren: [
                  'administration'
                ]
              },
              {
                elementKey: 'schedGroup',
                dependentOn: 'visble:administration=sched',
                gIndex: '4',
                gChildren: [
                  'scheduled'
                ]
              },
              {
                elementKey: 'prnGroup',
                dependentOn: 'visble:administration=prn',
                gIndex: '5',
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
                elementKey: 'onceGroup',
                dependentOn: 'visble:administration=once',
                gIndex: '6',
                gChildren: [
                  'once'
                ]
              },
              {
                elementKey: 'statGroup',
                dependentOn: 'visble:administration=stat',
                gIndex: '7',
                gChildren: [
                  'stat'
                ]
              },
              {
                elementKey: 'ehr_group107',
                gIndex: '8',
                gChildren: [
                  'instructions',
                  'reason',
                  'notes'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              medication: '',
              dose: '',
              route: '',
              startMeds: '',
              endMeds: '',
              administration: 'sched',
              scheduled: '',
              prn1: '',
              prn2: '',
              prn3: '',
              prn4: '',
              prn5: '',
              prn6: '',
              once: '',
              stat: '',
              instructions: '',
              reason: '',
              notes: ''
            }
          }
        }
      }
    },
    medAdminRec: {
      pageDataKey: 'medAdminRec',
      pageTitle: 'Medication administration records',
      pIndex: '26',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'medStatus',
          formIndex: '1',
          inputType: 'select',
          label: 'Medication status',
          options: [
            {
              key: 'Active',
              text: 'Active'
            },
            {
              key: 'Hold',
              text: 'Hold'
            },
            {
              key: 'Discontinued',
              text: 'Discontinued'
            },
            {
              key: '',
              text: ''
            }
          ],
          tableColumn: '1',
          tableLabel: 'Medication status',
          fqn: 'medAdminRec.medStatus'
        },
        {
          elementKey: 'adminStatus',
          formIndex: '1',
          inputType: 'select',
          label: 'Administration status',
          options: [
            {
              key: 'Administered',
              text: 'Administered'
            },
            {
              key: 'Refused',
              text: 'Refused'
            },
            {
              key: 'Missed',
              text: 'Missed'
            },
            {
              key: 'Skipped',
              text: 'Skipped'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Administration status',
          fqn: 'medAdminRec.adminStatus'
        },
        {
          elementKey: 'medication',
          formIndex: '1',
          inputType: 'text',
          label: 'Medication',
          tableColumn: '3',
          tableLabel: 'Medication',
          fqn: 'medAdminRec.medication'
        },
        {
          elementKey: 'route',
          formIndex: '1',
          inputType: 'text',
          label: 'Route',
          tableColumn: '4',
          tableLabel: 'Route',
          fqn: 'medAdminRec.route'
        },
        {
          elementKey: 'todayPlan',
          formIndex: '1',
          inputType: 'text',
          label: 'Today\'s plan',
          options: [
            {
              key: '[Today\'s day] plan',
              text: '[Today\'s day] plan'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Today\'s plan',
          fqn: 'medAdminRec.todayPlan'
        },
        {
          elementKey: 'todayGiven',
          formIndex: '1',
          inputType: 'text',
          label: 'Today\'s given',
          options: [
            {
              key: '[Today\'s day] given',
              text: '[Today\'s day] given'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Today\'s given',
          fqn: 'medAdminRec.todayGiven'
        },
        {
          elementKey: 'administeredBy',
          formIndex: '1',
          inputType: 'text',
          label: 'Administered by',
          tableColumn: '7',
          tableLabel: 'Administered by',
          fqn: 'medAdminRec.administeredBy'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '8',
          tableLabel: 'Profession',
          fqn: 'medAdminRec.profession'
        },
        {
          elementKey: 'administeredTime',
          formIndex: '1',
          helperText: 'Enter time delivered or say if not delivered.',
          inputType: 'text',
          label: 'Administered time',
          tableColumn: '9',
          tableLabel: 'Administered time',
          fqn: 'medAdminRec.administeredTime',
          helperHtml: '<p>Enter time delivered or say if not delivered.</p>'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Administered',
          ehr_list: [
            {
              label: 'Medication status',
              ehr_list_index: '1',
              items: [
                'medStatus'
              ]
            },
            {
              label: 'Administration status',
              ehr_list_index: '2',
              items: [
                'adminStatus'
              ]
            },
            {
              label: 'Medication',
              ehr_list_index: '3',
              items: [
                'medication'
              ]
            },
            {
              label: 'Route',
              ehr_list_index: '4',
              items: [
                'route'
              ]
            },
            {
              label: 'Today\'s plan',
              ehr_list_index: '5',
              items: [
                'todayPlan'
              ]
            },
            {
              label: 'Today\'s given',
              ehr_list_index: '6',
              items: [
                'todayGiven'
              ]
            },
            {
              label: 'Administered by',
              ehr_list_index: '7',
              items: [
                'administeredBy'
              ]
            },
            {
              label: 'Profession',
              ehr_list_index: '8',
              items: [
                'profession'
              ]
            },
            {
              label: 'Administered time',
              ehr_list_index: '9',
              items: [
                'administeredTime'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Administered',
            formOption: 'customCode',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group108',
                gIndex: '1',
                gChildren: [
                  'medStatus',
                  'adminStatus',
                  'medication',
                  'route',
                  'todayPlan',
                  'todayGiven',
                  'administeredBy',
                  'profession',
                  'administeredTime'
                ]
              }
            ],
            ehr_data: {
              medStatus: '',
              adminStatus: '',
              medication: '',
              route: '',
              todayPlan: '',
              todayGiven: '',
              administeredBy: '',
              profession: '',
              administeredTime: ''
            }
          }
        }
      }
    },
    dischargeSummary: {
      pageDataKey: 'dischargeSummary',
      pageTitle: 'Discharge summary',
      pIndex: '27',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'admissionDay',
          defaultValue: 'Day 0',
          formIndex: '1',
          inputType: 'text',
          label: 'Admission day',
          fqn: 'dischargeSummary.admissionDay'
        },
        {
          elementKey: 'dischargingPhysician/np',
          formIndex: '1',
          inputType: 'select',
          label: 'Discharging physician/NP',
          options: [
            {
              key: 'Dr. Notley',
              text: 'Dr. Notley'
            },
            {
              key: 'Dr. Hunicutt',
              text: 'Dr. Hunicutt'
            },
            {
              key: 'Dr. Lee',
              text: 'Dr. Lee'
            },
            {
              key: 'Dr. Malik',
              text: 'Dr. Malik'
            },
            {
              key: 'Dr. Ng',
              text: 'Dr. Ng'
            },
            {
              key: 'Dr. Walker',
              text: 'Dr. Walker'
            },
            {
              key: 'Dr. Brooks',
              text: 'Dr. Brooks'
            }
          ],
          fqn: 'dischargeSummary.dischargingPhysician/np'
        },
        {
          elementKey: 'spacer110',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'dischargeSummary.spacer110'
        },
        {
          elementKey: 'clinicalSummary',
          dataCaseStudy: 'Patient arrived with chronic COPD in acute form-NL-Previously diagnosed with hypertension-NL-Developed bilateral gram positive cocci pneunoma (what kind of cocci? Need a lab report)-NL-Treated with intravenous antibiotics and responded well',
          formIndex: '1',
          formCss: 'grid-span-2-columns section-divider',
          inputType: 'textarea',
          label: 'Clinical summary',
          fqn: 'dischargeSummary.clinicalSummary'
        },
        {
          elementKey: 'dischargeDiagnosis',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Discharge diagnosis',
          fqn: 'dischargeSummary.dischargeDiagnosis'
        },
        {
          elementKey: 'dischargeEducation',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Discharge education',
          fqn: 'dischargeSummary.dischargeEducation'
        },
        {
          elementKey: 'spacer112',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'dischargeSummary.spacer112'
        },
        {
          elementKey: 'dischargeDay',
          dataCaseStudy: 'Day 1',
          formIndex: '2',
          inputType: 'day',
          label: 'Discharge day',
          fqn: 'dischargeSummary.dischargeDay'
        },
        {
          elementKey: 'dischargeTime',
          dataCaseStudy: '0.333333333333333',
          formIndex: '2',
          inputType: 'time',
          label: 'Discharge time',
          fqn: 'dischargeSummary.dischargeTime'
        },
        {
          elementKey: 'dischargedTo',
          dataCaseStudy: 'home',
          formIndex: '2',
          inputType: 'select',
          label: 'Discharged to',
          options: [
            {
              key: 'Home',
              text: 'Home'
            },
            {
              key: 'Expired',
              text: 'Expired'
            },
            {
              key: 'Transferred',
              text: 'Transferred'
            }
          ],
          fqn: 'dischargeSummary.dischargedTo'
        },
        {
          elementKey: 'transferedTo',
          formIndex: '2',
          inputType: 'text',
          label: 'Transferred to',
          fqn: 'dischargeSummary.transferedTo'
        },
        {
          elementKey: 'leavingBy',
          formIndex: '2',
          inputType: 'select',
          label: 'Leaving by',
          options: [
            {
              key: 'Taxi',
              text: 'Taxi'
            },
            {
              key: 'Family',
              text: 'Family'
            },
            {
              key: 'Ambulance',
              text: 'Ambulance'
            },
            {
              key: 'Walk out/wheelchair',
              text: 'Walk out/wheelchair'
            }
          ],
          fqn: 'dischargeSummary.leavingBy'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group109',
              gIndex: '1',
              gChildren: [
                'admissionDay',
                'dischargingPhysician/np',
                'spacer110',
                'clinicalSummary'
              ]
            }
          ]
        },
        pageForm2: {
          elementKey: 'pageForm2',
          formKey: 'pageForm2',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group111',
              gIndex: '1',
              gChildren: [
                'dischargeDiagnosis',
                'dischargeEducation',
                'spacer112',
                'dischargeDay',
                'dischargeTime',
                'dischargedTo',
                'transferedTo',
                'leavingBy'
              ]
            }
          ]
        }
      }
    },
    billing: {
      pageDataKey: 'billing',
      pageTitle: 'Billing',
      pIndex: '28',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'paymentType',
          dataCaseStudy: 'MSP',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Payment type',
          options: [
            {
              key: 'MSP',
              text: 'MSP'
            },
            {
              key: 'Third party',
              text: 'Third party'
            },
            {
              key: 'Federal',
              text: 'Federal'
            }
          ],
          fqn: 'billing.paymentType'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group113',
              gIndex: '1',
              gChildren: [
                'paymentType'
              ]
            }
          ]
        }
      }
    },
    integumentaryAssessment: {
      pageDataKey: 'integumentaryAssessment',
      pageTitle: 'Integumentary assessment',
      pIndex: '42',
      isV2: true,
      hasGridTable: true,
      pageChildren: [
        {
          elementKey: 'persona',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'integumentaryAssessment.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'integumentaryAssessment.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'integumentaryAssessment.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'integumentaryAssessment.time'
        },
        {
          elementKey: 'woundLabel',
          formIndex: '1',
          inputType: 'select',
          label: 'Wound label',
          options: [
            {
              key: 'Wound A',
              text: 'Wound A'
            },
            {
              key: 'Wound B',
              text: 'Wound B'
            },
            {
              key: 'Wound C',
              text: 'Wound C'
            },
            {
              key: 'Wound D',
              text: 'Wound D'
            }
          ],
          tableColumn: '2',
          tableLabel: 'Wound label',
          fqn: 'integumentaryAssessment.woundLabel'
        },
        {
          elementKey: 'goalOfCare',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'select',
          label: 'Goal of care',
          options: [
            {
              key: 'To heal',
              text: 'To heal'
            },
            {
              key: 'To maintain',
              text: 'To maintain'
            },
            {
              key: 'To monitor/manage',
              text: 'To monitor/manage'
            }
          ],
          tableColumn: '5',
          tableCss: 'hr-table',
          tableLabel: 'Goal of care',
          fqn: 'integumentaryAssessment.goalOfCare'
        },
        {
          elementKey: 'spacer76',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer76'
        },
        {
          elementKey: 'woundLocation',
          formIndex: '1',
          inputType: 'text',
          label: 'Wound location',
          tableColumn: '4',
          tableLabel: 'Wound location',
          fqn: 'integumentaryAssessment.woundLocation'
        },
        {
          elementKey: 'woundDayOnset',
          dataCaseStudy: 'Absent',
          formIndex: '1',
          inputType: 'text',
          label: 'Wound day of onset',
          tableColumn: '4',
          tableLabel: 'Wound day of onset',
          fqn: 'integumentaryAssessment.woundDayOnset'
        },
        {
          elementKey: 'woundType',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Wound type/etiology',
          options: [
            {
              key: 'Pressure injury',
              text: 'Pressure injury'
            },
            {
              key: 'Venous ulcer',
              text: 'Venous ulcer'
            },
            {
              key: 'Arterial ulcer',
              text: 'Arterial ulcer'
            },
            {
              key: 'Diabetic ulcer',
              text: 'Diabetic ulcer'
            },
            {
              key: 'Surgical secondary intent',
              text: 'Surgical secondary intent'
            },
            {
              key: 'Skin tear',
              text: 'Skin tear'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '4',
          tableCss: 'hr-table',
          tableLabel: 'Wound type/etiology',
          fqn: 'integumentaryAssessment.woundType'
        },
        {
          elementKey: 'stage',
          formIndex: '1',
          inputType: 'select',
          label: 'Stage',
          options: [
            {
              key: 'Stage 1',
              text: 'Stage 1'
            },
            {
              key: 'Stage 2',
              text: 'Stage 2'
            },
            {
              key: 'Stage 3',
              text: 'Stage 3'
            },
            {
              key: 'Stage 4',
              text: 'Stage 4'
            },
            {
              key: 'Stage X (unstageable)',
              text: 'Stage X (unstageable)'
            },
            {
              key: 'Stage SDTI (Supected Deep Tissue Injury)',
              text: 'Stage SDTI (Supected Deep Tissue Injury)'
            }
          ],
          tableColumn: '5',
          tableLabel: 'Stage',
          fqn: 'integumentaryAssessment.stage'
        },
        {
          elementKey: 'stageDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Date',
          tableColumn: '6',
          tableCss: 'hr-table',
          tableLabel: 'Date',
          fqn: 'integumentaryAssessment.stageDate'
        },
        {
          elementKey: 'pinkred',
          formIndex: '1',
          inputType: 'text',
          label: '% Pink/red',
          tableColumn: '18',
          tableLabel: '% Pink/red',
          fqn: 'integumentaryAssessment.pinkred'
        },
        {
          elementKey: 'granulation',
          formIndex: '1',
          helperText: 'Red pebbly',
          inputType: 'text',
          label: '% Granulation',
          tableColumn: '19',
          tableLabel: '% Granulation',
          fqn: 'integumentaryAssessment.granulation',
          helperHtml: '<p>Red pebbly</p>'
        },
        {
          elementKey: 'slough',
          formIndex: '1',
          inputType: 'text',
          label: '% Slough',
          tableColumn: '20',
          tableLabel: '% Slough',
          fqn: 'integumentaryAssessment.slough'
        },
        {
          elementKey: 'eschar',
          formIndex: '1',
          inputType: 'text',
          label: '% Eschar',
          tableColumn: '21',
          tableLabel: '% Eschar',
          fqn: 'integumentaryAssessment.eschar'
        },
        {
          elementKey: 'foreign',
          formIndex: '1',
          helperText: 'Sutures, mesh, hardware',
          inputType: 'text',
          label: '% Foreign body',
          tableColumn: '22',
          tableLabel: '% Foreign body',
          fqn: 'integumentaryAssessment.foreign',
          helperHtml: '<p>Sutures, mesh, hardware</p>'
        },
        {
          elementKey: 'underlying',
          formIndex: '1',
          helperText: 'Faschia, tendon, bone',
          inputType: 'text',
          label: '% Underlying structures',
          tableColumn: '23',
          tableLabel: '% Underlying structures',
          fqn: 'integumentaryAssessment.underlying',
          helperHtml: '<p>Faschia, tendon, bone</p>'
        },
        {
          elementKey: 'notVisible',
          formIndex: '1',
          inputType: 'text',
          label: '% Not visible',
          tableColumn: '24',
          tableLabel: '% Not visible',
          fqn: 'integumentaryAssessment.notVisible'
        },
        {
          elementKey: 'other',
          formIndex: '1',
          inputType: 'text',
          label: '% Other',
          tableColumn: '25',
          tableCss: 'hr-table',
          tableLabel: '% Other',
          fqn: 'integumentaryAssessment.other'
        },
        {
          elementKey: 'spacer77',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer77'
        },
        {
          elementKey: 'woundBedCalculation',
          defaultValue: '0',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: '<b>Wound bed calculation</b>',
          options: [
            {
              key: '=42+42+42+42+42+42+42+42',
              text: '=42+42+42+42+42+42+42+42'
            }
          ],
          tableColumn: '26',
          tableLabel: '<b>Wound bed calculation</b>',
          fqn: 'integumentaryAssessment.woundBedCalculation'
        },
        {
          elementKey: 'aLabelClock',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Location corresponds to face of clock with patients head at the 12 oclock position',
          fqn: 'integumentaryAssessment.aLabelClock'
        },
        {
          elementKey: 'spacer78',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer78'
        },
        {
          elementKey: 'spacer79',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer79'
        },
        {
          elementKey: 'length',
          formIndex: '1',
          inputType: 'text',
          label: 'Length',
          tableColumn: '7',
          tableLabel: 'Length',
          fqn: 'integumentaryAssessment.length'
        },
        {
          elementKey: 'width',
          formIndex: '1',
          inputType: 'text',
          label: 'Width',
          tableColumn: '8',
          tableLabel: 'Width',
          fqn: 'integumentaryAssessment.width'
        },
        {
          elementKey: 'depth',
          formIndex: '1',
          inputType: 'text',
          label: 'Depth',
          tableColumn: '9',
          tableCss: 'hr-table',
          tableLabel: 'Depth',
          fqn: 'integumentaryAssessment.depth'
        },
        {
          elementKey: 'sinusDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus tract 1 depth',
          tableColumn: '10',
          tableLabel: 'Sinus tract 1 depth',
          fqn: 'integumentaryAssessment.sinusDepth1'
        },
        {
          elementKey: 'sinusDepthLocation1',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '11',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.sinusDepthLocation1',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'spacer80',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer80'
        },
        {
          elementKey: 'sinusDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus tract 2 depth',
          tableColumn: '12',
          tableLabel: 'Sinus tract 2 depth',
          fqn: 'integumentaryAssessment.sinusDepth2'
        },
        {
          elementKey: 'sinusDepthLocation2',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '13',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.sinusDepthLocation2',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'spacer81',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer81'
        },
        {
          elementKey: 'underminingDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 1 depth',
          tableColumn: '14',
          tableLabel: 'Undermining 1 depth',
          fqn: 'integumentaryAssessment.underminingDepth1'
        },
        {
          elementKey: 'underminingDepthLocation1',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '15',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation1',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'spacer82',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer82'
        },
        {
          elementKey: 'underminingDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 2 depth',
          tableColumn: '16',
          tableLabel: 'Undermining 2 depth',
          fqn: 'integumentaryAssessment.underminingDepth2'
        },
        {
          elementKey: 'underminingDepthLocation2',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              key: '1',
              text: '1'
            },
            {
              key: '2',
              text: '2'
            },
            {
              key: '3',
              text: '3'
            },
            {
              key: '4',
              text: '4'
            },
            {
              key: '5',
              text: '5'
            },
            {
              key: '6',
              text: '6'
            },
            {
              key: '7',
              text: '7'
            },
            {
              key: '8',
              text: '8'
            },
            {
              key: '9',
              text: '9'
            },
            {
              key: '10',
              text: '10'
            },
            {
              key: '11',
              text: '11'
            },
            {
              key: '12',
              text: '12'
            }
          ],
          tableColumn: '17',
          tableCss: 'hr-table',
          tableLabel: 'Location',
          fqn: 'integumentaryAssessment.underminingDepthLocation2',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'exudateAmount',
          formIndex: '1',
          inputType: 'select',
          label: 'Exudate amount',
          options: [
            {
              key: 'None',
              text: 'None'
            },
            {
              key: 'Scant/small',
              text: 'Scant/small'
            },
            {
              key: 'Moderate',
              text: 'Moderate'
            },
            {
              key: 'Large/copious',
              text: 'Large/copious'
            }
          ],
          tableColumn: '27',
          tableLabel: 'Exudate amount',
          fqn: 'integumentaryAssessment.exudateAmount'
        },
        {
          elementKey: 'exudateType',
          formIndex: '1',
          inputType: 'select',
          label: 'Exudate type',
          options: [
            {
              key: 'Serous',
              text: 'Serous'
            },
            {
              key: 'Sanguineous',
              text: 'Sanguineous'
            },
            {
              key: 'Purulent',
              text: 'Purulent'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '28',
          tableCss: 'hr-table',
          tableLabel: 'Exudate type',
          fqn: 'integumentaryAssessment.exudateType'
        },
        {
          elementKey: 'odour',
          formIndex: '1',
          inputType: 'select',
          label: 'Odour present after cleansing',
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
          tableColumn: '29',
          tableCss: 'hr-table',
          tableLabel: 'Odour present after cleansing',
          fqn: 'integumentaryAssessment.odour'
        },
        {
          elementKey: 'woundEdge',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Wound edge',
          options: [
            {
              key: 'Attached (flush with wound bed or sloping edge)',
              text: 'Attached (flush with wound bed or sloping edge)'
            },
            {
              key: 'Non-attached (edge appears as a cliff)',
              text: 'Non-attached (edge appears as a cliff)'
            },
            {
              key: 'Rolled (curled under)',
              text: 'Rolled (curled under)'
            },
            {
              key: 'Epithelialization',
              text: 'Epithelialization'
            }
          ],
          tableColumn: '30',
          tableLabel: 'Wound edge',
          fqn: 'integumentaryAssessment.woundEdge'
        },
        {
          elementKey: 'periWoundSkin',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Peri-wound skin',
          options: [
            {
              key: 'Intact',
              text: 'Intact'
            },
            {
              key: 'Erythema (reddened) in cm',
              text: 'Erythema (reddened) in cm'
            },
            {
              key: 'Indurated (firmness around wound) in cm',
              text: 'Indurated (firmness around wound) in cm'
            },
            {
              key: 'Macerated (white, waterlogged)',
              text: 'Macerated (white, waterlogged)'
            },
            {
              key: 'Excoriated/Denuded (superficial loss of tissue)',
              text: 'Excoriated/Denuded (superficial loss of tissue)'
            },
            {
              key: 'Callused',
              text: 'Callused'
            },
            {
              key: 'Fragile',
              text: 'Fragile'
            },
            {
              key: 'Other',
              text: 'Other'
            }
          ],
          tableColumn: '31',
          tableCss: 'hr-table',
          tableLabel: 'Peri-wound skin',
          fqn: 'integumentaryAssessment.periWoundSkin'
        },
        {
          elementKey: 'woundPain',
          formIndex: '1',
          helperText: 'Scored from 10 point analogue Pain Scale\nSee Pain Assessment for details',
          inputType: 'text',
          label: 'Wound pain',
          suffix: '/10',
          tableColumn: '32',
          tableCss: 'hr-table',
          tableLabel: 'Wound pain',
          fqn: 'integumentaryAssessment.woundPain',
          helperHtml: '<p>Scored from 10 point analogue Pain Scale</p>\n<p>See Pain Assessment for details</p>'
        },
        {
          elementKey: 'packingOut',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing out',
          tableColumn: '33',
          tableLabel: 'Packing out',
          fqn: 'integumentaryAssessment.packingOut',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'packinIn',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing in',
          tableColumn: '34',
          tableCss: 'hr-table',
          tableLabel: 'Packing in',
          fqn: 'integumentaryAssessment.packinIn',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'spacer85',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'integumentaryAssessment.spacer85'
        },
        {
          elementKey: 'treatmentComplete',
          formIndex: '1',
          inputType: 'select',
          label: 'Treatments as per plan of care',
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
          tableColumn: '35',
          tableLabel: 'Treatments as per plan of care',
          fqn: 'integumentaryAssessment.treatmentComplete'
        }
      ],
      recHeader: true,
      generated: '2020-06-13T21:01:12-03:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an integumentary assessment',
          ehr_list: [
            {
              label: 'Identification',
              ehr_list_index: '1',
              items: [
                'persona',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Wound label',
              ehr_list_index: '2',
              items: [
                'woundLabel'
              ]
            },
            {
              label: 'Wound location',
              ehr_list_index: '4',
              items: [
                'woundLocation',
                'woundDayOnset',
                'woundType'
              ]
            },
            {
              label: 'Goal of care',
              tableCss: 'hr-table',
              ehr_list_index: '5',
              items: [
                'goalOfCare',
                'stage'
              ]
            },
            {
              label: 'Date',
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'stageDate'
              ]
            },
            {
              label: 'Length',
              ehr_list_index: '7',
              items: [
                'length'
              ]
            },
            {
              label: 'Width',
              ehr_list_index: '8',
              items: [
                'width'
              ]
            },
            {
              label: 'Depth',
              tableCss: 'hr-table',
              ehr_list_index: '9',
              items: [
                'depth'
              ]
            },
            {
              label: 'Sinus tract 1 depth',
              ehr_list_index: '10',
              items: [
                'sinusDepth1'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'sinusDepthLocation1'
              ]
            },
            {
              label: 'Sinus tract 2 depth',
              ehr_list_index: '12',
              items: [
                'sinusDepth2'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '13',
              items: [
                'sinusDepthLocation2'
              ]
            },
            {
              label: 'Undermining 1 depth',
              ehr_list_index: '14',
              items: [
                'underminingDepth1'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '15',
              items: [
                'underminingDepthLocation1'
              ]
            },
            {
              label: 'Undermining 2 depth',
              ehr_list_index: '16',
              items: [
                'underminingDepth2'
              ]
            },
            {
              label: 'Location',
              tableCss: 'hr-table',
              ehr_list_index: '17',
              items: [
                'underminingDepthLocation2'
              ]
            },
            {
              label: '% Pink/red',
              ehr_list_index: '18',
              items: [
                'pinkred'
              ]
            },
            {
              label: '% Granulation',
              ehr_list_index: '19',
              items: [
                'granulation'
              ]
            },
            {
              label: '% Slough',
              ehr_list_index: '20',
              items: [
                'slough'
              ]
            },
            {
              label: '% Eschar',
              ehr_list_index: '21',
              items: [
                'eschar'
              ]
            },
            {
              label: '% Foreign body',
              ehr_list_index: '22',
              items: [
                'foreign'
              ]
            },
            {
              label: '% Underlying structures',
              ehr_list_index: '23',
              items: [
                'underlying'
              ]
            },
            {
              label: '% Not visible',
              ehr_list_index: '24',
              items: [
                'notVisible'
              ]
            },
            {
              label: '% Other',
              tableCss: 'hr-table',
              ehr_list_index: '25',
              items: [
                'other'
              ]
            },
            {
              label: '<b>Wound bed calculation</b>',
              ehr_list_index: '26',
              items: [
                'woundBedCalculation'
              ]
            },
            {
              label: 'Exudate amount',
              ehr_list_index: '27',
              items: [
                'exudateAmount'
              ]
            },
            {
              label: 'Exudate type',
              tableCss: 'hr-table',
              ehr_list_index: '28',
              items: [
                'exudateType'
              ]
            },
            {
              label: 'Odour present after cleansing',
              tableCss: 'hr-table',
              ehr_list_index: '29',
              items: [
                'odour'
              ]
            },
            {
              label: 'Wound edge',
              ehr_list_index: '30',
              items: [
                'woundEdge'
              ]
            },
            {
              label: 'Peri-wound skin',
              tableCss: 'hr-table',
              ehr_list_index: '31',
              items: [
                'periWoundSkin'
              ]
            },
            {
              label: 'Wound pain',
              tableCss: 'hr-table',
              ehr_list_index: '32',
              items: [
                'woundPain'
              ]
            },
            {
              label: 'Packing out',
              ehr_list_index: '33',
              items: [
                'packingOut'
              ]
            },
            {
              label: 'Packing in',
              tableCss: 'hr-table',
              ehr_list_index: '34',
              items: [
                'packinIn'
              ]
            },
            {
              label: 'Treatments as per plan of care',
              ehr_list_index: '35',
              items: [
                'treatmentComplete'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an integumentary assessment',
            formOption: 'transpose',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group74',
                formCss: 'record-header',
                gIndex: '1',
                gChildren: [
                  'persona',
                  'profession',
                  'day',
                  'time'
                ]
              },
              {
                elementKey: 'ehr_group75',
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'woundLabel',
                  'goalOfCare',
                  'spacer76',
                  'woundLocation',
                  'woundDayOnset',
                  'woundType'
                ]
              },
              {
                elementKey: 'pressureInjury',
                label: 'Pressure injury',
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'stage',
                  'stageDate'
                ]
              },
              {
                elementKey: 'woundBed',
                label: 'Wound bed',
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'pinkred',
                  'granulation',
                  'slough',
                  'eschar',
                  'foreign',
                  'underlying',
                  'notVisible',
                  'other',
                  'spacer77',
                  'woundBedCalculation'
                ]
              },
              {
                elementKey: 'toeSinus',
                label: 'Toe undermining/Sinus tract',
                formCss: 'section-divider',
                gIndex: '5',
                gChildren: [
                  'aLabelClock',
                  'spacer78',
                  'spacer79',
                  'length',
                  'width',
                  'depth',
                  'sinusDepth1',
                  'sinusDepthLocation1',
                  'spacer80',
                  'sinusDepth2',
                  'sinusDepthLocation2',
                  'spacer81',
                  'underminingDepth1',
                  'underminingDepthLocation1',
                  'spacer82',
                  'underminingDepth2',
                  'underminingDepthLocation2'
                ]
              },
              {
                elementKey: 'ehr_group83',
                formCss: 'section-divider',
                gIndex: '6',
                gChildren: [
                  'exudateAmount',
                  'exudateType',
                  'odour',
                  'woundEdge',
                  'periWoundSkin',
                  'woundPain'
                ]
              },
              {
                elementKey: 'ehr_group84',
                label: 'Treatment',
                formCss: 'section-divider',
                gIndex: '7',
                gChildren: [
                  'packingOut',
                  'packinIn',
                  'spacer85',
                  'treatmentComplete'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              woundLabel: '',
              goalOfCare: '',
              woundLocation: '',
              woundDayOnset: '',
              woundType: '',
              stage: '',
              stageDate: '',
              pinkred: '',
              granulation: '',
              slough: '',
              eschar: '',
              foreign: '',
              underlying: '',
              notVisible: '',
              other: '',
              woundBedCalculation: '0',
              length: '',
              width: '',
              depth: '',
              sinusDepth1: '',
              sinusDepthLocation1: '',
              sinusDepth2: '',
              sinusDepthLocation2: '',
              underminingDepth1: '',
              underminingDepthLocation1: '',
              underminingDepth2: '',
              underminingDepthLocation2: '',
              exudateAmount: '',
              exudateType: '',
              odour: '',
              woundEdge: '',
              periWoundSkin: '',
              woundPain: '',
              packingOut: '',
              packinIn: '',
              treatmentComplete: ''
            }
          }
        }
      }
    }
  }
}