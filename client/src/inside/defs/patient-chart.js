/* eslint-disable quotes */
export default function () {
  return {
    progressNotes: {
      pageTitle: "Progress notes",
      pageDataKey: "progressNotes",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "progressNotes.table.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "progressNotes.table.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "progressNotes.table.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "progressNotes.table.time"
        },
        {
          label: "Progress note",
          elementKey: "note",
          fqn: "progressNotes.table.note",
          dataCaseStudy: "Erin Johns is 74 years old. She is widowed with four children, one of whom lives at home with her in their original family home. Two of Erins children live within a one-hour drive from her, and one lives a three-hour flight away. She also has 10 grandchildren and one great grandchild. Erin describes herself as a non-smoker, but she smoked socially when she was in her early twenties for about five years. She is a retired hairdresser."
        }
      ],
      generated: "2019-07-27T14:18:56-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "progressNotes",
          tableKey: "table",
          addButtonText: "Add an encounter note",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Entered on day",
              tableColumn: "3",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "4",
              inputType: "time"
            },
            {
              elementKey: "note",
              label: "Progress note",
              tableColumn: "5",
              inputType: "textarea"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    dataParent: "progressNotes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    dataParent: "progressNotes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    dataParent: "progressNotes.table",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    dataParent: "progressNotes.table",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "note",
                    label: "Progress note",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "progressNotes.table",
                    tableKey: "table"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    },
    carePlan: {
      pageTitle: "Interprofessional plan of care",
      pageDataKey: "carePlan",
      pageChildren: [
        {
          label: "Entered by name",
          elementKey: "name",
          fqn: "carePlan.table2.name"
        },
        {
          label: "Entered by profession",
          elementKey: "profession",
          fqn: "carePlan.table2.profession"
        },
        {
          label: "Entered on day",
          elementKey: "day",
          fqn: "carePlan.table2.day"
        },
        {
          label: "Entered at time",
          elementKey: "time",
          fqn: "carePlan.table2.time"
        },
        {
          label: "Clinical issue",
          elementKey: "clinical",
          fqn: "carePlan.table2.clinical"
        },
        {
          label: "Goal of care",
          elementKey: "goal",
          fqn: "carePlan.table2.goal"
        },
        {
          label: "Intervention",
          elementKey: "interventions",
          fqn: "carePlan.table2.interventions"
        },
        {
          label: "Evaluation of intervention",
          elementKey: "evaluation",
          fqn: "carePlan.table2.evaluation"
        },
        {
          label: "Status",
          elementKey: "status",
          fqn: "carePlan.table2.status",
          options: [
            {
              text: "Active"
            },
            {
              text: "In progress"
            },
            {
              text: "Complete"
            }
          ]
        }
      ],
      generated: "2019-07-27T14:18:56-07:00",
      hasTable: true,
      tables: [
        {
          pageDataKey: "carePlan",
          tableKey: "table2",
          addButtonText: "Add a care plan",
          tableCells: [
            {
              elementKey: "name",
              label: "Entered by name",
              tableColumn: "1",
              inputType: "text"
            },
            {
              elementKey: "profession",
              label: "Entered by profession",
              tableColumn: "2",
              inputType: "text"
            },
            {
              elementKey: "day",
              label: "Entered on day",
              tableColumn: "3",
              inputType: "day"
            },
            {
              elementKey: "time",
              label: "Entered at time",
              tableColumn: "4",
              inputType: "time"
            },
            {
              elementKey: "clinical",
              label: "Clinical issue",
              tableColumn: "5",
              inputType: "textarea"
            },
            {
              elementKey: "goal",
              label: "Goal of care",
              tableColumn: "6",
              inputType: "textarea"
            },
            {
              elementKey: "interventions",
              label: "Intervention",
              tableColumn: "7",
              inputType: "textarea"
            },
            {
              elementKey: "evaluation",
              label: "Evaluation of intervention",
              tableColumn: "8",
              inputType: "textarea"
            },
            {
              elementKey: "status",
              label: "Status",
              tableColumn: "9",
              inputType: "select"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    label: "Entered by name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "profession",
                    label: "Entered by profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "day",
                    label: "Entered on day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "time",
                    label: "Entered at time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "clinical",
                    label: "Clinical issue",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "goal",
                    label: "Goal of care",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "interventions",
                    label: "Intervention",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "evaluation",
                    label: "Evaluation of intervention",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "status",
                    label: "Status",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    dataParent: "carePlan.table2",
                    tableKey: "table2"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ]
    },
    consults: {
      pageTitle: "Consults",
      pageDataKey: "consults",
      pageChildren: [],
      generated: "2019-07-27T14:18:56-07:00",
      hasForm: true,
      pageForm: {
        rows: [],
        columnsCount: 0
      }
    },
    labResults: {
      pageTitle: "Laboratory results",
      pageDataKey: "labResults",
      pageChildren: [
        {
          label: "ABG laboratory report",
          elementKey: "labReport1_1",
          fqn: "labResults.labReport.labReport1_1",
          assetBase: "lab-reports",
          assetName: "day-0-abg-laboratory-report.pdf"
        },
        {
          label: "ABG laboratory report",
          elementKey: "labReport2_1",
          fqn: "labResults.labReport.labReport2_1",
          assetBase: "lab-reports",
          assetName: "day-1-abg-laboratory-report.pdf"
        },
        {
          label: "C&S laboratory report",
          elementKey: "labReport3_1",
          fqn: "labResults.labReport.labReport3_1",
          assetBase: "lab-reports",
          assetName: "day-3-c-s-laboratory-report.pdf"
        },
        {
          label: "Final C&S laboratory report",
          elementKey: "labReport4_1",
          fqn: "labResults.labReport.labReport4_1",
          assetBase: "lab-reports",
          assetName: "day-3-final-c-s-laboratory-report.pdf"
        }
      ],
      generated: "2019-07-27T14:18:56-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "labReport",
                label: "Laboratory results",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                formCss: "h2",
                dataParent: "labResults",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          elementKey: "labReport1_1",
                          label: "ABG laboratory report",
                          inputType: "assetLink",
                          fsetRow: "1",
                          dataParent: "labResults.labReport"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          elementKey: "labReport2_1",
                          label: "ABG laboratory report",
                          inputType: "assetLink",
                          fsetRow: "2",
                          dataParent: "labResults.labReport"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          elementKey: "labReport3_1",
                          label: "C&S laboratory report",
                          inputType: "assetLink",
                          fsetRow: "3",
                          dataParent: "labResults.labReport"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          elementKey: "labReport4_1",
                          label: "Final C&S laboratory report",
                          inputType: "assetLink",
                          fsetRow: "4",
                          dataParent: "labResults.labReport"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              }
            ]
          }
        ],
        columnsCount: 1
      }
    },
    medicalImaging: {
      pageTitle: "Medical imaging",
      pageDataKey: "medicalImaging",
      pageChildren: [
        {
          label: "Day 0",
          elementKey: "day0",
          fqn: "medicalImaging.day0"
        },
        {
          label: "Day 2",
          elementKey: "day2",
          fqn: "medicalImaging.day2"
        },
        {
          label: "COPD xray",
          elementKey: "copd_xray",
          fqn: "medicalImaging.copd_xray",
          assetBase: "diagnostic-test-results",
          assetName: "xray-report-for-copd-day-0.pdf"
        },
        {
          label: "Pneumonia xray",
          elementKey: "pneumonia_xray",
          fqn: "medicalImaging.pneumonia_xray",
          assetBase: "diagnostic-test-results",
          assetName: "xray-report-for-pneumonia-day-2.pdf"
        },
        {
          label: "COPD report",
          elementKey: "copd_report",
          fqn: "medicalImaging.copd_report",
          assetBase: "diagnostic-test-results",
          assetName: "copd-xray.jpg"
        },
        {
          label: "Pneumonia report",
          elementKey: "pneumonia_report",
          fqn: "medicalImaging.pneumonia_report",
          assetBase: "diagnostic-test-results",
          assetName: "chest-xray-with-pneumonia.jpg"
        }
      ],
      generated: "2019-07-27T14:18:56-07:00",
      hasForm: true,
      pageForm: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "day0",
                label: "Day 0",
                inputType: "form_label",
                formRow: "1",
                formColumn: "1",
                dataParent: "medicalImaging"
              },
              {
                elementKey: "copd_xray",
                label: "COPD xray",
                inputType: "assetLink",
                formRow: "1",
                formColumn: "2",
                dataParent: "medicalImaging"
              },
              {
                elementKey: "copd_report",
                label: "COPD report",
                inputType: "assetLink",
                formRow: "1",
                formColumn: "3",
                dataParent: "medicalImaging"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "day2",
                label: "Day 2",
                inputType: "form_label",
                formRow: "2",
                formColumn: "1",
                dataParent: "medicalImaging"
              },
              {
                elementKey: "pneumonia_xray",
                label: "Pneumonia xray",
                inputType: "assetLink",
                formRow: "2",
                formColumn: "2",
                dataParent: "medicalImaging"
              },
              {
                elementKey: "pneumonia_report",
                label: "Pneumonia report",
                inputType: "assetLink",
                formRow: "2",
                formColumn: "3",
                dataParent: "medicalImaging"
              }
            ]
          }
        ],
        columnsCount: 3
      }
    },
    operationReports: {
      pageTitle: "Operative reports and anaesthesia record",
      pageDataKey: "operationReports",
      pageChildren: [],
      generated: "2019-07-27T14:18:56-07:00",
      hasForm: true,
      pageForm: {
        rows: [],
        columnsCount: 0
      }
    }
  }
}