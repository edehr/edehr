/* eslint-disable quotes */
export default function () {
  return {
    visit: {
      pageTitle: "Visit details",
      pageDataKey: "visit",
      generated: "2019-03-28T09:35:30-07:00",
      hasForm: true,
      page_form: {
        rows: [
          {
            formRow: "1",
            elements: [
              {
                label: "Admission day",
                pageDataKey: "visit",
                elementKey: "admissionDay",
                inputType: "day",
                formRow: "1",
                formColumn: "1",
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.admissionDay"
              },
              {
                label: "Admission time",
                pageDataKey: "visit",
                elementKey: "admissionTime",
                inputType: "time",
                formRow: "1",
                formColumn: "2",
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.admissionTime"
              }
            ]
          },
          {
            formRow: "2",
            elements: [
              {
                label: "Consent for treatment",
                pageDataKey: "visit",
                elementKey: "consentForTreatment",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "1",
                dataParent: "visit",
                fqn: "visit.consentForTreatment"
              },
              {
                label: "Consent for blood products",
                pageDataKey: "visit",
                elementKey: "consentForBlood",
                inputType: "checkbox",
                formRow: "2",
                formColumn: "2",
                dataParent: "visit",
                fqn: "visit.consentForBlood"
              }
            ]
          },
          {
            formRow: "3",
            elements: [
              {
                label: "Physician admitting diagnosis",
                pageDataKey: "visit",
                elementKey: "diagnosis",
                inputType: "textarea",
                formRow: "3",
                formColumn: "1",
                dataParent: "visit",
                fqn: "visit.diagnosis"
              },
              {
                label: "Admission status",
                pageDataKey: "visit",
                elementKey: "status",
                inputType: "select",
                formRow: "3",
                formColumn: "3",
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
                ],
                mandatory: "yes",
                dataParent: "visit",
                fqn: "visit.status"
              }
            ]
          }
        ],
        columnsCount: 2
      },
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a patient location",
          tableCells: [
            {
              label: "Patient location",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "location",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              mandatory: "yes",
              helperText: "hospital, ward #, room #, home, out patient clinic",
              dataParent: "visit.table",
              fqn: "visit.table.location",
              tableKey: "table"
            },
            {
              label: "Transfer in day",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "transferInDay",
              inputType: "day",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "visit.table",
              fqn: "visit.table.transferInDay",
              tableKey: "table"
            },
            {
              label: "Transfer in time",
              pageDataKey: "visit",
              level2Key: "table",
              elementKey: "transferInTime",
              inputType: "time",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "visit.table",
              fqn: "visit.table.transferInTime",
              tableKey: "table"
            }
          ],
          tableForm: {
            rows: [
              {
                formRow: "1",
                elements: [
                  {
                    label: "Patient location",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "location",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    mandatory: "yes",
                    helperText: "hospital, ward #, room #, home, out patient clinic",
                    dataParent: "visit.table",
                    fqn: "visit.table.location",
                    tableKey: "table"
                  },
                  {
                    label: "Transfer in day",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "transferInDay",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "visit.table",
                    fqn: "visit.table.transferInDay",
                    tableKey: "table"
                  },
                  {
                    label: "Transfer in time",
                    pageDataKey: "visit",
                    level2Key: "table",
                    elementKey: "transferInTime",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "visit.table",
                    fqn: "visit.table.transferInTime",
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
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add vital signs",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "vitals.table",
              fqn: "vitals.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "vitals.table",
              fqn: "vitals.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "day",
              inputType: "text",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "vitals.table",
              fqn: "vitals.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "time",
              inputType: "text",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "vitals.table",
              fqn: "vitals.table.time",
              tableKey: "table"
            },
            {
              label: "Temperature",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "temperature",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "vitals.table",
              fqn: "vitals.table.temperature",
              tableKey: "table"
            },
            {
              label: "Temperature source",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "source",
              inputType: "select",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
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
              dataParent: "vitals.table",
              fqn: "vitals.table.source",
              tableKey: "table"
            },
            {
              label: "Pulse rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "rate",
              inputType: "text",
              formRow: "3",
              formColumn: "3",
              tableColumn: "7",
              dataParent: "vitals.table",
              fqn: "vitals.table.rate",
              tableKey: "table"
            },
            {
              label: "Pulse rhythm",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "rhythm",
              inputType: "select",
              formRow: "3",
              formColumn: "1",
              tableColumn: "8",
              options: [
                {
                  text: "regular"
                },
                {
                  text: "irregular"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.rhythm",
              tableKey: "table"
            },
            {
              label: "Pulse site",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "strength",
              inputType: "select",
              formRow: "3",
              formColumn: "2",
              tableColumn: "9",
              options: [
                {
                  text: "peripheral"
                }
              ],
              dataParent: "vitals.table",
              fqn: "vitals.table.strength",
              tableKey: "table"
            },
            {
              label: "Systolic blood pressure",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "systolic",
              inputType: "text",
              formRow: "4",
              formColumn: "1",
              tableColumn: "10",
              dataParent: "vitals.table",
              fqn: "vitals.table.systolic",
              tableKey: "table"
            },
            {
              label: "Diastolic blood pressure",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "diastolic",
              inputType: "text",
              formRow: "4",
              formColumn: "2",
              tableColumn: "11",
              dataParent: "vitals.table",
              fqn: "vitals.table.diastolic",
              tableKey: "table"
            },
            {
              label: "Patient position",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "patientPosition",
              inputType: "select",
              formRow: "4",
              formColumn: "3",
              tableColumn: "12",
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
              dataParent: "vitals.table",
              fqn: "vitals.table.patientPosition",
              tableKey: "table"
            },
            {
              label: "Respiration rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "respirationRate",
              inputType: "text",
              formRow: "5",
              formColumn: "1",
              tableColumn: "13",
              dataParent: "vitals.table",
              fqn: "vitals.table.respirationRate",
              tableKey: "table"
            },
            {
              label: "Oxygen saturation",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "oxygenSaturation",
              inputType: "text",
              formRow: "6",
              formColumn: "1",
              tableColumn: "14",
              dataParent: "vitals.table",
              fqn: "vitals.table.oxygenSaturation",
              tableKey: "table"
            },
            {
              label: "Oxygen mode",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "oxygenMode",
              inputType: "select",
              formRow: "6",
              formColumn: "2",
              tableColumn: "15",
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
              dataParent: "vitals.table",
              fqn: "vitals.table.oxygenMode",
              tableKey: "table"
            },
            {
              label: "Flow rate",
              pageDataKey: "vitals",
              level2Key: "table",
              elementKey: "flowRate",
              inputType: "text",
              formRow: "6",
              formColumn: "3",
              tableColumn: "16",
              suffix: "/lpm",
              dataParent: "vitals.table",
              fqn: "vitals.table.flowRate",
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
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Temperature",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "temperature",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.temperature",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature source",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "source",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
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
                    dataParent: "vitals.table",
                    fqn: "vitals.table.source",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Pulse rhythm",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "rhythm",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "8",
                    options: [
                      {
                        text: "regular"
                      },
                      {
                        text: "irregular"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.rhythm",
                    tableKey: "table"
                  },
                  {
                    label: "Pulse site",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "strength",
                    inputType: "select",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "9",
                    options: [
                      {
                        text: "peripheral"
                      }
                    ],
                    dataParent: "vitals.table",
                    fqn: "vitals.table.strength",
                    tableKey: "table"
                  },
                  {
                    label: "Pulse rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "rate",
                    inputType: "text",
                    formRow: "3",
                    formColumn: "3",
                    tableColumn: "7",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.rate",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Systolic blood pressure",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "systolic",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "10",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.systolic",
                    tableKey: "table"
                  },
                  {
                    label: "Diastolic blood pressure",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "diastolic",
                    inputType: "text",
                    formRow: "4",
                    formColumn: "2",
                    tableColumn: "11",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.diastolic",
                    tableKey: "table"
                  },
                  {
                    label: "Patient position",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "patientPosition",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    tableColumn: "12",
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
                    dataParent: "vitals.table",
                    fqn: "vitals.table.patientPosition",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    label: "Respiration rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "respirationRate",
                    inputType: "text",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "13",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.respirationRate",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    label: "Oxygen saturation",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "oxygenSaturation",
                    inputType: "text",
                    formRow: "6",
                    formColumn: "1",
                    tableColumn: "14",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.oxygenSaturation",
                    tableKey: "table"
                  },
                  {
                    label: "Oxygen mode",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "oxygenMode",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "2",
                    tableColumn: "15",
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
                    dataParent: "vitals.table",
                    fqn: "vitals.table.oxygenMode",
                    tableKey: "table"
                  },
                  {
                    label: "Flow rate",
                    pageDataKey: "vitals",
                    level2Key: "table",
                    elementKey: "flowRate",
                    inputType: "text",
                    formRow: "6",
                    formColumn: "3",
                    tableColumn: "16",
                    suffix: "/lpm",
                    dataParent: "vitals.table",
                    fqn: "vitals.table.flowRate",
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
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a fluid in/out record",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.time",
              tableKey: "table"
            },
            {
              label: "Fluid In",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "fluidIn",
              inputType: "text",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.fluidIn",
              tableKey: "table"
            },
            {
              label: "Fluid Out",
              pageDataKey: "fluidBalance",
              level2Key: "table",
              elementKey: "fluidOut",
              inputType: "text",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
              dataParent: "fluidBalance.table",
              fqn: "fluidBalance.table.fluidOut",
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
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Fluid In",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "fluidIn",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.fluidIn",
                    tableKey: "table"
                  },
                  {
                    label: "Fluid Out",
                    pageDataKey: "fluidBalance",
                    level2Key: "table",
                    elementKey: "fluidOut",
                    inputType: "text",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
                    dataParent: "fluidBalance.table",
                    fqn: "fluidBalance.table.fluidOut",
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
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          label: "Neurological",
          addButtonText: "Add a neurological assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "neurological.table",
              fqn: "neurological.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "neurological.table",
              fqn: "neurological.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "neurological.table",
              fqn: "neurological.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "neurological.table",
              fqn: "neurological.table.time",
              tableKey: "table"
            },
            {
              label: "Status",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "status",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
              dataParent: "neurological.table",
              fqn: "neurological.table.status",
              containerType: "fieldset",
              containerKey: "status",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Alert",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "alert",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.alert",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oriented",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "oriented",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.oriented",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Confused",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "confused",
              inputType: "checkbox",
              tableColumn: "8",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.confused",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Drowsy",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "drowsy",
              inputType: "checkbox",
              tableColumn: "9",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.drowsy",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Unresponsive",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "unresponsive",
              inputType: "checkbox",
              tableColumn: "10",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.unresponsive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Dizziness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "dizziness",
              inputType: "checkbox",
              tableColumn: "11",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.dizziness",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Blurred vision",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "status",
              elementKey: "blurredVision",
              inputType: "checkbox",
              tableColumn: "12",
              fsetRow: "7",
              fsetCol: "1",
              dataParent: "neurological.table.status",
              fqn: "neurological.table.status.blurredVision",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Glasgow Coma Scale",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "glasgowComaScale",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              tableColumn: "13",
              dataParent: "neurological.table",
              fqn: "neurological.table.glasgowComaScale",
              containerType: "fieldset",
              containerKey: "glasgowComaScale",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Eye opening",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "eyeOpening",
              inputType: "select",
              tableColumn: "14",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.eyeOpening",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Verbal response",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "verbalResponse",
              inputType: "select",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "1",
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
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.verbalResponse",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Best motor response",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "bestMotorResponse",
              inputType: "select",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
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
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Total",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "totalGlasgow",
              inputType: "calculated",
              tableColumn: "17",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.totalGlasgow",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Loss of conciousness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "loss",
              inputType: "select",
              tableColumn: "18",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.loss",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Pupils",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "pupils",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "1",
              tableColumn: "18",
              dataParent: "neurological.table",
              fqn: "neurological.table.pupils",
              containerType: "fieldset",
              containerKey: "pupils",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Duration",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "glasgowComaScale",
              elementKey: "duration",
              inputType: "text",
              tableColumn: "19",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "neurological.table.glasgowComaScale",
              fqn: "neurological.table.glasgowComaScale.duration",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Left pupil size",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "leftPupilSize",
              inputType: "select",
              tableColumn: "19",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.leftPupilSize",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Left pupil response to light",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "leftPupilResponseToLight",
              inputType: "select",
              tableColumn: "20",
              fsetRow: "2",
              fsetCol: "1",
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
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.leftPupilResponseToLight",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right pupil size",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "rightPupilSize",
              inputType: "select",
              tableColumn: "21",
              fsetRow: "1",
              fsetCol: "2",
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
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.rightPupilSize",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Right pupil response to light",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "rightPupilResponseToLight",
              inputType: "select",
              tableColumn: "22",
              fsetRow: "2",
              fsetCol: "2",
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
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.rightPupilResponseToLight",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Both pupils",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "bothPupils",
              inputType: "select",
              tableColumn: "23",
              fsetRow: "1",
              fsetCol: "3",
              options: [
                {
                  text: "Equal"
                },
                {
                  text: "Unequal"
                }
              ],
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.bothPupils",
              tableKey: "table",
              formColumn: "3"
            },
            {
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "pupils",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "24",
              fsetRow: "2",
              fsetCol: "3",
              dataParent: "neurological.table.pupils",
              fqn: "neurological.table.pupils.aSpacer",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "3"
            },
            {
              label: "Stroke Assessment",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "stroke",
              inputType: "fieldset",
              formRow: "4",
              formColumn: "1",
              tableColumn: "24",
              dataParent: "neurological.table",
              fqn: "neurological.table.stroke",
              containerType: "fieldset",
              containerKey: "stroke",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Level of conciousness",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousness",
              inputType: "select",
              tableColumn: "25",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousness",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Best gaze",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "bestGaze",
              inputType: "select",
              tableColumn: "26",
              fsetRow: "1",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.bestGaze",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Level of conciousness questions",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousnessQuestions",
              inputType: "select",
              tableColumn: "27",
              fsetRow: "2",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Visual",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "visual",
              inputType: "select",
              tableColumn: "28",
              fsetRow: "2",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.visual",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Level of conciousness commands",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "levelOfConciousnessCommands",
              inputType: "select",
              tableColumn: "29",
              fsetRow: "3",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Facial palsy",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "facialPalsy",
              inputType: "select",
              tableColumn: "30",
              fsetRow: "3",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.facialPalsy",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Motor - left arm",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorLeftArm",
              inputType: "select",
              tableColumn: "31",
              fsetRow: "4",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorLeftArm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Sensory",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "sensory",
              inputType: "select",
              tableColumn: "32",
              fsetRow: "4",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.sensory",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Motor - right arm",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorRightArm",
              inputType: "select",
              tableColumn: "33",
              fsetRow: "5",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorRightArm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Best language",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "bestLanguage",
              inputType: "select",
              tableColumn: "34",
              fsetRow: "5",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.bestLanguage",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Motor - left leg",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorLeftLeg",
              inputType: "select",
              tableColumn: "35",
              fsetRow: "6",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorLeftLeg",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Dysarthria",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "dysarthria",
              inputType: "select",
              tableColumn: "36",
              fsetRow: "6",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.dysarthria",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Motor - right leg",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "motorRightLeg",
              inputType: "select",
              tableColumn: "37",
              fsetRow: "7",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.motorRightLeg",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Extinction and inattention",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "extinctionAndInattention",
              inputType: "select",
              tableColumn: "38",
              fsetRow: "7",
              fsetCol: "2",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.extinctionAndInattention",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Limb ataxia",
              pageDataKey: "neurological",
              level2Key: "table",
              level3Key: "stroke",
              elementKey: "limbAtaxia",
              inputType: "select",
              tableColumn: "39",
              fsetRow: "8",
              fsetCol: "1",
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
              dataParent: "neurological.table.stroke",
              fqn: "neurological.table.stroke.limbAtaxia",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Comments",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "comments",
              inputType: "textarea",
              formRow: "5",
              formColumn: "1",
              tableColumn: "40",
              fsetRow: "9",
              fsetCol: "1",
              dataParent: "neurological.table",
              fqn: "neurological.table.comments",
              tableKey: "table"
            },
            {
              label: "<b>Resources</b><p>Morse Fall Score <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p><p>Mini-mental state examination (MMSE) <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p>",
              pageDataKey: "neurological",
              level2Key: "table",
              elementKey: "resources",
              inputType: "form_label",
              formRow: "6",
              formColumn: "1",
              formOption: "withExternalUrls",
              tableColumn: "41",
              fsetRow: "9",
              fsetCol: "2",
              dataParent: "neurological.table",
              fqn: "neurological.table.resources",
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
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Status",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "status",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.status",
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
                              label: "Alert",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "alert",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.alert",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Oriented",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "oriented",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.oriented",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Confused",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "confused",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.confused",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Drowsy",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "drowsy",
                              inputType: "checkbox",
                              tableColumn: "9",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.drowsy",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Unresponsive",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "unresponsive",
                              inputType: "checkbox",
                              tableColumn: "10",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.unresponsive",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Dizziness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "dizziness",
                              inputType: "checkbox",
                              tableColumn: "11",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.dizziness",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Blurred vision",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "status",
                              elementKey: "blurredVision",
                              inputType: "checkbox",
                              tableColumn: "12",
                              fsetRow: "7",
                              fsetCol: "1",
                              dataParent: "neurological.table.status",
                              fqn: "neurological.table.status.blurredVision",
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
                    label: "Glasgow Coma Scale",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "glasgowComaScale",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "13",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.glasgowComaScale",
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
                              label: "Eye opening",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "eyeOpening",
                              inputType: "select",
                              tableColumn: "14",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.eyeOpening",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Loss of conciousness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "loss",
                              inputType: "select",
                              tableColumn: "18",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.loss",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Verbal response",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "verbalResponse",
                              inputType: "select",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.verbalResponse",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Duration",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "duration",
                              inputType: "text",
                              tableColumn: "19",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.duration",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Best motor response",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "bestMotorResponse",
                              inputType: "select",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.bestMotorResponse",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Total",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "glasgowComaScale",
                              elementKey: "totalGlasgow",
                              inputType: "calculated",
                              tableColumn: "17",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "neurological.table.glasgowComaScale",
                              fqn: "neurological.table.glasgowComaScale.totalGlasgow",
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
                    label: "Pupils",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "pupils",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "18",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.pupils",
                    containerType: "fieldset",
                    containerKey: "pupils",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Left pupil size",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "leftPupilSize",
                              inputType: "select",
                              tableColumn: "19",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.leftPupilSize",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right pupil size",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "rightPupilSize",
                              inputType: "select",
                              tableColumn: "21",
                              fsetRow: "1",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.rightPupilSize",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              label: "Both pupils",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "bothPupils",
                              inputType: "select",
                              tableColumn: "23",
                              fsetRow: "1",
                              fsetCol: "3",
                              options: [
                                {
                                  text: "Equal"
                                },
                                {
                                  text: "Unequal"
                                }
                              ],
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.bothPupils",
                              tableKey: "table",
                              formColumn: "3"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Left pupil response to light",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "leftPupilResponseToLight",
                              inputType: "select",
                              tableColumn: "20",
                              fsetRow: "2",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.leftPupilResponseToLight",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right pupil response to light",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "rightPupilResponseToLight",
                              inputType: "select",
                              tableColumn: "22",
                              fsetRow: "2",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.rightPupilResponseToLight",
                              tableKey: "table",
                              formColumn: "2"
                            },
                            {
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "pupils",
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              tableColumn: "24",
                              fsetRow: "2",
                              fsetCol: "3",
                              dataParent: "neurological.table.pupils",
                              fqn: "neurological.table.pupils.aSpacer",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "3"
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
                    label: "Stroke Assessment",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "stroke",
                    inputType: "fieldset",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "24",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.stroke",
                    containerType: "fieldset",
                    containerKey: "stroke",
                    tableCss: "hide-table-element",
                    tableKey: "table",
                    formFieldSet: {
                      rows: [
                        {
                          formRow: "1",
                          elements: [
                            {
                              label: "Level of conciousness",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousness",
                              inputType: "select",
                              tableColumn: "25",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousness",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Best gaze",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "bestGaze",
                              inputType: "select",
                              tableColumn: "26",
                              fsetRow: "1",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.bestGaze",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Level of conciousness questions",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousnessQuestions",
                              inputType: "select",
                              tableColumn: "27",
                              fsetRow: "2",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousnessQuestions",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Visual",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "visual",
                              inputType: "select",
                              tableColumn: "28",
                              fsetRow: "2",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.visual",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Level of conciousness commands",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "levelOfConciousnessCommands",
                              inputType: "select",
                              tableColumn: "29",
                              fsetRow: "3",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.levelOfConciousnessCommands",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Facial palsy",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "facialPalsy",
                              inputType: "select",
                              tableColumn: "30",
                              fsetRow: "3",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.facialPalsy",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Motor - left arm",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorLeftArm",
                              inputType: "select",
                              tableColumn: "31",
                              fsetRow: "4",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorLeftArm",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Sensory",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "sensory",
                              inputType: "select",
                              tableColumn: "32",
                              fsetRow: "4",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.sensory",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Motor - right arm",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorRightArm",
                              inputType: "select",
                              tableColumn: "33",
                              fsetRow: "5",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorRightArm",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Best language",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "bestLanguage",
                              inputType: "select",
                              tableColumn: "34",
                              fsetRow: "5",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.bestLanguage",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Motor - left leg",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorLeftLeg",
                              inputType: "select",
                              tableColumn: "35",
                              fsetRow: "6",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorLeftLeg",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Dysarthria",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "dysarthria",
                              inputType: "select",
                              tableColumn: "36",
                              fsetRow: "6",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.dysarthria",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Motor - right leg",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "motorRightLeg",
                              inputType: "select",
                              tableColumn: "37",
                              fsetRow: "7",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.motorRightLeg",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Extinction and inattention",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "extinctionAndInattention",
                              inputType: "select",
                              tableColumn: "38",
                              fsetRow: "7",
                              fsetCol: "2",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.extinctionAndInattention",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              label: "Limb ataxia",
                              pageDataKey: "neurological",
                              level2Key: "table",
                              level3Key: "stroke",
                              elementKey: "limbAtaxia",
                              inputType: "select",
                              tableColumn: "39",
                              fsetRow: "8",
                              fsetCol: "1",
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
                              dataParent: "neurological.table.stroke",
                              fqn: "neurological.table.stroke.limbAtaxia",
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
                formRow: "5",
                elements: [
                  {
                    label: "Comments",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "comments",
                    inputType: "textarea",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "40",
                    fsetRow: "9",
                    fsetCol: "1",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.comments",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    label: "<b>Resources</b><p>Morse Fall Score <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p><p>Mini-mental state examination (MMSE) <a target=\'_blank\' href=\'https://google.ca\'>external link</a></p>",
                    pageDataKey: "neurological",
                    level2Key: "table",
                    elementKey: "resources",
                    inputType: "form_label",
                    formRow: "6",
                    formColumn: "1",
                    formOption: "withExternalUrls",
                    tableColumn: "41",
                    fsetRow: "9",
                    fsetCol: "2",
                    dataParent: "neurological.table",
                    fqn: "neurological.table.resources",
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
    respiratory: {
      pageTitle: "Respiratory assessment",
      pageDataKey: "respiratory",
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a respiratory assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.time",
              tableKey: "table"
            },
            {
              label: "Patent",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "patent",
              inputType: "checkbox",
              tableColumn: "5",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.patent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Obstructed",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "obstructed",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.obstructed",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oral endotracheal tube",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "oett",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.oett",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Other",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "otherValue",
              inputType: "checkbox",
              tableColumn: "8",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.otherValue",
              tableKey: "table",
              formColumn: "1"
            },
            {
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "otherValue",
              inputType: "text",
              tableColumn: "9",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.otherValue"
            },
            {
              label: "Oxygen therapy",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "oxygenTherapy",
              inputType: "text",
              tableColumn: "10",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.oxygenTherapy",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Oxygen flow",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "airway",
              elementKey: "oxygenFlow",
              inputType: "text",
              tableColumn: "11",
              fsetRow: "7",
              fsetCol: "1",
              suffix: "/lpm",
              dataParent: "respiratory.table.airway",
              fqn: "respiratory.table.airway.oxygenFlow",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Left upper lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "lul",
              inputType: "select",
              tableColumn: "12",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.lul",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right upper lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rul",
              inputType: "select",
              tableColumn: "13",
              fsetRow: "1",
              fsetCol: "2",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rul",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Airway",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "airway",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.airway",
              containerType: "fieldset",
              containerKey: "airway",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Breath sounds",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "breath",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.breath",
              containerType: "fieldset",
              containerKey: "breath",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "14",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.aSpacer",
              tableCss: "hide-table-element",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right middle lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rml",
              inputType: "select",
              tableColumn: "15",
              fsetRow: "2",
              fsetCol: "2",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rml",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Left lower lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "lll",
              inputType: "select",
              tableColumn: "16",
              fsetRow: "3",
              fsetCol: "1",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.lll",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Right lower lung",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "rll",
              inputType: "select",
              tableColumn: "17",
              fsetRow: "3",
              fsetCol: "2",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.rll",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Respiratory rhythm",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "respiratoryRhythm",
              inputType: "select",
              tableColumn: "18",
              fsetRow: "4",
              fsetCol: "1",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.respiratoryRhythm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Respiratory depth",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "respiratoryDepth",
              inputType: "select",
              tableColumn: "19",
              fsetRow: "5",
              fsetCol: "1",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.respiratoryDepth",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Cough",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "cough",
              inputType: "select",
              tableColumn: "20",
              fsetRow: "4",
              fsetCol: "2",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.cough",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "Sputum colour",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "sputumColour",
              inputType: "select",
              tableColumn: "21",
              fsetRow: "5",
              fsetCol: "2",
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
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.sputumColour",
              tableKey: "table",
              formColumn: "2"
            },
            {
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "aSpacer",
              inputType: "spacer",
              tableColumn: "22",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.aSpacer",
              tableCss: "hide-table-element"
            },
            {
              label: "Sputum comments",
              pageDataKey: "respiratory",
              level2Key: "table",
              level3Key: "breath",
              elementKey: "sputumComments",
              inputType: "text",
              tableColumn: "23",
              fsetRow: "6",
              fsetCol: "2",
              dataParent: "respiratory.table.breath",
              fqn: "respiratory.table.breath.sputumComments",
              tableKey: "table",
              formColumn: "2"
            },
            {
              label: "General comments",
              pageDataKey: "respiratory",
              level2Key: "table",
              elementKey: "generalComments",
              inputType: "textarea",
              formRow: "3",
              formColumn: "1",
              tableColumn: "24",
              dataParent: "respiratory.table",
              fqn: "respiratory.table.generalComments",
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
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Airway",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "airway",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.airway",
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
                              label: "Patent",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "patent",
                              inputType: "checkbox",
                              tableColumn: "5",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.patent",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Obstructed",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "obstructed",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.obstructed",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Oral endotracheal tube",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "oett",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.oett",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Other",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "otherValue",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.otherValue",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Other",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "otherValue",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.otherValue",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Oxygen therapy",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "oxygenTherapy",
                              inputType: "text",
                              tableColumn: "10",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.oxygenTherapy",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Oxygen flow",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "airway",
                              elementKey: "oxygenFlow",
                              inputType: "text",
                              tableColumn: "11",
                              fsetRow: "7",
                              fsetCol: "1",
                              suffix: "/lpm",
                              dataParent: "respiratory.table.airway",
                              fqn: "respiratory.table.airway.oxygenFlow",
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
                    label: "Breath sounds",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "breath",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.breath",
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
                              label: "Left upper lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "lul",
                              inputType: "select",
                              tableColumn: "12",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.lul",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right upper lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rul",
                              inputType: "select",
                              tableColumn: "13",
                              fsetRow: "1",
                              fsetCol: "2",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rul",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.aSpacer",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right middle lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rml",
                              inputType: "select",
                              tableColumn: "15",
                              fsetRow: "2",
                              fsetCol: "2",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rml",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Left lower lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "lll",
                              inputType: "select",
                              tableColumn: "16",
                              fsetRow: "3",
                              fsetCol: "1",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.lll",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Right lower lung",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "rll",
                              inputType: "select",
                              tableColumn: "17",
                              fsetRow: "3",
                              fsetCol: "2",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.rll",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Respiratory rhythm",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "respiratoryRhythm",
                              inputType: "select",
                              tableColumn: "18",
                              fsetRow: "4",
                              fsetCol: "1",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.respiratoryRhythm",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Cough",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "cough",
                              inputType: "select",
                              tableColumn: "20",
                              fsetRow: "4",
                              fsetCol: "2",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.cough",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Respiratory depth",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "respiratoryDepth",
                              inputType: "select",
                              tableColumn: "19",
                              fsetRow: "5",
                              fsetCol: "1",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.respiratoryDepth",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Sputum colour",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "sputumColour",
                              inputType: "select",
                              tableColumn: "21",
                              fsetRow: "5",
                              fsetCol: "2",
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
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.sputumColour",
                              tableKey: "table",
                              formColumn: "2"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "aSpacer",
                              inputType: "spacer",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.aSpacer",
                              tableCss: "hide-table-element",
                              tableKey: "table",
                              formColumn: "1"
                            },
                            {
                              label: "Sputum comments",
                              pageDataKey: "respiratory",
                              level2Key: "table",
                              level3Key: "breath",
                              elementKey: "sputumComments",
                              inputType: "text",
                              tableColumn: "23",
                              fsetRow: "6",
                              fsetCol: "2",
                              dataParent: "respiratory.table.breath",
                              fqn: "respiratory.table.breath.sputumComments",
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
                    label: "General comments",
                    pageDataKey: "respiratory",
                    level2Key: "table",
                    elementKey: "generalComments",
                    inputType: "textarea",
                    formRow: "3",
                    formColumn: "1",
                    tableColumn: "24",
                    dataParent: "respiratory.table",
                    fqn: "respiratory.table.generalComments",
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
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a cardiovascular assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.name",
              tableKey: "table"
            },
            {
              label: "Profession",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.profession",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.time",
              tableKey: "table"
            },
            {
              label: "Pulse",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "pulse",
              inputType: "select",
              formRow: "2",
              formColumn: "1",
              tableColumn: "5",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.pulse",
              tableKey: "table"
            },
            {
              label: "Skin appearance",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "skinAppearance",
              inputType: "select",
              formRow: "2",
              formColumn: "2",
              tableColumn: "6",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.skinAppearance",
              tableKey: "table"
            },
            {
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "spacer1",
              inputType: "form_label",
              formRow: "3",
              formColumn: "1",
              formOption: "spacer",
              tableColumn: "7",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.spacer1",
              tableKey: "table"
            },
            {
              label: "Cap refill",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelCapRefill",
              inputType: "form_label",
              formRow: "3",
              formColumn: "2",
              tableColumn: "8",
              helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelCapRefill",
              tableKey: "table"
            },
            {
              label: "Temperature",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelTemperature",
              inputType: "form_label",
              formRow: "3",
              formColumn: "3",
              tableColumn: "9",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelTemperature",
              tableKey: "table"
            },
            {
              label: "Peripheral edema",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelPeripheral",
              inputType: "form_label",
              formRow: "3",
              formColumn: "4",
              tableColumn: "10",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelPeripheral",
              tableKey: "table"
            },
            {
              label: "Nail bed colour",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelNailBed",
              inputType: "form_label",
              formRow: "3",
              formColumn: "5",
              tableColumn: "11",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelNailBed",
              tableKey: "table"
            },
            {
              label: "Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "lableRight",
              inputType: "form_label",
              formRow: "4",
              formColumn: "1",
              tableColumn: "12",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.lableRight",
              tableKey: "table"
            },
            {
              label: "Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "lableLeftHand",
              inputType: "form_label",
              formRow: "5",
              formColumn: "1",
              tableColumn: "13",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.lableLeftHand",
              tableKey: "table"
            },
            {
              label: "Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelRightFoot",
              inputType: "form_label",
              formRow: "6",
              formColumn: "1",
              tableColumn: "14",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelRightFoot",
              tableKey: "table"
            },
            {
              label: "Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "labelLeftFoot",
              inputType: "form_label",
              formRow: "7",
              formColumn: "1",
              tableColumn: "15",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.labelLeftFoot",
              tableKey: "table"
            },
            {
              label: "Cap refill: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "16",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillRightHand",
              tableKey: "table"
            },
            {
              label: "Cap refill: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "17",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillLeftHand",
              tableKey: "table"
            },
            {
              label: "Cap refill: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "18",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillRightFoot",
              tableKey: "table"
            },
            {
              label: "Temperature: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "capRefillLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "2",
              formOption: "hideLabel",
              tableColumn: "19",
              options: [
                {
                  text: "Normal"
                },
                {
                  text: "Delayed"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.capRefillLeftFoot",
              tableKey: "table"
            },
            {
              label: "Temperature: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "20",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureRightHand",
              tableKey: "table"
            },
            {
              label: "Temperature: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "21",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureLeftHand",
              tableKey: "table"
            },
            {
              label: "Temperature: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "22",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureRightFoot",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "temperatureLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "3",
              formOption: "hideLabel",
              tableColumn: "23",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.temperatureLeftFoot",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "24",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaRightHand",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Right foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "25",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaLeftHand",
              tableKey: "table"
            },
            {
              label: "Peripheral edema: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "26",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaRightFoot",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Right hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "peripheralEdemaLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "4",
              formOption: "hideLabel",
              tableColumn: "27",
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
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Left hand",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourRightHand",
              inputType: "select",
              formRow: "4",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "28",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourRightHand",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Right Foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourLeftHand",
              inputType: "select",
              formRow: "5",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "29",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourLeftHand",
              tableKey: "table"
            },
            {
              label: "Nail bed colour: Left foot",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourRightFoot",
              inputType: "select",
              formRow: "6",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "30",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourRightFoot",
              tableKey: "table"
            },
            {
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "nailBedColourLeftFoot",
              inputType: "select",
              formRow: "7",
              formColumn: "5",
              formOption: "hideLabel",
              tableColumn: "31",
              options: [
                {
                  text: "Pink"
                },
                {
                  text: "Cyanotic"
                }
              ],
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.nailBedColourLeftFoot",
              tableKey: "table"
            },
            {
              label: "Comments",
              pageDataKey: "cardiovascular",
              level2Key: "table",
              elementKey: "comments",
              inputType: "text",
              formRow: "8",
              formColumn: "1",
              tableColumn: "32",
              dataParent: "cardiovascular.table",
              fqn: "cardiovascular.table.comments",
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
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Pulse",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "pulse",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "1",
                    tableColumn: "5",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.pulse",
                    tableKey: "table"
                  },
                  {
                    label: "Skin appearance",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "skinAppearance",
                    inputType: "select",
                    formRow: "2",
                    formColumn: "2",
                    tableColumn: "6",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.skinAppearance",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "3",
                elements: [
                  {
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "spacer1",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "1",
                    formOption: "spacer",
                    tableColumn: "7",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.spacer1",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelCapRefill",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "2",
                    tableColumn: "8",
                    helperText: "Normal < 3 seconds-NL-Delayed > 3 seconds",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelCapRefill",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelTemperature",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "3",
                    tableColumn: "9",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelTemperature",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelPeripheral",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "4",
                    tableColumn: "10",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelPeripheral",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelNailBed",
                    inputType: "form_label",
                    formRow: "3",
                    formColumn: "5",
                    tableColumn: "11",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelNailBed",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "4",
                elements: [
                  {
                    label: "Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "lableRight",
                    inputType: "form_label",
                    formRow: "4",
                    formColumn: "1",
                    tableColumn: "12",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.lableRight",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "16",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "20",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "24",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaRightHand",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourRightHand",
                    inputType: "select",
                    formRow: "4",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "28",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourRightHand",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "5",
                elements: [
                  {
                    label: "Left hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "lableLeftHand",
                    inputType: "form_label",
                    formRow: "5",
                    formColumn: "1",
                    tableColumn: "13",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.lableLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "17",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "21",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "25",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaLeftHand",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Right Foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourLeftHand",
                    inputType: "select",
                    formRow: "5",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "29",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourLeftHand",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "6",
                elements: [
                  {
                    label: "Right foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelRightFoot",
                    inputType: "form_label",
                    formRow: "6",
                    formColumn: "1",
                    tableColumn: "14",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Cap refill: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "18",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "22",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "26",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaRightFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourRightFoot",
                    inputType: "select",
                    formRow: "6",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "30",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourRightFoot",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "7",
                elements: [
                  {
                    label: "Left foot",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "labelLeftFoot",
                    inputType: "form_label",
                    formRow: "7",
                    formColumn: "1",
                    tableColumn: "15",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.labelLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Temperature: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "capRefillLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "2",
                    formOption: "hideLabel",
                    tableColumn: "19",
                    options: [
                      {
                        text: "Normal"
                      },
                      {
                        text: "Delayed"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.capRefillLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Peripheral edema: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "temperatureLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "3",
                    formOption: "hideLabel",
                    tableColumn: "23",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.temperatureLeftFoot",
                    tableKey: "table"
                  },
                  {
                    label: "Nail bed colour: Right hand",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "peripheralEdemaLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "4",
                    formOption: "hideLabel",
                    tableColumn: "27",
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
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.peripheralEdemaLeftFoot",
                    tableKey: "table"
                  },
                  {
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "nailBedColourLeftFoot",
                    inputType: "select",
                    formRow: "7",
                    formColumn: "5",
                    formOption: "hideLabel",
                    tableColumn: "31",
                    options: [
                      {
                        text: "Pink"
                      },
                      {
                        text: "Cyanotic"
                      }
                    ],
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.nailBedColourLeftFoot",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "8",
                elements: [
                  {
                    label: "Comments",
                    pageDataKey: "cardiovascular",
                    level2Key: "table",
                    elementKey: "comments",
                    inputType: "text",
                    formRow: "8",
                    formColumn: "1",
                    tableColumn: "32",
                    dataParent: "cardiovascular.table",
                    fqn: "cardiovascular.table.comments",
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
      generated: "2019-03-28T09:35:30-07:00",
      hasTable: true,
      tables: [
        {
          tableKey: "table",
          addButtonText: "Add a gastrointestinal assessment",
          tableCells: [
            {
              label: "Name",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "name",
              inputType: "text",
              formRow: "1",
              formColumn: "1",
              tableColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.name",
              tableKey: "table"
            },
            {
              label: "Bowel sounds",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "bSounds",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "3",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.bSounds",
              containerType: "fieldset",
              containerKey: "bSounds",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Day",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "day",
              inputType: "day",
              formRow: "1",
              formColumn: "3",
              tableColumn: "3",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.day",
              tableKey: "table"
            },
            {
              label: "Time",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "time",
              inputType: "time",
              formRow: "1",
              formColumn: "4",
              tableColumn: "4",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.time",
              tableKey: "table"
            },
            {
              label: "Soft",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "soft",
              inputType: "checkbox",
              tableColumn: "5",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.soft",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Tender",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "tender",
              inputType: "checkbox",
              tableColumn: "6",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.tender",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Rigid",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "rigid",
              inputType: "checkbox",
              tableColumn: "7",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.rigid",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Guarding",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "guarding",
              inputType: "checkbox",
              tableColumn: "8",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.guarding",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Distended",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "distended",
              inputType: "checkbox",
              tableColumn: "9",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.distended",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Scars",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "scars",
              inputType: "checkbox",
              tableColumn: "10",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.scars",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Abdominal pain",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "pain",
              inputType: "select",
              tableColumn: "11",
              fsetRow: "7",
              fsetCol: "1",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.pain",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "If answered yes, please complete the pain assessment",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "abdomen",
              elementKey: "aLabel",
              inputType: "form_label",
              formOption: "labelWithPageRef",
              tableColumn: "12",
              fsetRow: "8",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.abdomen",
              fqn: "gastrointestinal.table.abdomen.aLabel",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Abdomen",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "abdomen",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.abdomen",
              containerType: "fieldset",
              containerKey: "abdomen",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Emesis present?",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "emesisPresent",
              inputType: "select",
              tableColumn: "13",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Yes"
                },
                {
                  text: "No"
                }
              ],
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.emesisPresent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Nausea",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "nausea",
              inputType: "text",
              tableColumn: "14",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.nausea",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Vomiting",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "vomiting",
              inputType: "text",
              tableColumn: "15",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.vomiting",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Emesis colour",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "colour",
              inputType: "select",
              tableColumn: "16",
              fsetRow: "4",
              fsetCol: "1",
              options: [
                {
                  text: "Greenish-yellow"
                },
                {
                  text: "Blood-tinged"
                },
                {
                  text: "Bright red"
                },
                {
                  text: "Dark red"
                },
                {
                  text: "Black"
                }
              ],
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.colour",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Description",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "description",
              inputType: "text",
              tableColumn: "17",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.description",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Approximate volume",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "emesis",
              elementKey: "amount",
              inputType: "select",
              tableColumn: "18",
              fsetRow: "6",
              fsetCol: "1",
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
              dataParent: "gastrointestinal.table.emesis",
              fqn: "gastrointestinal.table.emesis.amount",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Emesis",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "emesis",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "2",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.emesis",
              containerType: "fieldset",
              containerKey: "emesis",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Difficulty",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "eating",
              inputType: "select",
              tableColumn: "20",
              fsetRow: "1",
              fsetCol: "1",
              options: [
                {
                  text: "Regular"
                },
                {
                  text: "Difficult"
                }
              ],
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.eating",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Reason",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "reason",
              inputType: "text",
              tableColumn: "21",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.reason",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "NPO since day",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "npoSinceDate",
              inputType: "day",
              tableColumn: "22",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.npoSinceDate",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Profession",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "profession",
              inputType: "text",
              formRow: "1",
              formColumn: "2",
              tableColumn: "2",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.profession",
              tableKey: "table"
            },
            {
              label: "Eating",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "eatingGroup",
              inputType: "fieldset",
              formRow: "2",
              formColumn: "3",
              formOption: "hideLabel",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.eatingGroup",
              containerType: "fieldset",
              containerKey: "eatingGroup",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Stool colour",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolColour",
              inputType: "select",
              tableColumn: "24",
              fsetRow: "1",
              fsetCol: "1",
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
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolColour",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Description",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolDescription",
              inputType: "select",
              tableColumn: "25",
              fsetRow: "2",
              fsetCol: "1",
              options: [
                {
                  text: "Runny"
                },
                {
                  text: "Hard pellets"
                }
              ],
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolDescription",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Amount",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolAmount",
              inputType: "text",
              tableColumn: "26",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolAmount",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Source",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "stoolSource",
              inputType: "select",
              tableColumn: "27",
              fsetRow: "4",
              fsetCol: "1",
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
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.stoolSource",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Comments",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "stool",
              elementKey: "comments",
              inputType: "textarea",
              formRow: "4",
              tableColumn: "45",
              dataParent: "gastrointestinal.table.stool",
              fqn: "gastrointestinal.table.stool.comments",
              tableKey: "table"
            },
            {
              label: "Stool",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "stool",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "1",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.stool",
              containerType: "fieldset",
              containerKey: "stool",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "Normal",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "normal",
              inputType: "checkbox",
              tableColumn: "46",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.normal",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Constipation",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "constipation",
              inputType: "checkbox",
              tableColumn: "47",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.constipation",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Diarrhea",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "diarrhea",
              inputType: "checkbox",
              tableColumn: "48",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.diarrhea",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Melena",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "melena",
              inputType: "checkbox",
              tableColumn: "49",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.melena",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Incontinent",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "incontinent",
              inputType: "checkbox",
              tableColumn: "50",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.incontinent",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Last bowel movement",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bowel",
              elementKey: "lastBm",
              inputType: "text",
              tableColumn: "51",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bowel",
              fqn: "gastrointestinal.table.bowel.lastBm",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Bowel sounds",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              elementKey: "bowel",
              inputType: "fieldset",
              formRow: "3",
              formColumn: "2",
              dataParent: "gastrointestinal.table",
              fqn: "gastrointestinal.table.bowel",
              containerType: "fieldset",
              containerKey: "bowel",
              tableCss: "hide-table-element",
              tableKey: "table"
            },
            {
              label: "None",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsNone",
              inputType: "checkbox",
              tableColumn: "39",
              fsetRow: "1",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsNone",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "LUQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsLUQ",
              inputType: "checkbox",
              tableColumn: "40",
              fsetRow: "2",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsLUQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "RUQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsRUQ",
              inputType: "checkbox",
              tableColumn: "41",
              fsetRow: "3",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsRUQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "LLQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsLLQ",
              inputType: "checkbox",
              tableColumn: "42",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsLLQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "RLQ",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "bsRLQ",
              inputType: "checkbox",
              tableColumn: "43",
              fsetRow: "5",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.bsRLQ",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Hypoactive",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "hypoactive",
              inputType: "checkbox",
              tableColumn: "44",
              fsetRow: "6",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.hypoactive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "Hyperactive",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "bSounds",
              elementKey: "hyperactive",
              inputType: "checkbox",
              tableColumn: "45",
              fsetRow: "7",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.bSounds",
              fqn: "gastrointestinal.table.bSounds.hyperactive",
              tableKey: "table",
              formColumn: "1"
            },
            {
              label: "NPO since time",
              pageDataKey: "gastrointestinal",
              level2Key: "table",
              level3Key: "eatingGroup",
              elementKey: "npoSinceTime",
              inputType: "time",
              tableColumn: "23",
              fsetRow: "4",
              fsetCol: "1",
              dataParent: "gastrointestinal.table.eatingGroup",
              fqn: "gastrointestinal.table.eatingGroup.npoSinceTime",
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
                    label: "Name",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "name",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "1",
                    tableColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.name",
                    tableKey: "table"
                  },
                  {
                    label: "Profession",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "profession",
                    inputType: "text",
                    formRow: "1",
                    formColumn: "2",
                    tableColumn: "2",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.profession",
                    tableKey: "table"
                  },
                  {
                    label: "Day",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "day",
                    inputType: "day",
                    formRow: "1",
                    formColumn: "3",
                    tableColumn: "3",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.day",
                    tableKey: "table"
                  },
                  {
                    label: "Time",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "time",
                    inputType: "time",
                    formRow: "1",
                    formColumn: "4",
                    tableColumn: "4",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.time",
                    tableKey: "table"
                  }
                ]
              },
              {
                formRow: "2",
                elements: [
                  {
                    label: "Abdomen",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "abdomen",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.abdomen",
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
                              label: "Soft",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "soft",
                              inputType: "checkbox",
                              tableColumn: "5",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.soft",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Tender",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "tender",
                              inputType: "checkbox",
                              tableColumn: "6",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.tender",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Rigid",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "rigid",
                              inputType: "checkbox",
                              tableColumn: "7",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.rigid",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Guarding",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "guarding",
                              inputType: "checkbox",
                              tableColumn: "8",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.guarding",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Distended",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "distended",
                              inputType: "checkbox",
                              tableColumn: "9",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.distended",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Scars",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "scars",
                              inputType: "checkbox",
                              tableColumn: "10",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.scars",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Abdominal pain",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "pain",
                              inputType: "select",
                              tableColumn: "11",
                              fsetRow: "7",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.pain",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "8",
                          elements: [
                            {
                              label: "If answered yes, please complete the pain assessment",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "abdomen",
                              elementKey: "aLabel",
                              inputType: "form_label",
                              formOption: "labelWithPageRef",
                              tableColumn: "12",
                              fsetRow: "8",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.abdomen",
                              fqn: "gastrointestinal.table.abdomen.aLabel",
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
                    label: "Emesis",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "emesis",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "2",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.emesis",
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
                              label: "Emesis present?",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "emesisPresent",
                              inputType: "select",
                              tableColumn: "13",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Yes"
                                },
                                {
                                  text: "No"
                                }
                              ],
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.emesisPresent",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Nausea",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "nausea",
                              inputType: "text",
                              tableColumn: "14",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.nausea",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Vomiting",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "vomiting",
                              inputType: "text",
                              tableColumn: "15",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.vomiting",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Emesis colour",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "colour",
                              inputType: "select",
                              tableColumn: "16",
                              fsetRow: "4",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Greenish-yellow"
                                },
                                {
                                  text: "Blood-tinged"
                                },
                                {
                                  text: "Bright red"
                                },
                                {
                                  text: "Dark red"
                                },
                                {
                                  text: "Black"
                                }
                              ],
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.colour",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Description",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "description",
                              inputType: "text",
                              tableColumn: "17",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.description",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Approximate volume",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "emesis",
                              elementKey: "amount",
                              inputType: "select",
                              tableColumn: "18",
                              fsetRow: "6",
                              fsetCol: "1",
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
                              dataParent: "gastrointestinal.table.emesis",
                              fqn: "gastrointestinal.table.emesis.amount",
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
                    label: "Eating",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "eatingGroup",
                    inputType: "fieldset",
                    formRow: "2",
                    formColumn: "3",
                    formOption: "hideLabel",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.eatingGroup",
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
                              label: "Difficulty",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "eating",
                              inputType: "select",
                              tableColumn: "20",
                              fsetRow: "1",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Regular"
                                },
                                {
                                  text: "Difficult"
                                }
                              ],
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.eating",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Reason",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "reason",
                              inputType: "text",
                              tableColumn: "21",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.reason",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "NPO since day",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "npoSinceDate",
                              inputType: "day",
                              tableColumn: "22",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.npoSinceDate",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "NPO since time",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "eatingGroup",
                              elementKey: "npoSinceTime",
                              inputType: "time",
                              tableColumn: "23",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.eatingGroup",
                              fqn: "gastrointestinal.table.eatingGroup.npoSinceTime",
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
              },
              {
                formRow: "3",
                elements: [
                  {
                    label: "Stool",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "stool",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "1",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.stool",
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
                              label: "Stool colour",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolColour",
                              inputType: "select",
                              tableColumn: "24",
                              fsetRow: "1",
                              fsetCol: "1",
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
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolColour",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Description",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolDescription",
                              inputType: "select",
                              tableColumn: "25",
                              fsetRow: "2",
                              fsetCol: "1",
                              options: [
                                {
                                  text: "Runny"
                                },
                                {
                                  text: "Hard pellets"
                                }
                              ],
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolDescription",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Amount",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolAmount",
                              inputType: "text",
                              tableColumn: "26",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolAmount",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Source",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "stool",
                              elementKey: "stoolSource",
                              inputType: "select",
                              tableColumn: "27",
                              fsetRow: "4",
                              fsetCol: "1",
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
                              dataParent: "gastrointestinal.table.stool",
                              fqn: "gastrointestinal.table.stool.stoolSource",
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
                    label: "Bowel sounds",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "bowel",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "2",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.bowel",
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
                              label: "Normal",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "normal",
                              inputType: "checkbox",
                              tableColumn: "46",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.normal",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "Constipation",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "constipation",
                              inputType: "checkbox",
                              tableColumn: "47",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.constipation",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "Diarrhea",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "diarrhea",
                              inputType: "checkbox",
                              tableColumn: "48",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.diarrhea",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "Melena",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "melena",
                              inputType: "checkbox",
                              tableColumn: "49",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.melena",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "Incontinent",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "incontinent",
                              inputType: "checkbox",
                              tableColumn: "50",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.incontinent",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Last bowel movement",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bowel",
                              elementKey: "lastBm",
                              inputType: "text",
                              tableColumn: "51",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bowel",
                              fqn: "gastrointestinal.table.bowel.lastBm",
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
                    label: "Bowel sounds",
                    pageDataKey: "gastrointestinal",
                    level2Key: "table",
                    elementKey: "bSounds",
                    inputType: "fieldset",
                    formRow: "3",
                    formColumn: "3",
                    dataParent: "gastrointestinal.table",
                    fqn: "gastrointestinal.table.bSounds",
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
                              label: "None",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsNone",
                              inputType: "checkbox",
                              tableColumn: "39",
                              fsetRow: "1",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsNone",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "2",
                          elements: [
                            {
                              label: "LUQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsLUQ",
                              inputType: "checkbox",
                              tableColumn: "40",
                              fsetRow: "2",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsLUQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "3",
                          elements: [
                            {
                              label: "RUQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsRUQ",
                              inputType: "checkbox",
                              tableColumn: "41",
                              fsetRow: "3",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsRUQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "4",
                          elements: [
                            {
                              label: "LLQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsLLQ",
                              inputType: "checkbox",
                              tableColumn: "42",
                              fsetRow: "4",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsLLQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "5",
                          elements: [
                            {
                              label: "RLQ",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "bsRLQ",
                              inputType: "checkbox",
                              tableColumn: "43",
                              fsetRow: "5",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.bsRLQ",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "6",
                          elements: [
                            {
                              label: "Hypoactive",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "hypoactive",
                              inputType: "checkbox",
                              tableColumn: "44",
                              fsetRow: "6",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.hypoactive",
                              tableKey: "table",
                              formColumn: "1"
                            }
                          ]
                        },
                        {
                          formRow: "7",
                          elements: [
                            {
                              label: "Hyperactive",
                              pageDataKey: "gastrointestinal",
                              level2Key: "table",
                              level3Key: "bSounds",
                              elementKey: "hyperactive",
                              inputType: "checkbox",
                              tableColumn: "45",
                              fsetRow: "7",
                              fsetCol: "1",
                              dataParent: "gastrointestinal.table.bSounds",
                              fqn: "gastrointestinal.table.bSounds.hyperactive",
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