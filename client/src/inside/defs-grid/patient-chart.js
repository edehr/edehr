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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'progressNotes.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'progressNotes.time'
        },
        {
          elementKey: 'note',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Encounter note',
          tableColumn: '2',
          tableLabel: 'Encounter note',
          fqn: 'progressNotes.note'
        }
      ],
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
                elementKey: 'ehr_group113',
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
                elementKey: 'ehr_group114',
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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'carePlan.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
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
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
                elementKey: 'ehr_group115',
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
                elementKey: 'ehr_group116',
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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'consults.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
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
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
                elementKey: 'ehr_group117',
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
                elementKey: 'ehr_group118',
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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'labResults.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
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
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
                elementKey: 'ehr_group119',
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
                elementKey: 'ehr_group120',
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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'medicalImaging.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
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
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
                elementKey: 'ehr_group121',
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
                elementKey: 'ehr_group122',
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
      pageTitle: 'Operative and anaesthesia records',
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
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'operationReports.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
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
          label: 'Operative and anaesthesia records',
          tableColumn: '2',
          tableLabel: 'Operative and anaesthesia records',
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
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
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
              label: 'Operative and anaesthesia records',
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
                elementKey: 'ehr_group123',
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
                elementKey: 'ehr_group124',
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
    hemotology: {
      pageDataKey: 'hemotology',
      pageTitle: 'Hematology',
      pIndex: '43',
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
          fqn: 'hemotology.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hemotology.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hemotology.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'hemotology.time'
        },
        {
          elementKey: 'patientName',
          formIndex: '1',
          inputType: 'text',
          label: 'Patient Name',
          tableColumn: '2',
          fqn: 'hemotology.patientName'
        },
        {
          elementKey: 'patientHealthNumber',
          formIndex: '1',
          inputType: 'text',
          label: 'PHN',
          tableColumn: '3',
          fqn: 'hemotology.patientHealthNumber'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '1',
          inputType: 'text',
          label: 'DOB',
          tableColumn: '4',
          fqn: 'hemotology.dateOfBirth'
        },
        {
          elementKey: 'dateOfTest',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Date of test',
          tableColumn: '5',
          fqn: 'hemotology.dateOfTest'
        },
        {
          elementKey: 'timeOfTest',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time of test',
          tableColumn: '6',
          fqn: 'hemotology.timeOfTest'
        },
        {
          elementKey: 'wbc',
          formIndex: '1',
          inputType: 'text',
          label: 'WBC',
          suffix: '10^9/L',
          tableColumn: '7',
          fqn: 'hemotology.wbc'
        },
        {
          elementKey: 'rbc',
          formIndex: '1',
          inputType: 'text',
          label: 'RBC',
          suffix: '10^12/L',
          tableColumn: '8',
          fqn: 'hemotology.rbc'
        },
        {
          elementKey: 'hgb',
          formIndex: '1',
          inputType: 'text',
          label: 'HGB',
          suffix: 'g/L',
          tableColumn: '9',
          fqn: 'hemotology.hgb'
        },
        {
          elementKey: 'HCT',
          formIndex: '1',
          inputType: 'text',
          label: 'HCT',
          suffix: 'L/L',
          tableColumn: '10',
          fqn: 'hemotology.HCT'
        },
        {
          elementKey: 'MCV',
          formIndex: '1',
          inputType: 'text',
          label: 'MCV',
          suffix: 'fL',
          tableColumn: '11',
          fqn: 'hemotology.MCV'
        },
        {
          elementKey: 'MCH',
          formIndex: '1',
          inputType: 'text',
          label: 'MCH',
          suffix: 'pg',
          tableColumn: '12',
          fqn: 'hemotology.MCH'
        },
        {
          elementKey: 'MCHC',
          formIndex: '1',
          inputType: 'text',
          label: 'MCHC',
          suffix: 'g/L',
          tableColumn: '13',
          fqn: 'hemotology.MCHC'
        },
        {
          elementKey: 'RDW',
          formIndex: '1',
          inputType: 'text',
          label: 'RDW',
          suffix: '%',
          tableColumn: '14',
          fqn: 'hemotology.RDW'
        },
        {
          elementKey: 'PLT',
          formIndex: '1',
          inputType: 'text',
          label: 'PLT',
          suffix: '10^9/L',
          tableColumn: '15',
          fqn: 'hemotology.PLT'
        },
        {
          elementKey: 'MPV',
          formIndex: '1',
          inputType: 'text',
          label: 'MPV',
          suffix: 'fL',
          tableColumn: '16',
          fqn: 'hemotology.MPV'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '17',
          fqn: 'hemotology.comments'
        },
        {
          elementKey: 'name',
          formIndex: '2',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'hemotology.name'
        },
        {
          elementKey: 'profession',
          formIndex: '2',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hemotology.profession'
        },
        {
          elementKey: 'day',
          formIndex: '2',
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hemotology.day'
        },
        {
          elementKey: 'time',
          formIndex: '2',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'hemotology.time'
        },
        {
          elementKey: 'patientName',
          formIndex: '2',
          inputType: 'text',
          label: 'Patient Name',
          tableColumn: '2',
          fqn: 'hemotology.patientName'
        },
        {
          elementKey: 'patientHealthNumber',
          formIndex: '2',
          inputType: 'text',
          label: 'PHN',
          tableColumn: '3',
          fqn: 'hemotology.patientHealthNumber'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '2',
          inputType: 'text',
          label: 'DOB',
          tableColumn: '4',
          fqn: 'hemotology.dateOfBirth'
        },
        {
          elementKey: 'dateOfReview',
          formIndex: '2',
          inputType: 'visitDay',
          label: 'Date of review',
          tableColumn: '5',
          fqn: 'hemotology.dateOfReview'
        },
        {
          elementKey: 'timeOfReview',
          formIndex: '2',
          inputType: 'visitTime',
          label: 'Time of review',
          tableColumn: '6',
          fqn: 'hemotology.timeOfReview'
        },
        {
          elementKey: 'bloodAnalysis',
          formIndex: '2',
          inputType: 'form_label',
          label: 'Insert blood analysis here',
          suffix: '10^9/L',
          tableColumn: '7',
          fqn: 'hemotology.bloodAnalysis'
        },
        {
          elementKey: 'actionsRequired',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Actions required',
          suffix: '10^9/L',
          tableColumn: '8',
          fqn: 'hemotology.actionsRequired'
        },
        {
          elementKey: 'actionsTaken',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Actions taken',
          suffix: '10^12/L',
          tableColumn: '9',
          fqn: 'hemotology.actionsTaken'
        },
        {
          elementKey: 'scanComments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Scan comments',
          suffix: '10^12/L',
          tableColumn: '10',
          fqn: 'hemotology.scanComments'
        },
        {
          elementKey: 'wbc-1',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 1',
          tableColumn: '11',
          fqn: 'hemotology.wbc-1'
        },
        {
          elementKey: 'wbc-2',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 2',
          tableColumn: '12',
          fqn: 'hemotology.wbc-2'
        },
        {
          elementKey: 'wbc-3',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 3',
          tableColumn: '13',
          fqn: 'hemotology.wbc-3'
        },
        {
          elementKey: 'wbc-4',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 4',
          tableColumn: '14',
          fqn: 'hemotology.wbc-4'
        },
        {
          elementKey: 'wbc-5',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 5',
          tableColumn: '15',
          fqn: 'hemotology.wbc-5'
        },
        {
          elementKey: 'wbc-6',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 6',
          tableColumn: '16',
          fqn: 'hemotology.wbc-6'
        },
        {
          elementKey: 'wbc-7',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 7',
          tableColumn: '17',
          fqn: 'hemotology.wbc-7'
        },
        {
          elementKey: 'wbc-8',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 8',
          tableColumn: '18',
          fqn: 'hemotology.wbc-8'
        },
        {
          elementKey: 'wbc-9',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 9',
          tableColumn: '19',
          fqn: 'hemotology.wbc-9'
        },
        {
          elementKey: 'wbc-10',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC - 10',
          tableColumn: '20',
          fqn: 'hemotology.wbc-10'
        },
        {
          elementKey: 'wcbAverage',
          formIndex: '2',
          inputType: 'text',
          label: 'Average',
          tableColumn: '21',
          fqn: 'hemotology.wcbAverage'
        },
        {
          elementKey: 'wbcFieldFactor',
          formIndex: '2',
          inputType: 'text',
          label: 'Field Factor',
          tableColumn: '22',
          fqn: 'hemotology.wbcFieldFactor'
        },
        {
          elementKey: 'wbcEstimate',
          formIndex: '2',
          inputType: 'text',
          label: 'WBC estimate',
          tableColumn: '23',
          fqn: 'hemotology.wbcEstimate'
        },
        {
          elementKey: 'wbcLowRange',
          formIndex: '2',
          inputType: 'text',
          label: 'Low range',
          tableColumn: '24',
          fqn: 'hemotology.wbcLowRange'
        },
        {
          elementKey: 'wbcHighRange',
          formIndex: '2',
          inputType: 'text',
          label: 'High range',
          tableColumn: '25',
          fqn: 'hemotology.wbcHighRange'
        },
        {
          elementKey: 'wbcComment',
          formIndex: '2',
          inputType: 'text',
          label: 'Comment',
          tableColumn: '26',
          fqn: 'hemotology.wbcComment'
        },
        {
          elementKey: 'plt-1',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 1',
          tableColumn: '27',
          fqn: 'hemotology.plt-1'
        },
        {
          elementKey: 'plt-2',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 2',
          tableColumn: '28',
          fqn: 'hemotology.plt-2'
        },
        {
          elementKey: 'plt-3',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 3',
          tableColumn: '29',
          fqn: 'hemotology.plt-3'
        },
        {
          elementKey: 'plt-4',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 4',
          tableColumn: '30',
          fqn: 'hemotology.plt-4'
        },
        {
          elementKey: 'plt-5',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 5',
          tableColumn: '31',
          fqn: 'hemotology.plt-5'
        },
        {
          elementKey: 'plt-6',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 6',
          tableColumn: '32',
          fqn: 'hemotology.plt-6'
        },
        {
          elementKey: 'plt-7',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 7',
          tableColumn: '33',
          fqn: 'hemotology.plt-7'
        },
        {
          elementKey: 'plt-8',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 8',
          tableColumn: '34',
          fqn: 'hemotology.plt-8'
        },
        {
          elementKey: 'plt-9',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 9',
          tableColumn: '35',
          fqn: 'hemotology.plt-9'
        },
        {
          elementKey: 'plt-10',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT - 10',
          tableColumn: '36',
          fqn: 'hemotology.plt-10'
        },
        {
          elementKey: 'pltAverage',
          formIndex: '2',
          inputType: 'text',
          label: 'Average',
          tableColumn: '37',
          fqn: 'hemotology.pltAverage'
        },
        {
          elementKey: 'pltFieldFactor',
          formIndex: '2',
          inputType: 'text',
          label: 'Field Factor',
          tableColumn: '38',
          fqn: 'hemotology.pltFieldFactor'
        },
        {
          elementKey: 'pltEstimate',
          formIndex: '2',
          inputType: 'text',
          label: 'PLT estimate',
          tableColumn: '39',
          fqn: 'hemotology.pltEstimate'
        },
        {
          elementKey: 'pltLowRange',
          formIndex: '2',
          inputType: 'text',
          label: 'Range',
          tableColumn: '40',
          fqn: 'hemotology.pltLowRange'
        },
        {
          elementKey: 'pltHighRange',
          formIndex: '2',
          inputType: 'text',
          label: 'Computed rage',
          tableColumn: '41',
          fqn: 'hemotology.pltHighRange'
        },
        {
          elementKey: 'pltComment',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Comment',
          tableColumn: '42',
          fqn: 'hemotology.pltComment'
        },
        {
          elementKey: 'pltMorphology',
          formIndex: '2',
          inputType: 'checkset',
          label: 'PLT morphology (shape of platelets)',
          options: [
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'large platelets',
              text: 'large platelets'
            },
            {
              key: 'giant forms',
              text: 'giant forms'
            },
            {
              key: 'platelets clump',
              text: 'platelets clump'
            },
            {
              key: 'platelets satellitism',
              text: 'platelets satellitism'
            }
          ],
          tableColumn: '43',
          fqn: 'hemotology.pltMorphology'
        },
        {
          elementKey: 'cellCntSegmentedNeutrophil',
          formIndex: '2',
          inputType: 'text',
          label: 'Segmented Neutrophil',
          tableColumn: '44',
          fqn: 'hemotology.cellCntSegmentedNeutrophil'
        },
        {
          elementKey: 'cellCntBandCells',
          formIndex: '2',
          inputType: 'text',
          label: 'Band Cells',
          tableColumn: '45',
          fqn: 'hemotology.cellCntBandCells'
        },
        {
          elementKey: 'cellCntLymph',
          formIndex: '2',
          inputType: 'text',
          label: 'Lymph',
          tableColumn: '46',
          fqn: 'hemotology.cellCntLymph'
        },
        {
          elementKey: 'cellCntMono',
          formIndex: '2',
          inputType: 'text',
          label: 'Mono',
          tableColumn: '47',
          fqn: 'hemotology.cellCntMono'
        },
        {
          elementKey: 'cellCntEosin',
          formIndex: '2',
          inputType: 'text',
          label: 'Eosin',
          tableColumn: '48',
          fqn: 'hemotology.cellCntEosin'
        },
        {
          elementKey: 'cellCntBaso',
          formIndex: '2',
          inputType: 'text',
          label: 'Baso',
          tableColumn: '49',
          fqn: 'hemotology.cellCntBaso'
        },
        {
          elementKey: 'cellCntMeta',
          formIndex: '2',
          inputType: 'text',
          label: 'Meta',
          tableColumn: '50',
          fqn: 'hemotology.cellCntMeta'
        },
        {
          elementKey: 'cellCntMyelo',
          formIndex: '2',
          inputType: 'text',
          label: 'Myelo',
          tableColumn: '51',
          fqn: 'hemotology.cellCntMyelo'
        },
        {
          elementKey: 'cellCntPromyelo',
          formIndex: '2',
          inputType: 'text',
          label: 'Promyelo',
          tableColumn: '52',
          fqn: 'hemotology.cellCntPromyelo'
        },
        {
          elementKey: 'cellCntBlast',
          formIndex: '2',
          inputType: 'text',
          label: 'Blast',
          tableColumn: '53',
          fqn: 'hemotology.cellCntBlast'
        },
        {
          elementKey: 'cellCntReactiveLymphs',
          formIndex: '2',
          inputType: 'text',
          label: 'Reactive Lymphs',
          tableColumn: '54',
          fqn: 'hemotology.cellCntReactiveLymphs'
        },
        {
          elementKey: 'cellCntOther',
          formIndex: '2',
          inputType: 'text',
          label: 'Other',
          tableColumn: '55',
          fqn: 'hemotology.cellCntOther'
        },
        {
          elementKey: 'cellCntTotal',
          formIndex: '2',
          helperText: 'sum of all above except NRBCs',
          inputType: 'calculatedValue',
          label: 'Total',
          tableColumn: '56',
          fqn: 'hemotology.cellCntTotal',
          helperHtml: '<p>sum of all above except NRBCs</p>'
        },
        {
          elementKey: 'cellCntNRBCs',
          formIndex: '2',
          helperText: 'ucleated red blood cells',
          inputType: 'text',
          label: 'NRBCs',
          tableColumn: '57',
          fqn: 'hemotology.cellCntNRBCs',
          helperHtml: '<p>ucleated red blood cells</p>'
        },
        {
          elementKey: 'wbcmHypersegmentedNeutrophils',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Hypersegmented Neutrophils',
          tableColumn: '58',
          fqn: 'hemotology.wbcmHypersegmentedNeutrophils'
        },
        {
          elementKey: 'wbcmImmatureCells',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Immature Cells',
          tableColumn: '59',
          fqn: 'hemotology.wbcmImmatureCells'
        },
        {
          elementKey: 'wbcmToxicGranulation',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Toxic Granulation',
          tableColumn: '60',
          fqn: 'hemotology.wbcmToxicGranulation'
        },
        {
          elementKey: 'wbcmToxicVacuoles',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Toxic Vacuoles',
          tableColumn: '61',
          fqn: 'hemotology.wbcmToxicVacuoles'
        },
        {
          elementKey: 'rcmNormal',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Normal',
          tableColumn: '62',
          fqn: 'hemotology.rcmNormal'
        },
        {
          elementKey: 'rcmConsistent',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Consistent with indices',
          tableColumn: '59',
          fqn: 'hemotology.rcmConsistent'
        },
        {
          elementKey: 'rcmConSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hemotology.rcmConSpace'
        },
        {
          elementKey: 'rcmMicrocytic',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Microcytic',
          tableColumn: '60',
          fqn: 'hemotology.rcmMicrocytic'
        },
        {
          elementKey: 'rcmMicrocyticGrading',
          formIndex: '2',
          inputType: 'select',
          label: 'Microcytic Grading',
          options: [
            {
              key: '1+',
              text: '1+'
            },
            {
              key: '2+',
              text: '2+'
            },
            {
              key: '3+',
              text: '3+'
            },
            {
              key: '4+',
              text: '4+'
            }
          ],
          tableColumn: '61',
          fqn: 'hemotology.rcmMicrocyticGrading'
        },
        {
          elementKey: 'rcmMicroSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hemotology.rcmMicroSpace'
        },
        {
          elementKey: 'rcmHypochromia',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Hypochromia',
          tableColumn: '62',
          fqn: 'hemotology.rcmHypochromia'
        },
        {
          elementKey: 'rcmHypochromiaGrading',
          formIndex: '2',
          inputType: 'select',
          label: 'Hypochromia Grading',
          options: [
            {
              key: '1+',
              text: '1+'
            },
            {
              key: '2+',
              text: '2+'
            },
            {
              key: '3+',
              text: '3+'
            },
            {
              key: '4+',
              text: '4+'
            }
          ],
          tableColumn: '63',
          fqn: 'hemotology.rcmHypochromiaGrading'
        },
        {
          elementKey: 'rcmHypoSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hemotology.rcmHypoSpace'
        },
        {
          elementKey: 'rcmMacrocytic',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Macrocytic',
          tableColumn: '64',
          fqn: 'hemotology.rcmMacrocytic'
        },
        {
          elementKey: 'rcmMacrocyticGrading',
          formIndex: '2',
          inputType: 'select',
          label: 'Macrocytic Grading',
          options: [
            {
              key: '1+',
              text: '1+'
            },
            {
              key: '2+',
              text: '2+'
            },
            {
              key: '3+',
              text: '3+'
            },
            {
              key: '4+',
              text: '4+'
            }
          ],
          tableColumn: '65',
          fqn: 'hemotology.rcmMacrocyticGrading'
        },
        {
          elementKey: 'rcmRouleauxSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hemotology.rcmRouleauxSpace'
        },
        {
          elementKey: 'rcmRouleaux',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Rouleaux',
          tableColumn: '66',
          fqn: 'hemotology.rcmRouleaux'
        },
        {
          elementKey: 'rcmHowellJollyBodies',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Howell-Jolly Bodies',
          tableColumn: '67',
          fqn: 'hemotology.rcmHowellJollyBodies'
        },
        {
          elementKey: 'rcmPappenheimerBodies',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Pappenheimer Bodies',
          tableColumn: '68',
          fqn: 'hemotology.rcmPappenheimerBodies'
        },
        {
          elementKey: 'rcmMalaria',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Malaria',
          tableColumn: '69',
          fqn: 'hemotology.rcmMalaria'
        },
        {
          elementKey: 'mcvMchcInterpretation',
          formIndex: '2',
          inputType: 'textarea',
          label: 'MCV/MCHC Interpretation',
          tableColumn: '70',
          fqn: 'hemotology.mcvMchcInterpretation'
        },
        {
          elementKey: 'rbcComments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Red blood cell comments',
          tableColumn: '71',
          fqn: 'hemotology.rbcComments'
        },
        {
          elementKey: 'referralToHema',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Referral to hematopathologist',
          tableColumn: '72',
          fqn: 'hemotology.referralToHema'
        },
        {
          elementKey: 'explain',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Explain',
          tableColumn: '73',
          fqn: 'hemotology.explain'
        }
      ],
      generated: '2022-04-22T10:27:54-07:00',
      pageElements: {
        tableAnalysis: {
          elementKey: 'tableAnalysis',
          tableKey: 'tableAnalysis',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a blood analysis report',
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
              ehr_list_index: '2',
              items: [
                'patientName'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'patientHealthNumber'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'dateOfBirth'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'dateOfTest'
              ]
            },
            {
              ehr_list_index: '6',
              items: [
                'timeOfTest'
              ]
            },
            {
              ehr_list_index: '7',
              items: [
                'wbc'
              ]
            },
            {
              ehr_list_index: '8',
              items: [
                'rbc'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'hgb'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'HCT'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'MCV'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'MCH'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'MCHC'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'RDW'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'PLT'
              ]
            },
            {
              ehr_list_index: '16',
              items: [
                'MPV'
              ]
            },
            {
              ehr_list_index: '17',
              items: [
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'tableAnalysis',
            addButtonText: 'Add a blood analysis report',
            formKey: 'tableAnalysis',
            ehr_groups: [
              {
                elementKey: 'ehr_group125',
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
                elementKey: 'ehr_group126',
                gIndex: '2',
                gChildren: [
                  'patientName',
                  'patientHealthNumber',
                  'dateOfBirth',
                  'dateOfTest',
                  'timeOfTest'
                ]
              },
              {
                elementKey: 'ehr_group127',
                label: 'Analysis',
                gIndex: '3',
                gChildren: [
                  'wbc',
                  'rbc',
                  'hgb',
                  'HCT',
                  'MCV',
                  'MCH',
                  'MCHC',
                  'RDW',
                  'PLT',
                  'MPV'
                ]
              },
              {
                elementKey: 'ehr_group128',
                gIndex: '4',
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
              patientName: '',
              patientHealthNumber: '',
              dateOfBirth: '',
              dateOfTest: '',
              timeOfTest: '',
              wbc: '',
              rbc: '',
              hgb: '',
              HCT: '',
              MCV: '',
              MCH: '',
              MCHC: '',
              RDW: '',
              PLT: '',
              MPV: '',
              comments: ''
            }
          }
        },
        tableReview: {
          elementKey: 'tableReview',
          tableKey: 'tableReview',
          isTable: true,
          hasRecHeader: false,
          addButtonText: 'Add a blood review report',
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
              ehr_list_index: '2',
              items: [
                'patientName'
              ]
            },
            {
              ehr_list_index: '3',
              items: [
                'patientHealthNumber'
              ]
            },
            {
              ehr_list_index: '4',
              items: [
                'dateOfBirth'
              ]
            },
            {
              ehr_list_index: '5',
              items: [
                'dateOfReview'
              ]
            },
            {
              ehr_list_index: '6',
              items: [
                'timeOfReview'
              ]
            },
            {
              ehr_list_index: '7',
              items: [
                'bloodAnalysis'
              ]
            },
            {
              ehr_list_index: '8',
              items: [
                'actionsRequired'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'actionsTaken'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'scanComments'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'wbc-1'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'wbc-2'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'wbc-3'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'wbc-4'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'wbc-5'
              ]
            },
            {
              ehr_list_index: '16',
              items: [
                'wbc-6'
              ]
            },
            {
              ehr_list_index: '17',
              items: [
                'wbc-7'
              ]
            },
            {
              ehr_list_index: '18',
              items: [
                'wbc-8'
              ]
            },
            {
              ehr_list_index: '19',
              items: [
                'wbc-9'
              ]
            },
            {
              ehr_list_index: '20',
              items: [
                'wbc-10'
              ]
            },
            {
              ehr_list_index: '21',
              items: [
                'wcbAverage'
              ]
            },
            {
              ehr_list_index: '22',
              items: [
                'wbcFieldFactor'
              ]
            },
            {
              ehr_list_index: '23',
              items: [
                'wbcEstimate'
              ]
            },
            {
              ehr_list_index: '24',
              items: [
                'wbcLowRange'
              ]
            },
            {
              ehr_list_index: '25',
              items: [
                'wbcHighRange'
              ]
            },
            {
              ehr_list_index: '26',
              items: [
                'wbcComment'
              ]
            },
            {
              ehr_list_index: '27',
              items: [
                'plt-1'
              ]
            },
            {
              ehr_list_index: '28',
              items: [
                'plt-2'
              ]
            },
            {
              ehr_list_index: '29',
              items: [
                'plt-3'
              ]
            },
            {
              ehr_list_index: '30',
              items: [
                'plt-4'
              ]
            },
            {
              ehr_list_index: '31',
              items: [
                'plt-5'
              ]
            },
            {
              ehr_list_index: '32',
              items: [
                'plt-6'
              ]
            },
            {
              ehr_list_index: '33',
              items: [
                'plt-7'
              ]
            },
            {
              ehr_list_index: '34',
              items: [
                'plt-8'
              ]
            },
            {
              ehr_list_index: '35',
              items: [
                'plt-9'
              ]
            },
            {
              ehr_list_index: '36',
              items: [
                'plt-10'
              ]
            },
            {
              ehr_list_index: '37',
              items: [
                'pltAverage'
              ]
            },
            {
              ehr_list_index: '38',
              items: [
                'pltFieldFactor'
              ]
            },
            {
              ehr_list_index: '39',
              items: [
                'pltEstimate'
              ]
            },
            {
              ehr_list_index: '40',
              items: [
                'pltLowRange'
              ]
            },
            {
              ehr_list_index: '41',
              items: [
                'pltHighRange'
              ]
            },
            {
              ehr_list_index: '42',
              items: [
                'pltComment'
              ]
            },
            {
              ehr_list_index: '43',
              items: [
                'pltMorphology'
              ]
            },
            {
              ehr_list_index: '44',
              items: [
                'cellCntSegmentedNeutrophil'
              ]
            },
            {
              ehr_list_index: '45',
              items: [
                'cellCntBandCells'
              ]
            },
            {
              ehr_list_index: '46',
              items: [
                'cellCntLymph'
              ]
            },
            {
              ehr_list_index: '47',
              items: [
                'cellCntMono'
              ]
            },
            {
              ehr_list_index: '48',
              items: [
                'cellCntEosin'
              ]
            },
            {
              ehr_list_index: '49',
              items: [
                'cellCntBaso'
              ]
            },
            {
              ehr_list_index: '50',
              items: [
                'cellCntMeta'
              ]
            },
            {
              ehr_list_index: '51',
              items: [
                'cellCntMyelo'
              ]
            },
            {
              ehr_list_index: '52',
              items: [
                'cellCntPromyelo'
              ]
            },
            {
              ehr_list_index: '53',
              items: [
                'cellCntBlast'
              ]
            },
            {
              ehr_list_index: '54',
              items: [
                'cellCntReactiveLymphs'
              ]
            },
            {
              ehr_list_index: '55',
              items: [
                'cellCntOther'
              ]
            },
            {
              ehr_list_index: '56',
              items: [
                'cellCntTotal'
              ]
            },
            {
              ehr_list_index: '57',
              items: [
                'cellCntNRBCs'
              ]
            },
            {
              ehr_list_index: '58',
              items: [
                'wbcmHypersegmentedNeutrophils'
              ]
            },
            {
              ehr_list_index: '59',
              items: [
                'wbcmImmatureCells',
                'rcmConsistent'
              ]
            },
            {
              ehr_list_index: '60',
              items: [
                'wbcmToxicGranulation',
                'rcmMicrocytic'
              ]
            },
            {
              ehr_list_index: '61',
              items: [
                'wbcmToxicVacuoles',
                'rcmMicrocyticGrading'
              ]
            },
            {
              ehr_list_index: '62',
              items: [
                'rcmNormal',
                'rcmHypochromia'
              ]
            },
            {
              ehr_list_index: '63',
              items: [
                'rcmHypochromiaGrading'
              ]
            },
            {
              ehr_list_index: '64',
              items: [
                'rcmMacrocytic'
              ]
            },
            {
              ehr_list_index: '65',
              items: [
                'rcmMacrocyticGrading'
              ]
            },
            {
              ehr_list_index: '66',
              items: [
                'rcmRouleaux'
              ]
            },
            {
              ehr_list_index: '67',
              items: [
                'rcmHowellJollyBodies'
              ]
            },
            {
              ehr_list_index: '68',
              items: [
                'rcmPappenheimerBodies'
              ]
            },
            {
              ehr_list_index: '69',
              items: [
                'rcmMalaria'
              ]
            },
            {
              ehr_list_index: '70',
              items: [
                'mcvMchcInterpretation'
              ]
            },
            {
              ehr_list_index: '71',
              items: [
                'rbcComments'
              ]
            },
            {
              ehr_list_index: '72',
              items: [
                'referralToHema'
              ]
            },
            {
              ehr_list_index: '73',
              items: [
                'explain'
              ]
            }
          ],
          form: {
            elementKey: 'tableReview',
            addButtonText: 'Add a blood review report',
            formKey: 'tableReview',
            ehr_groups: [
              {
                elementKey: 'ehr_group129',
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
                elementKey: 'ehr_group130',
                gIndex: '2',
                gChildren: [
                  'patientName',
                  'patientHealthNumber',
                  'dateOfBirth',
                  'dateOfReview',
                  'timeOfReview'
                ]
              },
              {
                elementKey: 'ehr_group131',
                label: 'Analysis',
                gIndex: '3',
                gChildren: [
                  'bloodAnalysis'
                ]
              },
              {
                elementKey: 'ehr_group132',
                label: 'Actions',
                gIndex: '4',
                gChildren: [
                  'actionsRequired',
                  'actionsTaken',
                  'scanComments'
                ]
              },
              {
                elementKey: 'ehr_group133',
                label: 'WBC Estimate',
                gIndex: '5',
                gChildren: [
                  'wbc-1',
                  'wbc-2',
                  'wbc-3',
                  'wbc-4',
                  'wbc-5',
                  'wbc-6',
                  'wbc-7',
                  'wbc-8',
                  'wbc-9',
                  'wbc-10',
                  'wcbAverage',
                  'wbcFieldFactor',
                  'wbcEstimate',
                  'wbcLowRange',
                  'wbcHighRange',
                  'wbcComment'
                ]
              },
              {
                elementKey: 'ehr_group134',
                label: 'PLT Estimate',
                gIndex: '6',
                gChildren: [
                  'plt-1',
                  'plt-2',
                  'plt-3',
                  'plt-4',
                  'plt-5',
                  'plt-6',
                  'plt-7',
                  'plt-8',
                  'plt-9',
                  'plt-10',
                  'pltAverage',
                  'pltFieldFactor',
                  'pltEstimate',
                  'pltLowRange',
                  'pltHighRange',
                  'pltComment',
                  'pltMorphology'
                ]
              },
              {
                elementKey: 'ehr_group135',
                label: 'WBC Differential',
                gIndex: '7',
                gChildren: [
                  'cellCntSegmentedNeutrophil',
                  'cellCntBandCells',
                  'cellCntLymph',
                  'cellCntMono',
                  'cellCntEosin',
                  'cellCntBaso',
                  'cellCntMeta',
                  'cellCntMyelo',
                  'cellCntPromyelo',
                  'cellCntBlast',
                  'cellCntReactiveLymphs',
                  'cellCntOther',
                  'cellCntTotal',
                  'cellCntNRBCs'
                ]
              },
              {
                elementKey: 'ehr_group136',
                label: 'White Cell Morphology',
                gIndex: '8',
                gChildren: [
                  'wbcmHypersegmentedNeutrophils',
                  'wbcmImmatureCells',
                  'wbcmToxicGranulation',
                  'wbcmToxicVacuoles'
                ]
              },
              {
                elementKey: 'ehr_group137',
                label: 'Red Cell Morphology',
                gIndex: '9',
                gChildren: [
                  'rcmNormal',
                  'rcmConsistent',
                  'rcmConSpace',
                  'rcmMicrocytic',
                  'rcmMicrocyticGrading',
                  'rcmMicroSpace',
                  'rcmHypochromia',
                  'rcmHypochromiaGrading',
                  'rcmHypoSpace',
                  'rcmMacrocytic',
                  'rcmMacrocyticGrading',
                  'rcmRouleauxSpace',
                  'rcmRouleaux',
                  'rcmHowellJollyBodies',
                  'rcmPappenheimerBodies',
                  'rcmMalaria'
                ]
              },
              {
                elementKey: 'ehr_group138',
                gIndex: '10',
                gChildren: [
                  'mcvMchcInterpretation',
                  'rbcComments'
                ]
              },
              {
                elementKey: 'ehr_group139',
                gIndex: '11',
                gChildren: [
                  'referralToHema',
                  'explain'
                ]
              }
            ],
            ehr_data: {
              name: '',
              profession: '',
              day: '',
              time: '',
              patientName: '',
              patientHealthNumber: '',
              dateOfBirth: '',
              dateOfReview: '',
              timeOfReview: '',
              actionsRequired: '',
              actionsTaken: '',
              scanComments: '',
              'wbc-1': '',
              'wbc-2': '',
              'wbc-3': '',
              'wbc-4': '',
              'wbc-5': '',
              'wbc-6': '',
              'wbc-7': '',
              'wbc-8': '',
              'wbc-9': '',
              'wbc-10': '',
              wcbAverage: '',
              wbcFieldFactor: '',
              wbcEstimate: '',
              wbcLowRange: '',
              wbcHighRange: '',
              wbcComment: '',
              'plt-1': '',
              'plt-2': '',
              'plt-3': '',
              'plt-4': '',
              'plt-5': '',
              'plt-6': '',
              'plt-7': '',
              'plt-8': '',
              'plt-9': '',
              'plt-10': '',
              pltAverage: '',
              pltFieldFactor: '',
              pltEstimate: '',
              pltLowRange: '',
              pltHighRange: '',
              pltComment: '',
              pltMorphology: '',
              cellCntSegmentedNeutrophil: '',
              cellCntBandCells: '',
              cellCntLymph: '',
              cellCntMono: '',
              cellCntEosin: '',
              cellCntBaso: '',
              cellCntMeta: '',
              cellCntMyelo: '',
              cellCntPromyelo: '',
              cellCntBlast: '',
              cellCntReactiveLymphs: '',
              cellCntOther: '',
              cellCntTotal: '',
              cellCntNRBCs: '',
              wbcmHypersegmentedNeutrophils: '',
              wbcmImmatureCells: '',
              wbcmToxicGranulation: '',
              wbcmToxicVacuoles: '',
              rcmNormal: '',
              rcmConsistent: '',
              rcmMicrocytic: '',
              rcmMicrocyticGrading: '',
              rcmHypochromia: '',
              rcmHypochromiaGrading: '',
              rcmMacrocytic: '',
              rcmMacrocyticGrading: '',
              rcmRouleaux: '',
              rcmHowellJollyBodies: '',
              rcmPappenheimerBodies: '',
              rcmMalaria: '',
              mcvMchcInterpretation: '',
              rbcComments: '',
              referralToHema: '',
              explain: ''
            }
          }
        }
      }
    }
  }
}