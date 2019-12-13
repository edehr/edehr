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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'genitourinary.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'genitourinary.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'genitourinary.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
              text: 'None'
            },
            {
              text: 'Increased frequency'
            },
            {
              text: 'Dysuria'
            },
            {
              text: 'Hermaturia'
            },
            {
              text: 'Oliguria'
            },
            {
              text: 'Incontinence'
            },
            {
              text: 'Retention'
            },
            {
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
              text: 'Pale yellow'
            },
            {
              text: 'Dark yellow'
            },
            {
              text: 'Amber'
            },
            {
              text: 'Red/blood'
            },
            {
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
              text: 'Clear'
            },
            {
              text: 'Cloudy'
            },
            {
              text: 'Foamy'
            },
            {
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
              text: 'Yes'
            },
            {
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
              text: 'Yes'
            },
            {
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
              text: 'Yes'
            },
            {
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
              text: 'Observed'
            },
            {
              text: 'As per patient observed'
            },
            {
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
              text: 'Discharge'
            },
            {
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
              text: 'Yes'
            },
            {
              text: 'No'
            },
            {
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
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                formCss: 'grid-left-to-right-1 section-divider',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'musculoskeletal.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'musculoskeletal.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'musculoskeletal.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
              text: 'Present'
            },
            {
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
              text: 'Present'
            },
            {
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
              text: 'Present'
            },
            {
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
              text: 'Normal'
            },
            {
              text: 'Decreased'
            },
            {
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
              text: 'Present'
            },
            {
              text: 'Absent'
            },
            {
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
              text: 'Absent'
            },
            {
              text: 'Weak'
            },
            {
              text: 'Moderate'
            },
            {
              text: 'Strong'
            },
            {
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
              text: 'Flesh'
            },
            {
              text: 'Pale'
            },
            {
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
              text: 'Hot'
            },
            {
              text: 'Warm'
            },
            {
              text: 'Cold'
            }
          ],
          tableColumn: '9',
          tableLabel: 'Temp',
          fqn: 'musculoskeletal.temp'
        },
        {
          elementKey: 'spacer5',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'musculoskeletal.spacer5'
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
              text: 'Yes'
            },
            {
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
              text: 'Walker'
            },
            {
              text: 'Cane'
            },
            {
              text: 'One crutch'
            },
            {
              text: 'Two crutches'
            },
            {
              text: 'Wheelchair'
            },
            {
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
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                  'swelling',
                  'pain',
                  'deformity',
                  'movement',
                  'sensation',
                  'pulse',
                  'colour',
                  'temp',
                  'spacer5',
                  'useOfAmbulatoryAid',
                  'type'
                ]
              },
              {
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'pain.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'pain.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'pain.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                formCss: 'grid-left-to-right-1 section-divider',
                gIndex: '3',
                gChildren: [
                  'comments'
                ]
              },
              {
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
                formCss: 'grid-left-to-right-1',
                gIndex: '5',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'biopsychosocial.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'biopsychosocial.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'biopsychosocial.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
              text: 'Didn\'t ask'
            },
            {
              text: 'Yes'
            },
            {
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
              text: 'Didn\'t ask'
            },
            {
              text: 'Yes'
            },
            {
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
              text: 'Good'
            },
            {
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
              text: 'Calm'
            },
            {
              text: 'Cooperative'
            },
            {
              text: 'Agitated'
            },
            {
              text: 'Flat affect'
            },
            {
              text: 'Threatening'
            },
            {
              text: 'Physically agressive'
            },
            {
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
              text: 'None'
            },
            {
              text: 'Visual'
            },
            {
              text: 'Auditory'
            },
            {
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
              text: 'None'
            },
            {
              text: 'Ideation'
            },
            {
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
              text: 'None'
            },
            {
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
              text: 'Clear and coherent'
            },
            {
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
              text: 'Yes'
            },
            {
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
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                formCss: 'section-divider',
                gIndex: '2',
                gChildren: [
                  'domesticViolence',
                  'requestContact'
                ]
              },
              {
                formCss: 'section-divider',
                gIndex: '3',
                gChildren: [
                  'hygieneGrooming',
                  'hygieneComments'
                ]
              },
              {
                formCss: 'section-divider',
                gIndex: '4',
                gChildren: [
                  'behaviour',
                  'hallucinations'
                ]
              },
              {
                label: 'Psychological state',
                gIndex: '5',
                gChildren: [
                  'suicidal',
                  'homicidal',
                  'speech'
                ]
              },
              {
                label: 'Support',
                gIndex: '6',
                gChildren: [
                  'supportPerson',
                  'supportComments'
                ]
              },
              {
                label: 'Security',
                gIndex: '7',
                gChildren: [
                  'securityPolicePresent',
                  'securityComments'
                ]
              },
              {
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
                formCss: 'grid-left-to-right-1',
                gIndex: '9',
                gChildren: [
                  'generalComments'
                ]
              }
            ],
            ehr_data: {
              name: '',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'nonmedOrders.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'nonmedOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'nonmedOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
              text: 'Ordered'
            },
            {
              text: 'In process'
            },
            {
              text: 'Cancelled'
            },
            {
              text: 'Completed'
            },
            {
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
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                  'order',
                  'orderedBy',
                  'reason',
                  'status'
                ]
              },
              {
                formCss: 'grid-left-to-right-1',
                gIndex: '3',
                gChildren: [
                  'comment'
                ]
              }
            ],
            ehr_data: {
              name: '',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'referrals.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'referrals.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'referrals.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
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
          elementKey: 'spacer27',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'referrals.spacer27'
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
              text: 'Active'
            },
            {
              text: 'Discharged'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Status',
          fqn: 'referrals.status'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
                  'referralName',
                  'referralProfession',
                  'spacer27',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'labRequisitions.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'labRequisitions.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'labRequisitions.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'labRequisitions.time'
        },
        {
          elementKey: 'requisition',
          assetBase: 'requisitions',
          dataCaseStudy: 'lab-requisition-form.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Lab requisition',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'requisition',
          assetBase: 'requisitions',
          dataCaseStudy: 'medical-imaging-requisition.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Medical imaging requisition',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'spacer30',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'labRequisitions.spacer30'
        },
        {
          elementKey: 'ordered',
          formIndex: '1',
          inputType: 'day',
          label: 'Ordered day',
          tableColumn: '2',
          tableLabel: 'Ordered day',
          fqn: 'labRequisitions.ordered'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Ordered day',
              ehr_list_index: '2',
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
                  'requisition',
                  'requisition',
                  'spacer30',
                  'ordered'
                ]
              }
            ],
            ehr_data: {
              name: '',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          fqn: 'medicationOrders.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'medicationOrders.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'medicationOrders.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'medicationOrders.time'
        },
        {
          elementKey: 'medication',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'text',
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
              text: 'Oral'
            },
            {
              text: 'Sublingual'
            },
            {
              text: 'Inhalation'
            },
            {
              text: 'Nasal'
            },
            {
              text: 'Rectal'
            },
            {
              text: 'Vaginal'
            },
            {
              text: 'Intravenous'
            },
            {
              text: 'Intramuscular'
            },
            {
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
          formIndex: '1',
          inputType: 'select',
          label: 'Administration',
          options: [
            {
              text: 'Scheduled'
            },
            {
              text: 'PRN (as needed)'
            },
            {
              text: 'Once'
            },
            {
              text: 'Stat'
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
              text: 'BID / q12h'
            },
            {
              text: 'TID'
            },
            {
              text: 'q8h'
            },
            {
              text: 'QID'
            },
            {
              text: 'q6h'
            },
            {
              text: 'q4h'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Scheduled',
          fqn: 'medicationOrders.scheduled'
        },
        {
          elementKey: 'spacer34',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'medicationOrders.spacer34'
        },
        {
          elementKey: 'prn1',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 1',
          tableColumn: '9',
          tableLabel: 'PRN 1',
          fqn: 'medicationOrders.prn1'
        },
        {
          elementKey: 'prn2',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 2',
          tableColumn: '10',
          tableLabel: 'PRN 2',
          fqn: 'medicationOrders.prn2'
        },
        {
          elementKey: 'prn3',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 3',
          tableColumn: '11',
          tableLabel: 'PRN 3',
          fqn: 'medicationOrders.prn3'
        },
        {
          elementKey: 'prn4',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 4',
          tableColumn: '12',
          tableLabel: 'PRN 4',
          fqn: 'medicationOrders.prn4'
        },
        {
          elementKey: 'prn5',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 5',
          tableColumn: '13',
          tableLabel: 'PRN 5',
          fqn: 'medicationOrders.prn5'
        },
        {
          elementKey: 'prn6',
          formIndex: '1',
          inputType: 'text',
          label: 'PRN 6',
          tableColumn: '14',
          tableLabel: 'PRN 6',
          fqn: 'medicationOrders.prn6'
        },
        {
          elementKey: 'instructions',
          formIndex: '1',
          inputType: 'text',
          label: 'Instructions',
          tableColumn: '15',
          tableLabel: 'Instructions',
          fqn: 'medicationOrders.instructions'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '16',
          tableLabel: 'Reason',
          fqn: 'medicationOrders.reason'
        },
        {
          elementKey: 'notes',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Notes',
          tableColumn: '17',
          tableLabel: 'Notes',
          fqn: 'medicationOrders.notes'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
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
              ehr_list_index: '8',
              items: [
                'scheduled'
              ]
            },
            {
              label: 'PRN 1',
              ehr_list_index: '9',
              items: [
                'prn1'
              ]
            },
            {
              label: 'PRN 2',
              ehr_list_index: '10',
              items: [
                'prn2'
              ]
            },
            {
              label: 'PRN 3',
              ehr_list_index: '11',
              items: [
                'prn3'
              ]
            },
            {
              label: 'PRN 4',
              ehr_list_index: '12',
              items: [
                'prn4'
              ]
            },
            {
              label: 'PRN 5',
              ehr_list_index: '13',
              items: [
                'prn5'
              ]
            },
            {
              label: 'PRN 6',
              ehr_list_index: '14',
              items: [
                'prn6'
              ]
            },
            {
              label: 'Instructions',
              ehr_list_index: '15',
              items: [
                'instructions'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '16',
              items: [
                'reason'
              ]
            },
            {
              label: 'Notes',
              ehr_list_index: '17',
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
                  'medication',
                  'dose',
                  'route',
                  'startMeds',
                  'endMeds'
                ]
              },
              {
                gIndex: '3',
                gChildren: [
                  'administration',
                  'scheduled',
                  'spacer34',
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
                  'instructions',
                  'reason',
                  'notes'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              medication: '',
              dose: '',
              route: '',
              startMeds: '',
              endMeds: '',
              administration: '',
              scheduled: '',
              prn1: '',
              prn2: '',
              prn3: '',
              prn4: '',
              prn5: '',
              prn6: '',
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
              text: 'Active'
            },
            {
              text: 'Hold'
            },
            {
              text: 'Discontinued'
            },
            {
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
              text: 'Administered'
            },
            {
              text: 'Refused'
            },
            {
              text: 'Missed'
            },
            {
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
          elementKey: 'actualTime',
          formIndex: '1',
          helperText: 'Enter time delivered or say if not delivered.',
          inputType: 'text',
          label: 'Actual time',
          tableColumn: '9',
          tableLabel: 'Actual time',
          fqn: 'medAdminRec.actualTime',
          helperHtml: '<p>Enter time delivered or say if not delivered.</p>'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
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
              label: 'Actual time',
              ehr_list_index: '9',
              items: [
                'actualTime'
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
                  'actualTime'
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
              actualTime: ''
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
          elementKey: 'clinicalSummary',
          dataCaseStudy: 'Patient arrived with chronic COPD in acute form-NL-Previously diagnosed with hypertension-NL-Developed bilateral gram positive cocci pneunoma (what kind of cocci? Need a lab report)-NL-Treated with intravenous antibiotics and responded well',
          formIndex: '1',
          formCss: 'grid-span-2-columns',
          inputType: 'textarea',
          label: 'Clinical summary',
          fqn: 'dischargeSummary.clinicalSummary'
        },
        {
          elementKey: 'dischargingPhysician/np',
          formIndex: '1',
          inputType: 'select',
          label: 'Discharging physician/NP',
          options: [
            {
              text: 'Dr. Notley'
            },
            {
              text: 'Dr. Hunicutt'
            },
            {
              text: 'Dr. Lee'
            },
            {
              text: 'Dr. Malik'
            },
            {
              text: 'Dr. Ng'
            },
            {
              text: 'Dr. Walker'
            },
            {
              text: 'Dr. Brooks'
            }
          ],
          fqn: 'dischargeSummary.dischargingPhysician/np'
        },
        {
          elementKey: 'dischargeRole',
          formIndex: '1',
          inputType: 'select',
          label: 'Role',
          options: [
            {
              text: 'Doctor'
            },
            {
              text: 'Nurse practitioner'
            }
          ],
          fqn: 'dischargeSummary.dischargeRole'
        },
        {
          elementKey: 'spacer38',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'dischargeSummary.spacer38'
        },
        {
          elementKey: 'dischargeDay',
          dataCaseStudy: 'Day 1',
          formIndex: '1',
          inputType: 'day',
          label: 'Discharge day',
          fqn: 'dischargeSummary.dischargeDay'
        },
        {
          elementKey: 'dischargeTime',
          dataCaseStudy: '0.333333333333333',
          formIndex: '1',
          inputType: 'time',
          label: 'Discharge time',
          fqn: 'dischargeSummary.dischargeTime'
        },
        {
          elementKey: 'dischargedTo',
          dataCaseStudy: 'home',
          formIndex: '1',
          inputType: 'select',
          label: 'Discharged to',
          options: [
            {
              text: 'Home'
            },
            {
              text: 'Expired'
            },
            {
              text: 'Transferred'
            }
          ],
          fqn: 'dischargeSummary.dischargedTo'
        },
        {
          elementKey: 'transferedTo',
          formIndex: '1',
          inputType: 'text',
          label: 'Transferred to',
          fqn: 'dischargeSummary.transferedTo'
        },
        {
          elementKey: 'leavingBy',
          formIndex: '1',
          inputType: 'select',
          label: 'Leaving by',
          options: [
            {
              text: 'Taxi'
            },
            {
              text: 'Family'
            },
            {
              text: 'Ambulance'
            },
            {
              text: 'Walk out/wheelchair'
            }
          ],
          fqn: 'dischargeSummary.leavingBy'
        },
        {
          elementKey: 'dischargeDiagnosis',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Discharge diagnosis',
          fqn: 'dischargeSummary.dischargeDiagnosis'
        },
        {
          elementKey: 'dischargeEducation',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Discharge education',
          fqn: 'dischargeSummary.dischargeEducation'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'admissionDay',
                'clinicalSummary',
                'dischargingPhysician/np',
                'dischargeRole',
                'spacer38',
                'dischargeDay',
                'dischargeTime',
                'dischargedTo',
                'transferedTo',
                'leavingBy'
              ]
            },
            {
              formCss: 'grid-left-to-right-1',
              gIndex: '2',
              gChildren: [
                'dischargeDiagnosis',
                'dischargeEducation'
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
              text: 'MSP'
            },
            {
              text: 'Third party'
            },
            {
              text: 'Federal'
            }
          ],
          fqn: 'billing.paymentType'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              gIndex: '1',
              gChildren: [
                'paymentType'
              ]
            }
          ]
        }
      }
    },
    wound: {
      pageDataKey: 'wound',
      pageTitle: 'Wound',
      pIndex: '42',
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
          fqn: 'wound.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          fqn: 'wound.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          fqn: 'wound.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          fqn: 'wound.time'
        },
        {
          elementKey: 'woundDateOnset',
          dataCaseStudy: 'Absent',
          formIndex: '1',
          inputType: 'date',
          label: 'Wound date of onset',
          tableColumn: '2',
          tableLabel: 'Wound date of onset',
          fqn: 'wound.woundDateOnset'
        },
        {
          elementKey: 'goalOfCare',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Goal of care',
          options: [
            {
              text: 'To heal'
            },
            {
              text: 'To maintain'
            },
            {
              text: 'To monitor/manage'
            }
          ],
          tableColumn: '3',
          tableCss: 'hr-table',
          tableLabel: 'Goal of care',
          fqn: 'wound.goalOfCare'
        },
        {
          elementKey: 'woundType',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Wound type/etiology',
          options: [
            {
              text: 'Pressure'
            },
            {
              text: 'Venous'
            },
            {
              text: 'Arterial'
            },
            {
              text: 'Diabetic'
            },
            {
              text: 'Surgical 2 0 Intention'
            },
            {
              text: 'Skin teat'
            },
            {
              text: 'Other'
            }
          ],
          tableColumn: '4',
          tableCss: 'hr-table',
          tableLabel: 'Wound type/etiology',
          fqn: 'wound.woundType'
        },
        {
          elementKey: 'stage',
          formIndex: '1',
          inputType: 'select',
          label: 'Stage',
          options: [
            {
              text: 'Stage 1'
            },
            {
              text: 'Stage 2'
            },
            {
              text: 'Stage 3'
            },
            {
              text: 'Stage 4'
            },
            {
              text: 'Stage X (unstageable)'
            },
            {
              text: 'Stage SDTI (Supected Deep Tissue Injury)'
            }
          ],
          tableColumn: '5',
          fqn: 'wound.stage'
        },
        {
          elementKey: 'stageDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Date',
          tableColumn: '6',
          tableCss: 'hr-table',
          fqn: 'wound.stageDate'
        },
        {
          elementKey: 'wound/Location',
          formIndex: '1',
          inputType: 'text',
          label: 'Wound location',
          tableColumn: '7',
          fqn: 'wound.wound/Location'
        },
        {
          elementKey: 'locationDate',
          formIndex: '1',
          inputType: 'date',
          label: 'Date',
          tableColumn: '8',
          tableCss: 'hr-table',
          fqn: 'wound.locationDate'
        },
        {
          elementKey: 'aLabel',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Toe undermining/sinus tract:-NL-Location corresponds to face of clock with patients head at the 12 oclock position',
          fqn: 'wound.aLabel'
        },
        {
          elementKey: 'length',
          formIndex: '1',
          inputType: 'text',
          label: 'Length',
          tableColumn: '9',
          fqn: 'wound.length'
        },
        {
          elementKey: 'width',
          formIndex: '1',
          inputType: 'text',
          label: 'Width',
          tableColumn: '10',
          fqn: 'wound.width'
        },
        {
          elementKey: 'depth',
          formIndex: '1',
          inputType: 'text',
          label: 'Depth',
          tableColumn: '11',
          tableCss: 'hr-table',
          fqn: 'wound.depth'
        },
        {
          elementKey: 'sinusDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus tract 1 depth',
          tableColumn: '12',
          fqn: 'wound.sinusDepth1'
        },
        {
          elementKey: 'sinusDepthLocation1',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            },
            {
              text: '9'
            },
            {
              text: '10'
            },
            {
              text: '11'
            },
            {
              text: '12'
            }
          ],
          tableColumn: '13',
          tableCss: 'hr-table',
          fqn: 'wound.sinusDepthLocation1',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'sinusDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Sinus tract 2 depth',
          tableColumn: '14',
          fqn: 'wound.sinusDepth2'
        },
        {
          elementKey: 'sinusDepthLocation2',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            },
            {
              text: '9'
            },
            {
              text: '10'
            },
            {
              text: '11'
            },
            {
              text: '12'
            }
          ],
          tableColumn: '15',
          tableCss: 'hr-table',
          fqn: 'wound.sinusDepthLocation2',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'underminingDepth1',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 1 depth',
          tableColumn: '16',
          fqn: 'wound.underminingDepth1'
        },
        {
          elementKey: 'underminingDepthLocation1',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            },
            {
              text: '9'
            },
            {
              text: '10'
            },
            {
              text: '11'
            },
            {
              text: '12'
            }
          ],
          tableColumn: '17',
          tableCss: 'hr-table',
          fqn: 'wound.underminingDepthLocation1',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'underminingDepth2',
          formIndex: '1',
          inputType: 'text',
          label: 'Undermining 2 depth',
          tableColumn: '18',
          fqn: 'wound.underminingDepth2'
        },
        {
          elementKey: 'underminingDepthLocation2',
          formIndex: '1',
          helperText: 'O\'clock',
          inputType: 'select',
          label: 'Location',
          options: [
            {
              text: '1'
            },
            {
              text: '2'
            },
            {
              text: '3'
            },
            {
              text: '4'
            },
            {
              text: '5'
            },
            {
              text: '6'
            },
            {
              text: '7'
            },
            {
              text: '8'
            },
            {
              text: '9'
            },
            {
              text: '10'
            },
            {
              text: '11'
            },
            {
              text: '12'
            }
          ],
          tableColumn: '19',
          tableCss: 'hr-table',
          fqn: 'wound.underminingDepthLocation2',
          helperHtml: '<p>O\'clock</p>'
        },
        {
          elementKey: 'pinkred',
          formIndex: '1',
          inputType: 'text',
          label: '% Pink/red',
          tableColumn: '20',
          fqn: 'wound.pinkred'
        },
        {
          elementKey: 'granulation',
          formIndex: '1',
          helperText: 'Red pebbly',
          inputType: 'text',
          label: '% Granulation',
          tableColumn: '21',
          fqn: 'wound.granulation',
          helperHtml: '<p>Red pebbly</p>'
        },
        {
          elementKey: 'slough',
          formIndex: '1',
          inputType: 'text',
          label: '% Slough',
          tableColumn: '22',
          fqn: 'wound.slough'
        },
        {
          elementKey: 'eschar',
          formIndex: '1',
          inputType: 'text',
          label: '% Eschar',
          tableColumn: '23',
          fqn: 'wound.eschar'
        },
        {
          elementKey: 'foreign',
          formIndex: '1',
          helperText: 'Sutures, mesh, hardware',
          inputType: 'text',
          label: '% Foreign body',
          tableColumn: '24',
          fqn: 'wound.foreign',
          helperHtml: '<p>Sutures, mesh, hardware</p>'
        },
        {
          elementKey: 'underlying',
          formIndex: '1',
          helperText: 'Faschia, tendon, bone',
          inputType: 'text',
          label: '% Underlying structures',
          tableColumn: '25',
          fqn: 'wound.underlying',
          helperHtml: '<p>Faschia, tendon, bone</p>'
        },
        {
          elementKey: 'notVisible',
          formIndex: '1',
          inputType: 'text',
          label: '% Not visible',
          tableColumn: '26',
          fqn: 'wound.notVisible'
        },
        {
          elementKey: 'other',
          formIndex: '1',
          inputType: 'text',
          label: '% Other',
          tableColumn: '27',
          tableCss: 'hr-table',
          fqn: 'wound.other'
        },
        {
          elementKey: 'woundBedCalculation',
          defaultValue: '0',
          formIndex: '1',
          inputType: 'calculatedValue',
          label: 'Wound bed calculation',
          options: [
            {
              text: '=42+42+42+42+42+42+42+42'
            }
          ],
          tableColumn: '28',
          fqn: 'wound.woundBedCalculation'
        },
        {
          elementKey: 'exudateAmount',
          formIndex: '1',
          inputType: 'select',
          label: 'Exudate amount',
          options: [
            {
              text: 'None'
            },
            {
              text: 'Scant/small'
            },
            {
              text: 'Moderate'
            },
            {
              text: 'Large/copious'
            }
          ],
          tableColumn: '29',
          fqn: 'wound.exudateAmount'
        },
        {
          elementKey: 'exudateType',
          formIndex: '1',
          inputType: 'select',
          label: 'Exudate type',
          options: [
            {
              text: 'Serous'
            },
            {
              text: 'Sanguineous'
            },
            {
              text: 'Purulent'
            },
            {
              text: 'Other'
            }
          ],
          tableColumn: '30',
          tableCss: 'hr-table',
          fqn: 'wound.exudateType'
        },
        {
          elementKey: 'odour',
          formIndex: '1',
          inputType: 'select',
          label: 'Odour present after cleansing',
          options: [
            {
              text: 'Yes'
            },
            {
              text: 'No'
            }
          ],
          tableColumn: '31',
          tableCss: 'hr-table',
          fqn: 'wound.odour'
        },
        {
          elementKey: 'woundEdge',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Wound edge',
          options: [
            {
              text: 'Attached (flush with wound bed or sloping edge)'
            },
            {
              text: 'Non-attached (edge appears as a cliff)'
            },
            {
              text: 'Rolled (curled under)'
            },
            {
              text: 'Epithelialization'
            }
          ],
          tableColumn: '32',
          fqn: 'wound.woundEdge'
        },
        {
          elementKey: 'periWoundSkin',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Peri-wound skin',
          options: [
            {
              text: 'Intact'
            },
            {
              text: 'Erythema (reddened) in cm'
            },
            {
              text: 'Indurated (firmness around wound) in cm'
            },
            {
              text: 'Macerated (white, waterlogged)'
            },
            {
              text: 'Excoriated/Denuded (superficial loss of tissue)'
            },
            {
              text: 'Callused'
            },
            {
              text: 'Fragile'
            },
            {
              text: 'Other'
            }
          ],
          tableColumn: '33',
          tableCss: 'hr-table',
          fqn: 'wound.periWoundSkin'
        },
        {
          elementKey: 'aLabel',
          formIndex: '1',
          inputType: 'form_label',
          label: 'See Pain Assessment for details',
          fqn: 'wound.aLabel'
        },
        {
          elementKey: 'woundPain',
          formIndex: '1',
          helperText: 'Scored from 10 point analogue Pain Scale',
          inputType: 'text',
          label: 'Wound pain',
          suffix: '/10',
          tableColumn: '34',
          tableCss: 'hr-table',
          fqn: 'wound.woundPain',
          helperHtml: '<p>Scored from 10 point analogue Pain Scale</p>'
        },
        {
          elementKey: 'packingOut',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing out',
          tableColumn: '35',
          fqn: 'wound.packingOut',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'packinIn',
          formIndex: '1',
          helperText: 'Any depth 1cm or greater, count packing pieces',
          inputType: 'text',
          label: 'Packing in',
          tableColumn: '36',
          tableCss: 'hr-table',
          fqn: 'wound.packinIn',
          helperHtml: '<p>Any depth 1cm or greater, count packing pieces</p>'
        },
        {
          elementKey: 'treatmentComplete',
          formIndex: '1',
          inputType: 'select',
          label: 'Treatments as per interprofessional plan of care',
          options: [
            {
              text: 'Yes'
            },
            {
              text: 'No'
            }
          ],
          tableColumn: '37',
          fqn: 'wound.treatmentComplete'
        }
      ],
      generated: '2019-12-13T10:12:08-08:00',
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
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Wound date of onset',
              ehr_list_index: '2',
              items: [
                'woundDateOnset'
              ]
            },
            {
              label: 'Goal of care',
              tableCss: 'hr-table',
              ehr_list_index: '3',
              items: [
                'goalOfCare'
              ]
            },
            {
              label: 'Wound type/etiology',
              tableCss: 'hr-table',
              ehr_list_index: '4',
              items: [
                'woundType'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'stage'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '6',
              items: [
                'stageDate'
              ]
            },
            {
              ehr_list_index: '7',
              items: [
                'wound/Location'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '8',
              items: [
                'locationDate'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'length'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'width'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '11',
              items: [
                'depth'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'sinusDepth1'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '13',
              items: [
                'sinusDepthLocation1'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'sinusDepth2'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '15',
              items: [
                'sinusDepthLocation2'
              ]
            },
            {
              ehr_list_index: '16',
              items: [
                'underminingDepth1'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '17',
              items: [
                'underminingDepthLocation1'
              ]
            },
            {
              ehr_list_index: '18',
              items: [
                'underminingDepth2'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '19',
              items: [
                'underminingDepthLocation2'
              ]
            },
            {
              ehr_list_index: '20',
              items: [
                'pinkred'
              ]
            },
            {
              ehr_list_index: '21',
              items: [
                'granulation'
              ]
            },
            {
              ehr_list_index: '22',
              items: [
                'slough'
              ]
            },
            {
              ehr_list_index: '23',
              items: [
                'eschar'
              ]
            },
            {
              ehr_list_index: '24',
              items: [
                'foreign'
              ]
            },
            {
              ehr_list_index: '25',
              items: [
                'underlying'
              ]
            },
            {
              ehr_list_index: '26',
              items: [
                'notVisible'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '27',
              items: [
                'other'
              ]
            },
            {
              ehr_list_index: '28',
              items: [
                'woundBedCalculation'
              ]
            },
            {
              ehr_list_index: '29',
              items: [
                'exudateAmount'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '30',
              items: [
                'exudateType'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '31',
              items: [
                'odour'
              ]
            },
            {
              ehr_list_index: '32',
              items: [
                'woundEdge'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '33',
              items: [
                'periWoundSkin'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '34',
              items: [
                'woundPain'
              ]
            },
            {
              ehr_list_index: '35',
              items: [
                'packingOut'
              ]
            },
            {
              tableCss: 'hr-table',
              ehr_list_index: '36',
              items: [
                'packinIn'
              ]
            },
            {
              ehr_list_index: '37',
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
                  'woundDateOnset',
                  'goalOfCare',
                  'woundType'
                ]
              },
              {
                label: 'Pressure ulcers',
                gIndex: '3',
                gChildren: [
                  'stage',
                  'stageDate'
                ]
              },
              {
                gIndex: '4',
                gChildren: [
                  'wound/Location',
                  'locationDate'
                ]
              },
              {
                label: 'Head wounds',
                gIndex: '5',
                gChildren: [
                  'aLabel',
                  'length',
                  'width',
                  'depth',
                  'sinusDepth1',
                  'sinusDepthLocation1',
                  'sinusDepth2',
                  'sinusDepthLocation2',
                  'underminingDepth1',
                  'underminingDepthLocation1',
                  'underminingDepth2',
                  'underminingDepthLocation2'
                ]
              },
              {
                label: 'Wound bed',
                gIndex: '6',
                gChildren: [
                  'pinkred',
                  'granulation',
                  'slough',
                  'eschar',
                  'foreign',
                  'underlying',
                  'notVisible',
                  'other',
                  'woundBedCalculation'
                ]
              },
              {
                gIndex: '7',
                gChildren: [
                  'exudateAmount',
                  'exudateType',
                  'odour',
                  'woundEdge',
                  'periWoundSkin',
                  'aLabel',
                  'woundPain'
                ]
              },
              {
                label: 'Treatment',
                gIndex: '8',
                gChildren: [
                  'packingOut',
                  'packinIn',
                  'treatmentComplete'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              woundDateOnset: '',
              goalOfCare: '',
              woundType: '',
              stage: '',
              stageDate: '',
              'wound/Location': '',
              locationDate: '',
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
              pinkred: '',
              granulation: '',
              slough: '',
              eschar: '',
              foreign: '',
              underlying: '',
              notVisible: '',
              other: '',
              woundBedCalculation: '0',
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