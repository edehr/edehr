export const ehrTextFnEn = {
  fluidBalance_overall: (val) => `Cumulative over all ${val}`,
  ERROR_IN_TABLE_ACTION_DEF: (tableDef) => `Error in the TableAction EHR definitions. Missing source for table ${tableDef} `,
  saveDialogVerifyMessage: (name, profession, day, time) => `${name} (${profession}) verifies this record is correct and complete. Encounter day ${day} and time ${time}.  Or save as draft`,
  saveDialogVerifyMessageV2: (name, profession, day, time) => `${name} (${profession}) verifies this record is correct and complete. Dated: ${day}T${time}.  Or save as draft`,
  simulationDayTimeView: (visitDay, visitTime) => `Encounter day ${visitDay} time ${visitTime}`,
  GOTO_COURSE: (name) => `Go to the course ${name}`,
  GOTO_ACTIVITY: (name) => `Go to the activity ${name}`,
}
