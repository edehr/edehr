export default function () {
  return {
    progressNotes: {
      pageDataKey: 'progressNotes',
      pageTitle: 'Progress notes',
      pIndex: '29',
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
          fqn: 'progressNotes.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'progressNotes.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'progressNotes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'progressNotes.time'
        },
        {
          elementKey: 'note',
          dataCaseStudy: 'Erin Johns is 74 years old. She is widowed with four children, one of whom lives at home with her in their original family home. Two of Erins children live within a one-hour drive from her, and one lives a three-hour flight away. She also has 10 grandchildren and one great grandchild. Erin describes herself as a non-smoker, but she smoked socially when she was in her early twenties for about five years. She is a retired hairdresser.',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Encounter note',
          tableColumn: '2',
          tableLabel: 'Encounter note',
          fqn: 'progressNotes.note'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add an encounter note',
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
              label: 'Encounter note',
              ehr_list_index: '2',
              items: [
                'note'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add an encounter note',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group114',
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
                elementKey: 'ehr_group115',
                formCss: 'grid-left-to-right-1',
                gIndex: '2',
                gChildren: [
                  'note'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              note: ''
            }
          }
        }
      }
    },
    carePlan: {
      pageDataKey: 'carePlan',
      pageTitle: 'Interprofessional plan of care',
      pIndex: '30',
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
          fqn: 'carePlan.persona'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'carePlan.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'carePlan.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'carePlan.time'
        },
        {
          elementKey: 'clinical',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Clinical issue',
          tableColumn: '2',
          tableLabel: 'Clinical issue',
          fqn: 'carePlan.clinical'
        },
        {
          elementKey: 'goal',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Goal of care',
          tableColumn: '3',
          tableLabel: 'Goal of care',
          fqn: 'carePlan.goal'
        },
        {
          elementKey: 'interventions',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Intervention',
          tableColumn: '4',
          tableLabel: 'Intervention',
          fqn: 'carePlan.interventions'
        },
        {
          elementKey: 'evaluation',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Evaluation of intervention',
          tableColumn: '5',
          tableLabel: 'Evaluation of intervention',
          fqn: 'carePlan.evaluation'
        },
        {
          elementKey: 'status',
          formIndex: '1',
          inputType: 'select',
          label: 'Status',
          options: [
            {
              key: 'In progress',
              text: 'In progress'
            },
            {
              key: 'Complete',
              text: 'Complete'
            }
          ],
          tableColumn: '6',
          tableLabel: 'Status',
          fqn: 'carePlan.status'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a care plan',
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
              label: 'Clinical issue',
              ehr_list_index: '2',
              items: [
                'clinical'
              ]
            },
            {
              label: 'Goal of care',
              ehr_list_index: '3',
              items: [
                'goal'
              ]
            },
            {
              label: 'Intervention',
              ehr_list_index: '4',
              items: [
                'interventions'
              ]
            },
            {
              label: 'Evaluation of intervention',
              ehr_list_index: '5',
              items: [
                'evaluation'
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
            addButtonText: 'Add a care plan',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group116',
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
                elementKey: 'ehr_group117',
                gIndex: '2',
                gChildren: [
                  'clinical',
                  'goal',
                  'interventions',
                  'evaluation',
                  'status'
                ]
              }
            ],
            ehr_data: {
              persona: '',
              profession: '',
              day: '',
              time: '',
              clinical: '',
              goal: '',
              interventions: '',
              evaluation: '',
              status: ''
            }
          }
        }
      }
    },
    consults: {
      pageDataKey: 'consults',
      pageTitle: 'Consults',
      pIndex: '31',
      isV2: true,
      hasGridForm: true,
      pageChildren: [],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: []
        }
      }
    },
    labResults: {
      pageDataKey: 'labResults',
      pageTitle: 'Laboratory results',
      pIndex: '32',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'labReport1_1',
          assetBase: 'lab-reports',
          assetName: 'day-0-abg-laboratory-report.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'ABG laboratory report',
          fqn: 'labResults.labReport1_1'
        },
        {
          elementKey: 'labReport2_1',
          assetBase: 'lab-reports',
          assetName: 'day-1-abg-laboratory-report.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'ABG laboratory report',
          fqn: 'labResults.labReport2_1'
        },
        {
          elementKey: 'labReport3_1',
          assetBase: 'lab-reports',
          assetName: 'day-3-c-s-laboratory-report.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'C&S laboratory report',
          fqn: 'labResults.labReport3_1'
        },
        {
          elementKey: 'labReport4_1',
          assetBase: 'lab-reports',
          assetName: 'day-3-final-c-s-laboratory-report.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Final C&S laboratory report',
          fqn: 'labResults.labReport4_1'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group118',
              gIndex: '1',
              gChildren: [
                {
                  elementKey: 'labReport',
                  sgChildren: [
                    'labReport1_1',
                    'labReport2_1',
                    'labReport3_1',
                    'labReport4_1'
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    medicalImaging: {
      pageDataKey: 'medicalImaging',
      pageTitle: 'Medical imaging',
      pIndex: '33',
      isV2: true,
      hasGridForm: true,
      pageChildren: [
        {
          elementKey: 'day0',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Day 0',
          fqn: 'medicalImaging.day0'
        },
        {
          elementKey: 'copd_xray',
          assetBase: 'diagnostic-test-results',
          assetName: 'xray-report-for-copd-day-0.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'COPD xray',
          fqn: 'medicalImaging.copd_xray'
        },
        {
          elementKey: 'copd_report',
          assetBase: 'diagnostic-test-results',
          assetName: 'copd-xray.jpg',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'COPD report',
          fqn: 'medicalImaging.copd_report'
        },
        {
          elementKey: 'day2',
          formIndex: '1',
          inputType: 'form_label',
          label: 'Day 2',
          fqn: 'medicalImaging.day2'
        },
        {
          elementKey: 'pneumonia_xray',
          assetBase: 'diagnostic-test-results',
          assetName: 'xray-report-for-pneumonia-day-2.pdf',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Pneumonia xray',
          fqn: 'medicalImaging.pneumonia_xray'
        },
        {
          elementKey: 'pneumonia_report',
          assetBase: 'diagnostic-test-results',
          assetName: 'chest-xray-with-pneumonia.jpg',
          formIndex: '1',
          inputType: 'assetLink',
          label: 'Pneumonia report',
          fqn: 'medicalImaging.pneumonia_report'
        }
      ],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: [
            {
              elementKey: 'ehr_group119',
              gIndex: '1',
              gChildren: [
                'day0',
                'copd_xray',
                'copd_report',
                'day2',
                'pneumonia_xray',
                'pneumonia_report'
              ]
            }
          ]
        }
      }
    },
    operationReports: {
      pageDataKey: 'operationReports',
      pageTitle: 'Operative reports and anaesthesia record',
      pIndex: '34',
      isV2: true,
      hasGridForm: true,
      pageChildren: [],
      recHeader: true,
      generated: '2020-02-10T11:05:37-02:00',
      pageElements: {
        pageForm: {
          elementKey: 'pageForm',
          formKey: 'pageForm',
          isPageForm: true,
          ehr_groups: []
        }
      }
    }
  }
}