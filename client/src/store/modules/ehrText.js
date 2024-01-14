
// TODO translate the text in this file which are all function calls
import { ehrTextFnEn } from '@/text/ehrTextFnEn'

import ehrLabelsEn  from '@/text/en/ehr-label-en.json'
import ehrAddButtonEn from '@/text/en/ehr-addButtonText-en.json'
import ehrTableLabelEn from '@/text/en/ehr-tableLabel-en.json'
import ehrHelperTextEn from '@/text/en/ehr-helperText-en.json'
import ehrOptionsChecksetEn  from '@/text/en/ehr-optionsCheckset-en.json'
import ehrOptionsSelectEn  from '@/text/en/ehr-optionsSelect-en.json'
import ehrTableActionLabelEn from '@/text/en/ehrTableActionLabelEn.json'

import ehrLabelsFr from '@/text/fr/ehr-label-fr.json'
import ehrAddButtonFr from '@/text/fr/ehr-addButtonText-fr.json'
import ehrTableLabelFr from '@/text/fr/ehr-tableLabel-fr.json'
import ehrHelperTextFr from '@/text/fr/ehr-helperText-fr.json'
import ehrOptionsChecksetFr  from '@/text/fr/ehr-optionsCheckset-fr.json'
import ehrOptionsSelectFr  from '@/text/fr/ehr-optionsCheckset-fr.json'

import ehrLabelsEs from '@/text/es/ehr-label-es.json'
import ehrAddButtonEs from '@/text/es/ehr-addButtonText-es.json'
import ehrTableLabelEs from '@/text/es/ehr-tableLabel-es.json'
import ehrHelperTextEs from '@/text/es/ehr-helperText-es.json'
import ehrOptionsChecksetEs  from '@/text/es/ehr-optionsCheckset-es.json'
import ehrOptionsSelectEs  from '@/text/es/ehr-optionsSelect-es.json'

// ehrTextEn-Master.json is the primary source for en text not associated with EHR content
import ehrTextEn from '@/text/ehrTextEn-Master.json'
import ehrTextEs from '@/text/es/ehrTextEs.json'
import ehrTextFr from '@/text/fr/ehrTextFr.json'

// directly define these constants here to avoid something strange when app is built
// import { APP_LANGUAGE_EN, APP_LANGUAGE_FR } from '@/helpers/store-helper'
const APP_LANGUAGE_EN = 'en'
const APP_LANGUAGE_FR = 'fr'
const APP_LANGUAGE_ES = 'es'

/*
 */
const state = {
  ehrText: ehrTextEn,
  ehrTextFn: ehrTextFnEn,
  ehrOptionsCheckset: ehrOptionsChecksetEn,
  ehrOptionsSelect: ehrOptionsSelectEn,
  ehrLabels: ehrLabelsEn,
  ehrAddButton: ehrAddButtonEn,
  ehrHelperText: ehrHelperTextEn,
  ehrTableLabel: ehrTableLabelEn,
  ehrTableActionLabel: ehrTableActionLabelEn,
  ehrLanguage: APP_LANGUAGE_EN,
}

const getters = {
  ehrText: state => state.ehrText,
  ehrTextFn: state => state.ehrTextFn,
  ehrLabels: state => state.ehrLabels,
  ehrAddButton: state => state.ehrAddButton,
  ehrHelperText: state => state.ehrHelperText,
  ehrOptionsCheckset: state => state.ehrOptionsCheckset,
  ehrOptionsSelect: state => state.ehrOptionsSelect,
  ehrTableActionLabel: state => state.ehrTableActionLabel,
  ehrTableLabel: state => state.ehrTableLabel,
  ehrLanguage: state => state.ehrLanguage,
}

const actions = {
  initialize: function ({ commit }) {
    commit('initialize')
  },
  setEhrLanguageEnglish ( context ) {
    context.commit('_setEhrLanguage', APP_LANGUAGE_EN)
  },
  setEhrLanguageFrench ( context ) {
    context.commit('_setEhrLanguage', APP_LANGUAGE_FR)
  },
  setEhrLanguageSpanish ( context ) {
    context.commit('_setEhrLanguage', APP_LANGUAGE_ES)
  },
}

function setText (state) {
  switch (state.ehrLanguage) {
  case APP_LANGUAGE_ES:
    state.ehrText = ehrTextEs
    state.ehrLabels = ehrLabelsEs
    state.ehrAddButton = ehrAddButtonEs
    state.ehrOptionsCheckset = ehrOptionsChecksetEs
    state.ehrOptionsSelect = ehrOptionsSelectEs
    state.ehrTableLabel = ehrTableLabelEs
    state.ehrHelperText = ehrHelperTextEs
    break
  case APP_LANGUAGE_FR:
    state.ehrText = ehrTextFr
    state.ehrLabels = ehrLabelsFr
    state.ehrAddButton = ehrAddButtonFr
    state.ehrOptionsCheckset = ehrOptionsChecksetFr
    state.ehrOptionsSelect = ehrOptionsSelectFr
    state.ehrTableLabel = ehrTableLabelFr
    state.ehrHelperText = ehrHelperTextFr
    break
  case APP_LANGUAGE_EN:
    state.ehrText = ehrTextEn
    state.ehrLabels = ehrLabelsEn
    state.ehrAddButton = ehrAddButtonEn
    state.ehrOptionsCheckset = ehrOptionsChecksetEn
    state.ehrOptionsSelect = ehrOptionsSelectEn
    state.ehrTableLabel = ehrTableLabelEn
    state.ehrHelperText = ehrHelperTextEn
    break
  }
}
const mutations = {
  initialize: function (state) {
    state.ehrLanguage = localStorage.getItem('ehrLanguage') || APP_LANGUAGE_EN
    setText(state)
  },
  _setEhrLanguage: ( state, value) => {
    localStorage.setItem('ehrLanguage', value)
    state.ehrLanguage = value
    setText(state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
