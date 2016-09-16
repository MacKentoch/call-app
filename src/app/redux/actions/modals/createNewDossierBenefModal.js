import moment         from 'moment';
import { appConfig }  from '../../../config';

moment.locale('fr');
const formatDate = appConfig.formatDate.defaut;

// show
export const REQUEST_SHOW_NEW_BENEF_DOSSIER_MODAL = 'REQUEST_SHOW_NEW_BENEF_DOSSIER_MODAL';
export const SUCCESS_SHOW_NEW_BENEF_DOSSIER_MODAL = 'SUCCESS_SHOW_NEW_BENEF_DOSSIER_MODAL';
export const ERROR_SHOW_NEW_BENEF_DOSSIER_MODAL   = 'ERROR_SHOW_NEW_BENEF_DOSSIER_MODAL';

// hide modal
export const HIDE_NEW_BENEF_DOSSIER_MODAL = 'HIDE_NEW_BENEF_DOSSIER_MODAL';

// fields edtion actions:
export const UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL          = 'UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL         = 'UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL         = 'UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL    = 'UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL     = 'UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL     = 'UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL';
export const UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL = 'UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL';

//  -----------------------------------------------------------------
//    show (+ reset editable fields)
//  -----------------------------------------------------------------
const requestShowNewBenefDossierModal = (benefId, time = moment().format(formatDate)) => {
  return {
    type: REQUEST_SHOW_NEW_BENEF_DOSSIER_MODAL,
    benefId,
    time
  };
};
const successShowNewBenefDossierModal = (time = moment().format(formatDate)) => {
  return {
    type: SUCCESS_SHOW_NEW_BENEF_DOSSIER_MODAL,
    time
  };
};
const errorShowNewBenefDossierModal = (error = 'undefined', time = moment().format(formatDate)) => {
  return {
    type: ERROR_SHOW_NEW_BENEF_DOSSIER_MODAL,
    error,
    time
  };
};
export const showNewBenefDossierModal = benefId => dispatch => {
  dispatch(requestShowNewBenefDossierModal(benefId));

  if (!parseInt(benefId, 10) || (parseInt(benefId, 10) <= 0)) {
    dispatch(errorShowNewBenefDossierModal('showNewBenefDossierModal error: benefId is not defined or not valid'));

    return Promise.reject({
      message: 'Erreur: Bénéficiaire non reconnu. La création du dossier est annulée',
      level: 'error',
      showNotification: true
    });
  } else {
    dispatch(successShowNewBenefDossierModal(benefId));

    return Promise.resolve({
      message: '',
      level: 'success',
      showNotification: false
    });
  }
};
//  -----------------------------------------------------------------
//    hide modal (+ reset editable fields)
//  -----------------------------------------------------------------
export const hideNewBenefDossierModal = (time = moment().format(formatDate)) => {
  return {
    type: HIDE_NEW_BENEF_DOSSIER_MODAL,
    time
  };
};

//  -----------------------------------------------------------------
//    Edit new dossier fields (in state)
//  -----------------------------------------------------------------
export const updateRegimeNewBenefDossier = (regime = '', time = moment().format(formatDate)) => {
  if (regime.trim().length > 0) {
    return {
      type: UPDATE_REGIME_NEW_BENEF_DOSSIER_MODAL,
      regime,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateRegimeNewBenefDossier'
  };
};
export const updateSocieteNewBenefDossier = (societe = '', time = moment().format(formatDate)) => {
  if (societe.trim().length > 0) {
    return {
      type: UPDATE_SOCIETE_NEW_BENEF_DOSSIER_MODAL,
      societe,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateSocieteNewBenefDossier'
  };
};
export const updateNumSteNewBenefDossier = (numSte = '', time = moment().format(formatDate)) => {
  if (numSte.trim().length > 0) {
    return {
      type: UPDATE_NUM_STE_NEW_BENEF_DOSSIER_MODAL,
      numSte,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateNumSteNewBenefDossier'
  };
};
export const updateStatutBenefNewBenefDossier = (statutBenef = '', time = moment().format(formatDate)) => {
  if (statutBenef.trim().length > 0) {
    return {
      type: UPDATE_STATUT_BENEF_NEW_BENEF_DOSSIER_MODAL,
      statutBenef,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateStatutBenefNewBenefDossier'
  };
};
export const updateDateEntreeNewBenefDossier = (dateEntree = '', time = moment().format(formatDate)) => {
  if (dateEntree) {
    const dateEntreeStr = moment(dateEntree, 'DD/MM/YYYY').format('DD/MM/YYYY');
    return {
      type: UPDATE_DATE_ENTREE_NEW_BENEF_DOSSIER_MODAL,
      dateEntree: dateEntreeStr,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateEntreeNewBenefDossier'
  };
};
export const updateDateSortieNewBenefDossier = (dateSortie = '', time = moment().format(formatDate)) => {
  if (dateSortie) {
    const dateSortieStr = moment(dateSortie, 'DD/MM/YYYY').format('DD/MM/YYYY');
    return {
      type: UPDATE_DATE_SORTIE_NEW_BENEF_DOSSIER_MODAL,
      dateSortie: dateSortieStr,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateSortieNewBenefDossier'
  };
};
export const updateDateTauxPleinNewBenefDossier = (dateTauxPlein = '', time = moment().format(formatDate)) => {
  if (dateTauxPlein) {
    const dateTauxPleinStr = moment(dateTauxPlein, 'DD/MM/YYYY').format('DD/MM/YYYY');
    return {
      type: UPDATE_DATE_TAUX_PLEIN_NEW_BENEF_DOSSIER_MODAL,
      dateTauxPlein: dateTauxPleinStr,
      time
    };
  }
  return {
    type: 'ERROR',
    from: 'updateDateTauxPleinNewBenefDossier'
  };
};

//  -------------------------------------------------------------------------------------------------------------------------
//    Save new dossiers (to backend)
//       see action creator 'addGestBenefNewDossierIfNeeded' in : ../gestBenf/gestBenefDossiers/gestBenefDossiers
//  -------------------------------------------------------------------------------------------------------------------------
