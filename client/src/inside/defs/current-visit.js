/* eslint-disable quotes */
export default function() {
  return {
    visit: {
      pageTitle: 'Visit',
      pageDataKey: 'visit',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissionDay',
                fqn: 'visit.admissionDay',
                inputType: 'day',
                label: 'Admission day',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details',
                mandatory: 'yes'
              },
              {
                elementKey: 'admissionTime',
                fqn: 'visit.admissionTime',
                inputType: 'time',
                label: 'Admission time',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details',
                mandatory: 'yes'
              },
              {
                elementKey: 'consentForTreatment',
                fqn: 'visit.consentForTreatment',
                inputType: 'checkbox',
                label: 'Consent for treatment',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details'
              },
              {
                elementKey: 'consentForBlood',
                fqn: 'visit.consentForBlood',
                inputType: 'checkbox',
                label: 'Consent for blood products',
                formColumn: '3',
                formRow: '1',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'diagnosis',
                fqn: 'visit.diagnosis',
                inputType: 'text',
                label: 'Physician diagnosis',
                formCss: 'is-two-thirds',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details'
              },
              {
                elementKey: 'status',
                fqn: 'visit.status',
                inputType: 'select',
                label: 'Admission status',
                formColumn: '3',
                formRow: '2',
                pageDataKey: 'visit',
                dataParent: 'visit',
                page: 'Visit details',
                mandatory: 'yes',
                options: [
                  {
                    text: 'Admission in progress'
                  },
                  {
                    text: 'Admitted'
                  },
                  {
                    text: 'Inpatient'
                  },
                  {
                    text: 'Outpatient'
                  },
                  {
                    text: 'Surgical day care'
                  },
                  {
                    text: 'Discharge pending'
                  },
                  {
                    text: 'Discharged'
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 4
      },
      hasTable: true,
      tables: [
        {
          tableKey: 'location',
          addButtonText: 'Add new patient location',
          tableCells: [
            {
              elementKey: 'location',
              fqn: 'visit.location.location',
              inputType: 'text',
              label: 'Patient location',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit details',
              mandatory: 'yes',
              helperText: 'hospital, ward #, room #, home, out patient clinic',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInDay',
              fqn: 'visit.location.transferInDay',
              inputType: 'day',
              label: 'Transfer in day',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit details',
              tableKey: 'location'
            },
            {
              elementKey: 'transferInTime',
              fqn: 'visit.location.transferInTime',
              inputType: 'time',
              label: 'Transfer in time',
              tableColumn: '3',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'visit.location',
              page: 'Visit details',
              tableKey: 'location'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'location',
                    fqn: 'visit.location.location',
                    inputType: 'text',
                    label: 'Patient location',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit details',
                    mandatory: 'yes',
                    helperText: 'hospital, ward #, room #, home, out patient clinic',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInDay',
                    fqn: 'visit.location.transferInDay',
                    inputType: 'day',
                    label: 'Transfer in day',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit details',
                    tableKey: 'location'
                  },
                  {
                    elementKey: 'transferInTime',
                    fqn: 'visit.location.transferInTime',
                    inputType: 'time',
                    label: 'Transfer in time',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'visit.location',
                    page: 'Visit details',
                    tableKey: 'location'
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ],
      pageData: {
        location: []
      }
    },
    vitals: {
      pageTitle: 'Vital signs',
      pageDataKey: 'vitals',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add vital sign record',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'vitals.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'vitals.table.day',
              inputType: 'text',
              label: 'Day',
              tableColumn: '1',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'vitals.table.time',
              inputType: 'text',
              label: 'Time',
              tableColumn: '1',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'temperature',
              fqn: 'vitals.table.temperature',
              inputType: 'text',
              label: 'Temperature',
              tableColumn: '1',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'vitals.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '1',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'visit',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'source',
              fqn: 'vitals.table.source',
              inputType: 'select',
              label: 'Temperature source',
              tableColumn: '2',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'oral'
                },
                {
                  text: 'axilla'
                },
                {
                  text: 'rectal'
                },
                {
                  text: 'tympanic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'rate',
              fqn: 'vitals.table.rate',
              inputType: 'text',
              label: 'Pulse rate',
              tableColumn: '3',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'rhythm',
              fqn: 'vitals.table.rhythm',
              inputType: 'select',
              label: 'Pulse rhythm',
              tableColumn: '4',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'regular'
                },
                {
                  text: 'irregular'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'strength',
              fqn: 'vitals.table.strength',
              inputType: 'select',
              label: 'Pulse site',
              tableColumn: '5',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'peripheral'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'systolic',
              fqn: 'vitals.table.systolic',
              inputType: 'text',
              label: 'Systolic blood pressure',
              tableColumn: '6',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'diastolic',
              fqn: 'vitals.table.diastolic',
              inputType: 'text',
              label: 'Diastolic blood pressure',
              tableColumn: '7',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'patientPosition',
              fqn: 'vitals.table.patientPosition',
              inputType: 'select',
              label: 'Patient position',
              tableColumn: '8',
              formColumn: '3',
              formRow: '4',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'supine'
                },
                {
                  text: 'sitting'
                },
                {
                  text: 'standing'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'respirationRate',
              fqn: 'vitals.table.respirationRate',
              inputType: 'text',
              label: 'Respiration rate',
              tableColumn: '9',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenSaturation',
              fqn: 'vitals.table.oxygenSaturation',
              inputType: 'text',
              label: 'Oxygen saturation',
              tableColumn: '10',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            },
            {
              elementKey: 'oxygenMode',
              fqn: 'vitals.table.oxygenMode',
              inputType: 'select',
              label: 'Oxygen mode',
              tableColumn: '11',
              formColumn: '2',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              options: [
                {
                  text: 'room air'
                },
                {
                  text: 'nasal prongs'
                },
                {
                  text: 'simple face mask'
                },
                {
                  text: 'rebreathing face mask'
                },
                {
                  text: 'optiflow'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'flowRate',
              fqn: 'vitals.table.flowRate',
              inputType: 'text',
              label: 'Flow rate',
              tableColumn: '12',
              formColumn: '3',
              formRow: '6',
              pageDataKey: 'vitals',
              dataParent: 'vitals.table',
              page: 'Vital signs',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'vitals.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'vitals.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '1',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'vitals.table.day',
                    inputType: 'text',
                    label: 'Day',
                    tableColumn: '1',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'visit',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'vitals.table.time',
                    inputType: 'text',
                    label: 'Time',
                    tableColumn: '1',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'temperature',
                    fqn: 'vitals.table.temperature',
                    inputType: 'text',
                    label: 'Temperature',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'source',
                    fqn: 'vitals.table.source',
                    inputType: 'select',
                    label: 'Temperature source',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'oral'
                      },
                      {
                        text: 'axilla'
                      },
                      {
                        text: 'rectal'
                      },
                      {
                        text: 'tympanic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'rhythm',
                    fqn: 'vitals.table.rhythm',
                    inputType: 'select',
                    label: 'Pulse rhythm',
                    tableColumn: '4',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'regular'
                      },
                      {
                        text: 'irregular'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'strength',
                    fqn: 'vitals.table.strength',
                    inputType: 'select',
                    label: 'Pulse site',
                    tableColumn: '5',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'peripheral'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'rate',
                    fqn: 'vitals.table.rate',
                    inputType: 'text',
                    label: 'Pulse rate',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'systolic',
                    fqn: 'vitals.table.systolic',
                    inputType: 'text',
                    label: 'Systolic blood pressure',
                    tableColumn: '6',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'diastolic',
                    fqn: 'vitals.table.diastolic',
                    inputType: 'text',
                    label: 'Diastolic blood pressure',
                    tableColumn: '7',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'patientPosition',
                    fqn: 'vitals.table.patientPosition',
                    inputType: 'select',
                    label: 'Patient position',
                    tableColumn: '8',
                    formColumn: '3',
                    formRow: '4',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'supine'
                      },
                      {
                        text: 'sitting'
                      },
                      {
                        text: 'standing'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'respirationRate',
                    fqn: 'vitals.table.respirationRate',
                    inputType: 'text',
                    label: 'Respiration rate',
                    tableColumn: '9',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'oxygenSaturation',
                    fqn: 'vitals.table.oxygenSaturation',
                    inputType: 'text',
                    label: 'Oxygen saturation',
                    tableColumn: '10',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'oxygenMode',
                    fqn: 'vitals.table.oxygenMode',
                    inputType: 'select',
                    label: 'Oxygen mode',
                    tableColumn: '11',
                    formColumn: '2',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    options: [
                      {
                        text: 'room air'
                      },
                      {
                        text: 'nasal prongs'
                      },
                      {
                        text: 'simple face mask'
                      },
                      {
                        text: 'rebreathing face mask'
                      },
                      {
                        text: 'optiflow'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'flowRate',
                    fqn: 'vitals.table.flowRate',
                    inputType: 'text',
                    label: 'Flow rate',
                    tableColumn: '12',
                    formColumn: '3',
                    formRow: '6',
                    pageDataKey: 'vitals',
                    dataParent: 'vitals.table',
                    page: 'Vital signs',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    undefined: {
      pageTitle: 'Fluid balance',
      hasTable: true,
      tables: [
        {
          addButtonText: 'Add fluid in/out record',
          tableCells: [],
          tableForm: {
            rows: [],
            columnsCount: 0
          }
        }
      ],
      pageData: {
        undefined: []
      }
    },
    neurological: {
      pageTitle: 'Assessments: Neurological',
      pageDataKey: 'neurological',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add new neurological assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'neurological.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'neurological.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'neurological.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'neurological.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'neurological.table.status',
              inputType: 'fieldset',
              label: 'Status',
              tableColumn: '5',
              fieldset: 'status',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              containerType: 'fieldset',
              containerKey: 'status',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'alert',
              fqn: 'neurological.table.status.alert',
              inputType: 'checkbox',
              label: 'Alert',
              tableColumn: '6',
              fieldset: 'status',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oriented',
              fqn: 'neurological.table.status.oriented',
              inputType: 'checkbox',
              label: 'Oriented',
              tableColumn: '7',
              fieldset: 'status',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'confused',
              fqn: 'neurological.table.status.confused',
              inputType: 'checkbox',
              label: 'Confused',
              tableColumn: '8',
              fieldset: 'status',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'drowsy',
              fqn: 'neurological.table.status.drowsy',
              inputType: 'checkbox',
              label: 'Drowsy',
              tableColumn: '9',
              fieldset: 'status',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'unresponsive',
              fqn: 'neurological.table.status.unresponsive',
              inputType: 'checkbox',
              label: 'Unresponsive',
              tableColumn: '10',
              fieldset: 'status',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'dizziness',
              fqn: 'neurological.table.status.dizziness',
              inputType: 'checkbox',
              label: 'Dizziness',
              tableColumn: '11',
              fieldset: 'status',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'blurredVision',
              fqn: 'neurological.table.status.blurredVision',
              inputType: 'checkbox',
              label: 'Blurred vision',
              tableColumn: '12',
              fieldset: 'status',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.status',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'concious',
              fqn: 'neurological.table.concious',
              inputType: 'fieldset',
              label: 'Loss of conciousness',
              tableColumn: '13',
              fieldset: 'concious',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              containerType: 'fieldset',
              containerKey: 'concious',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'loss',
              fqn: 'neurological.table.concious.loss',
              inputType: 'select',
              tableColumn: '14',
              fieldset: 'concious',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.concious',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Yes'
                },
                {
                  text: 'Unknown'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'duration',
              fqn: 'neurological.table.concious.duration',
              inputType: 'text',
              label: 'Duration',
              tableColumn: '15',
              fieldset: 'concious',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.concious',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'glasgowComaScale',
              fqn: 'neurological.table.glasgowComaScale',
              inputType: 'fieldset',
              label: 'Glasgow Coma Scale',
              tableColumn: '16',
              fieldset: 'glasgowComaScale',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              containerType: 'fieldset',
              containerKey: 'glasgowComaScale',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'eyeOpening',
              fqn: 'neurological.table.glasgowComaScale.eyeOpening',
              inputType: 'select',
              label: 'Eye opening',
              tableColumn: '17',
              fieldset: 'glasgowComaScale',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Spontaneous'
                },
                {
                  text: 'To sound'
                },
                {
                  text: 'To pressure'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'verbalResponse',
              fqn: 'neurological.table.glasgowComaScale.verbalResponse',
              inputType: 'select',
              label: 'Verbal response',
              tableColumn: '18',
              fieldset: 'glasgowComaScale',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Oriented'
                },
                {
                  text: 'Confused'
                },
                {
                  text: 'Words'
                },
                {
                  text: 'Sounds'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestMotorResponse',
              fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
              inputType: 'select',
              label: 'Best motor response',
              tableColumn: '19',
              fieldset: 'glasgowComaScale',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Obeys commands'
                },
                {
                  text: 'Localising'
                },
                {
                  text: 'Normal flexion'
                },
                {
                  text: 'Extension'
                },
                {
                  text: 'None'
                },
                {
                  text: 'Non testable'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'totalGlasgow',
              fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
              inputType: 'calculated',
              label: 'Total',
              tableColumn: '20',
              fieldset: 'glasgowComaScale',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.glasgowComaScale',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pupils',
              fqn: 'neurological.table.pupils',
              inputType: 'fieldRowSet',
              label: 'Pupils',
              tableColumn: '21',
              fieldset: 'pupils',
              formCss: 'fieldset_row',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              containerType: 'fieldRowSet',
              containerKey: 'pupils',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'leftPupilSize',
              fqn: 'neurological.table.pupils.leftPupilSize',
              inputType: 'select',
              label: 'Left pupil size',
              tableColumn: '22',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
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
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'leftPupilResponseToLight',
              fqn: 'neurological.table.pupils.leftPupilResponseToLight',
              inputType: 'select',
              label: 'Left pupil response to light',
              tableColumn: '23',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rightPupilSize',
              fqn: 'neurological.table.pupils.rightPupilSize',
              inputType: 'select',
              label: 'Right pupil size',
              tableColumn: '24',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
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
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'rightPupilResponseToLight',
              fqn: 'neurological.table.pupils.rightPupilResponseToLight',
              inputType: 'select',
              label: 'Right pupil response to light',
              tableColumn: '25',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Brisk'
                },
                {
                  text: 'Sluggish'
                },
                {
                  text: 'Fixed'
                }
              ],
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'bothPupils',
              fqn: 'neurological.table.pupils.bothPupils',
              inputType: 'select',
              label: 'Both pupils',
              tableColumn: '26',
              fieldset: 'pupils',
              fsetRow: '1',
              fsetCol: '3',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: 'Equal'
                },
                {
                  text: 'Unequal'
                }
              ],
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'stroke',
              fqn: 'neurological.table.stroke',
              inputType: 'fieldRowSet',
              label: 'Stroke Assessment',
              tableColumn: '27',
              fieldset: 'stroke',
              formCss: 'fieldset_row',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table',
              page: 'Assessments: Neurological',
              containerType: 'fieldRowSet',
              containerKey: 'stroke',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              fqn: 'neurological.table.pupils.',
              inputType: 'spacer',
              tableColumn: '27',
              fieldset: 'pupils',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.pupils',
              page: 'Assessments: Neurological',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousness',
              fqn: 'neurological.table.stroke.levelOfConciousness',
              inputType: 'select',
              label: 'Level of conciousness',
              tableColumn: '28',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Alert; keenly responsive'
                },
                {
                  text: '1 = Not alert; but arousable by minor stimulation'
                },
                {
                  text: '2 = Not alert; requires repeated stimulation'
                },
                {
                  text: '3 = Unresponsive or responds only with reflex'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestGaze',
              fqn: 'neurological.table.stroke.bestGaze',
              inputType: 'select',
              label: 'Best gaze',
              tableColumn: '29',
              fieldset: 'stroke',
              fsetRow: '1',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Partial gaze palsy'
                },
                {
                  text: '2 = Forced deviation'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessQuestions',
              fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
              inputType: 'select',
              label: 'Level of conciousness questions',
              tableColumn: '30',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = answers two questions correctly'
                },
                {
                  text: '1 = Answers one question correctly'
                },
                {
                  text: '2 = Answers neither question correctly'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'visual',
              fqn: 'neurological.table.stroke.visual',
              inputType: 'select',
              label: 'Visual',
              tableColumn: '31',
              fieldset: 'stroke',
              fsetRow: '2',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No visual loss'
                },
                {
                  text: '1 = Partial hemianopia'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'levelOfConciousnessCommands',
              fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
              inputType: 'select',
              label: 'Level of conciousness commands',
              tableColumn: '32',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Performs both tasks correctly'
                },
                {
                  text: '1 = Performs one task correctly'
                },
                {
                  text: '2 = Performs neither task correctly'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'facialPalsy',
              fqn: 'neurological.table.stroke.facialPalsy',
              inputType: 'select',
              label: 'Facial palsy',
              tableColumn: '33',
              fieldset: 'stroke',
              fsetRow: '3',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal symmetric movements'
                },
                {
                  text: '1 = Minor paralysis'
                },
                {
                  text: '2 = Partial paralysis'
                },
                {
                  text: '3 = Complete paralysis of one or both sides'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftArm',
              fqn: 'neurological.table.stroke.motorLeftArm',
              inputType: 'select',
              label: 'Motor - left arm',
              tableColumn: '34',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'sensory',
              fqn: 'neurological.table.stroke.sensory',
              inputType: 'select',
              label: 'Sensory',
              tableColumn: '35',
              fieldset: 'stroke',
              fsetRow: '4',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal; no sensory loss'
                },
                {
                  text: '1 = Mild-to-moderate sensory loss'
                },
                {
                  text: '2 = Severe to total sensory loss'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightArm',
              fqn: 'neurological.table.stroke.motorRightArm',
              inputType: 'select',
              label: 'Motor - right arm',
              tableColumn: '36',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity; limb falls'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bestLanguage',
              fqn: 'neurological.table.stroke.bestLanguage',
              inputType: 'select',
              label: 'Best language',
              tableColumn: '37',
              fieldset: 'stroke',
              fsetRow: '5',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No aphasia; normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorLeftLeg',
              fqn: 'neurological.table.stroke.motorLeftLeg',
              inputType: 'select',
              label: 'Motor - left leg',
              tableColumn: '38',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'dysarthria',
              fqn: 'neurological.table.stroke.dysarthria',
              inputType: 'select',
              label: 'Dysarthria',
              tableColumn: '39',
              fieldset: 'stroke',
              fsetRow: '6',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Normal'
                },
                {
                  text: '1 = Mild to moderate aphasia'
                },
                {
                  text: '2 = Severe aphasia'
                },
                {
                  text: '3 = Mute, global aphasia'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'motorRightLeg',
              fqn: 'neurological.table.stroke.motorRightLeg',
              inputType: 'select',
              label: 'Motor - right leg',
              tableColumn: '40',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No drift'
                },
                {
                  text: '1 = Drift'
                },
                {
                  text: '2 = Some effort against gravity'
                },
                {
                  text: '3 = No effort against gravity'
                },
                {
                  text: '4 = No movement'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'extinctionAndInattention',
              fqn: 'neurological.table.stroke.extinctionAndInattention',
              inputType: 'select',
              label: 'Extinction and inattention',
              tableColumn: '41',
              fieldset: 'stroke',
              fsetRow: '7',
              fsetCol: '2',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = No abnormality'
                },
                {
                  text: '1 = visual, tactile, auditory, spatial, or personal inattention'
                },
                {
                  text: '2 = Profound hemi-inattention or extinction'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'limbAtaxia',
              fqn: 'neurological.table.stroke.limbAtaxia',
              inputType: 'select',
              label: 'Limb ataxia',
              tableColumn: '42',
              fieldset: 'stroke',
              fsetRow: '8',
              fsetCol: '1',
              formCss: 'is-half',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              options: [
                {
                  text: '0 = Absent'
                },
                {
                  text: '1 = Present in one limb'
                },
                {
                  text: '2 = Present in two limbs'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'comments',
              fqn: 'neurological.table.stroke.comments',
              inputType: 'textarea',
              label: 'Comments',
              tableColumn: '43',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '1',
              formCss: 'is-two-thirds',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'resources',
              inputType: 'form-label',
              label:
                "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
              tableColumn: '44',
              fieldset: 'stroke',
              fsetRow: '9',
              fsetCol: '2',
              formCss: 'is-one-third',
              formOption: 'withExternalUrls',
              pageDataKey: 'neurological',
              dataParent: 'neurological.table.stroke',
              page: 'Assessments: Neurological',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '2'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'neurological.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'neurological.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'neurological.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'neurological.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'status',
                    fqn: 'neurological.table.status',
                    inputType: 'fieldset',
                    label: 'Status',
                    tableColumn: '5',
                    fieldset: 'status',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    containerType: 'fieldset',
                    containerKey: 'status',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'alert',
                              fqn: 'neurological.table.status.alert',
                              inputType: 'checkbox',
                              label: 'Alert',
                              tableColumn: '6',
                              fieldset: 'status',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'oriented',
                              fqn: 'neurological.table.status.oriented',
                              inputType: 'checkbox',
                              label: 'Oriented',
                              tableColumn: '7',
                              fieldset: 'status',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'confused',
                              fqn: 'neurological.table.status.confused',
                              inputType: 'checkbox',
                              label: 'Confused',
                              tableColumn: '8',
                              fieldset: 'status',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'drowsy',
                              fqn: 'neurological.table.status.drowsy',
                              inputType: 'checkbox',
                              label: 'Drowsy',
                              tableColumn: '9',
                              fieldset: 'status',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'unresponsive',
                              fqn: 'neurological.table.status.unresponsive',
                              inputType: 'checkbox',
                              label: 'Unresponsive',
                              tableColumn: '10',
                              fieldset: 'status',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'dizziness',
                              fqn: 'neurological.table.status.dizziness',
                              inputType: 'checkbox',
                              label: 'Dizziness',
                              tableColumn: '11',
                              fieldset: 'status',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'blurredVision',
                              fqn: 'neurological.table.status.blurredVision',
                              inputType: 'checkbox',
                              label: 'Blurred vision',
                              tableColumn: '12',
                              fieldset: 'status',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.status',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'concious',
                    fqn: 'neurological.table.concious',
                    inputType: 'fieldset',
                    label: 'Loss of conciousness',
                    tableColumn: '13',
                    fieldset: 'concious',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    containerType: 'fieldset',
                    containerKey: 'concious',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'loss',
                              fqn: 'neurological.table.concious.loss',
                              inputType: 'select',
                              tableColumn: '14',
                              fieldset: 'concious',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.concious',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'Unknown'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'duration',
                              fqn: 'neurological.table.concious.duration',
                              inputType: 'text',
                              label: 'Duration',
                              tableColumn: '15',
                              fieldset: 'concious',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.concious',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'glasgowComaScale',
                    fqn: 'neurological.table.glasgowComaScale',
                    inputType: 'fieldset',
                    label: 'Glasgow Coma Scale',
                    tableColumn: '16',
                    fieldset: 'glasgowComaScale',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    containerType: 'fieldset',
                    containerKey: 'glasgowComaScale',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'eyeOpening',
                              fqn: 'neurological.table.glasgowComaScale.eyeOpening',
                              inputType: 'select',
                              label: 'Eye opening',
                              tableColumn: '17',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Spontaneous'
                                },
                                {
                                  text: 'To sound'
                                },
                                {
                                  text: 'To pressure'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'verbalResponse',
                              fqn: 'neurological.table.glasgowComaScale.verbalResponse',
                              inputType: 'select',
                              label: 'Verbal response',
                              tableColumn: '18',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Oriented'
                                },
                                {
                                  text: 'Confused'
                                },
                                {
                                  text: 'Words'
                                },
                                {
                                  text: 'Sounds'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'bestMotorResponse',
                              fqn: 'neurological.table.glasgowComaScale.bestMotorResponse',
                              inputType: 'select',
                              label: 'Best motor response',
                              tableColumn: '19',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Obeys commands'
                                },
                                {
                                  text: 'Localising'
                                },
                                {
                                  text: 'Normal flexion'
                                },
                                {
                                  text: 'Extension'
                                },
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Non testable'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'totalGlasgow',
                              fqn: 'neurological.table.glasgowComaScale.totalGlasgow',
                              inputType: 'calculated',
                              label: 'Total',
                              tableColumn: '20',
                              fieldset: 'glasgowComaScale',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.glasgowComaScale',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'pupils',
                    fqn: 'neurological.table.pupils',
                    inputType: 'fieldRowSet',
                    label: 'Pupils',
                    tableColumn: '21',
                    fieldset: 'pupils',
                    formCss: 'fieldset_row',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    containerType: 'fieldRowSet',
                    containerKey: 'pupils',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'leftPupilSize',
                              fqn: 'neurological.table.pupils.leftPupilSize',
                              inputType: 'select',
                              label: 'Left pupil size',
                              tableColumn: '22',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
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
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rightPupilSize',
                              fqn: 'neurological.table.pupils.rightPupilSize',
                              inputType: 'select',
                              label: 'Right pupil size',
                              tableColumn: '24',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
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
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'bothPupils',
                              fqn: 'neurological.table.pupils.bothPupils',
                              inputType: 'select',
                              label: 'Both pupils',
                              tableColumn: '26',
                              fieldset: 'pupils',
                              fsetRow: '1',
                              fsetCol: '3',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Equal'
                                },
                                {
                                  text: 'Unequal'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'leftPupilResponseToLight',
                              fqn: 'neurological.table.pupils.leftPupilResponseToLight',
                              inputType: 'select',
                              label: 'Left pupil response to light',
                              tableColumn: '23',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              fqn: 'neurological.table.pupils.',
                              inputType: 'spacer',
                              tableColumn: '27',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'rightPupilResponseToLight',
                              fqn: 'neurological.table.pupils.rightPupilResponseToLight',
                              inputType: 'select',
                              label: 'Right pupil response to light',
                              tableColumn: '25',
                              fieldset: 'pupils',
                              fsetRow: '2',
                              fsetCol: '3',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.pupils',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: 'Brisk'
                                },
                                {
                                  text: 'Sluggish'
                                },
                                {
                                  text: 'Fixed'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'stroke',
                    fqn: 'neurological.table.stroke',
                    inputType: 'fieldRowSet',
                    label: 'Stroke Assessment',
                    tableColumn: '27',
                    fieldset: 'stroke',
                    formCss: 'fieldset_row',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'neurological',
                    dataParent: 'neurological.table',
                    page: 'Assessments: Neurological',
                    containerType: 'fieldRowSet',
                    containerKey: 'stroke',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'levelOfConciousness',
                              fqn: 'neurological.table.stroke.levelOfConciousness',
                              inputType: 'select',
                              label: 'Level of conciousness',
                              tableColumn: '28',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Alert; keenly responsive'
                                },
                                {
                                  text: '1 = Not alert; but arousable by minor stimulation'
                                },
                                {
                                  text: '2 = Not alert; requires repeated stimulation'
                                },
                                {
                                  text: '3 = Unresponsive or responds only with reflex'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestGaze',
                              fqn: 'neurological.table.stroke.bestGaze',
                              inputType: 'select',
                              label: 'Best gaze',
                              tableColumn: '29',
                              fieldset: 'stroke',
                              fsetRow: '1',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Partial gaze palsy'
                                },
                                {
                                  text: '2 = Forced deviation'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessQuestions',
                              fqn: 'neurological.table.stroke.levelOfConciousnessQuestions',
                              inputType: 'select',
                              label: 'Level of conciousness questions',
                              tableColumn: '30',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = answers two questions correctly'
                                },
                                {
                                  text: '1 = Answers one question correctly'
                                },
                                {
                                  text: '2 = Answers neither question correctly'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'visual',
                              fqn: 'neurological.table.stroke.visual',
                              inputType: 'select',
                              label: 'Visual',
                              tableColumn: '31',
                              fieldset: 'stroke',
                              fsetRow: '2',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No visual loss'
                                },
                                {
                                  text: '1 = Partial hemianopia'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'levelOfConciousnessCommands',
                              fqn: 'neurological.table.stroke.levelOfConciousnessCommands',
                              inputType: 'select',
                              label: 'Level of conciousness commands',
                              tableColumn: '32',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Performs both tasks correctly'
                                },
                                {
                                  text: '1 = Performs one task correctly'
                                },
                                {
                                  text: '2 = Performs neither task correctly'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'facialPalsy',
                              fqn: 'neurological.table.stroke.facialPalsy',
                              inputType: 'select',
                              label: 'Facial palsy',
                              tableColumn: '33',
                              fieldset: 'stroke',
                              fsetRow: '3',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal symmetric movements'
                                },
                                {
                                  text: '1 = Minor paralysis'
                                },
                                {
                                  text: '2 = Partial paralysis'
                                },
                                {
                                  text: '3 = Complete paralysis of one or both sides'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'motorLeftArm',
                              fqn: 'neurological.table.stroke.motorLeftArm',
                              inputType: 'select',
                              label: 'Motor - left arm',
                              tableColumn: '34',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sensory',
                              fqn: 'neurological.table.stroke.sensory',
                              inputType: 'select',
                              label: 'Sensory',
                              tableColumn: '35',
                              fieldset: 'stroke',
                              fsetRow: '4',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal; no sensory loss'
                                },
                                {
                                  text: '1 = Mild-to-moderate sensory loss'
                                },
                                {
                                  text: '2 = Severe to total sensory loss'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'motorRightArm',
                              fqn: 'neurological.table.stroke.motorRightArm',
                              inputType: 'select',
                              label: 'Motor - right arm',
                              tableColumn: '36',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity; limb falls'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'bestLanguage',
                              fqn: 'neurological.table.stroke.bestLanguage',
                              inputType: 'select',
                              label: 'Best language',
                              tableColumn: '37',
                              fieldset: 'stroke',
                              fsetRow: '5',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No aphasia; normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'motorLeftLeg',
                              fqn: 'neurological.table.stroke.motorLeftLeg',
                              inputType: 'select',
                              label: 'Motor - left leg',
                              tableColumn: '38',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'dysarthria',
                              fqn: 'neurological.table.stroke.dysarthria',
                              inputType: 'select',
                              label: 'Dysarthria',
                              tableColumn: '39',
                              fieldset: 'stroke',
                              fsetRow: '6',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Normal'
                                },
                                {
                                  text: '1 = Mild to moderate aphasia'
                                },
                                {
                                  text: '2 = Severe aphasia'
                                },
                                {
                                  text: '3 = Mute, global aphasia'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'motorRightLeg',
                              fqn: 'neurological.table.stroke.motorRightLeg',
                              inputType: 'select',
                              label: 'Motor - right leg',
                              tableColumn: '40',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No drift'
                                },
                                {
                                  text: '1 = Drift'
                                },
                                {
                                  text: '2 = Some effort against gravity'
                                },
                                {
                                  text: '3 = No effort against gravity'
                                },
                                {
                                  text: '4 = No movement'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'extinctionAndInattention',
                              fqn: 'neurological.table.stroke.extinctionAndInattention',
                              inputType: 'select',
                              label: 'Extinction and inattention',
                              tableColumn: '41',
                              fieldset: 'stroke',
                              fsetRow: '7',
                              fsetCol: '2',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = No abnormality'
                                },
                                {
                                  text:
                                    '1 = visual, tactile, auditory, spatial, or personal inattention'
                                },
                                {
                                  text: '2 = Profound hemi-inattention or extinction'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              elementKey: 'limbAtaxia',
                              fqn: 'neurological.table.stroke.limbAtaxia',
                              inputType: 'select',
                              label: 'Limb ataxia',
                              tableColumn: '42',
                              fieldset: 'stroke',
                              fsetRow: '8',
                              fsetCol: '1',
                              formCss: 'is-half',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              options: [
                                {
                                  text: '0 = Absent'
                                },
                                {
                                  text: '1 = Present in one limb'
                                },
                                {
                                  text: '2 = Present in two limbs'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '9',
                          elements: [
                            {
                              elementKey: 'comments',
                              fqn: 'neurological.table.stroke.comments',
                              inputType: 'textarea',
                              label: 'Comments',
                              tableColumn: '43',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '1',
                              formCss: 'is-two-thirds',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'resources',
                              inputType: 'form-label',
                              label:
                                "<b>Resources</b><p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p><p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>",
                              tableColumn: '44',
                              fieldset: 'stroke',
                              fsetRow: '9',
                              fsetCol: '2',
                              formCss: 'is-one-third',
                              formOption: 'withExternalUrls',
                              pageDataKey: 'neurological',
                              dataParent: 'neurological.table.stroke',
                              page: 'Assessments: Neurological',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    respiratory: {
      pageTitle: 'Assessments: Respiratory',
      pageDataKey: 'respiratory',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new respiratory assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'respiratory.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'respiratory.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'respiratory.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'respiratory.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            },
            {
              elementKey: 'patent',
              fqn: 'respiratory.table.airway.patent',
              inputType: 'checkbox',
              label: 'Patent',
              tableColumn: '5',
              fieldset: 'airway',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'obstructed',
              fqn: 'respiratory.table.airway.obstructed',
              inputType: 'checkbox',
              label: 'Obstructed',
              tableColumn: '6',
              fieldset: 'airway',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oett',
              fqn: 'respiratory.table.airway.oett',
              inputType: 'checkbox',
              label: 'Oral endotracheal tube',
              tableColumn: '7',
              fieldset: 'airway',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'checkbox',
              label: 'Other',
              tableColumn: '8',
              fieldset: 'airway',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'otherValue',
              fqn: 'respiratory.table.airway.otherValue',
              inputType: 'text',
              tableColumn: '9',
              fieldset: 'airway',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory'
            },
            {
              elementKey: 'oxygenTherapy',
              fqn: 'respiratory.table.airway.oxygenTherapy',
              inputType: 'text',
              label: 'Oxygen therapy',
              tableColumn: '10',
              fieldset: 'airway',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oxygenFlow',
              fqn: 'respiratory.table.airway.oxygenFlow',
              inputType: 'text',
              label: 'Oxygen flow',
              tableColumn: '11',
              fieldset: 'airway',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.airway',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'lul',
              fqn: 'respiratory.table.breath.lul',
              inputType: 'select',
              label: 'Left upper lung',
              tableColumn: '12',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rul',
              fqn: 'respiratory.table.breath.rul',
              inputType: 'select',
              label: 'Right upper lung',
              tableColumn: '13',
              fieldset: 'breath',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'airway',
              fqn: 'respiratory.table.airway',
              inputType: 'fieldset',
              label: 'Airway',
              fieldset: 'airway',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              containerType: 'fieldset',
              containerKey: 'airway',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'breath',
              fqn: 'respiratory.table.breath',
              inputType: 'fieldset',
              label: 'Breath sounds',
              fieldset: 'breath',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              containerType: 'fieldset',
              containerKey: 'breath',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              inputType: 'spacer',
              tableColumn: '14',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rml',
              fqn: 'respiratory.table.breath.rml',
              inputType: 'select',
              label: 'Right middle lung',
              tableColumn: '15',
              fieldset: 'breath',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'lll',
              fqn: 'respiratory.table.breath.lll',
              inputType: 'select',
              label: 'Left lower lung',
              tableColumn: '16',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rll',
              fqn: 'respiratory.table.breath.rll',
              inputType: 'select',
              label: 'Right lower lung',
              tableColumn: '17',
              fieldset: 'breath',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Wheeze'
                },
                {
                  text: 'Crackles'
                },
                {
                  text: 'Absent'
                },
                {
                  text: 'Deceased'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'respiratoryRhythm',
              fqn: 'respiratory.table.breath.respiratoryRhythm',
              inputType: 'select',
              label: 'Respiratory rhythm',
              tableColumn: '18',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Paradoxical'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'respiratoryDepth',
              fqn: 'respiratory.table.breath.respiratoryDepth',
              inputType: 'select',
              label: 'Respiratory depth',
              tableColumn: '19',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Shallow'
                },
                {
                  text: 'Deep'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'cough',
              fqn: 'respiratory.table.breath.cough',
              inputType: 'select',
              label: 'Cough',
              tableColumn: '20',
              fieldset: 'breath',
              fsetRow: '4',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Nonreproductive'
                },
                {
                  text: 'Productive'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'sputumColour',
              fqn: 'respiratory.table.breath.sputumColour',
              inputType: 'select',
              label: 'Sputum colour',
              tableColumn: '21',
              fieldset: 'breath',
              fsetRow: '5',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              options: [
                {
                  text: 'Mucoid'
                },
                {
                  text: 'Purulent'
                },
                {
                  text: 'Yellow-green'
                },
                {
                  text: 'Rust-coloured'
                },
                {
                  text: 'Pink, blood tinged'
                },
                {
                  text: 'Pink, frothy'
                },
                {
                  text: 'Profuse, colourless'
                },
                {
                  text: 'Bloody'
                }
              ],
              tableKey: 'table',
              formColumn: '2'
            },
            {
              inputType: 'spacer',
              tableColumn: '22',
              fieldset: 'breath',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableCss: 'hide-table-element'
            },
            {
              elementKey: 'sputumComments',
              fqn: 'respiratory.table.breath.sputumComments',
              inputType: 'text',
              label: 'Sputum comments',
              tableColumn: '23',
              fieldset: 'breath',
              fsetRow: '6',
              fsetCol: '2',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table.breath',
              page: 'Assessments: Respiratory',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'generalComments',
              fqn: 'respiratory.table.generalComments',
              inputType: 'textarea',
              label: 'General comments',
              tableColumn: '24',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'respiratory',
              dataParent: 'respiratory.table',
              page: 'Assessments: Respiratory',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'respiratory.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'respiratory.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'respiratory.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'respiratory.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'airway',
                    fqn: 'respiratory.table.airway',
                    inputType: 'fieldset',
                    label: 'Airway',
                    fieldset: 'airway',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    containerType: 'fieldset',
                    containerKey: 'airway',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'patent',
                              fqn: 'respiratory.table.airway.patent',
                              inputType: 'checkbox',
                              label: 'Patent',
                              tableColumn: '5',
                              fieldset: 'airway',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'obstructed',
                              fqn: 'respiratory.table.airway.obstructed',
                              inputType: 'checkbox',
                              label: 'Obstructed',
                              tableColumn: '6',
                              fieldset: 'airway',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'oett',
                              fqn: 'respiratory.table.airway.oett',
                              inputType: 'checkbox',
                              label: 'Oral endotracheal tube',
                              tableColumn: '7',
                              fieldset: 'airway',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              tableColumn: '8',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'otherValue',
                              fqn: 'respiratory.table.airway.otherValue',
                              inputType: 'checkbox',
                              label: 'Other',
                              tableColumn: '8',
                              fieldset: 'airway',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'oxygenTherapy',
                              fqn: 'respiratory.table.airway.oxygenTherapy',
                              inputType: 'text',
                              label: 'Oxygen therapy',
                              tableColumn: '10',
                              fieldset: 'airway',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'oxygenFlow',
                              fqn: 'respiratory.table.airway.oxygenFlow',
                              inputType: 'text',
                              label: 'Oxygen flow',
                              tableColumn: '11',
                              fieldset: 'airway',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.airway',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'breath',
                    fqn: 'respiratory.table.breath',
                    inputType: 'fieldset',
                    label: 'Breath sounds',
                    fieldset: 'breath',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    containerType: 'fieldset',
                    containerKey: 'breath',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'lul',
                              fqn: 'respiratory.table.breath.lul',
                              inputType: 'select',
                              label: 'Left upper lung',
                              tableColumn: '12',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rul',
                              fqn: 'respiratory.table.breath.rul',
                              inputType: 'select',
                              label: 'Right upper lung',
                              tableColumn: '13',
                              fieldset: 'breath',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              inputType: 'spacer',
                              tableColumn: '14',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rml',
                              fqn: 'respiratory.table.breath.rml',
                              inputType: 'select',
                              label: 'Right middle lung',
                              tableColumn: '15',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'lll',
                              fqn: 'respiratory.table.breath.lll',
                              inputType: 'select',
                              label: 'Left lower lung',
                              tableColumn: '16',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'rll',
                              fqn: 'respiratory.table.breath.rll',
                              inputType: 'select',
                              label: 'Right lower lung',
                              tableColumn: '17',
                              fieldset: 'breath',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Wheeze'
                                },
                                {
                                  text: 'Crackles'
                                },
                                {
                                  text: 'Absent'
                                },
                                {
                                  text: 'Deceased'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'respiratoryRhythm',
                              fqn: 'respiratory.table.breath.respiratoryRhythm',
                              inputType: 'select',
                              label: 'Respiratory rhythm',
                              tableColumn: '18',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Regular'
                                },
                                {
                                  text: 'Irregular'
                                },
                                {
                                  text: 'Paradoxical'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'cough',
                              fqn: 'respiratory.table.breath.cough',
                              inputType: 'select',
                              label: 'Cough',
                              tableColumn: '20',
                              fieldset: 'breath',
                              fsetRow: '4',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'No'
                                },
                                {
                                  text: 'Nonreproductive'
                                },
                                {
                                  text: 'Productive'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'respiratoryDepth',
                              fqn: 'respiratory.table.breath.respiratoryDepth',
                              inputType: 'select',
                              label: 'Respiratory depth',
                              tableColumn: '19',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Normal'
                                },
                                {
                                  text: 'Shallow'
                                },
                                {
                                  text: 'Deep'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sputumColour',
                              fqn: 'respiratory.table.breath.sputumColour',
                              inputType: 'select',
                              label: 'Sputum colour',
                              tableColumn: '21',
                              fieldset: 'breath',
                              fsetRow: '5',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              options: [
                                {
                                  text: 'Mucoid'
                                },
                                {
                                  text: 'Purulent'
                                },
                                {
                                  text: 'Yellow-green'
                                },
                                {
                                  text: 'Rust-coloured'
                                },
                                {
                                  text: 'Pink, blood tinged'
                                },
                                {
                                  text: 'Pink, frothy'
                                },
                                {
                                  text: 'Profuse, colourless'
                                },
                                {
                                  text: 'Bloody'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              inputType: 'spacer',
                              tableColumn: '14',
                              fieldset: 'breath',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'sputumComments',
                              fqn: 'respiratory.table.breath.sputumComments',
                              inputType: 'text',
                              label: 'Sputum comments',
                              tableColumn: '23',
                              fieldset: 'breath',
                              fsetRow: '6',
                              fsetCol: '2',
                              pageDataKey: 'respiratory',
                              dataParent: 'respiratory.table.breath',
                              page: 'Assessments: Respiratory',
                              tableKey: 'table',
                              formColumn: '2'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'generalComments',
                    fqn: 'respiratory.table.generalComments',
                    inputType: 'textarea',
                    label: 'General comments',
                    tableColumn: '24',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'respiratory',
                    dataParent: 'respiratory.table',
                    page: 'Assessments: Respiratory',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    cardiovascular: {
      pageTitle: 'Assessments: Cardiovascular',
      pageDataKey: 'cardiovascular',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new cardiovascular assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'cardiovascular.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'cardiovascular.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'cardiovascular.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'cardiovascular.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            },
            {
              elementKey: 'pulse',
              fqn: 'cardiovascular.table.pulse',
              inputType: 'select',
              label: 'Pulse',
              tableColumn: '5',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Irregular'
                },
                {
                  text: 'Normal'
                },
                {
                  text: 'Weak'
                },
                {
                  text: 'Bounding'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'skinAppearance',
              fqn: 'cardiovascular.table.skinAppearance',
              inputType: 'select',
              label: 'Skin appearance',
              tableColumn: '6',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Pale'
                },
                {
                  text: 'Mottled'
                },
                {
                  text: 'Cyanotic'
                },
                {
                  text: 'Flushed'
                },
                {
                  text: 'Jaundiced'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'spacer1',
              inputType: 'form-label',
              tableColumn: '7',
              formColumn: '1',
              formRow: '3',
              formOption: 'spacer',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelCapRefill',
              inputType: 'form-label',
              label: 'Cap refill',
              tableColumn: '8',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              helperText: 'Normal < 3 seconds-NL-Delayed > 3 seconds',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelTemperature',
              inputType: 'form-label',
              label: 'Temperature',
              tableColumn: '9',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelPeripheral',
              inputType: 'form-label',
              label: 'Peripheral edema',
              tableColumn: '10',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelNailBed',
              inputType: 'form-label',
              label: 'Nail bed colour',
              tableColumn: '11',
              formColumn: '5',
              formRow: '3',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'lableRight',
              inputType: 'form-label',
              label: 'Right hand',
              tableColumn: '12',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'lableLeftHand',
              inputType: 'form-label',
              label: 'Left hand',
              tableColumn: '13',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelRightFoot',
              inputType: 'form-label',
              label: 'Right foot',
              tableColumn: '14',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'labelLeftFoot',
              inputType: 'form-label',
              label: 'Left foot',
              tableColumn: '15',
              formColumn: '1',
              formRow: '7',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightHand',
              fqn: 'cardiovascular.table.capRefillRightHand',
              inputType: 'select',
              label: 'Cap refill: Left hand',
              tableColumn: '16',
              formColumn: '2',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftHand',
              fqn: 'cardiovascular.table.capRefillLeftHand',
              inputType: 'select',
              label: 'Cap refill: Right foot',
              tableColumn: '17',
              formColumn: '2',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillRightFoot',
              fqn: 'cardiovascular.table.capRefillRightFoot',
              inputType: 'select',
              label: 'Cap refill: Left foot',
              tableColumn: '18',
              formColumn: '2',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'capRefillLeftFoot',
              fqn: 'cardiovascular.table.capRefillLeftFoot',
              inputType: 'select',
              label: 'Temperature: Right hand',
              tableColumn: '19',
              formColumn: '2',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Normal'
                },
                {
                  text: 'Delayed'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightHand',
              fqn: 'cardiovascular.table.temperatureRightHand',
              inputType: 'select',
              label: 'Temperature: Left hand',
              tableColumn: '20',
              formColumn: '3',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftHand',
              fqn: 'cardiovascular.table.temperatureLeftHand',
              inputType: 'select',
              label: 'Temperature: Right foot',
              tableColumn: '21',
              formColumn: '3',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureRightFoot',
              fqn: 'cardiovascular.table.temperatureRightFoot',
              inputType: 'select',
              label: 'Temperature: Left foot',
              tableColumn: '22',
              formColumn: '3',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'temperatureLeftFoot',
              fqn: 'cardiovascular.table.temperatureLeftFoot',
              inputType: 'select',
              label: 'Peripheral edema: Right hand',
              tableColumn: '23',
              formColumn: '3',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Warm'
                },
                {
                  text: 'Cool'
                },
                {
                  text: 'Hot'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightHand',
              fqn: 'cardiovascular.table.peripheralEdemaRightHand',
              inputType: 'select',
              label: 'Peripheral edema: Left hand',
              tableColumn: '24',
              formColumn: '4',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftHand',
              fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
              inputType: 'select',
              label: 'Peripheral edema: Right foot',
              tableColumn: '25',
              formColumn: '4',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaRightFoot',
              fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
              inputType: 'select',
              label: 'Peripheral edema: Left foot',
              tableColumn: '26',
              formColumn: '4',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'peripheralEdemaLeftFoot',
              fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
              inputType: 'select',
              label: 'Nail bed colour: Right hand',
              tableColumn: '27',
              formColumn: '4',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'No'
                },
                {
                  text: 'Ankle'
                },
                {
                  text: 'Pedal'
                },
                {
                  text: 'Sacral'
                },
                {
                  text: 'Pitting'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightHand',
              fqn: 'cardiovascular.table.nailBedColourRightHand',
              inputType: 'select',
              label: 'Nail bed colour: Left hand',
              tableColumn: '28',
              formColumn: '5',
              formRow: '4',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftHand',
              fqn: 'cardiovascular.table.nailBedColourLeftHand',
              inputType: 'select',
              label: 'Nail bed colour: Right Foot',
              tableColumn: '29',
              formColumn: '5',
              formRow: '5',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourRightFoot',
              fqn: 'cardiovascular.table.nailBedColourRightFoot',
              inputType: 'select',
              label: 'Nail bed colour: Left foot',
              tableColumn: '30',
              formColumn: '5',
              formRow: '6',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'nailBedColourLeftFoot',
              fqn: 'cardiovascular.table.nailBedColourLeftFoot',
              inputType: 'select',
              tableColumn: '31',
              formColumn: '5',
              formRow: '7',
              formOption: 'noLabel',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              options: [
                {
                  text: 'Pink'
                },
                {
                  text: 'Cyanotic'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'cardiovascular.table.comments',
              inputType: 'text',
              label: 'Comments',
              tableColumn: '32',
              formColumn: '1',
              formRow: '8',
              pageDataKey: 'cardiovascular',
              dataParent: 'cardiovascular.table',
              page: 'Assessments: Cardiovascular',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'cardiovascular.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'cardiovascular.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'cardiovascular.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'cardiovascular.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'pulse',
                    fqn: 'cardiovascular.table.pulse',
                    inputType: 'select',
                    label: 'Pulse',
                    tableColumn: '5',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Regular'
                      },
                      {
                        text: 'Irregular'
                      },
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Weak'
                      },
                      {
                        text: 'Bounding'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'skinAppearance',
                    fqn: 'cardiovascular.table.skinAppearance',
                    inputType: 'select',
                    label: 'Skin appearance',
                    tableColumn: '6',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Pale'
                      },
                      {
                        text: 'Mottled'
                      },
                      {
                        text: 'Cyanotic'
                      },
                      {
                        text: 'Flushed'
                      },
                      {
                        text: 'Jaundiced'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'spacer1',
                    inputType: 'form-label',
                    tableColumn: '7',
                    formColumn: '1',
                    formRow: '3',
                    formOption: 'spacer',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelCapRefill',
                    inputType: 'form-label',
                    label: 'Cap refill',
                    tableColumn: '8',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    helperText: 'Normal < 3 seconds-NL-Delayed > 3 seconds',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelTemperature',
                    inputType: 'form-label',
                    label: 'Temperature',
                    tableColumn: '9',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelPeripheral',
                    inputType: 'form-label',
                    label: 'Peripheral edema',
                    tableColumn: '10',
                    formColumn: '4',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'labelNailBed',
                    inputType: 'form-label',
                    label: 'Nail bed colour',
                    tableColumn: '11',
                    formColumn: '5',
                    formRow: '3',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'lableRight',
                    inputType: 'form-label',
                    label: 'Right hand',
                    tableColumn: '12',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightHand',
                    fqn: 'cardiovascular.table.capRefillRightHand',
                    inputType: 'select',
                    label: 'Cap refill: Left hand',
                    tableColumn: '16',
                    formColumn: '2',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightHand',
                    fqn: 'cardiovascular.table.temperatureRightHand',
                    inputType: 'select',
                    label: 'Temperature: Left hand',
                    tableColumn: '20',
                    formColumn: '3',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightHand',
                    fqn: 'cardiovascular.table.peripheralEdemaRightHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Left hand',
                    tableColumn: '24',
                    formColumn: '4',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightHand',
                    fqn: 'cardiovascular.table.nailBedColourRightHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Left hand',
                    tableColumn: '28',
                    formColumn: '5',
                    formRow: '4',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'lableLeftHand',
                    inputType: 'form-label',
                    label: 'Left hand',
                    tableColumn: '13',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftHand',
                    fqn: 'cardiovascular.table.capRefillLeftHand',
                    inputType: 'select',
                    label: 'Cap refill: Right foot',
                    tableColumn: '17',
                    formColumn: '2',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftHand',
                    fqn: 'cardiovascular.table.temperatureLeftHand',
                    inputType: 'select',
                    label: 'Temperature: Right foot',
                    tableColumn: '21',
                    formColumn: '3',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftHand',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftHand',
                    inputType: 'select',
                    label: 'Peripheral edema: Right foot',
                    tableColumn: '25',
                    formColumn: '4',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftHand',
                    fqn: 'cardiovascular.table.nailBedColourLeftHand',
                    inputType: 'select',
                    label: 'Nail bed colour: Right Foot',
                    tableColumn: '29',
                    formColumn: '5',
                    formRow: '5',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'labelRightFoot',
                    inputType: 'form-label',
                    label: 'Right foot',
                    tableColumn: '14',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillRightFoot',
                    fqn: 'cardiovascular.table.capRefillRightFoot',
                    inputType: 'select',
                    label: 'Cap refill: Left foot',
                    tableColumn: '18',
                    formColumn: '2',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureRightFoot',
                    fqn: 'cardiovascular.table.temperatureRightFoot',
                    inputType: 'select',
                    label: 'Temperature: Left foot',
                    tableColumn: '22',
                    formColumn: '3',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaRightFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaRightFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Left foot',
                    tableColumn: '26',
                    formColumn: '4',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourRightFoot',
                    fqn: 'cardiovascular.table.nailBedColourRightFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Left foot',
                    tableColumn: '30',
                    formColumn: '5',
                    formRow: '6',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '7',
                elements: [
                  {
                    elementKey: 'labelLeftFoot',
                    inputType: 'form-label',
                    label: 'Left foot',
                    tableColumn: '15',
                    formColumn: '1',
                    formRow: '7',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'capRefillLeftFoot',
                    fqn: 'cardiovascular.table.capRefillLeftFoot',
                    inputType: 'select',
                    label: 'Temperature: Right hand',
                    tableColumn: '19',
                    formColumn: '2',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Normal'
                      },
                      {
                        text: 'Delayed'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'temperatureLeftFoot',
                    fqn: 'cardiovascular.table.temperatureLeftFoot',
                    inputType: 'select',
                    label: 'Peripheral edema: Right hand',
                    tableColumn: '23',
                    formColumn: '3',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Warm'
                      },
                      {
                        text: 'Cool'
                      },
                      {
                        text: 'Hot'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'peripheralEdemaLeftFoot',
                    fqn: 'cardiovascular.table.peripheralEdemaLeftFoot',
                    inputType: 'select',
                    label: 'Nail bed colour: Right hand',
                    tableColumn: '27',
                    formColumn: '4',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'No'
                      },
                      {
                        text: 'Ankle'
                      },
                      {
                        text: 'Pedal'
                      },
                      {
                        text: 'Sacral'
                      },
                      {
                        text: 'Pitting'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'nailBedColourLeftFoot',
                    fqn: 'cardiovascular.table.nailBedColourLeftFoot',
                    inputType: 'select',
                    tableColumn: '31',
                    formColumn: '5',
                    formRow: '7',
                    formOption: 'noLabel',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    options: [
                      {
                        text: 'Pink'
                      },
                      {
                        text: 'Cyanotic'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '8',
                elements: [
                  {
                    elementKey: 'comments',
                    fqn: 'cardiovascular.table.comments',
                    inputType: 'text',
                    label: 'Comments',
                    tableColumn: '32',
                    formColumn: '1',
                    formRow: '8',
                    pageDataKey: 'cardiovascular',
                    dataParent: 'cardiovascular.table',
                    page: 'Assessments: Cardiovascular',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    gastrointestinal: {
      pageTitle: 'Assessments: Gastrointestinal',
      pageDataKey: 'gastrointestinal',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new gastrointestinal assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'gastrointestinal.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'gastrointestinal.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'gastrointestinal.table.unit',
              inputType: 'text',
              label: 'Unit',
              tableColumn: '3',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'gastrointestinal.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '4',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'gastrointestinal.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '5',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'abdomen',
              fqn: 'gastrointestinal.table.abdomen',
              inputType: 'fieldset',
              label: 'Abdomen',
              tableColumn: '6',
              fieldset: 'abdomen',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'abdomen',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'soft',
              fqn: 'gastrointestinal.table.abdomen.soft',
              inputType: 'checkbox',
              label: 'Soft',
              tableColumn: '7',
              fieldset: 'abdomen',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'tender',
              fqn: 'gastrointestinal.table.abdomen.tender',
              inputType: 'checkbox',
              label: 'Tender',
              tableColumn: '8',
              fieldset: 'abdomen',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'rigid',
              fqn: 'gastrointestinal.table.abdomen.rigid',
              inputType: 'checkbox',
              label: 'Rigid',
              tableColumn: '9',
              fieldset: 'abdomen',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'guarding',
              fqn: 'gastrointestinal.table.abdomen.guarding',
              inputType: 'checkbox',
              label: 'Guarding',
              tableColumn: '10',
              fieldset: 'abdomen',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'distended',
              fqn: 'gastrointestinal.table.abdomen.distended',
              inputType: 'checkbox',
              label: 'Distended',
              tableColumn: '11',
              fieldset: 'abdomen',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'scars',
              fqn: 'gastrointestinal.table.abdomen.scars',
              inputType: 'checkbox',
              label: 'Scars',
              tableColumn: '12',
              fieldset: 'abdomen',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pain',
              fqn: 'gastrointestinal.table.abdomen.pain',
              inputType: 'select',
              label: 'Abdominal pain',
              tableColumn: '13',
              fieldset: 'abdomen',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              fqn: 'gastrointestinal.table.abdomen.',
              inputType: 'form-label',
              label: 'If answered yes, please complete the pain assessent',
              tableColumn: '14',
              fieldset: 'abdomen',
              fsetRow: '8',
              fsetCol: '1',
              formOption: 'labelWithPageRef',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.abdomen',
              page: 'Assessments: Gastrointestinal',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'emesis',
              fqn: 'gastrointestinal.table.emesis',
              inputType: 'fieldset',
              label: 'Emesis',
              tableColumn: '15',
              fieldset: 'emesis',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'emesis',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'none',
              fqn: 'gastrointestinal.table.emesis.none',
              inputType: 'select',
              label: 'None',
              tableColumn: '16',
              fieldset: 'emesis',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Need'
                },
                {
                  text: 'Data'
                },
                {
                  text: 'Here'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'nausea',
              fqn: 'gastrointestinal.table.emesis.nausea',
              inputType: 'text',
              label: 'Nausea',
              tableColumn: '17',
              fieldset: 'emesis',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'vomiting',
              fqn: 'gastrointestinal.table.emesis.vomiting',
              inputType: 'text',
              label: 'Vomiting',
              tableColumn: '18',
              fieldset: 'emesis',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'colour',
              fqn: 'gastrointestinal.table.emesis.colour',
              inputType: 'select',
              label: 'Emesis colour',
              tableColumn: '19',
              fieldset: 'emesis',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Need'
                },
                {
                  text: 'Data'
                },
                {
                  text: 'Here'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'description',
              fqn: 'gastrointestinal.table.emesis.description',
              inputType: 'text',
              label: 'Description',
              tableColumn: '20',
              fieldset: 'emesis',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'amount',
              fqn: 'gastrointestinal.table.emesis.amount',
              inputType: 'select',
              label: 'Approximate volume',
              tableColumn: '21',
              fieldset: 'emesis',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.emesis',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Small'
                },
                {
                  text: 'Moderate'
                },
                {
                  text: 'Large'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'eatingGroup',
              fqn: 'gastrointestinal.table.eatingGroup',
              inputType: 'fieldset',
              label: 'Eating',
              tableColumn: '22',
              fieldset: 'eatingGroup',
              formColumn: '1',
              formRow: '2',
              formOption: 'withoutLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'eatingGroup',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'eating',
              fqn: 'gastrointestinal.table.eatingGroup.eating',
              inputType: 'select',
              tableColumn: '23',
              fieldset: 'eatingGroup',
              fsetRow: '1',
              fsetCol: '1',
              formOption: 'boldLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.eatingGroup',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Regular'
                },
                {
                  text: 'Difficult'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'reason',
              fqn: 'gastrointestinal.table.eatingGroup.reason',
              inputType: 'text',
              label: 'Reason',
              tableColumn: '24',
              fieldset: 'eatingGroup',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.eatingGroup',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'hyperactive',
              fqn: 'gastrointestinal.table.bSounds.hyperactive',
              inputType: 'checkbox',
              label: 'Hyperactive',
              fieldset: 'bSounds',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'npoSinceDate',
              fqn: 'gastrointestinal.table.eatingGroup.npoSinceDate',
              inputType: 'day',
              label: 'Day',
              tableColumn: '25',
              fieldset: 'eatingGroup',
              fsetRow: '3',
              fsetCol: '1',
              formOption: 'boldLabel',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.eatingGroup',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'npoSince',
              fqn: 'gastrointestinal.table.npoSince',
              inputType: 'fieldset',
              label: 'NPO since',
              fieldset: 'eatingGroup',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'npoSince',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'hypoactive',
              fqn: 'gastrointestinal.table.bSounds.hypoactive',
              inputType: 'checkbox',
              label: 'Hypoactive',
              fieldset: 'bSounds',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'npoSinceTime',
              fqn: 'gastrointestinal.table.eatingGroup.npoSinceTime',
              inputType: 'time',
              label: 'Time',
              tableColumn: '26',
              fieldset: 'eatingGroup',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.eatingGroup',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'stool',
              fqn: 'gastrointestinal.table.stool',
              inputType: 'fieldset',
              label: 'Stool',
              tableColumn: '27',
              fieldset: 'stool',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'stool',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'stoolColour',
              fqn: 'gastrointestinal.table.stool.stoolColour',
              inputType: 'select',
              label: 'Stool colour',
              tableColumn: '28',
              fieldset: 'stool',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Brown'
                },
                {
                  text: 'Green'
                },
                {
                  text: 'Clay coloured'
                },
                {
                  text: 'Yellow'
                },
                {
                  text: 'Black'
                },
                {
                  text: 'Bright red'
                },
                {
                  text: 'Dark red'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'stoolDescription',
              fqn: 'gastrointestinal.table.stool.stoolDescription',
              inputType: 'select',
              label: 'Description',
              tableColumn: '29',
              fieldset: 'stool',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              options: [
                {
                  text: 'Runny'
                },
                {
                  text: 'Hard pellets'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'stoolAmount',
              fqn: 'gastrointestinal.table.stool.stoolAmount',
              inputType: 'text',
              label: 'Amount',
              tableColumn: '30',
              fieldset: 'stool',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'stoolSource',
              fqn: 'gastrointestinal.table.stool.stoolSource',
              inputType: 'select',
              label: 'Source',
              tableColumn: '31',
              fieldset: 'stool',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
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
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'comments',
              fqn: 'gastrointestinal.table.stool.comments',
              inputType: 'textarea',
              label: 'Comments',
              tableColumn: '32',
              fieldset: 'stool',
              formRow: '4',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table'
            },
            {
              elementKey: 'normal',
              fqn: 'gastrointestinal.table.stool.normal',
              inputType: 'checkbox',
              label: 'Normal',
              tableColumn: '33',
              fieldset: 'stool',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'constipation',
              fqn: 'gastrointestinal.table.stool.constipation',
              inputType: 'checkbox',
              label: 'Constipation',
              tableColumn: '34',
              fieldset: 'stool',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'diarrhea',
              fqn: 'gastrointestinal.table.stool.diarrhea',
              inputType: 'checkbox',
              label: 'Diarrhea',
              tableColumn: '35',
              fieldset: 'stool',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'melena',
              fqn: 'gastrointestinal.table.stool.melena',
              inputType: 'checkbox',
              label: 'Melena',
              tableColumn: '36',
              fieldset: 'stool',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'incontinent',
              fqn: 'gastrointestinal.table.stool.incontinent',
              inputType: 'checkbox',
              label: 'Incontinent',
              tableColumn: '37',
              fieldset: 'stool',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'lastBm',
              fqn: 'gastrointestinal.table.stool.lastBm',
              inputType: 'text',
              label: 'Last BM',
              tableColumn: '38',
              fieldset: 'stool',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.stool',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bSounds',
              fqn: 'gastrointestinal.table.bSounds',
              inputType: 'fieldset',
              label: 'Bowel Sounds',
              tableColumn: '39',
              fieldset: 'bSounds',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table',
              page: 'Assessments: Gastrointestinal',
              containerType: 'fieldset',
              containerKey: 'bSounds',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'bsNone',
              fqn: 'gastrointestinal.table.bSounds.bsNone',
              inputType: 'checkbox',
              label: 'None',
              tableColumn: '40',
              fieldset: 'bSounds',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bsLUQ',
              fqn: 'gastrointestinal.table.bSounds.bsLUQ',
              inputType: 'checkbox',
              label: 'LUQ',
              tableColumn: '41',
              fieldset: 'bSounds',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bsRUQ',
              fqn: 'gastrointestinal.table.bSounds.bsRUQ',
              inputType: 'checkbox',
              label: 'RUQ',
              tableColumn: '42',
              fieldset: 'bSounds',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bsLLQ',
              fqn: 'gastrointestinal.table.bSounds.bsLLQ',
              inputType: 'checkbox',
              label: 'LLQ',
              tableColumn: '43',
              fieldset: 'bSounds',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bsRLQ',
              fqn: 'gastrointestinal.table.bSounds.bsRLQ',
              inputType: 'checkbox',
              label: 'RLQ',
              tableColumn: '44',
              fieldset: 'bSounds',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'gastrointestinal',
              dataParent: 'gastrointestinal.table.bSounds',
              page: 'Assessments: Gastrointestinal',
              tableKey: 'table',
              formColumn: '1'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'gastrointestinal.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'gastrointestinal.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'gastrointestinal.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    tableColumn: '3',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'gastrointestinal.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '4',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'gastrointestinal.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '5',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'abdomen',
                    fqn: 'gastrointestinal.table.abdomen',
                    inputType: 'fieldset',
                    label: 'Abdomen',
                    tableColumn: '6',
                    fieldset: 'abdomen',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    containerType: 'fieldset',
                    containerKey: 'abdomen',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'soft',
                              fqn: 'gastrointestinal.table.abdomen.soft',
                              inputType: 'checkbox',
                              label: 'Soft',
                              tableColumn: '7',
                              fieldset: 'abdomen',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'tender',
                              fqn: 'gastrointestinal.table.abdomen.tender',
                              inputType: 'checkbox',
                              label: 'Tender',
                              tableColumn: '8',
                              fieldset: 'abdomen',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'rigid',
                              fqn: 'gastrointestinal.table.abdomen.rigid',
                              inputType: 'checkbox',
                              label: 'Rigid',
                              tableColumn: '9',
                              fieldset: 'abdomen',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'guarding',
                              fqn: 'gastrointestinal.table.abdomen.guarding',
                              inputType: 'checkbox',
                              label: 'Guarding',
                              tableColumn: '10',
                              fieldset: 'abdomen',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'distended',
                              fqn: 'gastrointestinal.table.abdomen.distended',
                              inputType: 'checkbox',
                              label: 'Distended',
                              tableColumn: '11',
                              fieldset: 'abdomen',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'scars',
                              fqn: 'gastrointestinal.table.abdomen.scars',
                              inputType: 'checkbox',
                              label: 'Scars',
                              tableColumn: '12',
                              fieldset: 'abdomen',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'pain',
                              fqn: 'gastrointestinal.table.abdomen.pain',
                              inputType: 'select',
                              label: 'Abdominal pain',
                              tableColumn: '13',
                              fieldset: 'abdomen',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              fqn: 'gastrointestinal.table.abdomen.',
                              inputType: 'form-label',
                              label: 'If answered yes, please complete the pain assessent',
                              tableColumn: '14',
                              fieldset: 'abdomen',
                              fsetRow: '8',
                              fsetCol: '1',
                              formOption: 'labelWithPageRef',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.abdomen',
                              page: 'Assessments: Gastrointestinal',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'emesis',
                    fqn: 'gastrointestinal.table.emesis',
                    inputType: 'fieldset',
                    label: 'Emesis',
                    tableColumn: '15',
                    fieldset: 'emesis',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    containerType: 'fieldset',
                    containerKey: 'emesis',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'none',
                              fqn: 'gastrointestinal.table.emesis.none',
                              inputType: 'select',
                              label: 'None',
                              tableColumn: '16',
                              fieldset: 'emesis',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Need'
                                },
                                {
                                  text: 'Data'
                                },
                                {
                                  text: 'Here'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'nausea',
                              fqn: 'gastrointestinal.table.emesis.nausea',
                              inputType: 'text',
                              label: 'Nausea',
                              tableColumn: '17',
                              fieldset: 'emesis',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'vomiting',
                              fqn: 'gastrointestinal.table.emesis.vomiting',
                              inputType: 'text',
                              label: 'Vomiting',
                              tableColumn: '18',
                              fieldset: 'emesis',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'colour',
                              fqn: 'gastrointestinal.table.emesis.colour',
                              inputType: 'select',
                              label: 'Emesis colour',
                              tableColumn: '19',
                              fieldset: 'emesis',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Need'
                                },
                                {
                                  text: 'Data'
                                },
                                {
                                  text: 'Here'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'description',
                              fqn: 'gastrointestinal.table.emesis.description',
                              inputType: 'text',
                              label: 'Description',
                              tableColumn: '20',
                              fieldset: 'emesis',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'amount',
                              fqn: 'gastrointestinal.table.emesis.amount',
                              inputType: 'select',
                              label: 'Approximate volume',
                              tableColumn: '21',
                              fieldset: 'emesis',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.emesis',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Small'
                                },
                                {
                                  text: 'Moderate'
                                },
                                {
                                  text: 'Large'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'eatingGroup',
                    fqn: 'gastrointestinal.table.eatingGroup',
                    inputType: 'fieldset',
                    label: 'Eating',
                    tableColumn: '22',
                    fieldset: 'eatingGroup',
                    formColumn: '1',
                    formRow: '2',
                    formOption: 'withoutLabel',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    containerType: 'fieldset',
                    containerKey: 'eatingGroup',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'eating',
                              fqn: 'gastrointestinal.table.eatingGroup.eating',
                              inputType: 'select',
                              tableColumn: '23',
                              fieldset: 'eatingGroup',
                              fsetRow: '1',
                              fsetCol: '1',
                              formOption: 'boldLabel',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.eatingGroup',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Regular'
                                },
                                {
                                  text: 'Difficult'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'reason',
                              fqn: 'gastrointestinal.table.eatingGroup.reason',
                              inputType: 'text',
                              label: 'Reason',
                              tableColumn: '24',
                              fieldset: 'eatingGroup',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.eatingGroup',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'npoSinceDate',
                              fqn: 'gastrointestinal.table.eatingGroup.npoSinceDate',
                              inputType: 'day',
                              label: 'Day',
                              tableColumn: '25',
                              fieldset: 'eatingGroup',
                              fsetRow: '3',
                              fsetCol: '1',
                              formOption: 'boldLabel',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.eatingGroup',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'npoSinceTime',
                              fqn: 'gastrointestinal.table.eatingGroup.npoSinceTime',
                              inputType: 'time',
                              label: 'Time',
                              tableColumn: '26',
                              fieldset: 'eatingGroup',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.eatingGroup',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'bSounds',
                    fqn: 'gastrointestinal.table.bSounds',
                    inputType: 'fieldset',
                    label: 'Bowel Sounds',
                    tableColumn: '39',
                    fieldset: 'bSounds',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    containerType: 'fieldset',
                    containerKey: 'bSounds',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'bsNone',
                              fqn: 'gastrointestinal.table.bSounds.bsNone',
                              inputType: 'checkbox',
                              label: 'None',
                              tableColumn: '40',
                              fieldset: 'bSounds',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'bsLUQ',
                              fqn: 'gastrointestinal.table.bSounds.bsLUQ',
                              inputType: 'checkbox',
                              label: 'LUQ',
                              tableColumn: '41',
                              fieldset: 'bSounds',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'bsRUQ',
                              fqn: 'gastrointestinal.table.bSounds.bsRUQ',
                              inputType: 'checkbox',
                              label: 'RUQ',
                              tableColumn: '42',
                              fieldset: 'bSounds',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'bsLLQ',
                              fqn: 'gastrointestinal.table.bSounds.bsLLQ',
                              inputType: 'checkbox',
                              label: 'LLQ',
                              tableColumn: '43',
                              fieldset: 'bSounds',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'bsRLQ',
                              fqn: 'gastrointestinal.table.bSounds.bsRLQ',
                              inputType: 'checkbox',
                              label: 'RLQ',
                              tableColumn: '44',
                              fieldset: 'bSounds',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'hypoactive',
                              fqn: 'gastrointestinal.table.bSounds.hypoactive',
                              inputType: 'checkbox',
                              label: 'Hypoactive',
                              fieldset: 'bSounds',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'hyperactive',
                              fqn: 'gastrointestinal.table.bSounds.hyperactive',
                              inputType: 'checkbox',
                              label: 'Hyperactive',
                              fieldset: 'bSounds',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.bSounds',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'stool',
                    fqn: 'gastrointestinal.table.stool',
                    inputType: 'fieldset',
                    label: 'Stool',
                    tableColumn: '27',
                    fieldset: 'stool',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'gastrointestinal',
                    dataParent: 'gastrointestinal.table',
                    page: 'Assessments: Gastrointestinal',
                    containerType: 'fieldset',
                    containerKey: 'stool',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'stoolColour',
                              fqn: 'gastrointestinal.table.stool.stoolColour',
                              inputType: 'select',
                              label: 'Stool colour',
                              tableColumn: '28',
                              fieldset: 'stool',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Brown'
                                },
                                {
                                  text: 'Green'
                                },
                                {
                                  text: 'Clay coloured'
                                },
                                {
                                  text: 'Yellow'
                                },
                                {
                                  text: 'Black'
                                },
                                {
                                  text: 'Bright red'
                                },
                                {
                                  text: 'Dark red'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'normal',
                              fqn: 'gastrointestinal.table.stool.normal',
                              inputType: 'checkbox',
                              label: 'Normal',
                              tableColumn: '33',
                              fieldset: 'stool',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'stoolDescription',
                              fqn: 'gastrointestinal.table.stool.stoolDescription',
                              inputType: 'select',
                              label: 'Description',
                              tableColumn: '29',
                              fieldset: 'stool',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              options: [
                                {
                                  text: 'Runny'
                                },
                                {
                                  text: 'Hard pellets'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'constipation',
                              fqn: 'gastrointestinal.table.stool.constipation',
                              inputType: 'checkbox',
                              label: 'Constipation',
                              tableColumn: '34',
                              fieldset: 'stool',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'stoolAmount',
                              fqn: 'gastrointestinal.table.stool.stoolAmount',
                              inputType: 'text',
                              label: 'Amount',
                              tableColumn: '30',
                              fieldset: 'stool',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'diarrhea',
                              fqn: 'gastrointestinal.table.stool.diarrhea',
                              inputType: 'checkbox',
                              label: 'Diarrhea',
                              tableColumn: '35',
                              fieldset: 'stool',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'stoolSource',
                              fqn: 'gastrointestinal.table.stool.stoolSource',
                              inputType: 'select',
                              label: 'Source',
                              tableColumn: '31',
                              fieldset: 'stool',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
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
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'melena',
                              fqn: 'gastrointestinal.table.stool.melena',
                              inputType: 'checkbox',
                              label: 'Melena',
                              tableColumn: '36',
                              fieldset: 'stool',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'incontinent',
                              fqn: 'gastrointestinal.table.stool.incontinent',
                              inputType: 'checkbox',
                              label: 'Incontinent',
                              tableColumn: '37',
                              fieldset: 'stool',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'lastBm',
                              fqn: 'gastrointestinal.table.stool.lastBm',
                              inputType: 'text',
                              label: 'Last BM',
                              tableColumn: '38',
                              fieldset: 'stool',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'gastrointestinal',
                              dataParent: 'gastrointestinal.table.stool',
                              page: 'Assessments: Gastrointestinal',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 2
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    genitourinary: {
      pageTitle: 'Assessments: Genitourinary',
      pageDataKey: 'genitourinary',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new genitourinary assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'genitourinary.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'genitourinary.table.comments',
              inputType: 'textarea',
              label: 'Comments',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'genitourinary.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'genitourinary.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'genitourinary.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'none',
              fqn: 'genitourinary.table.urinaryGroup1.none',
              inputType: 'checkbox',
              label: 'None',
              fieldset: 'urinaryGroup1',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'increasedFrequency',
              fqn: 'genitourinary.table.urinaryGroup1.increasedFrequency',
              inputType: 'checkbox',
              label: 'Increased frequency',
              fieldset: 'urinaryGroup1',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'dysuria',
              fqn: 'genitourinary.table.urinaryGroup1.dysuria',
              inputType: 'checkbox',
              label: 'Dysuria',
              fieldset: 'urinaryGroup1',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'hernaturia',
              fqn: 'genitourinary.table.urinaryGroup1.hernaturia',
              inputType: 'checkbox',
              label: 'Hermaturia',
              fieldset: 'urinaryGroup1',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'oliguria',
              fqn: 'genitourinary.table.urinaryGroup1.oliguria',
              inputType: 'checkbox',
              label: 'Oliguria',
              fieldset: 'urinaryGroup1',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'incontinence',
              fqn: 'genitourinary.table.urinaryGroup1.incontinence',
              inputType: 'checkbox',
              label: 'Incontinence',
              fieldset: 'urinaryGroup1',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'retention',
              fqn: 'genitourinary.table.urinaryGroup1.retention',
              inputType: 'checkbox',
              label: 'Retention',
              fieldset: 'urinaryGroup1',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'distention',
              fqn: 'genitourinary.table.urinaryGroup1.distention',
              inputType: 'checkbox',
              label: 'Distention',
              fieldset: 'urinaryGroup1',
              fsetRow: '8',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup1',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'urinaryGroup1',
              fqn: 'genitourinary.table.urinaryGroup1',
              inputType: 'fieldset',
              label: 'Urinary Symptoms',
              fieldset: 'urinaryGroup1',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'urinaryGroup1',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'lastVoidedDay',
              fqn: 'genitourinary.table.urinaryGroup2.lastVoidedDay',
              inputType: 'date',
              label: 'Last voided day',
              fieldset: 'urinaryGroup2',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup2',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'lastVoidedTime',
              fqn: 'genitourinary.table.urinaryGroup2.lastVoidedTime',
              inputType: 'time',
              label: 'Last voided time',
              fieldset: 'urinaryGroup2',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup2',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'colour',
              fqn: 'genitourinary.table.urinaryGroup2.colour',
              inputType: 'select',
              label: 'Urine colour',
              fieldset: 'urinaryGroup2',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup2',
              page: 'Assessments: Genitourinary',
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
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'consistency',
              fqn: 'genitourinary.table.urinaryGroup2.consistency',
              inputType: 'select',
              label: 'Urine consistency',
              fieldset: 'urinaryGroup2',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup2',
              page: 'Assessments: Genitourinary',
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
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'diaper',
              fqn: 'genitourinary.table.urinaryGroup2.diaper',
              inputType: 'select',
              label: 'Diaper',
              fieldset: 'urinaryGroup2',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.urinaryGroup2',
              page: 'Assessments: Genitourinary',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'urinaryGroup2',
              fqn: 'genitourinary.table.urinaryGroup2',
              inputType: 'fieldset',
              fieldset: 'urinaryGroup2',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'urinaryGroup2',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'genitourinary.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'foleyType',
              fqn: 'genitourinary.table.foleyGroup.foleyType',
              inputType: 'text',
              label: 'Type',
              fieldset: 'foleyGroup',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.foleyGroup',
              page: 'Assessments: Genitourinary',
              helperText: 'eg. indwelling catheter',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'foleySize',
              fqn: 'genitourinary.table.foleyGroup.foleySize',
              inputType: 'text',
              label: 'Size',
              fieldset: 'foleyGroup',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.foleyGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'lastChange',
              fqn: 'genitourinary.table.foleyGroup.lastChange',
              inputType: 'day',
              label: 'Last catheter change',
              fieldset: 'foleyGroup',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.foleyGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table'
            },
            {
              elementKey: 'foleyGroup',
              fqn: 'genitourinary.table.foleyGroup',
              inputType: 'fieldset',
              label: 'Foley',
              fieldset: 'foleyGroup',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'foleyGroup',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'pelvicPain',
              fqn: 'genitourinary.table.pelvicGroup.pelvicPain',
              inputType: 'select',
              label: 'Pelvic pain',
              fieldset: 'pelvicGroup',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pelvicGroup',
              page: 'Assessments: Genitourinary',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'location',
              fqn: 'genitourinary.table.pelvicGroup.location',
              inputType: 'text',
              label: 'Location',
              fieldset: 'pelvicGroup',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pelvicGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              inputType: 'form-label',
              label: 'If answered please complete the pain assessment',
              fieldset: 'pelvicGroup',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pelvicGroup',
              page: 'Assessments: Genitourinary',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pelvicPainSource',
              fqn: 'genitourinary.table.pelvicGroup.pelvicPainSource',
              inputType: 'select',
              label: 'Pelvic pain source',
              fieldset: 'pelvicGroup',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pelvicGroup',
              page: 'Assessments: Genitourinary',
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
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pelvicGroup',
              fqn: 'genitourinary.table.pelvicGroup',
              inputType: 'fieldset',
              label: 'Pelvic',
              fieldset: 'pelvicGroup',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'pelvicGroup',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'discharge',
              fqn: 'genitourinary.table.vaginal.discharge',
              inputType: 'checkbox',
              label: 'Discharge',
              fieldset: 'vaginal',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.vaginal',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'bleeing',
              fqn: 'genitourinary.table.vaginal.bleeing',
              inputType: 'checkbox',
              label: 'Bleeing',
              fieldset: 'vaginal',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.vaginal',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'description',
              fqn: 'genitourinary.table.vaginal.description',
              inputType: 'text',
              label: 'Description',
              fieldset: 'vaginal',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.vaginal',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'lastMenstrualPeriodDate',
              fqn: 'genitourinary.table.vaginal.lastMenstrualPeriodDate',
              inputType: 'date',
              label: 'Last menstrual period date',
              fieldset: 'vaginal',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.vaginal',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'vaginal',
              fqn: 'genitourinary.table.vaginal',
              inputType: 'fieldset',
              label: 'Vaginal',
              fieldset: 'vaginal',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'vaginal',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'pregnant',
              fqn: 'genitourinary.table.pregnantGroup.pregnant',
              inputType: 'select',
              label: 'Pregnant',
              fieldset: 'pregnantGroup',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pregnantGroup',
              page: 'Assessments: Genitourinary',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'gravida',
              fqn: 'genitourinary.table.pregnantGroup.gravida',
              inputType: 'text',
              label: 'Gravida (number of pregnancies)',
              fieldset: 'pregnantGroup',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pregnantGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'para',
              fqn: 'genitourinary.table.pregnantGroup.para',
              inputType: 'text',
              label: 'Para (number of children)',
              fieldset: 'pregnantGroup',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pregnantGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'livingChildren',
              fqn: 'genitourinary.table.pregnantGroup.livingChildren',
              inputType: 'text',
              label: 'Living children',
              fieldset: 'pregnantGroup',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.pregnantGroup',
              page: 'Assessments: Genitourinary',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'pregnantGroup',
              fqn: 'genitourinary.table.pregnantGroup',
              inputType: 'fieldset',
              label: 'Pregnancy',
              fieldset: 'pregnantGroup',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table',
              page: 'Assessments: Genitourinary',
              containerType: 'fieldset',
              containerKey: 'pregnantGroup',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'foley',
              fqn: 'genitourinary.table.foleyGroup.foley',
              inputType: 'select',
              label: 'Foley',
              fieldset: 'foleyGroup',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'genitourinary',
              dataParent: 'genitourinary.table.foleyGroup',
              page: 'Assessments: Genitourinary',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'genitourinary.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'genitourinary.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'genitourinary.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'genitourinary.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'genitourinary.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'urinaryGroup1',
                    fqn: 'genitourinary.table.urinaryGroup1',
                    inputType: 'fieldset',
                    label: 'Urinary Symptoms',
                    fieldset: 'urinaryGroup1',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'urinaryGroup1',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'none',
                              fqn: 'genitourinary.table.urinaryGroup1.none',
                              inputType: 'checkbox',
                              label: 'None',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'increasedFrequency',
                              fqn: 'genitourinary.table.urinaryGroup1.increasedFrequency',
                              inputType: 'checkbox',
                              label: 'Increased frequency',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'dysuria',
                              fqn: 'genitourinary.table.urinaryGroup1.dysuria',
                              inputType: 'checkbox',
                              label: 'Dysuria',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'hernaturia',
                              fqn: 'genitourinary.table.urinaryGroup1.hernaturia',
                              inputType: 'checkbox',
                              label: 'Hermaturia',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'oliguria',
                              fqn: 'genitourinary.table.urinaryGroup1.oliguria',
                              inputType: 'checkbox',
                              label: 'Oliguria',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'incontinence',
                              fqn: 'genitourinary.table.urinaryGroup1.incontinence',
                              inputType: 'checkbox',
                              label: 'Incontinence',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'retention',
                              fqn: 'genitourinary.table.urinaryGroup1.retention',
                              inputType: 'checkbox',
                              label: 'Retention',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '8',
                          elements: [
                            {
                              elementKey: 'distention',
                              fqn: 'genitourinary.table.urinaryGroup1.distention',
                              inputType: 'checkbox',
                              label: 'Distention',
                              fieldset: 'urinaryGroup1',
                              fsetRow: '8',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup1',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'urinaryGroup2',
                    fqn: 'genitourinary.table.urinaryGroup2',
                    inputType: 'fieldset',
                    fieldset: 'urinaryGroup2',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'urinaryGroup2',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'lastVoidedDay',
                              fqn: 'genitourinary.table.urinaryGroup2.lastVoidedDay',
                              inputType: 'date',
                              label: 'Last voided day',
                              fieldset: 'urinaryGroup2',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup2',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'lastVoidedTime',
                              fqn: 'genitourinary.table.urinaryGroup2.lastVoidedTime',
                              inputType: 'time',
                              label: 'Last voided time',
                              fieldset: 'urinaryGroup2',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup2',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'colour',
                              fqn: 'genitourinary.table.urinaryGroup2.colour',
                              inputType: 'select',
                              label: 'Urine colour',
                              fieldset: 'urinaryGroup2',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup2',
                              page: 'Assessments: Genitourinary',
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
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'consistency',
                              fqn: 'genitourinary.table.urinaryGroup2.consistency',
                              inputType: 'select',
                              label: 'Urine consistency',
                              fieldset: 'urinaryGroup2',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup2',
                              page: 'Assessments: Genitourinary',
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
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'diaper',
                              fqn: 'genitourinary.table.urinaryGroup2.diaper',
                              inputType: 'select',
                              label: 'Diaper',
                              fieldset: 'urinaryGroup2',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.urinaryGroup2',
                              page: 'Assessments: Genitourinary',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'foleyGroup',
                    fqn: 'genitourinary.table.foleyGroup',
                    inputType: 'fieldset',
                    label: 'Foley',
                    fieldset: 'foleyGroup',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'foleyGroup',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'foley',
                              fqn: 'genitourinary.table.foleyGroup.foley',
                              inputType: 'select',
                              label: 'Foley',
                              fieldset: 'foleyGroup',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.foleyGroup',
                              page: 'Assessments: Genitourinary',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'foleyType',
                              fqn: 'genitourinary.table.foleyGroup.foleyType',
                              inputType: 'text',
                              label: 'Type',
                              fieldset: 'foleyGroup',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.foleyGroup',
                              page: 'Assessments: Genitourinary',
                              helperText: 'eg. indwelling catheter',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'foleySize',
                              fqn: 'genitourinary.table.foleyGroup.foleySize',
                              inputType: 'text',
                              label: 'Size',
                              fieldset: 'foleyGroup',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.foleyGroup',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'pelvicGroup',
                    fqn: 'genitourinary.table.pelvicGroup',
                    inputType: 'fieldset',
                    label: 'Pelvic',
                    fieldset: 'pelvicGroup',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'pelvicGroup',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'pelvicPain',
                              fqn: 'genitourinary.table.pelvicGroup.pelvicPain',
                              inputType: 'select',
                              label: 'Pelvic pain',
                              fieldset: 'pelvicGroup',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pelvicGroup',
                              page: 'Assessments: Genitourinary',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'location',
                              fqn: 'genitourinary.table.pelvicGroup.location',
                              inputType: 'text',
                              label: 'Location',
                              fieldset: 'pelvicGroup',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pelvicGroup',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              inputType: 'form-label',
                              label: 'If answered please complete the pain assessment',
                              fieldset: 'pelvicGroup',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pelvicGroup',
                              page: 'Assessments: Genitourinary',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'pelvicPainSource',
                              fqn: 'genitourinary.table.pelvicGroup.pelvicPainSource',
                              inputType: 'select',
                              label: 'Pelvic pain source',
                              fieldset: 'pelvicGroup',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pelvicGroup',
                              page: 'Assessments: Genitourinary',
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
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'vaginal',
                    fqn: 'genitourinary.table.vaginal',
                    inputType: 'fieldset',
                    label: 'Vaginal',
                    fieldset: 'vaginal',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'vaginal',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'discharge',
                              fqn: 'genitourinary.table.vaginal.discharge',
                              inputType: 'checkbox',
                              label: 'Discharge',
                              fieldset: 'vaginal',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.vaginal',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'bleeing',
                              fqn: 'genitourinary.table.vaginal.bleeing',
                              inputType: 'checkbox',
                              label: 'Bleeing',
                              fieldset: 'vaginal',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.vaginal',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'description',
                              fqn: 'genitourinary.table.vaginal.description',
                              inputType: 'text',
                              label: 'Description',
                              fieldset: 'vaginal',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.vaginal',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'lastMenstrualPeriodDate',
                              fqn: 'genitourinary.table.vaginal.lastMenstrualPeriodDate',
                              inputType: 'date',
                              label: 'Last menstrual period date',
                              fieldset: 'vaginal',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.vaginal',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'pregnantGroup',
                    fqn: 'genitourinary.table.pregnantGroup',
                    inputType: 'fieldset',
                    label: 'Pregnancy',
                    fieldset: 'pregnantGroup',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    containerType: 'fieldset',
                    containerKey: 'pregnantGroup',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'pregnant',
                              fqn: 'genitourinary.table.pregnantGroup.pregnant',
                              inputType: 'select',
                              label: 'Pregnant',
                              fieldset: 'pregnantGroup',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pregnantGroup',
                              page: 'Assessments: Genitourinary',
                              options: [
                                {
                                  text: 'Yes'
                                },
                                {
                                  text: 'No'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'gravida',
                              fqn: 'genitourinary.table.pregnantGroup.gravida',
                              inputType: 'text',
                              label: 'Gravida (number of pregnancies)',
                              fieldset: 'pregnantGroup',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pregnantGroup',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'para',
                              fqn: 'genitourinary.table.pregnantGroup.para',
                              inputType: 'text',
                              label: 'Para (number of children)',
                              fieldset: 'pregnantGroup',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pregnantGroup',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'livingChildren',
                              fqn: 'genitourinary.table.pregnantGroup.livingChildren',
                              inputType: 'text',
                              label: 'Living children',
                              fieldset: 'pregnantGroup',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'genitourinary',
                              dataParent: 'genitourinary.table.pregnantGroup',
                              page: 'Assessments: Genitourinary',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'comments',
                    fqn: 'genitourinary.table.comments',
                    inputType: 'textarea',
                    label: 'Comments',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'genitourinary',
                    dataParent: 'genitourinary.table',
                    page: 'Assessments: Genitourinary',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    musculoskeletal: {
      pageTitle: 'Assessments: Musculoskeletal',
      pageDataKey: 'musculoskeletal',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new musculoskeletal assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'musculoskeletal.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'musculoskeletal.table.comments',
              inputType: 'textarea',
              label: 'Comments',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'musculoskeletal.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'musculoskeletal.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              tableKey: 'table'
            },
            {
              elementKey: 'swelling',
              fqn: 'musculoskeletal.table.swelling',
              inputType: 'select',
              label: 'Swelling',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              options: [
                {
                  text: 'Present'
                },
                {
                  text: 'Absent'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'pain',
              fqn: 'musculoskeletal.table.pain',
              inputType: 'select',
              label: 'Pain',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              options: [
                {
                  text: 'Present'
                },
                {
                  text: 'Absent'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'deformity',
              fqn: 'musculoskeletal.table.deformity',
              inputType: 'select',
              label: 'Deformity',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              options: [
                {
                  text: 'Present'
                },
                {
                  text: 'Absent'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'musculoskeletal.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              tableKey: 'table'
            },
            {
              elementKey: 'sensation',
              fqn: 'musculoskeletal.table.sensation',
              inputType: 'select',
              label: 'Sensation',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            },
            {
              elementKey: 'pulse',
              fqn: 'musculoskeletal.table.pulse',
              inputType: 'select',
              label: 'Pulse',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            },
            {
              elementKey: 'colour',
              fqn: 'musculoskeletal.table.colour',
              inputType: 'select',
              label: 'Colour',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            },
            {
              elementKey: 'temp',
              fqn: 'musculoskeletal.table.temp',
              inputType: 'select',
              label: 'Temp',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            },
            {
              elementKey: 'useOfAmbulatoryAid',
              fqn: 'musculoskeletal.table.useOfAmbulatoryAid',
              inputType: 'select',
              label: 'Use of ambulatory aid',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
              options: [
                {
                  text: 'Yes'
                },
                {
                  text: 'No'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'type',
              fqn: 'musculoskeletal.table.type',
              inputType: 'select',
              label: 'Type',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            },
            {
              elementKey: 'movement',
              fqn: 'musculoskeletal.table.movement',
              inputType: 'select',
              label: 'Movement',
              pageDataKey: 'musculoskeletal',
              dataParent: 'musculoskeletal.table',
              page: 'Assessments: Musculoskeletal',
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
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'musculoskeletal.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'musculoskeletal',
                    dataParent: 'musculoskeletal.table',
                    page: 'Assessments: Musculoskeletal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'musculoskeletal.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'musculoskeletal',
                    dataParent: 'musculoskeletal.table',
                    page: 'Assessments: Musculoskeletal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'musculoskeletal.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'musculoskeletal',
                    dataParent: 'musculoskeletal.table',
                    page: 'Assessments: Musculoskeletal',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'musculoskeletal.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'musculoskeletal',
                    dataParent: 'musculoskeletal.table',
                    page: 'Assessments: Musculoskeletal',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    pain: {
      pageTitle: 'Assessments: Pain',
      pageDataKey: 'pain',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new pain assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'pain.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              tableKey: 'table'
            },
            {
              elementKey: 'secondarySite',
              fqn: 'pain.table.secondarySite',
              inputType: 'fieldset',
              label: 'Secondary pain site',
              fieldset: 'secondarySite',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              containerType: 'fieldset',
              containerKey: 'secondarySite',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'unit',
              fqn: 'pain.table.unit',
              inputType: 'text',
              label: 'Unit',
              formCss: 'user_unit',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'pain.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'user_day',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'pain.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'user_time',
              formColumn: '5',
              formRow: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              tableKey: 'table'
            },
            {
              elementKey: 'location',
              fqn: 'pain.table.primarySite.location',
              inputType: 'text',
              label: 'Location',
              fieldset: 'primarySite',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'painScale',
              fqn: 'pain.table.primarySite.painScale',
              inputType: 'text',
              label: 'Pain intensity (0-10)',
              fieldset: 'primarySite',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'respiratoryRate',
              fqn: 'pain.table.primarySite.respiratoryRate',
              inputType: 'text',
              label: 'Respiratory rate (br/min)',
              fieldset: 'primarySite',
              fsetRow: '1',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'onset',
              fqn: 'pain.table.primarySite.onset',
              inputType: 'text',
              label: 'Onset',
              fieldset: 'primarySite',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'type',
              fqn: 'pain.table.primarySite.type',
              inputType: 'text',
              label: 'Type',
              fieldset: 'primarySite',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'alleviationAssociatedSymptoms',
              fqn: 'pain.table.primarySite.alleviationAssociatedSymptoms',
              inputType: 'text',
              label: 'Alleviation & associated symptoms',
              fieldset: 'primarySite',
              fsetRow: '2',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'radiation',
              fqn: 'pain.table.primarySite.radiation',
              inputType: 'text',
              label: 'Radiation',
              fieldset: 'primarySite',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'precipitatingEvents',
              fqn: 'pain.table.primarySite.precipitatingEvents',
              inputType: 'text',
              label: 'Precipitating events',
              fieldset: 'primarySite',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '2'
            },
            {
              elementKey: 'profession',
              fqn: 'pain.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              tableKey: 'table'
            },
            {
              elementKey: 'comments',
              fqn: 'pain.table.primarySite.comments',
              inputType: 'textarea',
              label: 'Comments',
              fieldset: 'primarySite',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'primarySite',
              fqn: 'pain.table.primarySite',
              inputType: 'fieldset',
              label: 'Primary pain site',
              fieldset: 'primarySite',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table',
              page: 'Assessments: Pain',
              containerType: 'fieldset',
              containerKey: 'primarySite',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'location',
              fqn: 'pain.table.secondarySite.location',
              inputType: 'text',
              label: 'Location',
              fieldset: 'secondarySite',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'painScale',
              fqn: 'pain.table.secondarySite.painScale',
              inputType: 'text',
              label: 'Pain scale (0-10)',
              fieldset: 'secondarySite',
              fsetRow: '1',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'respiratoryRate',
              fqn: 'pain.table.secondarySite.respiratoryRate',
              inputType: 'text',
              label: 'Respiratory rate (br/min)',
              fieldset: 'secondarySite',
              fsetRow: '1',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'onset',
              fqn: 'pain.table.secondarySite.onset',
              inputType: 'text',
              label: 'Onset',
              fieldset: 'secondarySite',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'type',
              fqn: 'pain.table.secondarySite.type',
              inputType: 'text',
              label: 'Type',
              fieldset: 'secondarySite',
              fsetRow: '2',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'alleviationAssociatedSymptoms',
              fqn: 'pain.table.secondarySite.alleviationAssociatedSymptoms',
              inputType: 'text',
              label: 'Alleviation & associated symptoms',
              fieldset: 'secondarySite',
              fsetRow: '2',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'radiation',
              fqn: 'pain.table.secondarySite.radiation',
              inputType: 'text',
              label: 'Radiation',
              fieldset: 'secondarySite',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              elementKey: 'precipitatingEvents',
              fqn: 'pain.table.secondarySite.precipitatingEvents',
              inputType: 'text',
              label: 'Precipitating events',
              fieldset: 'secondarySite',
              fsetRow: '3',
              fsetCol: '2',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              fqn: 'pain.table.secondarySite.',
              inputType: 'form-label',
              fieldset: 'secondarySite',
              fsetRow: '3',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain',
              tableCss: 'hide-table-element',
              tableKey: 'table',
              formColumn: '3'
            },
            {
              elementKey: 'comments',
              fqn: 'pain.table.secondarySite.comments',
              inputType: 'textarea',
              label: 'Comments',
              fieldset: 'secondarySite',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'pain',
              dataParent: 'pain.table.secondarySite',
              page: 'Assessments: Pain'
            },
            {
              fqn: 'pain.table.primarySite.',
              inputType: 'form-label',
              fieldset: 'primarySite',
              fsetRow: '3',
              fsetCol: '3',
              pageDataKey: 'pain',
              dataParent: 'pain.table.primarySite',
              page: 'Assessments: Pain',
              tableCss: 'hide-table-element'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'pain.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'pain.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'unit',
                    fqn: 'pain.table.unit',
                    inputType: 'text',
                    label: 'Unit',
                    formCss: 'user_unit',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'pain.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'user_day',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'pain.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'user_time',
                    formColumn: '5',
                    formRow: '1',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'primarySite',
                    fqn: 'pain.table.primarySite',
                    inputType: 'fieldset',
                    label: 'Primary pain site',
                    fieldset: 'primarySite',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    containerType: 'fieldset',
                    containerKey: 'primarySite',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'location',
                              fqn: 'pain.table.primarySite.location',
                              inputType: 'text',
                              label: 'Location',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'painScale',
                              fqn: 'pain.table.primarySite.painScale',
                              inputType: 'text',
                              label: 'Pain intensity (0-10)',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'respiratoryRate',
                              fqn: 'pain.table.primarySite.respiratoryRate',
                              inputType: 'text',
                              label: 'Respiratory rate (br/min)',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'onset',
                              fqn: 'pain.table.primarySite.onset',
                              inputType: 'text',
                              label: 'Onset',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'type',
                              fqn: 'pain.table.primarySite.type',
                              inputType: 'text',
                              label: 'Type',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'alleviationAssociatedSymptoms',
                              fqn: 'pain.table.primarySite.alleviationAssociatedSymptoms',
                              inputType: 'text',
                              label: 'Alleviation & associated symptoms',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'radiation',
                              fqn: 'pain.table.primarySite.radiation',
                              inputType: 'text',
                              label: 'Radiation',
                              fieldset: 'primarySite',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'precipitatingEvents',
                              fqn: 'pain.table.primarySite.precipitatingEvents',
                              inputType: 'text',
                              label: 'Precipitating events',
                              fieldset: 'primarySite',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              fqn: 'pain.table.secondarySite.',
                              inputType: 'form-label',
                              fieldset: 'secondarySite',
                              fsetRow: '3',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.secondarySite',
                              page: 'Assessments: Pain',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'comments',
                              fqn: 'pain.table.primarySite.comments',
                              inputType: 'textarea',
                              label: 'Comments',
                              fieldset: 'primarySite',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'secondarySite',
                    fqn: 'pain.table.secondarySite',
                    inputType: 'fieldset',
                    label: 'Secondary pain site',
                    fieldset: 'secondarySite',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'pain',
                    dataParent: 'pain.table',
                    page: 'Assessments: Pain',
                    containerType: 'fieldset',
                    containerKey: 'secondarySite',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'location',
                              fqn: 'pain.table.primarySite.location',
                              inputType: 'text',
                              label: 'Location',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'painScale',
                              fqn: 'pain.table.primarySite.painScale',
                              inputType: 'text',
                              label: 'Pain intensity (0-10)',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'respiratoryRate',
                              fqn: 'pain.table.primarySite.respiratoryRate',
                              inputType: 'text',
                              label: 'Respiratory rate (br/min)',
                              fieldset: 'primarySite',
                              fsetRow: '1',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'onset',
                              fqn: 'pain.table.primarySite.onset',
                              inputType: 'text',
                              label: 'Onset',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'type',
                              fqn: 'pain.table.primarySite.type',
                              inputType: 'text',
                              label: 'Type',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              elementKey: 'alleviationAssociatedSymptoms',
                              fqn: 'pain.table.primarySite.alleviationAssociatedSymptoms',
                              inputType: 'text',
                              label: 'Alleviation & associated symptoms',
                              fieldset: 'primarySite',
                              fsetRow: '2',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'radiation',
                              fqn: 'pain.table.primarySite.radiation',
                              inputType: 'text',
                              label: 'Radiation',
                              fieldset: 'primarySite',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            },
                            {
                              elementKey: 'precipitatingEvents',
                              fqn: 'pain.table.primarySite.precipitatingEvents',
                              inputType: 'text',
                              label: 'Precipitating events',
                              fieldset: 'primarySite',
                              fsetRow: '3',
                              fsetCol: '2',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '2'
                            },
                            {
                              fqn: 'pain.table.secondarySite.',
                              inputType: 'form-label',
                              fieldset: 'secondarySite',
                              fsetRow: '3',
                              fsetCol: '3',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.secondarySite',
                              page: 'Assessments: Pain',
                              tableCss: 'hide-table-element',
                              tableKey: 'table',
                              formColumn: '3'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'comments',
                              fqn: 'pain.table.primarySite.comments',
                              inputType: 'textarea',
                              label: 'Comments',
                              fieldset: 'primarySite',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'pain',
                              dataParent: 'pain.table.primarySite',
                              page: 'Assessments: Pain',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 3
                    }
                  }
                ]
              }
            ],
            columnsCount: 5
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    biopsychosocial: {
      pageTitle: 'Assessments: Biopsychosocial',
      pageDataKey: 'biopsychosocial',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new biopsychosocial assessment',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'biopsychosocial.table.name',
              inputType: 'text',
              label: 'Name',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table'
            },
            {
              elementKey: 'generalComments',
              fqn: 'biopsychosocial.table.generalComments',
              inputType: 'textarea',
              label: 'General comments',
              formColumn: '1',
              formRow: '7',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'biopsychosocial.table.day',
              inputType: 'day',
              label: 'Day',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'biopsychosocial.table.time',
              inputType: 'time',
              label: 'Time',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table'
            },
            {
              inputType: 'form-label',
              label:
                'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
              formCss: 'is-one-third',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'domesticViolence',
              fqn: 'biopsychosocial.table.domesticViolence',
              inputType: 'select',
              formCss: 'is-one-third',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: "didn't ask"
                },
                {
                  text: 'yes'
                },
                {
                  text: 'no'
                }
              ],
              tableKey: 'table'
            },
            {
              inputType: 'form-label',
              label: 'Would you like to speak to a social worker?',
              formCss: 'is-one-third',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableCss: 'hide-table-element'
            },
            {
              elementKey: 'requestContact',
              fqn: 'biopsychosocial.table.requestContact',
              inputType: 'select',
              formCss: 'is-one-third',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: "didn't ask"
                },
                {
                  text: 'yes'
                },
                {
                  text: 'no'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'calm',
              fqn: 'biopsychosocial.table.behaviour.calm',
              inputType: 'checkbox',
              label: 'Calm',
              fieldset: 'behaviour',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'cooperative',
              fqn: 'biopsychosocial.table.behaviour.cooperative',
              inputType: 'checkbox',
              label: 'Cooperative',
              fieldset: 'behaviour',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'agitated',
              fqn: 'biopsychosocial.table.behaviour.agitated',
              inputType: 'checkbox',
              label: 'Agitated',
              fieldset: 'behaviour',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'flat',
              fqn: 'biopsychosocial.table.behaviour.flat',
              inputType: 'checkbox',
              label: 'Flat affect',
              fieldset: 'behaviour',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'threatening',
              fqn: 'biopsychosocial.table.behaviour.threatening',
              inputType: 'checkbox',
              label: 'Threatening',
              fieldset: 'behaviour',
              fsetRow: '5',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'agressive',
              fqn: 'biopsychosocial.table.behaviour.agressive',
              inputType: 'checkbox',
              label: 'Physically agressive',
              fieldset: 'behaviour',
              fsetRow: '6',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'uncommunicative',
              fqn: 'biopsychosocial.table.behaviour.uncommunicative',
              inputType: 'checkbox',
              label: 'Uncommunicative',
              fieldset: 'behaviour',
              fsetRow: '7',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.behaviour',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'behaviour',
              fqn: 'biopsychosocial.table.behaviour',
              inputType: 'fieldset',
              label: 'Behaviour',
              fieldset: 'behaviour',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'behaviour',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'none',
              fqn: 'biopsychosocial.table.hallucinations.none',
              inputType: 'checkbox',
              label: 'None',
              fieldset: 'hallucinations',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hallucinations',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'visual',
              fqn: 'biopsychosocial.table.hallucinations.visual',
              inputType: 'checkbox',
              label: 'Visual',
              fieldset: 'hallucinations',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hallucinations',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'auditory',
              fqn: 'biopsychosocial.table.hallucinations.auditory',
              inputType: 'checkbox',
              label: 'Auditory',
              fieldset: 'hallucinations',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hallucinations',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'olafactory',
              fqn: 'biopsychosocial.table.hallucinations.olafactory',
              inputType: 'checkbox',
              label: 'Olafactory',
              fieldset: 'hallucinations',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hallucinations',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'profession',
              fqn: 'biopsychosocial.table.profession',
              inputType: 'text',
              label: 'Profession',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table'
            },
            {
              elementKey: 'suicidal',
              fqn: 'biopsychosocial.table.state.suicidal',
              inputType: 'select',
              label: 'Suicidal',
              fieldset: 'state',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.state',
              page: 'Assessments: Biopsychosocial',
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
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'homicidal',
              fqn: 'biopsychosocial.table.state.homicidal',
              inputType: 'select',
              label: 'Homicidal',
              fieldset: 'state',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.state',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: 'None'
                },
                {
                  text: 'Ideation'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'speech',
              fqn: 'biopsychosocial.table.state.speech',
              inputType: 'select',
              label: 'Speech',
              fieldset: 'state',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.state',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: 'Clear and coherent'
                },
                {
                  text: 'Other'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'state',
              fqn: 'biopsychosocial.table.state',
              inputType: 'fieldset',
              fieldset: 'state',
              formColumn: '3',
              formRow: '4',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'state',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'hygieneGrooming',
              fqn: 'biopsychosocial.table.hygiene.hygieneGrooming',
              inputType: 'select',
              fieldset: 'hygiene',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hygiene',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: 'Good'
                },
                {
                  text: 'Requires attention'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'hygieneComments',
              fqn: 'biopsychosocial.table.hygiene.hygieneComments',
              inputType: 'text',
              label: 'Comments',
              fieldset: 'hygiene',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.hygiene',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'hygiene',
              fqn: 'biopsychosocial.table.hygiene',
              inputType: 'fieldset',
              label: 'Hygiene and grooming',
              fieldset: 'hygiene',
              formCss: 'is-one-third',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'hygiene',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'supportPerson',
              fqn: 'biopsychosocial.table.support.supportPerson',
              inputType: 'text',
              label: 'Support person',
              fieldset: 'support',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.support',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'supportComments',
              fqn: 'biopsychosocial.table.support.supportComments',
              inputType: 'textarea',
              label: 'Comments',
              fieldset: 'support',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.support',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'support',
              fqn: 'biopsychosocial.table.support',
              inputType: 'fieldset',
              label: 'Support',
              fieldset: 'support',
              formColumn: '1',
              formRow: '6',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'support',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'securityPolicePresent',
              fqn: 'biopsychosocial.table.security.securityPolicePresent',
              inputType: 'text',
              label: 'Security/police present',
              fieldset: 'security',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.security',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'securityComments',
              fqn: 'biopsychosocial.table.security.securityComments',
              inputType: 'textarea',
              label: 'Comments',
              fieldset: 'security',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.security',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'security',
              fqn: 'biopsychosocial.table.security',
              inputType: 'fieldset',
              fieldset: 'security',
              formColumn: '2',
              formRow: '6',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'security',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'patientRestrained',
              fqn: 'biopsychosocial.table.restraint.patientRestrained',
              inputType: 'select',
              label: 'Patient restrained',
              fieldset: 'restraint',
              fsetRow: '1',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.restraint',
              page: 'Assessments: Biopsychosocial',
              options: [
                {
                  text: 'yes'
                },
                {
                  text: 'no'
                }
              ],
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'restraintDay',
              fqn: 'biopsychosocial.table.restraint.restraintDay',
              inputType: 'day',
              label: 'Day',
              fieldset: 'restraint',
              fsetRow: '2',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.restraint',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'restraintTime',
              fqn: 'biopsychosocial.table.restraint.restraintTime',
              inputType: 'time',
              label: 'Time',
              fieldset: 'restraint',
              fsetRow: '3',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.restraint',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'restraintComments',
              fqn: 'biopsychosocial.table.restraint.restraintComments',
              inputType: 'textarea',
              label: 'Comments',
              fieldset: 'restraint',
              fsetRow: '4',
              fsetCol: '1',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table.restraint',
              page: 'Assessments: Biopsychosocial',
              tableKey: 'table',
              formColumn: '1'
            },
            {
              elementKey: 'restraint',
              fqn: 'biopsychosocial.table.restraint',
              inputType: 'fieldset',
              fieldset: 'restraint',
              formColumn: '3',
              formRow: '6',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'restraint',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'hallucinations',
              fqn: 'biopsychosocial.table.hallucinations',
              inputType: 'fieldset',
              label: 'Hallucinations',
              fieldset: 'hallucinations',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'biopsychosocial',
              dataParent: 'biopsychosocial.table',
              page: 'Assessments: Biopsychosocial',
              containerType: 'fieldset',
              containerKey: 'hallucinations',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'biopsychosocial.table.name',
                    inputType: 'text',
                    label: 'Name',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'biopsychosocial.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'biopsychosocial.table.day',
                    inputType: 'day',
                    label: 'Day',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'biopsychosocial.table.time',
                    inputType: 'time',
                    label: 'Time',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    inputType: 'form-label',
                    label:
                      'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
                    formCss: 'is-one-third',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  },
                  {
                    inputType: 'form-label',
                    label:
                      'From our experience in the hospital, we know that domestic violence can be a problem. Is this a factor in your life?',
                    formCss: 'is-one-third',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'domesticViolence',
                    fqn: 'biopsychosocial.table.domesticViolence',
                    inputType: 'select',
                    formCss: 'is-one-third',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    options: [
                      {
                        text: "didn't ask"
                      },
                      {
                        text: 'yes'
                      },
                      {
                        text: 'no'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'requestContact',
                    fqn: 'biopsychosocial.table.requestContact',
                    inputType: 'select',
                    formCss: 'is-one-third',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    options: [
                      {
                        text: "didn't ask"
                      },
                      {
                        text: 'yes'
                      },
                      {
                        text: 'no'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'behaviour',
                    fqn: 'biopsychosocial.table.behaviour',
                    inputType: 'fieldset',
                    label: 'Behaviour',
                    fieldset: 'behaviour',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'behaviour',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'calm',
                              fqn: 'biopsychosocial.table.behaviour.calm',
                              inputType: 'checkbox',
                              label: 'Calm',
                              fieldset: 'behaviour',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'cooperative',
                              fqn: 'biopsychosocial.table.behaviour.cooperative',
                              inputType: 'checkbox',
                              label: 'Cooperative',
                              fieldset: 'behaviour',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'agitated',
                              fqn: 'biopsychosocial.table.behaviour.agitated',
                              inputType: 'checkbox',
                              label: 'Agitated',
                              fieldset: 'behaviour',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'flat',
                              fqn: 'biopsychosocial.table.behaviour.flat',
                              inputType: 'checkbox',
                              label: 'Flat affect',
                              fieldset: 'behaviour',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '5',
                          elements: [
                            {
                              elementKey: 'threatening',
                              fqn: 'biopsychosocial.table.behaviour.threatening',
                              inputType: 'checkbox',
                              label: 'Threatening',
                              fieldset: 'behaviour',
                              fsetRow: '5',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '6',
                          elements: [
                            {
                              elementKey: 'agressive',
                              fqn: 'biopsychosocial.table.behaviour.agressive',
                              inputType: 'checkbox',
                              label: 'Physically agressive',
                              fieldset: 'behaviour',
                              fsetRow: '6',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '7',
                          elements: [
                            {
                              elementKey: 'uncommunicative',
                              fqn: 'biopsychosocial.table.behaviour.uncommunicative',
                              inputType: 'checkbox',
                              label: 'Uncommunicative',
                              fieldset: 'behaviour',
                              fsetRow: '7',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.behaviour',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'hallucinations',
                    fqn: 'biopsychosocial.table.hallucinations',
                    inputType: 'fieldset',
                    label: 'Hallucinations',
                    fieldset: 'hallucinations',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'hallucinations',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'none',
                              fqn: 'biopsychosocial.table.hallucinations.none',
                              inputType: 'checkbox',
                              label: 'None',
                              fieldset: 'hallucinations',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hallucinations',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'visual',
                              fqn: 'biopsychosocial.table.hallucinations.visual',
                              inputType: 'checkbox',
                              label: 'Visual',
                              fieldset: 'hallucinations',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hallucinations',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'auditory',
                              fqn: 'biopsychosocial.table.hallucinations.auditory',
                              inputType: 'checkbox',
                              label: 'Auditory',
                              fieldset: 'hallucinations',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hallucinations',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'olafactory',
                              fqn: 'biopsychosocial.table.hallucinations.olafactory',
                              inputType: 'checkbox',
                              label: 'Olafactory',
                              fieldset: 'hallucinations',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hallucinations',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'state',
                    fqn: 'biopsychosocial.table.state',
                    inputType: 'fieldset',
                    fieldset: 'state',
                    formColumn: '3',
                    formRow: '4',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'state',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'suicidal',
                              fqn: 'biopsychosocial.table.state.suicidal',
                              inputType: 'select',
                              label: 'Suicidal',
                              fieldset: 'state',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.state',
                              page: 'Assessments: Biopsychosocial',
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
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'homicidal',
                              fqn: 'biopsychosocial.table.state.homicidal',
                              inputType: 'select',
                              label: 'Homicidal',
                              fieldset: 'state',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.state',
                              page: 'Assessments: Biopsychosocial',
                              options: [
                                {
                                  text: 'None'
                                },
                                {
                                  text: 'Ideation'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'speech',
                              fqn: 'biopsychosocial.table.state.speech',
                              inputType: 'select',
                              label: 'Speech',
                              fieldset: 'state',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.state',
                              page: 'Assessments: Biopsychosocial',
                              options: [
                                {
                                  text: 'Clear and coherent'
                                },
                                {
                                  text: 'Other'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'hygiene',
                    fqn: 'biopsychosocial.table.hygiene',
                    inputType: 'fieldset',
                    label: 'Hygiene and grooming',
                    fieldset: 'hygiene',
                    formCss: 'is-one-third',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'hygiene',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'hygieneGrooming',
                              fqn: 'biopsychosocial.table.hygiene.hygieneGrooming',
                              inputType: 'select',
                              fieldset: 'hygiene',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hygiene',
                              page: 'Assessments: Biopsychosocial',
                              options: [
                                {
                                  text: 'Good'
                                },
                                {
                                  text: 'Requires attention'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'hygieneComments',
                              fqn: 'biopsychosocial.table.hygiene.hygieneComments',
                              inputType: 'text',
                              label: 'Comments',
                              fieldset: 'hygiene',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.hygiene',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '6',
                elements: [
                  {
                    elementKey: 'support',
                    fqn: 'biopsychosocial.table.support',
                    inputType: 'fieldset',
                    label: 'Support',
                    fieldset: 'support',
                    formColumn: '1',
                    formRow: '6',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'support',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'supportPerson',
                              fqn: 'biopsychosocial.table.support.supportPerson',
                              inputType: 'text',
                              label: 'Support person',
                              fieldset: 'support',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.support',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'supportComments',
                              fqn: 'biopsychosocial.table.support.supportComments',
                              inputType: 'textarea',
                              label: 'Comments',
                              fieldset: 'support',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.support',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'security',
                    fqn: 'biopsychosocial.table.security',
                    inputType: 'fieldset',
                    fieldset: 'security',
                    formColumn: '2',
                    formRow: '6',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'security',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'securityPolicePresent',
                              fqn: 'biopsychosocial.table.security.securityPolicePresent',
                              inputType: 'text',
                              label: 'Security/police present',
                              fieldset: 'security',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.security',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'securityComments',
                              fqn: 'biopsychosocial.table.security.securityComments',
                              inputType: 'textarea',
                              label: 'Comments',
                              fieldset: 'security',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.security',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: 'restraint',
                    fqn: 'biopsychosocial.table.restraint',
                    inputType: 'fieldset',
                    fieldset: 'restraint',
                    formColumn: '3',
                    formRow: '6',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    containerType: 'fieldset',
                    containerKey: 'restraint',
                    tableCss: 'hide-table-element',
                    tableKey: 'table',
                    formFieldSet: {
                      rows: [
                        {
                          formRow: '1',
                          elements: [
                            {
                              elementKey: 'patientRestrained',
                              fqn: 'biopsychosocial.table.restraint.patientRestrained',
                              inputType: 'select',
                              label: 'Patient restrained',
                              fieldset: 'restraint',
                              fsetRow: '1',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.restraint',
                              page: 'Assessments: Biopsychosocial',
                              options: [
                                {
                                  text: 'yes'
                                },
                                {
                                  text: 'no'
                                }
                              ],
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '2',
                          elements: [
                            {
                              elementKey: 'restraintDay',
                              fqn: 'biopsychosocial.table.restraint.restraintDay',
                              inputType: 'day',
                              label: 'Day',
                              fieldset: 'restraint',
                              fsetRow: '2',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.restraint',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '3',
                          elements: [
                            {
                              elementKey: 'restraintTime',
                              fqn: 'biopsychosocial.table.restraint.restraintTime',
                              inputType: 'time',
                              label: 'Time',
                              fieldset: 'restraint',
                              fsetRow: '3',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.restraint',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        },
                        {
                          formRow: '4',
                          elements: [
                            {
                              elementKey: 'restraintComments',
                              fqn: 'biopsychosocial.table.restraint.restraintComments',
                              inputType: 'textarea',
                              label: 'Comments',
                              fieldset: 'restraint',
                              fsetRow: '4',
                              fsetCol: '1',
                              pageDataKey: 'biopsychosocial',
                              dataParent: 'biopsychosocial.table.restraint',
                              page: 'Assessments: Biopsychosocial',
                              tableKey: 'table',
                              formColumn: '1'
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: '7',
                elements: [
                  {
                    elementKey: 'generalComments',
                    fqn: 'biopsychosocial.table.generalComments',
                    inputType: 'textarea',
                    label: 'General comments',
                    formColumn: '1',
                    formRow: '7',
                    pageDataKey: 'biopsychosocial',
                    dataParent: 'biopsychosocial.table',
                    page: 'Assessments: Biopsychosocial',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    nonmedOrders: {
      pageTitle: 'Orders',
      pageDataKey: 'nonmedOrders',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new order',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'nonmedOrders.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'nonmedOrders.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'nonmedOrders.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'nonmedOrders.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'order',
              fqn: 'nonmedOrders.table.order',
              inputType: 'text',
              label: 'Order',
              tableColumn: '5',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'orderedBy',
              fqn: 'nonmedOrders.table.orderedBy',
              inputType: 'text',
              label: 'Ordered by',
              tableColumn: '6',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: 'If order is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'dayOfReferral',
              fqn: 'nonmedOrders.table.dayOfReferral',
              inputType: 'day',
              label: 'Day of referral',
              tableColumn: '7',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'details',
              fqn: 'nonmedOrders.table.details',
              inputType: 'textarea',
              label: 'Details',
              tableColumn: '8',
              formColumn: '4',
              formRow: '2',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'startDay',
              fqn: 'nonmedOrders.table.startDay',
              inputType: 'day',
              label: 'Start day',
              tableColumn: '9',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: 'If order is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'startTime',
              fqn: 'nonmedOrders.table.startTime',
              inputType: 'time',
              label: 'Start time',
              tableColumn: '10',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'startTime',
              fqn: 'nonmedOrders.table.startTime',
              inputType: 'day',
              label: 'End day',
              tableColumn: '11',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: '?'
            },
            {
              elementKey: 'endTime',
              fqn: 'nonmedOrders.table.endTime',
              inputType: 'time',
              label: 'End time',
              tableColumn: '12',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              mandatory: '?',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'nonmedOrders.table.status',
              inputType: 'select',
              label: 'Status',
              tableColumn: '13',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
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
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'reconciliationComplete',
              fqn: 'nonmedOrders.table.reconciliationComplete',
              inputType: 'checkbox',
              label: 'Reconciliation complete',
              tableColumn: '13',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            },
            {
              elementKey: 'comment',
              fqn: 'nonmedOrders.table.comment',
              inputType: 'textarea',
              label: 'Comment',
              tableColumn: '14',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'nonmedOrders',
              dataParent: 'nonmedOrders.table',
              page: 'nonmedOrders',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'nonmedOrders.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'nonmedOrders.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'nonmedOrders.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'nonmedOrders.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'order',
                    fqn: 'nonmedOrders.table.order',
                    inputType: 'text',
                    label: 'Order',
                    tableColumn: '5',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'orderedBy',
                    fqn: 'nonmedOrders.table.orderedBy',
                    inputType: 'text',
                    label: 'Ordered by',
                    tableColumn: '6',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: 'If order is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'dayOfReferral',
                    fqn: 'nonmedOrders.table.dayOfReferral',
                    inputType: 'day',
                    label: 'Day of referral',
                    tableColumn: '7',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'details',
                    fqn: 'nonmedOrders.table.details',
                    inputType: 'textarea',
                    label: 'Details',
                    tableColumn: '8',
                    formColumn: '4',
                    formRow: '2',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: '?',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'startDay',
                    fqn: 'nonmedOrders.table.startDay',
                    inputType: 'day',
                    label: 'Start day',
                    tableColumn: '9',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: 'If order is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'startTime',
                    fqn: 'nonmedOrders.table.startTime',
                    inputType: 'time',
                    label: 'Start time',
                    tableColumn: '10',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'startTime',
                    fqn: 'nonmedOrders.table.startTime',
                    inputType: 'time',
                    label: 'Start time',
                    tableColumn: '10',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: '?',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'endTime',
                    fqn: 'nonmedOrders.table.endTime',
                    inputType: 'time',
                    label: 'End time',
                    tableColumn: '12',
                    formColumn: '4',
                    formRow: '3',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    mandatory: '?',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'status',
                    fqn: 'nonmedOrders.table.status',
                    inputType: 'select',
                    label: 'Status',
                    tableColumn: '13',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
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
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'reconciliationComplete',
                    fqn: 'nonmedOrders.table.reconciliationComplete',
                    inputType: 'checkbox',
                    label: 'Reconciliation complete',
                    tableColumn: '13',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'comment',
                    fqn: 'nonmedOrders.table.comment',
                    inputType: 'textarea',
                    label: 'Comment',
                    tableColumn: '14',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'nonmedOrders',
                    dataParent: 'nonmedOrders.table',
                    page: 'nonmedOrders',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    referrals: {
      pageTitle: 'Referrals to other disciplines',
      pageDataKey: 'referrals',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new referral',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'referrals.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'referrals.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'referrals.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'referrals.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'referralName',
              fqn: 'referrals.table.referralName',
              inputType: 'text',
              label: 'Referral name',
              tableColumn: '5',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'referralProfession',
              fqn: 'referrals.table.referralProfession',
              inputType: 'text',
              label: 'Referral profession',
              tableColumn: '6',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              fqn: 'referrals.table.',
              inputType: 'spacer',
              tableColumn: '7',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableCss: 'hide-table-element',
              tableKey: 'table'
            },
            {
              elementKey: 'appointmentDate',
              fqn: 'referrals.table.appointmentDate',
              inputType: 'date',
              label: 'Appointment date',
              tableColumn: '8',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'appointmentTime',
              fqn: 'referrals.table.appointmentTime',
              inputType: 'time',
              label: 'Appointment time',
              tableColumn: '9',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'referrals.table.status',
              inputType: 'select',
              label: 'Status',
              tableColumn: '10',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'referrals',
              dataParent: 'referrals.table',
              page: 'Referrals',
              options: [
                {
                  text: 'Active'
                },
                {
                  text: 'Discharged'
                }
              ],
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'referrals.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'referrals.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'referrals.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'referrals.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'referralName',
                    fqn: 'referrals.table.referralName',
                    inputType: 'text',
                    label: 'Referral name',
                    tableColumn: '5',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'referralProfession',
                    fqn: 'referrals.table.referralProfession',
                    inputType: 'text',
                    label: 'Referral profession',
                    tableColumn: '6',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    fqn: 'referrals.table.',
                    inputType: 'spacer',
                    tableColumn: '7',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableCss: 'hide-table-element',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'appointmentDate',
                    fqn: 'referrals.table.appointmentDate',
                    inputType: 'date',
                    label: 'Appointment date',
                    tableColumn: '8',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'appointmentTime',
                    fqn: 'referrals.table.appointmentTime',
                    inputType: 'time',
                    label: 'Appointment time',
                    tableColumn: '9',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'status',
                    fqn: 'referrals.table.status',
                    inputType: 'select',
                    label: 'Status',
                    tableColumn: '10',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'referrals',
                    dataParent: 'referrals.table',
                    page: 'Referrals',
                    options: [
                      {
                        text: 'Active'
                      },
                      {
                        text: 'Discharged'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    labRequisitions: {
      pageTitle: 'Lab requisitions',
      pageDataKey: 'labRequisitions',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new requisition',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'labRequisitions.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'labRequisitions.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'labRequisitions.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'labRequisitions.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'requisition',
              fqn: 'labRequisitions.table.requisition',
              inputType: 'text',
              label: 'Requisition',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'ordered',
              fqn: 'labRequisitions.table.ordered',
              inputType: 'text',
              label: 'Ordered',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'collected',
              fqn: 'labRequisitions.table.collected',
              inputType: 'text',
              label: 'Collected',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'report',
              fqn: 'labRequisitions.table.report',
              inputType: 'text',
              label: 'Report',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              tableKey: 'table'
            },
            {
              elementKey: 'status',
              fqn: 'labRequisitions.table.status',
              inputType: 'select',
              label: 'Status',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'labRequisitions',
              dataParent: 'labRequisitions.table',
              page: 'LabRequisitions',
              options: [
                {
                  text: 'Ordered'
                },
                {
                  text: 'In progress'
                },
                {
                  text: 'Pending'
                },
                {
                  text: 'Complete'
                }
              ],
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'labRequisitions.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'labRequisitions.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'labRequisitions.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'labRequisitions.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'requisition',
                    fqn: 'labRequisitions.table.requisition',
                    inputType: 'text',
                    label: 'Requisition',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'ordered',
                    fqn: 'labRequisitions.table.ordered',
                    inputType: 'text',
                    label: 'Ordered',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'collected',
                    fqn: 'labRequisitions.table.collected',
                    inputType: 'text',
                    label: 'Collected',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'report',
                    fqn: 'labRequisitions.table.report',
                    inputType: 'text',
                    label: 'Report',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'status',
                    fqn: 'labRequisitions.table.status',
                    inputType: 'select',
                    label: 'Status',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'labRequisitions',
                    dataParent: 'labRequisitions.table',
                    page: 'LabRequisitions',
                    options: [
                      {
                        text: 'Ordered'
                      },
                      {
                        text: 'In progress'
                      },
                      {
                        text: 'Pending'
                      },
                      {
                        text: 'Complete'
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    medicationOrders: {
      pageTitle: 'Medication orders',
      pageDataKey: 'medicationOrders',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add a new medication order',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'medicationOrders.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'medicationOrders.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'medicationOrders.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'medicationOrders.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'medication',
              fqn: 'medicationOrders.table.medication',
              inputType: 'text',
              label: 'Medication',
              tableColumn: '5',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'dose',
              fqn: 'medicationOrders.table.dose',
              inputType: 'text',
              label: 'Dose',
              tableColumn: '6',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'route',
              fqn: 'medicationOrders.table.route',
              inputType: 'text',
              label: 'Route',
              tableColumn: '7',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'frequency',
              fqn: 'medicationOrders.table.frequency',
              inputType: 'text',
              label: 'Frequency',
              tableColumn: '8',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'quantity',
              fqn: 'medicationOrders.table.quantity',
              inputType: 'text',
              label: 'Quantity',
              tableColumn: '9',
              formColumn: '3',
              formRow: '3',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              helperText: 'Not needed for hospital, only community',
              tableKey: 'table'
            },
            {
              elementKey: 'refills',
              fqn: 'medicationOrders.table.refills',
              inputType: 'number',
              label: 'Refills',
              tableColumn: '10',
              formColumn: '4',
              formRow: '3',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              helperText: 'Not needed for hospital, only community',
              tableKey: 'table'
            },
            {
              elementKey: 'notes',
              fqn: 'medicationOrders.table.notes',
              inputType: 'textarea',
              label: 'Notes',
              tableColumn: '11',
              formColumn: '1',
              formRow: '4',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'reason',
              fqn: 'medicationOrders.table.reason',
              inputType: 'text',
              label: 'Reason',
              tableColumn: '12',
              formColumn: '2',
              formRow: '4',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'orderedBy',
              fqn: 'medicationOrders.table.orderedBy',
              inputType: 'text',
              label: 'Ordered by',
              tableColumn: '13',
              formColumn: '1',
              formRow: '5',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'orderDay',
              fqn: 'medicationOrders.table.orderDay',
              inputType: 'text',
              label: 'Order day',
              tableColumn: '14',
              formColumn: '2',
              formRow: '5',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'medicationOrders.table.day',
              inputType: 'day',
              label: 'Start day',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders'
            },
            {
              elementKey: 'end',
              fqn: 'medicationOrders.table.end',
              inputType: 'day',
              label: 'End day',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              tableKey: 'table'
            },
            {
              elementKey: 'orderedBy',
              fqn: 'medicationOrders.table.orderedBy',
              inputType: 'text',
              label: 'Ordered by',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders'
            },
            {
              elementKey: 'orderTime',
              fqn: 'medicationOrders.table.orderTime',
              inputType: 'text',
              label: 'Order time',
              tableColumn: '15',
              formColumn: '3',
              formRow: '5',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              mandatory: 'If medication is filled, this is mandatory',
              tableKey: 'table'
            },
            {
              elementKey: 'schedule',
              fqn: 'medicationOrders.table.schedule',
              inputType: 'select',
              label: 'Schedule',
              pageDataKey: 'medicationOrders',
              dataParent: 'medicationOrders.table',
              page: 'Medication orders',
              helperText: 'PRN = as needed',
              options: [
                {
                  text: 'once'
                },
                {
                  text: 'PRN'
                },
                {
                  text: 'scheduled'
                },
                {
                  text: 'stat'
                }
              ],
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'name',
                    fqn: 'medicationOrders.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'medicationOrders.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'medicationOrders.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'medicationOrders.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'orderedBy',
                    fqn: 'medicationOrders.table.orderedBy',
                    inputType: 'text',
                    label: 'Ordered by',
                    tableColumn: '13',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'medication',
                    fqn: 'medicationOrders.table.medication',
                    inputType: 'text',
                    label: 'Medication',
                    tableColumn: '5',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'dose',
                    fqn: 'medicationOrders.table.dose',
                    inputType: 'text',
                    label: 'Dose',
                    tableColumn: '6',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'route',
                    fqn: 'medicationOrders.table.route',
                    inputType: 'text',
                    label: 'Route',
                    tableColumn: '7',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'frequency',
                    fqn: 'medicationOrders.table.frequency',
                    inputType: 'text',
                    label: 'Frequency',
                    tableColumn: '8',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'quantity',
                    fqn: 'medicationOrders.table.quantity',
                    inputType: 'text',
                    label: 'Quantity',
                    tableColumn: '9',
                    formColumn: '3',
                    formRow: '3',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    helperText: 'Not needed for hospital, only community',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'refills',
                    fqn: 'medicationOrders.table.refills',
                    inputType: 'number',
                    label: 'Refills',
                    tableColumn: '10',
                    formColumn: '4',
                    formRow: '3',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    helperText: 'Not needed for hospital, only community',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '4',
                elements: [
                  {
                    elementKey: 'notes',
                    fqn: 'medicationOrders.table.notes',
                    inputType: 'textarea',
                    label: 'Notes',
                    tableColumn: '11',
                    formColumn: '1',
                    formRow: '4',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'reason',
                    fqn: 'medicationOrders.table.reason',
                    inputType: 'text',
                    label: 'Reason',
                    tableColumn: '12',
                    formColumn: '2',
                    formRow: '4',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '5',
                elements: [
                  {
                    elementKey: 'orderedBy',
                    fqn: 'medicationOrders.table.orderedBy',
                    inputType: 'text',
                    label: 'Ordered by',
                    tableColumn: '13',
                    formColumn: '1',
                    formRow: '5',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'orderDay',
                    fqn: 'medicationOrders.table.orderDay',
                    inputType: 'text',
                    label: 'Order day',
                    tableColumn: '14',
                    formColumn: '2',
                    formRow: '5',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'orderTime',
                    fqn: 'medicationOrders.table.orderTime',
                    inputType: 'text',
                    label: 'Order time',
                    tableColumn: '15',
                    formColumn: '3',
                    formRow: '5',
                    pageDataKey: 'medicationOrders',
                    dataParent: 'medicationOrders.table',
                    page: 'Medication orders',
                    mandatory: 'If medication is filled, this is mandatory',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    medAdminRec: {
      pageTitle: 'MAR',
      pageDataKey: 'medAdminRec',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add new MAR',
          tableCells: [
            {
              elementKey: 'status',
              fqn: 'medAdminRec.table.status',
              inputType: 'select',
              label: 'Status',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              options: [
                {
                  text: 'active'
                },
                {
                  text: 'as needed'
                },
                {
                  text: 'hold'
                },
                {
                  text: 'discontinued'
                },
                {
                  text: ''
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'medication',
              fqn: 'medAdminRec.table.medication',
              inputType: 'text',
              label: 'Medication',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              helperText:
                'Medication-NL-(Medication name-NL-Dose-NL-Route-NL-Frequency-NL-Notes-NL-Prescriber)',
              tableKey: 'table'
            },
            {
              elementKey: 'yesterday',
              fqn: 'medAdminRec.table.yesterday',
              inputType: 'calculated',
              label: 'Yesterday',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              options: [
                {
                  text: "[Yesterday's day]"
                },
                {
                  text: '(Previous times)'
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'todayPlan',
              fqn: 'medAdminRec.table.todayPlan',
              inputType: 'text',
              label: 'Today plan',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              options: [
                {
                  text: "[Today's day] plan"
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'todayGiven',
              fqn: 'medAdminRec.table.todayGiven',
              inputType: 'text',
              label: 'Today given',
              formColumn: '3',
              formRow: '2',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              options: [
                {
                  text: "[Today's day] given"
                }
              ],
              tableKey: 'table'
            },
            {
              elementKey: 'administeredBy',
              fqn: 'medAdminRec.table.administeredBy',
              inputType: 'textfield',
              label: 'Administered by',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              tableKey: 'table'
            },
            {
              elementKey: 'actualTime',
              fqn: 'medAdminRec.table.actualTime',
              inputType: 'textfield',
              label: 'Actual time',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'medAdminRec',
              dataParent: 'medAdminRec.table',
              page: 'Medication administration record',
              tableKey: 'table'
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: '1',
                elements: [
                  {
                    elementKey: 'status',
                    fqn: 'medAdminRec.table.status',
                    inputType: 'select',
                    label: 'Status',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    options: [
                      {
                        text: 'active'
                      },
                      {
                        text: 'as needed'
                      },
                      {
                        text: 'hold'
                      },
                      {
                        text: 'discontinued'
                      },
                      {
                        text: ''
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'medication',
                    fqn: 'medAdminRec.table.medication',
                    inputType: 'text',
                    label: 'Medication',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    helperText:
                      'Medication-NL-(Medication name-NL-Dose-NL-Route-NL-Frequency-NL-Notes-NL-Prescriber)',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'yesterday',
                    fqn: 'medAdminRec.table.yesterday',
                    inputType: 'calculated',
                    label: 'Yesterday',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    options: [
                      {
                        text: "[Yesterday's day]"
                      },
                      {
                        text: '(Previous times)'
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'todayPlan',
                    fqn: 'medAdminRec.table.todayPlan',
                    inputType: 'text',
                    label: 'Today plan',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    options: [
                      {
                        text: "[Today's day] plan"
                      }
                    ],
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'todayGiven',
                    fqn: 'medAdminRec.table.todayGiven',
                    inputType: 'text',
                    label: 'Today given',
                    formColumn: '3',
                    formRow: '2',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    options: [
                      {
                        text: "[Today's day] given"
                      }
                    ],
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'administeredBy',
                    fqn: 'medAdminRec.table.administeredBy',
                    inputType: 'textfield',
                    label: 'Administered by',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'actualTime',
                    fqn: 'medAdminRec.table.actualTime',
                    inputType: 'textfield',
                    label: 'Actual time',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'medAdminRec',
                    dataParent: 'medAdminRec.table',
                    page: 'Medication administration record',
                    tableKey: 'table'
                  }
                ]
              }
            ],
            columnsCount: 3
          }
        }
      ],
      pageData: {
        table: []
      }
    },
    dischargeSummary: {
      pageTitle: 'Discharge summary',
      pageDataKey: 'dischargeSummary',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'admissionDay',
                fqn: 'dischargeSummary.admissionDay',
                inputType: 'text',
                label: 'Admission day',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'dischargingPhysician/np',
                fqn: 'dischargeSummary.dischargingPhysician/np',
                inputType: 'select',
                label: 'Discharging physician/NP',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary',
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
                ]
              },
              {
                elementKey: 'role',
                fqn: 'dischargeSummary.role',
                inputType: 'select',
                label: 'Role',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary',
                options: [
                  {
                    text: 'physician'
                  },
                  {
                    text: 'nurse practitioner'
                  }
                ]
              },
              {
                elementKey: 'dischargeDay',
                fqn: 'dischargeSummary.dischargeDay',
                inputType: 'day',
                label: 'Discharge day',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'dischargeTime',
                fqn: 'dischargeSummary.dischargeTime',
                inputType: 'time',
                label: 'Discharge time',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'dischargedTo',
                fqn: 'dischargeSummary.dischargedTo',
                inputType: 'select',
                label: 'Discharged to',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary',
                options: [
                  {
                    text: 'home'
                  },
                  {
                    text: 'expired'
                  },
                  {
                    text: 'transferred'
                  }
                ]
              },
              {
                elementKey: 'dischargedTo',
                fqn: 'dischargeSummary.dischargedTo',
                inputType: 'text',
                label: 'Transferred to',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'leavingBy',
                fqn: 'dischargeSummary.leavingBy',
                inputType: 'select',
                label: 'Leaving by',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary',
                options: [
                  {
                    text: 'taxi'
                  },
                  {
                    text: 'family'
                  },
                  {
                    text: 'ambulance'
                  },
                  {
                    text: 'walk out/wheelchair'
                  }
                ]
              },
              {
                elementKey: 'codeStatus',
                fqn: 'dischargeSummary.codeStatus',
                inputType: 'text',
                label: 'Code status',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'clinicalSummary',
                fqn: 'dischargeSummary.clinicalSummary',
                inputType: 'textarea',
                label: 'Clinical summary',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'proceduresTreatment',
                fqn: 'dischargeSummary.proceduresTreatment',
                inputType: 'text',
                label: 'Procedures and treatement',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'medicationsAdministered',
                fqn: 'dischargeSummary.medicationsAdministered',
                inputType: 'text',
                label: 'Medications administered while in care',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'dischargeRx',
                fqn: 'dischargeSummary.dischargeRx',
                inputType: 'text',
                label: 'Discharge Rx',
                formColumn: '2',
                formRow: '3',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          },
          {
            formRow: '4',
            elements: [
              {
                elementKey: 'followUpAppointment',
                fqn: 'dischargeSummary.followUpAppointment',
                inputType: 'text',
                label: 'Follow up appointments',
                formColumn: '1',
                formRow: '4',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'referredTo',
                fqn: 'dischargeSummary.referredTo',
                inputType: 'text',
                label: 'Referrals/receiving team',
                formColumn: '2',
                formRow: '4',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'labMedicalImaging',
                fqn: 'dischargeSummary.labMedicalImaging',
                inputType: 'files',
                label: 'Lab and medical imaging requisitions',
                formColumn: '3',
                formRow: '4',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          },
          {
            formRow: '5',
            elements: [
              {
                elementKey: 'dischargeDiagnosis',
                fqn: 'dischargeSummary.dischargeDiagnosis',
                inputType: 'text',
                label: 'Discharge diagnosis',
                formColumn: '2',
                formRow: '5',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          },
          {
            formRow: '6',
            elements: [
              {
                elementKey: 'dischargePlan',
                fqn: 'dischargeSummary.dischargePlan',
                inputType: 'textarea',
                label: 'Discharge plan',
                formColumn: '1',
                formRow: '6',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              },
              {
                elementKey: 'dischargeEducation',
                fqn: 'dischargeSummary.dischargeEducation',
                inputType: 'textarea',
                label: 'Discharge education',
                formColumn: '2',
                formRow: '6',
                pageDataKey: 'dischargeSummary',
                dataParent: 'dischargeSummary',
                page: 'Discharge summary'
              }
            ]
          }
        ],
        columnsCount: 10
      },
      pageData: {}
    },
    billing: {
      pageTitle: 'Billing',
      pageDataKey: 'billing',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'msp',
                fqn: 'billing.msp',
                inputType: 'checkbox',
                label: 'MSP',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'billing',
                dataParent: 'billing',
                page: 'Billing'
              }
            ]
          },
          {
            formRow: '2',
            elements: [
              {
                elementKey: 'thirdParty',
                fqn: 'billing.thirdParty',
                inputType: 'checkbox',
                label: 'Third party',
                formColumn: '1',
                formRow: '2',
                pageDataKey: 'billing',
                dataParent: 'billing',
                page: 'Billing'
              }
            ]
          },
          {
            formRow: '3',
            elements: [
              {
                elementKey: 'federal',
                fqn: 'billing.federal',
                inputType: 'checkbox',
                label: 'Federal',
                formColumn: '1',
                formRow: '3',
                pageDataKey: 'billing',
                dataParent: 'billing',
                page: 'Billing'
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    }
  }
}
