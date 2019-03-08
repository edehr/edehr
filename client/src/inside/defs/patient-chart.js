/* eslint-disable quotes */
export default function () {
  return {
    progressNotes: {
      pageTitle: "Progress notes",
      pageDataKey: "progressNotes",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a progress note",
          tableCells: [
            {
              elementKey: "name",
              fqn: "progressNotes.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "progressNotes",
              dataParent: "progressNotes.table",
              level2Key: "table",
              page: "Progress notes",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "progressNotes.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "progressNotes",
              dataParent: "progressNotes.table",
              level2Key: "table",
              page: "Progress notes",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "progressNotes.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "progressNotes",
              dataParent: "progressNotes.table",
              level2Key: "table",
              page: "Progress notes",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "progressNotes.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "progressNotes",
              dataParent: "progressNotes.table",
              level2Key: "table",
              page: "Progress notes",
              tableKey: "table"
            },
            {
              elementKey: "notes",
              fqn: "progressNotes.table.notes",
              inputType: "textarea",
              label: "Progress notes",
              tableColumn: "6",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "progressNotes",
              dataParent: "progressNotes.table",
              level2Key: "table",
              page: "Progress notes",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "progressNotes.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "progressNotes",
                    dataParent: "progressNotes.table",
                    level2Key: "table",
                    page: "Progress notes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "progressNotes.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "progressNotes",
                    dataParent: "progressNotes.table",
                    level2Key: "table",
                    page: "Progress notes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "progressNotes.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "progressNotes",
                    dataParent: "progressNotes.table",
                    level2Key: "table",
                    page: "Progress notes",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "progressNotes.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "progressNotes",
                    dataParent: "progressNotes.table",
                    level2Key: "table",
                    page: "Progress notes",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "notes",
                    fqn: "progressNotes.table.notes",
                    inputType: "textarea",
                    label: "Progress notes",
                    tableColumn: "6",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "progressNotes",
                    dataParent: "progressNotes.table",
                    level2Key: "table",
                    page: "Progress notes",
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
      hasTable: true,
      tables: [
        {
          tableKey: "table2",
          addButtonText: "Add a care plan",
          tableCells: [
            {
              elementKey: "name",
              fqn: "carePlan.table2.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "profession",
              fqn: "carePlan.table2.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "day",
              fqn: "carePlan.table2.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "time",
              fqn: "carePlan.table2.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "clinical",
              fqn: "carePlan.table2.clinical",
              inputType: "textarea",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "details",
              fqn: "carePlan.table2.details",
              inputType: "textarea",
              label: "Details of clinical issue",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "goal",
              fqn: "carePlan.table2.goal",
              inputType: "text",
              label: "Goal of care",
              tableColumn: "7",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "interventions",
              fqn: "carePlan.table2.interventions",
              inputType: "textarea",
              label: "Intervention",
              tableColumn: "8",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "evaluation",
              fqn: "carePlan.table2.evaluation",
              inputType: "textarea",
              label: "Evaluation of intervention",
              tableColumn: "9",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
              tableKey: "table2"
            },
            {
              elementKey: "status",
              fqn: "carePlan.table2.status",
              inputType: "select",
              label: "Status",
              tableColumn: "10",
              formColumn: "2",
              formRow: "4",
              pageDataKey: "carePlan",
              dataParent: "carePlan.table2",
              level2Key: "table2",
              page: "Interprofessional plan of care",
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
              tableKey: "table2"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "carePlan.table2.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "profession",
                    fqn: "carePlan.table2.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "day",
                    fqn: "carePlan.table2.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "time",
                    fqn: "carePlan.table2.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "clinical",
                    fqn: "carePlan.table2.clinical",
                    inputType: "textarea",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "details",
                    fqn: "carePlan.table2.details",
                    inputType: "textarea",
                    label: "Details of clinical issue",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "goal",
                    fqn: "carePlan.table2.goal",
                    inputType: "text",
                    label: "Goal of care",
                    tableColumn: "7",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "interventions",
                    fqn: "carePlan.table2.interventions",
                    inputType: "textarea",
                    label: "Intervention",
                    tableColumn: "8",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  },
                  {
                    elementKey: "evaluation",
                    fqn: "carePlan.table2.evaluation",
                    inputType: "textarea",
                    label: "Evaluation of intervention",
                    tableColumn: "9",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "status",
                    fqn: "carePlan.table2.status",
                    inputType: "select",
                    label: "Status",
                    tableColumn: "10",
                    formColumn: "2",
                    formRow: "4",
                    pageDataKey: "carePlan",
                    dataParent: "carePlan.table2",
                    level2Key: "table2",
                    page: "Interprofessional plan of care",
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "none",
                fqn: "consultants.none",
                inputType: "label",
                label: "Linked files",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "consultants",
                dataParent: "consultants",
                page: "Consults"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    labResults: {
      pageTitle: "Laboratory results",
      pageDataKey: "labResults",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "none",
                fqn: "labResults.none",
                inputType: "label",
                label: "Linked files",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "labResults",
                dataParent: "labResults",
                page: "Laboratory results"
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
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "none",
                fqn: "medicalImaging.none",
                inputType: "label",
                label: "Linked files",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "medicalImaging",
                dataParent: "medicalImaging",
                page: "Medical imaging"
              }
            ]
          }
        ],
        columnsCount: 1
      },
      pageData: {}
    },
    operationReports: {
      pageTitle: "Operative reports and anaesthesia record",
      pageDataKey: "operationReports",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "none",
                fqn: "operationReports.none",
                inputType: "label",
                label: "Linked files",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "operationReports",
                dataParent: "operationReports",
                page: "Operative reports"
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