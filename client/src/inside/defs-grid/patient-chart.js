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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'progressNotes.name'
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
      generated: '2020-08-25T10:52:37-07:00',
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
                'name',
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
                elementKey: 'ehr_group2',
                formCss: 'grid-left-to-right-1',
                gIndex: '2',
                gChildren: [
                  'note'
                ]
              }
            ],
            ehr_data: {
              name: '',
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
          elementKey: 'name',
          formIndex: '1',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'carePlan.name'
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
      generated: '2020-08-25T10:52:37-07:00',
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
                'name',
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
                elementKey: 'ehr_group3',
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
                elementKey: 'ehr_group4',
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
              name: '',
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
          fqn: 'consults.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'consults.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'consults.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'consults.time'
        },
        {
          elementKey: 'consultReport',
          formIndex: '1',
          inputType: 'ehrFile',
          label: 'Consult Report',
          tableColumn: '2',
          tableLabel: 'Consult Report',
          fqn: 'consults.consultReport'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '3',
          tableLabel: 'Comments',
          fqn: 'consults.comments'
        }
      ],
      recHeader: true,
      generated: '2020-08-25T10:52:37-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a consulttion report',
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
              label: 'Consult Report',
              ehr_list_index: '2',
              items: [
                'consultReport'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '3',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a consulttion report',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group5',
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
                elementKey: 'ehr_group6',
                gIndex: '2',
                gChildren: [
                  'consultReport',
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              consultReport: '',
              comments: ''
            }
          }
        }
      }
    },
    labResults: {
      pageDataKey: 'labResults',
      pageTitle: 'Laboratory reports',
      pIndex: '32',
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
          fqn: 'labResults.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labResults.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labResults.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'labResults.time'
        },
        {
          elementKey: 'laboratoryReport',
          formIndex: '1',
          inputType: 'ehrFile',
          label: 'Laboratory Report',
          tableColumn: '2',
          tableLabel: 'Laboratory Report',
          fqn: 'labResults.laboratoryReport'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '3',
          tableLabel: 'Comments',
          fqn: 'labResults.comments'
        }
      ],
      recHeader: true,
      generated: '2020-08-25T10:52:37-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a laboratory report',
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
              label: 'Laboratory Report',
              ehr_list_index: '2',
              items: [
                'laboratoryReport'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '3',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a laboratory report',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group7',
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
                elementKey: 'ehr_group8',
                gIndex: '2',
                gChildren: [
                  'laboratoryReport',
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              laboratoryReport: '',
              comments: ''
            }
          }
        }
      }
    },
    medicalImaging: {
      pageDataKey: 'medicalImaging',
      pageTitle: 'Medical imaging',
      pIndex: '33',
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
          fqn: 'medicalImaging.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicalImaging.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicalImaging.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'medicalImaging.time'
        },
        {
          elementKey: 'laboratoryReport',
          formIndex: '1',
          inputType: 'ehrFile',
          label: 'Medical imaging',
          tableColumn: '2',
          tableLabel: 'Medical imaging',
          fqn: 'medicalImaging.laboratoryReport'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '3',
          tableLabel: 'Comments',
          fqn: 'medicalImaging.comments'
        }
      ],
      recHeader: true,
      generated: '2020-08-25T10:52:37-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a report or image',
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
              label: 'Medical imaging',
              ehr_list_index: '2',
              items: [
                'laboratoryReport'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '3',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a report or image',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group9',
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
                elementKey: 'ehr_group10',
                gIndex: '2',
                gChildren: [
                  'laboratoryReport',
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              laboratoryReport: '',
              comments: ''
            }
          }
        }
      }
    },
    operationReports: {
      pageDataKey: 'operationReports',
      pageTitle: 'Operative reports and anaesthesia records',
      pIndex: '34',
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
          fqn: 'operationReports.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'operationReports.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'day',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'operationReports.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'time',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'operationReports.time'
        },
        {
          elementKey: 'laboratoryReport',
          formIndex: '1',
          inputType: 'ehrFile',
          label: 'Operative reports and anaesthesia records',
          tableColumn: '2',
          tableLabel: 'Operative reports and anaesthesia records',
          fqn: 'operationReports.laboratoryReport'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '3',
          tableLabel: 'Comments',
          fqn: 'operationReports.comments'
        }
      ],
      recHeader: true,
      generated: '2020-08-25T10:52:37-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          addButtonText: 'Add a report',
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
              label: 'Operative reports and anaesthesia records',
              ehr_list_index: '2',
              items: [
                'laboratoryReport'
              ]
            },
            {
              label: 'Comments',
              ehr_list_index: '3',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'table',
            addButtonText: 'Add a report',
            formKey: 'table',
            ehr_groups: [
              {
                elementKey: 'ehr_group11',
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
                elementKey: 'ehr_group12',
                gIndex: '2',
                gChildren: [
                  'laboratoryReport',
                  'comments'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              laboratoryReport: '',
              comments: ''
            }
          }
        }
      }
    }
  }
}