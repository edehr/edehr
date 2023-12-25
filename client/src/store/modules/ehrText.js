import { APP_LANGUAGE_EN, APP_LANGUAGE_FR } from '@/helpers/store-helper'

// TODO translate the text in this file which are all function calls
import { ehrTextFnEn } from '@/text/ehrTextFnEn'

import ehrLabelsEn  from '@/text/en/ehrLabelsEn.json'
import ehrAddButtonEn from '@/text/en/ehrAddButtonEn.json'
import ehrTableLabelEn from '@/text/en/ehrTableLabelEn.json'
import ehrHelperTextEn from '@/text/en/ehrHelperTextEn.json'
import ehrOptionsChecksetEn  from '@/text/en/ehrOptionsChecksetEn.json'
import ehrOptionsSelectEn  from '@/text/en/ehrOptionsSelectEn.json'

import ehrLabelsFr from '@/text/fr/ehrLabelsFr.json'
import ehrAddButtonFr from '@/text/fr/ehrAddButtonFr.json'
import ehrTableLabelFr from '@/text/fr/ehrTableLabelFr.json'
import ehrHelperTextFr from '@/text/fr/ehrHelperTextFr.json'
import ehrOptionsChecksetFr  from '@/text/fr/ehrOptionsChecksetFr.json'
import ehrOptionsSelectFr  from '@/text/fr/ehrOptionsSelectFr.json'

import ehrTextEn from '@/text/en/ehrTextEn.json'
import ehrTextFr from '@/text/fr/ehrTextFr.json'
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
}

function setText (state) {
  switch (state.ehrLanguage) {
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
