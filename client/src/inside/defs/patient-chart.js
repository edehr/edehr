/* eslint-disable quotes */
export default function () {
  return {
    progressNotes: {
      pageTitle: "Progress notes",
      pageDataKey: "progressNotes",
      generated: "2019-03-12T11:46:32-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a progress note",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.time",
              tableKey: "table"
            },
            {
              label: "Progress notes",
              pageDataKey: "progressNotes",
              level2Key: "table",
              elementKey: "notes",
              inputType: "textarea",
              formRow: "2",
              formColumn: "1",
              tableColumn: "6",
              dataParent: "progressNotes.table",
              fqn: "progressNotes.table.notes",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Name",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
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
                    label: "Progress notes",
                    pageDataKey: "progressNotes",
                    level2Key: "table",
                    elementKey: "notes",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "6",
                    dataParent: "progressNotes.table",
                    fqn: "progressNotes.table.notes",
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
      generated: "2019-03-12T11:46:32-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table2",
          addButtonText: "Add a care plan",
          tableCells: [
            {
              label: "Name",
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
              label: "Profession",
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
              label: "Day",
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
              label: "Time",
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
              label: "Details of clinical issue",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "details",
              inputType: "textarea",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "carePlan.table2",
              fqn: "carePlan.table2.details",
              tableKey: "table2"
            },
            {
              label: "Goal of care",
              pageDataKey: "carePlan",
              level2Key: "table2",
              elementKey: "goal",
              inputType: "text",
              formRow: "3",
              formColumn: "1",
              tableColumn: "7",
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
              formRow: "4",
              formColumn: "1",
              tableColumn: "8",
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
              formRow: "4",
              formColumn: "2",
              tableColumn: "9",
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
              formRow: "5",
              formColumn: "1",
              tableColumn: "10",
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
                    label: "Name",
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
                    label: "Profession",
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
                    label: "Day",
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
                    label: "Time",
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
                    label: "Details of clinical issue",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "details",
                    inputType: "textarea",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.details",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Goal of care",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "goal",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "7",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.goal",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Intervention",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "interventions",
                    inputType: "textarea",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "8",
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
                    formRow: "4",
                    formColumn: "2",
                    tableColumn: "9",
                    dataParent: "carePlan.table2",
                    fqn: "carePlan.table2.evaluation",
                    tableKey: "table2"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    label: "Status",
                    pageDataKey: "carePlan",
                    level2Key: "table2",
                    elementKey: "status",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "10",
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
      generated: "2019-03-12T11:46:32-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Linked files",
                pageDataKey: "consultants",
                elementKey: "none",
                inputType: "label",
                formRow: "1",
                formColumn: "1",
                dataParent: "consultants",
                fqn: "consultants.none"
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
      generated: "2019-03-12T11:46:32-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Linked files",
                pageDataKey: "labResults",
                elementKey: "none",
                inputType: "label",
                formRow: "1",
                formColumn: "1",
                dataParent: "labResults",
                fqn: "labResults.none"
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
      generated: "2019-03-12T11:46:32-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Linked files",
                pageDataKey: "medicalImaging",
                elementKey: "none",
                inputType: "label",
                formRow: "1",
                formColumn: "1",
                dataParent: "medicalImaging",
                fqn: "medicalImaging.none"
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
      generated: "2019-03-12T11:46:32-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Linked files",
                pageDataKey: "operationReports",
                elementKey: "none",
                inputType: "label",
                formRow: "1",
                formColumn: "1",
                dataParent: "operationReports",
                fqn: "operationReports.none"
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