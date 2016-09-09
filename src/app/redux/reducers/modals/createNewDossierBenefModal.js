import {
  // show hide modal
  SHOW_NEW_BENEF_DOSSIER_MODAL,
  HIDE_NEW_BENEF_DOSSIER_MODAL,

  // fields edtion actions:
  UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL,
  UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL,
}                                                 from '../../actions/modals/createNewDossierBenefModal';

const initialState = {
  isOpened:  false,
  time:      ''
};

const createNewDossierBenefModal = (state = initialState, action) => {
  switch (action.type) {
  case SHOW_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   true,
      time:       action.time
    };
  case HIDE_NEW_BENEF_DOSSIER_MODAL:
    return {
      ...state,
      isOpened:   false,
      time:       action.time
    };
  default:
    return state;
  }
};

export default createNewDossierBenefModal;
