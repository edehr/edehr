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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Progress notes',
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
            label: 'Progress notes',
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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Care plan',
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
            label: 'Care plan',
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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Consults',
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
            label: 'Consults',
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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Laboratory reports',
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
            label: 'Laboratory reports',
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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Medical imaging',
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
            label: 'Medical imaging',
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
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        table: {
          elementKey: 'table',
          tableKey: 'table',
          isTable: true,
          hasRecHeader: false,
          label: 'Operative and anaesthesia records',
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
            label: 'Operative and anaesthesia records',
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
    },
    hematology: {
      pageDataKey: 'hematology',
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
          fqn: 'hematology.name'
        },
        {
          elementKey: 'profession',
          formIndex: '1',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hematology.profession'
        },
        {
          elementKey: 'day',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hematology.day'
        },
        {
          elementKey: 'time',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'hematology.time'
        },
        {
          elementKey: 'patientName',
          formIndex: '1',
          inputType: 'ehrPatientName',
          label: 'Patient Name',
          tableColumn: '2',
          fqn: 'hematology.patientName'
        },
        {
          elementKey: 'patientHealthNumber',
          formIndex: '1',
          inputType: 'ehrPHN',
          label: 'PHN',
          tableColumn: '3',
          fqn: 'hematology.patientHealthNumber'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '1',
          inputType: 'ehrDOB',
          label: 'DOB',
          tableColumn: '4',
          fqn: 'hematology.dateOfBirth'
        },
        {
          elementKey: 'dateOfTest',
          formIndex: '1',
          inputType: 'visitDay',
          label: 'Date of test',
          tableColumn: '5',
          fqn: 'hematology.dateOfTest'
        },
        {
          elementKey: 'timeOfTest',
          formIndex: '1',
          inputType: 'visitTime',
          label: 'Time of test',
          tableColumn: '6',
          fqn: 'hematology.timeOfTest'
        },
        {
          elementKey: 'wbc',
          formIndex: '1',
          inputType: 'text',
          label: 'WBC',
          suffix: '10^9/L',
          tableColumn: '7',
          fqn: 'hematology.wbc'
        },
        {
          elementKey: 'wbc-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '8',
          fqn: 'hematology.wbc-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'rbc',
          formIndex: '1',
          inputType: 'text',
          label: 'RBC',
          suffix: '10^12/L',
          tableColumn: '9',
          fqn: 'hematology.rbc'
        },
        {
          elementKey: 'rbc-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '10',
          fqn: 'hematology.rbc-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'hgb',
          formIndex: '1',
          inputType: 'text',
          label: 'HGB',
          suffix: 'g/L',
          tableColumn: '10',
          fqn: 'hematology.hgb'
        },
        {
          elementKey: 'hgb-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '11',
          fqn: 'hematology.hgb-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'HCT',
          formIndex: '1',
          inputType: 'text',
          label: 'HCT',
          suffix: 'L/L',
          tableColumn: '11',
          fqn: 'hematology.HCT'
        },
        {
          elementKey: 'HCT-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '12',
          fqn: 'hematology.HCT-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'MCV',
          formIndex: '1',
          inputType: 'text',
          label: 'MCV',
          suffix: 'fL',
          tableColumn: '12',
          fqn: 'hematology.MCV'
        },
        {
          elementKey: 'MCV-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '13',
          fqn: 'hematology.MCV-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'MCH',
          formIndex: '1',
          inputType: 'text',
          label: 'MCH',
          suffix: 'pg',
          tableColumn: '13',
          fqn: 'hematology.MCH'
        },
        {
          elementKey: 'MCH-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '14',
          fqn: 'hematology.MCH-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'MCHC',
          formIndex: '1',
          inputType: 'text',
          label: 'MCHC',
          suffix: 'g/L',
          tableColumn: '14',
          fqn: 'hematology.MCHC'
        },
        {
          elementKey: 'MCHC-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '15',
          fqn: 'hematology.MCHC-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'RDW',
          formIndex: '1',
          inputType: 'text',
          label: 'RDW',
          suffix: '%',
          tableColumn: '15',
          fqn: 'hematology.RDW'
        },
        {
          elementKey: 'RDW-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '16',
          fqn: 'hematology.RDW-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'PLT',
          formIndex: '1',
          inputType: 'text',
          label: 'PLT',
          suffix: '10^9/L',
          tableColumn: '16',
          fqn: 'hematology.PLT'
        },
        {
          elementKey: 'PLT-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '17',
          fqn: 'hematology.PLT-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'MPV',
          formIndex: '1',
          inputType: 'text',
          label: 'MPV',
          suffix: 'fL',
          tableColumn: '17',
          fqn: 'hematology.MPV'
        },
        {
          elementKey: 'MPV-interp',
          formIndex: '1',
          inputType: 'select',
          label: 'Interpretation',
          options: [
            {
              key: 'low',
              text: 'low'
            },
            {
              key: 'normal',
              text: 'normal'
            },
            {
              key: 'high',
              text: 'high'
            }
          ],
          tableColumn: '18',
          fqn: 'hematology.MPV-interp'
        },
        {
          elementKey: 'aSpacer',
          formIndex: '1',
          inputType: 'spacer',
          fqn: 'hematology.aSpacer'
        },
        {
          elementKey: 'comments',
          formIndex: '1',
          inputType: 'textarea',
          label: 'Comments',
          tableColumn: '18',
          fqn: 'hematology.comments'
        },
        {
          elementKey: 'name',
          formIndex: '2',
          inputType: 'text',
          label: 'Name',
          tableColumn: '1',
          tableLabel: 'Identification',
          recHeader: true,
          fqn: 'hematology.name'
        },
        {
          elementKey: 'profession',
          formIndex: '2',
          inputType: 'text',
          label: 'Profession',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hematology.profession'
        },
        {
          elementKey: 'day',
          formIndex: '2',
          inputType: 'visitDay',
          label: 'Day',
          tableColumn: '1',
          recHeader: true,
          fqn: 'hematology.day'
        },
        {
          elementKey: 'time',
          formIndex: '2',
          inputType: 'visitTime',
          label: 'Time',
          tableColumn: '1',
          validation: 'time24',
          recHeader: true,
          fqn: 'hematology.time'
        },
        {
          elementKey: 'patientName',
          formIndex: '2',
          inputType: 'ehrPatientName',
          label: 'Patient Name',
          tableColumn: '2',
          fqn: 'hematology.patientName'
        },
        {
          elementKey: 'patientHealthNumber',
          formIndex: '2',
          inputType: 'ehrPHN',
          label: 'PHN',
          tableColumn: '3',
          fqn: 'hematology.patientHealthNumber'
        },
        {
          elementKey: 'dateOfBirth',
          formIndex: '2',
          inputType: 'ehrDOB',
          label: 'DOB',
          tableColumn: '4',
          fqn: 'hematology.dateOfBirth'
        },
        {
          elementKey: 'dateOfReview',
          formIndex: '2',
          inputType: 'visitDay',
          label: 'Date of review',
          tableColumn: '5',
          fqn: 'hematology.dateOfReview'
        },
        {
          elementKey: 'timeOfReview',
          formIndex: '2',
          inputType: 'visitTime',
          label: 'Time of review',
          tableColumn: '6',
          fqn: 'hematology.timeOfReview'
        },
        {
          elementKey: 'bloodAnalysis',
          formIndex: '2',
          embedRef: 'hematology.tableCbcAnalysis',
          inputType: 'ehr_embedded',
          label: 'CBC Analysis',
          tableColumn: '7',
          fqn: 'hematology.bloodAnalysis'
        },
        {
          elementKey: 'actionsRequired',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Actions required',
          suffix: '10^9/L',
          tableColumn: '8',
          fqn: 'hematology.actionsRequired'
        },
        {
          elementKey: 'actionsTaken',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Actions taken',
          suffix: '10^12/L',
          tableColumn: '9',
          fqn: 'hematology.actionsTaken'
        },
        {
          elementKey: 'scanComments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Scan comments',
          suffix: '10^12/L',
          tableColumn: '10',
          fqn: 'hematology.scanComments'
        },
        {
          elementKey: 'wbc-1',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 1',
          passToFunction: 'wbcAverage',
          tableColumn: '11',
          fqn: 'hematology.wbc-1'
        },
        {
          elementKey: 'wbc-2',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 2',
          passToFunction: 'wbcAverage',
          tableColumn: '12',
          fqn: 'hematology.wbc-2'
        },
        {
          elementKey: 'wbc-3',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 3',
          passToFunction: 'wbcAverage',
          tableColumn: '13',
          fqn: 'hematology.wbc-3'
        },
        {
          elementKey: 'wbc-4',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 4',
          passToFunction: 'wbcAverage',
          tableColumn: '14',
          fqn: 'hematology.wbc-4'
        },
        {
          elementKey: 'wbc-5',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 5',
          passToFunction: 'wbcAverage',
          tableColumn: '15',
          fqn: 'hematology.wbc-5'
        },
        {
          elementKey: 'wbc-6',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 6',
          passToFunction: 'wbcAverage',
          tableColumn: '16',
          fqn: 'hematology.wbc-6'
        },
        {
          elementKey: 'wbc-7',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 7',
          passToFunction: 'wbcAverage',
          tableColumn: '17',
          fqn: 'hematology.wbc-7'
        },
        {
          elementKey: 'wbc-8',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 8',
          passToFunction: 'wbcAverage',
          tableColumn: '18',
          fqn: 'hematology.wbc-8'
        },
        {
          elementKey: 'wbc-9',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 9',
          passToFunction: 'wbcAverage',
          tableColumn: '19',
          fqn: 'hematology.wbc-9'
        },
        {
          elementKey: 'wbc-10',
          formIndex: '2',
          inputType: 'number',
          label: 'WBC - 10',
          passToFunction: 'wbcAverage',
          tableColumn: '20',
          fqn: 'hematology.wbc-10'
        },
        {
          elementKey: 'wbcFieldFactor',
          defaultValue: '1',
          formIndex: '2',
          inputType: 'number',
          label: 'Field Factor',
          passToFunction: 'wbcEstimate',
          tableColumn: '21',
          fqn: 'hematology.wbcFieldFactor'
        },
        {
          elementKey: 'wbcAverage',
          calculationType: 'average',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'Average',
          passToFunction: 'wbcEstimate',
          tableColumn: '22',
          fqn: 'hematology.wbcAverage'
        },
        {
          elementKey: 'wbcEstimate',
          calculationType: 'product',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'WBC estimate',
          passToFunction: '[wbcLowRange, wbcHighRange]',
          tableColumn: '23',
          fqn: 'hematology.wbcEstimate'
        },
        {
          elementKey: 'wbcLowRange',
          calculationType: 'multiplyBy(0.75)',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'Low range',
          tableColumn: '24',
          fqn: 'hematology.wbcLowRange'
        },
        {
          elementKey: 'wbcHighRange',
          calculationType: 'multiplyBy(1.25)',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'High range',
          tableColumn: '25',
          fqn: 'hematology.wbcHighRange'
        },
        {
          elementKey: 'wbcComment',
          formIndex: '2',
          inputType: 'text',
          label: 'Comment',
          tableColumn: '26',
          fqn: 'hematology.wbcComment'
        },
        {
          elementKey: 'plt-1',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 1',
          passToFunction: 'pltAverage',
          tableColumn: '27',
          fqn: 'hematology.plt-1'
        },
        {
          elementKey: 'plt-2',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 2',
          passToFunction: 'pltAverage',
          tableColumn: '28',
          fqn: 'hematology.plt-2'
        },
        {
          elementKey: 'plt-3',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 3',
          passToFunction: 'pltAverage',
          tableColumn: '29',
          fqn: 'hematology.plt-3'
        },
        {
          elementKey: 'plt-4',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 4',
          passToFunction: 'pltAverage',
          tableColumn: '30',
          fqn: 'hematology.plt-4'
        },
        {
          elementKey: 'plt-5',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 5',
          passToFunction: 'pltAverage',
          tableColumn: '31',
          fqn: 'hematology.plt-5'
        },
        {
          elementKey: 'plt-6',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 6',
          passToFunction: 'pltAverage',
          tableColumn: '32',
          fqn: 'hematology.plt-6'
        },
        {
          elementKey: 'plt-7',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 7',
          passToFunction: 'pltAverage',
          tableColumn: '33',
          fqn: 'hematology.plt-7'
        },
        {
          elementKey: 'plt-8',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 8',
          passToFunction: 'pltAverage',
          tableColumn: '34',
          fqn: 'hematology.plt-8'
        },
        {
          elementKey: 'plt-9',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 9',
          passToFunction: 'pltAverage',
          tableColumn: '35',
          fqn: 'hematology.plt-9'
        },
        {
          elementKey: 'plt-10',
          formIndex: '2',
          inputType: 'number',
          label: 'PLT - 10',
          passToFunction: 'pltAverage',
          tableColumn: '36',
          fqn: 'hematology.plt-10'
        },
        {
          elementKey: 'pltFieldFactor',
          defaultValue: '1',
          formIndex: '2',
          inputType: 'number',
          label: 'Field Factor',
          passToFunction: 'pltEstimate',
          tableColumn: '37',
          fqn: 'hematology.pltFieldFactor'
        },
        {
          elementKey: 'pltAverage',
          calculationType: 'average',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'Average',
          passToFunction: 'pltEstimate',
          tableColumn: '38',
          fqn: 'hematology.pltAverage'
        },
        {
          elementKey: 'pltEstimate',
          calculationType: 'product',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'PLT estimate',
          passToFunction: '[pltLowRange, pltHighRange]',
          tableColumn: '39',
          fqn: 'hematology.pltEstimate'
        },
        {
          elementKey: 'pltLowRange',
          calculationType: 'multiplyBy(0.75)',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'Low range',
          tableColumn: '40',
          fqn: 'hematology.pltLowRange'
        },
        {
          elementKey: 'pltHighRange',
          calculationType: 'multiplyBy(1.25)',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'High range',
          tableColumn: '41',
          fqn: 'hematology.pltHighRange'
        },
        {
          elementKey: 'pltComment',
          formIndex: '2',
          inputType: 'text',
          label: 'Comment',
          tableColumn: '42',
          fqn: 'hematology.pltComment'
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
          fqn: 'hematology.pltMorphology'
        },
        {
          elementKey: 'cellCntSegmentedNeutrophil',
          formIndex: '2',
          inputType: 'number',
          label: 'Segmented Neutrophil',
          passToFunction: 'cellCntTotal',
          tableColumn: '44',
          fqn: 'hematology.cellCntSegmentedNeutrophil'
        },
        {
          elementKey: 'cellCntBandCells',
          formIndex: '2',
          inputType: 'number',
          label: 'Band Cells',
          passToFunction: 'cellCntTotal',
          tableColumn: '45',
          fqn: 'hematology.cellCntBandCells'
        },
        {
          elementKey: 'cellCntLymph',
          formIndex: '2',
          inputType: 'number',
          label: 'Lymph',
          passToFunction: 'cellCntTotal',
          tableColumn: '46',
          fqn: 'hematology.cellCntLymph'
        },
        {
          elementKey: 'cellCntMono',
          formIndex: '2',
          inputType: 'number',
          label: 'Mono',
          passToFunction: 'cellCntTotal',
          tableColumn: '47',
          fqn: 'hematology.cellCntMono'
        },
        {
          elementKey: 'cellCntEosin',
          formIndex: '2',
          inputType: 'number',
          label: 'Eosin',
          passToFunction: 'cellCntTotal',
          tableColumn: '48',
          fqn: 'hematology.cellCntEosin'
        },
        {
          elementKey: 'cellCntBaso',
          formIndex: '2',
          inputType: 'number',
          label: 'Baso',
          passToFunction: 'cellCntTotal',
          tableColumn: '49',
          fqn: 'hematology.cellCntBaso'
        },
        {
          elementKey: 'cellCntMeta',
          formIndex: '2',
          inputType: 'number',
          label: 'Meta',
          passToFunction: 'cellCntTotal',
          tableColumn: '50',
          fqn: 'hematology.cellCntMeta'
        },
        {
          elementKey: 'cellCntMyelo',
          formIndex: '2',
          inputType: 'number',
          label: 'Myelo',
          passToFunction: 'cellCntTotal',
          tableColumn: '51',
          fqn: 'hematology.cellCntMyelo'
        },
        {
          elementKey: 'cellCntPromyelo',
          formIndex: '2',
          inputType: 'number',
          label: 'Promyelo',
          passToFunction: 'cellCntTotal',
          tableColumn: '52',
          fqn: 'hematology.cellCntPromyelo'
        },
        {
          elementKey: 'cellCntBlast',
          formIndex: '2',
          inputType: 'number',
          label: 'Blast',
          passToFunction: 'cellCntTotal',
          tableColumn: '53',
          fqn: 'hematology.cellCntBlast'
        },
        {
          elementKey: 'cellCntReactiveLymphs',
          formIndex: '2',
          inputType: 'number',
          label: 'Reactive Lymphs',
          passToFunction: 'cellCntTotal',
          tableColumn: '54',
          fqn: 'hematology.cellCntReactiveLymphs'
        },
        {
          elementKey: 'cellCntOther',
          formIndex: '2',
          inputType: 'number',
          label: 'Other',
          passToFunction: 'cellCntTotal',
          tableColumn: '55',
          fqn: 'hematology.cellCntOther'
        },
        {
          elementKey: 'cellCntTotal',
          calculationType: 'sum',
          formIndex: '2',
          inputType: 'calculatedValue',
          label: 'Total',
          tableColumn: '56',
          fqn: 'hematology.cellCntTotal'
        },
        {
          elementKey: 'cellCntNRBCs',
          formIndex: '2',
          helperText: 'nucleated red blood cells',
          inputType: 'number',
          label: 'NRBCs',
          tableColumn: '57',
          fqn: 'hematology.cellCntNRBCs',
          helperHtml: '<p>nucleated red blood cells</p>'
        },
        {
          elementKey: 'wbcmHypersegmentedNeutrophils',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Hypersegmented Neutrophils',
          tableColumn: '58',
          fqn: 'hematology.wbcmHypersegmentedNeutrophils'
        },
        {
          elementKey: 'wbcmImmatureCells',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Immature Cells',
          tableColumn: '59',
          fqn: 'hematology.wbcmImmatureCells'
        },
        {
          elementKey: 'wbcmToxicGranulation',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Toxic Granulation',
          tableColumn: '60',
          fqn: 'hematology.wbcmToxicGranulation'
        },
        {
          elementKey: 'wbcmToxicVacuoles',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Toxic Vacuoles',
          tableColumn: '61',
          fqn: 'hematology.wbcmToxicVacuoles'
        },
        {
          elementKey: 'rcmNormal',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Normal',
          tableColumn: '62',
          fqn: 'hematology.rcmNormal'
        },
        {
          elementKey: 'rcmConsistent',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Consistent with indices',
          tableColumn: '59',
          fqn: 'hematology.rcmConsistent'
        },
        {
          elementKey: 'rcmConSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hematology.rcmConSpace'
        },
        {
          elementKey: 'rcmMicrocytic',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Microcytic',
          tableColumn: '60',
          fqn: 'hematology.rcmMicrocytic'
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
          fqn: 'hematology.rcmMicrocyticGrading'
        },
        {
          elementKey: 'rcmMicroSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hematology.rcmMicroSpace'
        },
        {
          elementKey: 'rcmHypochromia',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Hypochromia',
          tableColumn: '62',
          fqn: 'hematology.rcmHypochromia'
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
          fqn: 'hematology.rcmHypochromiaGrading'
        },
        {
          elementKey: 'rcmHypoSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hematology.rcmHypoSpace'
        },
        {
          elementKey: 'rcmMacrocytic',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Macrocytic',
          tableColumn: '64',
          fqn: 'hematology.rcmMacrocytic'
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
          fqn: 'hematology.rcmMacrocyticGrading'
        },
        {
          elementKey: 'rcmRouleauxSpace',
          formIndex: '2',
          inputType: 'spacer',
          fqn: 'hematology.rcmRouleauxSpace'
        },
        {
          elementKey: 'rcmRouleaux',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Rouleaux',
          tableColumn: '66',
          fqn: 'hematology.rcmRouleaux'
        },
        {
          elementKey: 'rcmHowellJollyBodies',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Howell-Jolly Bodies',
          tableColumn: '67',
          fqn: 'hematology.rcmHowellJollyBodies'
        },
        {
          elementKey: 'rcmPappenheimerBodies',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Pappenheimer Bodies',
          tableColumn: '68',
          fqn: 'hematology.rcmPappenheimerBodies'
        },
        {
          elementKey: 'rcmMalaria',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Malaria',
          tableColumn: '69',
          fqn: 'hematology.rcmMalaria'
        },
        {
          elementKey: 'mcvMchcInterpretation',
          formIndex: '2',
          inputType: 'textarea',
          label: 'MCV/MCHC Interpretation',
          tableColumn: '70',
          fqn: 'hematology.mcvMchcInterpretation'
        },
        {
          elementKey: 'rbcComments',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Red blood cell comments',
          tableColumn: '71',
          fqn: 'hematology.rbcComments'
        },
        {
          elementKey: 'referralToHema',
          formIndex: '2',
          inputType: 'checkbox',
          label: 'Referral to hematopathologist',
          tableColumn: '72',
          fqn: 'hematology.referralToHema'
        },
        {
          elementKey: 'explain',
          formIndex: '2',
          inputType: 'textarea',
          label: 'Reason',
          tableColumn: '73',
          fqn: 'hematology.explain'
        }
      ],
      generated: '2022-06-05T20:28:46-07:00',
      pageElements: {
        tableCbcAnalysis: {
          elementKey: 'tableCbcAnalysis',
          tableKey: 'tableCbcAnalysis',
          isTable: true,
          hasRecHeader: false,
          label: 'CBC analysis',
          addButtonText: 'Add a CBC Report',
          tableAction: 'pbf-review',
          tableActionLabel: 'PBF Review',
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
                'wbc-interp'
              ]
            },
            {
              ehr_list_index: '9',
              items: [
                'rbc'
              ]
            },
            {
              ehr_list_index: '10',
              items: [
                'rbc-interp',
                'hgb'
              ]
            },
            {
              ehr_list_index: '11',
              items: [
                'hgb-interp',
                'HCT'
              ]
            },
            {
              ehr_list_index: '12',
              items: [
                'HCT-interp',
                'MCV'
              ]
            },
            {
              ehr_list_index: '13',
              items: [
                'MCV-interp',
                'MCH'
              ]
            },
            {
              ehr_list_index: '14',
              items: [
                'MCH-interp',
                'MCHC'
              ]
            },
            {
              ehr_list_index: '15',
              items: [
                'MCHC-interp',
                'RDW'
              ]
            },
            {
              ehr_list_index: '16',
              items: [
                'RDW-interp',
                'PLT'
              ]
            },
            {
              ehr_list_index: '17',
              items: [
                'PLT-interp',
                'MPV'
              ]
            },
            {
              ehr_list_index: '18',
              items: [
                'MPV-interp',
                'comments'
              ]
            }
          ],
          form: {
            elementKey: 'tableCbcAnalysis',
            label: 'CBC analysis',
            addButtonText: 'Add a CBC Report',
            formKey: 'tableCbcAnalysis',
            ehr_groups: [
              {
                elementKey: 'ehr_group13',
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
                elementKey: 'ehr_group14',
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
                elementKey: 'ehr_group15',
                label: 'Analysis',
                gIndex: '3',
                gChildren: [
                  'wbc',
                  'wbc-interp',
                  'aSpacer',
                  'rbc',
                  'rbc-interp',
                  'aSpacer',
                  'hgb',
                  'hgb-interp',
                  'aSpacer',
                  'HCT',
                  'HCT-interp',
                  'aSpacer',
                  'MCV',
                  'MCV-interp',
                  'aSpacer',
                  'MCH',
                  'MCH-interp',
                  'aSpacer',
                  'MCHC',
                  'MCHC-interp',
                  'aSpacer',
                  'RDW',
                  'RDW-interp',
                  'aSpacer',
                  'PLT',
                  'PLT-interp',
                  'aSpacer',
                  'MPV',
                  'MPV-interp',
                  'aSpacer'
                ]
              },
              {
                elementKey: 'ehr_group16',
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
              'wbc-interp': '',
              rbc: '',
              'rbc-interp': '',
              hgb: '',
              'hgb-interp': '',
              HCT: '',
              'HCT-interp': '',
              MCV: '',
              'MCV-interp': '',
              MCH: '',
              'MCH-interp': '',
              MCHC: '',
              'MCHC-interp': '',
              RDW: '',
              'RDW-interp': '',
              PLT: '',
              'PLT-interp': '',
              MPV: '',
              'MPV-interp': '',
              comments: ''
            }
          }
        },
        tablePbfReview: {
          elementKey: 'tablePbfReview',
          tableKey: 'tablePbfReview',
          isTable: true,
          hasRecHeader: false,
          label: 'PBF Review',
          addButtonText: 'NONE',
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
                'wbcFieldFactor'
              ]
            },
            {
              ehr_list_index: '22',
              items: [
                'wbcAverage'
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
                'pltFieldFactor'
              ]
            },
            {
              ehr_list_index: '38',
              items: [
                'pltAverage'
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
            elementKey: 'tablePbfReview',
            label: 'PBF Review',
            addButtonText: 'NONE',
            formKey: 'tablePbfReview',
            ehr_groups: [
              {
                elementKey: 'ehr_group17',
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
                elementKey: 'ehr_group18',
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
                elementKey: 'ehr_group19',
                label: 'CBC Analysis',
                gIndex: '3',
                gChildren: [
                  'bloodAnalysis'
                ]
              },
              {
                elementKey: 'ehr_group20',
                label: 'Actions',
                gIndex: '4',
                gChildren: [
                  'actionsRequired',
                  'actionsTaken',
                  'scanComments'
                ]
              },
              {
                elementKey: 'ehr_group21',
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
                  'wbcFieldFactor',
                  'wbcAverage',
                  'wbcEstimate',
                  'wbcLowRange',
                  'wbcHighRange',
                  'wbcComment'
                ]
              },
              {
                elementKey: 'ehr_group22',
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
                  'pltFieldFactor',
                  'pltAverage',
                  'pltEstimate',
                  'pltLowRange',
                  'pltHighRange',
                  'pltComment',
                  'pltMorphology'
                ]
              },
              {
                elementKey: 'ehr_group23',
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
                elementKey: 'ehr_group24',
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
                elementKey: 'ehr_group25',
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
                elementKey: 'ehr_group26',
                gIndex: '10',
                gChildren: [
                  'mcvMchcInterpretation',
                  'rbcComments'
                ]
              },
              {
                elementKey: 'ehr_group27',
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
              bloodAnalysis: '',
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
              wbcFieldFactor: '1',
              wbcAverage: '',
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
              pltFieldFactor: '1',
              pltAverage: '',
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