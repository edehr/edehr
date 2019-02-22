/* eslint-disable quotes */
export default function() {
  return {
    progressNotes: {
      pageTitle: 'Progress notes',
      pageDataKey: 'progressNotes',
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add progress note',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'progressNotes.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formCss: 'user_name',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes.table',
              page: 'Progress notes',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'progressNotes.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formCss: 'user_pro',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes.table',
              page: 'Progress notes',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'progressNotes.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formCss: 'user_day',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes.table',
              page: 'Progress notes',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'progressNotes.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formCss: 'user_time',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes.table',
              page: 'Progress notes',
              tableKey: 'table'
            },
            {
              elementKey: 'notes',
              fqn: 'progressNotes.table.notes',
              inputType: 'textarea',
              label: 'Progress notes',
              tableColumn: '6',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'progressNotes',
              dataParent: 'progressNotes.table',
              page: 'Progress notes',
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
                    fqn: 'progressNotes.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formCss: 'user_name',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes.table',
                    page: 'Progress notes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'progressNotes.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formCss: 'user_pro',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes.table',
                    page: 'Progress notes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'progressNotes.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formCss: 'user_day',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes.table',
                    page: 'Progress notes',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'progressNotes.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formCss: 'user_time',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes.table',
                    page: 'Progress notes',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'notes',
                    fqn: 'progressNotes.table.notes',
                    inputType: 'textarea',
                    label: 'Progress notes',
                    tableColumn: '6',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'progressNotes',
                    dataParent: 'progressNotes.table',
                    page: 'Progress notes',
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
    carePlan: {
      pageTitle: 'Care Plan',
      pageDataKey: 'carePlan',
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: '1',
            elements: [
              {
                elementKey: 'goal',
                fqn: 'carePlan.goal',
                inputType: 'text',
                label: 'Goal of care',
                formCss: 'width-80',
                formColumn: '1',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care'
              },
              {
                elementKey: 'status',
                fqn: 'carePlan.status',
                inputType: 'select',
                label: 'Status',
                formCss: 'width-20',
                formColumn: '2',
                formRow: '1',
                pageDataKey: 'carePlan',
                dataParent: 'carePlan',
                page: 'Interprofessional plan of care',
                options: [
                  {
                    text: 'Active'
                  },
                  {
                    text: 'In progress'
                  },
                  {
                    text: 'Complete'
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 2
      },
      hasTable: true,
      tables: [
        {
          tableKey: 'table',
          addButtonText: 'Add new care plan',
          tableCells: [
            {
              elementKey: 'name',
              fqn: 'carePlan.table.name',
              inputType: 'text',
              label: 'Name',
              tableColumn: '1',
              formColumn: '1',
              formRow: '1',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'profession',
              fqn: 'carePlan.table.profession',
              inputType: 'text',
              label: 'Profession',
              tableColumn: '2',
              formColumn: '2',
              formRow: '1',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'day',
              fqn: 'carePlan.table.day',
              inputType: 'day',
              label: 'Day',
              tableColumn: '3',
              formColumn: '3',
              formRow: '1',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'time',
              fqn: 'carePlan.table.time',
              inputType: 'time',
              label: 'Time',
              tableColumn: '4',
              formColumn: '4',
              formRow: '1',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'clinical',
              fqn: 'carePlan.table.clinical',
              inputType: 'textarea',
              label: 'Clinical Issues',
              tableColumn: '5',
              formColumn: '1',
              formRow: '2',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'details',
              fqn: 'carePlan.table.details',
              inputType: 'textarea',
              label: 'Details of clinical issue',
              tableColumn: '6',
              formColumn: '2',
              formRow: '2',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'interventions',
              fqn: 'carePlan.table.interventions',
              inputType: 'textarea',
              label: 'Interventions',
              tableColumn: '7',
              formColumn: '1',
              formRow: '3',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
              tableKey: 'table'
            },
            {
              elementKey: 'evaluation',
              fqn: 'carePlan.table.evaluation',
              inputType: 'textarea',
              label: 'Evaluation of intervention',
              tableColumn: '8',
              formColumn: '2',
              formRow: '3',
              pageDataKey: 'carePlan',
              dataParent: 'carePlan.table',
              page: 'Interprofessional plan of care',
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
                    fqn: 'carePlan.table.name',
                    inputType: 'text',
                    label: 'Name',
                    tableColumn: '1',
                    formColumn: '1',
                    formRow: '1',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'profession',
                    fqn: 'carePlan.table.profession',
                    inputType: 'text',
                    label: 'Profession',
                    tableColumn: '2',
                    formColumn: '2',
                    formRow: '1',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'day',
                    fqn: 'carePlan.table.day',
                    inputType: 'day',
                    label: 'Day',
                    tableColumn: '3',
                    formColumn: '3',
                    formRow: '1',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'time',
                    fqn: 'carePlan.table.time',
                    inputType: 'time',
                    label: 'Time',
                    tableColumn: '4',
                    formColumn: '4',
                    formRow: '1',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '2',
                elements: [
                  {
                    elementKey: 'clinical',
                    fqn: 'carePlan.table.clinical',
                    inputType: 'textarea',
                    label: 'Clinical Issues',
                    tableColumn: '5',
                    formColumn: '1',
                    formRow: '2',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'details',
                    fqn: 'carePlan.table.details',
                    inputType: 'textarea',
                    label: 'Details of clinical issue',
                    tableColumn: '6',
                    formColumn: '2',
                    formRow: '2',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  }
                ]
              },
              {
                formRow: '3',
                elements: [
                  {
                    elementKey: 'interventions',
                    fqn: 'carePlan.table.interventions',
                    inputType: 'textarea',
                    label: 'Interventions',
                    tableColumn: '7',
                    formColumn: '1',
                    formRow: '3',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
                    tableKey: 'table'
                  },
                  {
                    elementKey: 'evaluation',
                    fqn: 'carePlan.table.evaluation',
                    inputType: 'textarea',
                    label: 'Evaluation of intervention',
                    tableColumn: '8',
                    formColumn: '2',
                    formRow: '3',
                    pageDataKey: 'carePlan',
                    dataParent: 'carePlan.table',
                    page: 'Interprofessional plan of care',
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
    consultants: {
      pageTitle: 'Consults',
      pageDataKey: 'consultants',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    labResults: {
      pageTitle: 'Laboratory results',
      pageDataKey: 'labResults',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    medicalImaging: {
      pageTitle: 'Medical imaging',
      pageDataKey: 'medicalImaging',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    },
    operationReports: {
      pageTitle: 'Operative reports and anaesthesia record',
      pageDataKey: 'operationReports',
      hasForm: true,
      page_form: {
        rows: [],
        columnsCount: 0
      },
      pageData: {}
    }
  }
}
