/* eslint-disable quotes */
export default function () {
  return {
    visit: {
      pageTitle: "Visit details",
      pageDataKey: "visit",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                elementKey: "admissionDay",
                fqn: "visit.admissionDay",
                inputType: "day",
                label: "Admission day",
                formColumn: "1",
                formRow: "1",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details",
                mandatory: "yes"
              },
              {
                elementKey: "admissionTime",
                fqn: "visit.admissionTime",
                inputType: "time",
                label: "Admission time",
                formColumn: "2",
                formRow: "1",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details",
                mandatory: "yes"
              },
              {
                elementKey: "consentForTreatment",
                fqn: "visit.consentForTreatment",
                inputType: "checkbox",
                label: "Consent for treatment",
                formColumn: "3",
                formRow: "1",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                elementKey: "consentForBlood",
                fqn: "visit.consentForBlood",
                inputType: "checkbox",
                label: "Consent for blood products",
                formColumn: "3",
                formRow: "2",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                elementKey: "diagnosis",
                fqn: "visit.diagnosis",
                inputType: "textarea",
                label: "Physician diagnosis",
                formCss: "is-two-thirds",
                formColumn: "1",
                formRow: "3",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details"
              },
              {
                elementKey: "status",
                fqn: "visit.status",
                inputType: "select",
                label: "Admission status",
                formColumn: "3",
                formRow: "3",
                pageDataKey: "visit",
                dataParent: "visit",
                page: "Visit details",
                mandatory: "yes",
                options: [
                  {
                    text: "Admission in progress"
                  },
                  {
                    text: "Admitted"
                  },
                  {
                    text: "Inpatient"
                  },
                  {
                    text: "Outpatient"
                  },
                  {
                    text: "Surgical day care"
                  },
                  {
                    text: "Discharge pending"
                  },
                  {
                    text: "Discharged"
                  }
                ]
              }
            ]
          }
        ],
        columnsCount: 3
      },
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a patient location",
          tableCells: [
            {
              elementKey: "location",
              fqn: "visit.table.location",
              inputType: "text",
              label: "Patient location",
              tableColumn: "1",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "visit",
              dataParent: "visit.table",
              level2Key: "table",
              page: "Visit details",
              mandatory: "yes",
              helperText: "hospital, ward #, room #, home, out patient clinic",
              tableKey: "table"
            },
            {
              elementKey: "transferInDay",
              fqn: "visit.table.transferInDay",
              inputType: "day",
              label: "Transfer in day",
              tableColumn: "2",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "visit",
              dataParent: "visit.table",
              level2Key: "table",
              page: "Visit details",
              tableKey: "table"
            },
            {
              elementKey: "transferInTime",
              fqn: "visit.table.transferInTime",
              inputType: "time",
              label: "Transfer in time",
              tableColumn: "3",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "visit",
              dataParent: "visit.table",
              level2Key: "table",
              page: "Visit details",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "location",
                    fqn: "visit.table.location",
                    inputType: "text",
                    label: "Patient location",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "visit",
                    dataParent: "visit.table",
                    level2Key: "table",
                    page: "Visit details",
                    mandatory: "yes",
                    helperText: "hospital, ward #, room #, home, out patient clinic",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferInDay",
                    fqn: "visit.table.transferInDay",
                    inputType: "day",
                    label: "Transfer in day",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "visit",
                    dataParent: "visit.table",
                    level2Key: "table",
                    page: "Visit details",
                    tableKey: "table"
                  },
                  {
                    elementKey: "transferInTime",
                    fqn: "visit.table.transferInTime",
                    inputType: "time",
                    label: "Transfer in time",
                    tableColumn: "3",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "visit",
                    dataParent: "visit.table",
                    level2Key: "table",
                    page: "Visit details",
                    tableKey: "table"
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
    vitals: {
      pageTitle: "Vital signs",
      pageDataKey: "vitals",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add vital signs",
          tableCells: [
            {
              elementKey: "name",
              fqn: "vitals.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "vitals.table.day",
              inputType: "text",
              label: "Day",
              tableColumn: "1",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "vitals.table.time",
              inputType: "text",
              label: "Time",
              tableColumn: "1",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "temperature",
              fqn: "vitals.table.temperature",
              inputType: "text",
              label: "Temperature",
              tableColumn: "1",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "vitals.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "1",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "source",
              fqn: "vitals.table.source",
              inputType: "select",
              label: "Temperature source",
              tableColumn: "2",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              options: [
                {
                  text: "oral"
                },
                {
                  text: "axilla"
                },
                {
                  text: "rectal"
                },
                {
                  text: "tympanic"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "rate",
              fqn: "vitals.table.rate",
              inputType: "text",
              label: "Pulse rate",
              tableColumn: "3",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "rhythm",
              fqn: "vitals.table.rhythm",
              inputType: "select",
              label: "Pulse rhythm",
              tableColumn: "4",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              options: [
                {
                  text: "regular"
                },
                {
                  text: "irregular"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "strength",
              fqn: "vitals.table.strength",
              inputType: "select",
              label: "Pulse site",
              tableColumn: "5",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              options: [
                {
                  text: "peripheral"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "systolic",
              fqn: "vitals.table.systolic",
              inputType: "text",
              label: "Systolic blood pressure",
              tableColumn: "6",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "diastolic",
              fqn: "vitals.table.diastolic",
              inputType: "text",
              label: "Diastolic blood pressure",
              tableColumn: "7",
              formColumn: "2",
              formRow: "4",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "patientPosition",
              fqn: "vitals.table.patientPosition",
              inputType: "select",
              label: "Patient position",
              tableColumn: "8",
              formColumn: "3",
              formRow: "4",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              options: [
                {
                  text: "supine"
                },
                {
                  text: "sitting"
                },
                {
                  text: "standing"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "respirationRate",
              fqn: "vitals.table.respirationRate",
              inputType: "text",
              label: "Respiration rate",
              tableColumn: "9",
              formColumn: "1",
              formRow: "5",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "oxygenSaturation",
              fqn: "vitals.table.oxygenSaturation",
              inputType: "text",
              label: "Oxygen saturation",
              tableColumn: "10",
              formColumn: "1",
              formRow: "6",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              tableKey: "table"
            },
            {
              elementKey: "oxygenMode",
              fqn: "vitals.table.oxygenMode",
              inputType: "select",
              label: "Oxygen mode",
              tableColumn: "11",
              formColumn: "2",
              formRow: "6",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
              options: [
                {
                  text: "room air"
                },
                {
                  text: "nasal prongs"
                },
                {
                  text: "simple face mask"
                },
                {
                  text: "rebreathing face mask"
                },
                {
                  text: "optiflow"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "flowRate",
              fqn: "vitals.table.flowRate",
              inputType: "text",
              label: "Flow rate",
              tableColumn: "12",
              formColumn: "3",
              formRow: "6",
              pageDataKey: "vitals",
              dataParent: "vitals.table",
              level2Key: "table",
              page: "Vital signs",
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
                    fqn: "vitals.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "vitals.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "1",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "vitals.table.day",
                    inputType: "text",
                    label: "Day",
                    tableColumn: "1",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "vitals.table.time",
                    inputType: "text",
                    label: "Time",
                    tableColumn: "1",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "temperature",
                    fqn: "vitals.table.temperature",
                    inputType: "text",
                    label: "Temperature",
                    tableColumn: "1",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "source",
                    fqn: "vitals.table.source",
                    inputType: "select",
                    label: "Temperature source",
                    tableColumn: "2",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    options: [
                      {
                        text: "oral"
                      },
                      {
                        text: "axilla"
                      },
                      {
                        text: "rectal"
                      },
                      {
                        text: "tympanic"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "rhythm",
                    fqn: "vitals.table.rhythm",
                    inputType: "select",
                    label: "Pulse rhythm",
                    tableColumn: "4",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    options: [
                      {
                        text: "regular"
                      },
                      {
                        text: "irregular"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "strength",
                    fqn: "vitals.table.strength",
                    inputType: "select",
                    label: "Pulse site",
                    tableColumn: "5",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    options: [
                      {
                        text: "peripheral"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "rate",
                    fqn: "vitals.table.rate",
                    inputType: "text",
                    label: "Pulse rate",
                    tableColumn: "3",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "systolic",
                    fqn: "vitals.table.systolic",
                    inputType: "text",
                    label: "Systolic blood pressure",
                    tableColumn: "6",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "diastolic",
                    fqn: "vitals.table.diastolic",
                    inputType: "text",
                    label: "Diastolic blood pressure",
                    tableColumn: "7",
                    formColumn: "2",
                    formRow: "4",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "patientPosition",
                    fqn: "vitals.table.patientPosition",
                    inputType: "select",
                    label: "Patient position",
                    tableColumn: "8",
                    formColumn: "3",
                    formRow: "4",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    options: [
                      {
                        text: "supine"
                      },
                      {
                        text: "sitting"
                      },
                      {
                        text: "standing"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "respirationRate",
                    fqn: "vitals.table.respirationRate",
                    inputType: "text",
                    label: "Respiration rate",
                    tableColumn: "9",
                    formColumn: "1",
                    formRow: "5",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    elementKey: "oxygenSaturation",
                    fqn: "vitals.table.oxygenSaturation",
                    inputType: "text",
                    label: "Oxygen saturation",
                    tableColumn: "10",
                    formColumn: "1",
                    formRow: "6",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    tableKey: "table"
                  },
                  {
                    elementKey: "oxygenMode",
                    fqn: "vitals.table.oxygenMode",
                    inputType: "select",
                    label: "Oxygen mode",
                    tableColumn: "11",
                    formColumn: "2",
                    formRow: "6",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
                    options: [
                      {
                        text: "room air"
                      },
                      {
                        text: "nasal prongs"
                      },
                      {
                        text: "simple face mask"
                      },
                      {
                        text: "rebreathing face mask"
                      },
                      {
                        text: "optiflow"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "flowRate",
                    fqn: "vitals.table.flowRate",
                    inputType: "text",
                    label: "Flow rate",
                    tableColumn: "12",
                    formColumn: "3",
                    formRow: "6",
                    pageDataKey: "vitals",
                    dataParent: "vitals.table",
                    level2Key: "table",
                    page: "Vital signs",
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
    fluidBalance: {
      pageTitle: "Fluid balance",
      pageDataKey: "fluidBalance",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a fluid in/out record",
          tableCells: [
            {
              elementKey: "name",
              fqn: "fluidBalance.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "fluidBalance.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "fluidBalance.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "fluidBalance.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
              tableKey: "table"
            },
            {
              elementKey: "fluidIn",
              fqn: "fluidBalance.table.fluidIn",
              inputType: "text",
              label: "Fluid In",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
              tableKey: "table"
            },
            {
              elementKey: "fluidOut",
              fqn: "fluidBalance.table.fluidOut",
              inputType: "text",
              label: "Fluid Out",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "fluidBalance",
              dataParent: "fluidBalance.table",
              level2Key: "table",
              page: "Fluid balance",
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
                    fqn: "fluidBalance.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "fluidBalance.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "fluidBalance.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "fluidBalance.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "fluidIn",
                    fqn: "fluidBalance.table.fluidIn",
                    inputType: "text",
                    label: "Fluid In",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
                    tableKey: "table"
                  },
                  {
                    elementKey: "fluidOut",
                    fqn: "fluidBalance.table.fluidOut",
                    inputType: "text",
                    label: "Fluid Out",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "fluidBalance",
                    dataParent: "fluidBalance.table",
                    level2Key: "table",
                    page: "Fluid balance",
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
    neurological: {
      pageTitle: "Neurological assessment",
      pageDataKey: "neurological",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a neurological assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "neurological.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "neurological.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "neurological.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "neurological.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table"
            },
            {
              elementKey: "status",
              fqn: "neurological.table.status",
              inputType: "fieldset",
              label: "Status",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              containerType: "fieldset",
              containerKey: "status",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "alert",
              fqn: "neurological.table.status.alert",
              inputType: "checkbox",
              label: "Alert",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "oriented",
              fqn: "neurological.table.status.oriented",
              inputType: "checkbox",
              label: "Oriented",
              tableColumn: "7",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "confused",
              fqn: "neurological.table.status.confused",
              inputType: "checkbox",
              label: "Confused",
              tableColumn: "8",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "drowsy",
              fqn: "neurological.table.status.drowsy",
              inputType: "checkbox",
              label: "Drowsy",
              tableColumn: "9",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "unresponsive",
              fqn: "neurological.table.status.unresponsive",
              inputType: "checkbox",
              label: "Unresponsive",
              tableColumn: "10",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "dizziness",
              fqn: "neurological.table.status.dizziness",
              inputType: "checkbox",
              label: "Dizziness",
              tableColumn: "11",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "blurredVision",
              fqn: "neurological.table.status.blurredVision",
              inputType: "checkbox",
              label: "Blurred vision",
              tableColumn: "12",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.status",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale",
              inputType: "fieldset",
              label: "Glasgow Coma Scale",
              tableColumn: "13",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              containerType: "fieldset",
              containerKey: "glasgowComaScale",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "eyeOpening",
              fqn: "neurological.table.glasgowComaScale.eyeOpening",
              inputType: "select",
              label: "Eye opening",
              tableColumn: "14",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Spontaneous"
                },
                {
                  text: "To sound"
                },
                {
                  text: "To pressure"
                },
                {
                  text: "None"
                },
                {
                  text: "Non testable"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "verbalResponse",
              fqn: "neurological.table.glasgowComaScale.verbalResponse",
              inputType: "select",
              label: "Verbal response",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Oriented"
                },
                {
                  text: "Confused"
                },
                {
                  text: "Words"
                },
                {
                  text: "Sounds"
                },
                {
                  text: "None"
                },
                {
                  text: "Non testable"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bestMotorResponse",
              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
              inputType: "select",
              label: "Best motor response",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Obeys commands"
                },
                {
                  text: "Localising"
                },
                {
                  text: "Normal flexion"
                },
                {
                  text: "Extension"
                },
                {
                  text: "None"
                },
                {
                  text: "Non testable"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "totalGlasgow",
              fqn: "neurological.table.glasgowComaScale.totalGlasgow",
              inputType: "calculated",
              label: "Total",
              tableColumn: "17",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "loss",
              fqn: "neurological.table.glasgowComaScale.loss",
              inputType: "select",
              label: "Loss of conciousness",
              tableColumn: "18",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Yes"
                },
                {
                  text: "Unknown"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "pupils",
              fqn: "neurological.table.pupils",
              inputType: "fieldRowSet",
              label: "Pupils",
              tableColumn: "18",
              formCss: "fieldset_row",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              containerType: "fieldRowSet",
              containerKey: "pupils",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "duration",
              fqn: "neurological.table.glasgowComaScale.duration",
              inputType: "text",
              label: "Duration",
              tableColumn: "19",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.glasgowComaScale",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "leftPupilSize",
              fqn: "neurological.table.pupils.leftPupilSize",
              inputType: "select",
              label: "Left pupil size",
              tableColumn: "19",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "1"
                },
                {
                  text: "2"
                },
                {
                  text: "3"
                },
                {
                  text: "4"
                },
                {
                  text: "5"
                },
                {
                  text: "6"
                },
                {
                  text: "7"
                },
                {
                  text: "8"
                },
                {
                  text: "9"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "leftPupilResponseToLight",
              fqn: "neurological.table.pupils.leftPupilResponseToLight",
              inputType: "select",
              label: "Left pupil response to light",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Brisk"
                },
                {
                  text: "Sluggish"
                },
                {
                  text: "Fixed"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "rightPupilSize",
              fqn: "neurological.table.pupils.rightPupilSize",
              inputType: "select",
              label: "Right pupil size",
              tableColumn: "21",
              fsetRow: "1",
              fsetCol: "2",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "1"
                },
                {
                  text: "2"
                },
                {
                  text: "3"
                },
                {
                  text: "4"
                },
                {
                  text: "5"
                },
                {
                  text: "6"
                },
                {
                  text: "7"
                },
                {
                  text: "8"
                },
                {
                  text: "9"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "rightPupilResponseToLight",
              fqn: "neurological.table.pupils.rightPupilResponseToLight",
              inputType: "select",
              label: "Right pupil response to light",
              tableColumn: "22",
              fsetRow: "2",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Brisk"
                },
                {
                  text: "Sluggish"
                },
                {
                  text: "Fixed"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "bothPupils",
              fqn: "neurological.table.pupils.bothPupils",
              inputType: "select",
              label: "Both pupils",
              tableColumn: "23",
              fsetRow: "1",
              fsetCol: "3",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "Equal"
                },
                {
                  text: "Unequal"
                }
              ],
              tableKey: "table",
              formColumn: "3"
            },
            {
              elementKey: "aSpacer",
              fqn: "neurological.table.pupils.aSpacer",
              inputType: "spacer",
              tableColumn: "24",
              fsetRow: "2",
              fsetCol: "2",
              pageDataKey: "neurological",
              dataParent: "neurological.table.pupils",
              level2Key: "table",
              page: "Neurological assessment",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "stroke",
              fqn: "neurological.table.stroke",
              inputType: "fieldRowSet",
              label: "Stroke Assessment",
              tableColumn: "24",
              formCss: "fieldset_row",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              containerType: "fieldRowSet",
              containerKey: "stroke",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "levelOfConciousness",
              fqn: "neurological.table.stroke.levelOfConciousness",
              inputType: "select",
              label: "Level of conciousness",
              tableColumn: "25",
              fsetRow: "1",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Alert; keenly responsive"
                },
                {
                  text: "1 = Not alert; but arousable by minor stimulation"
                },
                {
                  text: "2 = Not alert; requires repeated stimulation"
                },
                {
                  text: "3 = Unresponsive or responds only with reflex"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bestGaze",
              fqn: "neurological.table.stroke.bestGaze",
              inputType: "select",
              label: "Best gaze",
              tableColumn: "26",
              fsetRow: "1",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Normal"
                },
                {
                  text: "1 = Partial gaze palsy"
                },
                {
                  text: "2 = Forced deviation"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "levelOfConciousnessQuestions",
              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
              inputType: "select",
              label: "Level of conciousness questions",
              tableColumn: "27",
              fsetRow: "2",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = answers two questions correctly"
                },
                {
                  text: "1 = Answers one question correctly"
                },
                {
                  text: "2 = Answers neither question correctly"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "visual",
              fqn: "neurological.table.stroke.visual",
              inputType: "select",
              label: "Visual",
              tableColumn: "28",
              fsetRow: "2",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No visual loss"
                },
                {
                  text: "1 = Partial hemianopia"
                },
                {
                  text: "2 = Partial paralysis"
                },
                {
                  text: "3 = Complete paralysis of one or both sides"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "levelOfConciousnessCommands",
              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
              inputType: "select",
              label: "Level of conciousness commands",
              tableColumn: "29",
              fsetRow: "3",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Performs both tasks correctly"
                },
                {
                  text: "1 = Performs one task correctly"
                },
                {
                  text: "2 = Performs neither task correctly"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "facialPalsy",
              fqn: "neurological.table.stroke.facialPalsy",
              inputType: "select",
              label: "Facial palsy",
              tableColumn: "30",
              fsetRow: "3",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Normal symmetric movements"
                },
                {
                  text: "1 = Minor paralysis"
                },
                {
                  text: "2 = Partial paralysis"
                },
                {
                  text: "3 = Complete paralysis of one or both sides"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "motorLeftArm",
              fqn: "neurological.table.stroke.motorLeftArm",
              inputType: "select",
              label: "Motor - left arm",
              tableColumn: "31",
              fsetRow: "4",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity; limb falls"
                },
                {
                  text: "4 = No movement"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "sensory",
              fqn: "neurological.table.stroke.sensory",
              inputType: "select",
              label: "Sensory",
              tableColumn: "32",
              fsetRow: "4",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Normal; no sensory loss"
                },
                {
                  text: "1 = Mild-to-moderate sensory loss"
                },
                {
                  text: "2 = Severe to total sensory loss"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "motorRightArm",
              fqn: "neurological.table.stroke.motorRightArm",
              inputType: "select",
              label: "Motor - right arm",
              tableColumn: "33",
              fsetRow: "5",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity; limb falls"
                },
                {
                  text: "4 = No movement"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bestLanguage",
              fqn: "neurological.table.stroke.bestLanguage",
              inputType: "select",
              label: "Best language",
              tableColumn: "34",
              fsetRow: "5",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No aphasia; normal"
                },
                {
                  text: "1 = Mild to moderate aphasia"
                },
                {
                  text: "2 = Severe aphasia"
                },
                {
                  text: "3 = Mute, global aphasia"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "motorLeftLeg",
              fqn: "neurological.table.stroke.motorLeftLeg",
              inputType: "select",
              label: "Motor - left leg",
              tableColumn: "35",
              fsetRow: "6",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity"
                },
                {
                  text: "4 = No movement"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "dysarthria",
              fqn: "neurological.table.stroke.dysarthria",
              inputType: "select",
              label: "Dysarthria",
              tableColumn: "36",
              fsetRow: "6",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Normal"
                },
                {
                  text: "1 = Mild to moderate aphasia"
                },
                {
                  text: "2 = Severe aphasia"
                },
                {
                  text: "3 = Mute, global aphasia"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "motorRightLeg",
              fqn: "neurological.table.stroke.motorRightLeg",
              inputType: "select",
              label: "Motor - right leg",
              tableColumn: "37",
              fsetRow: "7",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No drift"
                },
                {
                  text: "1 = Drift"
                },
                {
                  text: "2 = Some effort against gravity"
                },
                {
                  text: "3 = No effort against gravity"
                },
                {
                  text: "4 = No movement"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "extinctionAndInattention",
              fqn: "neurological.table.stroke.extinctionAndInattention",
              inputType: "select",
              label: "Extinction and inattention",
              tableColumn: "38",
              fsetRow: "7",
              fsetCol: "2",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = No abnormality"
                },
                {
                  text: "1 = visual, tactile, auditory, spatial, or personal inattention"
                },
                {
                  text: "2 = Profound hemi-inattention or extinction"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "limbAtaxia",
              fqn: "neurological.table.stroke.limbAtaxia",
              inputType: "select",
              label: "Limb ataxia",
              tableColumn: "39",
              fsetRow: "8",
              fsetCol: "1",
              formCss: "is-half",
              pageDataKey: "neurological",
              dataParent: "neurological.table.stroke",
              level2Key: "table",
              page: "Neurological assessment",
              options: [
                {
                  text: "0 = Absent"
                },
                {
                  text: "1 = Present in one limb"
                },
                {
                  text: "2 = Present in two limbs"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "comments",
              fqn: "neurological.table.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "40",
              fsetRow: "9",
              fsetCol: "1",
              formCss: "is-two-thirds",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableKey: "table"
            },
            {
              elementKey: "resources",
              fqn: "neurological.table.resources",
              inputType: "form-label",
              label: "<b>Resources</b><p>Morse Fall Score <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p><p>Mini-mental state examination (MMSE) <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p>",
              tableColumn: "41",
              fsetRow: "9",
              fsetCol: "2",
              formCss: "is-one-third",
              formOption: "withExternalUrls",
              pageDataKey: "neurological",
              dataParent: "neurological.table",
              level2Key: "table",
              page: "Neurological assessment",
              tableCss: "hide-table-element",
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
                    fqn: "neurological.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "neurological.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "neurological.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "neurological.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "status",
                    fqn: "neurological.table.status",
                    inputType: "fieldset",
                    label: "Status",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    containerType: "fieldset",
                    containerKey: "status",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "alert",
                              fqn: "neurological.table.status.alert",
                              inputType: "checkbox",
                              label: "Alert",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "oriented",
                              fqn: "neurological.table.status.oriented",
                              inputType: "checkbox",
                              label: "Oriented",
                              tableColumn: "7",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "confused",
                              fqn: "neurological.table.status.confused",
                              inputType: "checkbox",
                              label: "Confused",
                              tableColumn: "8",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "drowsy",
                              fqn: "neurological.table.status.drowsy",
                              inputType: "checkbox",
                              label: "Drowsy",
                              tableColumn: "9",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "unresponsive",
                              fqn: "neurological.table.status.unresponsive",
                              inputType: "checkbox",
                              label: "Unresponsive",
                              tableColumn: "10",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "dizziness",
                              fqn: "neurological.table.status.dizziness",
                              inputType: "checkbox",
                              label: "Dizziness",
                              tableColumn: "11",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "blurredVision",
                              fqn: "neurological.table.status.blurredVision",
                              inputType: "checkbox",
                              label: "Blurred vision",
                              tableColumn: "12",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.status",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "glasgowComaScale",
                    fqn: "neurological.table.glasgowComaScale",
                    inputType: "fieldset",
                    label: "Glasgow Coma Scale",
                    tableColumn: "13",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    containerType: "fieldset",
                    containerKey: "glasgowComaScale",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "eyeOpening",
                              fqn: "neurological.table.glasgowComaScale.eyeOpening",
                              inputType: "select",
                              label: "Eye opening",
                              tableColumn: "14",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Spontaneous"
                                },
                                {
                                  text: "To sound"
                                },
                                {
                                  text: "To pressure"
                                },
                                {
                                  text: "None"
                                },
                                {
                                  text: "Non testable"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "loss",
                              fqn: "neurological.table.glasgowComaScale.loss",
                              inputType: "select",
                              label: "Loss of conciousness",
                              tableColumn: "18",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "No"
                                },
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "Unknown"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "verbalResponse",
                              fqn: "neurological.table.glasgowComaScale.verbalResponse",
                              inputType: "select",
                              label: "Verbal response",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Oriented"
                                },
                                {
                                  text: "Confused"
                                },
                                {
                                  text: "Words"
                                },
                                {
                                  text: "Sounds"
                                },
                                {
                                  text: "None"
                                },
                                {
                                  text: "Non testable"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "duration",
                              fqn: "neurological.table.glasgowComaScale.duration",
                              inputType: "text",
                              label: "Duration",
                              tableColumn: "19",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "bestMotorResponse",
                              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
                              inputType: "select",
                              label: "Best motor response",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Obeys commands"
                                },
                                {
                                  text: "Localising"
                                },
                                {
                                  text: "Normal flexion"
                                },
                                {
                                  text: "Extension"
                                },
                                {
                                  text: "None"
                                },
                                {
                                  text: "Non testable"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "totalGlasgow",
                              fqn: "neurological.table.glasgowComaScale.totalGlasgow",
                              inputType: "calculated",
                              label: "Total",
                              tableColumn: "17",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.glasgowComaScale",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableKey: "table",
                              formColumn: "1"
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
                formRow: "3",
                elements: [
                  {
                    elementKey: "pupils",
                    fqn: "neurological.table.pupils",
                    inputType: "fieldRowSet",
                    label: "Pupils",
                    tableColumn: "18",
                    formCss: "fieldset_row",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    containerType: "fieldRowSet",
                    containerKey: "pupils",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "leftPupilSize",
                              fqn: "neurological.table.pupils.leftPupilSize",
                              inputType: "select",
                              label: "Left pupil size",
                              tableColumn: "19",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "1"
                                },
                                {
                                  text: "2"
                                },
                                {
                                  text: "3"
                                },
                                {
                                  text: "4"
                                },
                                {
                                  text: "5"
                                },
                                {
                                  text: "6"
                                },
                                {
                                  text: "7"
                                },
                                {
                                  text: "8"
                                },
                                {
                                  text: "9"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "rightPupilSize",
                              fqn: "neurological.table.pupils.rightPupilSize",
                              inputType: "select",
                              label: "Right pupil size",
                              tableColumn: "21",
                              fsetRow: "1",
                              fsetCol: "2",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "1"
                                },
                                {
                                  text: "2"
                                },
                                {
                                  text: "3"
                                },
                                {
                                  text: "4"
                                },
                                {
                                  text: "5"
                                },
                                {
                                  text: "6"
                                },
                                {
                                  text: "7"
                                },
                                {
                                  text: "8"
                                },
                                {
                                  text: "9"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              elementKey: "bothPupils",
                              fqn: "neurological.table.pupils.bothPupils",
                              inputType: "select",
                              label: "Both pupils",
                              tableColumn: "23",
                              fsetRow: "1",
                              fsetCol: "3",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Equal"
                                },
                                {
                                  text: "Unequal"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "leftPupilResponseToLight",
                              fqn: "neurological.table.pupils.leftPupilResponseToLight",
                              inputType: "select",
                              label: "Left pupil response to light",
                              tableColumn: "20",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Brisk"
                                },
                                {
                                  text: "Sluggish"
                                },
                                {
                                  text: "Fixed"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "rightPupilResponseToLight",
                              fqn: "neurological.table.pupils.rightPupilResponseToLight",
                              inputType: "select",
                              label: "Right pupil response to light",
                              tableColumn: "22",
                              fsetRow: "2",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "Brisk"
                                },
                                {
                                  text: "Sluggish"
                                },
                                {
                                  text: "Fixed"
                                }
                              ],
                              tableKey: "table"
                            },
                            {
                              elementKey: "aSpacer",
                              fqn: "neurological.table.pupils.aSpacer",
                              inputType: "spacer",
                              tableColumn: "24",
                              fsetRow: "2",
                              fsetCol: "2",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.pupils",
                              level2Key: "table",
                              page: "Neurological assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "2"
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
                formRow: "4",
                elements: [
                  {
                    elementKey: "stroke",
                    fqn: "neurological.table.stroke",
                    inputType: "fieldRowSet",
                    label: "Stroke Assessment",
                    tableColumn: "24",
                    formCss: "fieldset_row",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "neurological",
                    dataParent: "neurological.table",
                    level2Key: "table",
                    page: "Neurological assessment",
                    containerType: "fieldRowSet",
                    containerKey: "stroke",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "levelOfConciousness",
                              fqn: "neurological.table.stroke.levelOfConciousness",
                              inputType: "select",
                              label: "Level of conciousness",
                              tableColumn: "25",
                              fsetRow: "1",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Alert; keenly responsive"
                                },
                                {
                                  text: "1 = Not alert; but arousable by minor stimulation"
                                },
                                {
                                  text: "2 = Not alert; requires repeated stimulation"
                                },
                                {
                                  text: "3 = Unresponsive or responds only with reflex"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "bestGaze",
                              fqn: "neurological.table.stroke.bestGaze",
                              inputType: "select",
                              label: "Best gaze",
                              tableColumn: "26",
                              fsetRow: "1",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Normal"
                                },
                                {
                                  text: "1 = Partial gaze palsy"
                                },
                                {
                                  text: "2 = Forced deviation"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "levelOfConciousnessQuestions",
                              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
                              inputType: "select",
                              label: "Level of conciousness questions",
                              tableColumn: "27",
                              fsetRow: "2",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = answers two questions correctly"
                                },
                                {
                                  text: "1 = Answers one question correctly"
                                },
                                {
                                  text: "2 = Answers neither question correctly"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "visual",
                              fqn: "neurological.table.stroke.visual",
                              inputType: "select",
                              label: "Visual",
                              tableColumn: "28",
                              fsetRow: "2",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No visual loss"
                                },
                                {
                                  text: "1 = Partial hemianopia"
                                },
                                {
                                  text: "2 = Partial paralysis"
                                },
                                {
                                  text: "3 = Complete paralysis of one or both sides"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "levelOfConciousnessCommands",
                              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
                              inputType: "select",
                              label: "Level of conciousness commands",
                              tableColumn: "29",
                              fsetRow: "3",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Performs both tasks correctly"
                                },
                                {
                                  text: "1 = Performs one task correctly"
                                },
                                {
                                  text: "2 = Performs neither task correctly"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "facialPalsy",
                              fqn: "neurological.table.stroke.facialPalsy",
                              inputType: "select",
                              label: "Facial palsy",
                              tableColumn: "30",
                              fsetRow: "3",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Normal symmetric movements"
                                },
                                {
                                  text: "1 = Minor paralysis"
                                },
                                {
                                  text: "2 = Partial paralysis"
                                },
                                {
                                  text: "3 = Complete paralysis of one or both sides"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "motorLeftArm",
                              fqn: "neurological.table.stroke.motorLeftArm",
                              inputType: "select",
                              label: "Motor - left arm",
                              tableColumn: "31",
                              fsetRow: "4",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity; limb falls"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "sensory",
                              fqn: "neurological.table.stroke.sensory",
                              inputType: "select",
                              label: "Sensory",
                              tableColumn: "32",
                              fsetRow: "4",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Normal; no sensory loss"
                                },
                                {
                                  text: "1 = Mild-to-moderate sensory loss"
                                },
                                {
                                  text: "2 = Severe to total sensory loss"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "motorRightArm",
                              fqn: "neurological.table.stroke.motorRightArm",
                              inputType: "select",
                              label: "Motor - right arm",
                              tableColumn: "33",
                              fsetRow: "5",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity; limb falls"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "bestLanguage",
                              fqn: "neurological.table.stroke.bestLanguage",
                              inputType: "select",
                              label: "Best language",
                              tableColumn: "34",
                              fsetRow: "5",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No aphasia; normal"
                                },
                                {
                                  text: "1 = Mild to moderate aphasia"
                                },
                                {
                                  text: "2 = Severe aphasia"
                                },
                                {
                                  text: "3 = Mute, global aphasia"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "motorLeftLeg",
                              fqn: "neurological.table.stroke.motorLeftLeg",
                              inputType: "select",
                              label: "Motor - left leg",
                              tableColumn: "35",
                              fsetRow: "6",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "dysarthria",
                              fqn: "neurological.table.stroke.dysarthria",
                              inputType: "select",
                              label: "Dysarthria",
                              tableColumn: "36",
                              fsetRow: "6",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Normal"
                                },
                                {
                                  text: "1 = Mild to moderate aphasia"
                                },
                                {
                                  text: "2 = Severe aphasia"
                                },
                                {
                                  text: "3 = Mute, global aphasia"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "motorRightLeg",
                              fqn: "neurological.table.stroke.motorRightLeg",
                              inputType: "select",
                              label: "Motor - right leg",
                              tableColumn: "37",
                              fsetRow: "7",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No drift"
                                },
                                {
                                  text: "1 = Drift"
                                },
                                {
                                  text: "2 = Some effort against gravity"
                                },
                                {
                                  text: "3 = No effort against gravity"
                                },
                                {
                                  text: "4 = No movement"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "extinctionAndInattention",
                              fqn: "neurological.table.stroke.extinctionAndInattention",
                              inputType: "select",
                              label: "Extinction and inattention",
                              tableColumn: "38",
                              fsetRow: "7",
                              fsetCol: "2",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = No abnormality"
                                },
                                {
                                  text: "1 = visual, tactile, auditory, spatial, or personal inattention"
                                },
                                {
                                  text: "2 = Profound hemi-inattention or extinction"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              elementKey: "limbAtaxia",
                              fqn: "neurological.table.stroke.limbAtaxia",
                              inputType: "select",
                              label: "Limb ataxia",
                              tableColumn: "39",
                              fsetRow: "8",
                              fsetCol: "1",
                              formCss: "is-half",
                              pageDataKey: "neurological",
                              dataParent: "neurological.table.stroke",
                              level2Key: "table",
                              page: "Neurological assessment",
                              options: [
                                {
                                  text: "0 = Absent"
                                },
                                {
                                  text: "1 = Present in one limb"
                                },
                                {
                                  text: "2 = Present in two limbs"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
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
      pageTitle: "Respiratory assessment",
      pageDataKey: "respiratory",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a respiratory assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "respiratory.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "respiratory.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "respiratory.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "respiratory.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table"
            },
            {
              elementKey: "patent",
              fqn: "respiratory.table.airway.patent",
              inputType: "checkbox",
              label: "Patent",
              tableColumn: "5",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "obstructed",
              fqn: "respiratory.table.airway.obstructed",
              inputType: "checkbox",
              label: "Obstructed",
              tableColumn: "6",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "oett",
              fqn: "respiratory.table.airway.oett",
              inputType: "checkbox",
              label: "Oral endotracheal tube",
              tableColumn: "7",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "otherValue",
              fqn: "respiratory.table.airway.otherValue",
              inputType: "checkbox",
              label: "Other",
              tableColumn: "8",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "otherValue",
              fqn: "respiratory.table.airway.otherValue",
              inputType: "text",
              tableColumn: "9",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment"
            },
            {
              elementKey: "oxygenTherapy",
              fqn: "respiratory.table.airway.oxygenTherapy",
              inputType: "text",
              label: "Oxygen therapy",
              tableColumn: "10",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "oxygenFlow",
              fqn: "respiratory.table.airway.oxygenFlow",
              inputType: "text",
              label: "Oxygen flow",
              tableColumn: "11",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.airway",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "lul",
              fqn: "respiratory.table.breath.lul",
              inputType: "select",
              label: "Left upper lung",
              tableColumn: "12",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "rul",
              fqn: "respiratory.table.breath.rul",
              inputType: "select",
              label: "Right upper lung",
              tableColumn: "13",
              fsetRow: "1",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "airway",
              fqn: "respiratory.table.airway",
              inputType: "fieldset",
              label: "Airway",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              containerType: "fieldset",
              containerKey: "airway",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "breath",
              fqn: "respiratory.table.breath",
              inputType: "fieldset",
              label: "Breath sounds",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
              containerType: "fieldset",
              containerKey: "breath",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "aSpacer",
              fqn: "respiratory.table.breath.aSpacer",
              inputType: "spacer",
              tableColumn: "14",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "rml",
              fqn: "respiratory.table.breath.rml",
              inputType: "select",
              label: "Right middle lung",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "lll",
              fqn: "respiratory.table.breath.lll",
              inputType: "select",
              label: "Left lower lung",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "rll",
              fqn: "respiratory.table.breath.rll",
              inputType: "select",
              label: "Right lower lung",
              tableColumn: "17",
              fsetRow: "3",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Wheeze"
                },
                {
                  text: "Crackles"
                },
                {
                  text: "Absent"
                },
                {
                  text: "Deceased"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "respiratoryRhythm",
              fqn: "respiratory.table.breath.respiratoryRhythm",
              inputType: "select",
              label: "Respiratory rhythm",
              tableColumn: "18",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Irregular"
                },
                {
                  text: "Paradoxical"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "respiratoryDepth",
              fqn: "respiratory.table.breath.respiratoryDepth",
              inputType: "select",
              label: "Respiratory depth",
              tableColumn: "19",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Shallow"
                },
                {
                  text: "Deep"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "cough",
              fqn: "respiratory.table.breath.cough",
              inputType: "select",
              label: "Cough",
              tableColumn: "20",
              fsetRow: "4",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Nonreproductive"
                },
                {
                  text: "Productive"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "sputumColour",
              fqn: "respiratory.table.breath.sputumColour",
              inputType: "select",
              label: "Sputum colour",
              tableColumn: "21",
              fsetRow: "5",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              options: [
                {
                  text: "Mucoid"
                },
                {
                  text: "Purulent"
                },
                {
                  text: "Yellow-green"
                },
                {
                  text: "Rust-coloured"
                },
                {
                  text: "Pink, blood tinged"
                },
                {
                  text: "Pink, frothy"
                },
                {
                  text: "Profuse, colourless"
                },
                {
                  text: "Bloody"
                }
              ],
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "aSpacer",
              fqn: "respiratory.table.breath.aSpacer",
              inputType: "spacer",
              tableColumn: "22",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              tableCss: "hide-table-element"
            },
            {
              elementKey: "sputumComments",
              fqn: "respiratory.table.breath.sputumComments",
              inputType: "text",
              label: "Sputum comments",
              tableColumn: "23",
              fsetRow: "6",
              fsetCol: "2",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table.breath",
              level2Key: "table",
              page: "Respiratory assessment",
              tableKey: "table",
              formColumn: "2"
            },
            {
              elementKey: "generalComments",
              fqn: "respiratory.table.generalComments",
              inputType: "textarea",
              label: "General comments",
              tableColumn: "24",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "respiratory",
              dataParent: "respiratory.table",
              level2Key: "table",
              page: "Respiratory assessment",
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
                    fqn: "respiratory.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "respiratory.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "respiratory.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "respiratory.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "airway",
                    fqn: "respiratory.table.airway",
                    inputType: "fieldset",
                    label: "Airway",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    containerType: "fieldset",
                    containerKey: "airway",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "patent",
                              fqn: "respiratory.table.airway.patent",
                              inputType: "checkbox",
                              label: "Patent",
                              tableColumn: "5",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "obstructed",
                              fqn: "respiratory.table.airway.obstructed",
                              inputType: "checkbox",
                              label: "Obstructed",
                              tableColumn: "6",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "oett",
                              fqn: "respiratory.table.airway.oett",
                              inputType: "checkbox",
                              label: "Oral endotracheal tube",
                              tableColumn: "7",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "otherValue",
                              fqn: "respiratory.table.airway.otherValue",
                              inputType: "checkbox",
                              label: "Other",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "otherValue",
                              fqn: "respiratory.table.airway.otherValue",
                              inputType: "checkbox",
                              label: "Other",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "oxygenTherapy",
                              fqn: "respiratory.table.airway.oxygenTherapy",
                              inputType: "text",
                              label: "Oxygen therapy",
                              tableColumn: "10",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "oxygenFlow",
                              fqn: "respiratory.table.airway.oxygenFlow",
                              inputType: "text",
                              label: "Oxygen flow",
                              tableColumn: "11",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.airway",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "breath",
                    fqn: "respiratory.table.breath",
                    inputType: "fieldset",
                    label: "Breath sounds",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
                    containerType: "fieldset",
                    containerKey: "breath",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "lul",
                              fqn: "respiratory.table.breath.lul",
                              inputType: "select",
                              label: "Left upper lung",
                              tableColumn: "12",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "rul",
                              fqn: "respiratory.table.breath.rul",
                              inputType: "select",
                              label: "Right upper lung",
                              tableColumn: "13",
                              fsetRow: "1",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "aSpacer",
                              fqn: "respiratory.table.breath.aSpacer",
                              inputType: "spacer",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "rml",
                              fqn: "respiratory.table.breath.rml",
                              inputType: "select",
                              label: "Right middle lung",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "lll",
                              fqn: "respiratory.table.breath.lll",
                              inputType: "select",
                              label: "Left lower lung",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "rll",
                              fqn: "respiratory.table.breath.rll",
                              inputType: "select",
                              label: "Right lower lung",
                              tableColumn: "17",
                              fsetRow: "3",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Wheeze"
                                },
                                {
                                  text: "Crackles"
                                },
                                {
                                  text: "Absent"
                                },
                                {
                                  text: "Deceased"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "respiratoryRhythm",
                              fqn: "respiratory.table.breath.respiratoryRhythm",
                              inputType: "select",
                              label: "Respiratory rhythm",
                              tableColumn: "18",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Regular"
                                },
                                {
                                  text: "Irregular"
                                },
                                {
                                  text: "Paradoxical"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "cough",
                              fqn: "respiratory.table.breath.cough",
                              inputType: "select",
                              label: "Cough",
                              tableColumn: "20",
                              fsetRow: "4",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "No"
                                },
                                {
                                  text: "Nonreproductive"
                                },
                                {
                                  text: "Productive"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "respiratoryDepth",
                              fqn: "respiratory.table.breath.respiratoryDepth",
                              inputType: "select",
                              label: "Respiratory depth",
                              tableColumn: "19",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Normal"
                                },
                                {
                                  text: "Shallow"
                                },
                                {
                                  text: "Deep"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "sputumColour",
                              fqn: "respiratory.table.breath.sputumColour",
                              inputType: "select",
                              label: "Sputum colour",
                              tableColumn: "21",
                              fsetRow: "5",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              options: [
                                {
                                  text: "Mucoid"
                                },
                                {
                                  text: "Purulent"
                                },
                                {
                                  text: "Yellow-green"
                                },
                                {
                                  text: "Rust-coloured"
                                },
                                {
                                  text: "Pink, blood tinged"
                                },
                                {
                                  text: "Pink, frothy"
                                },
                                {
                                  text: "Profuse, colourless"
                                },
                                {
                                  text: "Bloody"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "aSpacer",
                              fqn: "respiratory.table.breath.aSpacer",
                              inputType: "spacer",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              elementKey: "sputumComments",
                              fqn: "respiratory.table.breath.sputumComments",
                              inputType: "text",
                              label: "Sputum comments",
                              tableColumn: "23",
                              fsetRow: "6",
                              fsetCol: "2",
                              pageDataKey: "respiratory",
                              dataParent: "respiratory.table.breath",
                              level2Key: "table",
                              page: "Respiratory assessment",
                              tableKey: "table",
                              formColumn: "2"
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
                formRow: "3",
                elements: [
                  {
                    elementKey: "generalComments",
                    fqn: "respiratory.table.generalComments",
                    inputType: "textarea",
                    label: "General comments",
                    tableColumn: "24",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "respiratory",
                    dataParent: "respiratory.table",
                    level2Key: "table",
                    page: "Respiratory assessment",
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
    cardiovascular: {
      pageTitle: "Cardiovascular assessment",
      pageDataKey: "cardiovascular",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a cardiovascular assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "cardiovascular.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "cardiovascular.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "cardiovascular.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "3",
              formRow: "1",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "cardiovascular.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableKey: "table"
            },
            {
              elementKey: "pulse",
              fqn: "cardiovascular.table.pulse",
              inputType: "select",
              label: "Pulse",
              tableColumn: "5",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Irregular"
                },
                {
                  text: "Normal"
                },
                {
                  text: "Weak"
                },
                {
                  text: "Bounding"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "skinAppearance",
              fqn: "cardiovascular.table.skinAppearance",
              inputType: "select",
              label: "Skin appearance",
              tableColumn: "6",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Pale"
                },
                {
                  text: "Mottled"
                },
                {
                  text: "Cyanotic"
                },
                {
                  text: "Flushed"
                },
                {
                  text: "Jaundiced"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "spacer1",
              fqn: "cardiovascular.table.spacer1",
              inputType: "form-label",
              tableColumn: "7",
              formColumn: "1",
              formRow: "3",
              formOption: "spacer",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelCapRefill",
              fqn: "cardiovascular.table.labelCapRefill",
              inputType: "form-label",
              label: "Cap refill",
              tableColumn: "8",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelTemperature",
              fqn: "cardiovascular.table.labelTemperature",
              inputType: "form-label",
              label: "Temperature",
              tableColumn: "9",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelPeripheral",
              fqn: "cardiovascular.table.labelPeripheral",
              inputType: "form-label",
              label: "Peripheral edema",
              tableColumn: "10",
              formColumn: "4",
              formRow: "3",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelNailBed",
              fqn: "cardiovascular.table.labelNailBed",
              inputType: "form-label",
              label: "Nail bed colour",
              tableColumn: "11",
              formColumn: "5",
              formRow: "3",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "lableRight",
              fqn: "cardiovascular.table.lableRight",
              inputType: "form-label",
              label: "Right hand",
              tableColumn: "12",
              formColumn: "1",
              formRow: "4",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "lableLeftHand",
              fqn: "cardiovascular.table.lableLeftHand",
              inputType: "form-label",
              label: "Left hand",
              tableColumn: "13",
              formColumn: "1",
              formRow: "5",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelRightFoot",
              fqn: "cardiovascular.table.labelRightFoot",
              inputType: "form-label",
              label: "Right foot",
              tableColumn: "14",
              formColumn: "1",
              formRow: "6",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "labelLeftFoot",
              fqn: "cardiovascular.table.labelLeftFoot",
              inputType: "form-label",
              label: "Left foot",
              tableColumn: "15",
              formColumn: "1",
              formRow: "7",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "capRefillRightHand",
              fqn: "cardiovascular.table.capRefillRightHand",
              inputType: "select",
              label: "Cap refill: Left hand",
              tableColumn: "16",
              formColumn: "2",
              formRow: "4",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "capRefillLeftHand",
              fqn: "cardiovascular.table.capRefillLeftHand",
              inputType: "select",
              label: "Cap refill: Right foot",
              tableColumn: "17",
              formColumn: "2",
              formRow: "5",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "capRefillRightFoot",
              fqn: "cardiovascular.table.capRefillRightFoot",
              inputType: "select",
              label: "Cap refill: Left foot",
              tableColumn: "18",
              formColumn: "2",
              formRow: "6",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "capRefillLeftFoot",
              fqn: "cardiovascular.table.capRefillLeftFoot",
              inputType: "select",
              label: "Temperature: Right hand",
              tableColumn: "19",
              formColumn: "2",
              formRow: "7",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "temperatureRightHand",
              fqn: "cardiovascular.table.temperatureRightHand",
              inputType: "select",
              label: "Temperature: Left hand",
              tableColumn: "20",
              formColumn: "3",
              formRow: "4",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "temperatureLeftHand",
              fqn: "cardiovascular.table.temperatureLeftHand",
              inputType: "select",
              label: "Temperature: Right foot",
              tableColumn: "21",
              formColumn: "3",
              formRow: "5",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "temperatureRightFoot",
              fqn: "cardiovascular.table.temperatureRightFoot",
              inputType: "select",
              label: "Temperature: Left foot",
              tableColumn: "22",
              formColumn: "3",
              formRow: "6",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "temperatureLeftFoot",
              fqn: "cardiovascular.table.temperatureLeftFoot",
              inputType: "select",
              label: "Peripheral edema: Right hand",
              tableColumn: "23",
              formColumn: "3",
              formRow: "7",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Warm"
                },
                {
                  text: "Cool"
                },
                {
                  text: "Hot"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "peripheralEdemaRightHand",
              fqn: "cardiovascular.table.peripheralEdemaRightHand",
              inputType: "select",
              label: "Peripheral edema: Left hand",
              tableColumn: "24",
              formColumn: "4",
              formRow: "4",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "peripheralEdemaLeftHand",
              fqn: "cardiovascular.table.peripheralEdemaLeftHand",
              inputType: "select",
              label: "Peripheral edema: Right foot",
              tableColumn: "25",
              formColumn: "4",
              formRow: "5",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "peripheralEdemaRightFoot",
              fqn: "cardiovascular.table.peripheralEdemaRightFoot",
              inputType: "select",
              label: "Peripheral edema: Left foot",
              tableColumn: "26",
              formColumn: "4",
              formRow: "6",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "peripheralEdemaLeftFoot",
              fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
              inputType: "select",
              label: "Nail bed colour: Right hand",
              tableColumn: "27",
              formColumn: "4",
              formRow: "7",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "No"
                },
                {
                  text: "Ankle"
                },
                {
                  text: "Pedal"
                },
                {
                  text: "Sacral"
                },
                {
                  text: "Pitting"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "nailBedColourRightHand",
              fqn: "cardiovascular.table.nailBedColourRightHand",
              inputType: "select",
              label: "Nail bed colour: Left hand",
              tableColumn: "28",
              formColumn: "5",
              formRow: "4",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "nailBedColourLeftHand",
              fqn: "cardiovascular.table.nailBedColourLeftHand",
              inputType: "select",
              label: "Nail bed colour: Right Foot",
              tableColumn: "29",
              formColumn: "5",
              formRow: "5",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "nailBedColourRightFoot",
              fqn: "cardiovascular.table.nailBedColourRightFoot",
              inputType: "select",
              label: "Nail bed colour: Left foot",
              tableColumn: "30",
              formColumn: "5",
              formRow: "6",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "nailBedColourLeftFoot",
              fqn: "cardiovascular.table.nailBedColourLeftFoot",
              inputType: "select",
              tableColumn: "31",
              formColumn: "5",
              formRow: "7",
              formOption: "hideLabel",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              tableKey: "table"
            },
            {
              elementKey: "comments",
              fqn: "cardiovascular.table.comments",
              inputType: "text",
              label: "Comments",
              tableColumn: "32",
              formColumn: "1",
              formRow: "8",
              pageDataKey: "cardiovascular",
              dataParent: "cardiovascular.table",
              level2Key: "table",
              page: "Cardiovascular assessment",
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
                    fqn: "cardiovascular.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "cardiovascular.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "cardiovascular.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "3",
                    formRow: "1",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "cardiovascular.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "pulse",
                    fqn: "cardiovascular.table.pulse",
                    inputType: "select",
                    label: "Pulse",
                    tableColumn: "5",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Regular"
                      },
                      {
                        text: "Irregular"
                      },
                      {
                        text: "Normal"
                      },
                      {
                        text: "Weak"
                      },
                      {
                        text: "Bounding"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "skinAppearance",
                    fqn: "cardiovascular.table.skinAppearance",
                    inputType: "select",
                    label: "Skin appearance",
                    tableColumn: "6",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Pale"
                      },
                      {
                        text: "Mottled"
                      },
                      {
                        text: "Cyanotic"
                      },
                      {
                        text: "Flushed"
                      },
                      {
                        text: "Jaundiced"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "spacer1",
                    fqn: "cardiovascular.table.spacer1",
                    inputType: "form-label",
                    tableColumn: "7",
                    formColumn: "1",
                    formRow: "3",
                    formOption: "spacer",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelCapRefill",
                    fqn: "cardiovascular.table.labelCapRefill",
                    inputType: "form-label",
                    label: "Cap refill",
                    tableColumn: "8",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelTemperature",
                    fqn: "cardiovascular.table.labelTemperature",
                    inputType: "form-label",
                    label: "Temperature",
                    tableColumn: "9",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelPeripheral",
                    fqn: "cardiovascular.table.labelPeripheral",
                    inputType: "form-label",
                    label: "Peripheral edema",
                    tableColumn: "10",
                    formColumn: "4",
                    formRow: "3",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "labelNailBed",
                    fqn: "cardiovascular.table.labelNailBed",
                    inputType: "form-label",
                    label: "Nail bed colour",
                    tableColumn: "11",
                    formColumn: "5",
                    formRow: "3",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    elementKey: "lableRight",
                    fqn: "cardiovascular.table.lableRight",
                    inputType: "form-label",
                    label: "Right hand",
                    tableColumn: "12",
                    formColumn: "1",
                    formRow: "4",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillRightHand",
                    fqn: "cardiovascular.table.capRefillRightHand",
                    inputType: "select",
                    label: "Cap refill: Left hand",
                    tableColumn: "16",
                    formColumn: "2",
                    formRow: "4",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureRightHand",
                    fqn: "cardiovascular.table.temperatureRightHand",
                    inputType: "select",
                    label: "Temperature: Left hand",
                    tableColumn: "20",
                    formColumn: "3",
                    formRow: "4",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaRightHand",
                    fqn: "cardiovascular.table.peripheralEdemaRightHand",
                    inputType: "select",
                    label: "Peripheral edema: Left hand",
                    tableColumn: "24",
                    formColumn: "4",
                    formRow: "4",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourRightHand",
                    fqn: "cardiovascular.table.nailBedColourRightHand",
                    inputType: "select",
                    label: "Nail bed colour: Left hand",
                    tableColumn: "28",
                    formColumn: "5",
                    formRow: "4",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    elementKey: "lableLeftHand",
                    fqn: "cardiovascular.table.lableLeftHand",
                    inputType: "form-label",
                    label: "Left hand",
                    tableColumn: "13",
                    formColumn: "1",
                    formRow: "5",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillLeftHand",
                    fqn: "cardiovascular.table.capRefillLeftHand",
                    inputType: "select",
                    label: "Cap refill: Right foot",
                    tableColumn: "17",
                    formColumn: "2",
                    formRow: "5",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureLeftHand",
                    fqn: "cardiovascular.table.temperatureLeftHand",
                    inputType: "select",
                    label: "Temperature: Right foot",
                    tableColumn: "21",
                    formColumn: "3",
                    formRow: "5",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaLeftHand",
                    fqn: "cardiovascular.table.peripheralEdemaLeftHand",
                    inputType: "select",
                    label: "Peripheral edema: Right foot",
                    tableColumn: "25",
                    formColumn: "4",
                    formRow: "5",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourLeftHand",
                    fqn: "cardiovascular.table.nailBedColourLeftHand",
                    inputType: "select",
                    label: "Nail bed colour: Right Foot",
                    tableColumn: "29",
                    formColumn: "5",
                    formRow: "5",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    elementKey: "labelRightFoot",
                    fqn: "cardiovascular.table.labelRightFoot",
                    inputType: "form-label",
                    label: "Right foot",
                    tableColumn: "14",
                    formColumn: "1",
                    formRow: "6",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillRightFoot",
                    fqn: "cardiovascular.table.capRefillRightFoot",
                    inputType: "select",
                    label: "Cap refill: Left foot",
                    tableColumn: "18",
                    formColumn: "2",
                    formRow: "6",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureRightFoot",
                    fqn: "cardiovascular.table.temperatureRightFoot",
                    inputType: "select",
                    label: "Temperature: Left foot",
                    tableColumn: "22",
                    formColumn: "3",
                    formRow: "6",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaRightFoot",
                    fqn: "cardiovascular.table.peripheralEdemaRightFoot",
                    inputType: "select",
                    label: "Peripheral edema: Left foot",
                    tableColumn: "26",
                    formColumn: "4",
                    formRow: "6",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourRightFoot",
                    fqn: "cardiovascular.table.nailBedColourRightFoot",
                    inputType: "select",
                    label: "Nail bed colour: Left foot",
                    tableColumn: "30",
                    formColumn: "5",
                    formRow: "6",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    elementKey: "labelLeftFoot",
                    fqn: "cardiovascular.table.labelLeftFoot",
                    inputType: "form-label",
                    label: "Left foot",
                    tableColumn: "15",
                    formColumn: "1",
                    formRow: "7",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableCss: "hide-table-element",
                    tableKey: "table"
                  },
                  {
                    elementKey: "capRefillLeftFoot",
                    fqn: "cardiovascular.table.capRefillLeftFoot",
                    inputType: "select",
                    label: "Temperature: Right hand",
                    tableColumn: "19",
                    formColumn: "2",
                    formRow: "7",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "temperatureLeftFoot",
                    fqn: "cardiovascular.table.temperatureLeftFoot",
                    inputType: "select",
                    label: "Peripheral edema: Right hand",
                    tableColumn: "23",
                    formColumn: "3",
                    formRow: "7",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Warm"
                      },
                      {
                        text: "Cool"
                      },
                      {
                        text: "Hot"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "peripheralEdemaLeftFoot",
                    fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
                    inputType: "select",
                    label: "Nail bed colour: Right hand",
                    tableColumn: "27",
                    formColumn: "4",
                    formRow: "7",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "No"
                      },
                      {
                        text: "Ankle"
                      },
                      {
                        text: "Pedal"
                      },
                      {
                        text: "Sacral"
                      },
                      {
                        text: "Pitting"
                      }
                    ],
                    tableKey: "table"
                  },
                  {
                    elementKey: "nailBedColourLeftFoot",
                    fqn: "cardiovascular.table.nailBedColourLeftFoot",
                    inputType: "select",
                    tableColumn: "31",
                    formColumn: "5",
                    formRow: "7",
                    formOption: "hideLabel",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "8",
                elements: [
                  {
                    elementKey: "comments",
                    fqn: "cardiovascular.table.comments",
                    inputType: "text",
                    label: "Comments",
                    tableColumn: "32",
                    formColumn: "1",
                    formRow: "8",
                    pageDataKey: "cardiovascular",
                    dataParent: "cardiovascular.table",
                    level2Key: "table",
                    page: "Cardiovascular assessment",
                    tableKey: "table"
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
      pageTitle: "Gastrointestinal assessment",
      pageDataKey: "gastrointestinal",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a gastrointestinal assessment",
          tableCells: [
            {
              elementKey: "name",
              fqn: "gastrointestinal.table.name",
              inputType: "text",
              label: "Name",
              tableColumn: "1",
              formCss: "user_name",
              formColumn: "1",
              formRow: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table"
            },
            {
              elementKey: "bSounds",
              fqn: "gastrointestinal.table.bSounds",
              inputType: "fieldset",
              label: "Bowel Sounds",
              formColumn: "2",
              formRow: "3",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "bSounds",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "day",
              fqn: "gastrointestinal.table.day",
              inputType: "day",
              label: "Day",
              tableColumn: "3",
              formCss: "user_day",
              formColumn: "4",
              formRow: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table"
            },
            {
              elementKey: "time",
              fqn: "gastrointestinal.table.time",
              inputType: "time",
              label: "Time",
              tableColumn: "4",
              formCss: "user_time",
              formColumn: "5",
              formRow: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table"
            },
            {
              elementKey: "soft",
              fqn: "gastrointestinal.table.abdomen.soft",
              inputType: "checkbox",
              label: "Soft",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "tender",
              fqn: "gastrointestinal.table.abdomen.tender",
              inputType: "checkbox",
              label: "Tender",
              tableColumn: "7",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "rigid",
              fqn: "gastrointestinal.table.abdomen.rigid",
              inputType: "checkbox",
              label: "Rigid",
              tableColumn: "8",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "guarding",
              fqn: "gastrointestinal.table.abdomen.guarding",
              inputType: "checkbox",
              label: "Guarding",
              tableColumn: "9",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "distended",
              fqn: "gastrointestinal.table.abdomen.distended",
              inputType: "checkbox",
              label: "Distended",
              tableColumn: "10",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "scars",
              fqn: "gastrointestinal.table.abdomen.scars",
              inputType: "checkbox",
              label: "Scars",
              tableColumn: "11",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "pain",
              fqn: "gastrointestinal.table.abdomen.pain",
              inputType: "select",
              label: "Abdominal pain",
              tableColumn: "12",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "aLabel",
              fqn: "gastrointestinal.table.abdomen.aLabel",
              inputType: "form-label",
              label: "If answered yes, please complete the pain assessent",
              tableColumn: "13",
              fsetRow: "8",
              fsetCol: "1",
              formOption: "labelWithPageRef",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.abdomen",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "abdomen",
              fqn: "gastrointestinal.table.abdomen",
              inputType: "fieldset",
              label: "Abdomen",
              formColumn: "1",
              formRow: "2",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "abdomen",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "none",
              fqn: "gastrointestinal.table.emesis.none",
              inputType: "select",
              label: "None",
              tableColumn: "14",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Need"
                },
                {
                  text: "Data"
                },
                {
                  text: "Here"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "nausea",
              fqn: "gastrointestinal.table.emesis.nausea",
              inputType: "text",
              label: "Nausea",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "vomiting",
              fqn: "gastrointestinal.table.emesis.vomiting",
              inputType: "text",
              label: "Vomiting",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "colour",
              fqn: "gastrointestinal.table.emesis.colour",
              inputType: "select",
              label: "Emesis colour",
              tableColumn: "17",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Need"
                },
                {
                  text: "Data"
                },
                {
                  text: "Here"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "description",
              fqn: "gastrointestinal.table.emesis.description",
              inputType: "text",
              label: "Description",
              tableColumn: "18",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "amount",
              fqn: "gastrointestinal.table.emesis.amount",
              inputType: "select",
              label: "Approximate volume",
              tableColumn: "19",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.emesis",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Small"
                },
                {
                  text: "Moderate"
                },
                {
                  text: "Large"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "emesis",
              fqn: "gastrointestinal.table.emesis",
              inputType: "fieldset",
              label: "Emesis",
              formColumn: "2",
              formRow: "2",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "emesis",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "eating",
              fqn: "gastrointestinal.table.eatingGroup.eating",
              inputType: "select",
              tableColumn: "20",
              fsetRow: "1",
              fsetCol: "1",
              formOption: "boldLabel",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.eatingGroup",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Difficult"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "reason",
              fqn: "gastrointestinal.table.eatingGroup.reason",
              inputType: "text",
              label: "Reason",
              tableColumn: "21",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.eatingGroup",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup",
              inputType: "fieldset",
              label: "Eating",
              formColumn: "3",
              formRow: "2",
              formOption: "hideLabel",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "eatingGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "profession",
              fqn: "gastrointestinal.table.profession",
              inputType: "text",
              label: "Profession",
              tableColumn: "2",
              formCss: "user_pro",
              formColumn: "2",
              formRow: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table"
            },
            {
              elementKey: "npoSinceTime",
              fqn: "gastrointestinal.table.npoSince.npoSinceTime",
              inputType: "time",
              label: "Time",
              tableColumn: "23",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.npoSince",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "npoSince",
              fqn: "gastrointestinal.table.npoSince",
              inputType: "fieldset",
              label: "NPO since",
              formColumn: "3",
              formRow: "2",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "npoSince",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "stoolColour",
              fqn: "gastrointestinal.table.stool.stoolColour",
              inputType: "select",
              label: "Stool colour",
              tableColumn: "24",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.stool",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Brown"
                },
                {
                  text: "Green"
                },
                {
                  text: "Clay coloured"
                },
                {
                  text: "Yellow"
                },
                {
                  text: "Black"
                },
                {
                  text: "Bright red"
                },
                {
                  text: "Dark red"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "stoolDescription",
              fqn: "gastrointestinal.table.stool.stoolDescription",
              inputType: "select",
              label: "Description",
              tableColumn: "25",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.stool",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Runny"
                },
                {
                  text: "Hard pellets"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "stoolAmount",
              fqn: "gastrointestinal.table.stool.stoolAmount",
              inputType: "text",
              label: "Amount",
              tableColumn: "26",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.stool",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "stoolSource",
              fqn: "gastrointestinal.table.stool.stoolSource",
              inputType: "select",
              label: "Source",
              tableColumn: "27",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.stool",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              options: [
                {
                  text: "Observed"
                },
                {
                  text: "As per patient observed"
                },
                {
                  text: "Not observed"
                }
              ],
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "comments",
              fqn: "gastrointestinal.table.stool.comments",
              inputType: "textarea",
              label: "Comments",
              tableColumn: "28",
              formRow: "4",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.stool",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table"
            },
            {
              elementKey: "stool",
              fqn: "gastrointestinal.table.stool",
              inputType: "fieldset",
              label: "Stool",
              formColumn: "3",
              formRow: "3",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "stool",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "normal",
              fqn: "gastrointestinal.table.bowel.normal",
              inputType: "checkbox",
              label: "Normal",
              tableColumn: "29",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "constipation",
              fqn: "gastrointestinal.table.bowel.constipation",
              inputType: "checkbox",
              label: "Constipation",
              tableColumn: "30",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "diarrhea",
              fqn: "gastrointestinal.table.bowel.diarrhea",
              inputType: "checkbox",
              label: "Diarrhea",
              tableColumn: "31",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "melena",
              fqn: "gastrointestinal.table.bowel.melena",
              inputType: "checkbox",
              label: "Melena",
              tableColumn: "32",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "incontinent",
              fqn: "gastrointestinal.table.bowel.incontinent",
              inputType: "checkbox",
              label: "Incontinent",
              tableColumn: "33",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "lastBm",
              fqn: "gastrointestinal.table.bowel.lastBm",
              inputType: "text",
              label: "Last BM",
              tableColumn: "34",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bowel",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bowel",
              fqn: "gastrointestinal.table.bowel",
              inputType: "fieldset",
              label: "Bowel Sounds",
              formColumn: "1",
              formRow: "3",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              containerType: "fieldset",
              containerKey: "bowel",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              elementKey: "bsNone",
              fqn: "gastrointestinal.table.bSounds.bsNone",
              inputType: "checkbox",
              label: "None",
              tableColumn: "39",
              fsetRow: "1",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bsLUQ",
              fqn: "gastrointestinal.table.bSounds.bsLUQ",
              inputType: "checkbox",
              label: "LUQ",
              tableColumn: "40",
              fsetRow: "2",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bsRUQ",
              fqn: "gastrointestinal.table.bSounds.bsRUQ",
              inputType: "checkbox",
              label: "RUQ",
              tableColumn: "41",
              fsetRow: "3",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bsLLQ",
              fqn: "gastrointestinal.table.bSounds.bsLLQ",
              inputType: "checkbox",
              label: "LLQ",
              tableColumn: "42",
              fsetRow: "4",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "bsRLQ",
              fqn: "gastrointestinal.table.bSounds.bsRLQ",
              inputType: "checkbox",
              label: "RLQ",
              tableColumn: "43",
              fsetRow: "5",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hypoactive",
              fqn: "gastrointestinal.table.bSounds.hypoactive",
              inputType: "checkbox",
              label: "Hypoactive",
              tableColumn: "44",
              fsetRow: "6",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "hyperactive",
              fqn: "gastrointestinal.table.bSounds.hyperactive",
              inputType: "checkbox",
              label: "Hyperactive",
              tableColumn: "45",
              fsetRow: "7",
              fsetCol: "1",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.bSounds",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            },
            {
              elementKey: "npoSinceDate",
              fqn: "gastrointestinal.table.npoSince.npoSinceDate",
              inputType: "day",
              label: "Day",
              tableColumn: "22",
              fsetRow: "3",
              fsetCol: "1",
              formOption: "boldLabel",
              pageDataKey: "gastrointestinal",
              dataParent: "gastrointestinal.table.npoSince",
              level2Key: "table",
              page: "Gastrointestinal assessment",
              tableKey: "table",
              formColumn: "1"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    elementKey: "name",
                    fqn: "gastrointestinal.table.name",
                    inputType: "text",
                    label: "Name",
                    tableColumn: "1",
                    formCss: "user_name",
                    formColumn: "1",
                    formRow: "1",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "profession",
                    fqn: "gastrointestinal.table.profession",
                    inputType: "text",
                    label: "Profession",
                    tableColumn: "2",
                    formCss: "user_pro",
                    formColumn: "2",
                    formRow: "1",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "day",
                    fqn: "gastrointestinal.table.day",
                    inputType: "day",
                    label: "Day",
                    tableColumn: "3",
                    formCss: "user_day",
                    formColumn: "4",
                    formRow: "1",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    tableKey: "table"
                  },
                  {
                    elementKey: "time",
                    fqn: "gastrointestinal.table.time",
                    inputType: "time",
                    label: "Time",
                    tableColumn: "4",
                    formCss: "user_time",
                    formColumn: "5",
                    formRow: "1",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    elementKey: "abdomen",
                    fqn: "gastrointestinal.table.abdomen",
                    inputType: "fieldset",
                    label: "Abdomen",
                    formColumn: "1",
                    formRow: "2",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "abdomen",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "soft",
                              fqn: "gastrointestinal.table.abdomen.soft",
                              inputType: "checkbox",
                              label: "Soft",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "tender",
                              fqn: "gastrointestinal.table.abdomen.tender",
                              inputType: "checkbox",
                              label: "Tender",
                              tableColumn: "7",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "rigid",
                              fqn: "gastrointestinal.table.abdomen.rigid",
                              inputType: "checkbox",
                              label: "Rigid",
                              tableColumn: "8",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "guarding",
                              fqn: "gastrointestinal.table.abdomen.guarding",
                              inputType: "checkbox",
                              label: "Guarding",
                              tableColumn: "9",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "distended",
                              fqn: "gastrointestinal.table.abdomen.distended",
                              inputType: "checkbox",
                              label: "Distended",
                              tableColumn: "10",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "scars",
                              fqn: "gastrointestinal.table.abdomen.scars",
                              inputType: "checkbox",
                              label: "Scars",
                              tableColumn: "11",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "pain",
                              fqn: "gastrointestinal.table.abdomen.pain",
                              inputType: "select",
                              label: "Abdominal pain",
                              tableColumn: "12",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              elementKey: "aLabel",
                              fqn: "gastrointestinal.table.abdomen.aLabel",
                              inputType: "form-label",
                              label: "If answered yes, please complete the pain assessent",
                              tableColumn: "13",
                              fsetRow: "8",
                              fsetCol: "1",
                              formOption: "labelWithPageRef",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.abdomen",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "emesis",
                    fqn: "gastrointestinal.table.emesis",
                    inputType: "fieldset",
                    label: "Emesis",
                    formColumn: "2",
                    formRow: "2",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "emesis",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "none",
                              fqn: "gastrointestinal.table.emesis.none",
                              inputType: "select",
                              label: "None",
                              tableColumn: "14",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Need"
                                },
                                {
                                  text: "Data"
                                },
                                {
                                  text: "Here"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "nausea",
                              fqn: "gastrointestinal.table.emesis.nausea",
                              inputType: "text",
                              label: "Nausea",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "vomiting",
                              fqn: "gastrointestinal.table.emesis.vomiting",
                              inputType: "text",
                              label: "Vomiting",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "colour",
                              fqn: "gastrointestinal.table.emesis.colour",
                              inputType: "select",
                              label: "Emesis colour",
                              tableColumn: "17",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Need"
                                },
                                {
                                  text: "Data"
                                },
                                {
                                  text: "Here"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "description",
                              fqn: "gastrointestinal.table.emesis.description",
                              inputType: "text",
                              label: "Description",
                              tableColumn: "18",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "amount",
                              fqn: "gastrointestinal.table.emesis.amount",
                              inputType: "select",
                              label: "Approximate volume",
                              tableColumn: "19",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.emesis",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Small"
                                },
                                {
                                  text: "Moderate"
                                },
                                {
                                  text: "Large"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "eatingGroup",
                    fqn: "gastrointestinal.table.eatingGroup",
                    inputType: "fieldset",
                    label: "Eating",
                    formColumn: "3",
                    formRow: "2",
                    formOption: "hideLabel",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "eatingGroup",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "eating",
                              fqn: "gastrointestinal.table.eatingGroup.eating",
                              inputType: "select",
                              tableColumn: "20",
                              fsetRow: "1",
                              fsetCol: "1",
                              formOption: "boldLabel",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Regular"
                                },
                                {
                                  text: "Difficult"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "reason",
                              fqn: "gastrointestinal.table.eatingGroup.reason",
                              inputType: "text",
                              label: "Reason",
                              tableColumn: "21",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "npoSince",
                    fqn: "gastrointestinal.table.npoSince",
                    inputType: "fieldset",
                    label: "NPO since",
                    formColumn: "3",
                    formRow: "2",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "npoSince",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "npoSinceDate",
                              fqn: "gastrointestinal.table.npoSince.npoSinceDate",
                              inputType: "day",
                              label: "Day",
                              tableColumn: "22",
                              fsetRow: "3",
                              fsetCol: "1",
                              formOption: "boldLabel",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.npoSince",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "npoSinceTime",
                              fqn: "gastrointestinal.table.npoSince.npoSinceTime",
                              inputType: "time",
                              label: "Time",
                              tableColumn: "23",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.npoSince",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        null,
                        null
                      ],
                      columnsCount: 1
                    }
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    elementKey: "bowel",
                    fqn: "gastrointestinal.table.bowel",
                    inputType: "fieldset",
                    label: "Bowel Sounds",
                    formColumn: "1",
                    formRow: "3",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "bowel",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "normal",
                              fqn: "gastrointestinal.table.bowel.normal",
                              inputType: "checkbox",
                              label: "Normal",
                              tableColumn: "29",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "constipation",
                              fqn: "gastrointestinal.table.bowel.constipation",
                              inputType: "checkbox",
                              label: "Constipation",
                              tableColumn: "30",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "diarrhea",
                              fqn: "gastrointestinal.table.bowel.diarrhea",
                              inputType: "checkbox",
                              label: "Diarrhea",
                              tableColumn: "31",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "melena",
                              fqn: "gastrointestinal.table.bowel.melena",
                              inputType: "checkbox",
                              label: "Melena",
                              tableColumn: "32",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "incontinent",
                              fqn: "gastrointestinal.table.bowel.incontinent",
                              inputType: "checkbox",
                              label: "Incontinent",
                              tableColumn: "33",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "lastBm",
                              fqn: "gastrointestinal.table.bowel.lastBm",
                              inputType: "text",
                              label: "Last BM",
                              tableColumn: "34",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bowel",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "bSounds",
                    fqn: "gastrointestinal.table.bSounds",
                    inputType: "fieldset",
                    label: "Bowel Sounds",
                    formColumn: "2",
                    formRow: "3",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "bSounds",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "bsNone",
                              fqn: "gastrointestinal.table.bSounds.bsNone",
                              inputType: "checkbox",
                              label: "None",
                              tableColumn: "39",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "bsLUQ",
                              fqn: "gastrointestinal.table.bSounds.bsLUQ",
                              inputType: "checkbox",
                              label: "LUQ",
                              tableColumn: "40",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "bsRUQ",
                              fqn: "gastrointestinal.table.bSounds.bsRUQ",
                              inputType: "checkbox",
                              label: "RUQ",
                              tableColumn: "41",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "bsLLQ",
                              fqn: "gastrointestinal.table.bSounds.bsLLQ",
                              inputType: "checkbox",
                              label: "LLQ",
                              tableColumn: "42",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              elementKey: "bsRLQ",
                              fqn: "gastrointestinal.table.bSounds.bsRLQ",
                              inputType: "checkbox",
                              label: "RLQ",
                              tableColumn: "43",
                              fsetRow: "5",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              elementKey: "hypoactive",
                              fqn: "gastrointestinal.table.bSounds.hypoactive",
                              inputType: "checkbox",
                              label: "Hypoactive",
                              tableColumn: "44",
                              fsetRow: "6",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              elementKey: "hyperactive",
                              fqn: "gastrointestinal.table.bSounds.hyperactive",
                              inputType: "checkbox",
                              label: "Hyperactive",
                              tableColumn: "45",
                              fsetRow: "7",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.bSounds",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        }
                      ],
                      columnsCount: 1
                    }
                  },
                  {
                    elementKey: "stool",
                    fqn: "gastrointestinal.table.stool",
                    inputType: "fieldset",
                    label: "Stool",
                    formColumn: "3",
                    formRow: "3",
                    pageDataKey: "gastrointestinal",
                    dataParent: "gastrointestinal.table",
                    level2Key: "table",
                    page: "Gastrointestinal assessment",
                    containerType: "fieldset",
                    containerKey: "stool",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              elementKey: "stoolColour",
                              fqn: "gastrointestinal.table.stool.stoolColour",
                              inputType: "select",
                              label: "Stool colour",
                              tableColumn: "24",
                              fsetRow: "1",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.stool",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Brown"
                                },
                                {
                                  text: "Green"
                                },
                                {
                                  text: "Clay coloured"
                                },
                                {
                                  text: "Yellow"
                                },
                                {
                                  text: "Black"
                                },
                                {
                                  text: "Bright red"
                                },
                                {
                                  text: "Dark red"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              elementKey: "stoolDescription",
                              fqn: "gastrointestinal.table.stool.stoolDescription",
                              inputType: "select",
                              label: "Description",
                              tableColumn: "25",
                              fsetRow: "2",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.stool",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Runny"
                                },
                                {
                                  text: "Hard pellets"
                                }
                              ],
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              elementKey: "stoolAmount",
                              fqn: "gastrointestinal.table.stool.stoolAmount",
                              inputType: "text",
                              label: "Amount",
                              tableColumn: "26",
                              fsetRow: "3",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.stool",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              elementKey: "stoolSource",
                              fqn: "gastrointestinal.table.stool.stoolSource",
                              inputType: "select",
                              label: "Source",
                              tableColumn: "27",
                              fsetRow: "4",
                              fsetCol: "1",
                              pageDataKey: "gastrointestinal",
                              dataParent: "gastrointestinal.table.stool",
                              level2Key: "table",
                              page: "Gastrointestinal assessment",
                              options: [
                                {
                                  text: "Observed"
                                },
                                {
                                  text: "As per patient observed"
                                },
                                {
                                  text: "Not observed"
                                }
                              ],
                              tableKey: "table",
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
            columnsCount: 4
          }
        }
      ],
      pageData: {
        table: []
      }
    }
  }
}