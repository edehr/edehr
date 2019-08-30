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
          tableLabel: 'Header',
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
          elementKey: 'none',
          assetBase: 'standardized-assessment-tools',
          assetName: 'opqrstuv.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'None',
          tableColumn: '2',
          fqn: 'genitourinary.none'
        },
        {
          elementKey: 'increasedFrequency',
          assetBase: 'standardized-assessment-tools',
          assetName: 'numeric-rating-scale.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Increased frequency',
          tableColumn: '2',
          fqn: 'genitourinary.increasedFrequency'
        },
        {
          elementKey: 'dysuria',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Dysuria',
          tableColumn: '2',
          fqn: 'genitourinary.dysuria'
        },
        {
          elementKey: 'hernaturia',
          assetBase: 'standardized-assessment-tools',
          assetName: 'glasgow-coma-scale.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Hermaturia',
          tableColumn: '2',
          fqn: 'genitourinary.hernaturia'
        },
        {
          elementKey: 'oliguria',
          assetBase: 'standardized-assessment-tools',
          assetName: 'mini-mental-health-screen.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Oliguria',
          tableColumn: '2',
          fqn: 'genitourinary.oliguria'
        },
        {
          elementKey: 'incontinence',
          assetBase: 'standardized-assessment-tools',
          assetName: 'richmond-agitation-sedation-scale-rass.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Incontinence',
          tableColumn: '2',
          fqn: 'genitourinary.incontinence'
        },
        {
          elementKey: 'retention',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Retention',
          tableColumn: '2',
          fqn: 'genitourinary.retention'
        },
        {
          elementKey: 'distention',
          assetBase: 'standardized-assessment-tools',
          assetName: 'fall-risk-assessment-tool.pdf',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Distention',
          tableColumn: '2',
          fqn: 'genitourinary.distention'
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
          tableLabel: 'Last catheter change',
          fqn: 'genitourinary.lastChange'
        },
        {
          elementKey: 'pelvicPain',
          dataCaseStudy: 'No',
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
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '13',
          tableLabel: 'Location',
          fqn: 'genitourinary.location'
        },
        {
          elementKey: 'pelvicPainSource',
          dataCaseStudy: '(not filled)',
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
          tableLabel: 'Pelvic pain source',
          fqn: 'genitourinary.pelvicPainSource'
        },
        {
          elementKey: 'aLabel',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'form_label',
          label: 'If answered yes, please complete the pain assessment',
          tableColumn: '15',
          tableLabel: 'If answered yes, please complete the pain assessment',
          fqn: 'genitourinary.aLabel'
        },
        {
          elementKey: 'discharge',
          assetBase: '?',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Discharge',
          tableColumn: '16',
          tableLabel: 'Discharge',
          fqn: 'genitourinary.discharge'
        },
        {
          elementKey: 'bleeding',
          assetBase: '?',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Bleeding',
          tableColumn: '17',
          tableLabel: 'Bleeding',
          fqn: 'genitourinary.bleeding'
        },
        {
          elementKey: 'description',
          assetBase: '?',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'text',
          label: 'Description',
          tableColumn: '18',
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
          tableColumn: '19',
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
          tableColumn: '20',
          tableLabel: 'Pregnant',
          fqn: 'genitourinary.pregnant'
        },
        {
          elementKey: 'gravida',
          dataCaseStudy: '5',
          formIndex: '1',
          inputType: 'text',
          label: 'Gravida (number of pregnancies)',
          tableColumn: '21',
          tableLabel: 'Gravida (number of pregnancies)',
          fqn: 'genitourinary.gravida'
        },
        {
          elementKey: 'para',
          dataCaseStudy: '4',
          formIndex: '1',
          inputType: 'text',
          label: 'Para (number of children)',
          tableColumn: '22',
          tableLabel: 'Para (number of children)',
          fqn: 'genitourinary.para'
        },
        {
          elementKey: 'livingChildren',
          dataCaseStudy: '4',
          formIndex: '1',
          inputType: 'text',
          label: 'Living children',
          tableColumn: '23',
          tableLabel: 'Living children',
          fqn: 'genitourinary.livingChildren'
        },
        {
          elementKey: 'comments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '24',
          tableLabel: 'Comments',
          fqn: 'genitourinary.comments'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a genitourinary assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              ehr_list_index: '2',
              items: [
                'none',
                'increasedFrequency',
                'dysuria',
                'hernaturia',
                'oliguria',
                'incontinence',
                'retention',
                'distention'
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
              ehr_list_index: '14',
              items: [
                'pelvicPainSource'
              ]
            },
            {
              label: 'If answered yes, please complete the pain assessment',
              ehr_list_index: '15',
              items: [
                'aLabel'
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
              label: 'Bleeding',
              ehr_list_index: '17',
              items: [
                'bleeding'
              ]
            },
            {
              label: 'Description',
              ehr_list_index: '18',
              items: [
                'description'
              ]
            },
            {
              label: 'Last menstrual period date',
              ehr_list_index: '19',
              items: [
                'lastMenstrualPeriodDate'
              ]
            },
            {
              label: 'Pregnant',
              ehr_list_index: '20',
              items: [
                'pregnant'
              ]
            },
            {
              label: 'Gravida (number of pregnancies)',
              ehr_list_index: '21',
              items: [
                'gravida'
              ]
            },
            {
              label: 'Para (number of children)',
              ehr_list_index: '22',
              items: [
                'para'
              ]
            },
            {
              label: 'Living children',
              ehr_list_index: '23',
              items: [
                'livingChildren'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '24',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a genitourinary assessment',
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
                  {
                    label: 'Urinary symptoms',
                    elementKey: 'subgroup105',
                    sgChildren: [
                      'none',
                      'increasedFrequency',
                      'dysuria',
                      'hernaturia',
                      'oliguria',
                      'incontinence',
                      'retention',
                      'distention'
                    ]
                  },
                  {
                    label: 'Urinary',
                    elementKey: 'subgroup106',
                    sgChildren: [
                      'lastVoidedDay',
                      'lastVoidedTime',
                      'colour',
                      'consistency',
                      'diaper'
                    ]
                  },
                  {
                    label: 'Foley',
                    elementKey: 'subgroup107',
                    sgChildren: [
                      'foley',
                      'foleyType',
                      'foleySize',
                      'lastChange'
                    ]
                  },
                  {
                    label: 'Pelvic',
                    elementKey: 'subgroup108',
                    sgChildren: [
                      'pelvicPain',
                      'location',
                      'pelvicPainSource',
                      'aLabel'
                    ]
                  },
                  {
                    label: 'Vaginal',
                    elementKey: 'subgroup109',
                    sgChildren: [
                      'discharge',
                      'bleeding',
                      'description',
                      'lastMenstrualPeriodDate'
                    ]
                  },
                  {
                    label: 'Pregnancy',
                    elementKey: 'subgroup110',
                    sgChildren: [
                      'pregnant',
                      'gravida',
                      'para',
                      'livingChildren'
                    ]
                  }
                ]
              },
              {
                formCss: 'full-grid',
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
              none: '',
              increasedFrequency: '',
              dysuria: '',
              hernaturia: '',
              oliguria: '',
              incontinence: '',
              retention: '',
              distention: '',
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
              bleeding: '',
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
          tableLabel: 'Header',
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
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a musculoskeletal assessment',
          ehr_list: [
            {
              label: 'Header',
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
                  'useOfAmbulatoryAid',
                  'type'
                ]
              },
              {
                formCss: 'full-grid',
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
          tableLabel: 'Header',
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
          tableColumn: '1',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          dataCaseStudy: '0',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain intensity (0-10)',
          tableColumn: '2',
          tableLabel: 'Pain intensity (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          dataCaseStudy: '28',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate (br/min)',
          tableColumn: '3',
          tableLabel: 'Respiratory rate (br/min)',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '4',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '5',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '6',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '7',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '8',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '9',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        },
        {
          elementKey: 'location',
          formIndex: '1',
          inputType: 'text',
          label: 'Location',
          tableColumn: '11',
          tableLabel: 'Location',
          fqn: 'pain.location'
        },
        {
          elementKey: 'painScale',
          formIndex: '1',
          inputType: 'text',
          label: 'Pain scale (0-10)',
          tableColumn: '12',
          tableLabel: 'Pain scale (0-10)',
          fqn: 'pain.painScale'
        },
        {
          elementKey: 'respiratoryRate',
          formIndex: '1',
          inputType: 'text',
          label: 'Respiratory rate (br/min)',
          tableColumn: '13',
          tableLabel: 'Respiratory rate (br/min)',
          fqn: 'pain.respiratoryRate'
        },
        {
          elementKey: 'onset',
          formIndex: '1',
          inputType: 'text',
          label: 'Onset',
          tableColumn: '14',
          tableLabel: 'Onset',
          fqn: 'pain.onset'
        },
        {
          elementKey: 'type',
          formIndex: '1',
          inputType: 'text',
          label: 'Type',
          tableColumn: '15',
          tableLabel: 'Type',
          fqn: 'pain.type'
        },
        {
          elementKey: 'alleviationAssociatedSymptoms',
          formIndex: '1',
          inputType: 'text',
          label: 'Alleviation & associated symptoms',
          tableColumn: '16',
          tableLabel: 'Alleviation & associated symptoms',
          fqn: 'pain.alleviationAssociatedSymptoms'
        },
        {
          elementKey: 'radiation',
          formIndex: '1',
          inputType: 'text',
          label: 'Radiation',
          tableColumn: '17',
          tableLabel: 'Radiation',
          fqn: 'pain.radiation'
        },
        {
          elementKey: 'precipitatingEvents',
          formIndex: '1',
          inputType: 'text',
          label: 'Precipitating events',
          tableColumn: '18',
          tableLabel: 'Precipitating events',
          fqn: 'pain.precipitatingEvents'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '19',
          tableLabel: 'Comments',
          fqn: 'pain.comments'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a pain assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time',
                'location'
              ]
            },
            {
              label: 'Pain intensity (0-10)',
              ehr_list_index: '2',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate (br/min)',
              ehr_list_index: '3',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '4',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '5',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '6',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '7',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              ehr_list_index: '8',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '9',
              items: [
                'comments'
              ]
            },
            {
              label: 'Location',
              ehr_list_index: '11',
              items: [
                'location'
              ]
            },
            {
              label: 'Pain scale (0-10)',
              ehr_list_index: '12',
              items: [
                'painScale'
              ]
            },
            {
              label: 'Respiratory rate (br/min)',
              ehr_list_index: '13',
              items: [
                'respiratoryRate'
              ]
            },
            {
              label: 'Onset',
              ehr_list_index: '14',
              items: [
                'onset'
              ]
            },
            {
              label: 'Type',
              ehr_list_index: '15',
              items: [
                'type'
              ]
            },
            {
              label: 'Alleviation & associated symptoms',
              ehr_list_index: '16',
              items: [
                'alleviationAssociatedSymptoms'
              ]
            },
            {
              label: 'Radiation',
              ehr_list_index: '17',
              items: [
                'radiation'
              ]
            },
            {
              label: 'Precipitating events',
              ehr_list_index: '18',
              items: [
                'precipitatingEvents'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '19',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a pain assessment',
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
                formCss: 'full-grid',
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
                formCss: 'full-grid',
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
      pageTitle: 'Biopsychosocial',
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
          tableLabel: 'Header',
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
          tableLabel: 'NEED LABEL',
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
          tableLabel: 'NEED LABEL',
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
          tableLabel: 'Hygiene comments',
          fqn: 'biopsychosocial.hygieneComments'
        },
        {
          elementKey: 'calm',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Calm',
          tableColumn: '6',
          tableLabel: 'Behaviour',
          fqn: 'biopsychosocial.calm'
        },
        {
          elementKey: 'cooperative',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Cooperative',
          tableColumn: '6',
          fqn: 'biopsychosocial.cooperative'
        },
        {
          elementKey: 'agitated',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Agitated',
          tableColumn: '6',
          fqn: 'biopsychosocial.agitated'
        },
        {
          elementKey: 'flat',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Flat affect',
          tableColumn: '6',
          fqn: 'biopsychosocial.flat'
        },
        {
          elementKey: 'threatening',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Threatening',
          tableColumn: '6',
          fqn: 'biopsychosocial.threatening'
        },
        {
          elementKey: 'agressive',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Physically agressive',
          tableColumn: '6',
          fqn: 'biopsychosocial.agressive'
        },
        {
          elementKey: 'uncommunicative',
          dataCaseStudy: 'Calm-NL-Cooperative',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Uncommunicative',
          tableColumn: '6',
          fqn: 'biopsychosocial.uncommunicative'
        },
        {
          elementKey: 'none',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'None',
          tableColumn: '7',
          tableLabel: 'Hallucinations',
          fqn: 'biopsychosocial.none'
        },
        {
          elementKey: 'visual',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Visual',
          tableColumn: '7',
          fqn: 'biopsychosocial.visual'
        },
        {
          elementKey: 'auditory',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Auditory',
          tableColumn: '7',
          fqn: 'biopsychosocial.auditory'
        },
        {
          elementKey: 'olafactory',
          dataCaseStudy: 'None',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Olafactory',
          tableColumn: '7',
          fqn: 'biopsychosocial.olafactory'
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
          tableColumn: '8',
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
          tableColumn: '8',
          fqn: 'biopsychosocial.speech'
        },
        {
          elementKey: 'supportPerson',
          dataCaseStudy: 'Thomas',
          formIndex: '1',
          inputType: 'text',
          label: 'Support person',
          tableColumn: '9',
          tableLabel: 'Support',
          fqn: 'biopsychosocial.supportPerson'
        },
        {
          elementKey: 'supportComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Support comments',
          tableColumn: '9',
          fqn: 'biopsychosocial.supportComments'
        },
        {
          elementKey: 'securityPolicePresent',
          dataCaseStudy: 'No',
          formIndex: '1',
          inputType: 'text',
          label: 'Security/police present',
          tableColumn: '10',
          tableLabel: 'Security',
          fqn: 'biopsychosocial.securityPolicePresent'
        },
        {
          elementKey: 'securityComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Security comments',
          tableColumn: '10',
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
          tableColumn: '11',
          tableLabel: 'Patient restrained',
          fqn: 'biopsychosocial.patientRestrained'
        },
        {
          elementKey: 'restraintDay',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '12',
          tableLabel: 'Day',
          fqn: 'biopsychosocial.restraintDay'
        },
        {
          elementKey: 'restraintTime',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '13',
          tableLabel: 'Time',
          fqn: 'biopsychosocial.restraintTime'
        },
        {
          elementKey: 'restraintComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Restraint comments',
          tableColumn: '14',
          tableLabel: 'Restraint comments',
          fqn: 'biopsychosocial.restraintComments'
        },
        {
          elementKey: 'generalComments',
          dataCaseStudy: '(not filled)',
          formIndex: '1',
          inputType: 'textarea',
          label: 'General comments',
          tableColumn: '15',
          tableLabel: 'General comments',
          fqn: 'biopsychosocial.generalComments'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a biopsychosocial assessment',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'NEED LABEL',
              ehr_list_index: '2',
              items: [
                'domesticViolence'
              ]
            },
            {
              label: 'NEED LABEL',
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
              ehr_list_index: '5',
              items: [
                'hygieneComments'
              ]
            },
            {
              label: 'Behaviour',
              ehr_list_index: '6',
              items: [
                'calm',
                'cooperative',
                'agitated',
                'flat',
                'threatening',
                'agressive',
                'uncommunicative'
              ]
            },
            {
              label: 'Hallucinations',
              ehr_list_index: '7',
              items: [
                'none',
                'visual',
                'auditory',
                'olafactory'
              ]
            },
            {
              label: 'Psychological state',
              ehr_list_index: '8',
              items: [
                'suicidal',
                'homicidal',
                'speech'
              ]
            },
            {
              label: 'Support',
              ehr_list_index: '9',
              items: [
                'supportPerson',
                'supportComments'
              ]
            },
            {
              label: 'Security',
              ehr_list_index: '10',
              items: [
                'securityPolicePresent',
                'securityComments'
              ]
            },
            {
              label: 'Patient restrained',
              ehr_list_index: '11',
              items: [
                'patientRestrained'
              ]
            },
            {
              label: 'Day',
              ehr_list_index: '12',
              items: [
                'restraintDay'
              ]
            },
            {
              label: 'Time',
              ehr_list_index: '13',
              items: [
                'restraintTime'
              ]
            },
            {
              label: 'Restraint comments',
              ehr_list_index: '14',
              items: [
                'restraintComments'
              ]
            },
            {
              label: 'General comments',
              ehr_list_index: '15',
              items: [
                'generalComments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a biopsychosocial assessment',
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
                  {
                    label: 'Hygiene and grooming',
                    elementKey: 'subgroup111',
                    sgChildren: [
                      'hygieneGrooming',
                      'hygieneComments'
                    ]
                  },
                  {
                    label: 'Behaviour',
                    elementKey: 'subgroup112',
                    sgChildren: [
                      'calm',
                      'cooperative',
                      'agitated',
                      'flat',
                      'threatening',
                      'agressive',
                      'uncommunicative'
                    ]
                  },
                  {
                    label: 'Hallucinations',
                    elementKey: 'subgroup113',
                    sgChildren: [
                      'none',
                      'visual',
                      'auditory',
                      'olafactory'
                    ]
                  },
                  {
                    label: 'Psychological state',
                    elementKey: 'subgroup114',
                    sgChildren: [
                      'suicidal',
                      'homicidal',
                      'speech'
                    ]
                  },
                  {
                    label: 'Support',
                    elementKey: 'subgroup115',
                    sgChildren: [
                      'supportPerson',
                      'supportComments'
                    ]
                  },
                  {
                    label: 'Security',
                    elementKey: 'subgroup116',
                    sgChildren: [
                      'securityPolicePresent',
                      'securityComments'
                    ]
                  },
                  {
                    label: 'Restraint',
                    elementKey: 'subgroup117',
                    sgChildren: [
                      'patientRestrained',
                      'restraintDay',
                      'restraintTime',
                      'restraintComments'
                    ]
                  }
                ]
              },
              {
                formCss: 'full-grid',
                gIndex: '3',
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
              hygieneGrooming: '',
              hygieneComments: '',
              calm: '',
              cooperative: '',
              agitated: '',
              flat: '',
              threatening: '',
              agressive: '',
              uncommunicative: '',
              none: '',
              visual: '',
              auditory: '',
              olafactory: '',
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
          tableLabel: 'Header',
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
          formCss: 'span-2',
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
          formCss: 'span-2',
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
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an order',
          ehr_list: [
            {
              label: 'Header',
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
                formCss: 'full-grid',
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
          tableLabel: 'Header',
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
          elementKey: 'spacer95',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'referrals.spacer95'
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
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a referral',
          ehr_list: [
            {
              label: 'Header',
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
                  'spacer95',
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
          tableLabel: 'Header',
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
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Requisition',
          tableColumn: '2',
          tableLabel: 'Requisition',
          fqn: 'labRequisitions.requisition'
        },
        {
          elementKey: 'ordered',
          formIndex: '1',
          inputType: 'day',
          label: 'Ordered (day)',
          tableColumn: '3',
          tableLabel: 'Ordered (day)',
          fqn: 'labRequisitions.ordered'
        },
        {
          elementKey: 'collected',
          formIndex: '1',
          inputType: 'day',
          label: 'Collected (day)',
          tableColumn: '4',
          tableLabel: 'Collected (day)',
          fqn: 'labRequisitions.collected'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a lab requisition',
          ehr_list: [
            {
              label: 'Header',
              ehr_list_index: '1',
              items: [
                'name',
                'profession',
                'day',
                'time'
              ]
            },
            {
              label: 'Requisition',
              ehr_list_index: '2',
              items: [
                'requisition'
              ]
            },
            {
              label: 'Ordered (day)',
              ehr_list_index: '3',
              items: [
                'ordered'
              ]
            },
            {
              label: 'Collected (day)',
              ehr_list_index: '4',
              items: [
                'collected'
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
                  'ordered',
                  'collected'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              ordered: '',
              collected: ''
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
          tableLabel: 'Header',
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
          formCss: 'span-2',
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
              text: 'Anal'
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
          tableLabel: 'End day',
          fqn: 'medicationOrders.endMeds'
        },
        {
          elementKey: 'scheduleType',
          formIndex: '1',
          inputType: 'select',
          label: 'Schedule type',
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
          tableLabel: 'Schedule type',
          fqn: 'medicationOrders.scheduleType'
        },
        {
          elementKey: 'scheduleTime',
          formIndex: '1',
          inputType: 'checkset',
          label: 'Schedule time',
          options: [
            {
              text: 'Morning'
            },
            {
              text: 'Mid day'
            },
            {
              text: 'Bedtime'
            }
          ],
          tableColumn: '8',
          tableLabel: 'Schedule time',
          fqn: 'medicationOrders.scheduleTime'
        },
        {
          elementKey: 'instructions',
          formIndex: '1',
          inputType: 'text',
          label: 'Instructions',
          tableColumn: '9',
          tableLabel: 'Instructions',
          fqn: 'medicationOrders.instructions'
        },
        {
          elementKey: 'reason',
          formIndex: '1',
          inputType: 'text',
          label: 'Reason',
          tableColumn: '10',
          tableLabel: 'Reason',
          fqn: 'medicationOrders.reason'
        },
        {
          elementKey: 'notes',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Notes',
          tableColumn: '11',
          tableLabel: 'Notes',
          fqn: 'medicationOrders.notes'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a medication order',
          ehr_list: [
            {
              label: 'Header',
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
              ehr_list_index: '6',
              items: [
                'endMeds'
              ]
            },
            {
              label: 'Schedule type',
              ehr_list_index: '7',
              items: [
                'scheduleType'
              ]
            },
            {
              label: 'Schedule time',
              ehr_list_index: '8',
              items: [
                'scheduleTime'
              ]
            },
            {
              label: 'Instructions',
              ehr_list_index: '9',
              items: [
                'instructions'
              ]
            },
            {
              label: 'Reason',
              ehr_list_index: '10',
              items: [
                'reason'
              ]
            },
            {
              label: 'Notes',
              ehr_list_index: '11',
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
                  'endMeds',
                  'scheduleType',
                  'scheduleTime'
                ]
              },
              {
                formCss: 'full-grid',
                gIndex: '3',
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
              scheduleType: '',
              scheduleTime: '',
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
          tableLabel: 'Today\'s given',
          fqn: 'medAdminRec.todayGiven'
        },
        {
          elementKey: 'administeredBy',
          formIndex: '1',
          inputType: 'text',
          label: 'Administered by',
          tableLabel: 'Administered by',
          fqn: 'medAdminRec.administeredBy'
        },
        {
          elementKey: 'actualTime',
          formIndex: '1',
          helperText: 'Enter time delivered or say if not delivered.',
          inputType: 'text',
          label: 'Actual time',
          tableLabel: 'Actual time',
          fqn: 'medAdminRec.actualTime',
          helperHtml: '<p>Enter time delivered or say if not delivered.</p>'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an administration record',
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
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an administration record',
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
      generated: '2019-08-30T10:19:43-07:00',
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
                'dischargeDay',
                'dischargeTime',
                'dischargedTo',
                'transferedTo',
                'leavingBy'
              ]
            },
            {
              formCss: 'full-grid',
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
          elementKey: 'msp',
          dataCaseStudy: 'MSP',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'MSP',
          fqn: 'billing.msp'
        },
        {
          elementKey: 'thirdParty',
          dataCaseStudy: 'MSP',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Third party',
          fqn: 'billing.thirdParty'
        },
        {
          elementKey: 'federal',
          dataCaseStudy: 'MSP',
          formIndex: '1',
          inputType: 'checkbox',
          label: 'Federal',
          fqn: 'billing.federal'
        }
      ],
      generated: '2019-08-30T10:19:43-07:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              formCss: 'full-grid',
              gIndex: '1',
              gChildren: [
                'msp',
                'thirdParty',
                'federal'
              ]
            }
          ]
        }
      }
    }
  }
}