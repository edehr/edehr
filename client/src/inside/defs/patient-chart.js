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
      generated: "2019-06-19T07:41:09-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add an encounter note",
          tableCells: [
            {
              label: "Entered by name",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              formCss: "user_name",
              tableColumn: "1",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.name",
              tableKey: "table"
            },
            {
              label: "Entered by profession",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              formCss: "user_pro",
              tableColumn: "2",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.profession",
              tableKey: "table"
            },
            {
              label: "Entered on day",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              formCss: "user_day",
              tableColumn: "3",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.day",
              tableKey: "table"
            },
            {
              label: "Entered at time",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              formCss: "user_time",
              tableColumn: "4",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.time",
              tableKey: "table"
            },
            {
              label: "Progress note",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "note",
              inputType: "textarea",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.note",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Entered by name",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    formCss: "user_name",
                    tableColumn: "1",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Entered by profession",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    formCss: "user_pro",
                    tableColumn: "2",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Entered on day",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    formCss: "user_day",
                    tableColumn: "3",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Entered at time",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    formCss: "user_time",
                    tableColumn: "4",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Progress note",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "note",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.note",
                    tableKey: "table"
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
          fqn: "carePlan.table2.status"
        }
      ],
      generated: "2019-06-19T07:41:09-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table2",
          addButtonText: "Add a care plan",
          tableCells: [
            {
              label: "Entered by name",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.name",
              tableKey: "table2"
            },
            {
              label: "Entered by profession",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.profession",
              tableKey: "table2"
            },
            {
              label: "Entered on day",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.day",
              tableKey: "table2"
            },
            {
              label: "Entered at time",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.time",
              tableKey: "table2"
            },
            {
              label: "Clinical issue",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "clinical",
              inputType: "textarea",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.clinical",
              tableKey: "table2"
            },
            {
              label: "Goal of care",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "goal",
              inputType: "textarea",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.goal",
              tableKey: "table2"
            },
            {
              label: "Intervention",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "interventions",
              inputType: "textarea",
              formRow: "3",
              formColumn: "1",
              tableColumn: "7",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.interventions",
              tableKey: "table2"
            },
            {
              label: "Evaluation of intervention",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "evaluation",
              inputType: "textarea",
              formRow: "3",
              formColumn: "2",
              tableColumn: "8",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.evaluation",
              tableKey: "table2"
            },
            {
              label: "Status",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "status",
              inputType: "select",
              formRow: "4",
              formColumn: "1",
              formCss: "is-one-third",
              tableColumn: "9",
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
              ],
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.status",
              tableKey: "table2"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Entered by name",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.name",
                    tableKey: "table2"
                  },
                  {
                    label: "Entered by profession",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.profession",
                    tableKey: "table2"
                  },
                  {
                    label: "Entered on day",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.day",
                    tableKey: "table2"
                  },
                  {
                    label: "Entered at time",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.time",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Clinical issue",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "clinical",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.clinical",
                    tableKey: "table2"
                  },
                  {
                    label: "Goal of care",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "goal",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.goal",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Intervention",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "interventions",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "7",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.interventions",
                    tableKey: "table2"
                  },
                  {
                    label: "Evaluation of intervention",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "evaluation",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "8",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.evaluation",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Status",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "status",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "1",
                    formCss: "is-one-third",
                    tableColumn: "9",
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
                    ],
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.status",
                    tableKey: "table2"
                  }
                ]
              }
            ],
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table2: []
      }
    },
    consultants: {
      pageTitle: "Consults",
      pageDataKey: "consultants",
      pageChildren: [],
      generated: "2019-06-19T07:41:09-07:00",
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    labResults: {
      pageTitle: "Laboratory results",
      pageDataKey: "labResults",
      pageChildren: [
        {
          label: "ABG laboratory report",
          elementKey: "labReport1_1",
          fqn: "labResults.labReport.labReport1_1"
        },
        {
          label: "ABG laboratory report",
          elementKey: "labReport2_1",
          fqn: "labResults.labReport.labReport2_1"
        },
        {
          label: "C&S laboratory report",
          elementKey: "labReport3_1",
          fqn: "labResults.labReport.labReport3_1"
        },
        {
          label: "Final C&S laboratory report",
          elementKey: "labReport4_1",
          fqn: "labResults.labReport.labReport4_1"
        }
      ],
      generated: "2019-06-19T07:41:09-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Laboratory results",
                pageDataKey: "labResults",
                elementKey: "labReport",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                formCss: "h2",
                dataParent: "labResults",
                fqn: "labResults.labReport",
                elements: [
                  {
                    label: "ABG laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport1_1",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "1",
                    assetBase: "lab-reports",
                    assetName: "day-0-abg-laboratory-report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport1_1",
                    formColumn: "1"
                  },
                  {
                    label: "ABG laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport2_1",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "1",
                    assetBase: "lab-reports",
                    assetName: "day-1-abg-laboratory-report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport2_1",
                    formColumn: "1"
                  },
                  {
                    label: "C&S laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport3_1",
                    inputType: "assetLink",
                    fsetRow: "3",
                    fsetCol: "1",
                    assetBase: "lab-reports",
                    assetName: "day-3-c-s-laboratory-report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport3_1",
                    formColumn: "1"
                  },
                  {
                    label: "Final C&S laboratory report",
                    pageDataKey: "labResults",
                    level3Key: "labReport",
                    elementKey: "labReport4_1",
                    inputType: "assetLink",
                    fsetRow: "4",
                    fsetCol: "1",
                    assetBase: "lab-reports",
                    assetName: "day-3-final-c-s-laboratory-report.pdf",
                    dataParent: "labResults.labReport",
                    fqn: "labResults.labReport.labReport4_1",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "labReport",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "ABG laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport1_1",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "1",
                          assetBase: "lab-reports",
                          assetName: "day-0-abg-laboratory-report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "ABG laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport2_1",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "1",
                          assetBase: "lab-reports",
                          assetName: "day-1-abg-laboratory-report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport2_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "3",
                      elements: [
                        {
                          label: "C&S laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport3_1",
                          inputType: "assetLink",
                          fsetRow: "3",
                          fsetCol: "1",
                          assetBase: "lab-reports",
                          assetName: "day-3-c-s-laboratory-report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport3_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "4",
                      elements: [
                        {
                          label: "Final C&S laboratory report",
                          pageDataKey: "labResults",
                          level3Key: "labReport",
                          elementKey: "labReport4_1",
                          inputType: "assetLink",
                          fsetRow: "4",
                          fsetCol: "1",
                          assetBase: "lab-reports",
                          assetName: "day-3-final-c-s-laboratory-report.pdf",
                          dataParent: "labResults.labReport",
                          fqn: "labResults.labReport.labReport4_1",
                          formColumn: "1"
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
      },
      pageData: {}
    },
    medicalImaging: {
      pageTitle: "Medical imaging",
      pageDataKey: "medicalImaging",
      pageChildren: [
        {
          label: "Day 0",
          elementKey: "day1_1",
          fqn: "medicalImaging.day.day1_1"
        },
        {
          label: "Day 2",
          elementKey: "day2_1",
          fqn: "medicalImaging.day.day2_1"
        },
        {
          label: "COPD xray",
          elementKey: "diagnosticReport1_2",
          fqn: "medicalImaging.diagnosticReport.diagnosticReport1_2"
        },
        {
          label: "Pneumonia xray",
          elementKey: "diagnosticReport2_2",
          fqn: "medicalImaging.diagnosticReport.diagnosticReport2_2"
        },
        {
          label: "COPD report",
          elementKey: "diagnosticImage1_3",
          fqn: "medicalImaging.diagnosticImage.diagnosticImage1_3"
        },
        {
          label: "Pneumonia report",
          elementKey: "diagnosticImage2_3",
          fqn: "medicalImaging.diagnosticImage.diagnosticImage2_3"
        }
      ],
      generated: "2019-06-19T07:41:09-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                pageDataKey: "medicalImaging",
                elementKey: "day",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                dataParent: "medicalImaging",
                fqn: "medicalImaging.day",
                elements: [
                  {
                    label: "Day 0",
                    pageDataKey: "medicalImaging",
                    level3Key: "day",
                    elementKey: "day1_1",
                    fsetRow: "1",
                    fsetCol: "1",
                    dataParent: "medicalImaging.day",
                    fqn: "medicalImaging.day.day1_1",
                    formColumn: "1"
                  },
                  {
                    label: "Day 2",
                    pageDataKey: "medicalImaging",
                    level3Key: "day",
                    elementKey: "day2_1",
                    fsetRow: "2",
                    fsetCol: "1",
                    dataParent: "medicalImaging.day",
                    fqn: "medicalImaging.day.day2_1",
                    formColumn: "1"
                  }
                ],
                containerType: "fieldset",
                containerKey: "day",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "Day 0",
                          pageDataKey: "medicalImaging",
                          level3Key: "day",
                          elementKey: "day1_1",
                          fsetRow: "1",
                          fsetCol: "1",
                          dataParent: "medicalImaging.day",
                          fqn: "medicalImaging.day.day1_1",
                          formColumn: "1"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Day 2",
                          pageDataKey: "medicalImaging",
                          level3Key: "day",
                          elementKey: "day2_1",
                          fsetRow: "2",
                          fsetCol: "1",
                          dataParent: "medicalImaging.day",
                          fqn: "medicalImaging.day.day2_1",
                          formColumn: "1"
                        }
                      ]
                    }
                  ],
                  columnsCount: 1
                }
              },
              {
                pageDataKey: "medicalImaging",
                elementKey: "diagnosticReport",
                inputType: "fieldset",
                formRow: "1",
                formColumn: "1",
                dataParent: "medicalImaging",
                fqn: "medicalImaging.diagnosticReport",
                elements: [
                  {
                    label: "COPD xray",
                    pageDataKey: "medicalImaging",
                    level3Key: "diagnosticReport",
                    elementKey: "diagnosticReport1_2",
                    inputType: "assetLink",
                    fsetRow: "1",
                    fsetCol: "2",
                    assetBase: "diagnostic-test-results",
                    assetName: "xray-report-for-copd-day-0.pdf",
                    dataParent: "medicalImaging.diagnosticReport",
                    fqn: "medicalImaging.diagnosticReport.diagnosticReport1_2",
                    formColumn: "2"
                  },
                  {
                    label: "Pneumonia xray",
                    pageDataKey: "medicalImaging",
                    level3Key: "diagnosticReport",
                    elementKey: "diagnosticReport2_2",
                    inputType: "assetLink",
                    fsetRow: "2",
                    fsetCol: "2",
                    assetBase: "diagnostic-test-results",
                    assetName: "xray-report-for-pneumonia-day-2.pdf",
                    dataParent: "medicalImaging.diagnosticReport",
                    fqn: "medicalImaging.diagnosticReport.diagnosticReport2_2",
                    formColumn: "2"
                  }
                ],
                containerType: "fieldset",
                containerKey: "diagnosticReport",
                formFieldSet: {
                  rows: [
                    {
                      formRow: "1",
                      elements: [
                        {
                          label: "COPD xray",
                          pageDataKey: "medicalImaging",
                          level3Key: "diagnosticReport",
                          elementKey: "diagnosticReport1_2",
                          inputType: "assetLink",
                          fsetRow: "1",
                          fsetCol: "2",
                          assetBase: "diagnostic-test-results",
                          assetName: "xray-report-for-copd-day-0.pdf",
                          dataParent: "medicalImaging.diagnosticReport",
                          fqn: "medicalImaging.diagnosticReport.diagnosticReport1_2",
                          formColumn: "2"
                        }
                      ]
                    },
                    {
                      formRow: "2",
                      elements: [
                        {
                          label: "Pneumonia xray",
                          pageDataKey: "medicalImaging",
                          level3Key: "diagnosticReport",
                          elementKey: "diagnosticReport2_2",
                          inputType: "assetLink",
                          fsetRow: "2",
                          fsetCol: "2",
                          assetBase: "diagnostic-test-results",
                          assetName: "xray-report-for-pneumonia-day-2.pdf",
                          dataParent: "medicalImaging.diagnosticReport",
                          fqn: "medicalImaging.diagnosticReport.diagnosticReport2_2",
                          formColumn: "2"
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
        columnsCount: 2
      },
      pageData: {}
    },
    operationReports: {
      pageTitle: "Operative reports and anaesthesia record",
      pageDataKey: "operationReports",
      pageChildren: [],
      generated: "2019-06-19T07:41:09-07:00",
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    }
  }
}