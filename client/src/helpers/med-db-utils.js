import store from '../store'

export const MEDICATION_DB_CANADA = 'ca'
export const MEDICATION_DB_USA = 'va'
export const MEDICATION_DB_CANADA_LABEL = 'Canadian'
export const MEDICATION_DB_USA_LABEL = 'VA'

export function getCurrentMedicationDb () {
  return store.getters['consumerStore/medicationDatabase']
}

export function getCurrentMedicationDbLabel () {
  const db = getCurrentMedicationDb()
  let label = ''
  if (db === MEDICATION_DB_USA) {
    label = MEDICATION_DB_USA_LABEL
  }
  if (db === MEDICATION_DB_CANADA) {
    label = MEDICATION_DB_CANADA_LABEL
  }
  return label
}

export function setCurrentMedicationDb (value) {
  store.dispatch('consumerStore/medicationDatabaseSelect', value)
}
