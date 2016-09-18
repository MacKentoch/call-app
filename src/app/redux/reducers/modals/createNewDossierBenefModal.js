import { appConfig } from '../../../config';
import {
  // show modal:
  REQUEST_SHOW_NEW_BENEF_DOSSIER_MODAL,
  SUCCESS_SHOW_NEW_BENEF_DOSSIER_MODAL,
  ERROR_SHOW_NEW_BENEF_DOSSIER_MODAL,
  // hide modal:
  HIDE_NEW_BENEF_DOSSIER_MODAL,
  // fields edtion actions:
  UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL
}                                                 from '../../actions/modals/createNewDossierBenefModal';

const initialState = {
  // UI state:
  isOpened:  false,
  time:      '',

  // benefId:
  benefId: 0,

  // dossiers fields:
  id: 0, // will not be set here but by backend
  numDossier: '0', // will not be set here but by backend
  domaine: appConfig.editableDomaine || ' --- ', // always set by defaults should not be overwritten

  regime: '',
  societe: '',
  numSte: '',
  statutBenef: '',
  dateEntreeDispositif: '',
  dateSortieDispositif: '',
  dateTauxPlein: ''
};

const createNewDossierBenefModal = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_SHOW_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time,
      benefId:    action.benefId
    };
  case SUCCESS_SHOW_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   true,
      time:       action.time,
      // reset editable fields:
      regime: initialState.regime,
      societe: initialState.societe,
      numSte: initialState.numSte,
      statutBenef: initialState.statutBenef,
      dateEntreeDispositif: initialState.dateEntree,
      dateSortieDispositif: initialState.dateSortie,
      dateTauxPlein: initialState.dateTauxPlein
    };
  case ERROR_SHOW_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time
    };

  case HIDE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time,
      // reset:
      regime: initialState.regime,
      societe: initialState.societe,
      numSte: initialState.numSte,
      statutBenef: initialState.statutBenef,
      dateEntreeDispositif: initialState.dateEntree,
      dateSortieDispositif: initialState.dateSortie,
      dateTauxPlein: initialState.dateTauxPlein
    };

  case UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      regime: action.regime,
      time: action.time
    };

  case UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      societe: action.societe,
      time: action.time
    };

  case UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      numSte: action.numSte,
      time: action.time
    };

  case UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      statutBenef: action.statutBenef,
      time: action.time
    };

  case UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      dateEntreeDispositif: action.dateEntree,
      time: action.time
    };

  case UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      dateSortieDispositif: action.dateSortie,
      time: action.time
    };

  case UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      dateTauxPlein: action.dateTauxPlein,
      time: action.time
    };

  default:
    return state;
  }
};

export default createNewDossierBenefModal;
